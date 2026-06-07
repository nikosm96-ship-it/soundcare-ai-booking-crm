import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import BookingForm from './BookingForm.jsx';

describe('BookingForm', () => {
  test('empty submit shows required validation for name, email, and service', async () => {
    const user = userEvent.setup();
    render(<BookingForm />);

    await user.click(screen.getByRole('button', { name: /save demo booking/i }));

    expect(screen.getByText('Please enter a customer name.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a customer email.')).toBeInTheDocument();
    expect(screen.getByText('Please choose a service.')).toBeInTheDocument();
  });
});
