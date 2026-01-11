import { test, expect } from './fixtures';
import { openOptions } from './pages/options';

test('has correct title and buttons', async ({ page, extensionId }) => {
  const { getDonateButton, getReportABugLink } = await openOptions(
    page,
    extensionId
  );
  await expect(page).toHaveTitle('Discogs Tempo Adjust Settings');

  await expect(getDonateButton()).toBeInViewport();
  await expect(getReportABugLink()).toBeInViewport();
});
