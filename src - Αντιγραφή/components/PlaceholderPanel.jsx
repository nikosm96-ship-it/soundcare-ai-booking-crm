export default function PlaceholderPanel({ title, description }) {
  return (
    <article className="placeholder-panel">
      <h2>{title}</h2>
      <p>{description}</p>
      <span aria-label={`${title} is not implemented yet`}>Planned</span>
    </article>
  );
}
