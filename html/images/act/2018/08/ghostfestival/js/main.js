$(function(){


    new WOW().init();
    
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
    

  if (datefromURL&&monthfromURL) {
      date = datefromURL;
      month = monthfromURL;
      day = moment(year+month+date).format('dddd');
        // console.log('rday:'+day);
        console.log('指定日期：'+ year + '年' + month +'月'+ date +'日，'+ day);
      }

  
  if (date == 29 && month ==08) {
    $('.last-day').addClass('last-5');
  }
  if (date == 30 && month ==08) {
    $('.last-day').addClass('last-4');
  }
  if (date == 31 && month ==08) {
    $('.last-day').addClass('last-3');
  }
  if (date == 01 && month ==09) {
    $('.last-day').addClass('last-2');
  }
  if (date == 02 && month ==09) {
    $('.last-day').addClass('last-1');
  }

























    $("#grid-1").load("images/act/2018/08/ghostfestival/grid-1.html");
    $("#grid-2").load("images/act/2018/08/ghostfestival/grid-2.html");
    $("#grid-3").load("images/act/2018/08/ghostfestival/grid-3.html");
    $("#grid-4").load("images/act/2018/08/ghostfestival/grid-4.html");

    
    $('.product').click(function(){
        var link = $(this).attr('data-id');
        window.open("https://www.vivatv.com.tw/Product.go?itemCode=" + link) ;

    });
    $('.btn-go').click(function(){
        window.open("http://www.vivatv.com.tw/logon.do");
    });
    $('.step-go').click(function(){
        window.open("http://www.vivatv.com.tw/logon.do");
    });
    $('.step-call').click(function(){
        window.open("tel:0809052777");
    });
    $('.btn-again').click(function(){
        $('#result-prize').modal('hide');
    });
    
    $('.title-1').click(function(){
        window.open("http://www.vivatv.com.tw/Shops.go?catb=8&catm=3&smallCategoryId=71B8E1F62E1211E7E0536F0212AC562A");
    });
    $(".title-2").click(function() {
        window.open("http://www.vivatv.com.tw/Shops.go?catb=8&catm=3&smallCategoryId=71B8E1F62E1311E7E0536F0212AC562A");
    });
    $(".title-3").click(function() {
        window.open("http://www.vivatv.com.tw/Shops.go?catb=8&catm=3&smallCategoryId=71B8E1F62E1711E7E0536F0212AC562A");
    });
    $(".title-4").click(function() {
        window.open("http://www.vivatv.com.tw/Shops.go?catb=8&catm=3&smallCategoryId=71B8E1F62E1811E7E0536F0212AC562A");
    });
    $(".btn-act-1").click(function() {
        scrollToAnchor('board');
    });
    $(".btn-act-2").click(function() {
        scrollToAnchor('event-2');
    });
    $(".side-nav-1").click(function() {
        scrollToAnchor('step');
    });
    $(".side-nav-2").click(function() {
        scrollToAnchor('event-rule');
    });
    $(".side-nav-3").click(function() {
        window.open("https://www.vivatv.com.tw/Shops.go?catb=8&catm=2&middleCategoryId=71B8E1F62E1111E7E0536F0212AC562A");
    });
    $(".side-nav-4").click(function() {
        scrollToAnchor('top');
    });
    $('.btn-bottom').click(function(){
        window.open("https://www.vivatv.com.tw/");
    });
    
    $("#copyBtn").click(function() {
      var name = $(this).attr('name');
      var el = document.getElementById(name);
      var range = document.createRange();
      range.selectNodeContents(el);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      document.execCommand('copy');
      alert("已複製序號至剪貼簿!");
      return false;
    });

    $('.zombie').mouseover(function(){
        $(this).addClass('animated bounce');
    });
    $('.zombie').mouseout(function(){
        var $el = $(this);
        setTimeout(function () {
            $el.removeClass('animated bounce');
        }, 500);
    });

    var eye=$(".eye");
var eyeCenter=[eye.offset().left+eye.width()/2, eye.offset().top+eye.height()/2];

$(document).mousemove(function(e){    
    
        
  var angle = Math.atan2(e.pageX- eyeCenter[0],- (e.pageY- eyeCenter[1]) )*(360/Math.PI);     
    
    eye.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});    
    eye.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
    eye.css({ 'transform': 'rotate(' + angle + 'deg)'});
    
});











});

function scrollToAnchor(aid){
    var aTag = $('#'+aid);
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}


/*$(document).ready(function () {
  $(document).mousemove(function (e) {
    parallax(e, document.getElementById('modern-bg'), 1);
  });
});

function parallax(e, target, layer) {
  var layer_coeff = 20 / layer;
  var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
  var y = (1200 - target.offsetHeight) / 5 - (e.pageY - (1200 / 5)) / layer_coeff;
  $(target).offset({ top: y ,left : x });
};*/

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