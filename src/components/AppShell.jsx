import { useState } from 'react';
import BookingDashboard from './BookingDashboard.jsx';
import BookingForm from './BookingForm.jsx';
import Header from './Header.jsx';

export default function AppShell() {
  const [dashboardRefreshKey, setDashboardRefreshKey] = useState(0);

  function refreshDashboard() {
    setDashboardRefreshKey((currentKey) => currentKey + 1);
  }

  return (
    <div className="app">
      <Header />

      <main className="app__main" aria-labelledby="app-title">
        <section className="intro" aria-label="Project status">
          <p className="phase-label">Current phase: CRM booking dashboard</p>
          <p className="safety-note">
            This is a portfolio demo for a hearing-care booking workflow. It is
            not medical advice and should not be used with real patient data.
          </p>
        </section>

        <BookingForm onBookingSaved={refreshDashboard} />
        <BookingDashboard refreshKey={dashboardRefreshKey} />
      </main>
    </div>
  );
}
