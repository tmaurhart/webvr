const cursor = document.getElementById("cursor");
cursor.setAttribute("visible", false);

const video = document.getElementById('theaterVideo');
video.pause();
AFRAME.registerComponent('listener', {
  tick: function () {
    const userPositionZ = this.el.getAttribute('position')["z"];
    const userPositionX = this.el.getAttribute('position')["x"];
    // const userPositionY = this.el.getAttribute("position")["y"];

    // room 4 abba
    if (userPositionX < -5 && userPositionZ > -8 && userPositionZ < -1) {
      cursor.setAttribute("visible", true);
    } else {
      cursor.setAttribute("visible", false);
    }
    // room video
    if (userPositionZ <= -17) {
      video.play();
    } else {
      video.pause();
    }
  }
});

// Workaround for mobile video
// uses the splash screen button to trigger video play/pause so that the
// video will auto play when the user enters the theater room
const enterButton = document.querySelector('.splash__button')
const splash = document.querySelector('.splash');

enterButton.addEventListener('click', () => {
  video.play();
  video.pause();
  splash.style.display = 'none';
});
