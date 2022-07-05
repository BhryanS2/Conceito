import { imagesURL } from "./imagesURL.js";

const state = {
  current: 0,
  images: imagesURL,
  nextSlide() {
    this.current++;
    if (this.current >= this.images.length) {
      this.current = 0;
    }
    console.log(this.current);
  },
  prevSlide() {
    this.current--;
    if (this.current < 0) {
      this.current = this.images.length - 1;
    }
  },
  updateHtml() {
    const currentImage = this.images[this.current];
    document.querySelector(
      ".slider-image"
    ).src = `../assets/slider/${currentImage}`;
  },
  max: imagesURL.length - 1,
  min: 0,
};

const buttonsControllers = document.querySelectorAll(
  "#showServices .controllers button"
);

buttonsControllers.forEach((button) => {
  button.addEventListener("click", controller);
});

function controller(eventClick) {
  if (eventClick.target.id === "next") {
    state.nextSlide();
  } else if (eventClick.target.id === "prev") {
    state.prevSlide();
  }
  state.updateHtml();
}

window.addEventListener("load", () => {
  state.updateHtml();
});
