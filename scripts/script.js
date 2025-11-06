function animateStats() {
  document.querySelectorAll(".stat-number").forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const duration = target > 5000 ? 1500 : 900;
      const increment = target / (duration / 16);
      let count = +counter.innerText.replace("+", "");
      if (count < target) {
        counter.innerText = Math.ceil(count + increment) + "+";
        setTimeout(updateCount, 16);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });
}

let statsAnimated = false;
const statsSection = document.querySelector(".stats-section");
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !statsAnimated) {
        animateStats();
        statsAnimated = true;
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
); // half-visible triggers
observer.observe(statsSection);
