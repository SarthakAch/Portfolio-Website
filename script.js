// ===== Dark Mode Toggle =====
const darkToggle = document.getElementById("darkModeToggle");
if (darkToggle) {
  const saved = localStorage.getItem("prefers-dark");
  if (saved === "true") {
    document.body.classList.add("dark-mode");
    darkToggle.checked = true;
  }

  darkToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("prefers-dark", document.body.classList.contains("dark-mode"));
  });
}

// ===== Modals =====
const aboutBtn = document.getElementById("aboutBtn");
const workBtn = document.getElementById("workBtn");
const aboutModal = document.getElementById("aboutModal");
const workModal = document.getElementById("workModal");
const closeButtons = document.querySelectorAll(".close");

// open
if (aboutBtn && aboutModal) {
  aboutBtn.addEventListener("click", (e) => {
    e.preventDefault();
    aboutModal.style.display = "flex";
  });
}
if (workBtn && workModal) {
  workBtn.addEventListener("click", (e) => {
    e.preventDefault();
    workModal.style.display = "flex";
  });
}

// close buttons
closeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.close;
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
});

// click outside to close
window.addEventListener("click", (e) => {
  if (e.target.classList && e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
