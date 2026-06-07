import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import MockAiAssistant from './MockAiAssistant.jsx';

describe('MockAiAssistant', () => {
  test('generated admin draft includes the non-medical administrative safety line', async () => {
    const user = userEvent.setup();
    render(<MockAiAssistant refreshKey={0} />);

    await user.click(screen.getByRole('button', { name: /generate draft/i }));

    expect(screen.getByLabelText(/generated draft/i).value).toContain(
      'This message is a non-medical administrative draft.',
    );
  });
});
