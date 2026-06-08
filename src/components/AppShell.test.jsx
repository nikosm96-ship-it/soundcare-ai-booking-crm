import { render, screen, within } from '@testing-library/react';
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
    expect(
      screen.getByRole('heading', { name: /recent bookings/i }),
    ).toBeInTheDocument();
  });

  test('admin sidebar uses only working navigation and logo returns home', async () => {
    const user = userEvent.setup();
    render(<AppShell />);

    await user.click(screen.getByRole('button', { name: /admin dashboard/i }));

    const sidebar = screen.getByLabelText(/admin navigation/i);
    expect(within(sidebar).queryByRole('button', { name: /book appointment/i }))
      .not.toBeInTheDocument();
    expect(within(sidebar).queryByRole('button', { name: /calendar/i }))
      .not.toBeInTheDocument();
    expect(within(sidebar).getByRole('link', { name: /recent bookings/i }))
      .toBeInTheDocument();
    expect(within(sidebar).getByRole('link', { name: /message drafts/i }))
      .toBeInTheDocument();

    await user.click(within(sidebar).getByRole('link', { name: /soundcare hearing care home/i }));

    expect(
      screen.getByRole('heading', { name: /request an appointment/i }),
    ).toBeInTheDocument();
  });

  test('visible app copy avoids portfolio implementation wording', async () => {
    const user = userEvent.setup();
    render(<AppShell />);

    [document.body.textContent.toLowerCase()].forEach((visibleText) => {
      forbiddenUiWords.forEach((word) => {
        expect(visibleText).not.toContain(word);
      });
    });

    await user.click(screen.getByRole('button', { name: /admin dashboard/i }));

    [document.body.textContent.toLowerCase()].forEach((visibleText) => {
      forbiddenUiWords.forEach((word) => {
        expect(visibleText).not.toContain(word);
      });
    });
  });
});
