import fs from 'fs';
import path from 'path';
import type { BrowserContext, Page } from '@playwright/test';

type SetupNetworkOptions = {
  harPath?: string;
};

const RECORD_FIXTURES = process.env.RECORD_FIXTURES === '1';
const IS_CI = !!process.env.CI;

export async function setupNetwork(
  page: Page,
  { harPath }: SetupNetworkOptions = {}
) {
  // 1. Never allow recording in CI
  if (IS_CI && RECORD_FIXTURES) {
    throw new Error('RECORD_FIXTURES must not be set in CI');
  }

  // 2. Enforce offline mode in CI (after mocks are in place)
  if (IS_CI) {
    await page.context().setOffline(true);
  }

  // 3. HAR replay / recording
  if (harPath) {
    const resolvedPath = path.resolve(harPath);

    const harExists = fs.existsSync(resolvedPath);

    if (!harExists && !RECORD_FIXTURES) {
      throw new Error(
        `Missing HAR fixture: ${resolvedPath}\n` +
          `Run locally with RECORD_FIXTURES=1 to record it.`
      );
    }

    if (RECORD_FIXTURES) {
      console.warn(`⚠️  Recording HAR → ${resolvedPath}`);
    }

    await page.routeFromHAR(resolvedPath, {
      update: RECORD_FIXTURES,
    });
  }
}
