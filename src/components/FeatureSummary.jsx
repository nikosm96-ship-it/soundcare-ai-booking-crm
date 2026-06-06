const features = [
  {
    title: 'Booking requests',
    description: 'A public form captures fake demo appointment requests.',
  },
  {
    title: 'CRM tracking',
    description: 'A dashboard keeps booking details and status updates visible.',
  },
  {
    title: 'Analytics overview',
    description: 'Status counts refresh from the same local demo booking data.',
  },
  {
    title: 'Mock AI draft assistant',
    description: 'Local templates create administrative drafts only.',
  },
];

export default function FeatureSummary() {
  return (
    <section className="feature-summary" aria-labelledby="feature-summary-title">
      <div className="feature-summary__heading">
        <p className="phase-label">Phase 7: Portfolio polish</p>
        <h2 id="feature-summary-title">What this MVP includes</h2>
      </div>

      <div className="feature-summary__grid">
        {features.map((feature) => (
          <article className="feature-summary__item" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
