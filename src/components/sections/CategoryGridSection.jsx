import { ArrowIcon } from '../icons'
import { makePageLink } from '../../pages/pageRegistry'

export default function CategoryGridSection({ categorySections }) {
  return (
    <section className="category-grid-section" aria-label="Snapd category stories">
      {categorySections.map((category) => (
        <article className="category-card" key={category.title}>
          <h2>
            <a href={makePageLink(category.title)}>
              {category.title} <ArrowIcon />
            </a>
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
