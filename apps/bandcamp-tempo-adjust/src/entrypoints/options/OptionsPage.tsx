import React, { useEffect } from 'react';
import browser from 'webextension-polyfill';
import {
  requestAllPermissions,
  hasAllPermissions,
} from '@tempo-adjust/permissions/background';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { DONATE_URL, TIP_JAR_URL } from '@/utils/tipJar';

import * as css from './OptionsPage.module.css';

const logo = '/icon-128.png';

interface Props {
  title: string;
}

const Options: React.FC<Props> = () => {
  const { data: hasPermissions, isLoading } = useQuery(['permissions'], {
    queryFn: hasAllPermissions,
  });
  const queryClient = useQueryClient();

  const extensionName =
    import.meta.env.WXT_EXTENSION_NAME || 'Bandcamp Tempo Adjust';

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
    enabled: import.meta.env.SAFARI,
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

  const domains = import.meta.env.SAFARI
    ? 'discogs.com, youtube.com, youtube-nocookie.com, bandcamp.com and bcbits.com'
    : 'bandcamp.com and bcbits.com';

  return !isLoading && !hasPermissions ? (
    <div className="OptionsContainer">
      <div className={css.options}>
        <img src={logo} alt={`${extensionName} logo`} />
        <p style={{ textAlign: 'center' }}>
          {extensionName} needs your permission to access {domains} in order to
          work correctly.
        </p>
        <button className={css.button} onClick={handleRequestPermissions}>
          Allow
        </button>
      </div>
    </div>
  ) : (
    <div className="OptionsContainer">
      <div className={`${css.options} ${css.optionsWithFooter}`}>
        <img src={logo} alt={`${extensionName} logo`} />
        <div className={css.center}>
          <h1>Thanks for installing {extensionName}!</h1>
        </div>
        <div className={css.center} style={{ padding: '0 20px' }}>
          Start using it on your favorite releases on{' '}
          {import.meta.env.SAFARI ? 'Bandcamp and Discogs' : 'Bandcamp'}.
        </div>
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
            href="https://github.com/azarbayejani/bandcamp-tempo-adjust"
            role="button"
          >
            report a bug
          </a>
        </div>
      </div>
    </div>
  );
};

export default Options;
