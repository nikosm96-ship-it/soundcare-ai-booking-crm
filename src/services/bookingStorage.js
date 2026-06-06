import { demoBookings } from '../data/demoBookings.js';

const BOOKINGS_STORAGE_KEY = 'soundcare-ai-bookings';

function copyDemoBookings() {
  return demoBookings.map((booking) => ({ ...booking }));
}

function canUseLocalStorage() {
  return typeof localStorage !== 'undefined';
}

export function getBookings() {
  if (!canUseLocalStorage()) {
    return copyDemoBookings();
  }

  const savedBookings = localStorage.getItem(BOOKINGS_STORAGE_KEY);

  if (!savedBookings) {
    return copyDemoBookings();
  }

  try {
    const parsedBookings = JSON.parse(savedBookings);

    if (!Array.isArray(parsedBookings)) {
      return copyDemoBookings();
    }

    return parsedBookings;
  } catch (error) {
    return copyDemoBookings();
  }
}

export function saveBookings(bookings) {
  if (!canUseLocalStorage()) {
    return;
  }

  localStorage.setItem(BOOKINGS_STORAGE_KEY, JSON.stringify(bookings));
}

export function resetBookings() {
  if (!canUseLocalStorage()) {
    return copyDemoBookings();
  }

  localStorage.removeItem(BOOKINGS_STORAGE_KEY);
  return copyDemoBookings();
}
