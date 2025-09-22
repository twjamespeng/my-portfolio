$(function(){
	
	

    
    
	  	$("#grid-1").load("images/act/2019/03/04/grid-1.html");
		  $("#grid-2").load("images/act/2019/03/04/grid-2.html");
		  $("#grid-3").load("images/act/2019/03/04/grid-3.html");
		
    
/* */
    

    $('.btn-shop').click(function(){
      window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=1&middleCategoryId=7E85612DD8513B75E0536E0212AC7965');
    });


    


    

    $('.btn-detail').click(function(){
      scrollToAnchor('event');
    });

    $('.title-1').click(function(){
      window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=1&smallCategoryId=7E85612DD8523B75E0536E0212AC7965');
    });
    $('.title-2').click(function(){
      window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=1&smallCategoryId=7E85612DD8533B75E0536E0212AC7965');
    });
    $('.title-3').click(function(){
      window.open('http://www.vivatv.com.tw/Shops.go?catb=8&catm=1&smallCategoryId=7E85612DD8543B75E0536E0212AC7965');
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


