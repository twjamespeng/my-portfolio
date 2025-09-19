<template>
  
  <div>
    <div v-if="wave1" class="main-section wave1" style="z-index: 2;">
      <!-- one day -->
      <div v-if="oneday_1218" id="oneDayWrapper" class="position-relative pt-1 pt-xl-5">
        <div class="container-xl container-oneday p-0">
          <div class="row g-0 justify-content-center position-relative" style="z-index: 2;">
            <div class="col-12 col-xxl-10 p-1">
              <div class="section-header text-center mx-auto p-3" style="max-width: 600px;">
                <img src="images/act/2022/12/sp/images/header-countdown.png" class="img-fluid us-none" alt="2022年度暢銷商品大賞">
              </div>
              <div class="section-oneday">
                
                <div class="section-body" style="">
                  <div class="d-flex justify-content-center countdown-timer mb-3 pe-none us-none">
                    <div id="countDownTimer" class="px-2 fs-5">
                      <span>最後倒數</span>
                      <span class="countdown fw-normal"></span>
                    </div>
                  </div>
                  <div class="section-wrapper p-xl-4">
                    <div id="oneDaySection" class="row row-cols-3 row-cols-md-3 row-cols-xl-3 g-0">
                      <div 
                        v-if="item.type === 'S1'" 
                        v-for="item in items" 
                        class="col p-1 p-md-2 text-start d-flex flex-column item mb-2 mb-xl-3">
                        
                          
                          <div class="item-inner d-flex flex-column p-1">

                            <!-- <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                            </div>
                            <div v-else-if="item.before" class="item-body mb-xl-3">
                              <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                            </div> -->

                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                            </div>
                            <div v-else-if="item.before" class="item-body mb-xl-3">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                            </div>

                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                            </div>
                            <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                              <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-7 fs-xl-5">開賣</span></span></div>
                            </div>
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                              <div class="item-price text-center mb-1">搶購結束</div>
                            </div>
                          </div>
                        
                            



                          
                        
                            

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="primary-section d-flex flex-column align-items-center">
        <div class="col-8 col-xl-4 p-4 pb-0 p-xl-5 pb-xl-3">
          <img src="images/act/2022/12/sp/images/primary-section-header.png" class="img-fluid us-none">
        </div>
        <div class="col-12 col-md-10 col-xl-8 col-xxl-6 px-3 py-1 p-xl-2">
          <div class="d-flex justify-content-center position-relative">
            <div v-if="before_1222" class="primary-section-btn-0 p-1 p-xl-2 align-self-center">
              <a data-bs-toggle="modal" href="#eventModal-G"><img src="images/act/2022/12/sp/images/primary-section-btn-0.png" class="img-fluid us-none"></a>
            </div>
            <div class="d-flex ps-xl-5">
              <div class="primary-section-btn-1 p-1 p-xl-2">
                <a data-bs-toggle="modal" href="#eventModal-E"><img src="images/act/2022/12/sp/images/primary-section-btn-1.png" class="img-fluid us-none"></a>
              </div>
              <div class="primary-section-btn-2 p-1 p-xl-2">
                <a data-bs-toggle="modal" href="#eventModal-B"><img src="images/act/2022/12/sp/images/primary-section-btn-2.png" class="img-fluid us-none"></a>
              </div>
              <div class="primary-section-btn-3 p-1 p-xl-2">
                <a data-bs-toggle="modal" href="#eventModal-A"><img src="images/act/2022/12/sp/images/primary-section-btn-3.png" class="img-fluid us-none"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="secondary-section d-flex flex-column align-items-center">
        <div class="col-12 col-md-10 col-xl-6 p-3 pb-0">
          <img src="images/act/2022/12/sp/images/secondary-section-header.png" class="img-fluid us-none">
        </div>
        <div class="col-12 col-xl-7 p-1 p-xl-2">
          <div class="row row-cols-1 row-cols-md-2 g-0 justify-content-center">
            <div class="col mb-md-3">
              <a data-bs-toggle="modal" href="#eventModal-J"><img src="images/act/2022/12/sp/images/secondary-section-btn-1.png" class="img-fluid us-none"></a>
            </div>
            <div class="col mb-md-3">
              <a data-bs-toggle="modal" href="#eventModal-C"><img src="images/act/2022/12/sp/images/secondary-section-btn-2.png" class="img-fluid us-none"></a>
            </div>
            <div class="col mb-md-3">
              <a data-bs-toggle="modal" href="#eventModal-D"><img src="images/act/2022/12/sp/images/secondary-section-btn-3.png" class="img-fluid us-none"></a>
            </div>
            <div class="col mb-md-3">
              <a data-bs-toggle="modal" href="#eventModal-I"><img src="images/act/2022/12/sp/images/secondary-section-btn-4.png" class="img-fluid us-none"></a>
            </div>
          </div>
        </div>
        
        <div class="col-12 col-xl-8 col-xxl-6 p-1 p-xl-2 text-center">
          <div id="swpA" class="swiper-container position-relative">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/ED06AA0FB0776686E05400144FF82309">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/secondary-section-banner-1.png" alt="年菜預購">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="http://www.vivatv.com.tw/category/secondaryCategory/EE10ED5F49AE009EE05400144FF9CEC6">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/secondary-section-banner-2.png" alt="激情雙旦 年終迎新">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/EDF5B2635B882429E05400144FF9CEC6">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/secondary-section-banner-3.png" alt="Sabre 專區">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>


        <!-- 銀行優惠 -->
        <div class="col-12 col-xl-8 col-xxl-6 p-2 mb-3 mb-xl-5" style="max-width: 1000px;">
          <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
            <div>
              <a href="https://www.vivatv.com.tw/html/202212_creditcard.html">
                <img src="images/act/2022/12/sp/images/header-bank.jpg" class="img-fluid us-none">
              </a>
            </div>
            <div id="swpBank" class="swiper-container position-relative overflow-hidden">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202212_creditcard.html#card-ctbc" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-ctbc.png" class="card-img-top" alt="中信">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">單筆分期滿<span class="fw-bold text-danger">3000</span><br>送刷卡金<span class="fw-bold text-danger">3%</span>回饋</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202212_creditcard.html#card-dbs" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202212_creditcard.html#card-sinopac" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">3500</span></p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202212_creditcard.html#card-feib" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">刷卡分期滿額<br>最高回饋<span class="fw-bold text-danger">3350</span>刷卡金</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202212_creditcard.html#card-citi" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-citi.png" class="card-img-top" alt="花旗">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">分期最高享<span class="fw-bold text-danger">600元</span><br>統一超商商品卡</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202212_creditcard.html#card-rakuten" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">【分期０利率】<br>為生活加油打氣</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202212_creditcard.html#card-scsb" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">12122</span>元刷卡金</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202212_creditcard.html#card-ubot" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">刷聯邦卡<br>滿額送刷卡金</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202212_creditcard.html#card-first" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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
      </div>
    </div>
    <!-- 公格navBar -->
    <div v-if="wave1" id="publicGrid">
      <div v-if="start_1021" id="navBar" class="btn-nav-group d-flex justify-content-center mb-3 mb-xl-4">
        <div class="navbar-inner d-flex justify-content-between align-items-center position-relative p-0 p-md-1">
          <button id="Btn1" class="btn btn-nav border-0 rounded-0 p-0 p-md-2" type="button" onclick="scrollToSection('sectionA')" data-scroll-target="#sectionA">
            <img src="images/act/2022/12/sp/images/btn-nav-1.png" class="img-fluid">
          </button>
          <button id="Btn2" class="btn btn-nav border-0 rounded-0 p-0 p-md-2" type="button" onclick="scrollToSection('sectionB')" data-scroll-target="#sectionB">
            <img src="images/act/2022/12/sp/images/btn-nav-2.png" class="img-fluid">
          </button>
          <button id="Btn3" class="btn btn-nav border-0 rounded-0 p-0 p-md-2" type="button" onclick="scrollToSection('sectionC')" data-scroll-target="#sectionC">
            <img src="images/act/2022/12/sp/images/btn-nav-3.png" class="img-fluid">
          </button>
          <button id="Btn4" class="btn btn-nav border-0 rounded-0 p-0 p-md-2" type="button" onclick="scrollToSection('sectionD')" data-scroll-target="#sectionD">
            <img src="images/act/2022/12/sp/images/btn-nav-4.png" class="img-fluid">
          </button>
          <button id="Btn5" class="btn btn-nav border-0 rounded-0 p-0 p-md-2" type="button" onclick="scrollToSection('sectionE')" data-scroll-target="#sectionE">
            <img src="images/act/2022/12/sp/images/btn-nav-5.png" class="img-fluid">
          </button>
        </div>
      </div>
      <!-- 公格 -->
      <div class="w-100" style="overflow-x: hidden;">
        <div class="container-xl p-0 position-relative" style="z-index: 2;">
          <div class="row g-0 justify-content-center">
            <div class="col-12 col-xxl-10 p-1">
              <!-- A -->
              <div id="sectionA" class="mb-4">
                <div class="mx-auto mb-1" style="max-width: 640px;"><img src="images/act/2022/12/sp/images/title-section-a.png" class="img-fluid us-none" alt="剁手必買"></div>
                <div class="section-wrapper section-a position-relative">
                  <div class="section-observer"></div>
                  <div class="section-inner d-flex flex-column p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <!-- 公格上排 -->
                      <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'A1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                          <div class="item-inner d-flex flex-column p-1">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                            </div>
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                            </div>
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                              <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- 公格下排 -->
                      <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'A2'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                          <div class="item-inner d-flex flex-column p-1">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                            </div>
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                              <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                            </div>
                          </div>
                        </div>
                      </div> -->
                      
                    </div>
                    
                  </div>
                </div>
              </div>

              <!-- B -->
              <div id="sectionB" class="mb-4">
                <div class="mx-auto mb-1" style="max-width: 640px;"><img src="images/act/2022/12/sp/images/title-section-b.png" class="img-fluid us-none" alt="夯品搶購"></div>
                <div class="section-wrapper section-b position-relative">
                  <div class="section-observer"></div>
                  <div class="section-inner d-flex flex-column p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <!-- 公格上排 -->
                      <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'B1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item" :data-start="item.start">
                          <div class="item-inner d-flex flex-column p-1">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                            </div>
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                            </div>
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                              <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- 公格下排 -->
                      <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'B2'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                          <div class="item-inner d-flex flex-column p-1">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                            </div>
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                              <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                            </div>
                          </div>
                        </div>
                      </div> -->
                      
                    </div>
                    
                  </div>
                </div>
              </div>

              <!-- swpD -->
              <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/searchResult/%E6%A1%82%E5%9C%93%E7%A6%8F%E8%B2%B4%E7%B3%95">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/EDF5A5174190054CE05400144FF82309_m.jpg" alt="福貴糕">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/ED02422A5C28609CE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/EDF6485D62B33B06E05400144FF82309_m.jpg" alt="勝崎生鮮">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/ED06AA0FB0996686E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/EDF5A5174281054CE05400144FF82309_m.jpg" alt="迎冬保養">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/CC9223EEAA564C1EE05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/E91349E423AE4A4BE05400144FF82309_m.jpg" alt="自然農法的實踐者">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- C -->
              <div id="sectionC" class="mb-4">
                <div class="mx-auto mb-1" style="max-width: 640px;"><img src="images/act/2022/12/sp/images/title-section-c.png" class="img-fluid us-none" alt="食尚主義"></div>
                <div class="section-wrapper section-c position-relative">
                  <div class="section-observer"></div>
                  <div class="section-inner d-flex flex-column p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <!-- 公格上排 -->
                      <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'C1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                          <div class="item-inner d-flex flex-column p-1">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                            </div>
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                            </div>
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                              <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- 公格下排 -->
                      <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'C2'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                          <div class="item-inner d-flex flex-column p-1">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                            </div>
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                              <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                            </div>
                          </div>
                        </div>
                      </div> -->
                      
                    </div>
                    
                  </div>
                </div>
              </div>

              <!-- swpE -->
              <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="swiper-custom">
                  <div id="swpE" class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/C5DF6CB63EAB3708E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/E8C580515F4263F1E05400144FF82309_m.jpg" alt="歐美精品">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3004972021">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/E8C60E933126296DE05400144FF9CEC6_m.jpg" alt="清潤飴">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C55317C9C7CA435DE05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/E8C580515F3C63F1E05400144FF82309_m.jpg" alt="立體金箔畫">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/E391F8619E263D07E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/E8C55FAAC0A166AFE05400144FF9CEC6_m.jpg" alt="黑蒜頭">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- D -->
              <div id="sectionD" class="mb-4">
                <div class="mx-auto mb-1" style="max-width: 640px;"><img src="images/act/2022/12/sp/images/title-section-d.png" class="img-fluid us-none" alt="品味格調"></div>
                <div class="section-wrapper section-d position-relative">
                  <div class="section-observer"></div>
                  <div class="section-inner d-flex flex-column p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <!-- 公格上排 -->
                      <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'D1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                          <div class="item-inner d-flex flex-column p-1">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                            </div>
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                            </div>
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                              <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- 公格下排 -->
                      <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'D2'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                          <div class="item-inner d-flex flex-column p-1">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                            </div>
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                              <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                            </div>
                          </div>
                        </div>
                      </div> -->
                      
                    </div>
                    
                  </div>
                </div>
              </div>

              

              <!-- E -->
              <div id="sectionE" class="mb-4">
                <div class="mx-auto mb-1" style="max-width: 640px;"><img src="images/act/2022/12/sp/images/title-section-e.png" class="img-fluid us-none" alt="脫單必備"></div>
                <div class="section-wrapper section-e position-relative">
                  <div class="section-observer"></div>
                  <div class="section-inner d-flex flex-column p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <!-- 公格上排 -->
                      <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'E1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                          <div class="item-inner d-flex flex-column p-1">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                            </div>
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                            </div>
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                              <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- 公格下排 -->
                      <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'E2'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                          <div class="item-inner d-flex flex-column p-1">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                            </div>
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                              <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                            </div>
                          </div>
                        </div>
                      </div> -->
                      
                    </div>
                    
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="wave2" class="main-section wave2 px-2" style="z-index: 2;">
      <div class="primary-section d-flex flex-column align-items-center mb-3 mb-xl-5">
        <!-- <div class="col-8 col-xl-4 p-4 pb-0 p-xl-5 pb-xl-3">
          <img src="images/act/2022/12/sp/images/primary-section-header.png" class="img-fluid us-none">
        </div> -->
        <div class="col-12 col-md-10 col-xl-7 primary-section-stage">
          <div class="d-flex justify-content-center position-relative">
            <div class="primary-section-btn-0 p-xl-2 align-self-center">
              <a href="https://www.vivatv.com.tw/html/202212rain.html"><img src="images/act/2022/12/sp/images/wave2/primary-section-btn-0.png" class="img-fluid us-none"></a>
            </div>
            <div class="d-flex">
              <div class="primary-section-btn-1 p-1 p-xl-2 align-self-center">
                <a data-bs-toggle="modal" href="#eventModal-E"><img src="images/act/2022/12/sp/images/wave2/primary-section-btn-1.png" class="img-fluid us-none"></a>
              </div>
              <div class="primary-section-btn-2 p-1 p-xl-2 align-self-center">
                <a data-bs-toggle="modal" href="#eventModal-B"><img src="images/act/2022/12/sp/images/wave2/primary-section-btn-2.png" class="img-fluid us-none"></a>
              </div>
              <div class="primary-section-btn-3 p-1 p-xl-2 align-self-center">
                <a data-bs-toggle="modal" href="#eventModal-A"><img src="images/act/2022/12/sp/images/wave2/primary-section-btn-3.png" class="img-fluid us-none"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="secondary-section position-relative d-flex flex-column align-items-center">
        <div class="secondary-section-header w-100 text-center position-relative" style="">
          <picture>
            <source srcset="images/act/2022/12/sp/images/wave2/secondary-section-header.png" media="(min-width: 992px)">
            <img class="img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave2/secondary-section-header.png">
          </picture>
        </div>

        <div class="secondary-section-wrapper position-relative col-12 col-xl-7 mb-3 mb-xl-5">
          <div class="secondary-section-stage p-1 p-xl-3">
            <div class="row row-cols-2 g-0 justify-content-center">
              <div class="col text-center">
                <a data-bs-toggle="modal" href="#eventModal-J"><img src="images/act/2022/12/sp/images/wave2/secondary-section-btn-1.png" class="img-fluid us-none"></a>
              </div>
              <div class="col text-center">
                <a data-bs-toggle="modal" href="#eventModal-C"><img src="images/act/2022/12/sp/images/wave2/secondary-section-btn-2.png" class="img-fluid us-none"></a>
              </div>
              <div class="col text-center">
                <a data-bs-toggle="modal" href="#eventModal-D"><img src="images/act/2022/12/sp/images/wave2/secondary-section-btn-3.png" class="img-fluid us-none"></a>
              </div>
              <div class="col text-center">
                <a data-bs-toggle="modal" href="#eventModal-I"><img src="images/act/2022/12/sp/images/wave2/secondary-section-btn-4.png" class="img-fluid us-none"></a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-12 col-xl-6 p-1 p-xl-2 text-center">
          <div id="swpB" class="swiper-container position-relative">
            <div class="swiper-wrapper mb-2">
              <div v-if="end_0112" class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/secondaryCategory/ED06AA0FB0776686E05400144FF82309">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave2/secondary-section-banner-1.png" alt="年菜預購" style="border-radius: 2rem; overflow: hidden;">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/secondaryCategory/EF290B9CACA71F8FE05400144FF82309">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave2/secondary-section-banner-6.jpg" alt="歲末佈新" style="border-radius: 2rem; overflow: hidden;">
                </a>
              </div>
              <div v-if="end_1231" class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/tertiaryCategory/EDF5B2635B882429E05400144FF9CEC6">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave2/secondary-section-banner-3.png" alt="Sabre 專區" style="border-radius: 2rem; overflow: hidden;">
                </a>
              </div>
              <div v-if="start_0113" class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/secondaryCategory/ED06AA0FB0996686E05400144FF82309">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave2/secondary-section-banner-4.jpg" alt="迎冬保養" style="border-radius: 2rem; overflow: hidden;">
                </a>
              </div>
              <div v-if="start_0101" class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/secondaryCategory/92F4C172F8C620D0E0536E0212AC2C79">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave2/secondary-section-banner-5.jpg" alt="暖適" style="border-radius: 2rem; overflow: hidden;">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <!-- one day -->
        <div v-if="end_0106" id="oneDayWrapper" class="position-relative pt-1 pt-xl-5 mb-3 mb-xl-5">
          <div class="container-xl container-oneday p-0">
            <div class="oneday-section-header w-100 text-center position-relative" style="">
              <picture>
                <source srcset="images/act/2022/12/sp/images/wave2/oneday-section-header.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave2/oneday-section-header.png">
              </picture>
            </div>
            <div class="row g-0 justify-content-center position-relative" style="z-index: 2;">
              <div class="col-12 col-xl-10 p-1 px-xl-3">
                <div class="section-oneday">
                  
                  <div class="section-body position-relative" style="">
                    
                    <div id="oneDaySection" class="section-wrapper position-relative p-1 p-xl-4">
                      <div class="row row-cols-3 row-cols-md-3 row-cols-xl-3 g-0">
                        <div 
                          v-if="item.type === 'S1'" 
                          v-for="item in items" 
                          class="col p-1 p-md-2 text-start d-flex flex-column item mb-xl-2">
                            <div class="item-inner d-flex flex-column p-1 p-xl-2">                            
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                              </div>
                              <div v-else-if="item.before" class="item-body mb-xl-3">
                                <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                              </div>

                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                                <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                              </div>
                              <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-7 fs-xl-5">開賣</span></span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1">搶購結束</div>
                              </div>
                            </div>
                        </div>
                      </div>
                      <div class="row row-cols-2 row-cols-md-4 row-cols-xl-4 g-0">
                        <div 
                          v-if="item.type === 'S2'" 
                          v-for="item in items" 
                          class="col p-1 p-md-2 text-start d-flex flex-column item mb-xl-2">
                            <div class="item-inner d-flex flex-column p-1 p-xl-2">                            
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                              </div>
                              <div v-else-if="item.before" class="item-body mb-xl-3">
                                <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                              </div>

                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                                <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                              </div>
                              <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-7 fs-xl-5">開賣</span></span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1">搶購結束</div>
                              </div>
                            </div>
                        </div>
                      </div>
                      <div class="row row-cols-3 row-cols-md-3 row-cols-xl-3 g-0">
                        <div 
                          v-if="item.type === 'S3'" 
                          v-for="item in items" 
                          class="col p-1 p-md-2 text-start d-flex flex-column item mb-xl-2">
                            <div class="item-inner d-flex flex-column p-1 p-xl-2">                            
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                              </div>
                              <div v-else-if="item.before" class="item-body mb-xl-3">
                                <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                              </div>

                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                                <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                              </div>
                              <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-7 fs-xl-5">開賣</span></span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1">搶購結束</div>
                              </div>
                            </div>
                        </div>
                      </div>
                      <div class="row row-cols-2 row-cols-md-4 row-cols-xl-4 g-0">
                        <div 
                          v-if="item.type === 'S4'" 
                          v-for="item in items" 
                          class="col p-1 p-md-2 text-start d-flex flex-column item mb-xl-2">
                            <div class="item-inner d-flex flex-column p-1 p-xl-2">                            
                              <div v-if="item.available" class="item-body mb-xl-3">
                                <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                              </div>
                              <div v-else-if="item.before" class="item-body mb-xl-3">
                                <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                              </div>
                              <div v-else class="item-body mb-xl-3">
                                <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                              </div>

                              <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                                <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                              </div>
                              <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-7 fs-xl-5">開賣</span></span></div>
                              </div>
                              <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                <div class="item-price text-center mb-1">搶購結束</div>
                              </div>
                            </div>
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
        <div class="col-12 col-xl-7 p-2 mb-3 mb-xl-5" style="max-width: 1090px;">
          <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
            <div>
              <a href="https://www.vivatv.com.tw/html/202301_creditcard.html">
                <img src="images/act/2022/12/sp/images/header-bank.jpg" class="img-fluid us-none">
              </a>
            </div>
            <div id="swpBank" class="swiper-container position-relative overflow-hidden">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202301_creditcard.html#card-ctbc" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-ctbc.png" class="card-img-top" alt="中信">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">單筆分期滿<span class="fw-bold text-danger">3000</span><br>送刷卡金<span class="fw-bold text-danger">3%</span>回饋</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202301_creditcard.html#card-dbs" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202301_creditcard.html#card-sinopac" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">3500</span></p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202301_creditcard.html#card-feib" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">刷卡分期滿額<br>最高回饋<span class="fw-bold text-danger">3350</span>刷卡金</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202301_creditcard.html#card-citi" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-citi.png" class="card-img-top" alt="花旗">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">分期最高享<span class="fw-bold text-danger">600元</span><br>統一超商商品卡</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202301_creditcard.html#card-rakuten" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">【分期０利率】<br>為生活加油打氣</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202301_creditcard.html#card-scsb" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">12122</span>元刷卡金</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202301_creditcard.html#card-ubot" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                      <div class="card-body border-top p-2">
                        <p class="card-text text-center text-dark">刷聯邦卡<br>滿額送刷卡金</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/202301_creditcard.html#card-first" class="d-block">
                    <div class="card h-100 border-end rounded-0">
                      <img src="images/act/2022/12/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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
      </div> 
    </div>
    <!-- 公格navBar -->
    <div v-if="wave2" id="publicGrid" class="wave2">
      <div id="navBar" class="btn-nav-group d-flex justify-content-center mb-3 mb-xl-4">
        <div class="navbar-inner d-flex justify-content-between align-items-center position-relative p-0 p-md-1">
          <button id="Btn1" class="btn btn-nav border-0 rounded-0 p-0 p-md-1" type="button" onclick="scrollToSection('sectionA')" data-scroll-target="#sectionA">
            <img src="images/act/2022/12/sp/images/wave2/btn-nav-1-active.png" class="img-fluid rounded-3">
            <img src="images/act/2022/12/sp/images/wave2/btn-nav-1.png" class="img-fluid rounded-3">
          </button>
          <button id="Btn2" class="btn btn-nav border-0 rounded-0 p-0 p-md-1" type="button" onclick="scrollToSection('sectionB')" data-scroll-target="#sectionB">
            <img src="images/act/2022/12/sp/images/wave2/btn-nav-2-active.png" class="img-fluid rounded-3">
            <img src="images/act/2022/12/sp/images/wave2/btn-nav-2.png" class="img-fluid">
          </button>
          <button id="Btn3" class="btn btn-nav border-0 rounded-0 p-0 p-md-1" type="button" onclick="scrollToSection('sectionC')" data-scroll-target="#sectionC">
            <img src="images/act/2022/12/sp/images/wave2/btn-nav-3-active.png" class="img-fluid rounded-3">
            <img src="images/act/2022/12/sp/images/wave2/btn-nav-3.png" class="img-fluid">
          </button>
          <button id="Btn4" class="btn btn-nav border-0 rounded-0 p-0 p-md-1" type="button" onclick="scrollToSection('sectionD')" data-scroll-target="#sectionD">
            <img src="images/act/2022/12/sp/images/wave2/btn-nav-4-active.png" class="img-fluid rounded-3">
            <img src="images/act/2022/12/sp/images/wave2/btn-nav-4.png" class="img-fluid">
          </button>
          <button id="Btn5" class="btn btn-nav border-0 rounded-0 p-0 p-md-1" type="button" onclick="scrollToSection('sectionE')" data-scroll-target="#sectionE">
            <img src="images/act/2022/12/sp/images/wave2/btn-nav-5-active.png" class="img-fluid rounded-3">
            <img src="images/act/2022/12/sp/images/wave2/btn-nav-5.png" class="img-fluid">
          </button>
        </div>
      </div>
      <!-- 公格 -->
      <div class="w-100" style="overflow-x: hidden;">
        <div class="container-xl p-0 position-relative" style="z-index: 2;">
          <div class="row g-0 justify-content-center">
            <div class="mx-auto mb-1 position-relative" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave2/title-section-a.png" class="img-fluid us-none" alt="歲末歡聚"></div>
            <!-- <div class="col-12 col-xxl-10 p-1"> -->
            <!-- A -->
            <div id="sectionA" class="col-12 col-xxl-10 p-1 mb-4">
              <div class="section-wrapper section-a position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-4">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'A1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-1">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
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
            <div class="mx-auto mb-1 position-relative" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave2/title-section-b.png" class="img-fluid us-none" alt="節慶禮讚"></div>
            <!-- B -->
            <div id="sectionB" class="col-12 col-xxl-10 p-1 mb-4">
              <div class="section-wrapper section-b position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-4">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'B1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item" :data-start="item.start">
                        <div class="item-inner d-flex flex-column p-1">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                            <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'B2'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-1">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                            <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                    
                  </div>
                  
                </div>
              </div>
            </div>

            <!-- swpD -->
            <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xxl-10 p-1">
              <div class="swiper-custom">
                <div id="swpD" class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/ED0246E394C9668AE05400144FF82309">
                        <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/EED33EF196E6206EE05400144FF9CEC6_m.jpg" alt="戶外旅行">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/ED02422A5C28609CE05400144FF9CEC6">
                        <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/EDF6485D62B33B06E05400144FF82309_m.jpg" alt="勝崎生鮮">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/EF290B9CACA71F8FE05400144FF82309">
                        <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/EFEAB744D8306B46E05400144FF82309_m.jpg" alt="歲末佈新">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mx-auto mb-1 position-relative" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave2/title-section-c.png" class="img-fluid us-none" alt="繽紛年趣"></div>
            <!-- C -->
            <div id="sectionC" class="col-12 col-xxl-10 p-1 mb-4">
              <div class="section-wrapper section-c position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-4">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'C1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-1">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                            <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'C2'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-1">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                            <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                    
                  </div>
                  
                </div>
              </div>
            </div>

            <!-- swpE -->
            <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xxl-10 p-1">
              <div class="swiper-custom">
                <div id="swpE" class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/C5DF6CB63EAB3708E05400144FF82309">
                        <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/E8C580515F4263F1E05400144FF82309_m.jpg" alt="歐美精品">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/goods/3004972021">
                        <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/E8C60E933126296DE05400144FF9CEC6_m.jpg" alt="清潤飴">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C55317C9C7CA435DE05400144FF82309">
                        <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/E8C580515F3C63F1E05400144FF82309_m.jpg" alt="立體金箔畫">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/E391F8619E263D07E05400144FF9CEC6">
                        <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/E8C55FAAC0A166AFE05400144FF9CEC6_m.jpg" alt="黑蒜頭">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mx-auto mb-1 position-relative" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave2/title-section-d.png" class="img-fluid us-none" alt="除舊佈新"></div>
            <!-- D -->
            <div id="sectionD" class="col-12 col-xxl-10 p-1 mb-4">
              <div class="section-wrapper section-d position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-4">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'D1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-1">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                            <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'D2'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-1">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                            <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                    
                  </div>
                  
                </div>
              </div>
            </div>

            
            <div class="mx-auto mb-1 position-relative" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave2/title-section-e.png" class="img-fluid us-none" alt="開運魔法"></div>
            <!-- E -->
            <div id="sectionE" class="col-12 col-xxl-10 p-1 mb-4">
              <div class="section-wrapper section-e position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-4">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'E1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-1">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                            <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'E2'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-1">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 us-none" :alt="item.id" :title="item.name"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                            <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                    
                  </div>
                  
                </div>
              </div>
            </div>

            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <div v-if="wave3" class="main-section wave3 px-2" style="z-index: 2;">
      <div class="primary-section d-flex flex-column align-items-center pt-3">
        <div class="col-8 col-md-10 col-xl-5 p-xl-5 pb-xl-0" style="z-index: 2;">
          <img src="images/act/2022/12/sp/images/wave3/primary-section-header.png" class="img-fluid us-none">
        </div>
        <div class="col-12 col-md-10 col-xl-6 primary-section-stage">
          <div class="d-flex flex-column justify-content-center align-items-center position-relative">
            <div class="primary-section-btn-1 px-xl-3">
              <a data-bs-toggle="modal" href="#eventModal-Wave3-D"><img src="images/act/2022/12/sp/images/wave3/primary-section-btn-1.png" class="img-fluid us-none"></a>
            </div>
            <!-- <div v-if="start_0128" class="primary-section-btn-2 px-xl-3">
              <a href="https://www.vivatv.com.tw"><img src="images/act/2022/12/sp/images/wave3/primary-section-btn-2.png" class="img-fluid us-none"></a>
            </div> -->
          </div>
        </div>
      </div>
      <div class="secondary-section d-flex flex-column align-items-center mb-3 mb-xl-5">
        <div class="col-8 col-md-10 col-xl-5 p-xl-5 pb-xl-0" style="z-index: 2;">
          <img src="images/act/2022/12/sp/images/wave3/secondary-section-header.png?v2" class="img-fluid us-none">
        </div>
        <div class="col-12 col-md-10 col-xl-6 secondary-section-stage">
          <div class="d-flex flex-column">
          
            <div class="d-flex justify-content-center align-items-center position-relative pt-1">
              <div class="secondary-section-btn-1">
                <a data-bs-toggle="modal" href="#eventModal-Wave3-A"><img src="images/act/2022/12/sp/images/wave3/secondary-section-btn-1.png" class="img-fluid us-none" alt="買就抽$500銀幣"></a>
              </div>
              <div class="secondary-section-btn-2">
                <a data-bs-toggle="modal" href="#eventModal-Wave3-B"><img src="images/act/2022/12/sp/images/wave3/secondary-section-btn-2.png?v2" class="img-fluid us-none" alt="買就抽$800銀幣"></a>
              </div>
              <div class="secondary-section-btn-3">
                <a data-bs-toggle="modal" href="#eventModal-Wave3-C"><img src="images/act/2022/12/sp/images/wave3/secondary-section-btn-3.png?v2" class="img-fluid us-none" alt="買就抽$3000銀幣"></a>
              </div>
            </div>

            <div id="nowLive" class="position-relative col-12 col-xl-11 ps-xl-5 mx-auto">
              <div class="row g-0">
                <div 
                  v-if="item.type === 'S1' && item.available" 
                  v-for="item in items"
                  class="col col-xl-8 offset-xl-4 text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-row p-3">
                      <div class="item-body col-3 position-relative">
                        <a id="toggleYT1" data-bs-toggle="modal" data-bs-target="#youtubeModal" class="d-block">
                          <img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600">
                          <div class="position-absolute top-0 bottom-0 start-0 end-0 us-none" style="cursor: pointer;">
                            <img src="images/act/2022/12/sp/images/wave3/play.png" class="img-fluid">
                          </div>
                        </a>
                        
                      </div>
                      <div class="item-footer d-flex flex-column col-9 ps-3">
                        <div class="d-flex justify-content-start">
                          <div class="now-live-tag px-2 fs-7 rounded-0">美好1台現正播出</div>
                          <a href="https://www.vivatv.com.tw/tvSchedule/ch1/yuhgIlXwPh8" class="btn bg-red rounded-0 text-white fs-7 py-0">1台節目表</a>
                        </div>
                        <!-- <div class="item-brand d-flex flex-grow-1 justify-content-start align-items-end fs-6 fs-xl-5"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-start align-items-center fs-6 fs-xl-5"><a :href="item.url">{{item.name}}</a></div> -->
                        <div class="d-flex flex-grow-1 justify-content-start align-items-center fs-6 fs-xl-5">
                          <a :href="item.url">{{item.brand}}{{item.name}}</a>
                        </div>
                        <div class="item-price text-start fs-6 fs-xl-5"><span class="price-type me-1">新春價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            <!-- 新年七品 -->
            <div v-if="tvProgram" id="tvProgramWrapper" class="position-relative p-xl-3">
              <div class="container-xl container-tv-program p-0">
                <div class="tv-program-header w-100 text-center position-relative" style="">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/wave3/tv-program-header.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/tv-program-header.png">
                  </picture>
                </div>
                <div class="row g-0 justify-content-center position-relative" style="z-index: 2;">
                  <div class="col-12">
                    <div class="section-oneday">
                      
                      <div class="section-body position-relative" style="">
                        
                        <div id="" class="section-wrapper position-relative p-1 p-xl-2">
                          <div class="row row-cols-2 row-cols-md-4 row-cols-xl-4 g-0">

                            <div 
                              v-if="item.type === 'P1'" 
                              v-for="item in items"
                              
                              :class="item.id === '3097372022' ? 'offset-6 offset-md-3' : ''"
                              class="col p-1 text-start d-flex flex-column item">
                                <div class="item-inner d-flex flex-column p-1">                            
                                  <div v-if="item.available" class="item-body mb-xl-3">
                                    <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                                  </div>
                                  <div v-else-if="item.before" class="item-body mb-xl-3">
                                    <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                                  </div>
                                  <div v-else class="item-body mb-xl-3">
                                    <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid" width="600" height="600"></a>
                                  </div>

                                  <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                    <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                    <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                                    <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">新春價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                                    <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
                                  </div>
                                  <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                    <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                    <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                    <div class="item-price text-center mb-1"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-7 fs-xl-5">開賣</span></span></div>
                                  </div>
                                  <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                    <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                                    <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                                    <div class="item-price text-center mb-1">搶購結束</div>
                                  </div>
                                </div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        
      </div>
      <div class="secondary-section position-relative d-flex flex-column align-items-center">
        <!-- 銀行優惠 -->
        <div class="col-12 col-xl-6 p-2 mb-3 mb-xl-5" style="max-width: 1090px;">
          <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
            <div>
              <a href="https://www.vivatv.com.tw/html/202302_creditcard.html">
                <img src="images/act/2022/12/sp/images/header-bank.jpg" class="img-fluid us-none">
              </a>
            </div>
            <div id="swpBank" class="swiper-container position-relative overflow-hidden">
              <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-ctbc" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-ctbc.png" class="card-img-top" alt="中信">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<br>刷卡金<span class="fw-bold text-danger">800</span>元</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">1500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期滿額<br>最高回饋<span class="fw-bold text-danger">3%</span>刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-citi" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-citi.png" class="card-img-top" alt="花旗">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<span class="fw-bold text-danger">600元</span><br>統一超商商品卡</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>滿額加贈高回饋</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">1500</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br>滿額送刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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
        <!-- BN輪播 -->
        <div class="banner-section col-12 col-xl-6 p-xl-5 text-center">
          <div id="swpB" class="swiper-container position-relative mt-xl-5">
            <div class="swiper-wrapper mb-2">
              <div v-if="end_0112" class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/secondaryCategory/ED06AA0FB0776686E05400144FF82309">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave2/secondary-section-banner-1.png" alt="年菜預購" style="border-radius: 2rem; overflow: hidden;">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/secondaryCategory/EF290B9CACA71F8FE05400144FF82309">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave2/secondary-section-banner-6.jpg" alt="歲末佈新" style="border-radius: 2rem; overflow: hidden;">
                </a>
              </div>
              <div v-if="end_1231" class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/tertiaryCategory/EDF5B2635B882429E05400144FF9CEC6">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave2/secondary-section-banner-3.png" alt="Sabre 專區" style="border-radius: 2rem; overflow: hidden;">
                </a>
              </div>
              <div v-if="start_0113" class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/secondaryCategory/ED06AA0FB0996686E05400144FF82309">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave2/secondary-section-banner-4.jpg" alt="迎冬保養" style="border-radius: 2rem; overflow: hidden;">
                </a>
              </div>
              <div v-if="start_0101" class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/secondaryCategory/92F4C172F8C620D0E0536E0212AC2C79">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave2/secondary-section-banner-5.jpg" alt="暖適" style="border-radius: 2rem; overflow: hidden;">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        

        
      </div> 
    </div>
    
    <!-- 公格navBar -->
    <div v-if="wave3" id="publicGrid" class="wave3">
      <div id="navBar" class="btn-nav-group d-flex justify-content-center mb-3 mb-xl-4">
        <div class="navbar-inner d-flex justify-content-between align-items-center position-relative p-1 p-md-1">
          <button id="Btn1" class="btn btn-nav border-0 rounded-0 p-1 p-md-1" type="button" onclick="scrollToSection('sectionA')" data-scroll-target="#sectionA">
            <img src="images/act/2022/12/sp/images/wave3/btn-nav-1-active.png" class="img-fluid rounded-3">
            <img src="images/act/2022/12/sp/images/wave3/btn-nav-1.png" class="img-fluid rounded-3">
          </button>
          <button id="Btn2" class="btn btn-nav border-0 rounded-0 p-1 p-md-1" type="button" onclick="scrollToSection('sectionB')" data-scroll-target="#sectionB">
            <img src="images/act/2022/12/sp/images/wave3/btn-nav-2-active.png" class="img-fluid rounded-3">
            <img src="images/act/2022/12/sp/images/wave3/btn-nav-2.png" class="img-fluid">
          </button>
          <button id="Btn3" class="btn btn-nav border-0 rounded-0 p-1 p-md-1" type="button" onclick="scrollToSection('sectionC')" data-scroll-target="#sectionC">
            <img src="images/act/2022/12/sp/images/wave3/btn-nav-3-active.png" class="img-fluid rounded-3">
            <img src="images/act/2022/12/sp/images/wave3/btn-nav-3.png" class="img-fluid">
          </button>
          <button id="Btn4" class="btn btn-nav border-0 rounded-0 p-1 p-md-1" type="button" onclick="scrollToSection('sectionD')" data-scroll-target="#sectionD">
            <img src="images/act/2022/12/sp/images/wave3/btn-nav-4-active.png" class="img-fluid rounded-3">
            <img src="images/act/2022/12/sp/images/wave3/btn-nav-4.png" class="img-fluid">
          </button>
          <button id="Btn5" class="btn btn-nav border-0 rounded-0 p-1 p-md-1" type="button" onclick="scrollToSection('sectionE')" data-scroll-target="#sectionE">
            <img src="images/act/2022/12/sp/images/wave3/btn-nav-5-active.png" class="img-fluid rounded-3">
            <img src="images/act/2022/12/sp/images/wave3/btn-nav-5.png" class="img-fluid">
          </button>
        </div>
      </div>
      <!-- 公格 -->
      <div class="w-100" style="overflow-x: hidden;">
        <div class="container-xl p-0 position-relative" style="z-index: 2;">
          <div class="row g-0 justify-content-center">
            
            <!-- <div class="col-12 col-xxl-10 p-1"> -->
            <!-- A -->
            <div id="sectionA" class="col-12 col-xl-9 p-1 p-xl-3 mb-4">
              <div class="grid-section-header mx-auto position-relative text-center mb-2 mb-xl-0" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave3/title-section-a.png" class="img-fluid us-none" alt="走春納福"></div>
              <div class="section-wrapper section-a position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-4">
                  <div class="d-flex flex-column justify-content-center align-items-center pt-4 pt-xl-5">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'A1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2 p-xl-3">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">新春價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
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
            
            <!-- B -->
            <div id="sectionB" class="col-12 col-xl-9 p-1 p-xl-3 mb-4">
              <div class="grid-section-header mx-auto position-relative text-center mb-2 mb-xl-0" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave3/title-section-b.png" class="img-fluid us-none" alt="夢幻佳節"></div>
              <div class="section-wrapper section-b position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-4">
                  <div class="d-flex flex-column justify-content-center align-items-center pt-4 pt-xl-5">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'B1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item" :data-start="item.start">
                        <div class="item-inner d-flex flex-column p-2 p-xl-3">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">新春價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
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

            <!-- swpD -->
            <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-9 p-1">
              <div class="swiper-custom">
                <div id="swpD" class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F1823F468EB04B0BE05400144FF9CEC6">
                        <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/EED33EF196E6206EE05400144FF9CEC6_m.jpg" alt="戶外旅行">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F1823F46900F4B0BE05400144FF9CEC6">
                        <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/F216A9FBA4841460E05400144FF9CEC6_m.jpg" alt="義大利金牌咖啡">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F0CC0643D66F2331E05400144FF9CEC6">
                        <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/F1823F468EFA4B0BE05400144FF9CEC6_m.jpg" alt="質感輕珠寶">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- C -->
            <div id="sectionC" class="col-12 col-xl-9 p-1 p-xl-3 mb-4">
              <div class="grid-section-header mx-auto position-relative text-center mb-2 mb-xl-0" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave3/title-section-c.png" class="img-fluid us-none" alt="迎春開運"></div>
              <div class="section-wrapper section-c position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-4">
                  <div class="d-flex flex-column justify-content-center align-items-center pt-4 pt-xl-5">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'C1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2 p-xl-3">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">新春價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
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

            <!-- swpE -->
            <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-9 p-1">
              <div class="swiper-custom">
                <div id="swpE" class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/EDF5A51742BF054CE05400144FF82309">
                        <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/EED3554AA527447BE05400144FF82309_m.jpg" alt="阿母滴雞湯">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/ED02422A5C28609CE05400144FF9CEC6">
                        <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/EDF6485D62B33B06E05400144FF82309_m.jpg" alt="勝崎生鮮">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/E391F8619E263D07E05400144FF9CEC6">
                        <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/E8C55FAAC0A166AFE05400144FF9CEC6_m.jpg" alt="黑蒜頭">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- D -->
            <div id="sectionD" class="col-12 col-xl-9 p-1 p-xl-3 mb-4">
              <div class="grid-section-header mx-auto position-relative text-center mb-2 mb-xl-0" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave3/title-section-d.png" class="img-fluid us-none" alt="禮饗好年"></div>
              <div class="section-wrapper section-d position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-4">
                  <div class="d-flex flex-column justify-content-center align-items-center pt-4 pt-xl-5">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'D1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2 p-xl-3">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">新春價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
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

            <!-- E -->
            <div id="sectionE" class="col-12 col-xl-9 p-1 p-xl-3 mb-4">
              <div class="grid-section-header mx-auto position-relative text-center mb-2 mb-xl-0" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave3/title-section-e.png" class="img-fluid us-none" alt="專屬飾禮"></div>
              <div class="section-wrapper section-e position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-4">
                  <div class="d-flex flex-column justify-content-center align-items-center pt-4 pt-xl-5">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'E1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2 p-xl-3">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">新春價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
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

            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>

    <div v-if="wave4" class="main-section wave4" style="z-index: 2;">
      <div class="primary-section d-flex flex-column align-items-center">
        <div class="col-12 col-md-10 col-xl-7 primary-section-stage">
          <div class="d-flex flex-column justify-content-center align-items-center position-relative">
            <div class="primary-section-btn-1">
              <a data-bs-toggle="modal" href="#eventModal-Wave3-D"><img src="images/act/2022/12/sp/images/wave4/primary-section-btn-1.png" class="img-fluid us-none"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="secondary-section position-relative d-flex flex-column align-items-center px-2 px-xl-0">
        <!-- BN輪播 -->
        <div class="banner-section col-12 col-xl-7 px-xl-4 text-center">
          <div id="swpB" class="swiper-container position-relative">
            <div class="swiper-wrapper mb-2">
              
              <div class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/secondaryCategory/F1DFC4F472AE2EC2E05400144FF82309">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave4/secondary-section-banner-1.jpg" alt="開工大吉">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/tertiaryCategory/BDD8618E45786446E0440003BA0FF88E">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave4/secondary-section-banner-2.jpg" alt="愛鑽一生">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/tertiaryCategory/D006F4A0C9735BC2E05400144FF9CEC6">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave4/secondary-section-banner-7.jpg" alt="M2nd">
                </a>
              </div>
              <!-- <div class="swiper-slide">
                <a href="https://www.vivatv.com.tw/flagShip/flagshipBrand/DF3EE7E72F9E4406E05400144FF9CEC6">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave4/secondary-section-banner-3.jpg" alt="Sabre Paris">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave4/secondary-section-banner-4.jpg" alt="常玉">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="https://www.vivatv.com.tw/flagShip/flagshipBrand/DF416DF3282E5107E05400144FF82309">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave4/secondary-section-banner-5.jpg" alt="畢耶">
                </a>
              </div> -->
              <div class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/tertiaryCategory/F0CC0643D66F2331E05400144FF9CEC6">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave4/secondary-section-banner-6.jpg" alt="le voeu">
                </a>
              </div>
              <div class="swiper-slide">
                <a href="https://www.vivatv.com.tw/category/tertiaryCategory/C064C88E993E3999E05400144FF82309">
                  <img class="img-fluid" src="images/act/2022/12/sp/images/wave4/secondary-section-banner-8.jpg" alt="亞帝芬奇">
                </a>
              </div>
              

            </div>
            <div class="swiper-pagination pb-0"></div>
          </div>
        </div>
      </div> 
    

      <!-- 公格navBar -->
      <div id="publicGrid" class="wave4">
        <div id="navBar" class="btn-nav-group wave4 d-flex justify-content-center">
          <div class="navbar-inner d-flex justify-content-between align-items-center position-relative px-3 px-xl-0">
            <button id="Btn1" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionA')" data-scroll-target="#sectionA">
              <img src="images/act/2022/12/sp/images/wave4/btn-nav-1-active.png" class="img-fluid">
              <img src="images/act/2022/12/sp/images/wave4/btn-nav-1.png" class="img-fluid rounded-3">
            </button>
            <button id="Btn2" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionB')" data-scroll-target="#sectionB">
              <img src="images/act/2022/12/sp/images/wave4/btn-nav-2-active.png" class="img-fluid">
              <img src="images/act/2022/12/sp/images/wave4/btn-nav-2.png" class="img-fluid">
            </button>
            <button id="Btn3" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionC')" data-scroll-target="#sectionC">
              <img src="images/act/2022/12/sp/images/wave4/btn-nav-3-active.png" class="img-fluid">
              <img src="images/act/2022/12/sp/images/wave4/btn-nav-3.png" class="img-fluid">
            </button>
            <button id="Btn4" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionD')" data-scroll-target="#sectionD">
              <img src="images/act/2022/12/sp/images/wave4/btn-nav-4-active.png" class="img-fluid">
              <img src="images/act/2022/12/sp/images/wave4/btn-nav-4.png" class="img-fluid">
            </button>
            <button id="Btn5" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionE')" data-scroll-target="#sectionE">
              <img src="images/act/2022/12/sp/images/wave4/btn-nav-5-active.png" class="img-fluid">
              <img src="images/act/2022/12/sp/images/wave4/btn-nav-5.png" class="img-fluid">
            </button>
          </div>
        </div>
        <!-- 公格 -->
        <div class="w-100" style="overflow-x: hidden;">
          <div class="container-xl p-0 position-relative" style="z-index: 2;">
            <div class="row g-0 justify-content-center">
              
              <!-- <div class="col-12 col-xxl-10 p-1"> -->
              <!-- A -->
              <div id="sectionA" class="col-12 col-xl-10 p-1 p-xl-3 mb-4">
                <div class="grid-section-header mx-auto position-relative text-center mb-2 mb-xl-0" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave4/title-section-a.png" class="img-fluid us-none" alt="走春納福"></div>
                <div class="section-wrapper section-a position-relative">
                  <div class="section-observer"></div>
                  <div class="section-inner d-flex flex-column p-1 p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <!-- 公格上排 -->
                      <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'A1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
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
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
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

              <!-- swpD -->
              <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-9 p-1">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F1823F468EB04B0BE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/EED33EF196E6206EE05400144FF9CEC6_m.jpg" alt="戶外旅行">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F1823F46900F4B0BE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/F216A9FBA4841460E05400144FF9CEC6_m.jpg" alt="義大利金牌咖啡">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C04AE757086E3CA7E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/F21C15729AA54AD4E05400144FF82309_m.jpg" alt="台塑生醫">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F0CC0643D66F2331E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/F1823F468EFA4B0BE05400144FF9CEC6_m.jpg" alt="質感輕珠寶">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- B -->
              <div id="sectionB" class="col-12 col-xl-10 p-1 p-xl-3 mb-4">
                <div class="grid-section-header mx-auto position-relative text-center mb-2 mb-xl-0" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave4/title-section-b.png" class="img-fluid us-none" alt="夢幻佳節"></div>
                <div class="section-wrapper section-b position-relative">
                  <div class="section-observer"></div>
                  <div class="section-inner d-flex flex-column p-1 p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <!-- 公格上排 -->
                      <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'B1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item" :data-start="item.start">
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
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
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

              <!-- 銀行優惠 -->
              <div class="col-12 col-xl-9 p-2 mb-3" style="max-width: 1090px;">
                <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202302_creditcard.html">
                      <img src="images/act/2022/12/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-ctbc" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-ctbc.png" class="card-img-top" alt="中信">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<br>刷卡金<span class="fw-bold text-danger">800</span>元</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">1500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期滿額<br>最高回饋<span class="fw-bold text-danger">3%</span>刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-citi" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-citi.png" class="card-img-top" alt="花旗">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<span class="fw-bold text-danger">600元</span><br>統一超商商品卡</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>滿額加贈高回饋</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">1500</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br>滿額送刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202302_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2022/12/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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
              
              <!-- C -->
              <div id="sectionC" class="col-12 col-xl-10 p-1 p-xl-3 mb-4">
                <div class="grid-section-header mx-auto position-relative text-center mb-2 mb-xl-0" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave4/title-section-c.png" class="img-fluid us-none" alt="迎春開運"></div>
                <div class="section-wrapper section-c position-relative">
                  <div class="section-observer"></div>
                  <div class="section-inner d-flex flex-column p-1 p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <!-- 公格上排 -->
                      <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'C1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
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
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
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

              <!-- swpE -->
              <div class="d-flex flex-column justify-content-center align-items-center col-12 col-xl-9 p-1">
                <div class="swiper-custom">
                  <div id="swpE" class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3059672022">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/F21C15729AA44AD4E05400144FF82309_m.jpg" alt="自在食刻">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/EDF5A51742BF054CE05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/EED3554AA527447BE05400144FF82309_m.jpg" alt="阿母滴雞湯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/ED02422A5C28609CE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/EDF6485D62B33B06E05400144FF82309_m.jpg" alt="勝崎生鮮">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/E391F8619E263D07E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2022/12/sp/images/bn/E8C55FAAC0A166AFE05400144FF9CEC6_m.jpg" alt="黑蒜頭">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- D -->
              <div id="sectionD" class="col-12 col-xl-10 p-1 p-xl-3 mb-4">
                <div class="grid-section-header mx-auto position-relative text-center mb-2 mb-xl-0" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave4/title-section-d.png" class="img-fluid us-none" alt="禮饗好年"></div>
                <div class="section-wrapper section-d position-relative">
                  <div class="section-observer"></div>
                  <div class="section-inner d-flex flex-column p-1 p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <!-- 公格上排 -->
                      <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'D1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
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
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
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

              <!-- E -->
              <div id="sectionE" class="col-12 col-xl-10 p-1 p-xl-3 mb-4">
                <div class="grid-section-header mx-auto position-relative text-center mb-2 mb-xl-0" style="z-index: 99;"><img src="images/act/2022/12/sp/images/wave4/title-section-e.png" class="img-fluid us-none" alt="專屬飾禮"></div>
                <div class="section-wrapper section-e position-relative">
                  <div class="section-observer"></div>
                  <div class="section-inner d-flex flex-column p-1 p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <!-- 公格上排 -->
                      <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'E1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item">
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
                              <div v-if="start_1021" class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              <div v-else class="item-price text-center mb-1"><span class="price-type me-1">驚喜價</span></div>
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
      imgError: 'this.src="/html/images/act/2022/12/sp/images/img-error.png"',
      items: [],
      end_0915: false,
      start_0916: false,
      start_1021: false,
      before_1021: false,
      start_1106: false,
      start_1107: false,
      start_1108: false,
      start_1109: false,
      start_1110: false,
      start_1111: false,
      start_1112: false,
      interval_1021_1108: false,
      interval_1109_1127: false,
      
      wave1: false,
      wave2: false,
      wave3: false,
      wave4: false,

      tvProgram: false,
      start_0128: false,
      
      oneday_1218: false,
      before_1222: false,

      end_1113: false,

      start_1103: false,

      start_1123: false,

      end_0112: false,
      start_0113: false,

      end_1231: false,
      start_0101: false,

      end_0106: false,

    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = (window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/12/sp/json/data.json";
      var path2 = (window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/12/sp/json/data2.json";
      var path3 = (window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/12/sp/json/data3.json";
      var path4 = '/html/images/act/2022/12/sp/json/data4.json';
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


      var end_0915 = '2022-09-15 23:59:59';
      var start_0916 = '2022-09-16 00:00:00';
      var start_1021 = '2022-10-21 00:00:00';
      var before_1021 = '2022-10-20 23:59:59';
      var start_1023 = '2022-10-23 00:00:00';
      var end_1023 = '2022-10-23 23:59:59';
      var start_1106 = '2022-11-06 00:00:00';
      var start_1107 = '2022-11-07 00:00:00';
      var start_1108 = '2022-11-08 00:00:00';
      var end_1108 = '2022-11-08 23:59:59';
      var start_1109 = '2022-11-09 00:00:00';
      var start_1110 = '2022-11-10 00:00:00';
      var start_1111 = '2022-11-11 00:00:00';
      var start_1112 = '2022-11-12 00:00:00';
      var end_1113 = '2022-11-12 23:59:59';
      var end_1127 = '2022-11-27 23:59:59';
      var oneday_1023 = '2022-10-23 15:00:00';

      var start_1103 = '2022-11-03 00:00:00';

      var start_1123 = '2022-11-23 00:00:00';
      var end_1125 = '2022-11-25 23:59:59';

      var start_1213 = '2022-12-13 00:00:00';



      var dateNow = timeNow.substr(5,2) + timeNow.substr(8,2);
      console.log('dateNow:'+dateNow);



      if ( moment(timeNow).isSameOrBefore('2023-01-12 23:59:59') ) {
        this.end_0112 = true;
      } else {
        this.start_0113 = true;
      }

      if ( moment(timeNow).isSameOrBefore('2022-12-31 23:59:59') ) {
        this.end_1231 = true;
      } else {
        this.start_0101 = true;
      }

      if ( moment(timeNow).isSameOrBefore('2023-01-06 23:59:59') ) {
        this.end_0106 = true;
      }

      

      if ( moment(timeNow).isSameOrBefore('2022-12-22 00:00:00') ) {
        this.before_1222 = true;
      }      

      

      if ( moment(timeNow).isBefore('2022-12-22 23:59:59') ) {
        this.wave1 = true;
      }

      if ( moment(timeNow).isBetween('2022-12-23 00:00:00', '2023-01-20 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
      }

      if ( moment(timeNow).isBetween('2023-01-21 00:00:00', '2023-02-05 23:59:59', 'second', '[]') ) {
        this.wave3 = true;
      }

      if ( moment(timeNow).isBetween('2023-02-06 00:00:00', '2023-02-14 23:59:59', 'second', '[]') ) {
        this.wave4 = true;
      }

      if ( moment(timeNow).isBetween('2023-01-21 00:00:00', '2023-02-05 23:59:59', 'second', '[]') ) {
        this.tvProgram = true;
      }

      if ( moment(timeNow).isBetween('2023-01-28 00:00:00', '2023-02-05 23:59:59', 'second', '[]') ) {
        this.start_0128 = true;
      }

      if (moment(timeNow).isSameOrBefore(before_1021)) {
        this.before_1021 = true;
      }

      if (moment(timeNow).isBetween('2022-12-16 00:00:00', '2022-12-18 23:59:59', 'second', '[]')) {
        this.oneday_1218 = true;
        console.log('1218');
      }

      //第一波公格
      if (moment(timeNow).isBetween(start_1021, end_1108, 'second', '[]')) {
        this.interval_1021_1108 = true;
      }
      //第二波公格
      if (moment(timeNow).isBetween(start_1109, end_1127, 'second', '[]')) {
        this.interval_1109_1127 = true;
      }

      // if (moment(timeNow).isBetween(start_1023, end_1023, 'second', '[]')) {
      //   this.oneday_1023 = true;
      // }

      if (moment(timeNow).isSameOrAfter(oneday_1023)) {
        this.oneday_1023 = true;
      }

      if (moment(timeNow).isSameOrAfter(start_1021)) {
        this.start_1021 = true;
      }

      if (moment(timeNow).isBetween(start_1103, end_1113, 'second', '[]')) {
        this.start_1103 = true;
        console.log(this.start_1103);
      }      

      // if (moment(timeNow).isBetween(start_1106, end_1113, 'second', '[]')) {
      //   this.start_1106 = true;
      // }
      // if (moment(timeNow).isBetween(start_1107, end_1113, 'second', '[]')) {
      //   this.start_1107 = true;
      // }
      // if (moment(timeNow).isBetween(start_1108, end_1113, 'second', '[]')) {
      //   this.start_1108 = true;
      // }
      // if (moment(timeNow).isBetween(start_1109, end_1113, 'second', '[]')) {
      //   this.start_1109 = true;
      // }
      // if (moment(timeNow).isBetween(start_1110, end_1113, 'second', '[]')) {
      //   this.start_1110 = true;
      // }
      // if (moment(timeNow).isBetween(start_1111, end_1113, 'second', '[]')) {
      //   this.start_1111 = true;
      // }
      // if (moment(timeNow).isBetween(start_1112, end_1113, 'second', '[]')) {
      //   this.start_1112 = true;
      // }
      // if (moment(timeNow).isBetween(start_1123, end_1125, 'second', '[]')) {
      //   this.start_1123 = true;
      // }

      path = path1;

      


      if (timeFromURL) {
        // dataTime = timeFromURL.substr(4, 4);
        dataTime = timeFromURL;
        console.log('dataTime: ' + dataTime);
        
      } else {
        dataTime = year + month + date;
        console.log('dataTime: ' + dataTime);
        
      }



      
      if ( moment(timeNow).isSameOrBefore('2023-01-20 23:59:59') ) {
        path = path2;
      } else if ( moment(timeNow).isBetween('2023-01-21 00:00:00', '2023-02-05 23:59:59', 'second', '[]'))  {  
        path = path3;
      } else {
        path = path4;
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
        if (this.items[i].id == '2988582021') {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.png');
        } else {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
        }
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2022/12/sp/images/product/'+ this.items[i].id +'/1.jpg');
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
        e.target.src = "/html/images/act/2022/12/sp/images/product/"+ t +".jpg";

      }

      
    },
    altImage: function(e) {
      

      // var t = e.target.alt;
      // e.target.src = "/html/images/act/2022/12/sp/images/product/"+ t +".jpg";
      

      // if (e.target.imgchecked) {
      //   e.target.src = "/html/images/act/2022/12/sp/images/img-error.png";
      // } else {
      //   e.target.src = "/html/images/act/2022/12/sp/images/product/"+ t +".jpg";
      // }

      // if (e.target.naturalWidth == 1) {
      //   e.target.src = "/html/images/act/2022/12/sp/images/product/"+ t +".jpg";

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

      // if ()

      setTimeout(()=>{

        var triggerEl = document.querySelector('#pills-'+ dateNow +'-tab');
        
        // console.log('triggerEl:'+triggerEl);

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

