import { useEffect, useState } from 'react';
import { BOOKING_STATUSES } from '../data/bookingStatus.js';
import { getBookings } from '../services/bookingStorage.js';

const analyticsCards = [
  {
    label: 'Total bookings',
    getValue: (summary) => summary.total,
  },
  {
    label: 'New bookings',
    status: BOOKING_STATUSES.NEW,
  },
  {
    label: 'Scheduled bookings',
    status: BOOKING_STATUSES.SCHEDULED,
  },
  {
    label: 'Completed bookings',
    status: BOOKING_STATUSES.COMPLETED,
  },
  {
    label: 'Follow-up bookings',
    status: BOOKING_STATUSES.FOLLOW_UP,
  },
  {
    label: 'Cancelled bookings',
    status: BOOKING_STATUSES.CANCELLED,
  },
];

export function getAnalyticsSummary(bookings) {
  const statusCounts = Object.values(BOOKING_STATUSES).reduce(
    (counts, status) => ({
      ...counts,
      [status]: 0,
    }),
    {},
  );

  bookings.forEach((booking) => {
    if (booking.status in statusCounts) {
      statusCounts[booking.status] += 1;
    }
  });

  return {
    total: bookings.length,
    statusCounts,
  };
}

export default function AnalyticsOverview({ refreshKey }) {
  const [bookings, setBookings] = useState(() => getBookings());

  useEffect(() => {
    setBookings(getBookings());
  }, [refreshKey]);

  const summary = getAnalyticsSummary(bookings);

  return (
    <section className="analytics-overview" aria-labelledby="analytics-title">
      <div className="section-heading">
        <p className="phase-label">Demo analytics</p>
        <h2 id="analytics-title">Analytics overview</h2>
        <p>
          See a simple count of fake booking requests by status. These numbers
          come from the same browser localStorage data as the dashboard.
        </p>
      </div>

      <div className="analytics-grid">
        {analyticsCards.map((card) => {
          const value = card.getValue
            ? card.getValue(summary)
            : summary.statusCounts[card.status];

          return (
            <article className="analytics-card" key={card.label}>
              <p>{card.label}</p>
              <strong>{value}</strong>
            </article>
          );
        })}
      </div>
    </section>
  );
}
