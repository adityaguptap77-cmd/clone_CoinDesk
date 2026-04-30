import { ArrowIcon, EnvelopeIcon } from '../icons'
import { makePageLink } from '../../pages/pageRegistry'

export default function LowerNewsSection({ newsLinks, thumbnailStories }) {
  return (
    <div className="lower-shell">
      <aside className="lower-ad-card" aria-label="Advertisement">
        <span className="lower-ad-label">Sponsored</span>
        <div className="lower-ad-art" aria-hidden="true">
          <strong>Snapd</strong>
          <p>Stay ahead of the market</p>
          <div className="lower-ad-bars" />
        </div>
        <div className="lower-ad-copy">
          <h2>Discover deeper crypto market coverage and daily intelligence.</h2>
          <a href={makePageLink('Research Hub')}>Learn more</a>
        </div>
        <div className="lower-ad-list">
          <article>
            <span>Featured</span>
            <h3>Daily market briefings for traders, builders, and crypto researchers.</h3>
          </article>
          <article>
            <span>Partner Insight</span>
            <h3>Institutional-grade reports, data snapshots, and event access in one place.</h3>
          </article>
        </div>
      </aside>

      <section className="deep-feed" aria-label="More market stories">
        <article className="headline-story">
          <div className="headline-image" aria-hidden="true" />
          <p>Markets</p>
          <h2>The DAT collapse: Pantera wants Satsuma to dump its bitcoin as shares crash 99%</h2>
          <time>3 hours ago</time>
        </article>

        <div className="brief-list">
          {newsLinks.map(([kicker, title]) => (
            <article key={title}>
              <p>{kicker}</p>
              <h3>{title}</h3>
            </article>
          ))}
        </div>

        <div className="thumbnail-row">
          {thumbnailStories.map(([type, title]) => (
            <article key={title}>
              <div className={`thumb-art ${type}`} />
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <aside className="newsletter-card" aria-label="Newsletter signup">
        <h2>
          Newsletters <ArrowIcon />
        </h2>
        <div className="newsletter-feature">
          <div className="newsletter-art">
            <span />
          </div>
          <div>
            <h3>Snapd Headlines</h3>
            <p>The biggest crypto news and ideas of the day.</p>
            <a href={makePageLink('Snapd Headlines')}>Preview</a>
          </div>
        </div>
        <label>
          <EnvelopeIcon />
          <input type="email" placeholder="Enter email address" />
        </label>
        <button type="button">Sign up</button>
        <p className="newsletter-note">
          By signing up, you will receive emails about Snapd products and you agree to our
          <a href={makePageLink('Terms of Use')}> terms & conditions</a> and{' '}
          <a href={makePageLink('Privacy')}>privacy policy</a>.
        </p>
      </aside>
    </div>
  )
}
