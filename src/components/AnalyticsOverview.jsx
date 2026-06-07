import { useEffect, useState } from 'react';
import { BOOKING_STATUSES } from '../data/bookingStatus.js';
import { getBookings } from '../services/bookingRepository.js';

const analyticsCards = [
  {
    label: 'Total Bookings',
    getValue: (summary) => summary.total,
  },
  {
    label: 'New',
    status: BOOKING_STATUSES.NEW,
  },
  {
    label: 'Scheduled',
    status: BOOKING_STATUSES.SCHEDULED,
  },
  {
    label: 'Completed',
    status: BOOKING_STATUSES.COMPLETED,
  },
  {
    label: 'Follow-up',
    status: BOOKING_STATUSES.FOLLOW_UP,
  },
  {
    label: 'Cancelled',
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
      <div className="section-heading section-heading--compact">
        <h2 id="analytics-title">Overview</h2>
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
