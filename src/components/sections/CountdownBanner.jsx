import { useEffect, useMemo, useState } from 'react'
import { ArrowIcon } from '../icons'

const TEN_MINUTES_IN_SECONDS = 10 * 60

function formatTimeUnit(value) {
  return String(value).padStart(2, '0')
}

export default function CountdownBanner() {
  const [remainingSeconds, setRemainingSeconds] = useState(TEN_MINUTES_IN_SECONDS)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemainingSeconds((current) => {
        if (current <= 1) {
          window.clearInterval(timer)
          return 0
        }

        return current - 1
      })
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  const timeParts = useMemo(() => {
    const days = Math.floor(remainingSeconds / 86400)
    const hours = Math.floor((remainingSeconds % 86400) / 3600)
    const minutes = Math.floor((remainingSeconds % 3600) / 60)
    const seconds = remainingSeconds % 60

    return [
      [formatTimeUnit(days), 'Day'],
      [formatTimeUnit(hours), 'Hours'],
      [formatTimeUnit(minutes), 'Minutes'],
      [formatTimeUnit(seconds), 'Seconds'],
    ]
  }, [remainingSeconds])

  return (
    <section className="countdown-banner" aria-label="Consensus registration countdown">
      <div>
        <h1>Consensus 2026</h1>
        <p>Last Chance! Register by April 24 at 4 p.m. ET</p>
      </div>
      <div className="countdown" aria-label={`${remainingSeconds} seconds remaining`}>
        {timeParts.map(([value, label]) => (
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
