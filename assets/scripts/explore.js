window.addEventListener("DOMContentLoaded", init);

function init() {
  const voiceSelect = document.getElementById("voice-select");
  const textArea = document.querySelector("textarea");
  const button = document.querySelector("button");
  const faceImg = document.querySelector("section img");

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = voices
      .map((voice, index) => `<option value="${index}">${voice.name}</option>`)
      .join("");
  }

  function speak() {
    const speech = new SpeechSynthesisUtterance(textArea.value);

    speech.voice = voices[voiceSelect.value];

    speech.addEventListener("start", () => {
      faceImg.src = "assets/images/smiling-open.png";
    });

    speech.addEventListener("end", () => {
      faceImg.src = "assets/images/smiling.png";
    });

    speechSynthesis.speak(speech);
  }

  loadVoices();
  speechSynthesis.addEventListener("voiceschanged", loadVoices);
  button.addEventListener("click", speak);
}
