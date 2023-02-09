const playListContainerTag =
  document.getElementsByClassName("playListContainer")[0];
const currentTimeAndTotaltimeTag = document.getElementsByClassName(
  "currentTimeAndTotaltime"
)[0];
const audioTag = document.getElementsByClassName("song")[0];
const currentProgressTag = document.getElementById("currentProgress");
const playButton = document.getElementsByClassName("play-btn")[0];
const pauseButton = document.getElementsByClassName("pause-btn")[0];
const nextButton = document.getElementsByClassName("next-btn")[0];
const backwardButton = document.getElementsByClassName("backward-btn")[0];
const tracks = [
  {
    trackId: "./public/loa.mp4",
    title: "SaiSaiKhamLeng- YeeZarSar",
  },
  {
    trackId: "loa.mp4",
    title: "GFatt-နာရတဲ့ကဗ်ာ",
  },
];
for (let i = 0; i < tracks.length; i++) {
  const trackTag = document.createElement("div");
  trackTag.classList.add("track-item");
  const title = (i + 1).toString() + " . " + tracks[i].title;
  trackTag.textContent = title;
  playListContainerTag.append(trackTag);
  trackTag.addEventListener("click", () => {
    const trackId = tracks[i].trackId;
    audioTag.src = trackId;
    audioTag.play();
  });
}
let dur_ation = 0;
let durationText = "00:00";
audioTag.addEventListener("loadeddata", () => {
  dur_ation = Math.floor(audioTag.duration);
  durationText = createMinuteAndSecondText(dur_ation);
});
audioTag.addEventListener("timeupdate", () => {
  const current_Time = Math.floor(audioTag.currentTime);
  const currentTimeText = createMinuteAndSecondText(current_Time);
  const currentTimeTextandDurationText = currentTimeText + ":" + durationText;
  currentTimeAndTotaltimeTag.textContent = currentTimeTextandDurationText;
  updateCurrentProgress(current_Time);
});

const updateCurrentProgress = (current_Time) => {
  const currentProgresswitdh = (500 / dur_ation) * current_Time;
  currentProgressTag.style.width = currentProgresswitdh + "px";
};

const createMinuteAndSecondText = (totalSeconds) => {
  const minute = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const minuteText = minute < 10 ? "0" + minute.toString() : minute;
  const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
  return minuteText + ":" + secondsText;
};
