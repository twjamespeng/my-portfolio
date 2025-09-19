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
    <!-- 【註冊送銀幣】 -->
    <div class="modal fade" id="eventModal-Wave1-A" tabindex="-1" aria-labelledby="eventModal-Wave1-A" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-gold">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【註冊送銀幣】</h3>
            <div class="p-xl-2">
              <p class="mb-2">活動期間</p>
              <p class="mb-3">2023/7/18(二)00:00-2023/8/31(四)23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2">活動內容</p>
              <p class="mb-3">活動期間新會員註冊成功，即可獲贈$100元銀幣(每一帳號限參與一次）。</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2">活動獎項</p>
              <ul class="mb-3">
                <li>銀幣$100（共計4,200 份）/ 註冊成功即刻歸戶。</li>
              </ul>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">本活動一帳號限參加一次。</li>
              <li class="list-group-item">銀幣使用期限為一個月。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用金、美好禮券、生日金幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777。</li>
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
          <div class="modal-header rounded-0 bg-gold">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【新客首購禮】</h3>
            <div class="p-xl-2">
              <p class="mb-2">活動期間</p>
              <p class="mb-3">2023/7/18(二)00:00-2023/8/31(四)23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2">活動內容</p>
              <p class="mb-3">活動期間註冊新會員成功，首購當日消費累滿$2,000元送$100元銀幣。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於2023/7/18(二)起每日結算並於2023/8/1(二)開始發送銀幣，以系統簡訊通知會員；活動期間每月結算一次。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日開始計算)。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用金、美好禮券、生日金幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【滿額送】驚喜大放送 -->
    <div class="modal fade" id="eventModal-Wave1-C" tabindex="-1" aria-labelledby="eventModal-Wave1-C" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-gold">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額送】驚喜大放送</h3>
            <div class="p-xl-2">
              <p class="mb-2">活動期間</p>
              <p class="mb-3">2023/7/18(二)00:00-2023/8/31(四)23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2">活動內容</p>
              <p class="mb-1">活動期間全通路，累計消費每滿$1,888元即可獲贈$200元銀幣</p>
              <p class="text-danger mb-3">(活動期間每帳戶最高限回饋1萬銀幣)</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於2023/7/18(二)起每日結算並於2023/8/1(二)開始發送銀幣，以系統簡訊通知會員；活動期間每月結算一次。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日開始計算)。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用金、美好禮券、生日金幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【消費刷手禮】 -->
    <div class="modal fade" id="eventModal-Wave1-D" tabindex="-1" aria-labelledby="eventModal-Wave1-D" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-gold">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【消費刷手禮】</h3>
            <div class="p-xl-2">
              <p class="mb-2">活動期間</p>
              <p class="mb-3">2023/7/18(二)00:00-2023/8/31(四)23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2">活動內容</p>
              <p class="mb-3">18週年慶活動期間，累積消費淨額排行前18名送好禮，分別送$5,888~$18,888不等(金幣)好禮。</p>
              <ul class="mb-3">
                <li>第1名$18,888金幣(共計1名)。</li>
                <li>第2~3名$15,888元金幣(共計2名)。</li>
                <li>第4~6名$10,888元金幣(共計3名)。</li>
                <li>第7~18名$5,888元金幣(共計12名)。</li>
              </ul>
              <p class="text-danger mb-3">金幣使用期限：2023/12/15(五)。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/9/15(五)由電腦隨機抽出，以系統簡訊通知會員，2023/9/19(二)中午12點歸戶。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用金、美好禮券、生日金幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
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
    <!-- 【滿額抽】無三不成禮 -->
    <div class="modal fade" id="eventModal-Wave1-E" tabindex="-1" aria-labelledby="eventModal-Wave1-E" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-gold">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】無三不成禮</h3>
            <div class="p-xl-2">
              <p class="mb-2">活動期間</p>
              <p class="mb-3">2023/7/18(二)00:00-2023/8/31(四)23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2">活動內容</p>
              <p class="mb-3">活動期間全通路，累計消費滿以下金額即可抽好禮(不可跨層抽獎)。</p>
              <ul class="mb-3">
                <li>好禮一-活動期間累計消費滿$46,800元即可抽【Hamilton Beach 漢美馳】二合一低溫舒肥慢燉鍋(33970-TW)_(市售價$4,490元)_共計6組。</li>
                <li>好禮二-活動期間累計消費滿$66,800元即可抽【柳宗理不鏽鋼單手鍋-附蓋+柳宗理湯杓組合 】壹份_(市售價6,400元)_共計7組。</li>
                <li>好禮三-活動期間累計消費滿$96,800元即可抽美國 Bissell 必勝 Crosswave 四合一吸塵洗地機 17135_市售價$9,900元_共計1組</li>
              </ul>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/9/15(五)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/10/6(五)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用金、美好禮券、生日金幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
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
    <!-- 【滿額抽】【Hamilton Beach 漢美馳】二合一低溫舒肥慢燉鍋(33970-TW) -->
    <div class="modal fade" id="eventModal-Wave1-F" tabindex="-1" aria-labelledby="eventModal-Wave1-F" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-gold">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】<br>【Hamilton Beach】漢美馳<br>二合一低溫舒肥慢燉鍋</h3>
            <div class="p-xl-2">
              <p class="mb-2">活動期間</p>
              <p class="mb-3">2023/7/18(二)00:00-2023/8/31(四)23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2">活動內容</p>
              <p class="mb-3">期間累計消費滿$46,800元，即可抽【Hamilton Beach 漢美馳】二合一低溫舒肥慢燉鍋(33970-TW)_(市售價$4,490元)共計6組。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/9/15(五)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/10/6(五)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用金、美好禮券、生日金幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
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
    <!-- 【滿額抽】柳宗理不鏽鋼單手鍋-附蓋+柳宗理湯杓組合/壹份 -->
    <div class="modal fade" id="eventModal-Wave1-G" tabindex="-1" aria-labelledby="eventModal-Wave1-G" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-gold">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】<br>柳宗理不鏽鋼單手鍋<br>附蓋+柳宗理湯杓組合/壹份</h3>
            <div class="p-xl-2">
              <p class="mb-2">活動期間</p>
              <p class="mb-3">2023/7/18(二)00:00-2023/8/31(四)23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2">活動內容</p>
              <p class="mb-3">期間累計消費滿$66,800元，即可抽【柳宗理不鏽鋼單手鍋-附蓋+柳宗理湯杓組合 】壹份_(市售價6,400元)_共計7組。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/9/15(五)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/10/6(五)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用金、美好禮券、生日金幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
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
    <!-- 【滿額抽】美國 Bissell 必勝 Crosswave 四合一吸塵洗地機 17135 -->
    <div class="modal fade" id="eventModal-Wave1-H" tabindex="-1" aria-labelledby="eventModal-Wave1-H" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-gold">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】<br>美國Bissell必勝<br>Crosswave四合一吸塵洗地機</h3>
            <div class="p-xl-2">
              <p class="mb-2">活動期間</p>
              <p class="mb-3">2023/7/18(二)00:00-2023/8/31(四)23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2">活動內容</p>
              <p class="mb-3">期間累計消費滿$96,800元，即可抽美國 Bissell 必勝 Crosswave 四合一吸塵洗地機 17135(市售價$9,900元)_共計1組。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/9/15(五)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/10/6(五)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用金、美好禮券、生日金幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
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
    <!-- 【買就抽】感恩回饋日 -->
    <div class="modal fade" id="eventModal-Wave1-I" tabindex="-1" aria-labelledby="eventModal-Wave1-I" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-gold">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【買就抽】感恩回饋日</h3>
            <div class="p-xl-2">
              <p class="mb-2">活動期間</p>
              <p class="mb-3">2023/7/30(日)</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2">活動內容</p>
              <p class="mb-3">活動期間購買『感恩回饋日』任一檔節目商品即可抽精品好禮：</p>
              <ol class="mb-3">
                <li>經典30分鑽石項鍊(CTJ)_(市售價$21,800元)_共計1組</li>
                <li>70PUH8257/96 飛利浦 70吋 4K連網顯示器)_(市售價$35,000元)_共計1台</li>
              </ol>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/9/15(五)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/10/6(五)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用金、美好禮券、生日金幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
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
              <li class="list-group-item">獎品以實物為準，如遇產品缺貨或其他不可抗力之事由，ViVa TV得保留更換等值獎品之權利。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- 【美好許願池】 -->
    <div class="modal fade" id="eventModal-Wave1-J" tabindex="-1" aria-labelledby="eventModal-Wave1-J" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-gold">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【美好許願池】</h3>
            <div class="p-xl-2">
              <p class="mb-2">活動期間</p>
              <p class="mb-3">2023/7/31(一)00:00-2023/8/31(四)23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2">活動內容</p>
              <p class="mb-3">活動期間購買<span class="text-danger">網路商品</span>(包含加價購)，累計消費滿8,888元，即可加碼抽800元銀幣_共計8名。</p>
              <p class="mb-3">銀幣使用期限：一個月(自發送日開始計算)。</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/9/15(五)由電腦隨機抽出，以系統簡訊通知會員</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV商品抵用金、美好禮券、生日金幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
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
    <!-- 【互動抽好禮】共享榮耀時光 -->
    <div class="modal fade" id="eventModal-Wave1-K" tabindex="-1" aria-labelledby="eventModal-Wave1-K" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-gold">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【互動抽好禮】共享榮耀時光</h3>
            <div class="p-xl-2">
              <p class="mb-2">活動期間</p>
              <p class="mb-3">2023/7/25(二)00:00-2023/8/11(五)23:59。</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2">活動內容</p>
              <p class="mb-3">活動期間完成指定步驟，即可抽800元銀幣_共計18名</p>
              <p class="mb-0">活動參與辦法如下：</p>
              <ol class="mb-3">
                <li>成為ViVa TV美好購物臉書好友/會員及活動貼文按讚</li>
                <li>活動期間於59頻道，拍下18週年生日年慶相關露出畫面</li>
                <li>將此照片上傳『ViVa TV美好購物臉書』</li>
                <li>留言：『祝福ViVa TV美好購物18歲生日快樂』</li>
              </ol>
            </div>
            <div v-if="start_0725" class="p-xl-2">
              <a href="https://www.facebook.com/vivatv.tw/posts/pfbid02QoANJKrpftHy5QJBDfPTV1G3SmmUmu5trHwu2Dm3sp1tYszntGvuuodLRYneLJ42l" target="_blank" class="text-decoration-underline text-danger fs-5">活動網址請點我</a>
            </div>
            <div v-else class="p-xl-2">
              <a href="javascript:void(0)" onclick="alert('活動尚未開始');" class="text-decoration-underline text-danger fs-5">活動網址請點我</a>
            </div>

            <div class="p-xl-2">
              <p class="mb-2">獲獎辦法</p>
              <ol class="mb-3">
                <li>8/14(一)中午12點由電腦隨機抽出獲獎名單，下午6點前陸續以私訊方式通知。</li>
                <li>8/16(三)中午12點前獲獎者無回覆，由備選名單遞補。</li>
                <li>8/17(四)臉書公佈得獎名單。</li>
                <li>8/18(五)銀幣歸戶。</li>
              </ol>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2023/8/14(一)中午12點由電腦隨機抽出，2023/8/14(一)下午6點前，獲獎者將以私訊通知。</li>
              <li class="list-group-item">獲獎者請於2023/8/16(三)中午12點前回覆私訊，提供「姓名、電話、信箱(以加入ViVa會員信箱為準)、地址」(逾期視同放棄，並由備選名單遞補)。並且避免重複得獎，若有得獎人地址相同者，將視為同一位獲獎人。</li>
              <li class="list-group-item">ViVa TV商品抵用金、美好禮券、生日金幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動限ViVa TV官方粉絲專頁會員才能參加，領獎時必須具有會員身份，並同意中獎相關個人資料提供ViVa TV於本活動範圍進行蒐集、處理及利用。若有得獎人地址相同者，將視為同一位獲獎人。如會員要求刪除個人資料，致生會員資格喪失，則喪失領獎資格。不得有冒名、代領、轉讓或頂替之行為，經主辦單位發現或經第三人檢舉，則主辦單位有權取消使用者之參與、得獎資格，主辦單位不另行通知，並保留法律追訴權。</li>
              <li class="list-group-item">ViVa TV將依獎品性質，以臉書私訊通知中獎會員，並於並於2023/6/27(二)以郵寄之方式寄送中獎商品，中獎會員應於ViVa TV中獎通知之期限內回覆確認同意領取獎品，並提供ViVa TV所要求之完整領獎文件，逾期視為棄權。中獎會員所提供之身分證明文件如與會員登錄資料不符，ViVa TV得要求中獎會員提出相關證明文件，無法提供或逾期不提供者，ViVa TV得取消該中獎會員之得獎資格。</li>
              
              <li class="list-group-item">參加本活動之中獎人（若為中華民國境內居住之個人）無論中獎金額多寡，ViVa TV將依各類所得扣繳率標準就贈品所得代為申報，均全數於年底寄發所得稅扣繳憑單；若中獎人不願接受扣繳憑單，ViVa TV將取消中獎資格；依中華民國稅法規定，機會中獎之獎項價值超過新臺幣1,000元以上，獎項將列入個人年度綜合所得稅申報；若獎項金額超過新臺幣20,000元以上者，須負擔10%機會中獎所得稅；非中華民國境內居住之個人（即在中華民國境內居住未達183天之本國人及外國人），須就中獎所得扣繳20%機會中獎所得稅。中獎會員參加本活動而需支付任何稅捐皆為中獎會員之義務，概與ViVa TV無關。</li>
              <li class="list-group-item">本活動以實際成交訂單中購買商品組數/金額計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。另如中獎會員於收到獎品後，始辦理取消、退貨後致原成功訂購失效致不符抽/中獎資格者，中獎會員必須寄回完整無瑕獎品予ViVa TV後，本公司始能受理取消、退貨作業。</li>
              <li class="list-group-item">本活動獎項須以公佈於本網站之資料為準，如遇不可抗力之因素，ViVa TV保留更換其他等值獎項之權利，恕不另行通知。</li>
              <li class="list-group-item">若會員欲行使個資法第三條所賦予之查詢、閱覽及刪除等權利，請洽詢ViVa TV客服人員。個人資料蒐集、處理及利用之特定目的及類別等詳請參閱ViVa TV官方網站「個資保護專區」。除原會員已蒐集之個人資料，本次活動因申報中獎所得需要蒐集中獎會員的身分證影印本，其額外蒐集類別依據個資法為(C023 家庭其他成員之細節 ，C064軍中服役情形)，蒐集目的為進行核銷作業之證明，利用期間及地區將僅限於本次活動抽獎之期間及範圍。本活動之獎品均不得要求轉換現金或其他獎品。</li>
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
      start_0725: false
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
      

      

      

      if ( moment(timeNow).isBetween('2023-07-25 11:00:00', '2023-08-11 23:59:59', 'second', '[]') ) {
        this.start_0725 = true;
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

      const swpPrimaryLeft = new Swiper('#swpPrimaryLeft', {
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
          el: '#swpPrimaryLeftWrapper .swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });

      const swpPrimaryRight = new Swiper('#swpPrimaryRight', {
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
          el: '#swpPrimaryRightWrapper .swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });

      const swpD = new Swiper('#swpD', {
        autoplay: {
          delay: 3000,
        },
        loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 2,
        slidesPerGroup: 1,
        speed: 500,
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
        autoplay: {
          delay: 3000,
        },
        loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 2,
        slidesPerGroup: 1,
        speed: 500,
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

      const swpS13 = new Swiper('#swpS13', {
        loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        speed: 500,
        spaceBetween: 0,
        effect: 'slide',
        navigation: {
          nextEl: '#pills-S13 .swiper-button-next',
          prevEl: '#pills-S13 .swiper-button-prev'
        }
      });

      const swpS14 = new Swiper('#swpS14', {
        loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        speed: 500,
        spaceBetween: 0,
        effect: 'slide',
        navigation: {
          nextEl: '#pills-S14 .swiper-button-next',
          prevEl: '#pills-S14 .swiper-button-prev'
        }
      });

      const swpS15 = new Swiper('#swpS15', {
        loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        speed: 500,
        spaceBetween: 0,
        effect: 'slide',
        navigation: {
          nextEl: '#pills-S15 .swiper-button-next',
          prevEl: '#pills-S15 .swiper-button-prev'
        }
      });

      const swpS16 = new Swiper('#swpS16', {
        loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        speed: 500,
        spaceBetween: 0,
        effect: 'slide',
        navigation: {
          nextEl: '#pills-S16 .swiper-button-next',
          prevEl: '#pills-S16 .swiper-button-prev'
        }
      });

      const swpS17 = new Swiper('#swpS17', {
        loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        speed: 500,
        spaceBetween: 0,
        effect: 'slide',
        navigation: {
          nextEl: '#pills-S17 .swiper-button-next',
          prevEl: '#pills-S17 .swiper-button-prev'
        }
      });

      const swpS18 = new Swiper('#swpS18', {
        loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        speed: 500,
        spaceBetween: 0,
        effect: 'slide',
        navigation: {
          nextEl: '#pills-S18 .swiper-button-next',
          prevEl: '#pills-S18 .swiper-button-prev'
        }
      });

      const swpS19 = new Swiper('#swpS19', {
        loop: true,
        observer: true,
        observeParents: true,
        slidesPerView: 3,
        slidesPerGroup: 1,
        speed: 500,
        spaceBetween: 0,
        effect: 'slide',
        navigation: {
          nextEl: '#pills-S19 .swiper-button-next',
          prevEl: '#pills-S19 .swiper-button-prev'
        }
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

      

      


      // const tabEl = document.querySelector('button[data-bs-toggle="pill"]')
      // tabEl.addEventListener('shown.bs.tab', event => {
      //   console.log(event.target);
      // })

      $('button[data-bs-toggle="pill"]').on('shown.bs.tab', function() {
        // console.log(this.id.substr(8,2));
        var currentSwiperID = 'swpS' + this.id.substr(8,2);
        console.log('swiperToStart:'+currentSwiperID);
        var currentSwiper = document.querySelector('#'+currentSwiperID).swiper;
        currentSwiper.autoplay.start();
      });

      $('button[data-bs-toggle="pill"]').on('hidden.bs.tab', function() {
        // console.log(this.id.substr(8,2));
        var currentSwiperID = 'swpS' + this.id.substr(8,2);
        console.log('swiperToStop:'+currentSwiperID);
        var currentSwiper = document.querySelector('#'+currentSwiperID).swiper;
        currentSwiper.autoplay.stop();
      });


    }, 1000);

    
  }

}
</script>

