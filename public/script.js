const playlistContainerTag =
  document.getElementsByClassName("playlistContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const currentTimeTextandDurationTag = document.getElementsByClassName(
  "currentAndTotleTime"
)[0];
const currentProgressTag = document.getElementById("currentProgressID");
const playButtonTag = document.getElementsByClassName("playButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const previousButtonTag = document.getElementsByClassName("previousButton")[0];
const nextButtonTag = document.getElementsByClassName("nextButton")[0];
const tracks = [
  {
    trackId: "loa.mp3",
    title: "unknows",
  },

  {
    trackId: "loa.mp3",
    title: "unknowggggg",
  },
  {
    trackId: "loa.mp3",
    title: "unknowdfdgg",
  },
  {
    trackId: "loa.mp3",
    title: "unknow",
  },
];

for (let i = 0; i < tracks.length; i++) {
  const trackTag = document.createElement("div");
  trackTag.addEventListener("click", () => {
    currentPlayingIndex = i;
    playSong();
  });

  trackTag.classList.add("trackItem");
  const title = (i + 1).toString() + "." + tracks[i].title;
  trackTag.textContent = title;
  playlistContainerTag.append(trackTag);
}
let duration = 0;
let durationText = "00:00";
audioTag.addEventListener("loadeddata", () => {
  duration = Math.floor(audioTag.duration);
  durationText = createTime(duration);
});
audioTag.addEventListener("timeupdate", () => {
  const currentTime = Math.floor(audioTag.currentTime);
  const currentTimeText = createTime(currentTime);
  const currentTimeTextandDurationText = currentTimeText + " / " + durationText;
  currentTimeTextandDurationTag.textContent = currentTimeTextandDurationText;
  updateCurrentProgress(currentTime);
});
const updateCurrentProgress = (currentTime) => {
  const currentProgressWidth = (500 / duration) * currentTime;
  currentProgressTag.style.width = currentProgressWidth.toString() + "px";

};

const createTime = (totalSecond) => {
  const minutes = Math.floor(totalSecond / 60);
  const seconds = totalSecond % 60;
  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;

  const secondText = seconds < 10 ? "0 " + seconds.toString() : seconds;
  return minuteText + ":" + secondText;
};
let currentPlayingIndex = 0;
let isplaying = false;
playButtonTag.addEventListener("click", () => {
  const currentTime = Math.floor(audioTag.currentTime);
  isplaying = true;
  if (currentTime === 0) {
    playSong();
  } else {
    audioTag.play();
    updatePlayAndPauseButton();
  }
});
pauseButtonTag.addEventListener("click", () => {
  isplaying = false;
  audioTag.pause();
  updatePlayAndPauseButton();
});
previousButtonTag.addEventListener("click", () => {
  if (currentPlayingIndex == 0) {
    return;
  }
  currentPlayingIndex -= 1;
  playSong();
});
nextButtonTag.addEventListener("click", () => {
  if (currentPlayingIndex === tracks.length - 1) {
    return;
  }
  currentPlayingIndex += 1;
  playSong();
});
const playSong = () => {
  const songIdPlay = tracks[currentPlayingIndex].trackId;
  audioTag.src = songIdPlay;
  audioTag.play();
  isplaying = true;
  updatePlayAndPauseButton();
};

const updatePlayAndPauseButton = () => {
  if (isplaying) {
    playButtonTag.style.display = "none";
    pauseButtonTag.style.display = "inline";
  } else {
    playButtonTag.style.display = "inline";
    pauseButtonTag.style.display = "none";
  }
};
