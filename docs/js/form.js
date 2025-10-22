const phrases = [
  "Dê o primeiro passo para o seu futuro na tecnologia.",
  "Aprenda do zero e transforme sua carreira.",
  "Seu sucesso começa aqui.",
];
let i = 0;
const effect = document.getElementById("subText");

effect.textContent = phrases[i];
setInterval(() => {
  effect.classList.add("fade-out");

  setTimeout(() => {
    i = (i + 1) % phrases.length;
    effect.textContent = phrases[i];
    effect.classList.remove("fade-out");
  }, 500);
}, 4000);
