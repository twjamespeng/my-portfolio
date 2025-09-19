new Vue({
  el: '#app',
  components: { 
    'main-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2024/02/sp/js/component/mainApp.vue')
  }
});



$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
});



// init the observer
const options = {
  rootMargin: '0px 0px -50% 0px',
  threshold: [0, 1]
}

const options2 = {
  rootMargin: '-1px 0px 0px 0px',
  threshold: [1]
}

function observation() {
  setTimeout(function(){

    // const observer = new IntersectionObserver(changeNav, options);
    // const section = document.querySelectorAll('.section-observer');
    // if (section) {
    //   section.forEach((el) => {
    //     observer.observe(el);
    //   });
    // }


    const stickyElm = document.querySelector('.btn-nav-group');
    const stickyBlackFridayNav = document.querySelector('#blackFridayNav');
    const stickyFanWrapper = document.querySelector('.fan-wrapper');
    const tsParticlesDiv = document.querySelector('.tsparticles-wrapper');

    const observer2 = new IntersectionObserver( 
      ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio > 1),
      {
        rootMargin: '-1px 0px 500px 0px',
        threshold: [1]
      }
    );
    if (stickyElm) {
      observer2.observe(stickyElm);
    }

    if (stickyBlackFridayNav) {
      observer2.observe(stickyBlackFridayNav);
    }

    if (stickyFanWrapper) {
      observer2.observe(stickyFanWrapper);
    }

    

    const observer3 = new IntersectionObserver(

      ([e]) => e.target.classList.toggle('out-viewport', e.intersectionRatio == 0, console.log(e.intersectionRatio)),
      {
        rootMargin: '0px 0px 500px 0px',
        threshold: [1]
      }

      
    );

    if (tsParticlesDiv) {
      observer3.observe(tsParticlesDiv);
    }

    
    //lazy load
    const selector = ".lazy-load";
    const dataSrc = "data-src";
    const observerConfig = {
        root: null,
        rootMargin: '0px',
        threshold: [0]
    };

    const callback = function(entries, selfObserver) {
        Array.prototype.forEach.call(entries, function (entry) {

            if (entry.isIntersecting) {
              
                // console.log('intersecting');
                selfObserver.unobserve(entry.target);
                let src = entry.target.getAttribute(dataSrc);
                if ("img" === entry.target.tagName.toLowerCase()) {
                    if (src) {  
                      entry.target.src = src;

                    }
                } else {

                  let child = entry.target.children[0];
                  // console.log('child: '+ child);
                  child.src = src;

                  // console.log('data-src: ' + src);
                  // console.log(entry.target.children);
                }
            }
        });
    }


    let $images = document.querySelectorAll(selector);
    let observerImg = new IntersectionObserver(callback, observerConfig);

    Array.prototype.forEach.call($images, function (image) {
        observerImg.observe(image);
    });

    console.log('observation set');
  }, 1000);
}


function handleSideMenu() {
  var current = $(window).scrollTop();
  console.log(current);

  if (current > 800) {
    $('.side-menu-wrapper-left, .side-menu-wrapper-right').show();
  } else {
    $('.side-menu-wrapper-left, .side-menu-wrapper-right').hide();
  }
}

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

    // handleSideMenu();
  });
  
  $('.scrollToTop').click(function() {
    scrollToAnchor('bodyTop');
  });

  
  // var swpPrimaryRight = document.querySelector('#swpPrimaryRight').swiper;

  

  
  
  // if (window.location.hash == "#eventModal") {
  //   setTimeout(function(){
  //     $('#eventModal').modal('show');
  //   }, 1000);
     
  // }


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

  //自動翻牌
  // setTimeout(function(){
  //   const options3 = {
  //     rootMargin: '0px 0px -20% 0px',
  //     threshold: [0, 1]
  //   }

  //   const itemObserver = new IntersectionObserver(flipCard, options3);
  //   const cardObserver = document.querySelectorAll('.card-observer');

  //   cardObserver.forEach((el)=> {
  //     itemObserver.observe(el);
  //   })

  // }, 1000);
  
  

  

  

});








function scrollToAnchor(aid){
  var aTag = $('#'+aid);
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

function scrollToSection(aid){
  var aTag = $('#'+aid);
  var offset;

  if ($('#publicGrid').hasClass('wave4')) {
    offset = aTag.offset().top;
  } else {
    offset = aTag.offset().top - $('.btn-nav-group').innerHeight();
  }
  
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

function flipMe(t) {
  $(t).addClass('flip');
}

function checkMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// const changeNav = (entries, observer) => {
//   entries.forEach((entry) => {
    
//     var ratio = entry.intersectionRatio;

    
//     if(entry.isIntersecting) {
      
//       var btnNav = document.querySelectorAll('.btn-nav');
//       [].forEach.call(btnNav, (el)=>{
//         el.classList.remove('active');
//       });
      
      
//       var id = entry.target.parentNode.parentNode.getAttribute('id');
      
      
//       var newLink = document.querySelector(`[data-scroll-target="#${id}"]`).classList.add('active');
      
//       var newButton = document.querySelector(`[data-scroll-target="#${id}"]`);

//       var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 80 ;

//       if ( newButton.offsetLeft > vw || newButton.parentNode.scrollLeft > 0 ) {
//         newButton.parentNode.scrollLeft = newButton.offsetLeft - 10;
//       }
//     } 
//   });
// }





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







// let touchstartX = 0;
// let touchendX = 0;
// let distance = 150;

// setTimeout(()=>{
//   let goldRush = document.querySelector('#goldRush');

//   if (goldRush) {
//     goldRush.addEventListener('touchstart', e => {
//       touchstartX = e.changedTouches[0].screenX;
//     });

//     goldRush.addEventListener('touchend', e => {
//       touchendX = e.changedTouches[0].screenX;
//       checkDirection();
//     });
//   }
// }, 1000);


function checkDirection() {
  if (touchendX < touchstartX) {
    if ( Math.abs(touchstartX - touchendX) > distance ) {
      swipeToLeftTab();
    }
  } 
  if (touchendX > touchstartX) {
    if ( Math.abs(touchendX - touchstartX) > distance ) {
      swipeToRightTab();
    }
  }
}

//向左滑,看下一個
function swipeToLeftTab() {
  var currentTab = document.querySelector('.nav-link.p-0.rounded-0.active');
  var prevTabDate;

  if (currentTab.id == 'pills-1112-tab') {
    prevTabDate = 1106;
  } else {
    prevTabDate = parseInt(currentTab.id.substr(6,4)) + 1;
  }

  var prevTab = document.querySelector('#pills-' + prevTabDate + '-tab');
  new bootstrap.Tab(prevTab).show();
}

//向右滑,看前一個
function swipeToRightTab() {
  var currentTab = document.querySelector('.nav-link.p-0.rounded-0.active');
  var prevTabDate;

  if (currentTab.id == 'pills-1106-tab') {
    prevTabDate = 1112;
  } else {
    prevTabDate = parseInt(currentTab.id.substr(6,4)) - 1;
  }

  var prevTab = document.querySelector('#pills-' + prevTabDate + '-tab');
  new bootstrap.Tab(prevTab).show();
}



window.onload = function() {

    
    
    new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 100,
      mobile: false,
      live: true
    }).init();

    // var scene = document.getElementById('scene');
    // var parallaxInstance = new Parallax(scene);



    // var t = setInterval(function(){
    //   $('.wave1.side-menu-wrapper-left, .wave1.side-menu-wrapper-right').toggleClass('neon');
    //   $('.wave1.side-menu-wrapper-left .side-menu-body, .wave1.side-menu-wrapper-right .side-menu-body').toggleClass('neon');
    // }, 500);
    
    setTimeout(()=>{


    
      // document.querySelector('video').pause();
      // document.querySelector('video').playbackRate = 1;
      // document.querySelector('video').play();
      
      // document.querySelector('.landing-main').classList.add('mix-blend-mode-fix');

      document.querySelector('.loading').classList.add('fade');
      
      setTimeout(()=> {
        document.body.classList.add('loaded');  
      }, 200);
      
      observation();


      // VanillaTilt.init(document.querySelector(".landing-logo > div > div"), {
      //   max: 5,
      //   speed: 300,
      // });

      if (document.querySelector('#petal')) {


        TweenLite.set("#petal",{perspective:600})
        TweenLite.set(".dot",{xPercent:"-50%",yPercent:"-50%"})

        var total = 20;
        // var warp = document.getElementById("petal"),  w = window.innerWidth , h = window.innerHeight;
        var warp = document.getElementById("petal"),  w = window.innerWidth , h = window.innerHeight;
        console.log('w:'+w);

        w =     window.innerWidth && document.documentElement.clientWidth ? 
        Math.min(window.innerWidth, document.documentElement.clientWidth) : 
        window.innerWidth || 
        document.documentElement.clientWidth || 
        document.getElementsByTagName('body')[0].clientWidth;

        console.log('w:'+w);
         
         for (i=0; i<total; i++){ 
           var Div = document.createElement('div');
           TweenLite.set(Div,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
           warp.appendChild(Div);
           animm(Div);
         }
         
         function animm(elm){   
           TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
           TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
           TweenMax.to(elm,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
         };

        function R(min,max) {return min+Math.random()*(max-min)};

      }

    }, 500);

    var observationInterval = setInterval(()=>{
      observation();
    }, 5000);


    document.addEventListener("visibilitychange", (event) => {
      if (document.visibilityState == "visible") {
        console.log("tab is active");
        observation();
        observationInterval = setInterval(()=>{
          observation();
        }, 5000);
      } else {
        console.log("tab is inactive");
        clearInterval(observationInterval);
      }
    });


    



};

  




    












