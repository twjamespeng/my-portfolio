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
    <!-- 【新客註冊送好禮】 -->
    <div class="modal fade" id="eventModal-Wave1-A" tabindex="-1" aria-labelledby="eventModal-Wave1-A" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【新客註冊送好禮】</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/5/19(五) 00:00 -2023/6/25(日) 23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間新會員註冊成功，即可獲贈$100元銀幣(每一帳號限參與一次）。</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動獎項</span></p>
              <p class="mb-3">銀幣 $100 （共計2,000 份）/ 註冊成功即刻歸戶。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">本活動一帳號限參加一次。</li>
              <li class="list-group-item">銀幣使用期限為一個月。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【新客首購禮】 -->
    <div class="modal fade" id="eventModal-Wave1-B" tabindex="-1" aria-labelledby="eventModal-Wave1-B" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【新客首購禮】</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/5/19(五) 00:00 -2023/6/25(日) 23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間註冊新會員成功，首購當日消費累滿$2,000元送$100元銀幣。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於2023/5/19(五)起每日結算並於2023/6/2(五)開始發送銀幣，以系統簡訊通知會員；活動期間每月結算一次。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日開始計算)。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>


            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【滿額送】『午』好禮 購你買 -->
    <div class="modal fade" id="eventModal-Wave1-C" tabindex="-1" aria-labelledby="eventModal-Wave1-C" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額送】『午』好禮 購你買</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/5/19(五) 00:00 -2023/6/25(日) 23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間全通路消費滿指定金額，即可送銀幣<br>(每帳戶每日回饋乙次為限，以當日消費最高門檻作為回饋)</p>
              <p class="mb-3">★當日結帳金額滿3,800 送 300 銀幣(7% off )  (恕不跨日累計回饋)<br>★當日結帳金額滿6,800 送 600 銀幣(8% off )  (恕不跨日累計回饋)<br>★當日結帳金額滿9,800 送 900 銀幣(9% off ) (恕不跨日累計回饋)</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於2023/5/19(五)起每日結算並於2023/6/2(五)開始發送銀幣，以系統簡訊通知會員；活動期間每月結算一次。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日開始計算)。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>


            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【618 粽粽有禮賞】 -->
    <div class="modal fade" id="eventModal-Wave1-D" tabindex="-1" aria-labelledby="eventModal-Wave1-D" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【618 粽粽有禮賞】活動期間購買純網商品(含加價購)，抽【le creuset韓式飯碗組10.5x6.5cm- 5入】</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/6/2(五) 00:00-2023/6/25(日) 23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間購買純網商品(含加價購)累計消費滿45,800元，抽【le creuset韓式飯碗組10.5x6.5cm- 5入】共4組/市售價4,480元。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/7/10(一)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/7/31(一)前寄回，否則將視同放棄。</li>
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
    <!-- 【618 購你盡情買】 -->
    <div class="modal fade" id="eventModal-Wave1-E" tabindex="-1" aria-labelledby="eventModal-Wave1-E" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【618 購你盡情買】活動期間全通路累計指定滿指定金額，即可加碼抽精緻廚房家電/餐具好禮(一帳號限參與一次)</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/6/9(五) 00:00-2023/6/19(一) 23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-0">1、消費累計滿13,800元，抽【HARIO酒瓶冷泡咖啡壺】共計30組/市價1,250元。</p>
              <p class="mb-0">2、消費累計滿18,800元，抽【畢耶】巴黎鐵塔柄平底鍋20CM】共計5組/市價1,680元。</p>
              <p class="mb-3">3、消費累計滿58,800元，抽【BRUNO BOE059 嚕嚕米多功能電烤盤】共計1組/市售價5,700元。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/7/4(二)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/7/31(一)前寄回，否則將視同放棄。</li>
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
    <!-- 【互動抽好禮】粽夏好禮賞(第一波) -->
    <div class="modal fade" id="eventModal-Wave1-F" tabindex="-1" aria-labelledby="eventModal-Wave1-F" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【互動抽好禮】粽夏好禮賞(第一波)</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/5/15(一) 00:00-2023/5/28(日) 23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間完成指定步驟，即可抽阿原小團圓皂串-艾草 100g(市售價400元)</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">參加辦法</span></p>
              <p class="mb-0">1、成為ViVa TV美好購物臉書好友及活動貼文按讚</p>
              <p class="mb-0">2、tag 3位好友</p>
              <p class="mb-3">3、分享此篇活動</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動網址</span></p>
              <p class="mb-3"><a class="text-dark text-decoration-underline" style="word-break: break-all;" href="https://www.facebook.com/vivatv.tw/posts/pfbid0dCwDdvt6rosfurQgnUaHsfzSc9MK1mc9fvTs183sQ5WyDo9qu8dJ3Wz9pwiVMYJvl" target="_blank">https://www.facebook.com/vivatv.tw/posts/pfbid0dCwDdvt6rosfurQgnUaHsfzSc9MK1mc9fvTs183sQ5WyDo9qu8dJ3Wz9pwiVMYJvl</a></p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">獲獎辦法
              </span></p>
              <p class="mb-0">第一波獲獎名單(抽出5位)</p>
              <p class="mb-0">1、5/29(一) 中午12點由電腦隨機抽出獲獎名單，下午6點前陸續以私訊方式通知。</p>
              <p class="mb-0">2、5/31(三) 中午12點前獲獎者無回覆，由備選名單遞補。</p>
              <p class="mb-0">3、6/1(四) 臉書公佈得獎名單。</p>
              <p class="mb-3">4、6/2(五) 寄出禮物。</p>
            </div>

            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/5/29(一)中午12點由電腦隨機抽出，2023/5/29(一)下午6點前，獲獎者將以私訊通知。</li>
              <li class="list-group-item">獲獎者請於2023/5/31(三)中午12點前回覆私訊，提供「姓名、電話、信箱(以加入ViVa會員信箱為準)、地址」(逾期視同放棄，並由備選名單遞補)。並且避免重複得獎，若有得獎人地址相同者，將視為同一位獲獎人。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動限ViVa TV官方粉絲專頁會員才能參加，領獎時必須具有會員身份，並同意中獎相關個人資料提供ViVa TV於本活動範圍進行蒐集、處理及利用。若有得獎人地址相同者，將視為同一位獲獎人。如會員要求刪除個人資料，致生會員資格喪失，則喪失領獎資格。不得有冒名、代領、轉讓或頂替之行為，經主辦單位發現或經第三人檢舉，則主辦單位有權取消使用者之參與、得獎資格，主辦單位不另行通知，並保留法律追訴權。</li>
              <li class="list-group-item">ViVa TV將依獎品性質，以臉書私訊通知中獎會員，並於2023/6/2(五)以郵寄之方式寄送中獎商品，中獎會員應於ViVa TV中獎通知之期限內回覆確認同意領取獎品，並提供ViVa TV所要求之完整領獎文件，逾期視為棄權。中獎會員所提供之身分證明文件如與會員登錄資料不符，ViVa TV得要求中獎會員提出相關證明文件，無法提供或逾期不提供者，ViVa TV得取消該中獎會員之得獎資格。</li>

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
    <!-- 【互動抽好禮】粽夏好禮賞(第二波) -->
    <div class="modal fade" id="eventModal-Wave1-G" tabindex="-1" aria-labelledby="eventModal-Wave1-G" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-green">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【互動抽好禮】粽夏好禮賞(第二波)</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/6/5(一) 00:00-2023/6/18(日) 23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間完成指定步驟，即可抽阿原小團圓皂串-艾草 100g(市售價400元)</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">參加辦法：</span></p>
              <p class="mb-0">1、成為ViVa TV美好購物臉書好友及活動貼文按讚</p>
              <p class="mb-0">2、tag 3位好友</p>
              <p class="mb-3">3、分享此篇活動</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">活動請點選以下網址：
              </span></p>
              <p class="mb-3"></p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-green text-white px-2 py-1 rounded-pill">獲獎辦法
              </span></p>
              <p class="mb-0">第二波獲獎名單(抽出6位)</p>
              <p class="mb-0">1、6/19(一) 中午12點由電腦隨機抽出獲獎名單，下午6點前陸續以私訊方式通知。</p>
              <p class="mb-0">2、6/21(三) 中午12點前獲獎者無回覆，由備選名單遞補。</p>
              <p class="mb-0">3、6/26(一) 臉書公佈得獎名單。</p>
              <p class="mb-3">4、6/27(二) 寄出禮物。</p>
            </div>
            
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/6/19(一)中午12點由電腦隨機抽出，2023/6/19(一)下午6點前，獲獎者將以私訊通知。</li>
              <li class="list-group-item">獲獎者請於2023/6/21(三)中午12點前回覆私訊，提供「姓名、電話、信箱(以加入ViVa會員信箱為準)、地址」(逾期視同放棄，並由備選名單遞補)。並且避免重複得獎，若有得獎人地址相同者，將視為同一位獲獎人。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動限ViVa TV官方粉絲專頁會員才能參加，領獎時必須具有會員身份，並同意中獎相關個人資料提供ViVa TV於本活動範圍進行蒐集、處理及利用。若有得獎人地址相同者，將視為同一位獲獎人。如會員要求刪除個人資料，致生會員資格喪失，則喪失領獎資格。不得有冒名、代領、轉讓或頂替之行為，經主辦單位發現或經第三人檢舉，則主辦單位有權取消使用者之參與、得獎資格，主辦單位不另行通知，並保留法律追訴權。</li>
              <li class="list-group-item">ViVa TV將依獎品性質，以臉書私訊通知中獎會員，並於並於2023/6/27(二)以郵寄之方式寄送中獎商品，中獎會員應於ViVa TV中獎通知之期限內回覆確認同意領取獎品，並提供ViVa TV所要求之完整領獎文件，逾期視為棄權。中獎會員所提供之身分證明文件如與會員登錄資料不符，ViVa TV得要求中獎會員提出相關證明文件，無法提供或逾期不提供者，ViVa TV得取消該中獎會員之得獎資格。</li>

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

