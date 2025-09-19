<template>
	<div>
    <!-- Modal -->
    <div class="modal fade" id="eventModal" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header round">
            <h5 class="modal-title" id="eventModalLabel">活動說明及注意事項</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center">活動說明</h3>

            <h4>【買就抽】</h4>
            <p class="ps-3">2021/10/8(五) - 12/31(五)消費即可參加抽獎，抽獎獎項：VOLVO x萬國原廠登機箱20吋(參考市價8,508元，共1名)、VOLVO XC40 1:18 原廠模型車(參考市價3,444元，共1名)、牛頭牌專櫃新品牛頭鋼限量炒鍋組(參考市價2,980元，共4名)、VOLVO x STELTON 不鏽鋼雙層保溫瓶乙瓶(顏色隨機，參考市價1,365元，共3名)</p>
            <ul class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎時間與方式：以電腦隨機方式抽出符合資格之中獎人，於 ViVaTV網站公告中獎人部份姓名、居住縣市及中獎內容，獎品顏色隨機出貨。</li>
              <li class="list-group-item">中獎通知：本公司客服同仁將於抽獎日後3日內電話通知中獎人並發出中獎通知函。</li>
              <li class="list-group-item">領獎資格：抽獎後15日內扣除取消退貨，若交易件數=0，則取消領獎資格，該獎項不再補抽。</li>
            </ul>

            <h4>【新生駕到】</h4>
            <p class="ps-3">2021/10/8(五) - 12/31(五)新客註冊成功後14天，即贈送100元購物金。</p>

            <h4>【滿額送】</h4>
            <p class="ps-3">2021/10/8(五) - 12/31(五)累積消費淨額每滿3千元，送6百元購物金，滿6千元送1千2百元購物金，累計回饋無上限。於10/8(五)起每日結算並於10/22(五)開始發送購物金。以系統簡訊通知會員；活動期間每月結算一次。購物金使用期限：1個月(自發送日開始計算)。</p>

            <h4>【滿額抽】</h4>
            <p class="ps-3">2021/10/31(日)-11/30(二)於全通路累積消費淨額滿額即可參加抽獎，消費滿3萬8(含)元以上，即可抽「Le Creuset韓式飯碗5入(參考市價3,980元，共30名)；消費滿6萬8(含)元以上，即可抽柳宗理不鏽鋼單手鍋(附蓋)+湯杓組合 (參考市價5,760元，共20名)；消費滿9萬8(含)元以上，即可抽美國 Bissell 四合一吸塵洗地機(參考市價9,900元，共10名)。</p>
            <ul class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎時間與方式：以電腦隨機方式抽出符合資格之中獎人，於 ViVaTV網站公告中獎人部份姓名、居住縣市及中獎內容，獎品顏色隨機出貨。</li>
              <li class="list-group-item">中獎通知：本公司客服同仁將於抽獎日後3日內電話通知中獎人並發出中獎通知函。</li>
              <li class="list-group-item">領獎資格 :  抽獎後15日內扣除取消退貨，若交易金額未達滿額標準，則取消領獎資格，該獎項不再補抽。</li>
              <li class="list-group-item">每會員只有一次中獎機會。</li>
            </ul>

            <h4>【網站限定滿額抽】</h4>
            <p class="ps-3">2021/10/31(日)-11/30(二)於美好購物網單筆消費淨額滿1萬(含)元以上送Loison糖漬栗子迷你義大利耶誕麵包，限量500份，送完為止。</p>
            <ul class="list-group list-group-flush mb-4">
              <li class="list-group-item">贈送資格：訂單後15日內扣除取消退貨，若交易金額未達滿額標準，則取消贈送資格。</li>
              <li class="list-group-item">贈送通知：本公司客服同仁以電話通知並發出確認寄送地址，並於11/15(依)開始陸續寄出贈品。</li>
            </ul>

            
            
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">本活動限ViVa TV會員參加，領獎時必須具有會員身份，並同意中獎相關個人資料提供ViVa TV於本活動範圍進行蒐集、處理及利用。如會員要求刪除個人資料，致生會員資格喪失，則喪失領獎資格。</li>
              <li class="list-group-item">ViVa TV將依獎品性質，得以電話通知中獎會員，並於抽獎日後3個工作日內以郵寄之方式寄送中獎通知函。中獎會員應於ViVa TV中獎通知函通知之期限內回覆確認同意領取獎品，並提供ViVa TV所要求之完整領獎文件，逾期視為棄權。中獎會員所提供之身分證明文件如與會員登錄資料不符，ViVa TV得要求中獎會員提出相關證明文件，無法提供或逾期不提供者，ViVa TV得取消該中獎會員之得獎資格。</li>
              <li class="list-group-item">參加本活動之中獎人（若為中華民國境內居住之個人）無論中獎金額多寡，ViVa TV將依各類所得扣繳率標準就贈品所得代為申報，均全數於年底寄發所得稅扣繳憑單；若中獎人不願接受扣繳憑單，ViVa TV將取消中獎資格；依中華民國稅法規定，機會中獎之獎項價值超過新臺幣1,000元以上，獎項將列入個人年度綜合所得稅申報；若獎項金額超過新臺幣20,000元以上者，須負擔10%機會中獎所得稅；非中華民國境內居住之個人（即在中華民國境內居住未達183天之本國人及外國人），須就中獎所得扣繳20%機會中獎所得稅。中獎會員參加本活動而需支付任何稅捐皆為中獎會員之義務，概與ViVa TV無關。</li>
              <li class="list-group-item">本活動以實際成交訂單中購買商品組數/金額計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。另如中獎會員於收到獎品後，始辦理取消、退貨後致原成功訂購失效致不符抽/中獎資格者，中獎會員必須寄回完整無瑕獎品予ViVa TV後，本公司始能受理取消、退貨作業。</li>
              <li class="list-group-item">本活動獎項須以公佈於本網站之資料為準，如遇不可抗力之因素，ViVa TV保留更換其他等值獎項之權利，恕不另行通知。</li>

              <li class="list-group-item">若會員欲行使個資法第三條所賦予之查詢、閱覽及刪除等權利，請洽詢ViVa TV客服人員。個人資料蒐集、處理及利用之特定目的及類別等詳請參閱ViVa TV官方網站「個資保護專區」。除原會員已蒐集之個人資料，本次活動因申報中獎所得需要蒐集中獎會員的身分證影印本，其額外蒐集類別依據個資法為(C023 家庭其他成員之細節 ，C064軍中服役情形)，蒐集目的為進行核銷作業之證明，利用期間及地區將僅限於本次活動抽獎之期間及範圍。</li>
              <li class="list-group-item">本活動注意事項載明於ViVa TV官方網站中，參加之會員於參加本活動之同時，即同意接受本活動注意事項之規範，如有違反本活動注意事項之行為，ViVa TV得取消其參加或得獎資格，對於任何破壞本活動之行為依法主張相關之權利。</li>
              <li class="list-group-item">如本活動因特殊原因致無法執行時，ViVa TV有權決定取消、終止、修改活動內容或暫停本活動。</li>
              <li class="list-group-item">ViVa TV購物金、生日禮金、禮金、商品抵用金之使用方式請詳閱官網「<a :href="faqURL" target="_blank">常見問題解答</a>」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">ViVa TV在職員工不得參加，如有違反，經查證屬實一律取消得獎資格。</li>

              <li class="list-group-item">本活動之獎品均不得要求轉換現金或其他獎品。</li>
              <li class="list-group-item">本活動所提供之獎項，消費者相關權益概由提供商品或服務之廠商負責，若有疑義，請逕行向廠商洽詢。</li>
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
    }
  },
  mounted: function() {
    this.init();
  }

}
</script>

