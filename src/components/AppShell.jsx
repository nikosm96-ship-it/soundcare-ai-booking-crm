import { useState } from 'react';
import AnalyticsOverview from './AnalyticsOverview.jsx';
import BookingDashboard from './BookingDashboard.jsx';
import BookingForm from './BookingForm.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import MockAiAssistant from './MockAiAssistant.jsx';

const adminNavItems = [
  {
    label: 'Dashboard',
    href: '#admin-title',
    icon: 'D',
  },
  {
    label: 'Recent bookings',
    href: '#dashboard-title',
    icon: 'B',
  },
  {
    label: 'Message drafts',
    href: '#draft-assistant-title',
    icon: 'M',
  },
];

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

              <div className="clinic-preview" aria-label="Clinic appointment overview">
                <img
                  src="/clinic-reception.jpg"
                  alt="Modern hearing care reception area"
                />
                <div className="clinic-preview__content">
                  <div>
                    <p>Average response</p>
                    <strong>Same business day</strong>
                  </div>
                  <div>
                    <p>Front desk hours</p>
                    <strong>Mon-Fri, 09:00-17:00</strong>
                  </div>
                </div>
                <div className="clinic-preview__footer">
                  <span>Hearing tests</span>
                  <span>Device consultations</span>
                  <span>Follow-up visits</span>
                </div>
              </div>
            </section>

            <BookingForm onBookingSaved={refreshBookings} />

            <section className="client-help" aria-label="Contact and urgent care">
              <div className="client-help__copy">
                <h2>Need help choosing a service?</h2>
                <p>
                  Call the front desk or add a note with your request. A care
                  coordinator can help match your appointment to the right team member.
                </p>
              </div>
              <div className="client-help__cards">
                <article>
                  <span>Call reception</span>
                  <strong>(555) 123-4567</strong>
                  <small>Mon-Fri, 09:00-17:00</small>
                </article>
                <article className="urgent-note">
                  <span>Urgent concerns</span>
                  <p>
                    Contact emergency services or a qualified clinician directly.
                  </p>
                </article>
              </div>
            </section>
          </main>
          <Footer />
        </>
      ) : (
        <div className="admin-layout">
          <aside className="admin-sidebar" aria-label="Admin navigation">
            <a
              className="brand-mark brand-mark--sidebar"
              href="#top"
              aria-label="SoundCare Hearing Care home"
              onClick={() => setCurrentView('booking')}
            >
              <span className="brand-mark__symbol">SC</span>
              <span>
                <strong>SoundCare</strong>
                <small>Hearing Care</small>
              </span>
            </a>
            <nav className="admin-sidebar__nav">
              {adminNavItems.map((item) => (
                <a className="admin-sidebar__item" href={item.href} key={item.label}>
                  <span aria-hidden="true">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          <main className="admin-main" aria-labelledby="admin-title">
            <div className="admin-topbar">
              <div>
                <p>Operations</p>
                <h1 id="admin-title">Dashboard</h1>
              </div>
              <div className="admin-topbar__status" aria-label="Admin status">
                <span>Booking desk active</span>
                <strong>Today</strong>
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
