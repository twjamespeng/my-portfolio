new Vue({
  el: '#app',
  components: { 
    'main-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/05/16/js/component/mainApp.vue')
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
  
  $('.scrollToTop').click(function() {
    scrollToAnchor('bodyTop');
  });

  

  
  
  if (window.location.hash == "#eventModal") {
    setTimeout(function(){
      $('#eventModal').modal('show');
    }, 1000);
     
  }


  /*this code is not for modal switching it's only for bug solving of bootstrap 4*/
  /*  this code is to solve bootstrap modal switching bug*/
  /*$('.modal').on('shown.bs.modal', function (e) {
    // setTimeout(function(){
      $('body').addClass('modal-open');
      var vw = $(window).width();
      if ( vw >= 1200 ) {
        // $('body').css({ paddingRight: '17px!important'});
      }
    // }, 200);
    
  });*/


  
  

  

});






function scrollToAnchor(aid){
  var aTag = $('#'+aid);
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

function scrollToAnchorInModal(aid){
  var aTag = $('#'+aid);
  var offset = aTag.offset().top - aTag.parent().offset().top;
  $('.modal-body').animate({scrollTop: offset},'slow');
}

