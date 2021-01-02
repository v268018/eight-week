"use strict";

//swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 4,
  //一次顯示幾張圖片
  //spaceBetween: 30,//每張圖之間距離
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: true //自動輪播

});
//# sourceMappingURL=all.js.map
