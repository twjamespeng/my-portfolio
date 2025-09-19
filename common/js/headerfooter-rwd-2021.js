$(function(){

  // var vivaURL = 'https://www.vivatv.com.tw';

  $('body').prepend(
    '<div id="topNav" class="sticky-top bg-dark-theme">'+
      '<div class="w-1200 mx-auto">'+
        '<div class="d-flex justify-content-between align-items-center px-2">'+
          '<div class="d-flex align-items-center">'+
            '<button id="vivaLogo" class="btn" type="button" onclick="location.href=\'https://www.vivatv.com.tw\'"><img src="../common/images/viva-logo-white.png" class="img-fluid viva-logo" alt="Viva_logo" title="回首頁"></button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'
    );

  $('body').append(
    '<footer class="p-3 bg-dark-theme text-center text-white position-relative">ViVa TV 59頻道 / MOD 545頻道 / MOD 397頻道<footer>'
    );
});




// $(function(){
	// $('body').prepend('<div class="default-top no-print"><div class="default-top-inner"><span class="vg vg-facebook-logo"></span><span class="vg vg-line-logo"></span></div></div>')
	// $('body').append('<div class="default-footer no-print"><p>ViVa TV 59頻道 / MOD 545頻道 / MOD 397頻道</p></div>');
	
 //  $('.vg-vivatv-logo').click(function(){
 //     window.open('https://www.vivatv.com.tw/');
 //  });
 //  $('.vg-facebook-logo').click(function(){
 //      window.open('https://www.facebook.com/vivatv.tw');
 //  });
  
 //  $('.vg-line-logo').click(function(){
 //      window.open('https://line.me/R/ti/p/%40toe2230g');
 //  })

  // var viewportWidth = $(window).width();
  // var lastScrollTop = 0;
  // if (viewportWidth > 960) {
  //   $(window).scroll(function(event){
  //      var st = $(this).scrollTop();
  //      if (st > lastScrollTop && lastScrollTop>0){
  //         //向下
  //         $('.default-top').removeClass('showme').addClass('hideme'); 
  //      } else {
  //         //向上
  //         $('.default-top').removeClass('hideme').addClass('showme');
  //      }
  //      lastScrollTop = st;
  //   });  
  // }
  
// })