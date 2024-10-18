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
  return (
    <PitchAdjust
      key={counter}
      onChangePreservesPitch={() => {
        postMessageToYoutube({ action: 'togglePreservesPitch' });
      }}
      onChangeTempo={({ playbackRate }) => {
        postMessageToYoutube({ action: 'setPlaybackRate', playbackRate });
      }}
    />
  );
};

export default DiscogsPitchAdjust;
