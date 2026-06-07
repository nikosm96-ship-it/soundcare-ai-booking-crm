import { describe, expect, test } from 'vitest';
import { demoBookings } from '../data/demoBookings.js';
import {
  addBooking,
  bookingFromDatabaseRow,
  bookingToDatabaseRow,
  getBookings,
  resetBookings,
  updateBookingStatus,
} from './bookingRepository.js';

const fakeBooking = {
  id: 'test-booking-017',
  customerName: 'Nikos Repository Demo',
  customerEmail: 'nikos.repository@example.com',
  customerPhone: '+30 210 000 2017',
  service: 'Hearing test',
  preferredDate: '2026-07-17',
  preferredTime: '10:30',
  notes: 'Fake repository test booking only.',
  status: 'New',
  createdAt: '2026-06-07T12:00:00.000Z',
  updatedAt: '2026-06-07T12:00:00.000Z',
};

describe('booking repository', () => {
  test('getBookings() keeps localStorage as the active persistence layer', () => {
    expect(getBookings()).toEqual(demoBookings);
  });

  test('addBooking() appends a booking through the repository boundary', () => {
    const updatedBookings = addBooking(fakeBooking);

    expect(updatedBookings).toHaveLength(demoBookings.length + 1);
    expect(getBookings()).toEqual([...demoBookings, fakeBooking]);
  });

  test('updateBookingStatus() changes status and refreshed updatedAt', () => {
    addBooking(fakeBooking);

    const updatedBookings = updateBookingStatus(fakeBooking.id, 'Scheduled');
    const updatedBooking = updatedBookings.find(
      (booking) => booking.id === fakeBooking.id,
    );

    expect(updatedBooking.status).toBe('Scheduled');
    expect(updatedBooking.updatedAt).not.toBe(fakeBooking.updatedAt);
  });

  test('resetBookings() restores demo bookings through the repository boundary', () => {
    addBooking(fakeBooking);

    expect(resetBookings()).toEqual(demoBookings);
    expect(getBookings()).toEqual(demoBookings);
  });

  test('bookingToDatabaseRow() maps frontend camelCase fields to future snake_case fields', () => {
    expect(bookingToDatabaseRow(fakeBooking)).toEqual({
      id: 'test-booking-017',
      customer_name: 'Nikos Repository Demo',
      customer_email: 'nikos.repository@example.com',
      customer_phone: '+30 210 000 2017',
      service: 'Hearing test',
      preferred_date: '2026-07-17',
      preferred_time: '10:30',
      notes: 'Fake repository test booking only.',
      status: 'New',
      created_at: '2026-06-07T12:00:00.000Z',
      updated_at: '2026-06-07T12:00:00.000Z',
    });
  });

  test('bookingFromDatabaseRow() maps future snake_case fields back to frontend camelCase fields', () => {
    const databaseRow = {
      id: 'test-booking-017',
      customer_name: 'Nikos Repository Demo',
      customer_email: 'nikos.repository@example.com',
      customer_phone: '+30 210 000 2017',
      service: 'Hearing test',
      preferred_date: '2026-07-17',
      preferred_time: '10:30',
      notes: 'Fake repository test booking only.',
      status: 'New',
      created_at: '2026-06-07T12:00:00.000Z',
      updated_at: '2026-06-07T12:00:00.000Z',
    };

    expect(bookingFromDatabaseRow(databaseRow)).toEqual(fakeBooking);
  });
});
