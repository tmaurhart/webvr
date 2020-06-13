AFRAME.registerComponent("listener", {
  tick: function() {
    const userPositionZ = this.el.getAttribute("position")["z"];
    const userPositionX = this.el.getAttribute("position")["x"];
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
  },
});

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
        });
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
