import "../style/style.scss";

const profileImageElement: HTMLElement = document.querySelector(".profile")!;

profileImageElement.addEventListener("click", () => {
  startAnimation();
});

const startAnimation = () => {
  if (profileImageElement.classList.contains("rotate")) {
    profileImageElement.classList.remove("rotate");
  }
  setTimeout(() => {
    profileImageElement.classList.add("rotate");
  }, 100);
};

window.addEventListener("load", () => {
  startAnimation();
});
