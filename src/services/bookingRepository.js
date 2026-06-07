import {
  getBookings as getStoredBookings,
  resetBookings as resetStoredBookings,
  saveBookings,
} from './bookingStorage.js';

export function getBookings() {
  return getStoredBookings();
}

export function addBooking(booking) {
  const updatedBookings = [...getStoredBookings(), booking];
  saveBookings(updatedBookings);

  return updatedBookings;
}

export function updateBookingStatus(bookingId, nextStatus) {
  const updatedBookings = getStoredBookings().map((booking) => {
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

  return updatedBookings;
}

export function resetBookings() {
  return resetStoredBookings();
}

export function bookingToDatabaseRow(booking) {
  return {
    id: booking.id,
    customer_name: booking.customerName,
    customer_email: booking.customerEmail,
    customer_phone: booking.customerPhone,
    service: booking.service,
    preferred_date: booking.preferredDate,
    preferred_time: booking.preferredTime,
    notes: booking.notes,
    status: booking.status,
    created_at: booking.createdAt,
    updated_at: booking.updatedAt,
  };
}

export function bookingFromDatabaseRow(row) {
  return {
    id: row.id,
    customerName: row.customer_name,
    customerEmail: row.customer_email,
    customerPhone: row.customer_phone,
    service: row.service,
    preferredDate: row.preferred_date,
    preferredTime: row.preferred_time,
    notes: row.notes,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}
