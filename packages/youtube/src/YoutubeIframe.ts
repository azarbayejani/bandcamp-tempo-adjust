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
  private allowedOrigins: string[];

  constructor(
    video: HTMLVideoElement,
    { allowedOrigins }: { allowedOrigins: string[] }
  ) {
    this.video = video;
    this.video.preservesPitch = false;
    this.playbackRate = video.playbackRate;
    this.preservesPitch = video.preservesPitch;
    this.allowedOrigins = allowedOrigins;

    window.addEventListener('message', this.handleMessage.bind(this));
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
    if (!event.origin || !this.allowedOrigins.includes(event.origin)) return;
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

function waitForSelector<K extends keyof HTMLElementTagNameMap>(
  selector: K
): Promise<HTMLElementTagNameMap[K] | null> {
  return new Promise((resolve) => {
    const element = document.querySelector(selector);
    if (element) {
      return resolve(element);
    }

    const observer = new MutationObserver((mutations) => {
      const element = document.querySelector(selector);
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });

    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

const renderYoutubeIframe = async ({
  allowedOrigins,
}: {
  allowedOrigins: string[];
}) => {
  const isTop = window.self === window.top;

  // must be in iframe
  if (isTop) return;

  const video = await waitForSelector('video');
  if (!video) return;
  const videoController = new VideoController(video, { allowedOrigins });

  // if there is an ad and the playback rate is changed during the ad
  // we need to force update the playback rate when the actual video is ready
  const observer = new MutationObserver((records) => {
    videoController.forcePlaybackRate();
  });

  observer.observe(video, { attributes: true });
};

export { renderYoutubeIframe, isYoutubePage };
