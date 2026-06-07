import { useState } from 'react';
import AnalyticsOverview from './AnalyticsOverview.jsx';
import BookingDashboard from './BookingDashboard.jsx';
import BookingForm from './BookingForm.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import MockAiAssistant from './MockAiAssistant.jsx';

export default function AppShell() {
  const [bookingsRefreshKey, setBookingsRefreshKey] = useState(0);
  const [currentView, setCurrentView] = useState('booking');

  function refreshBookings() {
    setBookingsRefreshKey((currentKey) => currentKey + 1);
  }

  return (
    <div className={currentView === 'admin' ? 'app app--admin' : 'app'} id="top">
      {currentView === 'booking' ? (
        <>
          <Header currentView={currentView} onViewChange={setCurrentView} />
          <main className="client-page" aria-labelledby="app-title">
            <section className="client-hero">
              <div className="client-hero__copy">
                <h1 id="app-title">Request an Appointment</h1>
                <p>
                  Tell us what you need and when you would like to visit. Our
                  team will review your request and contact you soon.
                </p>
                <div className="client-hero__details" aria-label="Client support">
                  <span>Hearing tests</span>
                  <span>Device care</span>
                  <span>Follow-up visits</span>
                </div>
              </div>

              <div className="clinic-panel" aria-label="Reception preview">
                <div className="clinic-panel__window">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="clinic-panel__desk">
                  <div className="clinic-panel__screen">
                    <strong>Today</strong>
                    <span>Care team reviewing requests</span>
                  </div>
                  <div className="clinic-panel__vase" />
                </div>
              </div>
            </section>

            <BookingForm onBookingSaved={refreshBookings} />

            <section className="client-help" aria-label="Contact and urgent care">
              <div>
                <h2>Need help choosing a service?</h2>
                <p>
                  Call the front desk or add a note with your request. A care
                  coordinator can help match your appointment to the right team member.
                </p>
              </div>
              <p className="urgent-note">
                For urgent symptoms or sudden hearing changes, contact emergency
                services or a qualified clinician directly.
              </p>
            </section>
          </main>
          <Footer />
        </>
      ) : (
        <div className="admin-layout">
          <aside className="admin-sidebar" aria-label="Admin navigation">
            <a className="brand-mark brand-mark--sidebar" href="#top">
              <span className="brand-mark__symbol">SC</span>
              <span>
                <strong>SoundCare</strong>
                <small>Hearing Care</small>
              </span>
            </a>
            <nav className="admin-sidebar__nav">
              {['Dashboard', 'Bookings', 'Calendar', 'Services', 'Reports', 'Settings'].map(
                (item, index) => (
                  <button
                    className={index < 2 ? 'admin-sidebar__item is-active' : 'admin-sidebar__item'}
                    type="button"
                    key={item}
                    disabled={index > 1}
                  >
                    <span aria-hidden="true">{item.slice(0, 1)}</span>
                    {item}
                  </button>
                ),
              )}
            </nav>
            <button
              className="admin-sidebar__switch"
              type="button"
              onClick={() => setCurrentView('booking')}
            >
              Book Appointment
            </button>
          </aside>

          <main className="admin-main" aria-labelledby="admin-title">
            <div className="admin-topbar">
              <div>
                <p>Operations</p>
                <h1 id="admin-title">Dashboard</h1>
              </div>
              <div className="admin-topbar__tools" aria-label="Admin tools">
                <button type="button" aria-label="Notifications">!</button>
                <span aria-label="Admin profile">SC</span>
              </div>
            </div>

            <AnalyticsOverview refreshKey={bookingsRefreshKey} />
            <BookingDashboard
              refreshKey={bookingsRefreshKey}
              onBookingsChanged={refreshBookings}
            />
            <MockAiAssistant refreshKey={bookingsRefreshKey} />
          </main>
        </div>
      )}
    </div>
  );
}
