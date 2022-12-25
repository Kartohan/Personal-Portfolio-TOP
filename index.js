const sections = document.querySelectorAll("section");
const blocks = document.querySelectorAll(".expirience-block");

const observer_section = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.4,
  }
);

const observer_blocks = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-block");
      }
    });
  },
  {
    threshold: 0.8,
  }
);

sections.forEach((section) => {
  observer_section.observe(section);
});

blocks.forEach((block) => {
  observer_blocks.observe(block);
});
