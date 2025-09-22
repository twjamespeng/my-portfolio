$(function(){
	
	var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLStrings = sPageURL.toString().split('?'),
    sParameterName,
    i;

    var sURLVariables = sURLStrings.toString().split('&');

    for (i=0; i< sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[i] === undefined ? true : sParameterName[1];
      }
    }
  };

  var monthfromURL = getUrlParameter('m');
  var datefromURL = getUrlParameter('d');




  var year = moment().format('YYYY');
  var month = moment().format('MM');
  var date = moment().format('DD');
  var day = moment().format('dddd');
  var h = moment().format('HH');
    // var output = moment().add(10, 'hours').format('YYYY/MM/DD');
    console.log('實際日期：'+ year + '年' + month +'月'+ date +'日，'+ day + '，現在是'+ h + '點');


    if (datefromURL&&monthfromURL) {
      date = datefromURL;
      month = monthfromURL;
      day = moment(year+month+date).format('dddd');
      console.log('指定日期：'+ year + '年' + month +'月'+ date +'日，'+ day);
    }

    if ((month == 01 && date < 20) || (month == 12)) {
    	$('.grid').addClass('grid-0109');
	  	$("#grid-1").load("/html/images/act/2019/01/09/grid-0109-1.html");
		  $("#grid-2").load("/html/images/act/2019/01/09/grid-0109-2.html");
		  $("#grid-3").load("/html/images/act/2019/01/09/grid-0109-3.html");
		  $("#grid-4").load("/html/images/act/2019/01/09/grid-0109-4.html");
    } else if ( (month == 01 && date >= 20) || (month >= 02) ) {
      $('.grid').addClass('grid-0120');
      $("#grid-1").load("/html/images/act/2019/01/09/grid-0120-1.html");
      $("#grid-2").load("/html/images/act/2019/01/09/grid-0120-2.html");
      $("#grid-3").load("/html/images/act/2019/01/09/grid-0120-3.html");
      $("#grid-4").load("/html/images/act/2019/01/09/grid-0120-4.html");
    }
/* */
    if (month == 02 && date == 10) {      $('.remaining-days').addClass('day-1');    }
    if (month == 02 && date == 09) {      $('.remaining-days').addClass('day-2');    }
    if (month == 02 && date == 08) {      $('.remaining-days').addClass('day-3');    }
    if (month == 02 && date == 07) {      $('.remaining-days').addClass('day-4');    }
    if (month == 02 && date == 06) {      $('.remaining-days').addClass('day-5');    }
    if (month == 02 && date == 05) {      $('.remaining-days').addClass('day-6');    }
    if (month == 02 && date == 04) {      $('.remaining-days').addClass('day-7');    }

    $('.btn-shop').click(function(){
      window.open('https://www.vivatv.com.tw/Shops.go?catb=8&catm=2&middleCategoryId=7E2553FF76C33B6CE0536E0212AC2BCB');
    });


    


    $('.btn-leave').click(function(){
      if (!$('.modal-body').hasClass("prize-gg")) {
        window.open('https://www.vivatv.com.tw/Shops.go?catb=8&catm=2&middleCategoryId=7E2553FF76C33B6CE0536E0212AC2BCB');
      } else {
        window.open('https://www.vivatv.com.tw');
      }
    });

    $('.btn-detail').click(function(){
      scrollToAnchor('caution');
    });

    $('.grid-0109 .title-1').click(function(){
      window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&smallCategoryId=7E2553FF76C43B6CE0536E0212AC2BCB');
    });
    $('.grid-0109 .title-2').click(function(){
      window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&smallCategoryId=7E2553FF76C53B6CE0536E0212AC2BCB');
    });
    $('.grid-0109 .title-3').click(function(){
      window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&smallCategoryId=7E2553FF76C63B6CE0536E0212AC2BCB');
    });
    $('.grid-0109 .title-4').click(function(){
      window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&smallCategoryId=7E2553FF76C83B6CE0536E0212AC2BCB');
    });

    $('.grid-0120 .title-1').click(function(){
      window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&smallCategoryId=7E2553FF76CA3B6CE0536E0212AC2BCB');
    });
    $('.grid-0120 .title-2').click(function(){
      window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&smallCategoryId=7E2553FF76CB3B6CE0536E0212AC2BCB');
    });
    $('.grid-0120 .title-3').click(function(){
      window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&smallCategoryId=7E2553FF76CD3B6CE0536E0212AC2BCB');
    });
    $('.grid-0120 .title-4').click(function(){
      window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&smallCategoryId=7E2553FF76CF3B6CE0536E0212AC2BCB');
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


