function generateRow(id) {
  $('#'+id).html('<div class="grid-1">'+
            '<div class="g-title title-1"></div>'+
            '<div id="deck-1" class="g-row"></div>'+
          '</div>'+
          '<div class="grid-2">'+
            '<div class="g-title title-2"></div>'+
            '<div id="deck-2" class="g-row"></div>'+
          '</div>'+
          '<div class="grid-3">'+
            '<div class="g-title title-3"></div>'+
            '<div id="deck-3" class="g-row"></div>'+
          '</div>'+
          '<div class="grid-4">'+
            '<div class="g-title title-4"></div>'+
            '<div id="deck-4" class="g-row"></div>'+
          '</div>');
}

function setWidth() {
  var vw = $(window).width();
  var pcParentPadding = 5;
  var pcParentBorder = 5;
  var pcItemMargin = 5;
  var pcItemPadding = 10;
  // var pcGutterWidth = pcItemPadding + pcItemMargin;

  var mobileParentPadding = 10;
  var mobileParentBorder = 5;
  var mobileItemMargin = 20;
  var mobileItemPadding = 20;
  // var mobileGutterWidth = mobileItemPadding + mobileItemMargin;
  var pcNum = 4;
  var mobileNum = 2;

  var pcWidth = ((1240 - ((pcParentBorder+pcParentPadding) * 2)) - (pcItemMargin * 2 * pcNum) ) / pcNum;

  var mobileWidth = ( (1240 - ((mobileParentBorder+mobileParentPadding) * 2)) - (mobileItemMargin * 2 * mobileNum) ) / mobileNum;
  
  

  if (vw > 1240) {
    $('.item').width(pcWidth);
    $('.item').css({
      margin: pcItemMargin,
      padding: pcItemPadding
    });
  } else {
    $('.item').width(mobileWidth);
    $('.item').css({
      margin: mobileItemMargin,
      padding: mobileItemPadding
    });
  }
}


function loadData(path) {

  // var y = filename.slice(0, 4);
  // var m = filename.slice(4, 6);
  // var d = filename.slice(6, 8);



  $.ajax({
    type: "get",
    url: path,
    dataType: "xml",
    success: function(xml) {

      var arr = [];

      $(xml).find('item').each(function(){
        var item = $(this);
        var rng = Math.floor((Math.random() * 10000) + 1);
        var obj = {
          'deck' : item.find('deck').text(),
          'id' : item.find('id').text(),
          'brand' : item.find('first').text(),
          'name' : item.find('second').text(),
          'price' : item.find('price').text(),
          'title' : item.find('headtitle').text(),  //公格標題
          'link' : item.find('headlink').text(),  //more連結
          'imglink' : item.find('imglink').text(), //標題圖片路徑
          'pricecolor' : item.find('pricecolor').text(),
          'pricename' : item.find('pricename').text(),
          'bgcolor' : item.find('bgcolor').text(),
        };
        arr.push(obj);
      });

      

      for (var i = 0 ; i <= arr.length -1 ; i++) {
        
        var t = arr[i].title;
        var t4 = arr[4].title;
        
        
        if (t4.length > 2) {  //一排4格
          
          var j = parseInt(i/4)+1;
          var u = arr[i].link;

          if (u.length >2) {
            $('.title-'+ j).html('<a target="_blank" href="'+ arr[i].link +'"><img title="'+ arr[i].title +'" class="img-fluid" src="' + arr[i].imglink + '"></a>');  
          } else {
            //do nothing
          }

        } else {  //一排8格

          var j = parseInt(i/8)+1;
          var u = arr[i].link;

          if (u.length >2) {
            $('.title-'+ j).html('<a target="_blank" href="'+ arr[i].link +'"><img title="'+ arr[i].title +'" class="img-fluid" src="' + arr[i].imglink + '"></a>');  
          } else {
            //do nothing
          }
        }


        $('#deck-' + arr[i].deck).append('<div class="item">'+
          '<div class="i-image view zoom wow fadeIn" data-wow-delay="0.'+ (i%4)*2 +'s"><a target="_blank" href="https://www.vivatv.com.tw/Product.go?itemCode='+ arr[i].id +'"><img title="'+ arr[i].brand + ' ' + arr[i].name +'" class="img-fluid" src="https://www.vivatv.com.tw/common/images/product/' + arr[i].id +'/1.jpg'+ '"></a></div>'+
          '<hr>'+
          '<div class="i-name"><a target="_blank" href="https://www.vivatv.com.tw/Product.go?itemCode='+ arr[i].id +'"><span class="i-name-b">'+ arr[i].brand +'</span><br><span class="i-name-n">'+ arr[i].name +'</span></a></div>'+
          '<div class="i-pricename">' + arr[i].pricename + '</div>'+
          '<div class="i-price">'+ arr[i].price +'</div></div>'
        );
      };



      setWidth();

      $('.i-price').css('color', arr[0].pricecolor);
      $('.i-pricename').css('color', arr[0].pricecolor);
      
    }
  });
}

$(function(){

  $(window).on('resize', function(){

    var vw = $(window).width();
    console.log('vw: '+vw);
    // if (vw < 1250) {
    	// setTimeout(function(){
    	// 	location.reload();
    	// },200);
      
    // }
  });
});
