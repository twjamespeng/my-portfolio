<template>
  
  <div>
    
    

    <div v-if="wave1" class="main-section wave1 d-flex flex-column align-items-center" style="z-index: 2;">

      <div class="left-1-bg"></div>
      <div class="right-1-bg"></div>
      <div class="left-2-bg"></div>
      <div class="right-2-bg"></div>

      <div class="left-1-bg repeat-1"></div>
      <div class="right-1-bg repeat-1"></div>
      <div class="left-2-bg repeat-1"></div>
      <div class="right-2-bg repeat-1"></div>

      <div class="left-1-bg repeat-2"></div>
      <div class="right-1-bg repeat-2"></div>
      <div class="left-2-bg repeat-2"></div>
      <div class="right-2-bg repeat-2"></div>

      <div class="sticky-side-menu">
        

        <div class="content">
          <div class='film'>
            <div class="effect">
              <div class="grain"></div>
            </div>
          </div>
        </div>

        <!-- 左選單 -->
        <div class="wave1 side-menu-wrapper-left">
          <div class="side-menu-body">
            <div class="d-flex flex-column">

              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/077F6E06AA6D020FE06400144FF9CEC6')" title="時尚魅力">時尚魅力</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/0A15010A39B50423E06400144FF9CEC6')" title="放鬆輕旅">放鬆輕旅</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/flagShip/flagshipBrand/CC06B5DEBBD12A06E05400144FF9CEC6')" title="居家品質">居家品質</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309')" title="異國情調">異國情調</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/077F6E069D24020FE06400144FF9CEC6')" title="美好營區">美好營區</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309')" title="休閒時光">休閒時光</button>
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
          <div class="side-menu-left-note-1"></div>
          <div class="side-menu-left-note-2"></div>
        </div>
        <!-- 右選單 -->
        <div class="wave1 side-menu-wrapper-right">
          <div class="side-menu-body">
            <div class="d-flex flex-column">
              
              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D" title="萬元美好禮券">萬元美好禮券</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C" title="送5.2萬元銀幣">送5.2萬元銀幣</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E" title="寵愛三重抽">寵愛三重抽</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B" title="玩美滿額抽">玩美滿額抽</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-I" title="簽到拿金幣">簽到拿金幣</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-A" title="註冊拿銀幣">註冊拿銀幣</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-G" title="互動抽冰淇淋">互動抽冰淇淋</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-H" title="滿額抽玫瑰水">滿額抽玫瑰水</button>
                
              </div>
              
              <div class="d-flex flex-column justify-content-around side-menu-group-2">
                <a href="#sectionA" class="btn rounded-0" title="摯愛獻禮">摯愛獻禮</a>
                <a href="#sectionB" class="btn rounded-0" title="寵愛女王">寵愛女王</a>
                <a href="#sectionC" class="btn rounded-0" title="綻放美麗">綻放美麗</a>
                <a href="#sectionD" class="btn rounded-0" title="珍愛女人">珍愛女人</a>
                <a href="#sectionE" class="btn rounded-0" title="呵護幸福">呵護幸福</a>
              </div>

              <div class="d-flex flex-column side-menu-group-3">
                <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')" title="點我看更多">點我看更多</button>
              </div>

            </div>
          </div>
          <div class="side-menu-right-disc"></div>
          <div class="side-menu-right-text"></div>
        </div>
      </div>

      
      
      <div class="primary-section d-flex flex-column align-items-center p-2 position-relative" style="z-index: 10">

        <div class="primary-section-group d-flex flex-column justify-content-center align-items-center">
          
          <div class="row g-0 p-0 d-flex justify-content-center align-items-center w-100">

            <div id="swpPrimaryBtn1Wrapper" class="col-6 col-md-3 d-block text-center" style="overflow-x: clip;">
              <div id="swpPrimaryBtn1" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-1-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-E">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/primary-btn-1-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/primary-btn-1-a.png" alt="寵愛超有禮">
                      </picture>
                    </a>
                  </div>
                  <!-- <div class="swiper-slide primary-btn-1-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-D">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/primary-btn-1-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/primary-btn-1-b.png" alt="下單抽萬元禮券">
                      </picture>
                    </a>
                  </div> -->
                </div>
              </div>
            </div>

            <div id="swpPrimaryBtn2Wrapper" class="col-6 col-md-3 d-block text-center" style="overflow-x: clip;">
              <div id="swpPrimaryBtn2" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-2-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/primary-btn-2-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/primary-btn-2-a.png" alt="送5.2萬銀幣">
                      </picture>
                    </a>
                  </div>
                  <div v-if="duration_0403_0501" class="swiper-slide primary-btn-2-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-G">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/primary-btn-2-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/primary-btn-2-b.png" alt="抽麥當勞蛋捲冰淇淋">
                      </picture>
                    </a>
                  </div>
                  <div v-if="duration_0426_0512" class="swiper-slide primary-btn-2-c">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-H">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/primary-btn-2-c.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/primary-btn-2-c.png" alt="抽玫瑰水">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="swpPrimaryBtn3Wrapper" class="col-6 col-md-3 d-block text-center" style="overflow-x: clip;">
              <div id="swpPrimaryBtn3" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-3-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-A">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/primary-btn-3-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/primary-btn-3-a.png" alt="註冊送銀幣">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide primary-btn-3-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-B">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/primary-btn-3-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/primary-btn-3-b.png" alt="首購送銀幣">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="swpPrimaryBtn4Wrapper" class="col-6 col-md-3 d-block text-center" style="overflow-x: clip;">
              <div id="swpPrimaryBtn4" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div v-if="duration_0403_0412" class="swiper-slide primary-btn-4-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-I">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/primary-btn-4-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/primary-btn-4-a.png" alt="【簽到送金幣】第一波">
                      </picture>
                    </a>
                  </div>
                  <!-- <div v-if="duration_0413_0510" class="swiper-slide primary-btn-4-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-J">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/primary-btn-4-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/primary-btn-4-b.png" alt="【簽到送金幣】第二波">
                      </picture>
                    </a>
                  </div> -->
                  <div class="swiper-slide primary-btn-1-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-D">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/primary-btn-1-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/primary-btn-1-b.png" alt="下單抽萬元禮券">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          
          

          

          
            
        </div>

      </div>
      
      <div v-if="tvoneday" id="tvOneDay" class="px-2" style="z-index: 9;">
        <div class="tvoneday-section d-flex flex-column mx-auto mb-3 mb-lg-5" style="z-index: 2;">
          <div class="tvoneday-timer">
            <div class="countdown text-center"></div>
          </div>
          <div class="tvoneday-header">
            
            <picture>
              <source srcset="images/act/2024/04/sp/images/wave2/section-title-tvoneday.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2024/04/sp/images/wave2/section-title-tvoneday.png" alt="美好幸運日">
            </picture>
            
          </div>
          <div class="tvoneday-body p-1 p-lg-5 pt-lg-2">
            <div class="row row-cols-2 row-cols-md-4 g-0 justify-content-center align-self-stretch">
              
              <div v-if="item.type === 'S1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay" :data-item-id="item.id">
                <div class="item-inner d-flex flex-column h-100 p-1 p-xl-2">
                  <div class="d-flex flex-column p-2">
                    <div v-if="item.available" class="item-body mb-xl-3">
                      <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                    </div>
                    <div v-else-if="item.before" class="item-body mb-xl-3">
                      <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                    </div>
                    <div v-else-if="item.id === '3110862023'" class="item-body mb-xl-3">
                      <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                    </div>
                    <div v-else class="item-body mb-xl-3">
                      <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                    </div>
                    <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                      <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                      <div class="item-name double-lines d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                      <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                    </div>
                    <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                      <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                      <div class="item-name double-lines d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                      <div class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                    </div>
                    <div v-else-if="item.id === '3110862023'" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                      <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                      <div class="item-name double-lines d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                      <div class="item-price text-center mb-1"><span class="fw-normal fs-6">熱銷一空</span></div>
                      <!-- <div v-else class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div> -->
                    </div>
                    <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                      <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                      <div class="item-name double-lines d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                      <!-- <div v-if="item.id === '3110862023'" class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div> -->
                      <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 公格navBar -->
      <div id="publicGrid" class="wave1 position-relative" style="z-index: 9;">
        

        <!-- 公格 -->
        <div class="w-100 position-relative">

          <div class="container-lg px-2 g-0 position-relative" style="z-index: 99;">
            <div class="row g-0 justify-content-center">

              <div id="navBar" class="btn-nav-group wave1 d-flex flex-column justify-content-center align-items-center py-3 py-lg-5">
                <div class="navbar-inner d-flex justify-content-center align-items-center position-relative">
                  
                  <a id="Btn1" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionA">
                    <img src="images/act/2024/04/sp/images/wave1/nav-1.png" class="img-fluid">
                    <img src="images/act/2024/04/sp/images/wave1/nav-1-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn2" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionB">
                    <img src="images/act/2024/04/sp/images/wave1/nav-2.png" class="img-fluid">
                    <img src="images/act/2024/04/sp/images/wave1/nav-2-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn3" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionC">
                    <img src="images/act/2024/04/sp/images/wave1/nav-3.png" class="img-fluid">
                    <img src="images/act/2024/04/sp/images/wave1/nav-3-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn4" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionD">
                    <img src="images/act/2024/04/sp/images/wave1/nav-4.png" class="img-fluid">
                    <img src="images/act/2024/04/sp/images/wave1/nav-4-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn5" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionE">
                    <img src="images/act/2024/04/sp/images/wave1/nav-5.png" class="img-fluid">
                    <img src="images/act/2024/04/sp/images/wave1/nav-5-hover.png" class="img-fluid">

                  </a>
                </div>
              </div>

              <!-- A -->
              <div id="sectionA" class="col-12 mb-4 mb-xl-5">
                <div class="section-wrapper section-a position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/section-title-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/section-title-a.png" alt="section-title-a">
                      </picture>
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
              <div id="sectionB" class="col-12 mb-4 mb-xl-5">
                <div class="section-wrapper section-b position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/section-title-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/section-title-b.png" alt="section-title-b">
                      </picture>
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

              <!-- swpD -->
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section mb-4 mb-xl-5" data-wow-offset="50" data-wow-delay="0.2s">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/139B1A27F862368DE06400144FF82309">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1506E1D94AA6130FE06400144FF9CEC6_m.jpg?t=1713509392183" alt="【FULUTO 婦樂透】百歲鍋">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB35BBF445C34E2E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1506E6CEA6411306E06400144FF9CEC6_m.jpg" alt="【TAKURA 田倉】按摩椅">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/13A9ED6489593B3CE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/14275D8DD6A71925E06400144FF9CEC6_m.jpg" alt="南寶_長期">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F5E2973B605C3EECE05400144FF82309">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/14275D8DD6A81925E06400144FF9CEC6_m.jpg" alt="宜日宜日孝_春季女神">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/1412F2E4C1916046E06400144FF82309">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/14275D8DD6A61925E06400144FF9CEC6_m.jpg" alt="睡眠手環_長期">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB3CB363D6034DCE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2024/04/sp/images/bn/scent.jpg" alt="【森繆斯】">
                        </a>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>

              <!-- C -->
              <div id="sectionC" class="col-12 mb-4 mb-xl-5">
                <div class="section-wrapper section-c position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/section-title-c.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/section-title-c.png" alt="section-title-c">
                      </picture>
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

              

              
              <!-- D -->
              <div id="sectionD" class="col-12 mb-4 mb-xl-5">
                <div class="section-wrapper section-d position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/section-title-d.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/section-title-d.png" alt="section-title-d">
                      </picture>
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

              <!-- E -->
              <div id="sectionE" class="col-12 mb-4 mb-xl-5">
                <div class="section-wrapper section-e position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave1/section-title-e.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave1/mobile/section-title-e.png" alt="section-title-e">
                      </picture>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'E1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
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
              
              <div class="swp-banner-section swp-bank-section col-12">
                <div class="d-flex flex-column rounded-3">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202404_creditcard.html">
                      <img src="images/act/2024/04/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202404_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202404_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">4800</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202404_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期滿額回饋<br><span class="fw-bold text-danger">180</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202404_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">1200</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202404_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br><span class="fw-bold text-danger">滿額送刷卡金</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202404_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">享2%回饋<br><span class="fw-bold text-danger">指定卡再加碼</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202404_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202404_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">4800</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202404_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期滿額回饋<br><span class="fw-bold text-danger">180</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202404_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">1200</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202404_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br><span class="fw-bold text-danger">滿額送刷卡金</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202404_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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

          <!-- <div><img class="img-fluid us-none" src="images/act/2024/04/sp/images/wave1/page-bottom-cloud.png" alt="page bottom cloud"></div> -->
        </div>
      </div>

    </div>

    <div v-if="wave2" class="main-section wave2 d-flex flex-column align-items-center" style="z-index: 2;">

      <div class="left-1-bg"></div>
      <div class="right-1-bg"></div>
      <div class="left-2-bg"></div>
      <div class="right-2-bg"></div>

      <div class="left-1-bg repeat-1"></div>
      <div class="right-1-bg repeat-1"></div>
      <div class="left-2-bg repeat-1"></div>
      <div class="right-2-bg repeat-1"></div>

      <div class="left-1-bg repeat-2"></div>
      <div class="right-1-bg repeat-2"></div>
      <div class="left-2-bg repeat-2"></div>
      <div class="right-2-bg repeat-2"></div>

      <div class="sticky-side-menu">
        <div class="content">
          <div class='film'>
            <div class="effect">
              <div class="grain"></div>
            </div>
          </div>
        </div>

        <!-- 左選單 -->
        <div class="wave2 side-menu-wrapper-left">
          <div class="side-menu-body">
            <div class="d-flex flex-column">

              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/077F6E06AA6D020FE06400144FF9CEC6')" title="時尚魅力">時尚魅力</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/0A15010A39B50423E06400144FF9CEC6')" title="放鬆輕旅">放鬆輕旅</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/flagShip/flagshipBrand/CC06B5DEBBD12A06E05400144FF9CEC6')" title="居家品質">居家品質</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309')" title="異國情調">異國情調</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/077F6E069D24020FE06400144FF9CEC6')" title="美好營區">美好營區</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309')" title="休閒時光">休閒時光</button>
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
          <div class="side-menu-left-note-1"></div>
          <div class="side-menu-left-note-2"></div>
        </div>
        <!-- 右選單 -->
        <div class="wave2 side-menu-wrapper-right">
          <div class="side-menu-body">
            <div class="d-flex flex-column">
              
              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D" title="萬元美好禮券">萬元美好禮券</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C" title="送5.2萬元銀幣">送5.2萬元銀幣</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E" title="寵愛三重抽">寵愛三重抽</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B" title="玩美滿額抽">玩美滿額抽</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-J" title="簽到拿金幣">簽到拿金幣</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-A" title="註冊拿銀幣">註冊拿銀幣</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-G" title="互動抽冰淇淋">互動抽冰淇淋</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-H" title="滿額抽玫瑰水">滿額抽玫瑰水</button>
                
              </div>
              
              <div class="d-flex flex-column justify-content-around side-menu-group-2">
                <a href="#sectionA" class="btn rounded-0" title="摯愛獻禮">摯愛獻禮</a>
                <a href="#sectionB" class="btn rounded-0" title="寵愛女王">寵愛女王</a>
                <a href="#sectionC" class="btn rounded-0" title="綻放美麗">綻放美麗</a>
                <a href="#sectionD" class="btn rounded-0" title="珍愛女人">珍愛女人</a>
                <a href="#sectionE" class="btn rounded-0" title="呵護幸福">呵護幸福</a>
              </div>

              <div class="d-flex flex-column side-menu-group-3">
                <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')" title="點我看更多">點我看更多</button>
              </div>

            </div>
          </div>
          <div class="side-menu-right-disc"></div>
          <div class="side-menu-right-text"></div>
        </div>
      </div>

      
      
      <div class="primary-section d-flex flex-column align-items-center p-2 position-relative" style="z-index: 10">

        <div class="primary-section-group d-flex flex-column justify-content-center align-items-center">
          
          <div class="row g-0 p-0 d-flex justify-content-center align-items-center w-100">

            <div id="swpPrimaryBtn1Wrapper" class="col-6 col-md-3 d-block text-center" style="overflow-x: clip;">
              <div id="swpPrimaryBtn1" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-1-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-E">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/primary-btn-1-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/primary-btn-1-a.png" alt="寵愛超有禮">
                      </picture>
                    </a>
                  </div>
                  <div v-if="duration_0501_0510" class="swiper-slide primary-btn-1-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-D">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/primary-btn-1-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/primary-btn-1-b.png" alt="下單抽萬元禮券">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="swpPrimaryBtn2Wrapper" class="col-6 col-md-3 d-block text-center" style="overflow-x: clip;">
              <div id="swpPrimaryBtn2" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-2-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/primary-btn-2-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/primary-btn-2-a.png" alt="送5.2萬銀幣">
                      </picture>
                    </a>
                  </div>
                  <div v-if="duration_0403_0501" class="swiper-slide primary-btn-2-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-G">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/primary-btn-2-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/primary-btn-2-b.png" alt="抽麥當勞蛋捲冰淇淋">
                      </picture>
                    </a>
                  </div>
                  <div v-if="duration_0426_0512" class="swiper-slide primary-btn-2-c">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-H">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/primary-btn-2-c.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/primary-btn-2-c.png" alt="抽玫瑰水">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="swpPrimaryBtn3Wrapper" class="col-6 col-md-3 d-block text-center" style="overflow-x: clip;">
              <div id="swpPrimaryBtn3" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  
                  <div class="swiper-slide primary-btn-3-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-A">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/primary-btn-3-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/primary-btn-3-a.png" alt="註冊送銀幣">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide primary-btn-3-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-B">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/primary-btn-3-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/primary-btn-3-b.png" alt="首購送銀幣">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div id="swpPrimaryBtn4Wrapper" class="col-6 col-md-3 d-block text-center" style="overflow-x: clip;">
              <div id="swpPrimaryBtn4" class="swiper-container position-relative swp-primary-btn">
                <div class="swiper-wrapper">
                  <div v-if="duration_0403_0412" class="swiper-slide primary-btn-4-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-I">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/primary-btn-4-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/primary-btn-4-a.png" alt="【簽到送金幣】第一波">
                      </picture>
                    </a>
                  </div>
                  <div v-if="duration_0501_0510" class="swiper-slide primary-btn-4-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-J">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/primary-btn-4-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/primary-btn-4-b.png" alt="【簽到送金幣】第二波">
                      </picture>
                    </a>
                  </div>
                  <div v-if="duration_not_0501_0510" class="swiper-slide primary-btn-1-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-D">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/primary-btn-1-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/primary-btn-1-b.png" alt="下單抽萬元禮券">
                      </picture>
                    </a>
                  </div>

                </div>
              </div>
            </div>

          </div>

          
          

          

          
            
        </div>

      </div>
      
      
      <div v-if="tvoneday" id="tvOneDay" class="px-2" style="z-index: 9;">
        <div class="tvoneday-section d-flex flex-column mx-auto mb-3 mb-lg-5" style="z-index: 2;">
          <div class="tvoneday-timer">
            <div class="countdown text-center"></div>
          </div>
          <div class="tvoneday-header">
            
            <picture>
              <source srcset="images/act/2024/04/sp/images/wave2/section-title-tvoneday.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2024/04/sp/images/wave2/section-title-tvoneday.png" alt="美好幸運日">
            </picture>
            
          </div>
          <div class="tvoneday-body p-1 p-lg-5 pt-lg-2">
            <div class="row row-cols-2 row-cols-md-4 g-0 justify-content-center align-self-stretch">
              
              <div v-if="item.type === 'S1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay" :data-item-id="item.id">
                <div class="item-inner d-flex flex-column h-100 p-1 p-xl-2">
                  <div class="d-flex flex-column p-2">
                    <div v-if="item.available" class="item-body mb-xl-3">
                      <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                    </div>
                    <div v-else-if="item.before" class="item-body mb-xl-3">
                      <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                    </div>
                    <div v-else-if="item.id === '3110862023'" class="item-body mb-xl-3">
                      <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                    </div>
                    <div v-else class="item-body mb-xl-3">
                      <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                    </div>
                    <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                      <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                      <div class="item-name double-lines d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                      <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                    </div>
                    <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                      <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                      <div class="item-name double-lines d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                      <div class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                    </div>
                    <div v-else-if="item.id === '3110862023'" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                      <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                      <div class="item-name double-lines d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                      <div class="item-price text-center mb-1"><span class="fw-normal fs-6">熱銷一空</span></div>
                      <!-- <div v-else class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div> -->
                    </div>
                    <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                      <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                      <div class="item-name double-lines d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                      <!-- <div v-if="item.id === '3110862023'" class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div> -->
                      <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- 公格navBar -->
      <div id="publicGrid" class="wave2 position-relative" style="z-index: 9;">
        

        <!-- 公格 -->
        <div class="w-100 position-relative">

          <div class="container-lg px-2 g-0 position-relative" style="z-index: 99;">
            <div class="row g-0 justify-content-center">

              <div id="navBar" class="btn-nav-group wave2 d-flex flex-column justify-content-center align-items-center py-3 py-lg-5">
                <div class="navbar-inner d-flex justify-content-center align-items-center position-relative">
                  
                  <a id="Btn1" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionA">
                    <img src="images/act/2024/04/sp/images/wave2/nav-1.png" class="img-fluid">
                    <img src="images/act/2024/04/sp/images/wave2/nav-1-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn2" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionB">
                    <img src="images/act/2024/04/sp/images/wave2/nav-2.png" class="img-fluid">
                    <img src="images/act/2024/04/sp/images/wave2/nav-2-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn3" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionC">
                    <img src="images/act/2024/04/sp/images/wave2/nav-3.png" class="img-fluid">
                    <img src="images/act/2024/04/sp/images/wave2/nav-3-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn4" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionD">
                    <img src="images/act/2024/04/sp/images/wave2/nav-4.png" class="img-fluid">
                    <img src="images/act/2024/04/sp/images/wave2/nav-4-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn5" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionE">
                    <img src="images/act/2024/04/sp/images/wave2/nav-5.png" class="img-fluid">
                    <img src="images/act/2024/04/sp/images/wave2/nav-5-hover.png" class="img-fluid">

                  </a>
                </div>
              </div>

              <!-- A -->
              <div id="sectionA" class="col-12 mb-4 mb-xl-5">
                <div class="section-wrapper section-a position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/section-title-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/section-title-a.png" alt="section-title-a">
                      </picture>
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
              <div id="sectionB" class="col-12 mb-4 mb-xl-5">
                <div class="section-wrapper section-b position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/section-title-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/section-title-b.png" alt="section-title-b">
                      </picture>
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

              <!-- swpD -->
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section mb-4 mb-xl-5" data-wow-offset="50" data-wow-delay="0.2s">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/152B772E6CC8044FE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1645E4C41FD3302FE06400144FF82309_m.jpg" alt="【星紅織品+巾專家】限時特惠">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/174C09B555F45316E06400144FF82309">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/174D0AA5C2CA2628E06400144FF82309_m.jpg" alt="【ZCJ】品牌93折_5/1~5/31">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB3CB363D6034DCE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1645E4C41FD2302FE06400144FF82309_m.jpg" alt="【森繆斯】香氛禮盒_即日起-5/12">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/15C9BF63B02444DBE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/15E3285A27044AEDE06400144FF82309_m.jpg" alt="cctogo_長期">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/07E4434A2DCD71E1E06400144FF82309">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/15E330E0A0084AE7E06400144FF82309_m.jpg" alt="日本味王_長期">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/174D30227DBA267CE06400144FF82309">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1774D98B19B74117E06400144FF82309_m.jpg" alt="【JLP】母親節活動_即日起-5/31">
                        </a>
                      </div>


                      
                      
                    </div>
                  </div>
                </div>
              </div>

              <!-- C -->
              <div id="sectionC" class="col-12 mb-4 mb-xl-5">
                <div class="section-wrapper section-c position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/section-title-c.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/section-title-c.png" alt="section-title-c">
                      </picture>
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

              

              
              <!-- D -->
              <div id="sectionD" class="col-12 mb-4 mb-xl-5">
                <div class="section-wrapper section-d position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/section-title-d.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/section-title-d.png" alt="section-title-d">
                      </picture>
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

              <!-- E -->
              <div id="sectionE" class="col-12 mb-4 mb-xl-5">
                <div class="section-wrapper section-e position-relative p-0 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column p-1">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/04/sp/images/wave2/section-title-e.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/04/sp/images/wave2/mobile/section-title-e.png" alt="section-title-e">
                      </picture>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'E1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
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
              
              <div class="swp-banner-section swp-bank-section col-12">
                <div class="d-flex flex-column rounded-3">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202405_creditcard.html">
                      <img src="images/act/2024/04/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202405_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202405_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">4800</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202405_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期滿額回饋<br><span class="fw-bold text-danger">180</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202405_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">1200</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202405_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br><span class="fw-bold text-danger">滿額送刷卡金</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202405_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">享2%回饋<br><span class="fw-bold text-danger">指定卡再加碼</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202405_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202405_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">4800</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202405_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期滿額回饋<br><span class="fw-bold text-danger">180</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202405_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">1200</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202405_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br><span class="fw-bold text-danger">滿額送刷卡金</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202405_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/04/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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

          <!-- <div><img class="img-fluid us-none" src="images/act/2024/04/sp/images/wave2/page-bottom-cloud.png" alt="page bottom cloud"></div> -->
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
      imgError: 'this.src="/html/images/act/2024/04/sp/images/img-error.png"',
      items: [],
      wave1: false,
      wave2: false,
      duration_0403_0501: false,
      duration_0426_0512: false,
      duration_0403_0412: false,
      duration_0413_0510: false,
      duration_0501_0510: false,
      duration_not_0501_0510: false,
      tvoneday: false
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = '/html/images/act/2024/04/sp/json/data.json';
      var path2 = '/html/images/act/2024/04/sp/json/data2.json';
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
      


      if ( moment(timeNow).isBetween('2024-04-01 00:00:00', '2024-04-22 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
      }

      if ( moment(timeNow).isBetween('2024-04-23 00:00:00', '2099-05-12 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
        document.body.classList.add('wave2');
      }

      if ( moment(timeNow).isBetween('2024-04-01 00:00:00', '2024-05-01 23:59:59', 'second', '[]') ) {
        this.duration_0403_0501 = true;
      }
      if ( moment(timeNow).isBetween('2024-04-26 00:00:00', '2024-05-12 23:59:59', 'second', '[]') ) {
        this.duration_0426_0512 = true;
      }

      if ( moment(timeNow).isBetween('2024-04-01 00:00:00', '2024-04-12 23:59:59', 'second', '[]') ) {
        this.duration_0403_0412 = true;
      }
      
      if ( moment(timeNow).isBetween('2024-04-13 00:00:00', '2024-05-10 23:59:59', 'second', '[]') ) {
        this.duration_0413_0510 = true;
      }

      if ( moment(timeNow).isBetween('2024-05-01 00:00:00', '2024-05-10 23:59:59', 'second', '[]') ) {
        this.duration_0501_0510 = true;
      }

      if ( moment(timeNow).isBetween('2024-04-19 00:00:00', '2024-04-30 23:59:59', 'second', '[]') ) {
        this.duration_not_0501_0510 = true;
      }
      if ( moment(timeNow).isBetween('2024-05-11 00:00:00', '2024-05-12 23:59:59', 'second', '[]') ) {
        this.duration_not_0501_0510 = true;
      }

      

      if ( moment(timeNow).isBetween('2024-04-22 00:00:00', '2024-04-28 23:59:59', 'second', '[]') ) {
        this.tvoneday = true;
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



      
      

      if ( moment(timeNow).isSameOrBefore('2024-04-22 23:59:59') ) {
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
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2024/04/sp/images/product/'+ this.items[i].id +'/1.jpg');
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
        
        e.target.src = "/html/images/act/2024/04/sp/images/product/"+ t +".jpg";

      }

      
    },
    altImage: function(e) {
      

      var t = e.target.alt;
      e.target.src = "/html/images/act/2024/04/sp/images/product/"+ t +".jpg";
      

      if (e.target.imgchecked) {
        e.target.src = "/html/images/act/2024/04/sp/images/img-error.png";
      } else {
        e.target.src = "/html/images/act/2024/04/sp/images/product/"+ t +".jpg";
      }

      if (e.target.naturalWidth == 1) {
        e.target.src = "/html/images/act/2024/04/sp/images/product/"+ t +".jpg";

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

      
      if (moment(timeNow).isBetween('2023-05-30 00:00:00', '2023-06-12 23:59:59', 'second', '[]')) {
        var dateNow = '0613';
      } else {
        var dateNow = timeNow.substr(5,2) + timeNow.substr(8,2);
      }
      

      console.log('dateNow:'+dateNow);

      

      setTimeout(()=>{
        var triggerEl = document.querySelector('#pills-'+ dateNow +'-tab');  
        if (triggerEl) {
            new bootstrap.Tab(triggerEl).show(); 
            // $('#pills-'+ dateNow +'-tab').click();
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

