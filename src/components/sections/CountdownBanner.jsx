import { ArrowIcon } from '../icons'

export default function CountdownBanner() {
  return (
    <section className="countdown-banner" aria-label="Consensus registration countdown">
      <div>
        <h1>Consensus 2026</h1>
        <p>Last Chance! Register by April 24 at 4 p.m. ET</p>
      </div>
      <div className="countdown" aria-label="1 day 6 hours 12 minutes 12 seconds">
        {[
          ['01', 'Day'],
          ['06', 'Hours'],
          ['12', 'Minutes'],
          ['12', 'Seconds'],
        ].map(([value, label]) => (
          <span key={label}>
            <strong>{value}</strong>
            <small>{label}</small>
          </span>
        ))}
      </div>
      <a className="register-button" href="#">
        Register now <ArrowIcon />
      </a>
      <button className="close-ad" type="button" aria-label="Close banner">
        x
      </button>
      <div className="banner-bars" aria-hidden="true" />
    </section>
  )
}
