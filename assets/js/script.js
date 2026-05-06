const root = document.documentElement;
const toggleButton = document.getElementById("theme-toggle");
const sunIcon = document.querySelector(".theme-sun");
const moonIcon = document.querySelector(".theme-moon");
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function applyTheme(theme) {
  const isDark = theme === "dark";
  root.classList.toggle("dark", isDark);
  sunIcon.classList.toggle("hidden", isDark);
  moonIcon.classList.toggle("hidden", !isDark);
}

applyTheme(storedTheme || (prefersDark ? "dark" : "light"));

toggleButton?.addEventListener("click", () => {
  const nextTheme = root.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem("theme", nextTheme);
  applyTheme(nextTheme);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const certificateButtons = document.querySelectorAll(".certificate-button");
const certificateTitle = document.getElementById("certificate-title");
const certificateFrame = document.getElementById("certificate-frame");
const certificateOpenLink = document.getElementById("certificate-open-link");

function setActiveCertificate(button) {
  const title = button.dataset.certificateTitle;
  const file = button.dataset.certificateFile;

  certificateButtons.forEach((item) => item.classList.remove("active"));
  button.classList.add("active");

  if (certificateTitle) {
    certificateTitle.textContent = title;
  }

  if (certificateFrame) {
    certificateFrame.src = file;
  }

  if (certificateOpenLink) {
    certificateOpenLink.href = file;
  }
}

certificateButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveCertificate(button));
});
