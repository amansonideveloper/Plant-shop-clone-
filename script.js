// Scroll animation for plant cards
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
