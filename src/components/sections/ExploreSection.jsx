import { exploreVideos, priceRows } from '../../api/coindeskData'
import { ArrowIcon } from '../icons'
import Logo from '../Logo'

const speakers = [
  ['Michael Saylor', 'Founder & Executive Chairman', 'STRATEGY'],
  ['Anatoly Yakovenko', 'Co-Founder', 'SOLANA'],
  ['Amy Oldenburg', 'Managing Director', 'MORGAN STANLEY'],
]

export default function ExploreSection() {
  return (
    <section className="explore-section" aria-label="Explore more from CoinDesk">
      <div className="explore-heading">
        <h2>Explore more from CoinDesk</h2>
        <div className="carousel-controls" aria-label="Carousel controls">
          <button type="button" aria-label="Previous">
            ←
          </button>
          <button type="button" aria-label="Next">
            →
          </button>
        </div>
      </div>

      <div className="explore-grid">
        <article className="consensus-card">
          <div className="consensus-top">
            <strong>consensus</strong>
            <span>May 5-7, 2026 | Miami</span>
          </div>
          <div className="consensus-main">
            <h3>The #1 Destination for Deal Flow</h3>
            <p>MBCC · Miami, florida</p>
            <div className="pink-blocks" aria-hidden="true" />
          </div>
          <div className="speaker-spotlight">
            <h4>Speaker Spotlight</h4>
            {speakers.map(([name, role, company], index) => (
              <div className="speaker" key={name}>
                <span className={`speaker-avatar speaker-${index + 1}`} />
                <div>
                  <strong>{name}</strong>
                  <p>{role}</p>
                  <em>{company}</em>
                </div>
              </div>
            ))}
            <a href="#">
              Learn more <ArrowIcon />
            </a>
          </div>
        </article>

        <article className="prices-card">
          <h3>
            Prices <ArrowIcon />
          </h3>
          <p>Explore all 300+ cryptocurrency prices.</p>
          <div className="price-list">
            {priceRows.map(([symbol, price, change, tone], index) => (
              <div className="price-row" key={symbol}>
                <span>{index + 1}</span>
                <i className={tone}>{symbol.slice(0, 1)}</i>
                <strong>{symbol}</strong>
                <data>{price}</data>
                <em className={change.startsWith('+') ? 'up' : ''}>{change}</em>
              </div>
            ))}
          </div>
          <p className="api-link">
            Need more data? Explore <a href="#">CoinDesk Data API</a>
          </p>
        </article>

        <article className="app-promo-card">
          <Logo />
          <h3>Never miss a market move</h3>
          <div className="store-buttons">
            <span>
              Download on the
              <br />
              App Store
            </span>
            <span>
              GET IT ON
              <br />
              Google Play
            </span>
          </div>
          <div className="phone-mockup">
            <div className="phone-screen">
              <small>9:41</small>
              <h4>Push Notifications</h4>
              {['Breaking News', 'Markets', 'Finance'].map((item, index) => (
                <p key={item}>
                  {item}
                  <span className={index === 0 ? 'on' : ''} />
                </p>
              ))}
            </div>
            <div className="push-note first">
              <strong>Opinion</strong>
              What the NYT and Washington Post Op-Eds Get Wrong About Crypto
            </div>
            <div className="push-note second">
              <strong>Watchlist</strong>
              Bitcoin (BTC) is up <em>5.2%</em> in the last 24 hours.
            </div>
          </div>
        </article>

        <aside className="explore-video-card" aria-label="More videos">
          <h3>
            <span className="play-dot" /> Videos <ArrowIcon />
          </h3>
          <div className="video-strip-list">
            {exploreVideos.map(([type, title]) => (
              <article key={title}>
                <div className={`mini-video ${type}`}>
                  <span>CoinDesk</span>
                </div>
                <p>{title}</p>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
