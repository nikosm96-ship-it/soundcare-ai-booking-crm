import { useEffect, useState } from 'react';
import { bookingStatusList } from '../data/bookingStatus.js';
import {
  getBookings,
  resetBookings,
  updateBookingStatus,
} from '../services/bookingRepository.js';

function displayValue(value) {
  return value || 'Not provided';
}

function formatDateTime(booking) {
  const date = displayValue(booking.preferredDate);
  const time = displayValue(booking.preferredTime);

  return `${date} ${time}`;
}

function formatCreatedDate(value) {
  if (!value) {
    return displayValue(value);
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return displayValue(value);
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
}

function statusClassName(status) {
  return `status-badge status-badge--${status.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
}

export default function BookingDashboard({ refreshKey, onBookingsChanged }) {
  const [bookings, setBookings] = useState(() => getBookings());

  useEffect(() => {
    setBookings(getBookings());
  }, [refreshKey]);

  function handleStatusChange(bookingId, nextStatus) {
    const updatedBookings = updateBookingStatus(bookingId, nextStatus);
    setBookings(updatedBookings);

    if (onBookingsChanged) {
      onBookingsChanged();
    }
  }

  function handleResetBookings() {
    setBookings(resetBookings());

    if (onBookingsChanged) {
      onBookingsChanged();
    }
  }

  return (
    <section className="booking-dashboard" aria-labelledby="dashboard-title">
      <div className="section-heading section-heading--with-action">
        <div>
          <h2 id="dashboard-title">Recent bookings</h2>
          <p>Review requests, contact details, appointment preferences, and current scheduling status.</p>
        </div>

        <div className="admin-utilities" aria-label="Admin utilities">
          <span>Admin utilities</span>
          <button className="utility-button" type="button" onClick={handleResetBookings}>
            Restore booking list
          </button>
        </div>
      </div>

      {bookings.length > 0 ? (
        <div className="booking-table-wrap">
          <table className="booking-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Service</th>
                <th>Date &amp; Time</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Notes</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>
                    <strong>{displayValue(booking.customerName)}</strong>
                  </td>
                  <td>{displayValue(booking.service)}</td>
                  <td>{formatDateTime(booking)}</td>
                  <td>
                    <span>{displayValue(booking.customerEmail)}</span>
                    <small>{displayValue(booking.customerPhone)}</small>
                  </td>
                  <td>
                    <span className={statusClassName(booking.status)}>
                      {displayValue(booking.status)}
                    </span>
                    <label className="status-control" htmlFor={`status-${booking.id}`}>
                      <span>Update status</span>
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
                  </td>
                  <td>{displayValue(booking.notes)}</td>
                  <td>{formatCreatedDate(booking.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="empty-state">No bookings are saved yet.</p>
      )}
    </section>
  );
}
