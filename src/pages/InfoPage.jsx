import { allPages } from './pageRegistry'

function RelatedPages({ currentPath }) {
  const relatedPages = allPages.filter((page) => page.path !== currentPath).slice(0, 6)

  return (
    <div className="page-related-grid">
      {relatedPages.map((page) => (
        <a href={page.path} key={page.path}>
          <strong>{page.title}</strong>
          <span>{page.summary}</span>
        </a>
      ))}
    </div>
  )
}

export default function InfoPage({ page }) {
  return (
    <main className="info-page">
      <section className="info-hero">
        <p>Snapd</p>
        <h1>{page.title}</h1>
        <span>{page.summary}</span>
      </section>

      <section className="info-content">
        <div className="info-copy">
          <h2>Latest Overview</h2>
          <p>
            This page is ready for backend-managed content, article lists, contact forms, product details, or editorial
            collections. It uses the same site chrome and navigation as the homepage so every footer and menu link now
            resolves to a real destination.
          </p>
          <p>
            Snapd can expand this page with MongoDB-backed records, custom modules, and API-driven listings while keeping
            the route stable at <strong>{page.path}</strong>.
          </p>
        </div>

        <aside className="info-panel">
          <h2>Page Tools</h2>
          <a href="/">Back to homepage</a>
          <a href="/sitemap">View sitemap</a>
          <a href="/contact-us">Contact Snapd</a>
        </aside>
      </section>

      <section className="page-related">
        <h2>More from Snapd</h2>
        <RelatedPages currentPath={page.path} />
      </section>
    </main>
  )
}
