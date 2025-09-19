<template>
  
  <div>
    
    <div v-if="wave1" class="main-section wave1" style="z-index: 2;">
      <div class="primary-section d-flex flex-column align-items-center">
        <div class="col-12 col-md-10 col-xl-7 primary-section-stage">
          <div class="d-flex justify-content-center align-items-center position-relative">
            <div class="primary-section-btn-1 p-2">
              <a data-bs-toggle="modal" href="#eventModal-Wave1-A"><img src="images/act/2023/02/24/images/wave1/primary-section-btn-1.png" class="img-fluid us-none"></a>
            </div>
            <div class="primary-section-btn-2 p-2">
              <a data-bs-toggle="modal" href="#eventModal-Wave1-B"><img src="images/act/2023/02/24/images/wave1/primary-section-btn-2.png" class="img-fluid us-none"></a>
            </div>
            <div class="primary-section-btn-3 p-2">
              <a data-bs-toggle="modal" href="#eventModal-Wave1-C"><img src="images/act/2023/02/24/images/wave1/primary-section-btn-3.png" class="img-fluid us-none"></a>
            </div>
          </div>
        </div>
      </div>

      <!-- 公格navBar -->
      <div id="publicGrid" class="wave1">
        <div id="navBar" class="btn-nav-group wave1 d-flex justify-content-center px-3 px-xl-0">
          <div class="navbar-inner d-flex justify-content-between align-items-center position-relative p-1 p-xl-3">
            <button id="Btn1" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionA')" data-scroll-target="#sectionA">
              <img src="images/act/2023/02/24/images/wave1/btn-nav-1-active.png" class="img-fluid">
              <img src="images/act/2023/02/24/images/wave1/btn-nav-1.png" class="img-fluid rounded-3">
            </button>
            <button id="Btn2" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionB')" data-scroll-target="#sectionB">
              <img src="images/act/2023/02/24/images/wave1/btn-nav-2-active.png" class="img-fluid">
              <img src="images/act/2023/02/24/images/wave1/btn-nav-2.png" class="img-fluid">
            </button>
            <button id="Btn3" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionC')" data-scroll-target="#sectionC">
              <img src="images/act/2023/02/24/images/wave1/btn-nav-3-active.png" class="img-fluid">
              <img src="images/act/2023/02/24/images/wave1/btn-nav-3.png" class="img-fluid">
            </button>
            <button id="Btn4" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionD')" data-scroll-target="#sectionD">
              <img src="images/act/2023/02/24/images/wave1/btn-nav-4-active.png" class="img-fluid">
              <img src="images/act/2023/02/24/images/wave1/btn-nav-4.png" class="img-fluid">
            </button>
            <button id="Btn5" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionE')" data-scroll-target="#sectionE">
              <img src="images/act/2023/02/24/images/wave1/btn-nav-5-active.png" class="img-fluid">
              <img src="images/act/2023/02/24/images/wave1/btn-nav-5.png" class="img-fluid">
            </button>
          </div>
        </div>
        <!-- 公格 -->
        <div class="w-100" style="overflow-x: hidden;">
          <div class="container-xl p-0 position-relative" style="z-index: 2;">
            <div class="row g-0 justify-content-center">
              
              <!-- A -->
              <div id="sectionA" class="col-12 col-xl-11 p-0 mb-xl-4">
                <div class="grid-section-header mx-auto position-relative text-center text-xl-end mb-2 mb-xl-0 px-4 ps-xl-0 pe-xl-5" style="z-index: 99;">
                  <img src="images/act/2023/02/24/images/wave1/header-section-a.png" class="img-fluid us-none" alt="品味生活">
                </div>
                <div class="section-wrapper section-a position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-product position-relative align-self-center px-2 px-xl-0" style="z-index: 1;">
                      <a href="https://www.vivatv.com.tw/goods/3048402022">
                        <picture>
                          <source srcset="images/act/2023/02/24/images/wave1/product-section-a.png" media="(min-width: 992px)">
                          <img class="img-fluid" src="images/act/2023/02/24/images/wave1/mobile/product-section-a.png" alt="">
                        </picture>
                      </a>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column p-1 p-xl-5 ps-xl-1">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                          <div v-if="item.type === 'A1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                            <div class="item-inner d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
              <div id="sectionB" class="col-12 col-xl-11 p-0 mb-xl-4">
                <div class="grid-section-header mx-auto position-relative text-center text-xl-start mb-2 mb-xl-0 px-4 ps-xl-5 pe-xl-0" style="z-index: 99;">
                  <img src="images/act/2023/02/24/images/wave1/header-section-b.png" class="img-fluid us-none" alt="美妝香氛">
                </div>
                <div class="section-wrapper section-b position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row-reverse">
                    <div class="section-product position-relative align-self-center px-2 ps-xl-2 pe-xl-0" style="z-index: 1;">
                      <a href="https://www.vivatv.com.tw/goods/3085982022">
                        <picture>
                          <source srcset="images/act/2023/02/24/images/wave1/product-section-b.png" media="(min-width: 992px)">
                          <img class="img-fluid" src="images/act/2023/02/24/images/wave1/mobile/product-section-b.png" alt="">
                        </picture>
                      </a>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column p-1 p-xl-5 pe-xl-1">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                          <div v-if="item.type === 'B1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                            <div class="item-inner d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
              <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-9 p-1">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F1823F468EB04B0BE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/EED33EF196E6206EE05400144FF9CEC6_m.jpg" alt="戶外旅行">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F1823F46900F4B0BE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/F216A9FBA4841460E05400144FF9CEC6_m.jpg" alt="義大利金牌咖啡">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C17951C7FAE26E69E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/E8C55FAAC09E66AFE05400144FF9CEC6_m.jpg" alt="天然純棉">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/CC9223EEAA564C1EE05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/E91349E423AE4A4BE05400144FF82309_m.jpg" alt="自然農法">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F0CC0643D66F2331E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/F1823F468EFA4B0BE05400144FF9CEC6_m.jpg" alt="質感輕珠寶">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- C -->
              <div id="sectionC" class="col-12 col-xl-11 p-0 mb-xl-4">
                <div class="grid-section-header mx-auto position-relative text-center text-xl-end mb-2 mb-xl-0 px-4 ps-xl-0 pe-xl-5" style="z-index: 99;">
                  <img src="images/act/2023/02/24/images/wave1/header-section-c.png" class="img-fluid us-none" alt="聚財開運">
                </div>
                <div class="section-wrapper section-c position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-product position-relative align-self-center px-2 px-xl-0" style="z-index: 1;">
                      <a href="https://www.vivatv.com.tw/goods/2891532019">
                        <picture>
                          <source srcset="images/act/2023/02/24/images/wave1/product-section-c.png" media="(min-width: 992px)">
                          <img class="img-fluid" src="images/act/2023/02/24/images/wave1/mobile/product-section-c.png" alt="">
                        </picture>
                      </a>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column p-1 p-xl-5 ps-xl-1">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                          <div v-if="item.type === 'C1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                            <div class="item-inner d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
              <div class="col-12 col-xl-9 p-2 mb-3" style="max-width: 1090px;">
                <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202303_creditcard.html">
                      <img src="images/act/2023/02/24/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-ctbc" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-ctbc.png" class="card-img-top" alt="中信">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<br>刷卡金<span class="fw-bold text-danger">800</span>元</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">3500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期滿額<br>最高回饋<span class="fw-bold text-danger">2.5%</span>刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-citi" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-citi.png" class="card-img-top" alt="花旗">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<span class="fw-bold text-danger">600元</span><br>統一超商商品卡</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>滿額加贈高回饋</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">3000</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br>滿額送刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-first.png" class="card-img-top" alt="第一">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<br><span class="fw-bold text-danger">2000</span>刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
              
              <!-- D -->
              <div id="sectionD" class="col-12 col-xl-11 p-0 mb-xl-4">
                <div class="grid-section-header mx-auto position-relative text-center text-xl-start mb-2 mb-xl-0 px-4 ps-xl-5 pe-xl-0" style="z-index: 99;">
                  <img src="images/act/2023/02/24/images/wave1/header-section-d.png" class="img-fluid us-none" alt="健康生活">
                </div>
                <div class="section-wrapper section-d position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row-reverse">
                    <div class="section-product position-relative align-self-center px-2 ps-xl-2 pe-xl-0" style="z-index: 1;">
                      <a href="https://www.vivatv.com.tw/goods/3002862021">
                        <picture>
                          <source srcset="images/act/2023/02/24/images/wave1/product-section-d.png" media="(min-width: 992px)">
                          <img class="img-fluid" src="images/act/2023/02/24/images/wave1/mobile/product-section-d.png" alt="">
                        </picture>
                      </a>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column p-1 p-xl-5 pe-xl-1">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                          <div v-if="item.type === 'D1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                            <div class="item-inner d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>

              <!-- swpE -->
              <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-9 p-1">
                <div class="swiper-custom">
                  <div id="swpE" class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3059672022">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/F21C15729AA44AD4E05400144FF82309_m.jpg" alt="自在食刻">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/EDF5A51742BF054CE05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/EED3554AA527447BE05400144FF82309_m.jpg" alt="阿母滴雞湯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/ED02422A5C28609CE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/EDF6485D62B33B06E05400144FF82309_m.jpg" alt="勝崎生鮮">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/E391F8619E263D07E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/E8C55FAAC0A166AFE05400144FF9CEC6_m.jpg" alt="黑蒜頭">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- E -->
              <div id="sectionE" class="col-12 col-xl-11 p-0 mb-xl-4">
                <div class="grid-section-header mx-auto position-relative text-center text-xl-end mb-2 mb-xl-0 px-4 ps-xl-0 pe-xl-5" style="z-index: 99;">
                  <img src="images/act/2023/02/24/images/wave1/header-section-e.png" class="img-fluid us-none" alt="戶外休閒">
                </div>
                <div class="section-wrapper section-e position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-product position-relative align-self-center px-2 px-xl-0" style="z-index: 1;">
                      <a href="https://www.vivatv.com.tw/goods/3080022022">
                        <picture>
                          <source srcset="images/act/2023/02/24/images/wave1/product-section-e.png" media="(min-width: 992px)">
                          <img class="img-fluid" src="images/act/2023/02/24/images/wave1/mobile/product-section-e.png" alt="">
                        </picture>
                      </a>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column p-1 p-xl-5 ps-xl-1">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                          <div v-if="item.type === 'E1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                            <div class="item-inner d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>

              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>


    <div v-if="wave2" class="main-section wave2" style="z-index: 2;">
      <div class="primary-section d-flex flex-column align-items-center">
        <div class="col-12 col-md-10 col-xl-7 primary-section-stage">
          <div class="d-flex justify-content-center align-items-center position-relative">
            <div class="primary-section-btn-1 p-2">
              <a data-bs-toggle="modal" href="#eventModal-Wave1-A"><img src="images/act/2023/02/24/images/wave2/primary-section-btn-1.png" class="img-fluid us-none"></a>
            </div>
            <div class="primary-section-btn-2 p-2">
              <a data-bs-toggle="modal" href="#eventModal-Wave1-B"><img src="images/act/2023/02/24/images/wave2/primary-section-btn-2.png" class="img-fluid us-none"></a>
            </div>
            <div class="primary-section-btn-3 p-2">
              <a data-bs-toggle="modal" href="#eventModal-Wave1-C"><img src="images/act/2023/02/24/images/wave2/primary-section-btn-3.png" class="img-fluid us-none"></a>
            </div>
          </div>
        </div>
      </div>

      <!-- 公格navBar -->
      <div id="publicGrid" class="wave2">
        <div id="navBar" class="btn-nav-group wave2 d-flex justify-content-center px-3 px-xl-0">
          <div class="navbar-inner d-flex justify-content-between align-items-center position-relative p-1 p-xl-3">
            <button id="Btn1" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionA')" data-scroll-target="#sectionA">
              <img src="images/act/2023/02/24/images/wave2/btn-nav-1-active.png" class="img-fluid">
              <img src="images/act/2023/02/24/images/wave2/btn-nav-1.png" class="img-fluid rounded-3">
            </button>
            <button id="Btn2" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionB')" data-scroll-target="#sectionB">
              <img src="images/act/2023/02/24/images/wave2/btn-nav-2-active.png" class="img-fluid">
              <img src="images/act/2023/02/24/images/wave2/btn-nav-2.png" class="img-fluid">
            </button>
            <button id="Btn3" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionC')" data-scroll-target="#sectionC">
              <img src="images/act/2023/02/24/images/wave2/btn-nav-3-active.png" class="img-fluid">
              <img src="images/act/2023/02/24/images/wave2/btn-nav-3.png" class="img-fluid">
            </button>
            <button id="Btn4" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionD')" data-scroll-target="#sectionD">
              <img src="images/act/2023/02/24/images/wave2/btn-nav-4-active.png" class="img-fluid">
              <img src="images/act/2023/02/24/images/wave2/btn-nav-4.png" class="img-fluid">
            </button>
            <button id="Btn5" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionE')" data-scroll-target="#sectionE">
              <img src="images/act/2023/02/24/images/wave2/btn-nav-5-active.png" class="img-fluid">
              <img src="images/act/2023/02/24/images/wave2/btn-nav-5.png" class="img-fluid">
            </button>
          </div>
        </div>
        <!-- 公格 -->
        <div class="w-100" style="overflow-x: hidden;">
          <div class="container-xl p-0 position-relative" style="z-index: 2;">
            <div class="row g-0 justify-content-center">
              
              <!-- A -->
              <div id="sectionA" class="col-12 col-xl-11 p-0 mb-xl-4">
                <div class="grid-section-header mx-auto position-relative text-center text-xl-end mb-2 mb-xl-0 px-4 ps-xl-0 pe-xl-5" style="z-index: 99;">
                  <img src="images/act/2023/02/24/images/wave2/header-section-a.png" class="img-fluid us-none" alt="美妝香氛">
                </div>
                <div class="section-wrapper section-a position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-product position-relative align-self-center px-2 px-xl-0" style="z-index: 1;">
                      <a href="https://www.vivatv.com.tw/goods/3084772022">
                        <picture>
                          <source srcset="images/act/2023/02/24/images/wave2/product-section-a.png" media="(min-width: 992px)">
                          <img class="img-fluid" src="images/act/2023/02/24/images/wave2/mobile/product-section-a.png" alt="【德國沛優絲】 雙動力健髮護髮組2+1">
                        </picture>
                      </a>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column p-1 p-xl-5 ps-xl-1">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                          <div v-if="item.type === 'A1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                            <div class="item-inner d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
              <div id="sectionB" class="col-12 col-xl-11 p-0 mb-xl-4">
                <div class="grid-section-header mx-auto position-relative text-center text-xl-start mb-2 mb-xl-0 px-4 ps-xl-5 pe-xl-0" style="z-index: 99;">
                  <img src="images/act/2023/02/24/images/wave2/header-section-b.png" class="img-fluid us-none" alt="健康生活">
                </div>
                <div class="section-wrapper section-b position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row-reverse">
                    <div class="section-product position-relative align-self-center px-2 ps-xl-2 pe-xl-0" style="z-index: 1;">
                      <a href="https://www.vivatv.com.tw/goods/3001562021">
                        <picture>
                          <source srcset="images/act/2023/02/24/images/wave2/product-section-b.png" media="(min-width: 992px)">
                          <img class="img-fluid" src="images/act/2023/02/24/images/wave2/mobile/product-section-b.png" alt="【台塑生醫】維生素D3 複方膠囊(60粒/瓶) 2瓶">
                        </picture>
                      </a>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column p-1 p-xl-5 pe-xl-1">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                          <div v-if="item.type === 'B1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                            <div class="item-inner d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>

              <!-- swpE -->
              <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-9 p-1">
                <div class="swiper-custom">
                  <div id="swpE" class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3059672022">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/F21C15729AA44AD4E05400144FF82309_m.jpg" alt="自在食刻">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/EDF5A51742BF054CE05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/EED3554AA527447BE05400144FF82309_m.jpg" alt="阿母滴雞湯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/ED02422A5C28609CE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/EDF6485D62B33B06E05400144FF82309_m.jpg" alt="勝崎生鮮">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/E391F8619E263D07E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/E8C55FAAC0A166AFE05400144FF9CEC6_m.jpg" alt="黑蒜頭">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- C -->
              <div id="sectionC" class="col-12 col-xl-11 p-0 mb-xl-4">
                <div class="grid-section-header mx-auto position-relative text-center text-xl-end mb-2 mb-xl-0 px-4 ps-xl-0 pe-xl-5" style="z-index: 99;">
                  <img src="images/act/2023/02/24/images/wave2/header-section-c.png" class="img-fluid us-none" alt="聚財開運">
                </div>
                <div class="section-wrapper section-c position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-product position-relative align-self-center px-2 px-xl-0" style="z-index: 1;">
                      <a href="https://www.vivatv.com.tw/goods/3116512023">
                        <picture>
                          <source srcset="images/act/2023/02/24/images/wave2/product-section-c.png" media="(min-width: 992px)">
                          <img class="img-fluid" src="images/act/2023/02/24/images/wave2/mobile/product-section-c.png" alt="">
                        </picture>
                      </a>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column p-1 p-xl-5 ps-xl-1">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                          <div v-if="item.type === 'C1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                            <div class="item-inner d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
              <div class="col-12 col-xl-9 p-2 mb-3" style="max-width: 1090px;">
                <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202303_creditcard.html">
                      <img src="images/act/2023/02/24/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-ctbc" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-ctbc.png" class="card-img-top" alt="中信">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<br>刷卡金<span class="fw-bold text-danger">800</span>元</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">3500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期滿額<br>最高回饋<span class="fw-bold text-danger">2.5%</span>刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-citi" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-citi.png" class="card-img-top" alt="花旗">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<span class="fw-bold text-danger">600元</span><br>統一超商商品卡</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>滿額加贈高回饋</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">3000</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br>滿額送刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202303_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/02/24/images/bank/logo-first.png" class="card-img-top" alt="第一">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<br><span class="fw-bold text-danger">2000</span>刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
              
              <!-- D -->
              <div id="sectionD" class="col-12 col-xl-11 p-0 mb-xl-4">
                <div class="grid-section-header mx-auto position-relative text-center text-xl-start mb-2 mb-xl-0 px-4 ps-xl-5 pe-xl-0" style="z-index: 99;">
                  <img src="images/act/2023/02/24/images/wave2/header-section-d.png" class="img-fluid us-none" alt="戶外休閒">
                </div>
                <div class="section-wrapper section-d position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row-reverse">
                    <div class="section-product position-relative align-self-center px-2 ps-xl-2 pe-xl-0" style="z-index: 1;">
                      <a href="https://www.vivatv.com.tw/goods/3047692022">
                        <picture>
                          <source srcset="images/act/2023/02/24/images/wave2/product-section-d.png" media="(min-width: 992px)">
                          <img class="img-fluid" src="images/act/2023/02/24/images/wave2/mobile/product-section-d.png" alt="de Buyer輕礦藍鐵系列  單柄平底鍋28cm/鐵鍋">
                        </picture>
                      </a>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column p-1 p-xl-5 pe-xl-1">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                          <div v-if="item.type === 'D1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                            <div class="item-inner d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
              <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-9 p-1">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F1823F468EB04B0BE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/EED33EF196E6206EE05400144FF9CEC6_m.jpg" alt="戶外旅行">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F1823F46900F4B0BE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/F216A9FBA4841460E05400144FF9CEC6_m.jpg" alt="義大利金牌咖啡">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C17951C7FAE26E69E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/E8C55FAAC09E66AFE05400144FF9CEC6_m.jpg" alt="天然純棉">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/CC9223EEAA564C1EE05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/E91349E423AE4A4BE05400144FF82309_m.jpg" alt="自然農法">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F0CC0643D66F2331E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/02/24/images/bn/F1823F468EFA4B0BE05400144FF9CEC6_m.jpg" alt="質感輕珠寶">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- E -->
              <div id="sectionE" class="col-12 col-xl-11 p-0 mb-xl-4">
                <div class="grid-section-header mx-auto position-relative text-center text-xl-end mb-2 mb-xl-0 px-4 ps-xl-0 pe-xl-5" style="z-index: 99;">
                  <img src="images/act/2023/02/24/images/wave2/header-section-e.png" class="img-fluid us-none" alt="品味生活">
                </div>
                <div class="section-wrapper section-e position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-product position-relative align-self-center px-2 px-xl-0" style="z-index: 1;">
                      <a href="https://www.vivatv.com.tw/goods/3048212022">
                        <picture>
                          <source srcset="images/act/2023/02/24/images/wave2/product-section-e.png" media="(min-width: 992px)">
                          <img class="img-fluid" src="images/act/2023/02/24/images/wave2/mobile/product-section-e.png" alt="de Buyer木柄蜂蠟系列  單柄3格鬆餅鍋27cm/鐵鍋">
                        </picture>
                      </a>
                    </div>
                    <div class="section-inner position-relative d-flex flex-column p-1 p-xl-5 ps-xl-1">
                      <div class="d-flex flex-column justify-content-center align-items-center">
                        <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                          <div v-if="item.type === 'E1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                            <div class="item-inner d-flex flex-column p-2">
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                              </div>
                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>

              <!-- </div> -->
            </div>
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
      isLoading: false,
      failed: false,
      imgError: 'this.src="/html/images/act/2023/02/24/images/img-error.png"',
      items: [],
      wave1: false,
      wave2: false,
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = '/html/images/act/2023/02/24/json/data.json';
      var path2 = '/html/images/act/2023/02/24/json/data2.json';
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
      

      

      if ( moment(timeNow).isBetween('2023-02-18 00:00:00', '2023-03-12 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
      }
      if ( moment(timeNow).isBetween('2023-03-13 00:00:00', '2023-03-26 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
      }

      path = path1;

      


      if (timeFromURL) {
        // dataTime = timeFromURL.substr(4, 4);
        dataTime = timeFromURL;
        console.log('dataTime: ' + dataTime);
        
      } else {
        dataTime = year + month + date;
        console.log('dataTime: ' + dataTime);
        
      }



      
      if ( moment(timeNow).isSameOrBefore('2023-03-12 23:59:59') ) {
        path = path1;
      } else {
        path = path2;
      }



      console.log('path:'+path);




      // 倒數計時
      // var eventTime = moment('2022-12-18 12:00:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');

      // if (timeFromURL) {
      //   var hhmmFromURL = timeFromURL.substr(8,2) + ':' + timeFromURL.substr(10,2) + ':00' ;
      //   console.log('hhmmFromURL:'+hhmmFromURL);
      //   currentTime = moment(hhmmFromURL, 'HH:mm:ss').diff(moment().startOf('year'), 'seconds');
      //   console.log('currentTime:'+currentTime);
      // }

      // console.log('eventTime: '+eventTime);
      
        
      // var currentTime = moment().diff(moment().startOf('year'), 'seconds');
      
      // console.log('currentTime: '+ currentTime);

      // var diffTime = eventTime - currentTime;
        
        

      // var timer = setInterval(function(){

      //   currentTime = moment().diff(moment().startOf('year'), 'seconds');

        

      //   diffTime = eventTime - currentTime;
        
      //   if (diffTime > 0) {

      //     var duration = moment.duration(diffTime*1000, 'milliseconds');
      //     var m = duration.months();
      //     var d = duration.days();
      //     var md = m*30 + d;
          


      //     $('.countdown').html(
      //       '<span class="countdown-number">' + md + '</span> 天 ' + 
      //       '<span class="countdown-number">' + duration.hours() + '</span> 時 ' + 
      //       '<span class="countdown-number">' + duration.minutes() + '</span> 分 ' + 
      //       '<span class="countdown-number">' + duration.seconds() + '</span> 秒 ' );
      //   } else {
      //     $('#countDownTimer').hide();
      //     clearInterval(timer);
      //   }

      // }, 1000);
          

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
        if (this.items[i].id == '3079912022' || this.items[i].id == '2988582021') {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.png');
        } else {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
        }
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2023/02/24/images/product/'+ this.items[i].id +'/1.jpg');
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
        // this.items[j].launch = this.items[j].start.substr(11,5);

        this.items[j].launch = this.items[j].start.substr(5,11);
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


        if (timeFromURL == '20221223') {
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
      

      if (e.target.naturalWidth == 1) {
        e.target.src = "/html/images/act/2023/02/24/images/product/"+ t +".jpg";

      }

      
    },
    altImage: function(e) {
      

      // var t = e.target.alt;
      // e.target.src = "/html/images/act/2023/02/24/images/product/"+ t +".jpg";
      

      // if (e.target.imgchecked) {
      //   e.target.src = "/html/images/act/2023/02/24/images/img-error.png";
      // } else {
      //   e.target.src = "/html/images/act/2023/02/24/images/product/"+ t +".jpg";
      // }

      // if (e.target.naturalWidth == 1) {
      //   e.target.src = "/html/images/act/2023/02/24/images/product/"+ t +".jpg";

      // }

      
      // e.target.imgchecked = true;
      // e.target.onerror = null;

      
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


      setTimeout(function(){

        const observer = new IntersectionObserver(changeNav, options);
        const section = document.querySelectorAll('.section-observer');
        if (section) {
          section.forEach((el) => {
            observer.observe(el);
          });
        }
      

        const stickyElm = document.querySelector('.btn-nav-group');
        const stickyBlackFridayNav = document.querySelector('#blackFridayNav');

        const observer2 = new IntersectionObserver( 
          ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
          {
            rootMargin: '-1px 0px 0px 0px',
            threshold: [1]
          }
        );
        if (stickyElm) {
          observer2.observe(stickyElm);
        }

        if (stickyBlackFridayNav) {
          observer2.observe(stickyBlackFridayNav);
        }


        

      }, 2000);
      
      


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

      
      if (moment(timeNow).isBetween('2022-12-13 00:00:00', '2022-12-25 23:59:59', 'second', '[]')) {
        var dateNow = '1106';
      } else {
        var dateNow = timeNow.substr(5,2) + timeNow.substr(8,2);
      }
      

      console.log('dateNow:'+dateNow);

      

      setTimeout(()=>{

        var triggerEl = document.querySelector('#pills-'+ dateNow +'-tab');
        
        

        if (triggerEl) {
            new bootstrap.Tab(triggerEl).show();  
        }
      
      }, 1000);
      
    
      



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

