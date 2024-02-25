let show_video = document.getElementById("show-video");
let current_time = document.getElementById("current-time");
let total_duration = document.getElementById("total-duration");
let range_time = document.getElementById("range-time");
let range_volume = document.getElementById("range-volume");
let range_speed = document.getElementById("range-speed");

function play_video() {
  show_video.play();
}

function pause_video() {
  show_video.pause();
}

function on_time_update() {
  current_time.innerText = Math.round(show_video.currentTime);
  total_duration.innerText = Math.round(show_video.duration);
  range_time.value = show_video.currentTime;
}

function mute_video(img) {
  if (show_video.muted) {
    show_video.muted = false;
    img.src = "volume.png";
  } else {
    show_video.muted = true;
    img.src = "mute.png";
  }
}
function play_back_5_video() {
  check_time_video_to_change_current_time(-5);
}

function play_back_1_video() {
  check_time_video_to_change_current_time(-1);
}

function play_front_5_video() {
  check_time_video_to_change_current_time(5);
}

function play_front_1_video() {
  check_time_video_to_change_current_time(1);
}

function check_time_video_to_change_current_time(steps) {
  if (show_video.currentTime < show_video.duration) {
    show_video.currentTime += steps;
  }
}

show_video.onloadeddata = function () {
  let current_time_video = Math.round(show_video.currentTime);
  let total_time_video = Math.round(show_video.duration);
  current_time.innerText = `${current_time_video}.0`;
  total_duration.innerText = `${total_time_video}.0`;
  range_time.max = total_time_video;
  range_time.value = range_time.max / 2;
  show_video.currentTime = range_time.value;
};

range_time.onchange = function () {
  show_video.currentTime = range_time.value;
};

range_volume.onchange = function () {
  show_video.volume = range_volume.value;
};

range_speed.onchange = function () {
  show_video.playbackRate = range_speed.value;
};
