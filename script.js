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

const sectionFadeItems = [...document.querySelectorAll("main > section.reveal:not(.statement)")];
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

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

const updateSectionFade = () => {
  if (!sectionFadeItems.length) {
    return;
  }

  if (reducedMotionQuery.matches) {
    sectionFadeItems.forEach((item) => {
      item.style.removeProperty("--scroll-opacity");
      item.style.removeProperty("--scroll-shift");
    });
    return;
  }

  const viewportHeight = window.innerHeight;
  const focusLine = viewportHeight * 0.52;
  const fadeRadius = viewportHeight * 0.72;

  sectionFadeItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    const center = rect.top + rect.height / 2;
    const distance = Math.abs(center - focusLine);
    const fadeStrength = Math.max(0, 1 - distance / fadeRadius);
    const opacity = 0.24 + fadeStrength * 0.76;
    const shift = (1 - fadeStrength) * 20;

    item.style.setProperty("--scroll-opacity", opacity.toFixed(3));
    item.style.setProperty("--scroll-shift", `${shift.toFixed(2)}px`);
  });
};

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

let scrollTicking = false;

const runScrollEffects = () => {
  updateScrollProgress();
  updateSectionFade();
  scrollTicking = false;
};

const onScroll = () => {
  if (scrollTicking) {
    return;
  }

  scrollTicking = true;
  window.requestAnimationFrame(runScrollEffects);
};

runScrollEffects();
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", runScrollEffects);

if (typeof reducedMotionQuery.addEventListener === "function") {
  reducedMotionQuery.addEventListener("change", runScrollEffects);
} else if (typeof reducedMotionQuery.addListener === "function") {
  reducedMotionQuery.addListener(runScrollEffects);
}
