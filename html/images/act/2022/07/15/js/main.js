new Vue({
  el: '#app',
  components: { 
    'main-app': httpVueLoader('/html/images/act/2022/07/15/js/component/mainApp.vue')
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

function scrollToSection(aid){
  var aTag = $('#'+aid);
  var offset = aTag.offset().top - $('.btn-nav-group').innerHeight();
  $('html,body').animate({scrollTop: offset },'slow');
}

function scrollToAnchorInModal(aid){
  var aTag = $('#'+aid);
  var offset = aTag.offset().top - aTag.parent().offset().top;
  $('.modal-body').animate({scrollTop: offset},'slow');
}

function clickTab(aid) {
  $(aid).click();
}



// const changeNav = (entries, observer) => {
//   entries.forEach((entry) => {
//     // verify the element is intersecting
//     var ratio = entry.intersectionRatio;

//     // console.log('ratio: '+ratio);

//     // if(entry.isIntersecting && entry.intersectionRatio >= 0.5) {
//     if(entry.isIntersecting) {
      
//       var btnNav = document.querySelectorAll('.btn-nav');
//       [].forEach.call(btnNav, (el)=>{
//         el.classList.remove('active');
//       });
      
      
//       var id = entry.target.parentNode.getAttribute('id');
//       console.log('id:'+id);
      
//       var newLink = document.querySelector(`[data-scroll-target="#${id}"]`).classList.add('active');
      
//       var newButton = document.querySelector(`[data-scroll-target="#${id}"]`);

//       var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 80 ;

//       if ( newButton.offsetLeft > vw || newButton.parentNode.scrollLeft > 0 ) {
//         newButton.parentNode.scrollLeft = newButton.offsetLeft - 10;
//       }
//     } 
//   });
// }


