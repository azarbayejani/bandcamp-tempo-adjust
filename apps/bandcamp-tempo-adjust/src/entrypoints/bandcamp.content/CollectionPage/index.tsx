import React from 'react';
import PitchAdjust from './PitchAdjust';
import { AudioController } from '../AudioController';

const CollectionPage = () => {
  useEffect(() => {
    new AudioController('audio');
  }, []);

  return <PitchAdjust />;
};

export default CollectionPage;
