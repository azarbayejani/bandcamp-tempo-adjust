import { Page } from '@playwright/test';

export async function openOptions(page: Page, extensionId: string) {
  await page.goto(`chrome-extension://${extensionId}/options.html`);

  await page.getByRole('button', { name: 'Donate' });

  return {
    getDonateButton: () =>
      page.getByRole('button', { name: 'buy me a coffee' }),
    getReportABugLink: () => page.getByRole('button', { name: 'report a bug' }),
  };
}
