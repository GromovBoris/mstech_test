document.addEventListener("DOMContentLoaded", function () {
  // HEADER HEIGHT&MARGIN

  const header = document.querySelector(".header");
  const logo = document.querySelector(".logo");
  const nav = document.querySelector(".nav");

  function updateHeaderHeight() {
    const headerHeight = header.offsetHeight;
    header.style.marginTop = `-${headerHeight}px`;
  }

  function headerScroll() {
    const headerHeight = header.offsetHeight;
    if (window.pageYOffset > headerHeight) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  updateHeaderHeight();
  window.addEventListener("scroll", headerScroll);
  window.addEventListener("resize", updateHeaderHeight);

  // IMG-CARGO HEIGHT

  window.onload = function () {
    setImgCargoHeight();
  };

  window.onresize = function () {
    setImgCargoHeight();
  };

  function setImgCargoHeight() {
    const supply = document.querySelector(".supply");
    const imgCargo = document.querySelector(".img-cargo");

    const supplyHeight = supply.offsetHeight;
    const computedStyle = getComputedStyle(supply);
    const marginTop = parseInt(computedStyle.marginTop);
    const marginBottom = parseInt(computedStyle.marginBottom);

    const totalHeight = supplyHeight + marginTop + marginBottom;

    imgCargo.style.height = totalHeight + "px";
  }

  // SLIDER

  window.addEventListener("scroll", headerScroll);
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const slides = document.querySelectorAll(".slider-img");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  showSlide(currentSlide);

  // BURGER

  const burger = document.getElementById("burger");

  burger.addEventListener("click", function () {
    header.classList.toggle("open");
    if (header.classList.contains("open")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  nav.addEventListener("click", function (event) {
    header.classList.toggle("open");
  });
});
