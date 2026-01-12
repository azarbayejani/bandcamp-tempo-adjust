import fs from 'node:fs/promises';
import path from 'path';
import type { Page } from '@playwright/test';

declare global {
  interface Window {
    YT: any;
  }
}

export async function setupYoutubeMock(page: Page) {
  await page.addInitScript(() => {
    window.YT = {
      Player: class {
        constructor(elementId: string, options: any) {
          console.log('Mock YouTube Player created');

          const videoTarget = document.getElementById(elementId);
          if (!videoTarget || !videoTarget.parentNode) {
            throw new Error(
              `Mock YouTube Player target not found: ${elementId}`
            );
          }
          const iframe = document.createElement('iframe');

          iframe.id = elementId;
          iframe.src = 'https://www.youtube.com/embed/' + options.videoId;
          iframe.allowFullscreen = true;
          iframe.allow =
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';

          videoTarget.parentNode.replaceChild(iframe, videoTarget);

          // Simulate API readiness callbacks
          if (options.events && options.events.onReady) {
            // doing this on a 100ms delay to ensure the iframe is fully loaded
            setTimeout(options.events.onReady, 100);
          }
        }

        // these methods are all used by Discogs
        playVideo() {
          console.log('Mock playVideo called');
        }
        pauseVideo() {
          console.log('Mock pauseVideo called');
        }
        set stateChange(foo) {
          console.log('Mock stateChange called');
        }
        get stateChange() {
          return {
            addEventListener: () => {
              console.log('Mock stateChange addEventListener called');
            },
            removeEventListener: () => {
              console.log('Mock stateChange removeEventListener called');
            },
          };
        }
        getPlaylist() {
          return [];
        }

        getPlaylistIndex() {
          return 1;
        }
        loadPlaylist() {
          console.log('Mock loadPlaylist called');
        }
        loadVideoById() {
          console.log('Mock loadVideoById called');
        }
      },
    };
  });

  const mockPlayerPath = path.join('e2e/fixtures/mock-youtube-player.html');
  console.log('mockPlayerPath', mockPlayerPath);
  const html = await fs.readFile(mockPlayerPath, { encoding: 'utf-8' });
  await page.route('**/www.youtube.com/embed/*', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'text/html',
      body: html,
    });
  });
}
