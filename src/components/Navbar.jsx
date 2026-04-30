import { ArrowIcon, GlobeIcon, SearchIcon } from './icons'
import Logo from './Logo'
import { makePageLink } from '../pages/pageRegistry'

function NavMegaMenu({ menu }) {
  const menuClass = menu.eventCards ? 'events-menu' : menu.columns ? `columns-menu columns-${menu.columns.length}` : ''

  return (
    <div className={`nav-mega ${menuClass}`} role="menu">
      <div className="nav-mega-title">
        <span className="mini-brand-mark" aria-hidden="true" />
        <span>/</span>
        <strong>{menu.label}</strong>
      </div>

      {menu.dataItems && (
        <div className="nav-mega-grid">
          {menu.dataItems.map((item) => (
            <a href={makePageLink(item.title)} role="menuitem" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.description}</span>
            </a>
          ))}
        </div>
      )}

      {menu.columns && (
        <div className="nav-columns">
          {menu.columns.map((column) => (
            <div className="nav-column" key={column.heading}>
              <h3>{column.heading}</h3>
              <div>
                {column.links.map((link) => (
                  <a href={makePageLink(link)} role="menuitem" key={link}>
                    {link}
                  </a>
                ))}
              </div>
              {column.action && (
                <a className="nav-column-action" href={makePageLink(column.action)} role="menuitem">
                  {column.action} <ArrowIcon />
                </a>
              )}
            </div>
          ))}
        </div>
      )}

      {menu.eventCards && (
        <div className="event-menu-grid">
          {menu.eventCards.map((event) => (
            <a className="event-menu-card" href={makePageLink(event.title)} role="menuitem" key={event.title}>
              <h3>{event.title}</h3>
              <span className={`event-menu-art ${event.type}`}>
                {event.type === 'consensus' ? (
                  <>
                    <strong>consensus</strong>
                    <em>May 5-7, 2026</em>
                    <small>Miami</small>
                  </>
                ) : (
                  <>
                    <strong>
                      Snapd: Policy
                      <br />
                      &amp; Regulation
                    </strong>
                    <em>September 24, 2026</em>
                    <small>Washington, D.C.</small>
                  </>
                )}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

function NavItem({ label, menu }) {
  if (!menu) {
    return <a href={makePageLink(label)}>{label}</a>
  }

  return (
    <div className="nav-item has-menu">
      <button className="nav-trigger" type="button" aria-haspopup="true">
        {label}
      </button>
      <NavMegaMenu menu={menu} />
    </div>
  )
}

export default function Navbar({ navMenus, onSearchOpen }) {
  return (
    <header className="site-header">
      <Logo />
      <nav className="primary-nav" aria-label="Primary navigation">
        <NavItem label="News" menu={navMenus.News} />
        <NavItem label="Video" menu={navMenus.Video} />
        <NavItem label="Prices" />
        <NavItem label="Research" />
        <NavItem label="Consensus 2026" menu={navMenus.Events} />
        <NavItem label="Data & Indices" menu={navMenus['Data & Indices']} />
        <NavItem label="Sponsored" />
      </nav>
      <div className="header-actions">
        <button type="button" aria-label="Search" onClick={onSearchOpen}>
          <SearchIcon />
        </button>
        <button type="button" aria-label="Language">
          <GlobeIcon />
        </button>
        <div className="account-menu">
          <button className="profile-button" type="button" aria-label="Account" aria-haspopup="true">
            <span />
          </button>
          <div className="account-popover" role="menu">
            <a href="#" role="menuitem">
              Sign In
            </a>
            <a href="#" role="menuitem">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
