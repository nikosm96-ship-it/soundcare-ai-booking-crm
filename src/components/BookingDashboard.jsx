import { useEffect, useState } from 'react';
import { bookingStatusList } from '../data/bookingStatus.js';
import {
  getBookings,
  resetBookings,
  saveBookings,
} from '../services/bookingStorage.js';

function displayValue(value) {
  return value || 'Not provided';
}

export default function BookingDashboard({ refreshKey }) {
  const [bookings, setBookings] = useState(() => getBookings());

  useEffect(() => {
    setBookings(getBookings());
  }, [refreshKey]);

  function handleStatusChange(bookingId, nextStatus) {
    const updatedBookings = bookings.map((booking) => {
      if (booking.id !== bookingId) {
        return booking;
      }

      return {
        ...booking,
        status: nextStatus,
        updatedAt: new Date().toISOString(),
      };
    });

    saveBookings(updatedBookings);
    setBookings(updatedBookings);
  }

  function handleResetBookings() {
    setBookings(resetBookings());
  }

  return (
    <section className="booking-dashboard" aria-labelledby="dashboard-title">
      <div className="section-heading section-heading--with-action">
        <div>
          <p className="phase-label">Phase 4: CRM booking dashboard</p>
          <h2 id="dashboard-title">Booking dashboard</h2>
          <p>
            Review fake demo bookings, change each request status, and reset the
            browser data back to the demo records.
          </p>
        </div>

        <button className="secondary-button" type="button" onClick={handleResetBookings}>
          Reset demo bookings
        </button>
      </div>

      {bookings.length > 0 ? (
        <div className="booking-list">
          {bookings.map((booking) => (
            <article className="booking-card" key={booking.id}>
              <div className="booking-card__header">
                <div>
                  <h3>{displayValue(booking.customerName)}</h3>
                  <p>{displayValue(booking.service)}</p>
                </div>

                <label className="status-control" htmlFor={`status-${booking.id}`}>
                  <span>Status</span>
                  <select
                    id={`status-${booking.id}`}
                    value={booking.status}
                    onChange={(event) =>
                      handleStatusChange(booking.id, event.target.value)
                    }
                  >
                    {bookingStatusList.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <dl className="booking-details">
                <div>
                  <dt>Email</dt>
                  <dd>{displayValue(booking.customerEmail)}</dd>
                </div>
                <div>
                  <dt>Phone</dt>
                  <dd>{displayValue(booking.customerPhone)}</dd>
                </div>
                <div>
                  <dt>Preferred date</dt>
                  <dd>{displayValue(booking.preferredDate)}</dd>
                </div>
                <div>
                  <dt>Preferred time</dt>
                  <dd>{displayValue(booking.preferredTime)}</dd>
                </div>
                <div className="booking-details__full">
                  <dt>Notes</dt>
                  <dd>{displayValue(booking.notes)}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{displayValue(booking.status)}</dd>
                </div>
                <div>
                  <dt>Created at</dt>
                  <dd>{displayValue(booking.createdAt)}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      ) : (
        <p className="empty-state">No demo bookings are saved yet.</p>
      )}
    </section>
  );
}
