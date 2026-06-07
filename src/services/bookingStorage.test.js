import { describe, expect, test } from 'vitest';
import { demoBookings } from '../data/demoBookings.js';
import {
  getBookings,
  resetBookings,
  saveBookings,
} from './bookingStorage.js';

const storageKey = 'soundcare-ai-bookings';

describe('booking localStorage helpers', () => {
  test('empty localStorage returns demo bookings', () => {
    expect(getBookings()).toEqual(demoBookings);
  });

  test('invalid JSON does not crash and returns demo bookings', () => {
    localStorage.setItem(storageKey, 'not valid JSON');

    expect(() => getBookings()).not.toThrow();
    expect(getBookings()).toEqual(demoBookings);
  });

  test('saveBookings() and getBookings() work together', () => {
    const savedBookings = [
      {
        id: 'test-booking-001',
        customerName: 'Alex Demo',
        customerEmail: 'alex.demo@example.com',
        customerPhone: '+30 210 000 2001',
        service: 'Hearing test',
        preferredDate: '2026-06-30',
        preferredTime: '11:00',
        notes: 'Fake automated test booking only.',
        status: 'New',
        createdAt: '2026-06-07T10:00:00.000Z',
        updatedAt: '2026-06-07T10:00:00.000Z',
      },
    ];

    saveBookings(savedBookings);

    expect(getBookings()).toEqual(savedBookings);
  });

  test('resetBookings() restores demo bookings', () => {
    saveBookings([]);

    expect(resetBookings()).toEqual(demoBookings);
    expect(getBookings()).toEqual(demoBookings);
  });
});
