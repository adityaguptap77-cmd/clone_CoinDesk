import { mostRead, opinionItems } from '../../api/coindeskData'
import { ArrowIcon } from '../icons'

export default function PopularSection() {
  return (
    <section className="popular-section" aria-label="Opinion and most read stories">
      <aside className="opinion-card">
        <h2>
          Opinion <ArrowIcon />
        </h2>
        <div className="opinion-list">
          {opinionItems.map(([author, title], index) => (
            <article key={title}>
              <div>
                <p>{author}</p>
                <h3>{title}</h3>
              </div>
              <span className={`opinion-avatar opinion-${index + 1}`} />
            </article>
          ))}
        </div>
      </aside>

      <section className="most-read-card">
        <h2>Most Read</h2>
        <div className="most-read-layout">
          <article className="most-read-lead">
            <div className="conference-photo" aria-hidden="true">
              <span />
            </div>
            <div className="ranked-title">
              <span>01.</span>
              <div>
                <h3>{mostRead[0].title}</h3>
                <p>{mostRead[0].excerpt}</p>
                <time>{mostRead[0].date}</time>
              </div>
            </div>
          </article>

          <div className="most-read-list">
            {mostRead.slice(1).map((story, index) => (
              <article key={story.title}>
                <span>{String(index + 2).padStart(2, '0')}.</span>
                <div>
                  <h3>{story.title}</h3>
                  <time>{story.date}</time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}
