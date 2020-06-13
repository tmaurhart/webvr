

const soundboxes = document.querySelectorAll(".soundbox");
var musicPlaying = false;

const cursor = document.getElementById("cursor");
cursor.setAttribute("visible", false);

const video = document.getElementById("boatVideo");
video.pause();
// Workaround for mobile video
// uses the splash screen button to trigger video play/pause so that the
// video will auto play when the user enters boat room
const enterButton = document.querySelector('.splash__button')
const splash = document.querySelector('.splash');

enterButton.addEventListener('click', () => {
  video.play();
  video.pause();
  splash.style.display = 'none';
});
