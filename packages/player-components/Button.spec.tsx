import { expect, describe, it, vi, afterEach } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';
import { ThemeProvider } from '@tempo-adjust/theme-provider';

describe('Button', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders', () => {
    const onClick = vi.fn();
    render(
      <ThemeProvider theme="light">
        <Button onClick={onClick}>Click me</Button>
      </ThemeProvider>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClick', async () => {
    const onClick = vi.fn();
    render(
      <ThemeProvider theme="light">
        <Button onClick={onClick}>Click me</Button>
      </ThemeProvider>
    );
    userEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(onClick).toHaveBeenCalled();
    });
  });

  it('renders dark mode', () => {
    const onClick = vi.fn();
    render(
      <ThemeProvider theme="dark">
        <Button onClick={onClick}>Click me</Button>
      </ThemeProvider>
    );

    expect(screen.getByRole('button')).toHaveClass(/dark/);
  });

  it('passes aria attributes', () => {
    const onClick = vi.fn();
    render(
      <ThemeProvider theme="light">
        <Button onClick={onClick} aria-checked="true" role="checkbox">
          Click me
        </Button>
      </ThemeProvider>
    );

    expect(screen.getByRole('checkbox')).toHaveAttribute('role', 'checkbox');
    expect(screen.getByRole('checkbox')).toHaveAttribute(
      'aria-checked',
      'true'
    );
  });
});
