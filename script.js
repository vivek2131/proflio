// Smooth Scroll (Optional if using scroll-behavior in CSS)
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("toggle-dark");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});

// Form Validation
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default form submission
  const name = this.querySelector("input[type='text']").value.trim();
  const email = this.querySelector("input[type='email']").value.trim();
  const message = this.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Thank you for your message, " + name + "!");
  this.reset(); // Clear the form
});

const texts = ["Web Developer", "Creative Coder", "Designer"];
let currentText = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-text");

function type() {
  if (charIndex < texts[currentText].length) {
    typingElement.textContent += texts[currentText].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = texts[currentText].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    currentText = (currentText + 1) % texts.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, 500);
});

