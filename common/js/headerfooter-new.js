$(function(){
	$('body').prepend('<div class="default-top"><div class="default-top-inner"><span class="vg vg-vivatv-logo"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span><div class="sns-icon"><span class="vg vg-facebook-logo"></span><span class="vg vg-line-logo"></span></div></div></div>')
	$('body').append('<div class="default-footer"><p><span>眾多優惠商品 敬請鎖定 </span>ViVa TV 59頻道 / MOD 545頻道 / MOD 397頻道</p></div>');

	$('.vg-vivatv-logo').click(function(){
     window.open('https://www.vivatv.com.tw/');
  });
  $('.vg-facebook-logo').click(function(){
      window.open('https://www.facebook.com/vivatv.tw');
  });
  
  $('.vg-line-logo').click(function(){
      window.open('https://line.me/R/ti/p/%40toe2230g');
  })

  var viewportWidth = $(window).width();
  var lastScrollTop = 0;
  if (viewportWidth > 1200) {
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if (st > lastScrollTop && lastScrollTop>0){
          //向下
          $('.default-top').removeClass('showme').addClass('hideme'); 
       } else {
          //向上
          $('.default-top').removeClass('hideme').addClass('showme');
       }
       lastScrollTop = st;
    });  
  }
})