import React, { useEffect } from 'react';
import browser from 'webextension-polyfill';
import {
  requestAllPermissions,
  hasAllPermissions,
} from '@tempo-adjust/permissions';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import * as css from './OptionsPage.module.css';

const bandcampTempoAdjustLogo = '/icon-128.png';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  const { data: hasPermissions, isLoading } = useQuery(['permissions'], {
    queryFn: hasAllPermissions,
  });
  const queryClient = useQueryClient();

  const handleRequestPermissions = () => {
    requestAllPermissions();
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

  return !isLoading && !hasPermissions ? (
    <div className="OptionsContainer">
      <div className={css.options}>
        <img src={bandcampTempoAdjustLogo} alt="Bandcamp Tempo Adjust logo" />
        <p style={{ textAlign: 'center' }}>
          Bandcamp Tempo Adjust needs your permission to access bandcamp.com and
          bcbits.com in order to work correctly.
        </p>
        <button className={css.button} onClick={handleRequestPermissions}>
          Allow
        </button>
      </div>
    </div>
  ) : (
    <div className="OptionsContainer">
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
            className={css.button}
          >
            Donate
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
