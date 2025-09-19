new Vue({
  el: '#app',
  components: { 
    'main-app': httpVueLoader('/html/images/act/2021/01/01/js/component/mainApp.vue')
  }
});



$(function(){
  moment.locale('zh-tw');
  
  $('body').append('<div class="scrollToTop"><i class="fas fa-caret-up"></i></div>');
  $('.scrollToTop').fadeOut();

  var offset = 100;
  var duration = 100;  
  $(window).scroll(function(){
    if ($(this).scrollTop() > offset) {
      $('.scrollToTop').fadeIn(duration);
    } else {
      $('.scrollToTop').fadeOut(duration);
    }
  });
  
  $(".scrollToTop").click(function() {
    scrollToAnchor('bodyTop');
  });
  
  if (window.location.hash == "#eventModal") {
    setTimeout(function(){
      $('#eventModal').modal('show');
    }, 1000);
     
  }
});

function scrollToAnchor(aid){
  var aTag = $('#'+aid);
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}


