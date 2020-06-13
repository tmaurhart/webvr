const cursor = document.getElementById("cursor");
cursor.setAttribute("visible", false);

const video = document.getElementById('boatVideo');
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

const soundboxes = document.querySelectorAll(".soundbox");
var musicPlaying = false;
AFRAME.registerComponent("toggle-play", {
  init: function() {
    //var myEl = document.querySelector(".soundbox");
    var el = this.el;
    el.addEventListener("click", function() {
      if (musicPlaying) {
        soundboxes.forEach(function(e) {
          e.components.sound.stopSound();
          e.setAttribute("color", "#AA0000");
          musicPlaying = false;
        })
      } else {
        el.components.sound.playSound();
        el.setAttribute("color", "#00AA00");
        musicPlaying = true;
      }
    });
  },
});
AFRAME.registerComponent("stop", {
  init: function() {
    var myEl = document.querySelector(".soundbox");
    this.el.addEventListener("click", function() {
      myEl.components.sound.stopSound();
    });
  },
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
