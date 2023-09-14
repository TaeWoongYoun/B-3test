$(document).ready(function(){


    // 마우스오버 메뉴
      $('.menu > li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(300);
      }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(300);
      });
    
    // 이미지슬라이드 페이드 인 페이드 아웃
      $('.imgslide a:gt(0)').hide();
  
      setInterval(function(){
        $('.imgslide a:first-child').fadeOut()
        .next('a').fadeIn()
        .end().appendTo('.imgslide');
      }, 3000);


    });