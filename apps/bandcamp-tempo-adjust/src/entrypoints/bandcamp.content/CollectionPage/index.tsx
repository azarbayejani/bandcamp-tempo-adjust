import React from 'react';
import { BpmProvider } from '../BpmContext';
import PitchAdjust from './PitchAdjust';

const CollectionPage = () => {
  return (
    <BpmProvider
      selector="audio"
      initialTrackInfoStore={{}}
      getCurrTrackUrl={() => ''}
    >
      <PitchAdjust />
    </BpmProvider>
  );
};

export default CollectionPage;
