import { useEffect, useState } from 'react';

import { fetchBandcampTrackInfoStore } from '~/utils/fetchBandcampTrackInfoStore';
import type { TrackInfoByUrl } from '~/types';
import AlbumTrackBpms from './AlbumTrackBpms';
import { BpmProvider } from '../BpmContext';
import CurrentTrackBpm from './CurrentTrackBpm';
import { useAudioController } from '../useAudioController';
import TralbumPagePitchAdjust from './PitchAdjust';
import useAudio from '../AudioStore';

import * as styles from './TralbumPage.module.scss';
import classNames from 'classnames';

const TralbumPage = ({
  getCurrTrackUrl,
  isMobile,
}: {
  getCurrTrackUrl: () => string | undefined;
  isMobile?: boolean;
}) => {
  const [trackInfoStore, setTrackInfoStore] = useState<TrackInfoByUrl>();

  useAudioController({ selector: 'audio', getCurrTrackUrl });

  useEffect(() => {
    fetchBandcampTrackInfoStore().then((store) => setTrackInfoStore(store));
  }, []);

  const currTrackUrl = useAudio(({ currTrackUrl }) => currTrackUrl);

  if (!trackInfoStore) {
    return null;
  }

  if (!currTrackUrl) {
    return null;
  }

  if (!trackInfoStore[currTrackUrl]) {
    return null;
  }

  return (
    <BpmProvider initialTrackInfoStore={trackInfoStore}>
      <AlbumTrackBpms />
      <div
        className={classNames(styles.container, { [styles.mobile]: isMobile })}
      >
        <CurrentTrackBpm />
        <div className={styles.separator}></div>
        <div className={styles.pitchAdjustContainer}>
          <TralbumPagePitchAdjust />
        </div>
      </div>
    </BpmProvider>
  );
};

export default TralbumPage;
