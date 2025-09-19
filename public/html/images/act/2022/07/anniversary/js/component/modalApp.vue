<template>
	<div>
    <!-- 生日卡 -->
    <div class="modal fade" id="eventModalCard" tabindex="-1" aria-labelledby="eventModalCard" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-secondary">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-3">【好禮雙重送】<br>親手獻上我的祝福</h3>
            <div class="p-3">
              <h5>活動期間</h5>
              <p class="mb-0">2022/07/25(一)00:00 - 2022/07/31(日)23:59。</p>  
            </div>
            <div class="p-3">
              <h5>活動內容</h5>
              <p>活動期間會員參與生日卡製作活動，即有機會獲得銀幣 (每一帳號限參與一次）。<br>生日卡上傳FB寫下對ViVa的生日祝福，加碼再抽好禮。 </p>
            </div>
            <div class="p-3">
              <h5>活動獎項</h5>
              <ol class="ps-3">
                <li class="mb-2">銀幣$100(共計500份)/次日中午12時歸戶</li>
                <li class="mb-2">單柄牛奶鍋(共計3份)/市價439元</li>
                <li class="mb-2">於8/15(一)抽出單柄牛奶鍋得獎者，銀幣使用期限為一個月</li>
              </ol>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">請得獎者於開獎1週內，私訊小編提供寄件姓名、地址、電話。</li>
              <li class="list-group-item">獎品寄送地址僅限台灣本島。</li>
              <li class="list-group-item">本活動一帳號限參加一次。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。 </li>
              <li class="list-group-item">ViVa TV購物金、生日禮金、禮金、商抵用金之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動之獎品均不得要求轉換現金或其他獎品。</li>
              <li class="list-group-item">本活動所提供之獎項，消費者相關權益概由提供商品或服務之廠商負責，若有疑義，請逕行向廠商洽詢。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 翻牌 -->
    <div class="modal fade" id="eventModalFlip" tabindex="-1" aria-labelledby="eventModalFlip" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-secondary">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center">【滿額抽】17翻轉美好</h3>
            <div class="p-3">
              <h5>活動期間</h5>
              <p class="mb-0">2022/7/31(日)00:00 - 2022/8/31(三)23:59。</p>  
            </div>
            <div class="p-3">
              <h5>活動內容</h5>
              <p>於活動期間，<b>消費滿$2,000</b>即可參與翻牌遊戲活動(每一帳號限參與一次，送完為止)</p>
              <ol class="ps-3">
                <li class="mb-2">銀幣於次日中午12時歸戶，使用期限至2022/8/31</li>
                <li class="mb-2">贈品將於活動結束後寄出</li>
              </ol>
            </div>
            <div class="p-3">
              <h5>活動獎項</h5>
              <ol class="ps-3">
                <li class="mb-2">$100元銀幣，共計400份</li>
                <li class="mb-2">$200元銀幣，共計200份</li>
              </ol>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV購物金、生日禮金、禮金、商品抵用金之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- 新客首購禮&滿額贈 -->
    <div class="modal fade" id="eventModalNewCustomer" tabindex="-1" aria-labelledby="eventModalNewCustomer" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-secondary">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="p-3">
              <h3 class="text-center">【新客首購禮】HAPPY 17</h3>
              <p>活動期間註冊新會員成功，首筆消費金額滿$2,000送$100銀幣</p>  
            </div>
            <div class="p-3">
              <h3 class="text-center">【滿額贈】</h3>
              <p>活動期間結帳金額：</p>
              <ul class="ps-3">
                <li class="mb-2">單日累計消費滿$80,000，可獲贈$5,000金幣/不跨日累計</li>
                <li class="mb-2">單日累計消費滿$30,000，可獲贈$3,600銀幣(12% off)/不跨日累計</li>
                <li class="mb-2">單日累計消費滿$10,000，可獲贈$1,200銀幣(12% off)/不跨日累計</li>
                <li class="mb-2">單日累計消費滿$5,000，可獲贈$500銀幣(10% off)/不跨日累計</li>
                <li class="mb-2">單日累計消費滿$3,000，可獲贈$200銀幣(6.6% off)/不跨日累計</li>
              </ul>  
            </div>    
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV購物金、生日禮金、禮金、商品抵用金之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!-- 新客首購禮&滿額贈 -->
    <div class="modal fade" id="eventModalNewForce" tabindex="-1" aria-labelledby="eventModalNewForce" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-secondary">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="p-3">
              <h3 class="text-center">【新市力集合】<br>金幣好禮送給你</h3>
              <p>活動當日8/12(五)購買9大品牌商品(de Buyer、Sabre Paris、Chateau Laguiole、HARIO、RONA、漢美馳、美國Vitamix、九陽、本心本來)，消費不限金額，即可抽$777元金幣</p>  
            </div>  
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    


	</div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      faqURL: 'https://www.vivatv.com.tw/Information.go?flag=freshman',
      feb: false
    };
  },
  methods: {
    init: function() {

      var eventModal = document.getElementById('eventModal');
      if (eventModal) {
        eventModal.addEventListener('shown.bs.modal', function(event) {
          
          var button = event.relatedTarget;
          var anchor = button.getAttribute('data-bs-anchor');

          console.log('anchor: '+ anchor);

          scrollToAnchorInModal(anchor);

        });
      }
      
      // let timeFromURL = this.getUrlParameter('t');
      // if (timeFromURL) {
      //   let monthFromURL = timeFromURL.substr(4, 2);
      //   if (monthFromURL == '02') {
      //     this.feb = true;
      //   }
      // } else {
      //   let month = moment().format('MM');
      //   if (month == '02') { 
      //     this.feb = true;
      //   }
      // }  
    },
    getUrlParameter: function(sParam) {
      var sPageURL = window.location.search.substring(1),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
      }
    },
    scrollToAnchorInModal: function(aid) {
      var aTag = $('#'+aid);
      var offset = aTag.offset().top - aTag.parent().offset().top;
      $('.modal-body').animate({scrollTop: offset},'slow');
    }
  },
  mounted: function() {
    this.init();
  }

}
</script>

