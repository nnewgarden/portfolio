$(function () {

/*   let swiper1 = new Swiper(".screenSlide", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  }); */

    let swiper1 = new Swiper(".screenSlide", {
      direction: "vertical",
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 50,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      loop : true,
    });

    swiper1.on('slideChange', function () {
      //console.log('활성화된 슬라이드 인덱스:', swiper1.activeIndex);
      let i = swiper1.activeIndex;
      let imgS = $('.swiper-slide').eq(i).find('img').clone();
      $('.bg_img').html(imgS);
      //$('.bg_img')
    });

});
