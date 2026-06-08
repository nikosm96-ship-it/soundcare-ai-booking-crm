import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import BookingForm from './BookingForm.jsx';
import { createBookingRequest } from '../services/bookingRepository.js';

vi.mock('../services/bookingRepository.js', () => ({
  createBookingRequest: vi.fn().mockResolvedValue({
    bookings: [],
    remoteStatus: 'skipped',
    remoteError: null,
  }),
}));

describe('BookingForm', () => {
  beforeEach(() => {
    createBookingRequest.mockClear();
    createBookingRequest.mockResolvedValue({
      bookings: [],
      remoteStatus: 'skipped',
      remoteError: null,
    });
  });

  async function completeValidBookingForm(user) {
    await user.type(screen.getByLabelText(/full name/i), 'Mina Carter');
    await user.type(screen.getByLabelText(/email address/i), 'mina@example.com');
    await user.type(screen.getByLabelText(/phone number/i), '555-0199');
    await user.selectOptions(screen.getByLabelText(/service/i), 'Hearing test');
    await user.type(screen.getByLabelText(/preferred date/i), '2026-06-15');
    await user.type(screen.getByLabelText(/preferred time/i), '10:30');
  }

  test('empty submit shows required validation for booking request fields', async () => {
    const user = userEvent.setup();
    render(<BookingForm />);

    await user.click(screen.getByRole('button', { name: /request appointment/i }));

    expect(screen.getByText('Please enter your full name.')).toBeInTheDocument();
    expect(screen.getByText('Please enter your email address.')).toBeInTheDocument();
    expect(screen.getByText('Please enter your phone number.')).toBeInTheDocument();
    expect(screen.getByText('Please choose a service.')).toBeInTheDocument();
    expect(screen.getByText('Please choose a preferred date.')).toBeInTheDocument();
    expect(screen.getByText('Please choose a preferred time.')).toBeInTheDocument();
    expect(createBookingRequest).not.toHaveBeenCalled();
  });

  test('invalid email format shows a validation message', async () => {
    const user = userEvent.setup();
    render(<BookingForm />);

    await user.type(screen.getByLabelText(/full name/i), 'Mina Carter');
    await user.type(screen.getByLabelText(/email address/i), 'not-an-email');
    await user.type(screen.getByLabelText(/phone number/i), '555-0199');
    await user.selectOptions(screen.getByLabelText(/service/i), 'Hearing test');
    await user.type(screen.getByLabelText(/preferred date/i), '2026-06-15');
    await user.type(screen.getByLabelText(/preferred time/i), '10:30');
    await user.click(screen.getByRole('button', { name: /request appointment/i }));

    expect(
      screen.getByText('Please enter a valid email address.'),
    ).toBeInTheDocument();
    expect(createBookingRequest).not.toHaveBeenCalled();
  });

  test('successful submit shows client confirmation copy', async () => {
    const user = userEvent.setup();
    render(<BookingForm />);

    await completeValidBookingForm(user);
    await user.click(screen.getByRole('button', { name: /request appointment/i }));

    expect(screen.getByText('Thank you!')).toBeInTheDocument();
    expect(
      screen.getByText('Your appointment request has been received.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Our team will review your request and contact you soon.'),
    ).toBeInTheDocument();
    expect(createBookingRequest).toHaveBeenCalledTimes(1);
    expect(createBookingRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        customerName: 'Mina Carter',
        customerEmail: 'mina@example.com',
        customerPhone: '555-0199',
        service: 'Hearing test',
        preferredDate: '2026-06-15',
        preferredTime: '10:30',
      }),
    );
  });

  test('notes field shows a character counter for professional input feedback', async () => {
    const user = userEvent.setup();
    render(<BookingForm />);

    expect(screen.getByText('0/500')).toBeInTheDocument();

    await user.type(
      screen.getByLabelText(/additional notes/i),
      'Morning visit preferred.',
    );

    expect(screen.getByText('24/500')).toBeInTheDocument();
  });

  test('successful online save shows booking system status', async () => {
    createBookingRequest.mockResolvedValue({
      bookings: [],
      remoteStatus: 'inserted',
      remoteError: null,
    });
    const user = userEvent.setup();
    render(<BookingForm />);

    await completeValidBookingForm(user);
    await user.click(screen.getByRole('button', { name: /request appointment/i }));

    expect(
      screen.getByText('Saved to the booking system.'),
    ).toBeInTheDocument();
  });

  test.each(['skipped', 'failed'])(
    'unavailable online save status shows client-friendly received status for %s',
    async (remoteStatus) => {
      createBookingRequest.mockResolvedValue({
        bookings: [],
        remoteStatus,
        remoteError: new Error('internal details'),
      });
      const user = userEvent.setup();
      render(<BookingForm />);

      await completeValidBookingForm(user);
      await user.click(screen.getByRole('button', { name: /request appointment/i }));

      expect(
        screen.getByText('Request received. Online saving is currently unavailable.'),
      ).toBeInTheDocument();
      expect(screen.queryByText('internal details')).not.toBeInTheDocument();
    },
  );
});
