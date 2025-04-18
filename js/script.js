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
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slides = document.querySelectorAll(".slider-img");
  let currentSlide = 0;

  // Функция для показа текущего слайда
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  // Обработчик события для кнопки "вперед"
  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length; // переходим к следующему слайду
    showSlide(currentSlide);
  });

  // Обработчик события для кнопки "назад"
  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // переходим к предыдущему слайду
    showSlide(currentSlide);
  });

  // Инициализация первого слайда
  showSlide(currentSlide);
});
