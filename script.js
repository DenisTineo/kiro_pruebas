const btn = document.getElementById("greetBtn");
const greetings = ["Hello!", "Hola!", "Bonjour!", "Ciao!", "Hallo!", "こんにちは!"];

let index = 0;

btn.addEventListener("click", () => {
  index = (index + 1) % greetings.length;
  btn.textContent = greetings[index];
});
