const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// načtení uloženého tématu
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
  toggleButton.textContent = "🌙";
} else {
  toggleButton.textContent = "☀️";
}

// přepínání
toggleButton.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggleButton.textContent = "🌙";
  } else {
    localStorage.setItem("theme", "dark");
    toggleButton.textContent = "☀️";
  }
});