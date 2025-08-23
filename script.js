// Dark Mode Toggle
const darkToggle = document.getElementById("darkModeToggle");
darkToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Modals
const aboutBtn = document.getElementById("aboutBtn");
const workBtn = document.getElementById("workBtn");
const aboutModal = document.getElementById("aboutModal");
const workModal = document.getElementById("workModal");
const closeButtons = document.querySelectorAll(".close");

// Open modals
aboutBtn.addEventListener("click", () => aboutModal.style.display = "flex");
workBtn.addEventListener("click", () => workModal.style.display = "flex");

// Close modals
closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.close).style.display = "none";
  });
});

// Close when clicking outside modal content
window.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
