$(function(){


    new WOW().init();
    



    
    $('.product').click(function(){
        var link = $(this).attr('data-id');
        window.open("https://www.vivatv.com.tw/Product.go?itemCode=" + link) ;

    });
    $('.btn-join').click(function(){
        window.open("https://www.vivatv.com.tw/logon.do");
    });
    $('.btn-shopping').click(function(){
        window.open("http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&middleCategoryId=6149E620AED23F56E0536D0212AC1CAC");
    });
    $('.grid-1 .btn-more').click(function(){
        window.open("http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&smallCategoryId=62928E6B2092200FE0536D0212AC7B32");
    });
    $('.grid-2 .btn-more').click(function(){
        window.open("http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&smallCategoryId=62928E6B20A1200FE0536D0212AC7B32");
    });
    $('.grid-3 .btn-more').click(function(){
        window.open("http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&smallCategoryId=62928E6B20A2200FE0536D0212AC7B32");
    });
    $('.grid-4 .btn-more').click(function(){
        window.open("http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&smallCategoryId=62928E6B20A3200FE0536D0212AC7B32");
    });


    $('.grid-1-0219 .btn-more').click(function(){
        window.open("http://www.vivatv.com.tw/Shops.go?catb=8&catm=1&smallCategoryId=64239BD7B1703140E0536D0212AC429F");
    });
    $('.grid-2-0219 .btn-more').click(function(){
        window.open("http://www.vivatv.com.tw/Shops.go?catb=8&catm=1&smallCategoryId=64239BD7B3503140E0536D0212AC429F");
    });
    $('.grid-3-0219 .btn-more').click(function(){
        window.open("http://www.vivatv.com.tw/Shops.go?catb=8&catm=1&smallCategoryId=64827F39AFCC1112E0536F0212AC224A");
    });
    $('.grid-4-0219 .btn-more').click(function(){
        window.open("http://www.vivatv.com.tw/Shops.go?catb=8&catm=2&smallCategoryId=642349E1EEAE2A2DE0536D0212AC610E");
    });
    
    $(".btn-caution").click(function() {
        scrollToAnchor('caution');
    });
    
    


});

function scrollToAnchor(aid){
    var aTag = $('#'+aid);
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}
$(".btn-event").click(function() {
    scrollToAnchor('caution');
});
$(".btn-2k").click(function() {
    scrollToAnchor('caution');
});

