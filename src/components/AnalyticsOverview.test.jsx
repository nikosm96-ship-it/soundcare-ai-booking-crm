import { describe, expect, test } from 'vitest';
import { BOOKING_STATUSES } from '../data/bookingStatus.js';
import { getAnalyticsSummary } from './AnalyticsOverview.jsx';

describe('analytics summary', () => {
  test('total bookings count is correct', () => {
    const summary = getAnalyticsSummary([
      { id: 'booking-1', status: BOOKING_STATUSES.NEW },
      { id: 'booking-2', status: BOOKING_STATUSES.SCHEDULED },
      { id: 'booking-3', status: BOOKING_STATUSES.CANCELLED },
    ]);

    expect(summary.total).toBe(3);
  });

  test('status counts are correct', () => {
    const summary = getAnalyticsSummary([
      { id: 'booking-1', status: BOOKING_STATUSES.NEW },
      { id: 'booking-2', status: BOOKING_STATUSES.NEW },
      { id: 'booking-3', status: BOOKING_STATUSES.CONTACTED },
      { id: 'booking-4', status: BOOKING_STATUSES.SCHEDULED },
      { id: 'booking-5', status: BOOKING_STATUSES.COMPLETED },
      { id: 'booking-6', status: BOOKING_STATUSES.FOLLOW_UP },
      { id: 'booking-7', status: BOOKING_STATUSES.CANCELLED },
    ]);

    expect(summary.statusCounts).toEqual({
      [BOOKING_STATUSES.NEW]: 2,
      [BOOKING_STATUSES.CONTACTED]: 1,
      [BOOKING_STATUSES.SCHEDULED]: 1,
      [BOOKING_STATUSES.COMPLETED]: 1,
      [BOOKING_STATUSES.FOLLOW_UP]: 1,
      [BOOKING_STATUSES.CANCELLED]: 1,
    });
  });
});
