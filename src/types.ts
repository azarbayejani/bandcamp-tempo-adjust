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

export type FetchAudioBufferFromUrlMessage =
  | FetchAudioBufferFromUrlDataMessage
  | FetchAudioBufferFromUrlStartMessage
  | FetchAudioBufferFromUrlEndMessage;

export type TrackInfo = {
  bpm?: number;
  trackNumber: number;
  audioPath: string;
  url: string;
  loading: boolean;
};
export type TrackInfoByUrl = {
  [key: string]: TrackInfo;
};
