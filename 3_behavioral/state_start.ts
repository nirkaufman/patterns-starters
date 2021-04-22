class VideoPlayer {

  public play() {
    console.log('Start playing!');
  }

  public stop(){
    console.log('Stop video');
  }
}

// todo: video player starts with a video at position 0 ready to play
const videoPlayer = new VideoPlayer();

// todo: if ready: play the video
videoPlayer.play();

// todo: if already playing: do nothing
videoPlayer.play();

// todo: if was playing: stop the video at current position (pause)
videoPlayer.stop();

// todo: if paused: return to start position
videoPlayer.stop();
