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
