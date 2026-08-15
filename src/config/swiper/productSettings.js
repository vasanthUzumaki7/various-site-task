export const getProductSettings = (setSwiperRef) => ({
  spaceBetween: 20,
  loop: true,
  slidesPerView: 3,
  onSwiper: setSwiperRef,
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 12 },
    640: { slidesPerView: 2, spaceBetween: 16 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 20 },
  },
});