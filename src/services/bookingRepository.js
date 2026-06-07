import {
  getBookings as getStoredBookings,
  resetBookings as resetStoredBookings,
  saveBookings,
} from './bookingStorage.js';
import { supabaseClient } from './supabaseClient.js';

export function getBookings() {
  return getStoredBookings();
}

export function addBooking(booking) {
  const updatedBookings = [...getStoredBookings(), booking];
  saveBookings(updatedBookings);

  return updatedBookings;
}

export async function createBookingRequest(
  booking,
  { supabaseClient: client = supabaseClient } = {},
) {
  const updatedBookings = addBooking(booking);
  const remoteResult = await insertBookingToSupabase(booking, client);

  return {
    bookings: updatedBookings,
    remoteStatus: remoteResult.status,
    remoteError: remoteResult.error,
  };
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

export function bookingToDatabaseInsertRow(booking) {
  return {
    customer_name: booking.customerName,
    customer_email: booking.customerEmail,
    customer_phone: emptyToNull(booking.customerPhone),
    service: booking.service,
    preferred_date: emptyToNull(booking.preferredDate),
    preferred_time: emptyToNull(booking.preferredTime),
    notes: emptyToNull(booking.notes),
    status: booking.status,
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

function emptyToNull(value) {
  if (typeof value !== 'string') {
    return value ?? null;
  }

  const trimmedValue = value.trim();
  return trimmedValue ? trimmedValue : null;
}

async function insertBookingToSupabase(booking, client) {
  if (!client) {
    return {
      status: 'skipped',
      error: null,
    };
  }

  try {
    const { error } = await client
      .from('bookings')
      .insert(bookingToDatabaseInsertRow(booking));

    if (error) {
      return {
        status: 'failed',
        error,
      };
    }

    return {
      status: 'inserted',
      error: null,
    };
  } catch (error) {
    return {
      status: 'failed',
      error,
    };
  }
}
