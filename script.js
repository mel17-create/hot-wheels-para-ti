const loading = document.getElementById("loading");
const bouquet = document.getElementById("bouquet");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");
const message = document.getElementById("message");
const messageText = document.getElementById("messageText");
const close = document.getElementById("close");

let p = 0;

/* Primero carga y después aparece el ramo */
const loader = setInterval(() => {
  p += 2;
  bar.style.width = p + "%";
  percent.textContent = p + "%";

  if (p >= 100) {
    clearInterval(loader);
    setTimeout(() => {
      loading.classList.add("hidden");
      bouquet.classList.remove("hidden");
    }, 450);
  }
}, 45);

/* Cada flor abre un mensaje diferente */
document.querySelectorAll(".flower").forEach(flower => {
  flower.addEventListener("click", () => {
    messageText.textContent = flower.dataset.message;
    message.classList.remove("hidden");
  });
});

close.addEventListener("click", () => {
  message.classList.add("hidden");
});
