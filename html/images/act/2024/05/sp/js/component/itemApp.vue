<template>
  
  <div>
    
    

    <div v-if="wave1" class="main-section wave1 d-flex flex-column align-items-center" style="z-index: 2;">

      <div class="sticky-side-menu" style="z-index: 8;">
        <div class="falling-petals">
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
        </div>
        <div class="falling-petals falling-petals-mirror d-none d-xl-block">
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
        </div>
      </div>

      <div class="sticky-side-menu sticky-side-menu-2" style="z-index: 10;">
        <!-- 左選單 -->
        <div class="wave1 side-menu-wrapper-left">
          <div class="side-menu-body">
            <div class="d-flex flex-column">

              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/077F6E06AA6D020FE06400144FF9CEC6')" title="新品享美好">新品享美好</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/0A15010A39B50423E06400144FF9CEC6')" title="初夏微旅行">初夏微旅行</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309')" title="品嚐樂生活">品嚐樂生活</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/FE26D074E2855E90E05400144FF82309')" title="享樂好食光">享樂好食光</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/tertiaryCategory/077F6E06BC5A020FE06400144FF9CEC6')" title="為健康加分">為健康加分</button>
              </div>

              <div class="d-flex flex-column justify-content-around side-menu-group-2">
                <div class="btn-group">
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000004')" title="生活">生活</button>
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000002')" title="家電">家電</button>
                </div>
                <div class="btn-group">
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A24D23F00F52C2E0440003BA0FF872')" title="時尚">時尚</button>
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000003')" title="美妝">美妝</button>  
                </div>
                <div class="btn-group">
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C04AE75708173CA7E05400144FF9CEC6')" title="健康">健康</button>
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A1B2891B10444DE0440003BA0FF88E')" title="美食">美食</button>
                </div>
                <div class="btn-group">
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C5532AF44E31474EE05400144FF82309')" title="日用">日用</button>
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C064C88E9DDC3999E05400144FF82309')" title="３Ｃ">３Ｃ</button>
                </div>
              </div>

              <div class="d-flex flex-column side-menu-group-3">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/')" title="點我看更多">點我看更多</button>
              </div>

            </div>
          </div>
        </div>
        <!-- 右選單 -->
        <div class="wave1 side-menu-wrapper-right">
          <div class="side-menu-body">
            <div class="d-flex flex-column">
              
              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C" title="粽夏樂回饋">粽夏樂回饋</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D" title="粽金抽好禮">粽金抽好禮</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-F" title="新友粽情抽">新友粽情抽</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E" title="限時瘋殺搶">限時瘋殺搶</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B" title="新客拿銀幣">新客拿銀幣</button>
                
                
              </div>
              
              <div class="d-flex flex-column justify-content-around side-menu-group-2">
                <a href="#sectionA" class="btn rounded-0" title="粽情重義">粽情重義</a>
                <a href="#sectionB" class="btn rounded-0" title="粽享好物">粽享好物</a>
                <a href="#sectionC" class="btn rounded-0" title="放粽魅力">放粽魅力</a>
                <a href="#sectionD" class="btn rounded-0" title="樂活粽夏">樂活粽夏</a>
              </div>

              <div class="d-flex flex-column side-menu-group-3">
                <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')" title="點我看更多">點我看更多</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      
      
      <div class="primary-section d-flex flex-column align-items-center p-2 position-relative" style="z-index: 10">

        <div class="primary-section-group d-flex flex-column justify-content-center align-items-center">
          
          <div class="row g-0 p-0 d-flex justify-content-center align-items-center w-100">

            <div id="swpPrimaryBtn1Wrapper" class="col-6 col-md-3 d-block text-center p-1" style="overflow-x: clip;">
              <div id="swpPrimaryBtn1" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-1">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave1/primary-btn-1.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave1/mobile/primary-btn-1.png" alt="滿額送最高600銀幣">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="swpPrimaryBtn2Wrapper" class="col-6 col-md-3 d-block text-center p-1" style="overflow-x: clip;">
              <div id="swpPrimaryBtn2" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-2">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-D">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave1/primary-btn-2.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave1/mobile/primary-btn-2.png" alt="618加碼抽5000金幣">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="swpPrimaryBtn3Wrapper" class="col-6 col-md-3 d-block text-center p-1" style="overflow-x: clip;">
              <div id="swpPrimaryBtn3" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-3-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-E">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave1/primary-btn-3-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave1/mobile/primary-btn-3-a.png" alt="618限時瘋殺">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide primary-btn-3-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-A">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave1/primary-btn-3-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave1/mobile/primary-btn-3-b.png" alt="註冊送好禮">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="swpPrimaryBtn4Wrapper" class="col-6 col-md-3 d-block text-center p-1" style="overflow-x: clip;">
              <div id="swpPrimaryBtn4" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-4-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-F">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave1/primary-btn-4-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave1/mobile/primary-btn-4-a.png" alt="抽Jo malone護手霜">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide primary-btn-1-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-B">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave1/primary-btn-4-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave1/mobile/primary-btn-4-b.png" alt="新客首購禮">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          
          

          

          
            
        </div>

      </div>


      <!-- <div v-if="ecOnly" id="ecOnly" class="mb-0" style="background-color: rgba(255,255,255,0);">
        <div class="ec-only-section d-flex flex-column mx-auto">

          <div class="w-100 text-center">
            <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave1/section-title-econly.png" alt="618限時瘋殺">
          </div>

          <div class="nav justify-content-center nav-pills mb-2" id="pills-tab" role="tablist">
            <a href="#pills-S12" id="pills-0612-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave1/section-nav-12.png" alt="6/12">
            </a>
            <a href="#pills-S13" id="pills-0613-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave1/section-nav-13.png" alt="6/13">
            </a>
            <a href="#pills-S14" id="pills-0614-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave1/section-nav-14.png" alt="6/14">
            </a>
            <a href="#pills-S15" id="pills-0615-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave1/section-nav-15.png" alt="6/15">
            </a>
            <a href="#pills-S16" id="pills-0616-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave1/section-nav-16.png" alt="6/16">
            </a>
            <a href="#pills-S17" id="pills-0617-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave1/section-nav-17.png" alt="6/17">
            </a>
            <a href="#pills-S18" id="pills-0618-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave1/section-nav-18.png" alt="6/18">
            </a>
          </div>

          <div class="tab-content mb-3" id="pills-tabContent">
            <div id="pills-S12" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-S12-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div id="swpS12" class="swiper-container overflow-hidden">
                  <div class="swiper-wrapper">
                    <div v-if="item.type === 'S12'" v-for="item in items" class="swiper-slide p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column p-1 p-xl-4">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
            <div id="pills-S13" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-S13-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div id="swpS13" class="swiper-container overflow-hidden">
                  <div class="swiper-wrapper">
                    <div v-if="item.type === 'S13'" v-for="item in items" class="swiper-slide p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
            <div id="pills-S14" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-S14-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div id="swpS14" class="swiper-container overflow-hidden">
                  <div class="swiper-wrapper">
                    <div v-if="item.type === 'S14'" v-for="item in items" class="swiper-slide p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
            <div id="pills-S15" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-S15-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div id="swpS15" class="swiper-container overflow-hidden">
                  <div class="swiper-wrapper">
                    <div v-if="item.type === 'S15'" v-for="item in items" class="swiper-slide p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
            <div id="pills-S16" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-S16-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div id="swpS16" class="swiper-container overflow-hidden">
                  <div class="swiper-wrapper">
                    <div v-if="item.type === 'S16'" v-for="item in items" class="swiper-slide p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
            <div id="pills-S17" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-S17-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div id="swpS17" class="swiper-container overflow-hidden">
                  <div class="swiper-wrapper">
                    <div v-if="item.type === 'S17'" v-for="item in items" class="swiper-slide p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
            <div id="pills-S18" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-S18-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div id="swpS18" class="swiper-container overflow-hidden">
                  <div class="swiper-wrapper">
                    <div v-if="item.type === 'S18'" v-for="item in items" class="swiper-slide p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1 p-xl-2">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
          </div>

        </div>
      </div> -->

      
      
      <!-- nav -->
      <div id="navBar" class="btn-nav-group wave1 d-flex flex-column justify-content-center align-items-center pb-3 pe-3  pb-lg-5">
        <div class="navbar-inner d-flex justify-content-center align-items-center position-relative">
          <a id="Btn1" data-wow-delay="0s" class="d-block btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionA">
            <img src="images/act/2024/05/sp/images/wave1/nav-1.png" class="img-fluid">
            <img src="images/act/2024/05/sp/images/wave1/nav-1-hover.png" class="img-fluid">
          </a>
          <a id="Btn2" data-wow-delay="0s" class="d-block btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionB">
            <img src="images/act/2024/05/sp/images/wave1/nav-2.png" class="img-fluid">
            <img src="images/act/2024/05/sp/images/wave1/nav-2-hover.png" class="img-fluid">
          </a>
          <a id="Btn3" data-wow-delay="0s" class="d-block btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionC">
            <img src="images/act/2024/05/sp/images/wave1/nav-3.png" class="img-fluid">
            <img src="images/act/2024/05/sp/images/wave1/nav-3-hover.png" class="img-fluid">
          </a>
          <a id="Btn4" data-wow-delay="0s" class="d-block btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionD">
            <img src="images/act/2024/05/sp/images/wave1/nav-4.png" class="img-fluid">
            <img src="images/act/2024/05/sp/images/wave1/nav-4-hover.png" class="img-fluid">
          </a>
        </div>
      </div>
      
      <div id="publicGrid" class="wave1 position-relative" style="z-index: 9;">


        <!-- 公格 -->
        <div class="w-100 position-relative">

          <div class="container-fluid p-0 g-0 position-relative" style="z-index: 99;">
            <div class="row g-0 justify-content-center">

              

              <!-- A -->
              <div id="sectionA" class="col-12 mb-4 mb-xl-5">
                <div class="section-bg-item">
                  <div class="zongzi-left-1"></div>
                  <div class="zongzi-right-1"></div>
                  <div class="zongzi-right-2 wow fadeInRight"></div>
                </div>
                <div class="section-wrapper section-a position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave1/section-title-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave1/mobile/section-title-a.png" alt="section-title-a">
                      </picture>
                      <div class="section-zongzi-1"></div>
                      <div class="section-zongzi-2"></div>
                      <div class="section-zongzi-3"></div>
                      <div class="section-zongzi-4"></div>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'A1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-lg-2">
                            <div class="d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <!-- <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div> -->
                                <div class="item-price text-center mb-1"><span class="fw-normal fs-6">已售完</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
              
              <!-- B -->
              <div id="sectionB" class="col-12 mb-4 mb-xl-5">
                <div class="section-bg-item">
                  <div class="zongzi-left-2 wow fadeInLeft"></div>
                </div>
                <div class="section-wrapper section-b position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave1/section-title-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave1/mobile/section-title-b.png" alt="section-title-b">
                      </picture>
                      <div class="section-title-boat"></div>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'B1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-lg-2">
                            <div class="d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>

              

              

              <!-- C -->
              <div id="sectionC" class="col-12 mb-4 mb-xl-5">
                <div class="section-bg-item">
                  <div class="zongzi-left-1"></div>
                  <div class="zongzi-right-1"></div>
                  <div class="zongzi-right-2 wow fadeInRight"></div>
                </div>
                <div class="section-wrapper section-c position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave1/section-title-c.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave1/mobile/section-title-c.png" alt="section-title-c">
                      </picture>
                      <div class="section-zongzi-1"></div>
                      <div class="section-zongzi-2"></div>
                      <div class="section-zongzi-3"></div>
                      <div class="section-zongzi-4"></div>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'C1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-lg-2">
                            <div class="d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>

              <!-- swpD -->
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section mb-4 mb-xl-5" data-wow-offset="50" data-wow-delay="0.2s">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/139B1A27F862368DE06400144FF82309">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1774F73FF1001553E06400144FF9CEC6_m.jpg?t=1714636771021" alt="【首頁下排廣告】【FULUTO 婦樂透】感恩母親節">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/166AEA46DBA16B1BE06400144FF82309">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/178A965274FC36F1E06400144FF9CEC6_m.jpg?t=1714729561104" alt="【首頁下排廣告】【FORTE】贈品促銷活動_長期">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/174D30227DBA267CE06400144FF82309">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1774D98B19B74117E06400144FF82309_m.jpg?t=1714636514517" alt="【首頁下排廣告】【JLP】母親節活動_即日起-5/31">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB35BBF445C34E2E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1774F09FD09443A4E06400144FF82309_m.jpg?t=1714636586711" alt="【首頁下排廣告】【田倉】感恩母親節_即日起-5/31">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/174C09B555F45316E06400144FF82309">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/174D0AA5C2CA2628E06400144FF82309_m.jpg?t=1714465224680" alt="【首頁下排廣告】【ZCJ】品牌93折_5/1~5/31">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/152B772E6CC8044FE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1645E4C41FD3302FE06400144FF82309_m.jpg?t=1713336177074" alt="【首頁下排廣告】【星紅織品+巾專家】限時特惠">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/07E4434A2DCD71E1E06400144FF82309">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/15E330E0A0084AE7E06400144FF82309_m.jpg?t=1712911087865" alt="【首頁下排廣告】日本味王_長期">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/15C9BF63B02444DBE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/15E3285A27044AEDE06400144FF82309_m.jpg?t=1712911016876" alt="【首頁下排廣告】cctogo_長期">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/13A9ED6489593B3CE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/14275D8DD6A71925E06400144FF9CEC6_m.jpg?t=1711004953057" alt="【首頁下排廣告】南寶_長期">
                        </a>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>

              

              
              <!-- D -->
              <div id="sectionD" class="col-12 mb-4 mb-xl-5">
                <div class="section-bg-item">
                  <div class="zongzi-left-2 wow fadeInLeft"></div>
                </div>
                <div class="section-wrapper section-d position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave1/section-title-d.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave1/mobile/section-title-d.png" alt="section-title-d">
                      </picture>
                      <div class="section-title-boat"></div>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'D1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-lg-2">
                            <div class="d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>

              
              
              <!-- 銀行優惠 -->
              
              <div class="swp-banner-section swp-bank-section col-12 px-2">
                <div class="d-flex flex-column rounded-3">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202406_creditcard.html">
                      <img src="images/act/2024/05/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/05/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/05/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">4800</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/05/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期滿額回饋<br><span class="fw-bold text-danger">180</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/05/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">1200</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/05/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br><span class="fw-bold text-danger">滿額送刷卡金</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/05/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">享2%回饋<br><span class="fw-bold text-danger">指定卡再加碼</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/05/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/05/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">4800</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/05/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期滿額回饋<br><span class="fw-bold text-danger">180</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/05/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">1200</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/05/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br><span class="fw-bold text-danger">滿額送刷卡金</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/05/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">享2%回饋<br><span class="fw-bold text-danger">指定卡再加碼</span></p>
                            </div>
                          </div>
                        </a>
                      </div>

                      
                    </div>
                    
                  </div>
                  
                </div>
              </div>


              
            </div>
          </div>

          <!-- <div><img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave1/page-bottom-cloud.png" alt="page bottom cloud"></div> -->
        </div>
      </div>

    </div>

    <div v-if="wave2" class="main-section wave2 d-flex flex-column align-items-center" style="z-index: 2;">

      <div class="sticky-side-menu" style="z-index: 8;">
        <div class="falling-petals">
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
        </div>
        <div class="falling-petals falling-petals-mirror d-none d-xl-block">
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
        </div>
      </div>

      <div class="sticky-side-menu sticky-side-menu-2" style="z-index: 10;">
        <!-- 左選單 -->
        <div class="wave2 side-menu-wrapper-left">
          <div class="side-menu-body">
            <div class="d-flex flex-column">

              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/077F6E06AA6D020FE06400144FF9CEC6')" title="新品享美好">新品享美好</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/0A15010A39B50423E06400144FF9CEC6')" title="初夏微旅行">初夏微旅行</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309')" title="品嚐樂生活">品嚐樂生活</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/FE26D074E2855E90E05400144FF82309')" title="享樂好食光">享樂好食光</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/tertiaryCategory/077F6E06BC5A020FE06400144FF9CEC6')" title="為健康加分">為健康加分</button>
              </div>

              <div class="d-flex flex-column justify-content-around side-menu-group-2">
                <div class="btn-group">
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000004')" title="生活">生活</button>
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000002')" title="家電">家電</button>
                </div>
                <div class="btn-group">
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A24D23F00F52C2E0440003BA0FF872')" title="時尚">時尚</button>
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000003')" title="美妝">美妝</button>  
                </div>
                <div class="btn-group">
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C04AE75708173CA7E05400144FF9CEC6')" title="健康">健康</button>
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A1B2891B10444DE0440003BA0FF88E')" title="美食">美食</button>
                </div>
                <div class="btn-group">
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C5532AF44E31474EE05400144FF82309')" title="日用">日用</button>
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C064C88E9DDC3999E05400144FF82309')" title="３Ｃ">３Ｃ</button>
                </div>
              </div>

              <div class="d-flex flex-column side-menu-group-3">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/')" title="點我看更多">點我看更多</button>
              </div>

            </div>
          </div>
        </div>
        <!-- 右選單 -->
        <div class="wave2 side-menu-wrapper-right">
          <div class="side-menu-body">
            <div class="d-flex flex-column">
              
              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C" title="粽夏樂回饋">粽夏樂回饋</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D" title="粽金抽好禮">粽金抽好禮</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-F" title="新友粽情抽">新友粽情抽</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E" title="限時瘋殺搶">限時瘋殺搶</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B" title="新客拿銀幣">新客拿銀幣</button>
                
                
              </div>
              
              <div class="d-flex flex-column justify-content-around side-menu-group-2">
                <a href="#sectionA" class="btn rounded-0" title="粽情重義">粽情重義</a>
                <a href="#sectionB" class="btn rounded-0" title="粽享好物">粽享好物</a>
                <a href="#sectionC" class="btn rounded-0" title="放粽魅力">放粽魅力</a>
                <a href="#sectionD" class="btn rounded-0" title="樂活粽夏">樂活粽夏</a>
              </div>

              <div class="d-flex flex-column side-menu-group-3">
                <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')" title="點我看更多">點我看更多</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      
      
      <div class="primary-section d-flex flex-column align-items-center p-2 position-relative" style="z-index: 10">

        <div class="primary-section-group d-flex flex-column justify-content-center align-items-center">
          
          <div class="row g-0 p-0 d-flex justify-content-center align-items-center w-100">

            <div id="swpPrimaryBtn1Wrapper" class="col-6 col-md-3 d-block text-center p-1" style="overflow-x: clip;">
              <div id="swpPrimaryBtn1" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-1">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave2/primary-btn-1.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave2/mobile/primary-btn-1.png" alt="滿額送最高600銀幣">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="swpPrimaryBtn2Wrapper" class="col-6 col-md-3 d-block text-center p-1" style="overflow-x: clip;">
              <div id="swpPrimaryBtn2" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-2">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-D">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave2/primary-btn-2.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave2/mobile/primary-btn-2.png" alt="618加碼抽5000金幣">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="swpPrimaryBtn3Wrapper" class="col-6 col-md-3 d-block text-center p-1" style="overflow-x: clip;">
              <div id="swpPrimaryBtn3" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-3-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-E">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave2/primary-btn-3-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave2/mobile/primary-btn-3-a.png" alt="618限時瘋殺">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide primary-btn-3-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-A">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave2/primary-btn-3-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave2/mobile/primary-btn-3-b.png" alt="註冊送好禮">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="swpPrimaryBtn4Wrapper" class="col-6 col-md-3 d-block text-center p-1" style="overflow-x: clip;">
              <div id="swpPrimaryBtn4" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-4-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-F">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave2/primary-btn-4-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave2/mobile/primary-btn-4-a.png" alt="抽Jo malone護手霜">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide primary-btn-1-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-B">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave2/primary-btn-4-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave2/mobile/primary-btn-4-b.png" alt="新客首購禮">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          
          

          

          
            
        </div>

      </div>


      <div v-if="ecOnly" id="ecOnly" class="py-3 py-xl-4" style="z-index: 9;">
        <div class="ec-only-section d-flex flex-column mx-auto">

          <div class="ec-only-title text-center mb-3">
            <div>
              <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave2/section-title-econly.png" alt="618限時瘋殺">
              <div class="ec-only-title-overlay"></div>
            </div>
          </div>

          <div class="nav btn-nav-group flex-wrap justify-content-center nav-pills mb-3" id="pills-tab" role="tablist">
            <a class="btn-nav" href="#pills-S12" id="pills-0612-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-612.png" alt="6/12">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-612-hover.png" alt="6/12">
            </a>
            <a class="btn-nav" href="#pills-S13" id="pills-0613-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-613.png" alt="6/13">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-613-hover.png" alt="6/13">
            </a>
            <a class="btn-nav" href="#pills-S14" id="pills-0614-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-614.png" alt="6/14">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-614-hover.png" alt="6/14">
            </a>
            <a class="btn-nav" href="#pills-S15" id="pills-0615-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-615.png" alt="6/15">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-615-hover.png" alt="6/15">
            </a>
            <a class="btn-nav" href="#pills-S16" id="pills-0616-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-616.png" alt="6/16">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-616-hover.png" alt="6/16">
            </a>
            <a class="btn-nav" href="#pills-S17" id="pills-0617-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-617.png" alt="6/17">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-617-hover.png" alt="6/17">
            </a>
            <a class="btn-nav" href="#pills-S18" id="pills-0618-tab" data-bs-toggle="pill">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-618.png" alt="6/18">
              <img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/nav-618-hover.png" alt="6/18">
            </a>
          </div>

          <div class="tab-content mb-3" id="pills-tabContent">
            <div id="pills-S12" class="tab-pane" role="tabpanel" aria-labelledby="pills-S12-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div class="d-flex flex-column">
                  <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch mb-2 mb-xl-4 p-1">
                    <div v-if="item.type === 'S12'" v-for="item in items" class="p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column p-1 p-xl-3">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-100 text-center">
                    <a href="https://www.vivatv.com.tw/category/tertiaryCategory/19F86FCAA5C139B4E06400144FF82309"><img class="img-fluid" src="images/act/2024/05/sp/images/wave2/btn-more.png"></a>
                  </div>
                </div>
              </div>
            </div>
            <div id="pills-S13" class="tab-pane" role="tabpanel" aria-labelledby="pills-S13-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div class="d-flex flex-column">
                  <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch mb-2 mb-xl-4">
                    <div v-if="item.type === 'S13'" v-for="item in items" class="p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column p-1 p-xl-3">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-100 text-center">
                    <a href="https://www.vivatv.com.tw/category/tertiaryCategory/19F86FCAA5D739B4E06400144FF82309"><img class="img-fluid" src="images/act/2024/05/sp/images/wave2/btn-more.png"></a>
                  </div>
                </div>
              </div>
            </div>
            <div id="pills-S14" class="tab-pane" role="tabpanel" aria-labelledby="pills-S14-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div class="d-flex flex-column">
                  <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch mb-2 mb-xl-4">
                    <div v-if="item.type === 'S14'" v-for="item in items" class="p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column p-1 p-xl-3">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-100 text-center">
                    <a href="https://www.vivatv.com.tw/category/tertiaryCategory/19F86FCAA5D839B4E06400144FF82309"><img class="img-fluid" src="images/act/2024/05/sp/images/wave2/btn-more.png"></a>
                  </div>
                </div>
              </div>
            </div>
            <div id="pills-S15" class="tab-pane" role="tabpanel" aria-labelledby="pills-S15-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div class="d-flex flex-column">
                  <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch mb-2 mb-xl-4">
                    <div v-if="item.type === 'S15'" v-for="item in items" class="p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column p-1 p-xl-3">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-100 text-center">
                    <a href="https://www.vivatv.com.tw/category/tertiaryCategory/19F87AA7AB683CEBE06400144FF82309"><img class="img-fluid" src="images/act/2024/05/sp/images/wave2/btn-more.png"></a>
                  </div>
                </div>
              </div>
            </div>
            <div id="pills-S16" class="tab-pane" role="tabpanel" aria-labelledby="pills-S16-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div class="d-flex flex-column">
                  <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch mb-2 mb-xl-4">
                    <div v-if="item.type === 'S16'" v-for="item in items" class="p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column p-1 p-xl-3">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-100 text-center">
                    <a href="https://www.vivatv.com.tw/category/tertiaryCategory/19F86FCAA5D939B4E06400144FF82309"><img class="img-fluid" src="images/act/2024/05/sp/images/wave2/btn-more.png"></a>
                  </div>
                </div>
              </div>
            </div>
            <div id="pills-S17" class="tab-pane" role="tabpanel" aria-labelledby="pills-S17-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div class="d-flex flex-column">
                  <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch mb-2 mb-xl-4">
                    <div v-if="item.type === 'S17'" v-for="item in items" class="p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column p-1 p-xl-3">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-100 text-center">
                    <a href="https://www.vivatv.com.tw/category/tertiaryCategory/19F86FCAA5DA39B4E06400144FF82309"><img class="img-fluid" src="images/act/2024/05/sp/images/wave2/btn-more.png"></a>
                  </div>
                </div>
              </div>
            </div>
            <div id="pills-S18" class="tab-pane" role="tabpanel" aria-labelledby="pills-S18-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div class="d-flex flex-column">
                  <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch mb-2 mb-xl-4">
                    <div v-if="item.type === 'S18'" v-for="item in items" class="p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                      <div class="item-inner d-flex flex-column p-1 p-xl-3">
                        <div v-if="item.available" class="item-body">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-else class="item-body">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="318" height="318"></a>
                        </div>
                        <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                          <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1">
                          <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                          
                          <div v-if="item.before" class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">熱銷一空</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-100 text-center">
                    <a href="https://www.vivatv.com.tw/category/tertiaryCategory/19F86FCAA5DB39B4E06400144FF82309"><img class="img-fluid" src="images/act/2024/05/sp/images/wave2/btn-more.png"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      
      
      <!-- nav -->
      <div id="navBar" class="btn-nav-group wave2 d-flex flex-column justify-content-center align-items-center py-3 py-xl-4">
        <div class="navbar-inner d-flex justify-content-center align-items-center position-relative">
          <a id="Btn1" data-wow-delay="0s" class="d-block btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionA">
            <img src="images/act/2024/05/sp/images/wave2/nav-1.png" class="img-fluid">
            <img src="images/act/2024/05/sp/images/wave2/nav-1-hover.png" class="img-fluid">
          </a>
          <a id="Btn2" data-wow-delay="0s" class="d-block btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionB">
            <img src="images/act/2024/05/sp/images/wave2/nav-2.png" class="img-fluid">
            <img src="images/act/2024/05/sp/images/wave2/nav-2-hover.png" class="img-fluid">
          </a>
          <a id="Btn3" data-wow-delay="0s" class="d-block btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionC">
            <img src="images/act/2024/05/sp/images/wave2/nav-3.png" class="img-fluid">
            <img src="images/act/2024/05/sp/images/wave2/nav-3-hover.png" class="img-fluid">
          </a>
          <a id="Btn4" data-wow-delay="0s" class="d-block btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionD">
            <img src="images/act/2024/05/sp/images/wave2/nav-4.png" class="img-fluid">
            <img src="images/act/2024/05/sp/images/wave2/nav-4-hover.png" class="img-fluid">
          </a>
        </div>
      </div>
      
      <div id="publicGrid" class="wave2 position-relative" style="z-index: 9;">


        <!-- 公格 -->
        <div class="w-100 position-relative">

          <div class="container-fluid p-0 g-0 position-relative" style="z-index: 99;">
            <div class="row g-0 justify-content-center">

              

              <!-- A -->
              <div id="sectionA" class="col-12">
                <!-- <div class="section-bg-item">
                  <div class="zongzi-left-1"></div>
                  <div class="zongzi-right-1"></div>
                  <div class="zongzi-right-2 wow fadeInRight"></div>
                </div> -->
                <div class="section-wrapper section-a position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave2/section-title-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave2/mobile/section-title-a.png" alt="section-title-a">
                      </picture>
                      <!-- <div class="section-zongzi-1"></div>
                      <div class="section-zongzi-2"></div>
                      <div class="section-zongzi-3"></div>
                      <div class="section-zongzi-4"></div> -->
                    </div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'A1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-lg-2">
                            <div class="d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>
              
              <!-- B -->
              <div id="sectionB" class="col-12">
                <!-- <div class="section-bg-item">
                  <div class="zongzi-left-2 wow fadeInLeft"></div>
                </div> -->
                <div class="section-wrapper section-b position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave2/section-title-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave2/mobile/section-title-b.png" alt="section-title-b">
                      </picture>
                      <!-- <div class="section-title-boat"></div> -->
                    </div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'B1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-lg-2">
                            <div class="d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>

              

              

              <!-- C -->
              <div id="sectionC" class="d-flex flex-column align-items-center col-12">
                <!-- <div class="section-bg-item">
                  <div class="zongzi-left-1"></div>
                  <div class="zongzi-right-1"></div>
                  <div class="zongzi-right-2 wow fadeInRight"></div>
                </div> -->
                <div class="section-wrapper section-c position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave2/section-title-c.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave2/mobile/section-title-c.png" alt="section-title-c">
                      </picture>
                      <!-- <div class="section-zongzi-1"></div>
                      <div class="section-zongzi-2"></div>
                      <div class="section-zongzi-3"></div>
                      <div class="section-zongzi-4"></div> -->
                    </div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'C1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-lg-2">
                            <div class="d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              

                <!-- swpD -->
                <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section mb-4 mb-xl-5" data-wow-offset="50" data-wow-delay="0.2s">
                  <div class="swiper-custom">
                    <div id="swpD" class="swiper-container">
                      <div class="swiper-wrapper">

                        <div class="swiper-slide">
                          <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/1B2842A85323105FE06400144FF9CEC6">
                            <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1B3591DB70CF51ADE06400144FF82309_m.jpg?t=1718762460147" alt="【首頁下排廣告】【森繆斯】抗夏對策促銷活動">
                          </a>
                        </div>

                        <div class="swiper-slide">
                          <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/166AEA46DBA16B1BE06400144FF82309">
                            <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1B266DA9668A3D8EE06400144FF82309_m.jpg?t=1718697538555" alt="【首頁下排廣告】【FORTE】御潤品牌_長期">
                          </a>
                        </div>

                        <div class="swiper-slide">
                          <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB35BBF445C34E2E05400144FF9CEC6">
                            <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1A47D596C3E05AAFE06400144FF9CEC6_m.jpg?t=1717741431752" alt="【首頁下排廣告】【田倉】年中慶_即日起-0630">
                          </a>
                        </div>

                        <div class="swiper-slide">
                          <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/D006F4A0C9735BC2E05400144FF9CEC6">
                            <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1A0AE6ECE81B558BE06400144FF9CEC6_m.jpg?t=1717480167228" alt="【首頁下排廣告】M2nd_0604-0731">
                          </a>
                        </div>

                        <div class="swiper-slide">
                          <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/15C9BF63B02444DBE06400144FF9CEC6">
                            <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/15E3285A27044AEDE06400144FF82309_m.jpg?t=1712911016876" alt="【首頁下排廣告】cctogo_長期">
                          </a>
                        </div>

                        <div class="swiper-slide">
                          <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/07E4434A2DCD71E1E06400144FF82309">
                            <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/15E330E0A0084AE7E06400144FF82309_m.jpg?t=1712911087865" alt="【首頁下排廣告】日本味王_長期">
                          </a>
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

              
              <!-- D -->
              <div id="sectionD" class="d-flex flex-column align-items-center col-12">
                <!-- <div class="section-bg-item">
                  <div class="zongzi-left-2 wow fadeInLeft"></div>
                </div> -->
                <div class="section-wrapper section-d position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/05/sp/images/wave2/section-title-d.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/05/sp/images/wave2/mobile/section-title-d.png" alt="section-title-d">
                      </picture>
                      <!-- <div class="section-title-boat"></div> -->
                    </div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'D1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-lg-2">
                            <div class="d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              

              
              
                <!-- 銀行優惠 -->
                <div class="swp-banner-section swp-bank-section col-12 px-2">
                  <div class="d-flex flex-column rounded-3">
                    <div>
                      <a href="https://www.vivatv.com.tw/html/202406_creditcard.html">
                        <img src="images/act/2024/05/sp/images/header-bank.jpg" class="img-fluid us-none">
                      </a>
                    </div>
                    <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                      <div class="swiper-wrapper">
                        
                        <div class="swiper-slide">
                          <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-dbs" class="d-block">
                            <div class="card h-100 border-end rounded-0">
                              <img src="images/act/2024/05/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                              <div class="card-body border-top p-2">
                                <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-sinopac" class="d-block">
                            <div class="card h-100 border-end rounded-0">
                              <img src="images/act/2024/05/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                              <div class="card-body border-top p-2">
                                <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">4800</span></p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-feib" class="d-block">
                            <div class="card h-100 border-end rounded-0">
                              <img src="images/act/2024/05/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                              <div class="card-body border-top p-2">
                                <p class="card-text text-center text-dark">分期滿額回饋<br><span class="fw-bold text-danger">180</span>元刷卡金</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-scsb" class="d-block">
                            <div class="card h-100 border-end rounded-0">
                              <img src="images/act/2024/05/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                              <div class="card-body border-top p-2">
                                <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">1200</span>元刷卡金</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-ubot" class="d-block">
                            <div class="card h-100 border-end rounded-0">
                              <img src="images/act/2024/05/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                              <div class="card-body border-top p-2">
                                <p class="card-text text-center text-dark">刷聯邦卡<br><span class="fw-bold text-danger">滿額送刷卡金</span></p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-first" class="d-block">
                            <div class="card h-100 border-end rounded-0">
                              <img src="images/act/2024/05/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
                              <div class="card-body border-top p-2">
                                <p class="card-text text-center text-dark">享2%回饋<br><span class="fw-bold text-danger">指定卡再加碼</span></p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-dbs" class="d-block">
                            <div class="card h-100 border-end rounded-0">
                              <img src="images/act/2024/05/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                              <div class="card-body border-top p-2">
                                <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-sinopac" class="d-block">
                            <div class="card h-100 border-end rounded-0">
                              <img src="images/act/2024/05/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                              <div class="card-body border-top p-2">
                                <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">4800</span></p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-feib" class="d-block">
                            <div class="card h-100 border-end rounded-0">
                              <img src="images/act/2024/05/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                              <div class="card-body border-top p-2">
                                <p class="card-text text-center text-dark">分期滿額回饋<br><span class="fw-bold text-danger">180</span>元刷卡金</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-scsb" class="d-block">
                            <div class="card h-100 border-end rounded-0">
                              <img src="images/act/2024/05/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                              <div class="card-body border-top p-2">
                                <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">1200</span>元刷卡金</p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-ubot" class="d-block">
                            <div class="card h-100 border-end rounded-0">
                              <img src="images/act/2024/05/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                              <div class="card-body border-top p-2">
                                <p class="card-text text-center text-dark">刷聯邦卡<br><span class="fw-bold text-danger">滿額送刷卡金</span></p>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div class="swiper-slide">
                          <a href="https://www.vivatv.com.tw/html/202406_creditcard.html#card-first" class="d-block">
                            <div class="card h-100 border-end rounded-0">
                              <img src="images/act/2024/05/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
                              <div class="card-body border-top p-2">
                                <p class="card-text text-center text-dark">享2%回饋<br><span class="fw-bold text-danger">指定卡再加碼</span></p>
                              </div>
                            </div>
                          </a>
                        </div>

                        
                      </div>
                      
                    </div>
                    
                  </div>
                </div>

              </div>


              
            </div>
          </div>

          <!-- <div><img class="img-fluid us-none" src="images/act/2024/05/sp/images/wave2/page-bottom-cloud.png" alt="page bottom cloud"></div> -->
        </div>
      </div>

    </div>
    

  </div>
</template>


<script>
module.exports = {
  data: function() {
    return {
      isLoading: false,
      failed: false,
      imgError: 'this.src="/html/images/act/2024/05/sp/images/img-error.png"',
      items: [],
      wave1: false,
      wave2: false,
      ecOnly: false,
      start_0612: false,
      start_0613: false,
      start_0614: false,
      start_0615: false,
      start_0616: false,
      start_0617: false,
      start_0618: false
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = (window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2024/05/sp/json/data.json";
      var path2 = (window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2024/05/sp/json/data2.json";
      var path;

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
      


      if ( moment(timeNow).isBetween('2024-05-10 00:00:00', '2024-06-04 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
      }

      if ( moment(timeNow).isBetween('2024-06-05 00:00:00', '2099-06-23 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
        document.body.classList.add('wave2');
      }

      if ( moment(timeNow).isBetween('2024-06-04 00:00:00', '2024-06-18 23:59:59', 'second', '[]') ) {
        this.ecOnly = true;
      }

      if ( moment(timeNow).isBetween('2024-06-12 00:00:00', '2024-06-18 23:59:59', 'second', '[]') ) {
        this.start_0612 = true;
      }
      if ( moment(timeNow).isBetween('2024-06-13 00:00:00', '2024-06-18 23:59:59', 'second', '[]') ) {
        this.start_0613 = true;
      }
      if ( moment(timeNow).isBetween('2024-06-14 00:00:00', '2024-06-18 23:59:59', 'second', '[]') ) {
        this.start_0614 = true;
      }
      if ( moment(timeNow).isBetween('2024-06-15 00:00:00', '2024-06-18 23:59:59', 'second', '[]') ) {
        this.start_0615 = true;
      }
      if ( moment(timeNow).isBetween('2024-06-16 00:00:00', '2024-06-18 23:59:59', 'second', '[]') ) {
        this.start_0616 = true;
      }
      if ( moment(timeNow).isBetween('2024-06-17 00:00:00', '2024-06-18 23:59:59', 'second', '[]') ) {
        this.start_0617 = true;
      }
      if ( moment(timeNow).isBetween('2024-06-18 00:00:00', '2024-06-18 23:59:59', 'second', '[]') ) {
        this.start_0618 = true;
      }

      
      

      path = path1;

      


      if (timeFromURL) {
        // dataTime = timeFromURL.substr(4, 4);
        dataTime = timeFromURL;
        console.log('dataTime: ' + dataTime);
        
      } else {
        dataTime = year + month + date;
        console.log('dataTime: ' + dataTime);
        
        function showTimer() {
          
          console.log('從簽到頁來的');
          
          document.querySelector('#signInTimer').style.display = 'block';

          var signInStart = 10;

          const countdown = () => {
          let timer = document.getElementById("signInSeconds");
          // let dt = new Date();
          // let m = dt.getMinutes();
          // let s = dt.getSeconds();
          

          // minutes remaining until next 10 minute mark
          // m = s ? 9 - (m % 10) : 10 - (m % 10);

          // seconds remaining until next minute mark
            if (signInStart > 0) {
              signInStart = signInStart - 1 ;
              console.log('signInStart: ' + signInStart );
              timer.textContent = signInStart;
            }
            else if (signInStart == 0) {
              document.querySelector('#secondsRemain').style.display = 'none';
              document.querySelector('#questComplete').style.display = 'block';
            }

          // timer.textContent = `${s < 10 ? "0" + s : s} `;
          };
       

          setInterval(countdown, 1000);


          signInDate = year + month + date;
          

          var str = 'OK';
          console.log('***signInDate:', signInDate);
          localStorage.setItem(signInDate, str);

          
        }


        let fromSignInEvent = this.getUrlParameter('f');
          if (fromSignInEvent == 'dailycheckin') {
            showTimer();
          }
        }



      
      

      if ( moment(timeNow).isSameOrBefore('2024-06-04 23:59:59') ) {
        path = path1;
      } else {
        path = path2;
      }



      console.log('path:'+path);




      // 倒數計時
      var eventTime = moment('2024-04-28 10:12:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');

      if (timeFromURL) {
        var hhmmFromURL = timeFromURL.substr(8,2) + ':' + timeFromURL.substr(10,2) + ':00' ;
        console.log('hhmmFromURL:'+hhmmFromURL);
        currentTime = moment(hhmmFromURL, 'HH:mm:ss').diff(moment().startOf('year'), 'seconds');
        console.log('currentTime:'+currentTime);
      }

      console.log('eventTime: '+eventTime);
      
        
      var currentTime = moment().diff(moment().startOf('year'), 'seconds');
      
      console.log('currentTime: '+ currentTime);

      var diffTime = eventTime - currentTime;
        
        

      var timer = setInterval(function(){

        currentTime = moment().diff(moment().startOf('year'), 'seconds');

        

        diffTime = eventTime - currentTime;
        
        if (diffTime > 0) {

          var duration = moment.duration(diffTime*1000, 'milliseconds');
          var m = duration.months();
          var d = duration.days();
          var md = m*30 + d;
          
          

          $('.countdown').html(
            '倒數&ensp;' +
            '<span class="countdown-number">' + String(md).padStart(2, '0').substr(0,1) + '</span>' + 
            '<span class="countdown-number">' + String(md).padStart(2, '0').substr(1,1) + '</span> 天 ' + 
            '<span class="countdown-number">' + String(duration.hours()).padStart(2, '0').substr(0,1) + '</span>' + 
            '<span class="countdown-number">' + String(duration.hours()).padStart(2, '0').substr(1,1) + '</span> 時 ' + 
            '<span class="countdown-number">' + String(duration.minutes()).padStart(2, '0').substr(0,1) + '</span>' + 
            '<span class="countdown-number">' + String(duration.minutes()).padStart(2, '0').substr(1,1) + '</span> 分 ' + 
            '<span class="countdown-number">' + String(duration.seconds()).padStart(2, '0').substr(0,1) + '</span>' +
            '<span class="countdown-number">' + String(duration.seconds()).padStart(2, '0').substr(1,1) + '</span> 秒 ' );
        } else {
          $('.tvoneday-timer').hide();
          $('.countdown').hide();
          clearInterval(timer);
        }

      }, 1000);
          

      axios.get(path)
      .then(function(response){
        let data = response.data;
        self.isLoading = false;
        self.items = data;
        self.generateURL();
        self.checkDate();
        setInterval(function(){
          setTimeout(function(){
            self.checkDate();
          }, 0);
        }, 1000);
      })
    },
    generateURL: function() {
      for (let i=0; i < this.items.length; i++) {
        this.$set(this.items[i], "url", 'https://www.vivatv.com.tw/goods/' + this.items[i].id);
        this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.' + this.items[i].file );

        // if (this.items[i].id == '3079912022' || this.items[i].id == '2988582021' || this.items[i].id == '3120592023' || this.items[i].id == '3120482023' || this.items[i].id == '3134982023') {
        //   this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.png');
        // } else {
        //   this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
        // }

        // if (this.items[i].id == '2960272021') {
        //   this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.gif');
        // } else {
        //   this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
        // }
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2024/05/sp/images/product/'+ this.items[i].id +'/1.jpg');
      }
    },
    checkDate: function() {
      moment.locale('zh-tw');
      //Convert current time to moment object with utc time
      let utcTime = moment.utc().format('YYYY-MM-DD[T]HH:mm[Z]');
      let stillUtc = moment.utc(utcTime).toDate();
      let localTime = moment(stillUtc).local().format('YYYY-MM-DD[T]HH:mm[Z]');
      localTimeUtc = moment.utc(localTime, 'YYYY-MM-DD[T]HH:mm[Z]');

      let timeFromURL = this.getUrlParameter('t');
      if (timeFromURL) {
        //String is already in utc time, but still need to put it into utc mode
        localTimeUtc = moment.utc(timeFromURL, 'YYYY-MM-DD[T]HH:mm[Z]');
        
      }

      
      

      for (let j=0; j < this.items.length; j++) {
        let targetStart = moment.utc(this.items[j].start, 'YYYY-MM-DD[T]HH:mm[Z]');
        let targetEnd = moment.utc(this.items[j].end, 'YYYY-MM-DD[T]HH:mm[Z]');
        
        // this.items[j].launch = this.items[j].start.substr(11,5);
        // console.log('this.items[j].start: '+ this.items[j].start);
        this.items[j].launch = this.items[j].start.substr(5,11);

        // this.items[j].launch = this.items[j].start.substr(5,6);

        // this.items[j].launch = moment(this.items[j].start).local().format('MM-DD[T]HH:mm[Z]');
        // localTime = moment(stillUtc).local().format('YYYY-MM-DD[T]HH:mm[Z]');
        // if (moment(targetStart).isAfter(localTimeUtc)) {
        //   this.items[j].available = false;
        // } else {
        //   this.items[j].available = true;
        // }

        if ( moment(localTimeUtc).isBetween(targetStart, targetEnd, 'seconds', '[]') ) {
          this.items[j].available = true;
        } 
        else {
          if ( moment(localTimeUtc).isAfter(targetEnd) ) {
            this.items[j].available = false;
            this.items[j].before = false;
          } else {
            this.items[j].available = false;  
          }
          
        }


        if (timeFromURL == '20231112T235959') {
          this.items[j].available = true;
        }


        

        

      }
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
    isLoad: function(e) {
      // console.log(e.target.naturalWidth);

      var t = e.target.alt;
      
      // console.log('e.target.alt:' + t);

      if (e.target.naturalWidth == 1) {
        
        e.target.src = "/html/images/act/2024/05/sp/images/product/"+ t +".jpg";

      }

      
    },
    altImage: function(e) {
      

      var t = e.target.alt;
      e.target.src = "/html/images/act/2024/05/sp/images/product/"+ t +".jpg";
      

      if (e.target.imgchecked) {
        e.target.src = "/html/images/act/2024/05/sp/images/img-error.png";
      } else {
        e.target.src = "/html/images/act/2024/05/sp/images/product/"+ t +".jpg";
      }

      if (e.target.naturalWidth == 1) {
        e.target.src = "/html/images/act/2024/05/sp/images/product/"+ t +".jpg";

      }

      
      e.target.imgchecked = true;
      e.target.onerror = null;

      
    }
  },
  mounted: function() {   
    this.isLoading = true;
    this.initItem();

      // init the observer
      const options = {
        rootMargin: '0px 0px -50% 0px',
        threshold: [0, 1]
      }

      const options2 = {
        rootMargin: '-1px 0px 0px 0px',
        threshold: [1]
      }


      // setTimeout(function(){

      //   const observer = new IntersectionObserver(changeNav, options);
      //   const section = document.querySelectorAll('.section-observer');
      //   if (section) {
      //     section.forEach((el) => {
      //       observer.observe(el);
      //     });
      //   }
      

      //   const stickyElm = document.querySelector('.btn-nav-group');
      //   const stickyBlackFridayNav = document.querySelector('#blackFridayNav');

      //   const observer2 = new IntersectionObserver( 
      //     ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
      //     {
      //       rootMargin: '-1px 0px 0px 0px',
      //       threshold: [1]
      //     }
      //   );
      //   if (stickyElm) {
      //     observer2.observe(stickyElm);
      //   }

      //   if (stickyBlackFridayNav) {
      //     observer2.observe(stickyBlackFridayNav);
      //   }


        

      // }, 2000);
      
      


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

      
      if (moment(timeNow).isBetween('2024-05-20 00:00:00', '2024-06-11 23:59:59', 'second', '[]')) {
        var dateNow = '0612';
      } else {
        var dateNow = timeNow.substr(5,2) + timeNow.substr(8,2);
      }
      

      console.log('dateNow:'+dateNow);

      

      setTimeout(()=>{
        var triggerEl = document.querySelector('#pills-'+ dateNow +'-tab');  
        if (triggerEl) {
            new bootstrap.Tab(triggerEl).show(); 
            $('#pills-'+ dateNow +'-tab').click();
        }

        // const tabEl = document.querySelector('button[data-bs-toggle="pill"]')

        // tabEl.addEventListener('shown.bs.tab', event => {
        //   console.log('tabEl.id: '+tabEl.id);
        // })
      }, 1500);



      
    
      



    // this.interval = setInterval(this.checkDate, 1000);
    // this.interval = setInterval(function(){
    //   this.checkDate
    // }, 1000);
  },
  // beforeDestroy: function() {
  //   clearInterval(this.interval);
  // }
}
</script>

