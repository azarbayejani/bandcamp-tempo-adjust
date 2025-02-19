import React, { useEffect } from 'react';
import browser from 'webextension-polyfill';
import {
  requestAllPermissions,
  hasAllPermissions,
} from '@tempo-adjust/permissions/background';
import { useQuery, useQueryClient } from '@tanstack/react-query';

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
      console.log('hi');
      queryClient.invalidateQueries(['permissions']);
    };
    browser.permissions.onAdded.addListener(listener);

    return () => {
      browser.permissions.onAdded.removeListener(listener);
    };
  }, [queryClient]);

  const domains = import.meta.env.SAFARI
    ? 'discogs.com, youtube.com, youtube-nocookie.com, bandcamp.com and bcbits.com'
    : 'bandcamp.com and bcbits.com';

  return !isLoading && !hasPermissions ? (
    <div className="OptionsContainer">
      <div className={css.options}>
        <img src={logo} alt={`${extensionName} logo}`} />
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
        {!import.meta.env.SAFARI && (
          <>
            <div className={css.center} style={{ padding: '0 20px' }}>
              Please consider donating to support continued development of the
              extension.
            </div>

            <div className={css.actionContainer}>
              <a
                href="https://buymeacoffee.com/miseryconfusion"
                role="button"
                className={css.button}
              >
                Donate
              </a>
            </div>
          </>
        )}
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
