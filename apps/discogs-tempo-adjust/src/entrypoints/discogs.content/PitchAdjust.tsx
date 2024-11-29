import React from 'react';
import useForceUpdate from './store';
import { YoutubeMessage } from '../youtube.content/renderer';
import { PitchAdjust } from '@tempo-adjust/player-components';

const getCurrentYoutubeIframe = () => {
  const iframes = document.querySelectorAll('iframe');
  if (iframes.length > 0) {
    return Array.from(iframes).find((frame) =>
      frame.src.startsWith('https://www.youtube.com')
    );
  }
};

const postMessageToYoutube = (message: YoutubeMessage) => {
  getCurrentYoutubeIframe()?.contentWindow?.postMessage(
    JSON.stringify(message),
    'https://www.youtube.com'
  );
};

const DiscogsPitchAdjust = () => {
  const counter = useForceUpdate((state) => state.count);
  const [playbackRate, setPlaybackRate] = React.useState(1);
  const [preservesPitch, setPreservesPitch] = React.useState(false);

  const togglePreservesPitch = () => {
    setPreservesPitch((prev) => !prev);
  };

  return (
    <PitchAdjust
      key={counter}
      onChangePreservesPitch={() => {
        togglePreservesPitch();
        postMessageToYoutube({ action: 'togglePreservesPitch' });
      }}
      onChangePlaybackRate={({ playbackRate }) => {
        setPlaybackRate(playbackRate);
        postMessageToYoutube({ action: 'setPlaybackRate', playbackRate });
      }}
      playbackRate={playbackRate}
      preservesPitch={preservesPitch}
    />
  );
};

export default DiscogsPitchAdjust;
