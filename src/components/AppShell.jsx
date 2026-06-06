import { useState } from 'react';
import AnalyticsOverview from './AnalyticsOverview.jsx';
import BookingDashboard from './BookingDashboard.jsx';
import BookingForm from './BookingForm.jsx';
import Header from './Header.jsx';
import MockAiAssistant from './MockAiAssistant.jsx';

export default function AppShell() {
  const [bookingsRefreshKey, setBookingsRefreshKey] = useState(0);

  function refreshBookings() {
    setBookingsRefreshKey((currentKey) => currentKey + 1);
  }

  return (
    <div className="app">
      <Header />

      <main className="app__main" aria-labelledby="app-title">
        <section className="intro" aria-label="Project status">
          <p className="phase-label">Current phase: Mock AI assistant</p>
          <p className="safety-note">
            This is a portfolio demo for a hearing-care booking workflow. It is
            not medical advice and should not be used with real patient data.
          </p>
        </section>

        <AnalyticsOverview refreshKey={bookingsRefreshKey} />
        <BookingForm onBookingSaved={refreshBookings} />
        <MockAiAssistant refreshKey={bookingsRefreshKey} />
        <BookingDashboard
          refreshKey={bookingsRefreshKey}
          onBookingsChanged={refreshBookings}
        />
      </main>
    </div>
  );
}
