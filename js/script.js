document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const headerHeight = header.offsetHeight;

  header.style.marginTop = `-${headerHeight}px`;

  function headerScroll() {
    window.pageYOffset > headerHeight
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  }

  window.addEventListener("scroll", headerScroll);
});
