import fs from 'node:fs/promises';
import path from 'path';
import type { BrowserContext, Page } from '@playwright/test';
import { setupYoutubeMock } from './setupYoutubeMock';

type SetupNetworkOptions = {
  harPath?: string;
};

const RECORD_FIXTURES = process.env.RECORD_FIXTURES === '1';
const IS_CI = !!process.env.CI;

async function exists(path: string) {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

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

    const harExists = await exists(resolvedPath);

    if (!harExists && !RECORD_FIXTURES) {
      throw new Error(
        `Missing HAR fixture: ${resolvedPath}\n` +
          `Run locally with RECORD_FIXTURES=1 to record it.`
      );
    }

    if (RECORD_FIXTURES) {
      console.warn(`⚠️  Recording HAR → ${resolvedPath}`);
    }

    const harContent = JSON.parse(await fs.readFile(harPath, 'utf-8'));

    // Remove YouTube embed entries
    harContent.log.entries = harContent.log.entries.filter((entry) => {
      return !entry.request.url.includes('youtube.com/embed');
    });

    // Write modified HAR to temp file
    const modifiedHarPath = path.join(
      path.dirname(resolvedPath),
      `modified-${path.basename(resolvedPath)}`
    );
    await fs.writeFile(modifiedHarPath, JSON.stringify(harContent, null, 2));

    await page.routeFromHAR(modifiedHarPath, {
      update: RECORD_FIXTURES,
      url: '**://*discogs*/**',
    });
  }

  if (!RECORD_FIXTURES) {
    setupYoutubeMock(page);
  }
}
