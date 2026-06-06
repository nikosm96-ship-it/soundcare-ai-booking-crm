import Header from './Header.jsx';
import PlaceholderPanel from './PlaceholderPanel.jsx';

const futurePanels = [
  {
    title: 'Booking Form',
    description: 'Future visitor intake area for appointment requests.',
  },
  {
    title: 'CRM Dashboard',
    description: 'Future clinic admin view for reviewing booking requests.',
  },
  {
    title: 'Analytics',
    description: 'Future summary area for simple portfolio CRM metrics.',
  },
  {
    title: 'Mock AI Assistant',
    description: 'Future safe assistant area for non-medical follow-up drafts.',
  },
];

export default function AppShell() {
  return (
    <div className="app">
      <Header />

      <main className="app__main" aria-labelledby="app-title">
        <section className="intro" aria-label="Project status">
          <p className="phase-label">Current phase: React Skeleton</p>
          <p className="safety-note">
            This is a portfolio demo for a hearing-care booking workflow. It is
            not medical advice and should not be used with real patient data.
          </p>
        </section>

        <section className="panel-grid" aria-label="Future feature placeholders">
          {futurePanels.map((panel) => (
            <PlaceholderPanel
              key={panel.title}
              title={panel.title}
              description={panel.description}
            />
          ))}
        </section>
      </main>
    </div>
  );
}
