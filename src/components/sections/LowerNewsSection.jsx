import { newsLinks, thumbnailStories } from '../../api/coindeskData'
import { ArrowIcon, EnvelopeIcon } from '../icons'

export default function LowerNewsSection() {
  return (
    <div className="lower-shell">
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
            <h3>CoinDesk Headlines</h3>
            <p>The biggest crypto news and ideas of the day.</p>
            <a href="#">Preview</a>
          </div>
        </div>
        <label>
          <EnvelopeIcon />
          <input type="email" placeholder="Enter email address" />
        </label>
        <button type="button">Sign up</button>
        <p className="newsletter-note">
          By signing up, you will receive emails about CoinDesk products and you agree to our
          <a href="#"> terms & conditions</a> and <a href="#">privacy policy</a>.
        </p>
      </aside>
    </div>
  )
}
