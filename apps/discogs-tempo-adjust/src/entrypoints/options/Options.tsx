import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

import {
  hasAllPermissions,
  requestAllPermissions,
} from '../../utils/permissions';

import * as css from './Options.module.scss';
import classNames from 'classnames';

const LogoLarge = '/discogs-tempo-adjust-logo.png';

const Options: React.FC = () => {
  const { data: hasPermissions, isLoading } = useQuery(['permissions'], {
    queryFn: hasAllPermissions,
  });
  const queryClient = useQueryClient();

  const handleRequestPermissions = async () => {
    await requestAllPermissions();
    queryClient.invalidateQueries(['permissions']);
  };

  if (isLoading) {
    return null;
  }

  if (!hasPermissions) {
    return (
      <div>
        <div className={css.options}>
          <img
            src={LogoLarge}
            alt="Discogs Tempo Adjust"
            className={css.logo}
          />
          <p className={css.center}>
            Discogs Tempo Adjust needs your permission to access discogs.com and
            youtube.com in order to work correctly.
          </p>
          <button className={css.button} onClick={handleRequestPermissions}>
            Allow
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={classNames(css.options, css.optionsWithFooter)}>
        <img src={LogoLarge} alt="Discogs Tempo Adjust" className={css.logo} />
        <div className={css.center}>
          <h1>Thanks for installing Discogs Tempo Adjust</h1>
        </div>
        <div className={classNames(css.center, css.donationText)}>
          Please consider donating to support continued development of the
          extension.
        </div>
        <div className={css.actionContainer}>
          <a
            href="https://www.buymeacoffee.com/miseryconfusion"
            className={css.button}
            role="button"
          >
            buy me a coffee
          </a>
        </div>
        <div className={classNames(css.center, css.footer)}>
          <a
            href="https://github.com/miseryconfusion/discogs-tempo-adjust"
            className={css.button}
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
