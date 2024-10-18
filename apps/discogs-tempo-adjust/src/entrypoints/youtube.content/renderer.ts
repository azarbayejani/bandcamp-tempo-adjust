export type YoutubeMessage =
  | {
      action: 'setPlaybackRate';
      playbackRate: number;
    }
  | {
      action: 'togglePreservesPitch';
    };

class VideoController {
  private video: HTMLVideoElement;
  private playbackRate: number;
  private preservesPitch: boolean;

  constructor(video: HTMLVideoElement) {
    this.video = video;
    this.video.preservesPitch = false;
    this.playbackRate = video.playbackRate;
    this.preservesPitch = video.preservesPitch;

    window.addEventListener('message', this.handleMessage.bind(this));
    console.log('discogs-tempo-adjust: loaded');
  }

  setPlaybackRate(playbackRate: number) {
    this.playbackRate = playbackRate;
    this.video.playbackRate = playbackRate;
  }

  togglePreservesPitch() {
    this.preservesPitch = !this.preservesPitch;
    this.video.preservesPitch = this.preservesPitch;
  }

  handleMessage(event: MessageEvent) {
    if (event.origin && event.origin !== 'https://www.discogs.com') return;
    if (!event.data) return;

    let payload: YoutubeMessage | any;

    try {
      payload =
        typeof event.data === 'string'
          ? JSON.parse(event.data)
          : (event.data as YoutubeMessage | any);
    } catch (error) {
      return;
    }

    if (!('action' in payload)) {
      return;
    }

    switch (payload.action) {
      case 'setPlaybackRate':
        this.setPlaybackRate(payload.playbackRate);
        break;
      case 'togglePreservesPitch':
        this.togglePreservesPitch();
        break;
      default:
        break;
    }
  }

  forcePlaybackRate() {
    this.setPlaybackRate(this.playbackRate);
  }
}

const isYoutubePage = () => window.location.hostname === 'www.youtube.com';

const renderYoutubePage = () => {
  const video = document.querySelector('video');
  if (!video) return;
  const videoController = new VideoController(video);

  // if there is an ad and the playback rate is changed during the ad
  // we need to force update the playback rate when the actual video is ready
  const observer = new MutationObserver((records) => {
    videoController.forcePlaybackRate();
  });
  observer.observe(video, { attributes: true });
};

export { renderYoutubePage, isYoutubePage };
