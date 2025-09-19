<template>
	<div>
    <!-- Youtube Modal -->
    <div class="modal fade" id="youtubeModal" tabindex="-1" aria-labelledby="youtubeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-transparent border-0">
          <div class="modal-header rounded-0 border-bottom-0">
            <h6 class="modal-title text-white"></h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-2 bg-dark rounded-0">
            <div id="ytPlayer" class="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/yuhgIlXwPh8?playsinline=1&controls=1&showinfo=1&rel=0&modestbranding=1&enablejsapi=0&autoplay=0&mute=1" allowfullscreen frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 【新客首購禮】送你購物金 -->
    <div class="modal fade" id="eventModal-Wave1-A" tabindex="-1" aria-labelledby="eventModal-Wave1-A" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【新客首購禮】送你購物金</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/7(五) 00:00-2023/5/14(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間註冊新會員成功，首購當日消費累滿$2,000元送$100元銀幣。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於2023/4/7(五)起每日結算並於2023/4/21(五)開始發送銀幣，以系統簡訊通知會員；活動期間每月結算一次。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日開始計算)。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【滿額送】你買我就送 -->
    <div class="modal fade" id="eventModal-Wave1-B" tabindex="-1" aria-labelledby="eventModal-Wave1-B" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額送】你買我就送</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/7(五) 00:00-2023/5/14(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間累計消費每滿$3,000元送$300元銀幣。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於2023/4/7(五)起每日結算並於2023/4/21(五)開始發送銀幣，以系統簡訊通知會員；活動期間每月結算一次。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日開始計算)。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【無限馨意】 -->
    <div class="modal fade" id="eventModal-Wave1-C" tabindex="-1" aria-labelledby="eventModal-Wave1-C" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【無限馨意】</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/7(五) 00:00-2023/5/14(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-2">【新客首購禮】活動期間註冊新會員成功，首筆消費金額滿$2,000送$100銀幣。</p>
              <p class="mb-2">【滿額送】你買我就送，活動期間累計消費每滿$3,000元送$300元銀幣。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於2023/4/7(五)起每日結算並於2023/4/21(五)開始發送銀幣，以系統簡訊通知會員；活動期間每月結算一次。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日開始計算)。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【滿額抽】JO MALONE青檸羅勒與柑橘護手霜50ml -->
    <div class="modal fade" id="eventModal-Wave1-D" tabindex="-1" aria-labelledby="eventModal-Wave1-D" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】JO MALONE青檸羅勒與柑橘護手霜50ml</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/7(五) 00:00-2023/5/14(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-2">期間累計消費滿$12,800元，即可登記抽JO MALONE青檸羅勒與柑橘護手霜50ml(市售價$1,600元)_共計20組</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/5/29(一)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/6/30(五)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動限ViVa TV會員參加，領獎時必須具有會員身份，並同意中獎相關個人資料提供ViVa TV於本活動範圍進行蒐集、處理及利用。如會員要求刪除個人資料，致生會員資格喪失，則喪失領獎資格。</li>
              <li class="list-group-item">ViVa TV將依獎品性質，得以電話通知中獎會員，並於抽獎日後3個工作日內以郵寄之方式寄送中獎通知函。中獎會員應於ViVa TV中獎通知函通知之期限內回覆確認同意領取獎品，並提供ViVa TV所要求之完整領獎文件，逾期視為棄權。中獎會員所提供之身分證明文件如與會員登錄資料不符，ViVa TV得要求中獎會員提出相關證明文件，無法提供或逾期不提供者，ViVa TV得取消該中獎會員之得獎資格。</li>

              <li class="list-group-item">參加本活動之中獎人（若為中華民國境內居住之個人）無論中獎金額多寡，ViVa TV將依各類所得扣繳率標準就贈品所得代為申報，均全數於年底寄發所得稅扣繳憑單；若中獎人不願接受扣繳憑單，ViVa TV將取消中獎資格；依中華民國稅法規定，機會中獎之獎項價值超過新臺幣1,000元以上，獎項將列入個人年度綜合所得稅申報；若獎項金額超過新臺幣20,000元以上者，須負擔10%機會中獎所得稅；非中華民國境內居住之個人（即在中華民國境內居住未達183天之本國人及外國人），須就中獎所得扣繳20%機會中獎所得稅。中獎會員參加本活動而需支付任何稅捐皆為中獎會員之義務，概與ViVa TV無關。</li>
              <li class="list-group-item">本活動以實際成交訂單中購買商品組數/金額計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。另如中獎會員於收到獎品後，始辦理取消、退貨後致原成功訂購失效致不符抽/中獎資格者，中獎會員必須寄回完整無瑕獎品予ViVa TV後，本公司始能受理取消、退貨作業。</li>
              <li class="list-group-item">本活動獎項須以公佈於本網站之資料為準，如遇不可抗力之因素，ViVa TV保留更換其他等值獎項之權利，恕不另行通知。</li>
              <li class="list-group-item">若會員欲行使個資法第三條所賦予之查詢、閱覽及刪除等權利，請洽詢ViVa TV客服人員。個人資料蒐集、處理及利用之特定目的及類別等詳請參閱ViVa TV官方網站「個資保護專區」。除原會員已蒐集之個人資料，本次活動因申報中獎所得需要蒐集中獎會員的身分證影印本，其額外蒐集類別依據個資法為(C023 家庭其他成員之細節 ，C064軍中服役情形)，蒐集目的為進行核銷作業之證明，利用期間及地區將僅限於本次活動抽獎之期間及範圍。</li>
              <li class="list-group-item">本活動注意事項載明於ViVa TV官方網站中，參加之會員於參加本活動之同時，即同意接受本活動注意事項之規範，如有違反本活動注意事項之行為，ViVa TV得取消其參加或得獎資格，對於任何破壞本活動之行為依法主張相關之權利。</li>

              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">本活動之獎品均不得要求轉換現金或其他獎品。</li>
              <li class="list-group-item">本活動所提供之獎項，消費者相關權益概由提供商品或服務之廠商負責，若有疑義，請逕行向廠商洽詢。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777</li>
              
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【滿額抽】德國 medisana 藍牙七合一多功能體脂計 BS 320 connect -->
    <div class="modal fade" id="eventModal-Wave1-E" tabindex="-1" aria-labelledby="eventModal-Wave1-E" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】德國 medisana <br>藍牙七合一多功能體脂計 <br>BS 320 connect</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/7(五) 00:00-2023/5/14(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-2">期間累計消費滿$38,800元，即可登記抽德國 medisana 藍牙七合一多功能體脂計 BS 320 connect(市售價$3,500元)_共計10組</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/5/29(一)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/6/30(五)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動限ViVa TV會員參加，領獎時必須具有會員身份，並同意中獎相關個人資料提供ViVa TV於本活動範圍進行蒐集、處理及利用。如會員要求刪除個人資料，致生會員資格喪失，則喪失領獎資格。</li>
              <li class="list-group-item">ViVa TV將依獎品性質，得以電話通知中獎會員，並於抽獎日後3個工作日內以郵寄之方式寄送中獎通知函。中獎會員應於ViVa TV中獎通知函通知之期限內回覆確認同意領取獎品，並提供ViVa TV所要求之完整領獎文件，逾期視為棄權。中獎會員所提供之身分證明文件如與會員登錄資料不符，ViVa TV得要求中獎會員提出相關證明文件，無法提供或逾期不提供者，ViVa TV得取消該中獎會員之得獎資格。</li>

              <li class="list-group-item">參加本活動之中獎人（若為中華民國境內居住之個人）無論中獎金額多寡，ViVa TV將依各類所得扣繳率標準就贈品所得代為申報，均全數於年底寄發所得稅扣繳憑單；若中獎人不願接受扣繳憑單，ViVa TV將取消中獎資格；依中華民國稅法規定，機會中獎之獎項價值超過新臺幣1,000元以上，獎項將列入個人年度綜合所得稅申報；若獎項金額超過新臺幣20,000元以上者，須負擔10%機會中獎所得稅；非中華民國境內居住之個人（即在中華民國境內居住未達183天之本國人及外國人），須就中獎所得扣繳20%機會中獎所得稅。中獎會員參加本活動而需支付任何稅捐皆為中獎會員之義務，概與ViVa TV無關。</li>
              <li class="list-group-item">本活動以實際成交訂單中購買商品組數/金額計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。另如中獎會員於收到獎品後，始辦理取消、退貨後致原成功訂購失效致不符抽/中獎資格者，中獎會員必須寄回完整無瑕獎品予ViVa TV後，本公司始能受理取消、退貨作業。</li>
              <li class="list-group-item">本活動獎項須以公佈於本網站之資料為準，如遇不可抗力之因素，ViVa TV保留更換其他等值獎項之權利，恕不另行通知。</li>
              <li class="list-group-item">若會員欲行使個資法第三條所賦予之查詢、閱覽及刪除等權利，請洽詢ViVa TV客服人員。個人資料蒐集、處理及利用之特定目的及類別等詳請參閱ViVa TV官方網站「個資保護專區」。除原會員已蒐集之個人資料，本次活動因申報中獎所得需要蒐集中獎會員的身分證影印本，其額外蒐集類別依據個資法為(C023 家庭其他成員之細節 ，C064軍中服役情形)，蒐集目的為進行核銷作業之證明，利用期間及地區將僅限於本次活動抽獎之期間及範圍。</li>
              <li class="list-group-item">本活動注意事項載明於ViVa TV官方網站中，參加之會員於參加本活動之同時，即同意接受本活動注意事項之規範，如有違反本活動注意事項之行為，ViVa TV得取消其參加或得獎資格，對於任何破壞本活動之行為依法主張相關之權利。</li>

              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">本活動之獎品均不得要求轉換現金或其他獎品。</li>
              <li class="list-group-item">本活動所提供之獎項，消費者相關權益概由提供商品或服務之廠商負責，若有疑義，請逕行向廠商洽詢。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777</li>
              
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【滿額抽】LA MER 海洋拉娜 經典乳霜 30ml -->
    <div class="modal fade" id="eventModal-Wave1-F" tabindex="-1" aria-labelledby="eventModal-Wave1-F" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】LA MER 海洋拉娜 經典乳霜 30ml</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/7(五) 00:00-2023/5/14(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-2">期間累計消費滿$86,800元，即可登記抽LA MER 海洋拉娜 經典乳霜 30ml (市售價$7,800元)_共計5組</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/5/29(一)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/6/30(五)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動限ViVa TV會員參加，領獎時必須具有會員身份，並同意中獎相關個人資料提供ViVa TV於本活動範圍進行蒐集、處理及利用。如會員要求刪除個人資料，致生會員資格喪失，則喪失領獎資格。</li>
              <li class="list-group-item">ViVa TV將依獎品性質，得以電話通知中獎會員，並於抽獎日後3個工作日內以郵寄之方式寄送中獎通知函。中獎會員應於ViVa TV中獎通知函通知之期限內回覆確認同意領取獎品，並提供ViVa TV所要求之完整領獎文件，逾期視為棄權。中獎會員所提供之身分證明文件如與會員登錄資料不符，ViVa TV得要求中獎會員提出相關證明文件，無法提供或逾期不提供者，ViVa TV得取消該中獎會員之得獎資格。</li>

              <li class="list-group-item">參加本活動之中獎人（若為中華民國境內居住之個人）無論中獎金額多寡，ViVa TV將依各類所得扣繳率標準就贈品所得代為申報，均全數於年底寄發所得稅扣繳憑單；若中獎人不願接受扣繳憑單，ViVa TV將取消中獎資格；依中華民國稅法規定，機會中獎之獎項價值超過新臺幣1,000元以上，獎項將列入個人年度綜合所得稅申報；若獎項金額超過新臺幣20,000元以上者，須負擔10%機會中獎所得稅；非中華民國境內居住之個人（即在中華民國境內居住未達183天之本國人及外國人），須就中獎所得扣繳20%機會中獎所得稅。中獎會員參加本活動而需支付任何稅捐皆為中獎會員之義務，概與ViVa TV無關。</li>
              <li class="list-group-item">本活動以實際成交訂單中購買商品組數/金額計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。另如中獎會員於收到獎品後，始辦理取消、退貨後致原成功訂購失效致不符抽/中獎資格者，中獎會員必須寄回完整無瑕獎品予ViVa TV後，本公司始能受理取消、退貨作業。</li>
              <li class="list-group-item">本活動獎項須以公佈於本網站之資料為準，如遇不可抗力之因素，ViVa TV保留更換其他等值獎項之權利，恕不另行通知。</li>
              <li class="list-group-item">若會員欲行使個資法第三條所賦予之查詢、閱覽及刪除等權利，請洽詢ViVa TV客服人員。個人資料蒐集、處理及利用之特定目的及類別等詳請參閱ViVa TV官方網站「個資保護專區」。除原會員已蒐集之個人資料，本次活動因申報中獎所得需要蒐集中獎會員的身分證影印本，其額外蒐集類別依據個資法為(C023 家庭其他成員之細節 ，C064軍中服役情形)，蒐集目的為進行核銷作業之證明，利用期間及地區將僅限於本次活動抽獎之期間及範圍。</li>
              <li class="list-group-item">本活動注意事項載明於ViVa TV官方網站中，參加之會員於參加本活動之同時，即同意接受本活動注意事項之規範，如有違反本活動注意事項之行為，ViVa TV得取消其參加或得獎資格，對於任何破壞本活動之行為依法主張相關之權利。</li>

              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">本活動之獎品均不得要求轉換現金或其他獎品。</li>
              <li class="list-group-item">本活動所提供之獎項，消費者相關權益概由提供商品或服務之廠商負責，若有疑義，請逕行向廠商洽詢。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777</li>
              
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【滿額抽】Hermès愛馬仕諾亞方舟絲巾90cm -->
    <div class="modal fade" id="eventModal-Wave1-G" tabindex="-1" aria-labelledby="eventModal-Wave1-G" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】Hermès愛馬仕諾亞方舟絲巾90cm</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/7(五) 00:00-2023/5/14(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-2">期間累計消費滿$168,000元，即可登記抽Hermès愛馬仕諾亞方舟絲巾90cm(市售價$17,200元)_共1組</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/5/29(一)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/6/30(五)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動限ViVa TV會員參加，領獎時必須具有會員身份，並同意中獎相關個人資料提供ViVa TV於本活動範圍進行蒐集、處理及利用。如會員要求刪除個人資料，致生會員資格喪失，則喪失領獎資格。</li>
              <li class="list-group-item">ViVa TV將依獎品性質，得以電話通知中獎會員，並於抽獎日後3個工作日內以郵寄之方式寄送中獎通知函。中獎會員應於ViVa TV中獎通知函通知之期限內回覆確認同意領取獎品，並提供ViVa TV所要求之完整領獎文件，逾期視為棄權。中獎會員所提供之身分證明文件如與會員登錄資料不符，ViVa TV得要求中獎會員提出相關證明文件，無法提供或逾期不提供者，ViVa TV得取消該中獎會員之得獎資格。</li>

              <li class="list-group-item">參加本活動之中獎人（若為中華民國境內居住之個人）無論中獎金額多寡，ViVa TV將依各類所得扣繳率標準就贈品所得代為申報，均全數於年底寄發所得稅扣繳憑單；若中獎人不願接受扣繳憑單，ViVa TV將取消中獎資格；依中華民國稅法規定，機會中獎之獎項價值超過新臺幣1,000元以上，獎項將列入個人年度綜合所得稅申報；若獎項金額超過新臺幣20,000元以上者，須負擔10%機會中獎所得稅；非中華民國境內居住之個人（即在中華民國境內居住未達183天之本國人及外國人），須就中獎所得扣繳20%機會中獎所得稅。中獎會員參加本活動而需支付任何稅捐皆為中獎會員之義務，概與ViVa TV無關。</li>
              <li class="list-group-item">本活動以實際成交訂單中購買商品組數/金額計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。另如中獎會員於收到獎品後，始辦理取消、退貨後致原成功訂購失效致不符抽/中獎資格者，中獎會員必須寄回完整無瑕獎品予ViVa TV後，本公司始能受理取消、退貨作業。</li>
              <li class="list-group-item">本活動獎項須以公佈於本網站之資料為準，如遇不可抗力之因素，ViVa TV保留更換其他等值獎項之權利，恕不另行通知。</li>
              <li class="list-group-item">若會員欲行使個資法第三條所賦予之查詢、閱覽及刪除等權利，請洽詢ViVa TV客服人員。個人資料蒐集、處理及利用之特定目的及類別等詳請參閱ViVa TV官方網站「個資保護專區」。除原會員已蒐集之個人資料，本次活動因申報中獎所得需要蒐集中獎會員的身分證影印本，其額外蒐集類別依據個資法為(C023 家庭其他成員之細節 ，C064軍中服役情形)，蒐集目的為進行核銷作業之證明，利用期間及地區將僅限於本次活動抽獎之期間及範圍。</li>
              <li class="list-group-item">本活動注意事項載明於ViVa TV官方網站中，參加之會員於參加本活動之同時，即同意接受本活動注意事項之規範，如有違反本活動注意事項之行為，ViVa TV得取消其參加或得獎資格，對於任何破壞本活動之行為依法主張相關之權利。</li>

              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">本活動之獎品均不得要求轉換現金或其他獎品。</li>
              <li class="list-group-item">本活動所提供之獎項，消費者相關權益概由提供商品或服務之廠商負責，若有疑義，請逕行向廠商洽詢。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777</li>
              
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【好馨情四重奏】 -->
    <div class="modal fade" id="eventModal-Wave1-H" tabindex="-1" aria-labelledby="eventModal-Wave1-H" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【好馨情四重奏】</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/7(五) 00:00-2023/5/14(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-2">活動期間全通路，累計消費滿以下金額即可登記抽好禮(不可跨層抽獎)。</p>
              <p class="mb-2">★第一重-活動期間累計消費滿$12,800元即可登記抽JO MALONE青檸羅勒與柑橘護手霜50ml(市售價$1,600元)_共計20組</p>
              <p class="mb-2">★第二重-活動期間累計消費滿$38,800元即可登記抽德國 medisana 藍牙七合一多功能體脂計 BS 320 connect(市售價$3,500元)_共計10組</p>
              <p class="mb-2">★第三重-活動期間累計消費滿$86,800元即可登記抽LA MER 海洋拉娜 經典乳霜 30ml (市售價$7,800元)_共計5組</p>
              <p class="mb-2">★第四重-活動期間累計消費滿$168,000元，即可登記抽Hermès愛馬仕諾亞方舟絲巾90cm(市售價$17,200元)_共1組</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/5/29(一)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/6/30(五)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動限ViVa TV會員參加，領獎時必須具有會員身份，並同意中獎相關個人資料提供ViVa TV於本活動範圍進行蒐集、處理及利用。如會員要求刪除個人資料，致生會員資格喪失，則喪失領獎資格。</li>
              <li class="list-group-item">ViVa TV將依獎品性質，得以電話通知中獎會員，並於抽獎日後3個工作日內以郵寄之方式寄送中獎通知函。中獎會員應於ViVa TV中獎通知函通知之期限內回覆確認同意領取獎品，並提供ViVa TV所要求之完整領獎文件，逾期視為棄權。中獎會員所提供之身分證明文件如與會員登錄資料不符，ViVa TV得要求中獎會員提出相關證明文件，無法提供或逾期不提供者，ViVa TV得取消該中獎會員之得獎資格。</li>

              <li class="list-group-item">參加本活動之中獎人（若為中華民國境內居住之個人）無論中獎金額多寡，ViVa TV將依各類所得扣繳率標準就贈品所得代為申報，均全數於年底寄發所得稅扣繳憑單；若中獎人不願接受扣繳憑單，ViVa TV將取消中獎資格；依中華民國稅法規定，機會中獎之獎項價值超過新臺幣1,000元以上，獎項將列入個人年度綜合所得稅申報；若獎項金額超過新臺幣20,000元以上者，須負擔10%機會中獎所得稅；非中華民國境內居住之個人（即在中華民國境內居住未達183天之本國人及外國人），須就中獎所得扣繳20%機會中獎所得稅。中獎會員參加本活動而需支付任何稅捐皆為中獎會員之義務，概與ViVa TV無關。</li>
              <li class="list-group-item">本活動以實際成交訂單中購買商品組數/金額計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。另如中獎會員於收到獎品後，始辦理取消、退貨後致原成功訂購失效致不符抽/中獎資格者，中獎會員必須寄回完整無瑕獎品予ViVa TV後，本公司始能受理取消、退貨作業。</li>
              <li class="list-group-item">本活動獎項須以公佈於本網站之資料為準，如遇不可抗力之因素，ViVa TV保留更換其他等值獎項之權利，恕不另行通知。</li>
              <li class="list-group-item">若會員欲行使個資法第三條所賦予之查詢、閱覽及刪除等權利，請洽詢ViVa TV客服人員。個人資料蒐集、處理及利用之特定目的及類別等詳請參閱ViVa TV官方網站「個資保護專區」。除原會員已蒐集之個人資料，本次活動因申報中獎所得需要蒐集中獎會員的身分證影印本，其額外蒐集類別依據個資法為(C023 家庭其他成員之細節 ，C064軍中服役情形)，蒐集目的為進行核銷作業之證明，利用期間及地區將僅限於本次活動抽獎之期間及範圍。</li>
              <li class="list-group-item">本活動注意事項載明於ViVa TV官方網站中，參加之會員於參加本活動之同時，即同意接受本活動注意事項之規範，如有違反本活動注意事項之行為，ViVa TV得取消其參加或得獎資格，對於任何破壞本活動之行為依法主張相關之權利。</li>

              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">本活動之獎品均不得要求轉換現金或其他獎品。</li>
              <li class="list-group-item">本活動所提供之獎項，消費者相關權益概由提供商品或服務之廠商負責，若有疑義，請逕行向廠商洽詢。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777</li>
              
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【新客註冊送銀幣】 -->
    <div class="modal fade" id="eventModal-Wave1-I" tabindex="-1" aria-labelledby="eventModal-Wave1-I" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【好馨情四重奏】</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/7(五) 00:00-2023/5/14(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-2">活動期間新會員註冊成功，即可獲贈$100元銀幣(每一帳號限參與一次）。</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動獎項</span></p>
              <p class="mb-2">銀幣 $100 （共計2,000 份）/ 註冊成功即刻歸戶。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">本活動一帳號限參加一次。</li>
              <li class="list-group-item">銀幣使用期限為一個月</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【簽到送金幣】_第一波 -->
    <div class="modal fade" id="eventModal-Wave1-J" tabindex="-1" aria-labelledby="eventModal-Wave1-J" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【簽到送金幣】_第一波</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/7 00:00-2023/4/16 23:59。共計10天</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-2">活動期間會員每日簽到送金幣，連續簽到10天不中斷送50元金幣(如下圖)</p>
            </div>
            <div class="table-responsive">
              <table class="table table-bordered text-white text-center" style="min-width: 720px;">
                <thead>
                  <tr style="background-color: rgba(0,0,0,0.25);">
                    <th>第一天</th>
                    <th>第二天</th>
                    <th>第三天</th>
                    <th>第四天</th>
                    <th>第五天</th>
                    <th>第六天</th>
                    <th>第七天</th>
                    <th>第八天</th>
                    <th>第九天</th>
                    <th>第十天</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1元</td>
                    <td>1元</td>
                    <td>5元</td>
                    <td>3元</td>
                    <td>6元</td>
                    <td>3元</td>
                    <td>8元</td>
                    <td>5元</td>
                    <td>3元</td>
                    <td>15元</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">注意事項</span></p>
              <p class="mb-2">簽到如中斷，則從第一天開始起算，總計簽到天數共10天(包含中斷天數)。</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">簽到拿金幣取領說明</span></p>
              <p class="mb-2">例如：第1天~第5天連續簽到可獲16元金幣，若第6天未簽，則第7天簽到將重新開始計算(凡簽到中斷都必需重頭計算，前面連續簽到天數金額依舊保留)</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">舉例說明：</span></p>
              <p class="mb-2">1.連續簽到第1天~第3天可獲得7元金幣，第4天中斷，第5天開始簽到，獲取金額則從第1天算起，後續天數連續簽到完成，即可獲得26元金幣。</p>
              <p class="mb-2">2.連續簽到第1天~第4天可獲得10元金幣，第5天中斷，第6天開始簽到，獲取金額則從第1天算起，後續天數連續簽到完成，即可獲得26元金幣。</p>
              <p class="mb-2">3.連續簽到第1天~第7天可獲得27元金幣，第8天中斷，第9天開始簽到，獲取金額則從第1天算起，後續天數連續簽到完成，即可獲得29元金幣。</p>
              <p class="mb-2">4.連續簽到第1天~第8天可獲得32元金幣，第9天中斷，第10天開始簽到，獲取金額則從第1天算起，後續天數連續簽到完成，即可獲得33元金幣。</p>
            </div>
            <h3 class="text-center">事項說明</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">本活動一帳號限參加一次。</li>
              <li class="list-group-item">每日限量50份。</li>
              <li class="list-group-item">金幣使用期限為一個月。</li>
              <li class="list-group-item">金幣發送日期：2023/4/17(一)中午12點歸戶。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>

              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【簽到送金幣】_第二波 -->
    <div class="modal fade" id="eventModal-Wave1-K" tabindex="-1" aria-labelledby="eventModal-Wave1-K" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【簽到送金幣】_第二波</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/28 00:00-2023/5/7 23:59。共計10天</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-2">活動期間會員每日簽到送金幣，連續簽到10天不中斷送50元金幣(如下圖)</p>
            </div>
            <div class="table-responsive">
              <table class="table table-bordered text-white text-center" style="min-width: 720px;">
                <thead>
                  <tr style="background-color: rgba(0,0,0,0.25);">
                    <th>第一天</th>
                    <th>第二天</th>
                    <th>第三天</th>
                    <th>第四天</th>
                    <th>第五天</th>
                    <th>第六天</th>
                    <th>第七天</th>
                    <th>第八天</th>
                    <th>第九天</th>
                    <th>第十天</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1元</td>
                    <td>1元</td>
                    <td>5元</td>
                    <td>3元</td>
                    <td>6元</td>
                    <td>3元</td>
                    <td>8元</td>
                    <td>5元</td>
                    <td>3元</td>
                    <td>15元</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">注意事項</span></p>
              <p class="mb-2">簽到如中斷，則從第一天開始起算，總計簽到天數共10天(包含中斷天數)。</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">簽到拿金幣取領說明</span></p>
              <p class="mb-2">例如：第1天~第5天連續簽到可獲16元金幣，若第6天未簽，則第7天簽到將重新開始計算(凡簽到中斷都必需重頭計算，前面連續簽到天數金額依舊保留)</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">舉例說明：</span></p>
              <p class="mb-2">1.連續簽到第1天~第3天可獲得7元金幣，第4天中斷，第5天開始簽到，獲取金額則從第1天算起，後續天數連續簽到完成，即可獲得26元金幣。</p>
              <p class="mb-2">2.連續簽到第1天~第4天可獲得10元金幣，第5天中斷，第6天開始簽到，獲取金額則從第1天算起，後續天數連續簽到完成，即可獲得26元金幣。</p>
              <p class="mb-2">3.連續簽到第1天~第7天可獲得27元金幣，第8天中斷，第9天開始簽到，獲取金額則從第1天算起，後續天數連續簽到完成，即可獲得29元金幣。</p>
              <p class="mb-2">4.連續簽到第1天~第8天可獲得32元金幣，第9天中斷，第10天開始簽到，獲取金額則從第1天算起，後續天數連續簽到完成，即可獲得33元金幣。</p>
            </div>
            <h3 class="text-center">事項說明</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">本活動一帳號限參加一次。</li>
              <li class="list-group-item">每日限量50份。</li>
              <li class="list-group-item">金幣使用期限為一個月。</li>
              <li class="list-group-item">金幣發送日期：2023/5/8(一)中午12點歸戶。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>

              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【互動抽好禮】溫情告白 大聲說愛 -->
    <div class="modal fade" id="eventModal-Wave1-L" tabindex="-1" aria-labelledby="eventModal-Wave1-L" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【互動抽好禮】溫情告白 大聲說愛</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/10(一) 11:00-2023/4/30(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-2">活動期間完成指定步驟，即可登記抽「告白好禮」</p>
              <p class="mb-2">500元銀幣/共計10名</p>
              <p class="mb-2">【Jimnychuang】全效旅行組－Chunjing(市售價$800元)/共計30組</p>
            </div>
            <div class="p-xl-2 text-center">
              <!-- <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動辦法</span></p> -->
              <a v-if="start_0410" class="px-5 fs-3 btn btn-block text-white mb-3" style="background-color: #901100;" href="https://www.facebook.com/vivatv.tw/posts/pfbid02vx6QJRbNBGqvfECSpFYcEmhEPyQzrBnALb9LoydiuN8RkasRUJWt7Gwp9zRepe9Rl" target="_blank">>> 點我參加活動 <<</a>
              <a v-else class="px-5 fs-3 btn btn-block text-white mb-3" style="background-color: #901100;" href="javascript:void(0);" onclick="alert('活動尚未開始');" target="_self">>> 點我參加活動 <<</a>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">獲獎辦法：</span></p>
              <p class="mb-2">1、5/2(二)中午12點由電腦隨機抽出獲獎名單，下午6點前陸續以私訊方式通知。</p>
              <p class="mb-2">2、5/4(四)下午3點前獲獎者無回覆，將視同放棄。</p>
              <p class="mb-2">3、5/5(五)~5/8(一)獲獎感言輸出成卡片。</p>
              <p class="mb-2">4、5/8(一)臉書公佈得獎名單。</p>
              <p class="mb-2">5、5/9(二)陸續寄出卡片+禮物。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/5/2(二)中午12點由電腦隨機抽出，2023/5/2(二)下午6點前，獲獎者將以私訊通知。</li>
              <li class="list-group-item">獲獎者請於2023/5/4(四)下午3點前回覆私訊，無回覆者將視同放棄。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動限ViVa TV會員參加，領獎時必須具有會員身份，並同意中獎相關個人資料提供ViVa TV於本活動範圍進行蒐集、處理及利用。如會員要求刪除個人資料，致生會員資格喪失，則喪失領獎資格。</li>
              <li class="list-group-item">ViVa TV將依獎品性質，以臉書私訊通知中獎會員，並於2023/5/9(二)以郵寄之方式寄送中獎商品，中獎會員應於ViVa TV中獎通知之期限內回覆確認同意領取獎品，並提供ViVa TV所要求之完整領獎文件，逾期視為棄權。中獎會員所提供之身分證明文件如與會員登錄資料不符，ViVa TV得要求中獎會員提出相關證明文件，無法提供或逾期不提供者，ViVa TV得取消該中獎會員之得獎資格。</li>

              <li class="list-group-item">參加本活動之中獎人（若為中華民國境內居住之個人）無論中獎金額多寡，ViVa TV將依各類所得扣繳率標準就贈品所得代為申報，均全數於年底寄發所得稅扣繳憑單；若中獎人不願接受扣繳憑單，ViVa TV將取消中獎資格；依中華民國稅法規定，機會中獎之獎項價值超過新臺幣1,000元以上，獎項將列入個人年度綜合所得稅申報；若獎項金額超過新臺幣20,000元以上者，須負擔10%機會中獎所得稅；非中華民國境內居住之個人（即在中華民國境內居住未達183天之本國人及外國人），須就中獎所得扣繳20%機會中獎所得稅。中獎會員參加本活動而需支付任何稅捐皆為中獎會員之義務，概與ViVa TV無關。</li>
              <li class="list-group-item">本活動以實際成交訂單中購買商品組數/金額計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。另如中獎會員於收到獎品後，始辦理取消、退貨後致原成功訂購失效致不符抽/中獎資格者，中獎會員必須寄回完整無瑕獎品予ViVa TV後，本公司始能受理取消、退貨作業。</li>
              <li class="list-group-item">本活動獎項須以公佈於本網站之資料為準，如遇不可抗力之因素，ViVa TV保留更換其他等值獎項之權利，恕不另行通知。</li>
              <li class="list-group-item">若會員欲行使個資法第三條所賦予之查詢、閱覽及刪除等權利，請洽詢ViVa TV客服人員。個人資料蒐集、處理及利用之特定目的及類別等詳請參閱ViVa TV官方網站「個資保護專區」。除原會員已蒐集之個人資料，本次活動因申報中獎所得需要蒐集中獎會員的身分證影印本，其額外蒐集類別依據個資法為(C023 家庭其他成員之細節 ，C064軍中服役情形)，蒐集目的為進行核銷作業之證明，利用期間及地區將僅限於本次活動抽獎之期間及範圍。</li>
              <li class="list-group-item">本活動注意事項載明於ViVa TV官方網站中，參加之會員於參加本活動之同時，即同意接受本活動注意事項之規範，如有違反本活動注意事項之行為，ViVa TV得取消其參加或得獎資格，對於任何破壞本活動之行為依法主張相關之權利。</li>

              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">本活動之獎品均不得要求轉換現金或其他獎品。</li>
              <li class="list-group-item">本活動所提供之獎項，消費者相關權益概由提供商品或服務之廠商負責，若有疑義，請逕行向廠商洽詢。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【臻愛獻禮 光蘊煥采】 -->
    <div class="modal fade" id="eventModal-Wave1-M" tabindex="-1" aria-labelledby="eventModal-Wave1-M" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【臻愛獻禮 光蘊煥采】</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/21(五) 00:00-2023/5/14(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-2">活動期間購買網路商品，累計消費滿5,000元，即可加碼抽500元銀幣_共計10名。</p>
              <p class="mb-2">銀幣使用期限：一個月(自發送日開始計算)。</p>
            </div>
            
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/5/29(一)由電腦隨機抽出，以系統簡訊通知會員</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動以實際成交訂單中購買商品組數/金額計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。另如中獎會員於收到獎品後，始辦理取消、退貨後致原成功訂購失效致不符抽/中獎資格者，中獎會員必須寄回完整無瑕獎品予ViVa TV後，本公司始能受理取消、退貨作業。</li>
              <li class="list-group-item">本活動限ViVa TV會員參加，領獎時必須具有會員身份，並同意中獎相關個人資料提供ViVa TV於本活動範圍進行蒐集、處理及利用。如會員要求刪除個人資料，致生會員資格喪失，則喪失領獎資格。</li>

              <li class="list-group-item">本活動獎項須以公佈於本網站之資料為準，如遇不可抗力之因素，ViVa TV保留更換其他等值獎項之權利，恕不另行通知。</li>
              <li class="list-group-item">本活動注意事項載明於ViVa TV官方網站中，參加之會員於參加本活動之同時，即同意接受本活動注意事項之規範，如有違反本活動注意事項之行為，ViVa TV得取消其參加或得獎資格，對於任何破壞本活動之行為依法主張相關之權利。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">本活動之獎品均不得要求轉換現金或其他獎品。</li>
              <li class="list-group-item">本活動所提供之獎項，消費者相關權益概由提供商品或服務之廠商負責，若有疑義，請逕行向廠商洽詢。</li>

              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777</li>
              
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【滿額抽】JO MALONE青檸羅勒與柑橘護手霜50ml -->
    <div class="modal fade" id="eventModal-Wave1-N" tabindex="-1" aria-labelledby="eventModal-Wave1-N" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】JO MALONE青檸羅勒與柑橘護手霜50ml</h3>
            <h3 class="text-center p-0">【滿額抽】LA MER 海洋拉娜 經典乳霜 30ml</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/4/7(五) 00:00-2023/5/14(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-2">期間累計消費滿$12,800元，即可登記抽JO MALONE青檸羅勒與柑橘護手霜50ml(市售價$1,600元)_共計20組</p>
              <p class="mb-2">期間累計消費滿$86,800元，即可登記抽LA MER 海洋拉娜 經典乳霜 30ml (市售價$7,800元)_共計5組</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/5/29(一)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/6/30(五)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動限ViVa TV會員參加，領獎時必須具有會員身份，並同意中獎相關個人資料提供ViVa TV於本活動範圍進行蒐集、處理及利用。如會員要求刪除個人資料，致生會員資格喪失，則喪失領獎資格。</li>
              <li class="list-group-item">ViVa TV將依獎品性質，得以電話通知中獎會員，並於抽獎日後3個工作日內以郵寄之方式寄送中獎通知函。中獎會員應於ViVa TV中獎通知函通知之期限內回覆確認同意領取獎品，並提供ViVa TV所要求之完整領獎文件，逾期視為棄權。中獎會員所提供之身分證明文件如與會員登錄資料不符，ViVa TV得要求中獎會員提出相關證明文件，無法提供或逾期不提供者，ViVa TV得取消該中獎會員之得獎資格。</li>

              <li class="list-group-item">參加本活動之中獎人（若為中華民國境內居住之個人）無論中獎金額多寡，ViVa TV將依各類所得扣繳率標準就贈品所得代為申報，均全數於年底寄發所得稅扣繳憑單；若中獎人不願接受扣繳憑單，ViVa TV將取消中獎資格；依中華民國稅法規定，機會中獎之獎項價值超過新臺幣1,000元以上，獎項將列入個人年度綜合所得稅申報；若獎項金額超過新臺幣20,000元以上者，須負擔10%機會中獎所得稅；非中華民國境內居住之個人（即在中華民國境內居住未達183天之本國人及外國人），須就中獎所得扣繳20%機會中獎所得稅。中獎會員參加本活動而需支付任何稅捐皆為中獎會員之義務，概與ViVa TV無關。</li>
              <li class="list-group-item">本活動以實際成交訂單中購買商品組數/金額計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。另如中獎會員於收到獎品後，始辦理取消、退貨後致原成功訂購失效致不符抽/中獎資格者，中獎會員必須寄回完整無瑕獎品予ViVa TV後，本公司始能受理取消、退貨作業。</li>
              <li class="list-group-item">本活動獎項須以公佈於本網站之資料為準，如遇不可抗力之因素，ViVa TV保留更換其他等值獎項之權利，恕不另行通知。</li>
              <li class="list-group-item">若會員欲行使個資法第三條所賦予之查詢、閱覽及刪除等權利，請洽詢ViVa TV客服人員。個人資料蒐集、處理及利用之特定目的及類別等詳請參閱ViVa TV官方網站「個資保護專區」。除原會員已蒐集之個人資料，本次活動因申報中獎所得需要蒐集中獎會員的身分證影印本，其額外蒐集類別依據個資法為(C023 家庭其他成員之細節 ，C064軍中服役情形)，蒐集目的為進行核銷作業之證明，利用期間及地區將僅限於本次活動抽獎之期間及範圍。</li>
              <li class="list-group-item">本活動注意事項載明於ViVa TV官方網站中，參加之會員於參加本活動之同時，即同意接受本活動注意事項之規範，如有違反本活動注意事項之行為，ViVa TV得取消其參加或得獎資格，對於任何破壞本活動之行為依法主張相關之權利。</li>

              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
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
      start_0410: false
    };
  },
  methods: {
    init: function() {

      let timeFromURL = this.getUrlParameter('t');
      var dataTime;

      let year = moment().format('YYYY');
      let month = moment().format('MM');
      let date = moment().format('DD');

      var timeNow = moment().format('YYYY-MM-DD HH:mm:ss');


      if (timeFromURL) {
        timeNow = moment(timeFromURL).format('YYYY-MM-DD HH:mm:ss');
        console.log('timeNow: '+ timeNow);
      }

      var dateNow = timeNow.substr(5,2) + timeNow.substr(8,2);
      console.log('dateNow:'+dateNow);
      

      

      

      if ( moment(timeNow).isBetween('2023-04-10 11:00:00', '2023-04-30 23:59:59', 'second', '[]') ) {
        this.start_0410 = true;
      }

      







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


    
      
    

    


    setTimeout(()=>{

      //youtube modal指定player id (js)
      var live1_ID = 'yuhgIlXwPh8'; //1台youtube直播id
      var live2_ID = '9fXkGPPws_c'; //2台youtube直播id

      var toggleYT1 = document.querySelector('#toggleYT1');

      var ytPlayer = document.querySelector('#ytPlayer');

      if (toggleYT1) {
        toggleYT1.addEventListener('click', () => {
          console.log('yt click');
          var live1HTML = '<iframe src="https://www.youtube.com/embed/'+ live1_ID +'?playsinline=1&controls=1&showinfo=1&rel=0&modestbranding=1&enablejsapi=0&autoplay=0&mute=1" allowfullscreen frameborder="0"></iframe>';
          setTimeout(()=>{
            ytPlayer.innerHTML = live1HTML;  
          }, 500);
          
        });

      }
      var youtubeModal = document.querySelector('#youtubeModal');
      if (youtubeModal) {
        youtubeModal.addEventListener('hidden.bs.modal', () => {
          ytPlayer.innerHTML = '';
          console.log('youtubeModal cleared');
        });
      }

      const swpPrimary = new Swiper('#swpPrimary', {
        loop: true,
        allowTouchMove: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: false,
        },
        pagination: {
          el: '#swpPrimaryWrapper .swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });

      const swpSecondaryBanner = new Swiper('#swpSecondaryBanner', {
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
          // pauseOnMouseEnter: true,
        },
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 1,
          },
          1400: {
            slidesPerView: 1,
          }
        },
        pagination: {
          el: '.secondary-banner .swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });

      const swpB = new Swiper('#swpB', {
        loop: true,
        allowTouchMove: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });

      const swpA = new Swiper('#swpA', {
        loop: true,
        allowTouchMove: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      });
      const swpC = new Swiper('#swpC', {
        loop: true,
        allowTouchMove: false,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      });

      const swpBank = new Swiper('#swpBank', {
        loop: true,
        slidesPerView: 2,
        centerSlide: false,
        slidesPerGroup: 1,
        speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
          // pauseOnMouseEnter: true,
        },
        spaceBetween: 0,
        effect: 'slide',
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 4
          }
        }
      });

      const swpD = new Swiper('#swpD', {
        centeredSlides: true,
        loop: true,
        slidesPerView: 1.5,
        centerSlide: true,
        slidesPerGroup: 1,
        speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
          // pauseOnMouseEnter: true,
        },
        spaceBetween: 0,
        effect: 'slide',
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          }
        }
      });
      const swpE = new Swiper('#swpE', {
        centeredSlides: true,
        loop: true,
        slidesPerView: 1.5,
        centerSlide: true,
        slidesPerGroup: 1,
        speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
          // pauseOnMouseEnter: true,
        },
        spaceBetween: 0,
        effect: 'slide',
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          }
        }
      });
      const swpF = new Swiper('#swpF', {
        centeredSlides: true,
        loop: true,
        slidesPerView: 1.5,
        centerSlide: true,
        slidesPerGroup: 1,
        speed: 500,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
          // pauseOnMouseEnter: true,
        },
        spaceBetween: 0,
        effect: 'slide',
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          }
        }
      });
      const swpG = new Swiper('#swpG', {
        centeredSlides: true,
        loop: true,
        slidesPerView: 1.2,
        centerSlide: true,
        slidesPerGroup: 1,
        speed: 500,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
          // pauseOnMouseEnter: true,
        },
        spaceBetween: 0,
        effect: 'slide',
        breakpoints: {
          768: {
            centeredSlides: false,
            slidesPerView: 2,
          },
          992: {
            centeredSlides: false,
            slidesPerView: 2,
          },
          1400: {
            centeredSlides: false,
            slidesPerView: 3,
          }
        }
      });

    }, 500);

    
  }

}
</script>

