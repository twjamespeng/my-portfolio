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
    //兩顆按鈕都disable
    $('#btnPlay, #btnGacha').attr('disabled', true);
    //顯示已額滿modal
    $('#alreadyFull').modal('show');
  }

  //已玩過要做的事
  function showAlreadyPlayedModal() {
    //兩顆按鈕都disable
    $('#btnPlay, #btnGacha').attr('disabled', true);
    //顯示已玩過modal
    $('#alreadyPlayed').modal('show');
  }

  //抽獎結果modal、已額滿modal及已玩過modal關閉後, 導至EC首頁
  $('#prizeResult, #alreadyFull, #alreadyPlayed').on('hidden.bs.modal', function(){
    document.location.href = 'https://www.vivatv.com.tw/';
  });

  var prize;

  
  $('#ballCanvas').each(function() {
    var timeout, longtouch;

    $(this).mousedown(function() {
        timeout = setTimeout(function() {
            longtouch = true;
        }, 1000);
    }).mouseup(function() {
        if (longtouch) {
            console.log('click超過1秒');
        } else {
            console.log('click不到1秒');
        }
        longtouch = false;
        clearTimeout(timeout);
    });
  });
  
  $('#ballCanvas').each(function() {
    var timeout, longtouch;

    $(this).on('touchstart', function(){
        console.log('touchstart!');
        timeout = setTimeout(function() {
            longtouch = true;
        }, 1000);
    }).on('touchend', function(){
        console.log('touchend!');
        if (longtouch) {
            console.log('touch超過1秒');
        } else {
            console.log('touch不到1秒');
        }
        longtouch = false;
        clearTimeout(timeout);
    });
    
  });
  
  $('#btnGacha').click(function(){
    // 測試用
    var pArr = ['3', '2', '1']
    var pRand = rand(0,2);
    prize = pArr[pRand];
    gacha(prize); //將抽獎結果(字串)餵給它, 例如: '3', '2', '1'
  });

  

  
});



function startGame() {
  $('#Game').addClass('on');
  $('#Landing').removeClass('d-flex').addClass('d-none');
}

function gacha(prize) {
  $('#btnGacha').attr('disabled', true);
  $('#gachaBall').removeClass();
  $('.turn-table').addClass('turning');

  setTimeout(function(){
    $('.turn-table').removeClass('turning');
    $('#gachaBall').removeClass();
    $('#gachaBall').addClass('ball-' + prize + ' dropping');

    setTimeout(function(){
      console.log('prize: '+ prize);
      showPrize(prize);
    },500);

  }, 1500);

}

function showPrize(prize) {

  $('#prize').html('<img class="img-fluid" src="images/act/2022/05/gacha/images/prize-'+ prize +'.png">');

  setTimeout(function(){
    $('#prizeResult').modal('show');
  }, 500);

}

function rand (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}







