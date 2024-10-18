import React from 'react';
import { AudioProvider } from '../AudioContext';
import PitchAdjust from './PitchAdjust';

const CollectionPage = () => {
  return (
    <AudioProvider
      selector="audio"
      initialTrackInfoStore={{}}
      getCurrTrackUrl={() => ''}
    >
      <PitchAdjust />
    </AudioProvider>
  );
};

export default CollectionPage;
