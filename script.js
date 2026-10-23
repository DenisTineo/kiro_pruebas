const btn = document.getElementById("greetBtn");
const greetings = ["Hello!", "Hola!", "Bonjour!", "Ciao!", "Hallo!", "こんにちは!"];

btn.addEventListener("click", () => {
  const random = greetings[Math.floor(Math.random() * greetings.length)];
  btn.textContent = random;
});
