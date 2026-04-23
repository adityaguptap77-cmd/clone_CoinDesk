import { footerColumns } from '../../api/coindeskData'
import Logo from '../Logo'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <Logo />
        <div className="footer-rule" />
        <div className="footer-grid">
          {footerColumns.map((column, columnIndex) => (
            <div className="footer-column" key={columnIndex}>
              {column.map(([heading, links]) => (
                <nav key={heading} aria-label={heading}>
                  <h2>{heading}</h2>
                  {links.map((link) => (
                    <a href="#" key={link}>
                      {link}
                    </a>
                  ))}
                </nav>
              ))}
            </div>
          ))}
          <div className="footer-stores" aria-label="Download CoinDesk app">
            <a href="#">
              Download on the
              <br />
              App Store
            </a>
            <a href="#">
              GET IT ON
              <br />
              Google Play
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
