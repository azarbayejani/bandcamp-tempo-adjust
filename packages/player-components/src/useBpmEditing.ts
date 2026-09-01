import { useState } from 'react';

// Owns the edit-BPM flow shared by the desktop and mobile panels. The
// user types the BPM they hear at the current playback rate, so the
// saved value is divided back to the track's natural BPM.
const useBpmEditing = ({
  playbackRate,
  onSaveBpm,
}: {
  playbackRate: number;
  onSaveBpm: (bpm: number) => void;
}) => {
  const [editing, setEditing] = useState(false);

  return {
    editing,
    startEditing: () => setEditing(true),
    cancelEditing: () => setEditing(false),
    saveBpm: (bpmText?: string) => {
      setEditing(false);
      const bpmNumber = Number(bpmText);
      if (bpmNumber && !Number.isNaN(bpmNumber)) {
        onSaveBpm(bpmNumber / playbackRate);
      }
    },
  };
};

export default useBpmEditing;
