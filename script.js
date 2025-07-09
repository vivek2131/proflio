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
const GITHUB_USERNAME = "vivek2131";
const projectsContainer = document.getElementById("github-projects");

async function fetchGitHubRepos() {
  try {
    const res = await fetch(`https://api.github.com/users/${vivek2131}/repos`);
    const repos = await res.json();

    repos.slice(0, 6).forEach(repo => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;

      projectsContainer.appendChild(card);
    });
  } catch (error) {
    console.error("GitHub API error:", error);
    projectsContainer.innerHTML = "<p>Failed to load projects.</p>";
  }
}

// Animate skill bars when Skills section is in view
const skillsSection = document.getElementById('skills');
const skillBars = document.querySelectorAll('.bar-fill');

function animateSkillBars() {
  skillBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.width = percent + '%';
    bar.classList.add('animated');
  });
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(skillsSection);
} else {
  // Fallback for old browsers
  animateSkillBars();
}

