new Vue({
  el: '#app',
  components: { 
    'main-app': httpVueLoader('/html/images/act/2022/07/anniversary/js/component/mainApp.vue')
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


  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLStrings = sPageURL.toString().split('?'),
    sParameterName,
    i;

    var sURLVariables = sURLStrings.toString().split('&');

    for (i=0; i< sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
    return false;
  };
  

  
  
  if (window.location.hash == "#eventModal") {
    setTimeout(function(){
      $('#eventModal').modal('show');
    }, 1000);
     
  }

  var timeNow = moment().format('YYYY-MM-DD HH:mm:ss');
  
  var start_0731 = '2022-07-31 00:00:00';
  var end_0731 = '2022-07-31 23:59:59';

  var start_0812 = '2022-08-12 00:00:00';
  var end_0812 = '2022-08-12 23:59:59';


  let timeFromURL = getUrlParameter('t');
  if (timeFromURL) {
    timeNow = moment(timeFromURL).format('YYYY-MM-DD HH:mm:ss');
  }
  
  
  //0731前才需要shuffle
  if ( moment(timeNow).isBefore(start_0731) ) {
    setTimeout(function(){
      shuffleArray();
    }, 500);
  }

  //0731當天自動全開
  if ( moment(timeNow).isBetween(start_0731, end_0731, 'minutes', '[]') ) {
    setTimeout(function(){
      // autoFlip();
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


  // 隨機shuffle
  // setTimeout(function(){
  //   shuffleArray();
  // },1000);
  
  //自動翻牌
  
  setTimeout(function(){
    const options2 = {
      rootMargin: '0px 0px -20% 0px',
      threshold: [0, 1]
    }

    const itemObserver = new IntersectionObserver(flipCard, options2);
    const cardObserver = document.querySelectorAll('.card-observer');

    cardObserver.forEach((el)=> {
      itemObserver.observe(el);
    })

  }, 1000);
  
  

});



function checkMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

function autoFlip() {
  $('.card-container').addClass('flip');
}

function flipMe(t) {
  $(t).addClass('flip');
}

function shuffleArray() {
  $('#oneDaySection').html($('.card-container').sort(function(){
    return Math.random()-0.5;
  }));
  console.log('shuffled');
}


function scrollToAnchor(aid){
  var aTag = $('#'+aid);
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}



function scrollToSection(aid){
  
  var aTag = $('#'+aid);
  var btnNavGroupHeight = $('#navBar').innerHeight();

  var offset = aTag.offset().top - btnNavGroupHeight;
  
  
  $('html,body').animate({scrollTop: offset}, 'fast');
  
  
}

function scrollToAnchorInModal(aid){
  var aTag = $('#'+aid);
  var offset = aTag.offset().top - aTag.parent().offset().top;
  $('.modal-body').animate({scrollTop: offset},'slow');
}

function clickTab(aid) {
  $(aid).click();
}





const changeNav = (entries, observer) => {
  entries.forEach((entry) => {
    // verify the element is intersecting
    var ratio = entry.intersectionRatio;

    // console.log('ratio: '+ratio);

    // if(entry.isIntersecting && entry.intersectionRatio >= 0.5) {
    if(entry.isIntersecting) {
      
      var btnNav = document.querySelectorAll('.btn-nav');
      [].forEach.call(btnNav, (el)=>{
        el.classList.remove('active');
      });
      
      
      var id = entry.target.parentNode.getAttribute('id');
      console.log('id:'+id);
      
      var newLink = document.querySelector(`[data-scroll-target="#${id}"]`).classList.add('active');
      
      var newButton = document.querySelector(`[data-scroll-target="#${id}"]`);

      // var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 80 ;

      // if ( newButton.offsetLeft > vw || newButton.parentNode.scrollLeft > 0 ) {
      //   newButton.parentNode.scrollLeft = newButton.offsetLeft - 10;
      // }
    } 
  });
}

const flipCard = (entries, observer) => {
  entries.forEach((entry) => {
    // verify the element is intersecting
    var ratio = entry.intersectionRatio;

    // console.log('ratio: '+ratio);

    // if(entry.isIntersecting && entry.intersectionRatio >= 0.5) {
    if(entry.isIntersecting) {
      
      // var btnNav = document.querySelectorAll('.btn-nav');
      // [].forEach.call(btnNav, (el)=>{
      //   el.classList.remove('active');
      // });


      var parentItem = entry.target.parentNode;

      if (checkMobile()) {
        parentItem.classList.add('flip');  
      }
      
      
      
      // var id = entry.target.parentNode.getAttribute('id');
      // console.log('id:'+id);
      
      // var newLink = document.querySelector(`[data-scroll-target="#${id}"]`).classList.add('active');
      
      // var newButton = document.querySelector(`[data-scroll-target="#${id}"]`);

      // var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 80 ;

      // if ( newButton.offsetLeft > vw || newButton.parentNode.scrollLeft > 0 ) {
      //   newButton.parentNode.scrollLeft = newButton.offsetLeft - 10;
      // }
    } 
  });
}
