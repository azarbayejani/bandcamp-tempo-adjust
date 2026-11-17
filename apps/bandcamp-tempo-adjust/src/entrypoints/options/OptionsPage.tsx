import React, { useEffect, useRef } from 'react';
import browser from 'webextension-polyfill';
import {
  requestAllPermissions,
  hasAllPermissions,
} from '@tempo-adjust/permissions/background';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { extensionName } from '@/utils/extensionName';
import { getStoredSettings, saveSettings } from '@/utils/settings';
import { DONATE_URL, TIP_JAR_URL } from '@/utils/tipJar';

import * as css from './OptionsPage.module.css';

const logo = '/icon-128.png';
// The Safari icon's black record disappears into the dark page, so that build
// swaps in the lighter record drawn for dark toolbars.
const safariDarkLogo = '/toolbar-dark-128.png';

const bandcampPermissions = [
  {
    domains: 'bandcamp.com',
    reason: 'Adds the tempo controls to Bandcamp pages.',
  },
  {
    domains: 'bcbits.com',
    reason:
      'Bandcamp serves its audio from this domain. The extension reads tracks from it to detect their BPM.',
  },
];

const discogsPermissions = [
  {
    domains: 'discogs.com',
    reason: 'Adds the tempo controls to Discogs release pages.',
  },
  {
    domains: 'youtube.com and youtube-nocookie.com',
    reason:
      'Discogs plays music through embedded YouTube videos. The extension changes their speed there, and does nothing when you visit YouTube directly.',
  },
];

const Options: React.FC = () => {
  const { data: hasPermissions, isLoading } = useQuery(['permissions'], {
    queryFn: hasAllPermissions,
  });
  const queryClient = useQueryClient();

  const name = extensionName();

  // index.html's static title can't follow the build's extension name.
  useEffect(() => {
    document.title = name;
  }, [name]);

  const handleRequestPermissions = async () => {
    const permissionsResponse = await requestAllPermissions();
    if (permissionsResponse) {
      queryClient.invalidateQueries(['permissions']);
    }
  };

  useEffect(() => {
    const listener = () => {
      queryClient.invalidateQueries(['permissions']);
    };
    browser.permissions.onAdded.addListener(listener);

    return () => {
      browser.permissions.onAdded.removeListener(listener);
    };
  }, [queryClient]);

  const { data: platformInfo } = useQuery(['platformInfo'], {
    queryFn: () => browser.runtime.getPlatformInfo(),
    enabled: Boolean(import.meta.env.SAFARI),
  });

  // On macOS the extension's native handler can open the app directly,
  // skipping Safari's "open this page in Tempo Adjust?" prompt. iOS
  // extensions can't open apps, so there the link navigates as usual.
  const handleOpenTipJar = async (event: React.MouseEvent) => {
    if (platformInfo?.os !== 'mac') {
      return;
    }
    event.preventDefault();
    try {
      const response = await browser.runtime.sendNativeMessage(
        'application.id',
        { name: 'openTipJar' }
      );
      if (response?.opened) {
        return;
      }
    } catch (error) {
      console.log('Could not open the tip jar through the app', error);
    }
    window.location.href = TIP_JAR_URL;
  };

  const { data: settings } = useQuery(['settings'], {
    queryFn: getStoredSettings,
  });

  // Another options tab can change the settings while this one is open.
  useEffect(() => {
    const listener = () => {
      queryClient.invalidateQueries(['settings']);
    };
    browser.storage.onChanged.addListener(listener);

    return () => {
      browser.storage.onChanged.removeListener(listener);
    };
  }, [queryClient]);

  const handleChangeLowDataMode = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const lowDataMode = event.target.checked;
    // Updated in the cache before the write lands: a controlled checkbox
    // snaps back to its old value if the state doesn't change synchronously.
    queryClient.setQueryData(['settings'], { ...settings, lowDataMode });
    saveSettings({ lowDataMode });
  };

  // "Settings" in the Bandcamp menu opens this page at #settings. The
  // section sits below the welcome copy, off-screen on a phone, so bring
  // it into view once it has rendered.
  const settingsHeadingRef = useRef<HTMLHeadingElement>(null);
  const showSettings = Boolean(settings) && (isLoading || hasPermissions);
  useEffect(() => {
    if (showSettings && window.location.hash === '#settings') {
      settingsHeadingRef.current?.scrollIntoView?.({ block: 'start' });
      settingsHeadingRef.current?.focus({ preventScroll: true });
    }
  }, [showSettings]);

  const sites = import.meta.env.SAFARI
    ? 'Bandcamp, Discogs and YouTube'
    : 'Bandcamp';
  const permissions = import.meta.env.SAFARI
    ? [...bandcampPermissions, ...discogsPermissions]
    : bandcampPermissions;

  const lightLogoImage = (
    <img className={css.logo} src={logo} alt={`${name} logo`} />
  );
  const logoImage = import.meta.env.SAFARI ? (
    <picture>
      <source srcSet={safariDarkLogo} media="(prefers-color-scheme: dark)" />
      {lightLogoImage}
    </picture>
  ) : (
    lightLogoImage
  );

  return !isLoading && !hasPermissions ? (
    <div className="OptionsContainer">
      <div className={css.options}>
        {logoImage}
        <p style={{ textAlign: 'center', padding: '0 20px' }}>
          {name} needs access to {sites} to work.
        </p>
        <button className={css.button} onClick={handleRequestPermissions}>
          Allow
        </button>
        <details className={css.details}>
          <summary className={css.detailsSummary}>
            What does this access?
          </summary>
          <p className={css.detailsIntro}>
            {name} doesn&apos;t collect any data. Here&apos;s what it uses each
            site for:
          </p>
          <dl className={css.permissionList}>
            {permissions.map(({ domains, reason }) => (
              <React.Fragment key={domains}>
                <dt>{domains}</dt>
                <dd>{reason}</dd>
              </React.Fragment>
            ))}
          </dl>
        </details>
      </div>
    </div>
  ) : (
    <div className="OptionsContainer">
      <div className={`${css.options} ${css.optionsWithFooter}`}>
        {logoImage}
        <div className={css.center}>
          <h1>Thanks for installing {name}!</h1>
        </div>
        <div className={css.center} style={{ padding: '0 20px' }}>
          Open any release on{' '}
          {import.meta.env.SAFARI ? 'Bandcamp or Discogs' : 'Bandcamp'} to
          adjust its tempo.
        </div>
        <hr className={css.divider} />
        {settings && (
          <section className={css.settings} aria-labelledby="settings-heading">
            <h2
              ref={settingsHeadingRef}
              id="settings-heading"
              className={css.settingsHeading}
              tabIndex={-1}
            >
              Settings
            </h2>
            <label className={css.setting}>
              <input
                type="checkbox"
                className={css.settingCheckbox}
                checked={settings.lowDataMode ?? false}
                onChange={handleChangeLowDataMode}
                // Named explicitly: the wrapping label would otherwise fold
                // the description into the checkbox's name.
                aria-labelledby="low-data-mode-label"
                aria-describedby="low-data-mode-description"
              />
              <span>
                <span id="low-data-mode-label" className={css.settingLabel}>
                  Low data mode
                </span>
                <span
                  id="low-data-mode-description"
                  className={css.settingDescription}
                >
                  Detect BPM analyzes only the track that&apos;s playing,
                  instead of every track on the release. Uses less data and
                  battery.
                </span>
              </span>
            </label>
          </section>
        )}
        <hr className={css.divider} />
        <div className={css.center} style={{ padding: '0 20px' }}>
          Please consider{' '}
          {import.meta.env.SAFARI ? 'leaving a tip' : 'donating'} to support
          continued development of the extension.
        </div>

        <div className={css.actionContainer}>
          <a
            href={import.meta.env.SAFARI ? TIP_JAR_URL : DONATE_URL}
            role="button"
            className={css.button}
            onClick={import.meta.env.SAFARI ? handleOpenTipJar : undefined}
          >
            {import.meta.env.SAFARI ? 'Leave a tip' : 'Donate'}
          </a>
        </div>
        <div className={`${css.center} ${css.footer}`}>
          <a
            href="https://github.com/azarbayejani/bandcamp-tempo-adjust/issues"
            role="button"
            className={css.footerLink}
          >
            Report a bug
          </a>
        </div>
      </div>
    </div>
  );
};

export default Options;
