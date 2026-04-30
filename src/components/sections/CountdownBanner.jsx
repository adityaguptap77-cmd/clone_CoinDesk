import { useEffect, useMemo, useState } from 'react'
import { countdownBanner } from '../../api/coindeskData'
import { ArrowIcon } from '../icons'

const SIXTY_MINUTES_IN_SECONDS = 60 * 60

function formatTimeUnit(value) {
  return String(value).padStart(2, '0')
}

export default function CountdownBanner({ banner = countdownBanner }) {
  const [remainingSeconds, setRemainingSeconds] = useState(banner.durationSeconds ?? SIXTY_MINUTES_IN_SECONDS)

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
        <h1>{banner.title}</h1>
        <p>{banner.message}</p>
      </div>
      <div className="countdown" aria-label={`${remainingSeconds} seconds remaining`}>
        {timeParts.map(([value, label]) => (
          <span key={label}>
            <strong>{value}</strong>
            <small>{label}</small>
          </span>
        ))}
      </div>
      <a className="register-button" href={banner.ctaHref}>
        {banner.ctaLabel} <ArrowIcon />
      </a>
      <button className="close-ad" type="button" aria-label="Close banner">
        x
      </button>
      <div className="banner-bars" aria-hidden="true" />
    </section>
  )
}
