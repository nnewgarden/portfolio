$(function () {
  /*   $('.wrap nav ul.gnb li').click(function(){
      $(this).addClass('on').siblings().removeClass('on');
    }); */
  //$('.mobile input').val('garden_work@naver.com');
  $('.btn2').click(function () {
    //$('.mobile input').val('garden_work@naver.com');
    typingInter = setInterval(typing, 100);
  });



  /* 타이핑효과 */
  let txt = 'garden_work@naver.com';
  let typingTxt = txt.split('');//한글자씩 자름
  let typingIndex = 0;
  let typingInter;
  let addTxt ='';

  function typing() {
    if (typingIndex < typingTxt.length) {
      addTxt += typingTxt[typingIndex]
      $('.mobile input').val(addTxt);
      typingIndex++
    } else {
      clearInterval(typingInter);
      typingIndex = 0;
    }
  }
  
    /* up 아이콘 */
    $('.u_btn').click(function () {
     /*  console.log('aa') */
      $('body,html').animate({
        scrollTop: 0,
      },500);
    });
});