import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import AppShell from './AppShell.jsx';

const forbiddenUiWords = [
  'demo',
  'fake',
  'portfolio',
  'mvp',
  'mock ai',
  'localstorage',
  'supabase',
  'vercel',
  'recruiter',
];

describe('AppShell', () => {
  test('starts on the client booking view with professional copy', () => {
    render(<AppShell />);

    expect(
      screen.getByRole('heading', { name: /request an appointment/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /admin dashboard/i }),
    ).toBeInTheDocument();
  });

  test('switches to the admin dashboard view', async () => {
    const user = userEvent.setup();
    render(<AppShell />);

    await user.click(screen.getByRole('button', { name: /admin dashboard/i }));

    expect(
      screen.getByRole('heading', { name: /dashboard/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/recent bookings/i)).toBeInTheDocument();
  });

  test('visible app copy avoids portfolio implementation wording', () => {
    render(<AppShell />);

    const visibleText = document.body.textContent.toLowerCase();

    forbiddenUiWords.forEach((word) => {
      expect(visibleText).not.toContain(word);
    });
  });
});
