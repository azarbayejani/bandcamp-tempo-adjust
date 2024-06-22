import React, { useEffect } from 'react';
import './Options.css';
import browser from 'webextension-polyfill';
import hasAllPermissions from '../../services/hasCorrectOrigins';
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
    browser.permissions.request({
      origins: [
        'https://*.bandcamp.com/*',
        'http://*.bandcamp.com/*',
        'https://*.bcbits.com/stream/*',
      ],
    });
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

  return (
    <div className="OptionsContainer">
      {!isLoading && !hasPermissions ? (
        <>
          <p>
            Bandcamp Tempo Adjust needs your permission to access bandcamp.com
            in order to work correctly
          </p>
          <button onClick={handleRequestPermissions}>Allow</button>
        </>
      ) : (
        <>
          <h1>Thanks for installing Bandcamp Tempo Adjust!</h1>

          <div>
            Please consider donating to continue development of the extension.
          </div>

          <div className="actionContainer">
            <div>
              <a
                href="https://www.paypal.com/donate/?business=8PMHBGHW49248&no_recurring=0&item_name=Your+generosity+goes+towards+me+drinking+a+fancy+cocktail+every+once+and+a+while.&currency_code=USD"
                role="button"
                className="button"
              >
                Donate
              </a>
            </div>
            <div>
              <a
                href="https://github.com/azarbayejani/bandcamp-tempo-adjust"
                className="button"
                role="button"
              >
                Report a bug
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Options;
