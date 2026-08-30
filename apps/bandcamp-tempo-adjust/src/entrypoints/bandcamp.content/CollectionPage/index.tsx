import PitchAdjust from './PitchAdjust';
import { useAudioController } from '../useAudioController';

const CollectionPage = () => {
  useAudioController({ selector: 'audio' });

  return <PitchAdjust />;
};

export default CollectionPage;
