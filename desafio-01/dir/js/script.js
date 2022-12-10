window.addEventListener("DOMContentLoaded", () => {
  initAnimations();
  initLikes();
});

function initLikes() {
  const likeBtns = document.querySelectorAll("[data-liked]");
  if (!likeBtns) return;

  likeBtns.forEach((el) => el.addEventListener("click", handleClick));

  function handleClick() {
    this.dataset.liked = this.dataset.liked === "false" ? "true" : "false";
  }
}

function initAnimations() {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "30px",
    duration: "650",
    reset: true,
  });

  sr.reveal(".list__item", {delay: 200});
  sr.reveal(".item__tag", {delay: 400});
  sr.reveal(".item__title", {delay: 600});
  sr.reveal(".item__desc", {delay: 800});
}
