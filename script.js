const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const body = document.body;
const modeToggle = document.querySelector(".mode-toggle");
const savedTheme = localStorage.getItem("portfolio-theme");

const syncThemeLabel = () => {
  if (!modeToggle) {
    return;
  }

  modeToggle.textContent = body.dataset.theme === "night" ? "Day Mode" : "After Dark";
};

if (savedTheme === "day" || savedTheme === "night") {
  body.dataset.theme = savedTheme;
}

syncThemeLabel();

if (modeToggle) {
  modeToggle.addEventListener("click", () => {
    body.dataset.theme = body.dataset.theme === "night" ? "day" : "night";
    localStorage.setItem("portfolio-theme", body.dataset.theme);
    syncThemeLabel();
  });
}

const revealItems = [...document.querySelectorAll(".reveal")];
revealItems.forEach((item, index) => {
  item.dataset.delay = String(index % 4);
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -8% 0px",
  }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});

const progressBar = document.querySelector(".page-progress-bar");

const updateScrollProgress = () => {
  if (!progressBar) {
    return;
  }

  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollableHeight <= 0) {
    progressBar.style.width = "0%";
    return;
  }

  const progress = (window.scrollY / scrollableHeight) * 100;
  progressBar.style.width = `${Math.min(progress, 100)}%`;
};

updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
