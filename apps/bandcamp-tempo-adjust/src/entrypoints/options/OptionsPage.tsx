import React, { useEffect } from 'react';
import browser from 'webextension-polyfill';
import {
  requestAllPermissions,
  hasAllPermissions,
  hasFrankfurterPermission,
  requestFrankfurterPermission,
} from '@tempo-adjust/permissions';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import * as css from './OptionsPage.module.css';
import classNames from 'classnames';

const bandcampTempoAdjustLogo = '/icon-128.png';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  const { data: hasPermissions, isLoading } = useQuery(['permissions'], {
    queryFn: hasAllPermissions,
  });
  const { data: hasFrankfurter, isLoading: isFrankfurterLoading } = useQuery(
    ['frankfurterPermission'],
    { queryFn: hasFrankfurterPermission }
  );
  const queryClient = useQueryClient();

  const handleRequestPermissions = () => {
    requestAllPermissions();
  };

  const handleRequestFrankfurterPermission = async () => {
    await requestFrankfurterPermission();
    queryClient.invalidateQueries(['frankfurterPermission']);
  };

  useEffect(() => {
    const listener = () => {
      queryClient.invalidateQueries(['permissions']);
      queryClient.invalidateQueries(['frankfurterPermission']);
    };
    browser.permissions.onAdded.addListener(listener);

    return () => {
      browser.permissions.onAdded.removeListener(listener);
    };
  }, [queryClient]);

  return !isLoading && !hasPermissions ? (
    <div className={css.optionsContainer} style={{ display: 'flex' }}>
      <div className={css.options}>
        <img src={bandcampTempoAdjustLogo} alt="Bandcamp Tempo Adjust logo" />
        <p style={{ textAlign: 'center' }}>
          Bandcamp Tempo Adjust needs your permission to access:
        </p>
        <ul style={{ textAlign: 'left' }}>
          <li>
            <strong>bandcamp.com</strong> and <strong>bcbits.com</strong> to
            detect and adjust track tempo
          </li>
        </ul>
        <button className={css.button} onClick={handleRequestPermissions}>
          Allow
        </button>
      </div>
    </div>
  ) : (
    <div className={css.optionsContainer}>
      <div className={`${css.options} ${css.optionsWithFooter}`}>
        <img src={bandcampTempoAdjustLogo} alt="Bandcamp Tempo Adjust logo" />
        <div className={css.center}>
          <h1>Thanks for installing Bandcamp Tempo Adjust!</h1>
        </div>
        <div className={css.center} style={{ padding: '0 20px' }}>
          Please consider donating to support continued development of the
          extension.
        </div>

        <div className={css.actionContainer}>
          <a
            href="https://buymeacoffee.com/miseryconfusion"
            role="button"
            className={classNames(css.button, css.buttonDonateButton)}
          >
            Donate
          </a>
        </div>
        {!isFrankfurterLoading && !hasFrankfurter && (
          <div
            style={{
              borderTop: '1px solid #dbdbdb',
              marginTop: 18,
              padding: '20px 20px 0',
            }}
          >
            <div style={{ fontWeight: '500', color: '#888' }}>
              Optional Features
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 32,
              }}
            >
              <p>
                Grant access to <strong>api.frankfurter.app</strong> to enable
                currency conversion on the purchases page.
              </p>
              <button
                className={css.button}
                onClick={handleRequestFrankfurterPermission}
              >
                Enable
              </button>
            </div>
          </div>
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
