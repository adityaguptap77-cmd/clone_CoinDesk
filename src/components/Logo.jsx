export default function Logo() {
  return (
    <a className="brand" href="/" aria-label="Snapd home">
      <span className="brand-mark" aria-hidden="true">
        {Array.from({ length: 9 }).map((_, index) => (
          <i key={index} />
        ))}
      </span>
      <span>SNAPD</span>
    </a>
  )
}
