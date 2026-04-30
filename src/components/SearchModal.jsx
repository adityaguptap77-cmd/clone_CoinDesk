import { SearchIcon } from './icons'

export default function SearchModal({ searchAssets, searchNews, onClose }) {
  return (
    <div className="search-overlay" role="presentation" onMouseDown={onClose}>
      <section
        className="search-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Search Snapd"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="search-input-row">
          <SearchIcon />
          <input autoFocus type="search" placeholder="Search all assets or news articles" />
          <button type="button" aria-label="Close search" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="search-section-heading">
          <h2>Assets</h2>
          <a href="#">See more</a>
        </div>
        <div className="search-assets-list">
          {searchAssets.map(([name, ticker, price, change, icon]) => (
            <a href="#" className="search-asset-row" key={ticker}>
              <span className={`search-coin ${icon}`}>{ticker.slice(0, 1)}</span>
              <strong>{name}</strong>
              <small>{ticker}</small>
              <data>{price}</data>
              <em className={change.startsWith('-') ? '' : 'positive'}>{change}</em>
            </a>
          ))}
        </div>

        <div className="search-section-heading news-heading">
          <h2>News</h2>
          <a href="#">See more</a>
        </div>
        <div className="search-news-list">
          {searchNews.map(([title, time, art]) => (
            <a href="#" className="search-news-row" key={title}>
              <div>
                <h3>{title}</h3>
                <time>{time}</time>
              </div>
              <span className={`search-news-art ${art}`} />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
