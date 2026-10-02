import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fakeBrowser } from '@webext-core/fake-browser';
import {
  hasAllPermissions,
  requestAllPermissions,
} from '@tempo-adjust/permissions/background';

import { DONATE_URL, TIP_JAR_URL } from '@/utils/tipJar';

import Options from './OptionsPage';

// The polyfill alias has no default export, so OptionsPage's `browser`
// would be undefined without this. The alias resolves fake-browser to
// this same mocked module, so its named export has to be kept too.
vi.mock('webextension-polyfill', async (importOriginal) => {
  const { fakeBrowser } = await importOriginal<
    typeof import('@webext-core/fake-browser')
  >();
  return { fakeBrowser, default: fakeBrowser };
});
vi.mock('@tempo-adjust/permissions/background', () => ({
  hasAllPermissions: vi.fn(),
  requestAllPermissions: vi.fn(),
}));

const renderOptions = () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <Options />
    </QueryClientProvider>
  );
  return queryClient;
};

// Reports whether the page handled the click itself, then cancels it so jsdom
// doesn't try to follow the link.
const clickIsHandledByPage = (element: HTMLElement) => {
  let handled = false;
  document.addEventListener(
    'click',
    (event) => {
      handled = event.defaultPrevented;
      event.preventDefault();
    },
    { once: true }
  );
  fireEvent.click(element);
  return handled;
};

const permissionDomains = () =>
  screen.getAllByRole('term').map((term) => term.textContent);

const darkLogoSource = () =>
  document.querySelector('source[media="(prefers-color-scheme: dark)"]');

describe('OptionsPage', () => {
  beforeEach(() => {
    // jsdom keeps the title between tests, so an earlier render would
    // otherwise satisfy the title assertions.
    document.title = '';
    vi.mocked(hasAllPermissions).mockReset().mockResolvedValue(true);
    vi.mocked(requestAllPermissions).mockReset().mockResolvedValue(true);
    // fakeBrowser throws for the APIs it doesn't implement.
    vi.spyOn(fakeBrowser.permissions.onAdded, 'addListener').mockReturnValue();
    vi.spyOn(
      fakeBrowser.permissions.onAdded,
      'removeListener'
    ).mockReturnValue();
    vi.spyOn(fakeBrowser.runtime, 'getPlatformInfo').mockResolvedValue({
      os: 'mac',
      arch: 'arm',
    });
    vi.spyOn(fakeBrowser.runtime, 'sendNativeMessage').mockResolvedValue({
      opened: true,
    });
  });

  afterEach(() => {
    // Unmount first: the page removes its permissions listener on the way out.
    cleanup();
    vi.restoreAllMocks();
  });

  it('thanks the user and asks for a donation', async () => {
    renderOptions();

    expect(
      await screen.findByRole('heading', {
        name: 'Thanks for installing Bandcamp Tempo Adjust!',
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText('Open any release on Bandcamp to adjust its tempo.')
    ).toBeInTheDocument();
    expect(screen.getByText(/Please consider donating/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Donate' })).toHaveAttribute(
      'href',
      DONATE_URL
    );
    expect(
      screen.queryByRole('button', { name: 'Leave a tip' })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Report a bug' })
    ).toHaveAttribute(
      'href',
      'https://github.com/azarbayejani/bandcamp-tempo-adjust/issues'
    );
  });

  it('titles the tab with the extension name', async () => {
    renderOptions();

    await waitFor(() => expect(document.title).toBe('Bandcamp Tempo Adjust'));
  });

  it('uses the same logo in light and dark mode', async () => {
    renderOptions();

    expect(await screen.findByRole('img')).toHaveAttribute(
      'src',
      '/icon-128.png'
    );
    expect(darkLogoSource()).not.toBeInTheDocument();
  });

  it('follows the donate link without messaging the app', async () => {
    renderOptions();

    const donate = await screen.findByRole('button', { name: 'Donate' });

    expect(clickIsHandledByPage(donate)).toBe(false);
    expect(fakeBrowser.runtime.getPlatformInfo).not.toHaveBeenCalled();
    expect(fakeBrowser.runtime.sendNativeMessage).not.toHaveBeenCalled();
  });

  describe('without permissions', () => {
    beforeEach(() => {
      vi.mocked(hasAllPermissions).mockResolvedValue(false);
    });

    it('asks for access to Bandcamp', async () => {
      renderOptions();

      expect(
        await screen.findByText(
          'Bandcamp Tempo Adjust needs access to Bandcamp to work.'
        )
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: 'Donate' })
      ).not.toBeInTheDocument();
    });

    it('explains each Bandcamp domain under "What does this access?"', async () => {
      renderOptions();

      const summary = await screen.findByText('What does this access?');

      expect(summary.closest('details')).not.toHaveAttribute('open');
      expect(
        screen.getByText(
          "Bandcamp Tempo Adjust doesn't collect any data. Here's what it uses each site for:"
        )
      ).toBeInTheDocument();
      expect(permissionDomains()).toEqual(['bandcamp.com', 'bcbits.com']);
      expect(
        screen.getByText('Adds the tempo controls to Bandcamp pages.')
      ).toBeInTheDocument();
    });

    it('shows the thank-you once the permissions are granted', async () => {
      renderOptions();
      const allow = await screen.findByRole('button', { name: 'Allow' });
      vi.mocked(hasAllPermissions).mockResolvedValue(true);

      await userEvent.click(allow);

      expect(requestAllPermissions).toHaveBeenCalledOnce();
      expect(
        await screen.findByRole('button', { name: 'Donate' })
      ).toBeInTheDocument();
    });
  });

  describe('on Safari', () => {
    beforeEach(() => {
      vi.stubEnv('SAFARI', 'true');
    });

    afterEach(() => {
      vi.unstubAllEnvs();
    });

    it('mentions Discogs and asks for a tip instead of a donation', async () => {
      renderOptions();

      expect(
        await screen.findByRole('heading', {
          name: 'Thanks for installing Tempo Adjust!',
        })
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          'Open any release on Bandcamp or Discogs to adjust its tempo.'
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Please consider leaving a tip/)
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Leave a tip' })
      ).toHaveAttribute('href', TIP_JAR_URL);
      expect(
        screen.queryByRole('button', { name: 'Donate' })
      ).not.toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: 'Report a bug' })
      ).toBeInTheDocument();
    });

    it('titles the tab with the Safari extension name', async () => {
      renderOptions();

      await waitFor(() => expect(document.title).toBe('Tempo Adjust'));
    });

    it('swaps in the dark toolbar logo in dark mode', async () => {
      renderOptions();

      expect(await screen.findByRole('img')).toHaveAttribute(
        'src',
        '/icon-128.png'
      );
      expect(darkLogoSource()).toHaveAttribute(
        'srcset',
        '/toolbar-dark-128.png'
      );
    });

    it('asks for access to Discogs and YouTube too', async () => {
      vi.mocked(hasAllPermissions).mockResolvedValue(false);
      renderOptions();

      expect(
        await screen.findByText(
          'Tempo Adjust needs access to Bandcamp, Discogs and YouTube to work.'
        )
      ).toBeInTheDocument();
    });

    it('explains the Discogs and YouTube domains under "What does this access?" too', async () => {
      vi.mocked(hasAllPermissions).mockResolvedValue(false);
      renderOptions();

      await screen.findByText('What does this access?');

      expect(permissionDomains()).toEqual([
        'bandcamp.com',
        'bcbits.com',
        'discogs.com',
        'youtube.com and youtube-nocookie.com',
      ]);
      expect(
        screen.getByText(
          "Tempo Adjust doesn't collect any data. Here's what it uses each site for:"
        )
      ).toBeInTheDocument();
      expect(
        screen.getByText(/does nothing when you visit YouTube directly/)
      ).toBeInTheDocument();
    });

    it('opens the tip jar through the app on macOS', async () => {
      const queryClient = renderOptions();
      const tip = await screen.findByRole('button', { name: 'Leave a tip' });
      await waitFor(() =>
        expect(queryClient.getQueryData(['platformInfo'])).toBeDefined()
      );

      expect(clickIsHandledByPage(tip)).toBe(true);
      expect(fakeBrowser.runtime.sendNativeMessage).toHaveBeenCalledWith(
        'application.id',
        { name: 'openTipJar' }
      );
    });

    it('follows the tip jar link on iOS', async () => {
      // Safari reports 'ios', which the polyfill's types don't know about.
      vi.mocked(fakeBrowser.runtime.getPlatformInfo).mockResolvedValue({
        os: 'ios',
        arch: 'arm',
      } as never);
      const queryClient = renderOptions();
      const tip = await screen.findByRole('button', { name: 'Leave a tip' });
      await waitFor(() =>
        expect(queryClient.getQueryData(['platformInfo'])).toBeDefined()
      );

      expect(clickIsHandledByPage(tip)).toBe(false);
      expect(fakeBrowser.runtime.sendNativeMessage).not.toHaveBeenCalled();
    });
  });
});
