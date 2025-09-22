$(function(){
	$('body').append('<div class="default-top"><div class="default-top-950"><span class="vg vg-vivatv-logo"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span><span><span class="vg vg-facebook-logo"></span><span class="vg vg-line-logo"></span></span></div></div>')
	$('body').append('<div class="default-footer"><p>更多商品 敬請鎖定 ViVa TV 美好家庭購物1台CH59 / MOD CH397</p></div>');
	$('.vg-vivatv-logo').click(function(){
     window.open('https://www.vivatv.com.tw/');
  });
  $('.vg-facebook-logo').click(function(){
      window.open('https://www.facebook.com/vivatv.tw');
  });
  
  $('.vg-line-logo').click(function(){
      window.open('https://line.me/R/ti/p/%40toe2230g');
  })

  $('.default-top').addClass('hideme');

  var viewportWidth = $(window).width();
  var lastScrollTop = 0;
  if (viewportWidth > 960) {
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop && lastScrollTop>0){
          //向下
          $('.default-top').removeClass('showme').addClass('hideme'); 
       } else if (st < 100) {
          $('.default-top').removeClass('showme').addClass('hideme');
       }
        else {
          //向上
          $('.default-top').removeClass('hideme').addClass('showme');
       }
       lastScrollTop = st;

       
    });  
  }
  
})