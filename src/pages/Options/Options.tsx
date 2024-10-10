import React, { useEffect } from 'react';
import './Options.css';
import browser from 'webextension-polyfill';
import {
  REQUIRED_PERMISSIONS,
  hasAllPermissions,
} from '../../services/background/hasAllPermissions';
import { useQuery, useQueryClient } from '@tanstack/react-query';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  const { data: hasPermissions, isLoading } = useQuery(['permissions'], {
    queryFn: hasAllPermissions,
  });
  const queryClient = useQueryClient();

  const handleRequestPermissions = () => {
    browser.permissions.request(REQUIRED_PERMISSIONS);
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
      <div className="Options">
        <img src="/icon-128.png" alt="Bandcamp Tempo Adjust logo" />
        <p style={{ textAlign: 'center' }}>
          Bandcamp Tempo Adjust needs your permission to access bandcamp.com and
          bcbits.com in order to work correctly.
        </p>
        <button className="button" onClick={handleRequestPermissions}>
          Allow
        </button>
      </div>
    </div>
  ) : (
    <div className="OptionsContainer">
      <div className="Options Options--withFooter">
        <img src="/icon-128.png" alt="Bandcamp Tempo Adjust logo" />
        <div className="center">
          <h1>Thanks for installing Bandcamp Tempo Adjust!</h1>
        </div>
        <div className="center" style={{ padding: '0 20px' }}>
          Please consider donating to support continued development of the
          extension.
        </div>

        <div className="actionContainer">
          <a
            href="https://buymeacoffee.com/miseryconfusion"
            role="button"
            className="button"
          >
            Donate
          </a>
        </div>
        <div className="center footer">
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
