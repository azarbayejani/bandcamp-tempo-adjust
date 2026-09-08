import { useEffect, useState } from 'react';

import { fetchBandcampTrackInfoStore } from '~/utils/fetchBandcampTrackInfoStore';
import type { TrackInfoByUrl } from '~/types';
import AlbumTrackBpms from './AlbumTrackBpms';
import { BpmProvider } from '../BpmContext';
import CurrentTrackBpm from './CurrentTrackBpm';
import { useAudioController } from '../useAudioController';
import TralbumPagePitchAdjust from './PitchAdjust';
import TralbumPageMobileTempoPanel from './MobileTempoPanel';
import useAudio from '../AudioStore';
import { useIsMobile } from '@tempo-adjust/theme-provider';

import * as styles from './TralbumPage.module.scss';
import classNames from 'classnames';

const TralbumPage = ({
  getCurrTrackUrl,
}: {
  getCurrTrackUrl: () => string | undefined;
}) => {
  const isMobile = useIsMobile();
  const [trackInfoStore, setTrackInfoStore] = useState<TrackInfoByUrl>();

  useAudioController({ selector: 'audio', getCurrTrackUrl });

  useEffect(() => {
    fetchBandcampTrackInfoStore().then((store) => setTrackInfoStore(store));
  }, []);

  const currTrackUrl = useAudio(({ currTrackUrl }) => currTrackUrl);

  if (!trackInfoStore) {
    return null;
  }

  // The provider stays mounted while the current track is unknown (no
  // src yet, or a track we can't analyze) so detected BPMs and in-flight
  // analyses survive the transition; only the tempo panel is hidden.
  const hasCurrentTrack = !!currTrackUrl && !!trackInfoStore[currTrackUrl];

  return (
    <BpmProvider initialTrackInfoStore={trackInfoStore}>
      <AlbumTrackBpms />
      {hasCurrentTrack &&
        (isMobile ? (
          <div className={classNames(styles.container, styles.mobile)}>
            <TralbumPageMobileTempoPanel />
          </div>
        ) : (
          <div className={styles.container}>
            <CurrentTrackBpm />
            <div className={styles.separator}></div>
            <div className={styles.pitchAdjustContainer}>
              <TralbumPagePitchAdjust />
            </div>
          </div>
        ))}
    </BpmProvider>
  );
};

export default TralbumPage;
