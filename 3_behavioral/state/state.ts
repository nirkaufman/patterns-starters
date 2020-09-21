// extract the state
abstract class VideoState {
  protected videoPlayer: VideoPlayer;

  setContext(context: VideoPlayer) {
    this.videoPlayer = context;
    this.init();
  }

  abstract init(): void;
  abstract play(): void;
  abstract stop(): void;
}
