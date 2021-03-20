/** Swiper Start */
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".product-gallery", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/** Swiper End */

/** Mobile Nav Start */
const toggle_nav_button = document.querySelector("#toggle-nav");
const mobile_nav = document.querySelector("#mobile-nav");

toggle_nav_button.addEventListener("click", () => {
  mobile_nav.classList.add("show-mobile-menu");
});

window.addEventListener("touchend", function (e) {
  if (mobile_nav != e.target && toggle_nav_button != e.target) {
    mobile_nav.classList.remove("show-mobile-menu");
  }
});
/** Mobile Nav End */

/** Search Form Start */
const search_form_wrapper = document.querySelector("#search-form-wrapper");
const close_search_form = document.querySelector(".close-search-form");
const toggle_search = document.querySelectorAll(".toggle-search");
const toggle_search_arr = Array.from(toggle_search);

for (var i = 0; toggle_search_arr.length > i; i++) {
  toggle_search_arr[i].addEventListener("click", () => {
    search_form_wrapper.classList.add("show-search-form");
  });
}

close_search_form.addEventListener("click", () => {
  search_form_wrapper.classList.remove("show-search-form");
});
/** Search Form End */
