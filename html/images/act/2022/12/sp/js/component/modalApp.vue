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
    <!-- eventModal-Wave3-A -->
    <div class="modal fade" id="eventModal-Wave3-A" tabindex="-1" aria-labelledby="eventModal-Wave3-A" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【發財金大方送】<br>買就抽$500元銀幣</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/01/21(六)00:00～2023/02/05(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間於全通路購買任一項「指定商品」即可獲得發財金抽獎資格</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">發財金內容及抽取數量</span></p>
              <p class="mb-3">$500元銀幣，共計20名</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">指定商品</span></p>
              <div class="row row-cols-1 px-3">
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="https://www.vivatv.com.tw/common/images/product/3097372022/1.jpg"></div>
                    <div class="d-flex align-items-center ps-3">Karoli 一秒瞬香霧化儀賀正御節限定</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="https://www.vivatv.com.tw/common/images/product/3092592022/1.jpg"></div>
                    <div class="d-flex align-items-center ps-3">京美-遠紅外線能量圍脖日本限定特別組</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="/html/images/act/2022/12/sp/images/product/3096172022.jpg"></div>
                    <div class="d-flex align-items-center ps-3">于美人嚴選澳洲原裝鴯苗鳥關鍵神油新春特別檔</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="/html/images/act/2022/12/sp/images/product/3096482022.jpg"></div>
                    <div class="d-flex align-items-center ps-3">希爾頓新春鴻兔大展精品石墨烯四季被</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="/html/images/act/2022/12/sp/images/product/3096782022.jpg"></div>
                    <div class="d-flex align-items-center ps-3">ROYAL ELASTICS視覺藝術機械錶</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="https://www.vivatv.com.tw/common/images/product/2895182019/1.jpg"></div>
                    <div class="d-flex align-items-center ps-3">京美-能量銀纖維長效護膝特惠組</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="/html/images/act/2022/12/sp/images/product/3093232022.jpg"></div>
                    <div class="d-flex align-items-center ps-3">GOLD SUITE澤潤透顏粉紅抗老珍珠霜限定組</div>
                  </div>
                </div>
              </div>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">中獎通知：將於活動結束後2/20(一)由電腦隨機抽出，獲獎者將於2/21(二)收到銀幣入帳及系統簡訊通知。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日期開始計算)</li>
              <li class="list-group-item">本活動抽獎資格以實際成交訂單計算，若因付款失敗、訂單取消、退貨等因素致該筆訂單不成立，則無法享有抽獎/獲獎資格。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- eventModal-Wave3-B -->
    <div class="modal fade" id="eventModal-Wave3-B" tabindex="-1" aria-labelledby="eventModal-Wave3-B" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0 mb-3">【發財金大方送】<br>滿額抽$800元銀幣</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/01/21(六)00:00～2023/02/05(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間於全通路購買任一項「指定商品」+全通路其他商品單筆訂單消費金額達標即可獲得發財金抽獎資格。</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">發財金內容及抽取數量</span></p>
              <p class="mb-3">活動期間單筆消費滿$4,888元，即可抽$800元銀幣，共計10名</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">指定商品</span></p>
              <div class="row row-cols-1 px-3">
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="https://www.vivatv.com.tw/common/images/product/3097372022/1.jpg"></div>
                    <div class="d-flex align-items-center ps-3">Karoli 一秒瞬香霧化儀賀正御節限定</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="https://www.vivatv.com.tw/common/images/product/3092592022/1.jpg"></div>
                    <div class="d-flex align-items-center ps-3">京美-遠紅外線能量圍脖日本限定特別組</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="/html/images/act/2022/12/sp/images/product/3096172022.jpg"></div>
                    <div class="d-flex align-items-center ps-3">于美人嚴選澳洲原裝鴯苗鳥關鍵神油新春特別檔</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="/html/images/act/2022/12/sp/images/product/3096482022.jpg"></div>
                    <div class="d-flex align-items-center ps-3">希爾頓新春鴻兔大展精品石墨烯四季被</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="/html/images/act/2022/12/sp/images/product/3096782022.jpg"></div>
                    <div class="d-flex align-items-center ps-3">ROYAL ELASTICS視覺藝術機械錶</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="https://www.vivatv.com.tw/common/images/product/2895182019/1.jpg"></div>
                    <div class="d-flex align-items-center ps-3">京美-能量銀纖維長效護膝特惠組</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="/html/images/act/2022/12/sp/images/product/3093232022.jpg"></div>
                    <div class="d-flex align-items-center ps-3">GOLD SUITE澤潤透顏粉紅抗老珍珠霜限定組</div>
                  </div>
                </div>
              </div>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">中獎通知：將於活動結束後2/20(一)由電腦隨機抽出，獲獎者將於2/21(二)收到銀幣入帳及系統簡訊通知。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日期開始計算)</li>
              <li class="list-group-item">本活動抽獎資格以實際成交訂單計算，若因付款失敗、訂單取消、退貨等因素致該筆訂單不成立，則無法享有抽獎/獲獎資格。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- eventModal-Wave3-C -->
    <div class="modal fade" id="eventModal-Wave3-C" tabindex="-1" aria-labelledby="eventModal-Wave3-C" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0 mb-3">【發財金大方送】<br>滿額抽$3,000元銀幣</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/01/21(六)00:00～2023/02/05(日) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間於全通路購買任一項「指定商品」+全通路其他商品單筆訂單消費金額達標即可獲得發財金抽獎資格。</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">發財金內容及抽取數量</span></p>
              <p class="mb-3">活動期間單筆消費滿$10,888元，即可抽$3,000元銀幣，共計1名</p>
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">指定商品</span></p>
              <div class="row row-cols-1 px-3">
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="https://www.vivatv.com.tw/common/images/product/3097372022/1.jpg"></div>
                    <div class="d-flex align-items-center ps-3">Karoli 一秒瞬香霧化儀賀正御節限定</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="https://www.vivatv.com.tw/common/images/product/3092592022/1.jpg"></div>
                    <div class="d-flex align-items-center ps-3">京美-遠紅外線能量圍脖日本限定特別組</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="/html/images/act/2022/12/sp/images/product/3096172022.jpg"></div>
                    <div class="d-flex align-items-center ps-3">于美人嚴選澳洲原裝鴯苗鳥關鍵神油新春特別檔</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="/html/images/act/2022/12/sp/images/product/3096482022.jpg"></div>
                    <div class="d-flex align-items-center ps-3">希爾頓新春鴻兔大展精品石墨烯四季被</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="/html/images/act/2022/12/sp/images/product/3096782022.jpg"></div>
                    <div class="d-flex align-items-center ps-3">ROYAL ELASTICS視覺藝術機械錶</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="https://www.vivatv.com.tw/common/images/product/2895182019/1.jpg"></div>
                    <div class="d-flex align-items-center ps-3">京美-能量銀纖維長效護膝特惠組</div>
                  </div>
                </div>
                <div class="col p-1">
                  <div class="d-flex">
                    <div class="flex-shrink-0" style="width: 48px;"><img class="img-fluid" src="/html/images/act/2022/12/sp/images/product/3093232022.jpg"></div>
                    <div class="d-flex align-items-center ps-3">GOLD SUITE澤潤透顏粉紅抗老珍珠霜限定組</div>
                  </div>
                </div>
              </div>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">中獎通知：將於活動結束後2/20(一)由電腦隨機抽出，獲獎者將於2/21(二)收到銀幣入帳及系統簡訊通知。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日期開始計算)</li>
              <li class="list-group-item">本活動抽獎資格以實際成交訂單計算，若因付款失敗、訂單取消、退貨等因素致該筆訂單不成立，則無法享有抽獎/獲獎資格。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- eventModal-Wave3-D -->
    <div class="modal fade" id="eventModal-Wave3-D" tabindex="-1" aria-labelledby="eventModal-Wave3-D" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0 mb-3">【滿額送】你買我就送</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/01/24(二)00:00～2023/02/14(二) 23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間累計消費<br>滿$2,000元送$200元銀幣<br>滿$4,000元送$400元銀幣<br>滿$6,000元送$600元銀幣</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於1/24(二)起每日結算並於2/7(二)開始發送銀幣，以系統簡訊通知會員；活動期間每月結算一次。</li>
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
    <!-- eventModal-A -->
    <div class="modal fade" id="eventModal-A" tabindex="-1" aria-labelledby="eventModalLabel-A" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">兔年吉好運</h3>
            <div class="p-xl-3">
              <h5>活動期間</h5>
              <p class="mb-3">2022/11/29(二) 00:00-2023/1/20(五) 23:59</p>  
            </div>
            <div class="p-xl-3">
              <h5>活動內容</h5>
              <h6 class="mb-3">活動期間註冊新會員成功，首筆消費金額 滿$1,688 送 $100銀幣</h6>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於11/29(二)起每日結算並於12/13(二)開始發送銀幣，以系統簡訊通知會員；活動期間每月結算一次。</li>
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
    <!-- eventModal-B -->
    <div class="modal fade" id="eventModal-B" tabindex="-1" aria-labelledby="eventModalLabel-B" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額送】買越多賺越多</h3>
            <div class="p-xl-3">
              <h5>活動期間</h5>
              <p class="mb-3">2022/11/29(二) 00:00-2023/1/20(五) 23:59</p>  
            </div>
            <div class="p-xl-3">
              <h5>活動內容</h5>
              <h6 class="mb-0">活動期間累計消費</h6>
              <p class="mb-0">滿$2,000元送$200元銀幣</p>
              <p class="mb-0">滿$4,000元送$400元銀幣</p>
              <p>滿$6,000元送$600元銀幣</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於11/29(二)起每日結算並於12/13(二)開始發送銀幣，以系統簡訊通知會員；活動期間每月結算一次。</li>
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
    <!-- eventModal-C -->
    <div class="modal fade" id="eventModal-C" tabindex="-1" aria-labelledby="eventModalLabel-C" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】Le Creuset鑄鐵圓鍋+花形盤2入</h3>
            <div class="p-xl-3">
              <h5>活動期間</h5>
              <p class="mb-3">2022/11/29(二) 00:00-2023/1/20(五) 23:59</p>  
            </div>
            <div class="p-xl-3">
              <h5>活動內容</h5>
              <h6 class="mb-3">期間累計消費滿$66,888元，即可抽Le Creuset鑄鐵圓鍋+花形盤2入(市售價約$21,580元，共計1組)</h6>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2/6(一)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/2/28(二)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
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
    <!-- eventModal-D -->
    <div class="modal fade" id="eventModal-D" tabindex="-1" aria-labelledby="eventModalLabel-D" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】金幣$888元</h3>
            <div class="p-xl-3">
              <h5>活動期間</h5>
              <p class="mb-3">2022/11/29(二) 00:00-2023/1/20(五) 23:59</p>  
            </div>
            <div class="p-xl-3">
              <h5>活動內容</h5>
              <h6 class="mb-3">期間累計消費滿$8,888元，即可抽金幣$888元_(共計10名)</h6>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2/6(一)由電腦隨機抽出，獲獎者後續將於專人電話通知。</li>
              <li class="list-group-item">金幣使用期限：一個月(自發送日開始計算)。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- eventModal-E -->
    <div class="modal fade" id="eventModal-E" tabindex="-1" aria-labelledby="eventModalLabel-E" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額送】揚眉兔氣 好事成雙</h3>
            <div class="p-xl-3">
              <h5>活動期間</h5>
              <p class="mb-3">2022/11/29(二) 00:00-2023/1/20(五) 23:59</p>  
            </div>
            <div class="p-xl-3">
              <h5>活動內容</h5>
              <h6 class="mb-0">好禮一、【新客首購禮】爽拿購物禮</h6>
              <p class="mb-3">活動期間註冊新會員成功，首筆消費金額 滿$1,688 送 $100銀幣</p>
              <h6 class="mb-0">好禮二、【回饋無上限】滿額我就送</h6>
              <p class="mb-0">活動期間累計消費</p>
              <p class="mb-0">滿$2,000元送$200元銀幣</p>
              <p class="mb-0">滿$4,000元送$400元銀幣</p>
              <p class="mb-3">滿$6,000元送$600元銀幣</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於11/29(二)起每日結算並於12/13(二)開始發送銀幣，以系統簡訊通知會員。</li>
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
    <!-- eventModal-F -->
    <div class="modal fade" id="eventModal-F" tabindex="-1" aria-labelledby="eventModalLabel-F" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【我恭喜你發財 發財金大方抽】</h3>
            <div class="p-xl-3">
              <h5>活動期間</h5>
              <p class="mb-3">2023/1/21(六) 00:00 - 2023/2/5(日) 23:59</p>  
            </div>
            <div class="p-xl-3">
              <h5>活動內容</h5>
              <h6 class="mb-0">好禮一：【買就抽發財金】</h6>
              <p class="mb-3">活動期間全通路購買指定商品即可獲得發財金抽獎資格(抽$xxx元銀幣_共計x名)</p>
              <h6 class="mb-0">好禮二、【滿額抽發財金】</h6>
              <p class="mb-3">活動期間全通路購買指定商品+其他台內商品累積消費總額達標即可獲得發財金抽獎資格</p>
            </div>
            <div class="p-xl-3">
              <h5>活動獎項</h5>
              <h6 class="mb-0">活動期間單筆消費滿$4,888元，即可抽$800元銀幣_共計10名</h6>
              <h6 class="mb-3">活動期間單筆消費滿$10,888元，即可抽$3000元銀幣_共計1名</h6>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於1/21(六)起每日結算並於2/6(二)開始發送銀幣，以系統簡訊通知會員。</li>
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
    <!-- eventModal-G -->
    <div class="modal fade" id="eventModal-G" tabindex="-1" aria-labelledby="eventModalLabel-G" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【新客註冊送銀幣】</h3>
            <div class="p-xl-3">
              <h5>活動期間</h5>
              <p class="mb-3">2022/11/29(二) 00:00 - 2022/12/21(三) 23:59</p>  
            </div>
            <div class="p-xl-3">
              <h5>活動內容</h5>
              <h6 class="mb-3">活動期間新會員註冊成功，即可獲贈$100元銀幣(每一帳號限參與一次）</h6>
              <h5>活動獎項</h5>
              <h6 class="mb-3">銀幣$100（共計2000 份），註冊成功即刻歸戶。</h6>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">本活動一帳號限參加一次。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日開始計算)。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- eventModal-H -->
    <div class="modal fade" id="eventModal-H" tabindex="-1" aria-labelledby="eventModalLabel-H" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】天降紅包雨</h3>
            <div class="p-xl-3">
              <h5>活動期間</h5>
              <p class="mb-3">2022/12/25 00:00 - 2023/1/20 23:59</p>  
            </div>
            <div class="p-xl-3">
              <h5>活動內容</h5>
              <h6 class="mb-0">活動期間於EC，消費滿$2,023元即可參與天降紅包雨活動（每一帳號限參與一次，送完為止）</h6>
              <p class="mb-3">銀幣於次日中午12時歸戶</p>

              <h5>活動獎項</h5>
              <p>$100銀幣，共計200份</p>
              <p>$200元銀幣，共計100份</p>
              <p>$800元銀幣，共計20份</p>
              <p>$1000元銀幣，共計10份</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">本活動一帳號限參加一次。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日開始計算)。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- eventModal-I -->
    <div class="modal fade" id="eventModal-I" tabindex="-1" aria-labelledby="eventModalLabel-I" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】【畢耶】巴黎鐵塔柄平底鍋20CM</h3>
            <div class="p-xl-3">
              <h5>活動期間</h5>
              <p class="mb-3">2022/11/29(二) 00:00-2023/1/20(五) 23:59</p>  
            </div>
            <div class="p-xl-3">
              <h5>活動內容</h5>
              <h6 class="mb-3">期間累計消費滿$16,888元，即可抽【畢耶】巴黎鐵塔柄平底鍋20CM(市售價約$1,680元，共計10組)</h6>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2/6(一)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/2/28(二)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
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
    <!-- eventModal-J -->
    <div class="modal fade" id="eventModal-J" tabindex="-1" aria-labelledby="eventModalLabel-J" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】兔步高昇 三重好禮</h3>
            <div class="p-xl-3">
              <h5>活動期間</h5>
              <p class="mb-3">2022/11/29(二) 00:00-2023/1/20(五) 23:59</p>  
            </div>
            <div class="p-xl-3">
              <h5>活動內容</h5>
              <h6 class="mb-3">活動期間全通路，累計消費滿以下金額即可抽好禮( 不可跨層抽獎)。</h6>
              <p class="mb-0">★第一重：滿$8,888元 ，即可抽$888元金幣_(共計10名)</p>
              <p class="mb-0">★第二重：滿$16,888元，即可抽【畢耶】巴黎鐵塔柄平底鍋20CM_(市售價約$1,680元)_(共計10組)</p>
              <p class="mb-3">★第三重：滿$66,888元，即可抽Le Creuset鑄鐵圓鍋+花形盤2入(市售價約$21,580元)_(共計1組)</p>

            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2/6(一)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/2/28(二)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
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
    <!-- eventModal-K -->
    <div class="modal fade" id="eventModal-K" tabindex="-1" aria-labelledby="eventModalLabel-K" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【激情雙旦 年終迎新】</h3>
            <div class="p-xl-3">
              <h5>活動期間</h5>
              <p class="mb-3">2022/11/29(二) 00:00-2023/1/20(五) 23:59</p>  
            </div>
            <div class="p-xl-3">
              <h5>活動內容</h5>
              <h6 class="mb-3">活動期間全通路，累計消費滿以下金額即可抽好禮( 不可跨層抽獎)。</h6>
              <p class="mb-0">★第一重：滿$8,888元 ，即可抽$888元金幣_(共計10名)</p>
              <p class="mb-0">★第二重：滿 $16,888元，即可抽【畢耶】巴黎鐵塔柄平底鍋20CM_(市售價約$1,680元)_(共計10組)</p>
              <p class="mb-3">★第三重：滿 滿$66,888元，即可抽Le Creuset鑄鐵圓鍋+花形盤2入(市售價約$21,580元)_(共計1組)</p>

            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">抽獎通知，將於活動結束後2/6(一)由電腦隨機抽出，獲獎者後續將於專人電話通知，並寄送領獎通知回函，回函請2023/2/28(二)前寄回，否則將視同放棄。</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
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

    // $('.modal').on('shown.bs.modal', function(){
    //   console.log('modal opened');
    //   swpA.autoplay.stop();
    //   swpB.autoplay.stop();
    //   swpC.autoplay.stop();
    // });

    // $('.modal').on('hidden.bs.modal', function(){
    //   console.log('modal closed');
    //   swpA.autoplay.start();
    //   swpB.autoplay.start();
    //   swpC.autoplay.start();
    // });

    // $('#swpBottom').on('mouseover', function(){
    //   console.log('mouseenter');
    //   swpD.autoplay.stop();
    //   document.querySelector('.side-menu-wrapper-left').classList.remove('show');
    //   document.querySelector('.side-menu-wrapper-right').classList.remove('show');
    //   document.querySelector('.side-menu-wrapper-left').classList.add('pe-none');
    //   document.querySelector('.side-menu-wrapper-right').classList.add('pe-none');
    // });

    // $('#swpBottom').on('mouseout', function(){
    //   console.log('mouseleave');
    //   swpD.autoplay.start();
    //   document.querySelector('.side-menu-wrapper-left').classList.remove('pe-none');
    //   document.querySelector('.side-menu-wrapper-right').classList.remove('pe-none');
    //   document.querySelector('.side-menu-wrapper-left').classList.add('show');
    //   document.querySelector('.side-menu-wrapper-right').classList.add('show');
    // });
  }

}
</script>

