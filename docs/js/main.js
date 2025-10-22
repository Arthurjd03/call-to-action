document.addEventListener("DOMContentLoaded", () => {
  // Seletores principais
  const track = document.querySelector(".cards-track");
  const cards = document.querySelectorAll(".improvement");

  let currentIndex = 0;
  const cardGap = 32;
  const totalCards = cards.length;

  function updateCards() {
    const cardWidth = cards[0].offsetWidth + cardGap;
    const offset = -cardWidth * currentIndex;
    track.style.transform = `translateX(${offset}px)`;
  }

  window.addEventListener("resize", updateCards);

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCards();
  }, 6000);

  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const destination = document.getElementById("text");

  let totalTime = 60 * 60;
  function updatecounter() {
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");

    if (totalTime <= 0) {
      clearInterval(countdownInterval);
      alert("Tempo esgotado!");
      resetTimer();
    }
    totalTime--;
  }
  function resetTimer() {
    clearInterval(countdownInterval);
    totalTime = 60 * 60;
    updatecounter();
    countdownInterval = setInterval(updatecounter, 1000);
  }

  const countdownInterval = setInterval(updatecounter, 1000);
  updatecounter();

  const textFull = "Ministrado por Arthur José.";
  let i = 0;
  function digitar() {
    if (i < textFull.length) {
      destination.innerHTML += textFull.charAt(i);
      i++;
      setTimeout(digitar, 60);
    }
  }
  digitar();
});
