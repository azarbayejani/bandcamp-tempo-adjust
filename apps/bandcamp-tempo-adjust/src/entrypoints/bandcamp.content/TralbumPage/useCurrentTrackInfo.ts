import { useBpm } from '../BpmContext';
import useAudio from '../AudioStore';

// The current track's BPM entry, or undefined before a track is known.
export const useCurrentTrackInfo = () => {
  const { trackInfoState } = useBpm();
  const currTrackUrl = useAudio(({ currTrackUrl }) => currTrackUrl);

  return {
    currTrackUrl,
    trackInfo: currTrackUrl
      ? trackInfoState.trackInfoStore[currTrackUrl]
      : undefined,
  };
};
