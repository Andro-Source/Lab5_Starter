// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  const voiceSelect = document.getElementById("voice-select");
  const textArea = document.querySelector("textarea");
  const button = document.querySelector("button");
  const faceImg = document.querySelector("section img");

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = "";

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = voices[i].name;
      voiceSelect.appendChild(option);
    }
  }

  loadVoices();
  speechSynthesis.addEventListener("voiceschanged", loadVoices);

  button.addEventListener("click", function () {
    const speech = new SpeechSynthesisUtterance(textArea.value);

    speech.voice = voices[voiceSelect.value];

    speech.addEventListener("start", function () {
      faceImg.src = "assets/images/smiling-open.png";
    });

    speech.addEventListener("end", function () {
      faceImg.src = "assets/images/smiling.png";
    });

    speechSynthesis.speak(speech);
  });
}
