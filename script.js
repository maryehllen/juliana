window.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-wrapper");

  carousels.forEach(wrapper => {
    const carousel = wrapper.querySelector(".carousel");
    const arrowLeft = wrapper.querySelector(".arrow-left");
    const arrowRight = wrapper.querySelector(".arrow-right");
    const scrollAmount = 220;

    if (arrowLeft) {
      arrowLeft.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    }

    if (arrowRight) {
      arrowRight.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    }
  });
});