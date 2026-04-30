import { ArrowIcon } from '../icons'

export default function TopNewsSection({ featured, latest, lowerLatest, markets }) {
  const allLatest = [...latest, ...lowerLatest]

  return (
    <div className="content-shell">
      <aside className="latest-panel" aria-label="Latest crypto news">
        <div className="panel-title">
          <span className="rss-icon" aria-hidden="true" />
          <h2>Latest Crypto News</h2>
          <ArrowIcon />
        </div>
        <div className="today-rule">
          <strong>Today</strong>
          <span />
        </div>
        <div className="news-stack">
          {allLatest.map((item) => (
            <article className="latest-item" key={`${item.time}-${item.title}`}>
              <time>{item.time}</time>
              <p className={`sentiment ${item.tone === 'Positive' ? 'positive' : ''}`}>
                <span /> {item.tone ?? 'Negative'}
                {item.tag && <mark>{item.tag}</mark>}
                {item.tag && <em>+1 Asset</em>}
              </p>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
            </article>
          ))}
        </div>
      </aside>

      <section className="main-feed">
        <div className="market-row" aria-label="Market prices">
          {markets.map(([name, price, drop]) => (
            <article className="market-card" key={name}>
              <h3>{name}</h3>
              <p>{price}</p>
              <span>▼ {drop}</span>
            </article>
          ))}
        </div>

        <div className="section-heading">
          <h2>Featured Stories</h2>
          <a href="#">
            View all stories <ArrowIcon />
          </a>
        </div>

        <div className="topic-row" aria-label="Story topics">
          <button type="button" className="active">
            All
          </button>
          <button type="button">Consensus Miami 2026</button>
          <button type="button">
            <span className="coin bitcoin">B</span> Bitcoin News
          </button>
          <button type="button">
            <span className="coin eth">◆</span> Ethereum News
          </button>
          <button type="button">
            <span className="coin xrp">X</span> XRP News
          </button>
        </div>

        <article className="lead-story">
          <div className="lead-image" role="img" aria-label="Close up of a fountain pen on paper" />
          <div className="lead-copy">
            <p>Markets</p>
            <h2>Crypto funds see cautious inflows as investors weigh rate-cut odds</h2>
            <span>Latest market moves, context and analysis from Snapd.</span>
          </div>
        </article>

        <div className="story-grid">
          {featured.map((story) => (
            <article key={story.title}>
              <p>{story.kicker}</p>
              <h3>{story.title}</h3>
              <span>{story.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <aside className="right-rail" aria-label="Video and research">
        <article className="video-card">
          <div className="video-thumb">
            <div className="host left" />
            <div className="host right" />
            <span>CleanSpark</span>
          </div>
          <h2>Blockspace: Finding Satoshi Documentary, Justin Sun Sues...</h2>
          <a href="#">
            Latest Videos <ArrowIcon />
          </a>
        </article>

        <article className="research-card">
          <div className="research-strip">Discover what's new in our Research Hub!</div>
          <div className="research-body">
            <h2>
              Research <ArrowIcon />
            </h2>
            <div className="research-item">
              <div className="report-cover">
                <span />
              </div>
              <h3>Oil, ETFs, and the TradFi Perp Land Grab</h3>
            </div>
          </div>
        </article>
      </aside>
    </div>
  )
}
