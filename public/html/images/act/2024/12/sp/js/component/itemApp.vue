<template>
  
  <div>
    
    <div v-if="wave1" class="main-section wave1 d-flex flex-column align-items-center" style="z-index: 2;">

      <div class="parallax">
        <div class="parallax__layer parallax__layer--back">
          <!-- <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/parallax-1-geo.png">
          <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/parallax-1-geo.png">
          <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/parallax-1-geo.png"> -->
        </div>
        <div class="parallax__layer parallax__layer--base">
          <!-- <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/parallax-1-text.png">
          <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/parallax-1-text.png">
          <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/parallax-1-text.png"> -->
        </div>
      </div>
      
      <div class="sticky-side-menu sticky-side-menu-1" style="z-index: 8;">
        <!-- <video id="goldStreaks" class="wave1" muted playsinline loop>
          <source src="images/act/2024/12/sp/images/wave1/gold.webm" type="video/mp4">
        </video> -->
        <!-- <div class="lower-overlay d-none d-xl-block"></div> -->
        
        
        
        
        
        <!-- <div class="falling-petals d-none d-xl-block">
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
        </div> -->



        


      </div>

      <div class="sticky-side-menu sticky-side-menu-2" style="z-index: 11;">
        <!-- 左選單 -->
        <div class="wave1 side-menu-wrapper-left">
          <div class="side-menu-body">
            <div class="d-flex flex-column">

              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/077F6E06AA6D020FE06400144FF9CEC6')">新品便利店</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/0A15010A39B50423E06400144FF9CEC6')">走吧去旅行</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309')">為生活加分</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/FE26D074E2855E90E05400144FF82309')">美味食光機</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/077F6E069D24020FE06400144FF9CEC6')">就是愛露營</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/C5DF6CB63EAB3708E05400144FF82309')">美好精品展</button>
                <button class="btn" type="button" onclick="window.open('https://www.vivatv.com.tw/category/secondaryCategory/C04AE757081C3CA7E05400144FF9CEC6')">健康好生活</button>
              </div>

              <div class="d-flex flex-column justify-content-around side-menu-group-2">
                <div class="btn-group">
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000004')">生活</button>
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000002')">家電</button>
                </div>
                <div class="btn-group">
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A24D23F00F52C2E0440003BA0FF872')">時尚</button>
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000003')">美妝</button>  
                </div>
                <div class="btn-group">
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C04AE75708173CA7E05400144FF9CEC6')">健康</button>
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A1B2891B10444DE0440003BA0FF88E')">美食</button>
                </div>
                <div class="btn-group">
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C5532AF44E31474EE05400144FF82309')">日用</button>
                  <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C064C88E9DDC3999E05400144FF82309')">３Ｃ</button>
                </div>
              </div>

              <div class="d-flex flex-column side-menu-group-3">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
              </div>

            </div>
          </div>
        </div>
        <!-- 右選單 -->
        <div class="wave1 side-menu-wrapper-right">
          <div class="side-menu-body">
            <div class="d-flex flex-column">
              
              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E">年終滿額拿豪禮</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D">狂敗最高送2.2萬</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-F">買年菜抽石二鍋</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-A">試手氣領3百銀幣</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-I">滿額抽晶華雞湯</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C">新客首購滿額送</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B">新朋友送100銀幣</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-H">雙12滿額送銀幣</button>

              </div>
              
              <div class="d-flex flex-column justify-content-around side-menu-group-2">
                <a href="#sectionA" class="btn rounded-0">禮享指南</a>
                <a href="#sectionB" class="btn rounded-0">歡樂食刻</a>
                <a href="#sectionC" class="btn rounded-0">陪你溫暖</a>
                <a href="#sectionD" class="btn rounded-0">應援生活</a>
              </div>

              <div class="d-flex flex-column side-menu-group-3">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
              </div>

            </div>
          </div>
        </div>
      </div>

      
      <div class="primary-section d-flex flex-column align-items-center px-2 position-relative mb-0 mb-xl-0" style="z-index: 10">
        

        <!-- mobile -->
        <div class="primary-section-group d-flex d-lg-none flex-column justify-content-center align-items-center">
          
          <div class="d-flex flex-column w-100">
            <!-- 上排 -->
            <div class="d-flex w-100">
              <div id="swpPrimaryBtn1" class="swiper-container position-relative swp-primary-btn primary-btn-1">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-B">
                      <picture>
                        <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-1-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-1-a.png" alt="【註冊送銀幣】">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C">
                      <picture>
                        <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-1-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-1-b.png" alt="【新客首購滿額送銀幣】">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column primary-btn-3">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-F">
                  <picture>
                    <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-3.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-3.png" alt="【買年菜加碼抽】">
                  </picture>
                </a>
              </div>
              <div class="d-flex flex-column primary-btn-6">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-I">
                  <picture>
                    <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-6.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-6.png" alt="【網路限定滿額抽】">
                  </picture>
                </a>
              </div>
            </div>
            <!-- 中排 -->
            <div class="d-flex w-100">
              <div id="swpPrimaryBtn2" class="swiper-container position-relative swp-primary-btn primary-btn-2">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-D">
                      <picture>
                        <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-2-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-2-a.png" alt="【滿額最高回饋2.2萬銀幣】">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-H">
                      <picture>
                        <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-2-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-2-b.png" alt="【年終最狂雙12】">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!-- 下排 -->
            <div class="d-flex">
              <div class="d-flex flex-column primary-btn-4">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-A">
                  <picture>
                    <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-4.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-4.png" alt="【年終Fun送戳戳樂】">
                  </picture>
                </a>
              </div>
              <div class="d-flex flex-column primary-btn-5">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-E">
                  <picture>
                    <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-5.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-5.png" alt="【跨年狂歡滿額抽】">
                  </picture>
                </a>
              </div>
            </div>
          </div>
          
        </div>
        
        <!-- desktop -->
        <div class="primary-section-group d-none d-lg-flex flex-row justify-content-center align-items-center">
          
          <div class="d-flex flex-column w-100">
            <!-- 上排 -->
            <div class="d-flex w-100">
              <div id="swpPrimaryBtn1" class="swiper-container position-relative swp-primary-btn primary-btn-1">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-B">
                      <picture>
                        <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-1-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-1-a.png" alt="【註冊送銀幣】">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C">
                      <picture>
                        <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-1-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-1-b.png" alt="【新客首購滿額送銀幣】">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
              <div id="swpPrimaryBtn2" class="swiper-container position-relative swp-primary-btn primary-btn-2">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-D">
                      <picture>
                        <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-2-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-2-a.png" alt="【滿額最高回饋2.2萬銀幣】">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-H">
                      <picture>
                        <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-2-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-2-b.png" alt="【年終最狂雙12】">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column primary-btn-3">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-F">
                  <picture>
                    <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-3.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-3.png" alt="【買年菜加碼抽】">
                  </picture>
                </a>
              </div>
            </div>
            <!-- 下排 -->
            <div class="d-flex">
              <div class="d-flex flex-column primary-btn-4">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-A">
                  <picture>
                    <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-4.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-4.png" alt="【年終Fun送戳戳樂】">
                  </picture>
                </a>
              </div>
              <div class="d-flex flex-column primary-btn-5">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-E">
                  <picture>
                    <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-5.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-5.png" alt="【跨年狂歡滿額抽】">
                  </picture>
                </a>
              </div>
              <div class="d-flex flex-column primary-btn-6">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-I">
                  <picture>
                    <source srcset="images/act/2024/12/sp/images/wave1/primary-btn-6.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/primary-btn-6.png" alt="【網路限定滿額抽】">
                  </picture>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      


      

      <div v-if="tvoneday" class="oneday-section d-flex flex-column align-items-center my-4 mt-xl-5">
        <div class="col-12 oneday-section-stage">
          <div class="d-flex flex-column position-relative">
            <div class="oneday-timer">
              <div class="countdown text-center"></div>
            </div>
            <div class="oneday-section-title text-center">
              <!-- <img class="img-fluid us-none" src="images/act/2024/12/sp/images/wave1/tvoneday-header.jpg"> -->
              <picture>
                <source srcset="images/act/2024/12/sp/images/wave1/tvoneday-header.jpg" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/tvoneday-header.jpg">
              </picture>
            </div>
            <div class="oneday-section-body">
              <div class="row row-cols-2 row-cols-xl-5 g-0 justify-content-center">
                <div v-if="item.type === 'S1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                  <div class="item-inner d-flex flex-column">
                    <div v-if="item.available" class="item-body">
                      <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                    </div>
                    <div v-else class="item-body">
                      <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                    </div>
                    <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                      <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                      <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                      <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                    </div>
                    <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                      <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                      <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                      <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-6 fs-xl-5">開賣</span></span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- decoration -->
        <div class="left-monkey-wrapper wow bounceInLeft" data-wow-delay="0.5s">
          <div class="left-monkey"></div>
        </div>
        <div class="right-trumpet-wrapper wow bounceInRight" data-wow-delay="0.5s">
          <div class="right-trumpet"></div>
        </div>
      </div>
      
      <!-- nav -->
      <div id="navBar" class="btn-nav-group wave1 d-flex flex-column justify-content-center align-items-center">
        <div class="navbar-inner d-flex flex-wrap flex-xl-nowrap justify-content-center align-items-center position-relative">
          <a id="Btn1" data-wow-delay="0s" class="d-block btn btn-nav border-0 rounded-0 p-3 py-0 p-lg-3" href="#sectionA">
            <img src="images/act/2024/12/sp/images/wave1/nav-1.png" class="img-fluid">
            <img src="images/act/2024/12/sp/images/wave1/nav-1-hover.png" class="img-fluid">
          </a>
          <a id="Btn2" data-wow-delay="0s" class="d-block btn btn-nav border-0 rounded-0 p-3 py-0 p-lg-3" href="#sectionB">
            <img src="images/act/2024/12/sp/images/wave1/nav-2.png" class="img-fluid">
            <img src="images/act/2024/12/sp/images/wave1/nav-2-hover.png" class="img-fluid">
          </a>
          <a id="Btn3" data-wow-delay="0s" class="d-block btn btn-nav border-0 rounded-0 p-3 py-0 p-lg-3" href="#sectionC">
            <img src="images/act/2024/12/sp/images/wave1/nav-3.png" class="img-fluid">
            <img src="images/act/2024/12/sp/images/wave1/nav-3-hover.png" class="img-fluid">
          </a>
          <a id="Btn4" data-wow-delay="0s" class="d-block btn btn-nav border-0 rounded-0 p-3 py-0 p-lg-3" href="#sectionD">
            <img src="images/act/2024/12/sp/images/wave1/nav-4.png" class="img-fluid">
            <img src="images/act/2024/12/sp/images/wave1/nav-4-hover.png" class="img-fluid">
          </a>
        </div>
      </div>
      
      
      <div id="publicGrid" class="wave1 position-relative" style="z-index: 9;">


        <!-- 公格 -->
        <div class="w-100 position-relative">

          <div class="container-fluid px-2 px-lg-0 g-0 position-relative" style="z-index: 99;">
            <div class="row g-0 justify-content-center">

              <!-- A -->
              <div id="sectionA" class="col-12">
                <div class="section-wrapper section-a position-relative p-0 px-xl-5">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/12/sp/images/wave1/section-title-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/section-title-a.png" alt="section-title-a">
                      </picture>
                      <div class="section-title-a-overlay"></div>
                    </div>
                    <div class="section-inner p-xl-4 position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'A1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-lg-2">
                            <div class="d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-0"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-0"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal">開賣</span></span></div>
                                <!-- <div class="item-price text-center mb-1"><span class="fw-normal fs-6">已售完</span></div> -->
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
                <div class="section-wrapper section-b position-relative p-0 px-xl-5">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/12/sp/images/wave1/section-title-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/section-title-b.png" alt="section-title-b">
                      </picture>
                      <div class="section-title-b-overlay"></div>
                    </div>
                    <div class="section-inner p-xl-4 position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'B1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-lg-2">
                            <div class="d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-0"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-0"><span>{{item.brand}}</span></div>
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
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section" data-wow-offset="50" data-wow-delay="0.2s">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/042F43312BE9215FE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1F8B0E61BCFB6F77E06400144FF82309_m.jpg?t=1723527668150" alt="【首頁下排廣告】【星紅織品】品牌形象_長期">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/1F23DBD6B21433BBE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1F751CF3366633ADE06400144FF82309_m.jpg?t=1723433423316" alt="【首頁下排廣告】【吉米莊】下單贈好禮_0812-1231">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/1C7B94BB881259A2E06400144FF9CEC6">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1EE71FC11F0F3687E06400144FF82309_m.jpg?t=1722823584943" alt="【首頁下排廣告】健康力_長期">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/166AEA46DBA16B1BE06400144FF82309">
                          <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/1B266DA9668A3D8EE06400144FF82309_m.jpg?t=1718697538555" alt="【首頁下排廣告】【FORTE】御潤品牌_長期">
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
              

              <!-- C -->
              <div id="sectionC" class="col-12">
                <div class="section-wrapper section-c position-relative p-0 px-xl-5">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/12/sp/images/wave1/section-title-c.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/section-title-c.png" alt="section-title-c">
                      </picture>
                      <div class="section-title-c-overlay"></div>
                    </div>
                    <div class="section-inner p-xl-4 position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'C1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-lg-2">
                            <div class="d-flex flex-column">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-0"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-0"><span>{{item.brand}}</span></div>
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
              <div id="sectionD" class="col-12">
                <div class="section-wrapper section-d position-relative p-0 px-xl-5">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="section-title w-100 text-center">
                      <picture>
                        <source srcset="images/act/2024/12/sp/images/wave1/section-title-d.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/section-title-d.png" alt="section-title-d">
                      </picture>
                      <div class="section-title-d-overlay"></div>
                    </div>
                    <div class="section-inner p-xl-4 position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'D1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-lg-2">
                            <div class="d-flex flex-column">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-0"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-0"><span>{{item.brand}}</span></div>
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
              

              <div class="swp-banner-section swp-bank-section col-12 px-2 mb-4 mb-xl-5 mt-2 mt-xl-3">
                <div class="d-flex flex-column rounded-3">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202412_creditcard.html">
                      <img src="images/act/2024/12/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202412_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/12/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202412_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/12/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">4800</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202412_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/12/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期滿額回饋<br><span class="fw-bold text-danger">200</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202412_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/12/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高2%刷卡金<br><span class="fw-bold text-danger">回饋無上限</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202412_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/12/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高享4%回饋<br><span class="fw-bold text-danger">指定卡再加碼</span></p>
                            </div>
                          </div>
                        </a>
                      </div>



                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202412_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/12/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202412_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/12/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">4800</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202412_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/12/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期滿額回饋<br><span class="fw-bold text-danger">200</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202412_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/12/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高2%刷卡金<br><span class="fw-bold text-danger">回饋無上限</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202412_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2024/12/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高享4%回饋<br><span class="fw-bold text-danger">指定卡再加碼</span></p>
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

          <!-- <div><img class="img-fluid us-none" src="images/act/2024/12/sp/images/wave1/page-bottom-cloud.png" alt="page bottom cloud"></div> -->
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
      imgError: 'this.src="/html/images/act/2024/12/sp/images/img-error.png"',
      items: [],
      wave1: false,
      wave2: false,
      tvoneday: false,
      bank_202410: false,
      bank_202411: false,
      ecOnly: false,
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = '/html/images/act/2024/12/sp/json/data.json';
      var path2 = '/html/images/act/2024/12/sp/json/data2.json';
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
      


      if ( moment(timeNow).isBetween('2024-11-21 00:00:00', '2025-01-01 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
      }
      
      if ( moment(timeNow).isBetween('2024-12-16 00:00:00', '2024-12-22 23:59:59', 'second', '[]') ) {
        this.tvoneday = true;
      }

      if ( moment(timeNow).isBetween('2024-12-13 00:00:00', '2025-01-01 23:59:59', 'second', '[]') ) {
        this.ecOnly = true;
      }

      if ( moment(timeNow).isBetween('2024-12-01 00:00:00', '2024-12-31 23:59:59', 'second', '[]') ) {
        this.bank_202412 = true;
      }

      if ( moment(timeNow).isBetween('2025-01-01 00:00:00', '2025-01-31 23:59:59', 'second', '[]') ) {
        this.bank_202501 = true;
      }
      
      
      

      
      

      path = path1;

      // if ( moment(timeNow).isSameOrBefore('2024-11-10 23:59:59') ) {
      //   path = path1;
      // } else {
      //   path = path2;
      // }

      console.log('path:'+path);
      


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

              signInDate = year + month + date;
      
              var str = 'OK';
              console.log('***signInDate:', signInDate);
              localStorage.setItem(signInDate, str);
            }

          // timer.textContent = `${s < 10 ? "0" + s : s} `;
          };
       

          setInterval(countdown, 1000);


          

          
        }


        let fromSignInEvent = this.getUrlParameter('f');
          if (fromSignInEvent == '202411checkin') {
            showTimer();
          }
        }



      
      

      




      // 倒數計時

      var eventTime;

      // if ( moment(timeNow).isBetween('2024-10-16 00:00:00', '2024-10-27 23:59:59', 'second', '[]') ) {
      //   eventTime = moment('2024-10-26 10:12:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');
      // } else {
      //   eventTime = moment('2024-11-04 00:00:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');
      // }
      
      eventTime = moment('2024-12-22 10:12:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');



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
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2024/12/sp/images/product/'+ this.items[i].id +'/1.jpg');
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
            this.items[j].available = true;
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
        
        e.target.src = "/html/images/act/2024/12/sp/images/product/"+ t +".jpg";

      }

      
    },
    altImage: function(e) {
      

      var t = e.target.alt;
      e.target.src = "/html/images/act/2024/12/sp/images/product/"+ t +".jpg";
      

      if (e.target.imgchecked) {
        e.target.src = "/html/images/act/2024/12/sp/images/img-error.png";
      } else {
        e.target.src = "/html/images/act/2024/12/sp/images/product/"+ t +".jpg";
      }

      if (e.target.naturalWidth == 1) {
        e.target.src = "/html/images/act/2024/12/sp/images/product/"+ t +".jpg";

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

      
      if (moment(timeNow).isBetween('2024-10-24 00:00:00', '2024-11-03 23:59:59', 'second', '[]')) {
        var dateNow = '1104';
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

