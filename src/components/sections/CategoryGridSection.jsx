import { categorySections } from '../../api/coindeskData'
import { ArrowIcon } from '../icons'

export default function CategoryGridSection() {
  return (
    <section className="category-grid-section" aria-label="CoinDesk category stories">
      {categorySections.map((category) => (
        <article className="category-card" key={category.title}>
          <h2>
            {category.title} <ArrowIcon />
          </h2>
          <div className="category-layout">
            <div className="category-lead">
              <div className={`category-art ${category.art}`} />
              <h3>{category.lead}</h3>
              <time>{category.time}</time>
            </div>
            <div className="category-links">
              {category.links.map((link) => (
                <a href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
