$(function(){

  // var vh = $(document).height();
  // console.log(vh);
  // $('.dummy').height(vh);
  
  /*wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
  })*/
  



  $('.firework').click(function(){
    var $tmp = $(this).addClass('animated swing');
        setTimeout(function(){
            $tmp.removeClass('animated swing');
        }, 1000);
  });
  $('.firework').mouseenter(function(){
    var $tmp = $(this).addClass('animated swing');
        setTimeout(function(){
            $tmp.removeClass('animated swing');
        }, 1000);
  });
  $('.dog').click(function(){
    var $tmp = $(this).addClass('animated tada');
        setTimeout(function(){
            $tmp.removeClass('animated tada');
        }, 1000);
  });
  $('.dog').mouseenter(function(){
    var $tmp = $(this).addClass('animated tada');
        setTimeout(function(){
            $tmp.removeClass('animated tada');
        }, 1000);
  });
  $('.explosion').click(function(){
    var $tmp = $(this).addClass('animated rubberBand');
        setTimeout(function(){
            $tmp.removeClass('animated rubberBand');
        }, 1000);
  });
  $('.explosion').mouseenter(function(){
    var $tmp = $(this).addClass('animated rubberBand');
        setTimeout(function(){
            $tmp.removeClass('animated rubberBand');
        }, 1000);
  });
  $('.lantern-out').click(function(){
    var $tmp = $(this).addClass('animated swing');
        setTimeout(function(){
            $tmp.removeClass('animated swing');
        }, 1000);
  });
  $('.lantern-out').mouseenter(function(){
    var $tmp = $(this).addClass('animated swing');
        setTimeout(function(){
            $tmp.removeClass('animated swing');
        }, 1000);
  });

  $('.minion-peek-right').hide();
  $('.minion-peek-left').mouseenter(function(){
    $(this).hide();
    $(this).css('animation-delay', '0s');
    $('.minion-peek-right').show().addClass('animated rotateInDownLeft');
  });
  $('.minion-peek-right').mouseenter(function(){
    $(this).hide();
    $('.minion-peek-left').show().addClass('animated rotateInDownLeft');
  });
  
  

  

  $('.ingot').click(function(){
    var $tmp = $(this).addClass('animated tada');
        setTimeout(function(){
            $tmp.removeClass('animated tada');
        }, 1000);
  });
  $('.ingot').mouseenter(function(){
    var $tmp = $(this).addClass('animated tada');
        setTimeout(function(){
            $tmp.removeClass('animated tada');
        }, 1000);
  });

  $('.coin').click(function(){
    var $tmp = $(this).addClass('animated tada');
        setTimeout(function(){
            $tmp.removeClass('animated tada');
        }, 1000);
  });
  $('.coin').mouseenter(function(){
    var $tmp = $(this).addClass('animated tada');
        setTimeout(function(){
            $tmp.removeClass('animated tada');
        }, 1000);
  });

  $('.dog-2').click(function(){
    var $tmp = $(this).addClass('animated tada');
        setTimeout(function(){
            $tmp.removeClass('animated tada');
        }, 1000);
  });
  $('.dog-2').mouseenter(function(){
    var $tmp = $(this).addClass('animated tada');
        setTimeout(function(){
            $tmp.removeClass('animated tada');
        }, 1000);
  });
  $('.dog-3').click(function(){
    var $tmp = $(this).addClass('animated bounce');
        setTimeout(function(){
            $tmp.removeClass('animated bounce');
        }, 1000);
  });
  $('.dog-3').mouseenter(function(){
    var $tmp = $(this).addClass('animated bounce');
        setTimeout(function(){
            $tmp.removeClass('animated bounce');
        }, 1000);
  });

  $('.btn-go').click(function(){
    window.open('https://www.vivatv.com.tw/');
  });
  

  $('.side-navi').fadeOut(0);
  
  var lastScrollTop = 0;
  $(window).scroll(function(){
  
  /*  var st = $(this).scrollTop();
    if (st > lastScrollTop && lastScrollTop>0){
    $('.side-navi').fadeIn(500); 
    } else {
    $('.side-navi').fadeOut(500);
    }
   lastScrollTop = st;*/


    var sTop = $(this).scrollTop();
    console.log(sTop);
    if (sTop > 900) {
      $('.side-navi').fadeIn(500);
      // $('.side-navi').toggleClass('showup');
    } else {
      $('.side-navi').fadeOut(500);
      // $('.side-navi').toggleClass('showup');
    }
  });

  function scrollToAnchor(aid){
    var aTag = $('#'+aid);
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }
  $(".btn-top").click(function() {
    scrollToAnchor('top');
  });
  $(".btn-event-1").click(function() {
    scrollToAnchor('event-1');
  });
  $(".btn-event-2").click(function() {
    scrollToAnchor('event-2');
  });
  $(".btn-caution").click(function() {
    scrollToAnchor('caution');
  });

});



$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
  this.top = parseInt(this.el.css('top'));
  // console.log(this.top);
};

moveItItem.prototype.update = function(scrollTop){
  // this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
  // console.log(this.top - (scrollTop/this.speed)+'px');
  this.el.css('top', this.top - (scrollTop / this.speed) + 'px');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});









// Set default values for perspective property
TweenLite.set("#confetti-container", {perspective:1000})

var no_of_elements = 8;

var warp = document.getElementById("confetti-container"),
    innerWidth = window.innerWidth,
    innerHeight = window.innerHeight;
 
// Load into page
 for (i=0; i < no_of_elements; i++) { 
   var Div = document.createElement ('div');

   TweenLite.set (Div, { className:'confetti-red', x:Randomizer(0, innerWidth), y:Randomizer(-200, -150), z:Randomizer(-200, 200)});

   warp.appendChild (Div);
   
   // Run animation
   falling_animation (Div);
 }
 for (i=0; i < no_of_elements; i++) { 
   var Div = document.createElement ('div');

   TweenLite.set (Div, { className:'confetti-yellow', x:Randomizer(0, innerWidth), y:Randomizer(-200, -150), z:Randomizer(-200, 200)});
   
   warp.appendChild (Div);
   
   // Run animation
   falling_animation (Div);
 }
 
// Falling animation
 function falling_animation(element) {   
   //TweenMax.to(e, Randomizer(6, 16), {y:innerHeight+100, ease:Linear.easeNone, repeat:-1, delay:-15});
   //TweenMax.to(e, Randomizer(4, 8), {x:'+=100',rotationZ:Randomizer(0, 180), repeat:-1, yoyo:true, ease:Sine.easeInOut});
   //TweenMax.to(e,Randomizer(2, 8), {rotationX:Randomizer(0,360),rotationY:Randomizer(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
   
   TweenMax.to(element, Randomizer(6, 8), {y:innerHeight+100, ease:Linear.easeNone, repeat:-1, delay:-15});
   TweenMax.to(element, Randomizer(4, 8), {x:'+=100',rotationZ:Randomizer(0, 180), repeat:-1, yoyo:true, ease:Sine.easeInOut});
   TweenMax.to(element, Randomizer(2, 8), {rotationX:Randomizer(0,360),rotationY:Randomizer(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
 };

// Randomizer
function Randomizer(min, max) {return min + Math.random()*(max-min) };
