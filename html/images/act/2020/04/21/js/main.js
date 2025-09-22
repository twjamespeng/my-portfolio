$(function(){
  // wow = new WOW({
  //   boxClass: 'wow',
  //   animateClass: 'animated',
  //   offset: 0,
  //   mobile: false,
  //   live: true
  // })
  // wow.init();
  
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
  var prizefromURL = getUrlParameter('p');
  
  
  

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
  
 

  if (datefromURL) {
      date = datefromURL;
      month = monthfromURL;
  }

  var output;

  if (date == '13' && month == '05' ) {
    $('#img-logo').addClass('fiveday');
  }
  if (date == '14' && month == '05' ) {
    $('#img-logo').addClass('fourday');
  }
  if (date == '15' && month == '05' ) {
    $('#img-logo').addClass('threeday');
  }
  if (date == '16' && month == '05' ) {
    $('#img-logo').addClass('twoday');
  }
  if (date == '17' && month == '05' ) {
    $('#img-logo').addClass('oneday');
  }
 
  
  

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
  $(".btn-detail").click(function() {
    scrollToAnchor('detail');
  });
  
  $('#c').each(function() {

    var timeout, longtouch;

    $(this).mousedown(function() {
        timeout = setTimeout(function() {
            longtouch = true;
        }, 1000);
    }).mouseup(function() {
        if (longtouch) {
            // console.log('click超過1秒');
        } else {
            // console.log('click不到1秒');

        }
        longtouch = false;
        clearTimeout(timeout);
    });
  });
  
  $('#c').each(function() {

    var timeout, longtouch;

    $(this).on('touchstart', function(){
        // console.log('touchstart!');
        timeout = setTimeout(function() {
            longtouch = true;
        }, 1000);
    }).on('touchend', function(){
        // console.log('touchend!');
        if (longtouch) {
            // console.log('touch超過1秒');
        } else {
            // console.log('touch不到1秒');

        }
        longtouch = false;
        clearTimeout(timeout);
    });

    
  });

  $('[mouse-over-effect]').mouseenter(function(){
    $(this).removeClass();
    var m = $(this).attr('mouse-over-effect');
    $(this).addClass('animated ' + m);
  });
  $('[mouse-over-effect]').mouseout(function(){
    var m = $(this).attr('mouse-over-effect');
    $(this).removeClass();
  });
  
  if (prizefromURL) {
    showPrize(prizefromURL);
  }

  var prize;
  
  
  $('#btn-gacha').click(function(){

    // 測試用
    
      var pArr = ['300', '200', '100', 'gg']
      var pRand = rand(0,3);
      prize = pArr[pRand];
    
    // 測試用

    var checker;
    gacha(prize); //將抽獎結果(字串)餵給它, 例如: '300', '200', '100', 'gg'

  });

  $('.btn-login').click(function(){
    if ($(this).hasClass('clickme')) {
      startGame();
    } else {
      $(this).addClass('clickme animated bounceIn');  
    }
    
  })

  
  


  $('#btn-ok').click(function(){
    // console.log('checker: '+ checker);

    $('#gachapon').removeClass();
    if (checker == 'gg') {
      // 不關閉轉蛋機,讓使用者再玩一次
    } else {
      
      $('#game-zone').removeClass();
      $('.side-bar').removeClass('playing');
      setTimeout(function(){
        scrollToAnchor('top');
      },500);
    }
    
  });

  $('.left-board').click(function(){
    scrollToAnchor('detail');
  })
  $('.right-board').click(function(){
    scrollToAnchor('detail');
  })
  $('.btn-join').click(function(){
    window.open('https://www.vivatv.com.tw/agree.do');
  });
  $('.btn-detail').click(function(){
    scrollToAnchor('detail');
  })
  $('.btn-shopping').click(function(){
    window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=7&middleCategoryId=96D31C764F01341EE0536E0212ACCFD7');
  })
  
  checkTop();
  $(window).scroll(function(){
    checkTop();
  });

  $('#detail').load('images/act/2020/04/21/terms.html');


  //固定要呼叫下面兩個函式

    generateRow('my-row'); //填入「公格容器」的id

  if( date >= '06' && month == '05' ) {
    loadData('images/act/2020/04/21/20200506_source.html'); //填入「商品資料檔」的路徑
  } else {
    loadData('images/act/2020/04/21/20200421_source.html'); //填入「商品資料檔」的路徑
  }
});

function checkTop() {
  var scroll = $(window).scrollTop();
  if ( scroll > 20 ) {
    $('.default-top').addClass('notontop');
  } else {
    $('.default-top').removeClass('notontop');
  }
}

function startGame() {
  $('.side-bar').addClass('playing');
  $('#game-zone').addClass('on');
  setTimeout(function(){
    scrollToAnchor('top');
  }, 600);
  $('.btn-login').addClass('tomorrow');
}

function gacha(prize) {


  checker = prize;
  // console.log('c: '+ checker);

  $('#gachapon').removeClass();
  $('.turn-table').addClass('turning');

  setTimeout(function(){
    $('.turn-table').removeClass('turning');
    $('#gachapon').removeClass();
    $('#gachapon').addClass('ball-' + rand(1,10) + ' dropping');
    setTimeout(function(){

      // console.log('prize: '+ prize);

      showPrize(prize);

    },500);
  }, 1000);
}

function showPrize(prize) {
  if (prize == 'gg') {
    var gArr = ['gg-1','gg-2'];
    var prize = gArr[rand(0,1)];
  }
  var tmp = 'prize-' + prize;
  $('#prize').removeClass();
  $('#prize').addClass('modal-content modal-prize '+tmp);
  setTimeout(function(){
    $('#result-prize').modal('show');
  }, 500);

}

function rand (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


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
  // this.el.css('transform', 'rotate(' + scrollTop + 'deg)');
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
