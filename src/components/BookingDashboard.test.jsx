import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import BookingDashboard from './BookingDashboard.jsx';
import { BOOKING_STATUSES } from '../data/bookingStatus.js';
import { saveBookings } from '../services/bookingStorage.js';

describe('BookingDashboard', () => {
  test('shows a professional booking restore action', () => {
    render(<BookingDashboard />);

    expect(
      screen.getByRole('button', { name: /restore booking list/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /reset bookings/i }),
    ).not.toBeInTheDocument();
  });

  test('formats created dates in the bookings table', () => {
    saveBookings([
      {
        id: 'booking-created-date-test',
        customerName: 'Maria Santos',
        customerEmail: 'maria.santos@example.com',
        customerPhone: '+30 210 000 1001',
        service: 'Hearing test',
        preferredDate: '2026-06-15',
        preferredTime: '10:00',
        notes: 'Interested in a first hearing assessment.',
        status: BOOKING_STATUSES.NEW,
        createdAt: '2026-06-06T09:00:00.000Z',
        updatedAt: '2026-06-06T09:00:00.000Z',
      },
    ]);

    render(<BookingDashboard />);

    expect(screen.getByText('Jun 6, 2026, 12:00')).toBeInTheDocument();
    expect(
      screen.queryByText('2026-06-06T09:00:00.000Z'),
    ).not.toBeInTheDocument();
  });
});
