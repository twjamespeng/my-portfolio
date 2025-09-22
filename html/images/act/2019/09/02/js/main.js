$(function(){
  wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: false, // default
    live: true // default
  })
  wow.init();
  
  var updateTime = 0;

  moment.locale('zh-tw');
  var year = moment().format('YYYY');
  var month = moment().subtract(updateTime, 'hours').format('MM');
  var date = moment().subtract(updateTime, 'hours').format('DD');
  var day = moment().subtract(updateTime, 'hours').format('dddd');
  var hour = moment().format('HH');
  var minute = moment().format('mm');
  var curHM = moment().format('HH:mm');
  
  
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
  
  var yearfromURL = getUrlParameter('y');
  var monthfromURL = getUrlParameter('m');
  var datefromURL = getUrlParameter('d');
  
  console.log('yearfromURL: '+yearfromURL);
  console.log('monthfromURL: '+monthfromURL);
  console.log('datefromURL: '+datefromURL);
  

  if (datefromURL&&monthfromURL) {
    if(yearfromURL) {
      date = datefromURL;
      month = monthfromURL;
      year = yearfromURL;
      day = moment(year+month+date).format('dddd');    
    }
    else {
      date = datefromURL;
      month = monthfromURL;
      day = moment(year+month+date).format('dddd');       
    }
    
  }
  

  /*console.log('year: ' + year);
  console.log('month: ' + month);
  console.log('date: ' + date);
  console.log('day: ' + day);
  console.log('hour: ' + hour);
  console.log('minute: ' + minute);
  console.log('curHM: ' + curHM);*/


  if (datefromURL) {
      date = datefromURL;
      month = monthfromURL;
  }

  var output = 'source';

  
  /*if ( date >= 08 ) {
    output = '0508';
  }*/























  
  $.ajax({
    type: "get",
    url: "images/act/2019/09/02/xml/"+ output +".html",
    dataType: "xml",
    success: function(xml) {

      var arr = [];

      $(xml).find('item').each(function(){
        var item = $(this);
        var rng = Math.floor((Math.random() * 10000) + 1);
        var obj = {
          'deck' : item.find('pDeck').text(),
          'id' : item.find('pId').text(),
          'brand' : item.find('pBrand').text(),
          'name' : item.find('pName').text(),
          'original' : item.find('pOriginal').text(),
          'feature' : item.find('pFeature').text(),
          'price' : item.find('pPrice').text(),
        };

        
        
        
        
        
        arr.push(obj);  
        
        

        

      });

      for (var i = 0 ; i <= arr.length -1 ; i++) {
        
        $('#deck-' + arr[i].deck).append('<div class="item">'+
          '<div class="i-image view zoom wow fadeIn" data-wow-delay="0.'+ (i%4)*2 +'s"><a target="_blank" href="https://www.vivatv.com.tw/Product.go?itemCode='+ arr[i].id +'"><img title="'+ arr[i].brand + ' ' + arr[i].name +'" class="img-fluid" src="https://www.vivatv.com.tw/common/images/product/' + arr[i].id +'/1.jpg'+ '"></a></div>'+
          '<div class="i-feature">'+ arr[i].feature +'</div><hr>'+
          '<div class="i-name"><a target="_blank" href="https://www.vivatv.com.tw/Product.go?itemCode='+ arr[i].id +'"><span class="i-name-b">'+ arr[i].brand +'</span><br><span class="i-name-n">'+ arr[i].name +'</span></a></div>'+
          '<div class="i-original">' + arr[i].original + '</div>'+
          '<div class="i-price">'+ arr[i].price +'</div></div>'
          );  
        
      };

      var vw = $(window).width();
      var itemMargin = 5;
      var itemPadding = 15;
      var gutterWidth = itemPadding + itemMargin;
      var pcNum = 4;
      var mobileNum = 2;

      var pcWidth = (1200 - (gutterWidth * 2 * pcNum)) / pcNum;
      var mobileWidth = (vw - (gutterWidth * 2 * mobileNum)) / mobileNum;
      
      $('.item').css({
        margin: itemMargin,
        padding: itemPadding
      })

      if (vw > 1200) {
        $('.item').width(pcWidth);
      } else {
        $('.item').width(mobileWidth);
      }



    },
    error: function() {

    }
  });



$('.scrollToTop').fadeOut();


var offset = 500;
var duration = 500;
$(window).scroll(function(){
  if ($(this).scrollTop() > offset) {
    $('.scrollToTop').fadeIn(duration);
  } else {
    $('.scrollToTop').fadeOut(duration);
  }
});

$(".scrollToTop").click(function() {
  scrollToAnchor('top');
});




$('.btn-shop').click(function(){
  window.open('http://www.vivatv.com.tw/');
});








$('.btn-detail').click(function(){
  scrollToAnchor('detail');
});



$('.title-1').click(function(){
  window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=1&smallCategoryId=7E85B72A9CD73B7CE0536E0212AC29EE');
});
$('.title-2').click(function(){
  window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=1&smallCategoryId=7E85B72A9CD83B7CE0536E0212AC29EE');
});
$('.title-3').click(function(){
  window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=1&smallCategoryId=7E85B72A9CD93B7CE0536E0212AC29EE');
});

});

function scrollToAnchor(aid){
  var aTag = $('#'+aid);
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}



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


$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

/*function playVideo() {
  player.playVideo();
}
        
function pauseVideo() {
  player.pauseVideo();
}
function onPlayerReady(event) {
    player.mute();
}
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      
      

      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '675',
          width: '1200',
          videoId: 'EFMUFAwef_A',
          events: {
            'onReady': onPlayerReady
          }
        });
      }
$(window).on('resize scroll', function() {
  if ($('.video-bg').isInViewport()) {
    playVideo();
  } else {
    pauseVideo();
  }
});*/