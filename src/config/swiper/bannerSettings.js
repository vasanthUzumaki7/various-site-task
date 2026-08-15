import { Pagination } from "swiper/modules";

export const getBannerSettings = () => ({
  loop: true,
  spaceBetween: 20,
  modules: [Pagination],
  pagination: {
    clickable: true,
    el: ".custom-pagination",
    renderBullet: (index, className) =>
      `<span class="${className} custom-bullet"></span>`,
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 12 },
    640: { slidesPerView: 3, spaceBetween: 16 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    992: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 2, spaceBetween: 20 },
  },
});