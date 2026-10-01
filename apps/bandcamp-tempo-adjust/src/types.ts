interface FetchAudioBufferFromUrlStartMessage {
  type: 'START';
}

interface FetchAudioBufferFromUrlDataMessage {
  type: 'DATA';
  startIndex: number;
  // Audio bytes as base64. Chrome and Safari serialize port messages as
  // JSON, which has no binary type, so an ArrayBuffer can't be sent as-is.
  data: string;
}

interface FetchAudioBufferFromUrlEndMessage {
  type: 'END';
}

interface FetchAudioBufferFromUrlErrorMessage {
  type: 'ERROR';
  reason: string;
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
