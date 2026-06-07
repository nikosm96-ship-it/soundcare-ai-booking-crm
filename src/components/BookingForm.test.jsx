import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import BookingForm from './BookingForm.jsx';

describe('BookingForm', () => {
  test('empty submit shows required validation for name, email, and service', async () => {
    const user = userEvent.setup();
    render(<BookingForm />);

    await user.click(screen.getByRole('button', { name: /request appointment/i }));

    expect(screen.getByText('Please enter a customer name.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a customer email.')).toBeInTheDocument();
    expect(screen.getByText('Please choose a service.')).toBeInTheDocument();
  });

  test('successful submit shows client confirmation copy', async () => {
    const user = userEvent.setup();
    render(<BookingForm />);

    await user.type(screen.getByLabelText(/full name/i), 'Mina Carter');
    await user.type(screen.getByLabelText(/email address/i), 'mina@example.com');
    await user.selectOptions(screen.getByLabelText(/service/i), 'Hearing test');
    await user.click(screen.getByRole('button', { name: /request appointment/i }));

    expect(screen.getByText('Thank you!')).toBeInTheDocument();
    expect(
      screen.getByText('Your appointment request has been received.'),
    ).toBeInTheDocument();
    expect(
      screen.getByText('Our team will review your request and contact you soon.'),
    ).toBeInTheDocument();
  });
});
