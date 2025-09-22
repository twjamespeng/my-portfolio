


var cakeShape, cakeFlavor, cardStyle;

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
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
    return false;
  };
  
  var prizefromURL = getUrlParameter('p');
  var modalfromURL = getUrlParameter('m');
  
  if (prizefromURL) {
    showPrize(prizefromURL);
  }

  
  

  

  $('button[data-cake-shape]').click(function(){
    cakeShape = $(this).attr('data-cake-shape');
    $('button[data-cake-shape]').removeClass('active');
    $(this).addClass('active');
    $('#step1Footer').removeClass('d-none');
    console.log('cakeShape: '+ cakeShape);
  });

  $('button[data-cake-flavor]').click(function(){
    cakeFlavor = $(this).attr('data-cake-flavor');
    $('button[data-cake-flavor]').removeClass('active');
    $(this).addClass('active');
    $('#step2Footer').removeClass('d-none');
    console.log('cakeFlavor: '+ cakeFlavor);
  });

  $('button[data-card-style]').click(function(){
    cardStyle = $(this).attr('data-card-style');
    $('button[data-card-style]').removeClass('active');
    $(this).addClass('active');
    $('#step3Footer').removeClass('d-none');
    console.log('cardStyle: '+ cardStyle);
  });










  //demo用
  if (modalfromURL == 'full') {
    showAlreadyFullModal();
  } else if (modalfromURL == 'played') {
    showAlreadyPlayedModal();
  } else {
    //do nothing
  }


  //已額滿要做的事
  function showAlreadyFullModal() {
    //顯示已額滿modal
    $('#alreadyFull').modal('show');
  }

  //已玩過要做的事
  function showAlreadyPlayedModal() {
    //顯示已玩過modal
    $('#alreadyPlayed').modal('show');
  }

   
  changeModalText();
  cakeDisplayModalFix();
  appendFacebookButton();

  $('#alreadyPlayed .modal-footer button').onclick(function(){
    $('#drawCoin').remove();
  });

});



function cakeImgDisplay() {
  var cakeImg = 'images/act/2022/07/card/images/' + cardStyle + '-' + cakeShape + '-' + cakeFlavor + '.jpg';
  $('#cakeImg').attr('src', cakeImg);
  $('#cakeImgAnchor, #cakeImgAnchorMobile').attr('href', cakeImg);
  $('#cakeDisplayModal').modal('show');
}


function drawHandler() {
    $('#drawCoin').remove();
  }

function changeModalText() {
  var FB = 'https://www.facebook.com/vivatv.tw/posts/pfbid0yVwndMd7kpouGzGX2Tsfdkq5k9gL3qAnhDffZM2xxnAXaQViTUfhBE58SnxzGknMl?__cft__[0]=AZVFMFdtSxujRYUCa0zkl4r34sxW4JBxbr1Nps16f5EEVo8Aj7wGafWOBrejtDvAPG6-9wF5H7OaOpo-Plb5U9wMeofRCmLG5fyJ2ksfCQshodcW76Ej8TjK8UCFtUotMr6m92Qc9H6CVk9ISRC3xws2B96J2v_NHtu-XgDzy-Wqa00fe6JUTkEzXRrZvyYxEvkwkIiaR7Pq219CNloNH4ZY&__tn__=%2CO%2CP-R';
  var newText = 
  '<h5 class="text-center">【好禮雙重送】親手獻上我的祝福</h5>'+
  '<ol class="ps-3">'+
      '<li class="mb-2">活動期間：2022/7/25 00:00 ~ 2022/7/31 23:59。</li>'+
      '<li class="mb-2">活動內容：<br>活動期間會員參與生日卡製作活動，即獲贈100銀幣，限量500份(每一帳號限參與一次)。<br>前往<a href="'+ FB +'" target="_blank" class="text-secondary">ViVa美好購物臉書專頁貼文</a>上傳卡片圖檔並寫下對ViVa的生日祝福，加碼再抽好禮。</li>'+
      '<li class="mb-2">活動獎項：<br>銀幣$100(共計500份)/次日中午12時歸戶<br>簡單生活湯碗(共計3份)/市價439元<br>於8/15抽出簡單生活湯碗得獎者，銀幣使用期限為一個月</li>'+
      '<li class="mb-2">注意事項：<br>(1) 請得獎者於開獎1週內，私訊小編提供寄件姓名、地址、電話。<br>(2) 獎品寄送地址僅限台灣本島。<br>(3) 本活動一帳號限參加一次</li>'+
      '<li><a href="https://www.vivatv.com.tw/Information.go?flag=gift" target="_blank" class="text-secondary">銀幣使用說明</a></li>'+
  '</ol>';

  $('#eventDetail .modal-body').html(newText);

  console.log('modal text updated');
  
}

function cakeDisplayModalFix() {
  var modalHeader = 
  '<div class="modal-header">'+
    '<h5 class="modal-title"></h5>'+
    '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
  '</div>';

  $('#cakeDisplayModal .modal-content').prepend(modalHeader);

  var btn = 
  '<a href="https://www.vivatv.com.tw/html/202207anniversary.html" class="btn btn-outline-secondary rounded-pill p-2 py-3 m-1 d-flex flex-fill justify-content-center">回主活動頁</a>';

  
  $('#cakeDisplayModal .modal-footer').append(btn);
  
  
}

function appendFacebookButton() {
  var fbButton = 
  '<div class="col-12 col-xl-6 d-flex px-3 animate__animated animate__fadeInUp animate__delay-3s">'+
    '<a class="btn btn-secondary w-100 rounded-pill p-2 p-xxl-3 mb-3" href="https://www.facebook.com/vivatv.tw/posts/pfbid0yVwndMd7kpouGzGX2Tsfdkq5k9gL3qAnhDffZM2xxnAXaQViTUfhBE58SnxzGknMl?__cft__[0]=AZVFMFdtSxujRYUCa0zkl4r34sxW4JBxbr1Nps16f5EEVo8Aj7wGafWOBrejtDvAPG6-9wF5H7OaOpo-Plb5U9wMeofRCmLG5fyJ2ksfCQshodcW76Ej8TjK8UCFtUotMr6m92Qc9H6CVk9ISRC3xws2B96J2v_NHtu-XgDzy-Wqa00fe6JUTkEzXRrZvyYxEvkwkIiaR7Pq219CNloNH4ZY&__tn__=%2CO%2CP-R" target="_blank">到臉書上傳卡片</a>'+
  '</div>';

  $('#Landing .col-xxl-12 .mt-lg-0').append(fbButton);
}




