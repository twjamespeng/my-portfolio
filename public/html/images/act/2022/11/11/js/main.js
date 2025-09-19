new Vue({
  el: '#app',
  components: { 
    'main-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/11/11/js/component/mainApp.vue')
  }
});

var timeNow = moment().format('YYYY-MM-DD HH:mm:ss');
if ( moment(timeNow).isBefore('2022-11-25 23:59:59') ) {
  document.body.classList.add('blackfriday');
} 


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

    const observer = new IntersectionObserver(changeNav, options);
    const section = document.querySelectorAll('.section-observer');
    if (section) {
      section.forEach((el) => {
        observer.observe(el);
      });
    }


    const stickyElm = document.querySelector('.btn-nav-group');
    const stickyBlackFridayNav = document.querySelector('#blackFridayNav');

    const observer2 = new IntersectionObserver( 
      ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
      {
        rootMargin: '-1px 0px 0px 0px',
        threshold: [1]
      }
    );
    if (stickyElm) {
      observer2.observe(stickyElm);
    }

    if (stickyBlackFridayNav) {
      observer2.observe(stickyBlackFridayNav);
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
  }, 500);
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
  });
  
  $('.scrollToTop').click(function() {
    scrollToAnchor('bodyTop');
  });

  

  
  
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
  setTimeout(function(){
    const options3 = {
      rootMargin: '0px 0px -20% 0px',
      threshold: [0, 1]
    }

    const itemObserver = new IntersectionObserver(flipCard, options3);
    const cardObserver = document.querySelectorAll('.card-observer');

    cardObserver.forEach((el)=> {
      itemObserver.observe(el);
    })

  }, 1000);
  
  

  

  

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

function flipMe(t) {
  $(t).addClass('flip');
}

function checkMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
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
      
      
      var id = entry.target.parentNode.parentNode.getAttribute('id');
      // console.log('id:'+id);
      
      var newLink = document.querySelector(`[data-scroll-target="#${id}"]`).classList.add('active');
      
      var newButton = document.querySelector(`[data-scroll-target="#${id}"]`);

      var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) - 80 ;

      if ( newButton.offsetLeft > vw || newButton.parentNode.scrollLeft > 0 ) {
        newButton.parentNode.scrollLeft = newButton.offsetLeft - 10;
      }
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
  




(function() {

  var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;
    
    if (checkMobile()) {
      NUM_CONFETTI = 20;
    } else {
      NUM_CONFETTI = 50;
    }
    
    console.log('NUM_CONFETTI:' + NUM_CONFETTI);
    
  
  
  

  COLORS = [[255, 227, 153], [255, 197, 43], [255, 173, 43], [255, 203, 43], [255, 238, 43]];

  PI_2 = 2 * Math.PI;


  canvas = document.getElementById("world");

  context = canvas.getContext("2d");

  window.w = 0;

  window.h = 0;

  resizeWindow = function() {
    window.w = canvas.width = window.innerWidth;
    return window.h = canvas.height = window.innerHeight;
  };

  window.onload = function() {
    observation();
    return setTimeout(resizeWindow, 500);
  };

  window.addEventListener('resize', resizeWindow, false);

  

  range = function(a, b) {
    return (b - a) * Math.random() + a;
  };

  drawCircle = function(x, y, r, style) {
    context.beginPath();
    context.arc(x, y, r, 0, PI_2, false);
    context.fillStyle = style;
    return context.fill();
  };

  xpos = 0.5;

  document.onmousemove = function(e) {
    return xpos = e.pageX / w;
  };

  window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  })();

  Confetti = (function() {
    function Confetti() {
      this.style = COLORS[~~range(0, 5)];
      this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
      this.r = ~~range(2, 6);
      this.r2 = 2 * this.r;
      this.replace();
    }

    Confetti.prototype.replace = function() {
      this.opacity = 0;
      this.dop = 0.03 * range(1, 4);
      this.x = range(-this.r2, w - this.r2);
      this.y = range(-20, h - this.r2);
      this.xmax = w - this.r;
      this.ymax = h - this.r;
      this.vx = range(0, 2) + 8 * xpos - 5;
      return this.vy = 0.7 * this.r + range(-1, 1);
    };

    Confetti.prototype.draw = function() {
      var _ref;
      this.x += this.vx;
      this.y += this.vy;
      this.opacity += this.dop;
      if (this.opacity > 1) {
        this.opacity = 1;
        this.dop *= -1;
      }
      if (this.opacity < 0 || this.y > this.ymax) {
        this.replace();
      }
      if (!((0 < (_ref = this.x) && _ref < this.xmax))) {
        this.x = (this.x + this.xmax) % this.xmax;
      }
      return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
    };

    return Confetti;

  })();

  confetti = (function() {
    var _i, _results;
    _results = [];
    for (i = _i = 1; 1 <= NUM_CONFETTI ? _i <= NUM_CONFETTI : _i >= NUM_CONFETTI; i = 1 <= NUM_CONFETTI ? ++_i : --_i) {
      _results.push(new Confetti);
    }
    return _results;
  })();

  window.step = function() {
    var c, _i, _len, _results;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    _results = [];
    for (_i = 0, _len = confetti.length; _i < _len; _i++) {
      c = confetti[_i];
      _results.push(c.draw());
    }
    return _results;
  };

  step();



}).call(this);



