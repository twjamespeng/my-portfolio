<template>
	<div>
    <!-- Modal -->
    <div class="modal fade" id="eventModal-1" tabindex="-1" aria-labelledby="eventModalLabel-1" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-secondary">
            <h6 class="modal-title text-white" id="eventModalLabel-1">畢耶滿額送好禮</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-3">畢耶滿額送好禮</h3>
            <div class="p-3">
              <h5>活動期間</h5>
              <p class="mb-0">2022/07/18(一) 00:00 -2022/08/31(三) 23:59。</p>  
            </div>
            <div class="p-3">
              <h5>活動內容</h5>
              <p>活動期間購買de Buyer畢耶商品滿額即送：</p>
              <ol class="ps-3">
                <li class="mb-2">滿1500，贈Yamachiku日本熊本手工筷2雙(市價$300)，限量200份</li>
                <li class="mb-2">滿2500，贈英國ANYSHARP磨刀器一個(市價$550)，限量200份</li>
                <li class="mb-2">滿5000，贈deBuyer里昂鐵鍋24cm一隻(市價1060元)，限量50份</li>
              </ol>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">上述滿額贈，恕不得跨日累計兌換，每一帳號限兌換一次(數量有限 送完為止)。</li>
              <li class="list-group-item">贈品將於活動結束後，9/30(五)統一寄出。</li>
              <li class="list-group-item">本活動之獎品均不得要求轉換現金或其他獎品。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲贈資格。</li>
              <li class="list-group-item">本活動所提供之獎項，消費者相關權益概由提供商品或服務之廠商負責，若有疑義，請逕行向廠商洽詢。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="eventModal-2" tabindex="-1" aria-labelledby="eventModalLabel-2" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-secondary">
            <h6 class="modal-title text-white" id="eventModalLabel-2">Sabre Paris 買就送好禮</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-3">Sabre Paris 買就送好禮</h3>
            <div class="p-3">
              <h5>活動期間</h5>
              <p class="mb-0">2022/07/18(一) 00:00 -2022/08/07(日) 23:59。</p>  
            </div>
            <div class="p-3">
              <h5>活動內容</h5>
              <p>活動期間購買指定商品可享獲贈磨刀器一個，(每一訂單限送一個)。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">獎品寄送地址僅限台灣本島。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。 </li>
              <li class="list-group-item">本活動之獎品均不得要求轉換現金或其他獎品。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777</li>
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

