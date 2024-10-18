interface FetchAudioBufferFromUrlStartMessage {
  type: 'START';
}

interface FetchAudioBufferFromUrlDataMessage {
  type: 'DATA';
  startIndex: number;
  data: any;
}

interface FetchAudioBufferFromUrlEndMessage {
  type: 'END';
}

interface FetchAudioBufferFromUrlErrorMessage {
  type: 'ERROR';
  reason?: any;
}

export type FetchAudioBufferFromUrlMessage =
  | FetchAudioBufferFromUrlDataMessage
  | FetchAudioBufferFromUrlStartMessage
  | FetchAudioBufferFromUrlErrorMessage
  | FetchAudioBufferFromUrlEndMessage;

export type TrackInfo = {
  bpm?: number;
  trackNumber: number;
  audioPath: string;
  url: string;
  loading: boolean;
  error: boolean;
};
export type TrackInfoByUrl = {
  [key: string]: TrackInfo;
};
