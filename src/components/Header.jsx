export default function Header({ currentView, onViewChange }) {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <a className="brand-mark" href="#top" aria-label="SoundCare Hearing Care home">
          <span className="brand-mark__symbol">SC</span>
          <span>
            <strong>SoundCare</strong>
            <small>Hearing Care</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <button
            className={currentView === 'booking' ? 'site-nav__item is-active' : 'site-nav__item'}
            type="button"
            onClick={() => onViewChange('booking')}
          >
            Book Appointment
          </button>
          <button
            className={currentView === 'admin' ? 'site-nav__item is-active' : 'site-nav__item'}
            type="button"
            onClick={() => onViewChange('admin')}
          >
            Admin Dashboard
          </button>
        </nav>
      </div>
    </header>
  );
}
