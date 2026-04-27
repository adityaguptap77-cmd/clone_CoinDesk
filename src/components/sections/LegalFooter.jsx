import { legalLinks, socialLinks } from '../../api/coindeskData'

export default function LegalFooter() {
  return (
    <section className="legal-footer" aria-label="Legal and social links">
      <div className="legal-inner">
        <div className="legal-top">
          <nav className="legal-links" aria-label="Legal links">
            {legalLinks.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </nav>
          <nav className="social-links" aria-label="Social links">
            {socialLinks.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </nav>
        </div>
        <p className="copyright">&copy; 2026 Snapd, Inc.</p>
        <p className="disclosure">
          <strong>Disclosure &amp; Polices:</strong> Snapd is an <strong>award-winning</strong> media outlet that covers
          the cryptocurrency industry. Its journalists abide by a strict set of
          <a href="#"> editorial policies</a>. Snapd has adopted a set of principles aimed at ensuring the integrity,
          editorial independence and freedom from bias of its publications. Snapd is part of <a href="#">Bullish</a>{' '}
          (NYSE:BLSH), an institutionally focused global digital asset platform that provides market infrastructure and
          information services. Bullish owns and invests in digital asset businesses and digital assets and Snapd
          employees, including journalists, may receive Bullish equity-based compensation.
        </p>
      </div>
    </section>
  )
}
