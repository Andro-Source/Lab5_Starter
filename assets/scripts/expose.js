// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImg = document.querySelector("section img");
  const audio = document.querySelector("audio");
  const volumeSlider = document.getElementById("volume");
  const volumeImg = document.querySelector("#volume-controls img");
  const playButton = document.querySelector("button");

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener("change", function () {
    hornImg.src = "assets/images/" + hornSelect.value + ".svg";
    audio.src = "assets/audio/" + hornSelect.value + ".mp3";
  });

  volumeSlider.addEventListener("input", function () {
    const volume = volumeSlider.value;

    audio.volume = volume / 100;

    if (volume == 0) {
      volumeImg.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeImg.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeImg.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImg.src = "assets/icons/volume-level-3.svg";
    }
  });

  playButton.addEventListener("click", function () {
    audio.play();

    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });
}
