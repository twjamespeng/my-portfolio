<template>
  
  <div>
    
    <div v-if="wave1" class="main-section wave1 d-flex flex-column align-items-center" style="z-index: 2;">
      
      <div class="falling-coins">
        <div><span></span></div>
        <div><span></span></div>
        <div><span></span></div>
        <div><span></span></div>
        <div><span></span></div>
        <div><span></span></div>
      </div>

      <div class="primary-section d-flex flex-column align-items-center animated fadeIn px-2 px-lg-0 position-relative" style="z-index: 9">

        <div class="primary-section-group d-flex flex-column justify-content-center align-items-center mb-3 mb-xl-5">
          <div class="primary-btn-1">
            <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-D">
              <picture>
                <source srcset="images/act/2023/12/sp/images/wave1/primary-btn-1.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave1/mobile/primary-btn-1.png" alt="【年終享樂購】_雙12活動">
              </picture>
            </a>
          </div>

          <div class="d-flex">
            <div class="primary-btn-2">
              <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-A">
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave1/primary-btn-2.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave1/mobile/primary-btn-2.png" alt="【事事龍有春】 (臉書活動)">
                </picture>
              </a>
            </div>
            <div id="swpPrimaryLeftWrapper" class="d-none d-lg-block position-relative overflow-hidden flex-shrink-0">
              <div id="swpPrimaryLeft" class="swiper-container position-relative">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-3-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave1/primary-btn-3-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave1/mobile/primary-btn-3-a.png" alt="新客首購禮">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide primary-btn-3-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-B">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave1/primary-btn-3-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave1/mobile/primary-btn-3-b.png" alt="註冊送好禮">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
              <div class="d-none d-xl-block swiper-pagination position-absolute" style="transform: translateY(48px);"></div>
            </div>
          </div>

          <div class="d-flex d-lg-none">
            <div>
              <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C">
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave1/primary-btn-3-a.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave1/mobile/primary-btn-3-a.png" alt="新客首購禮">
                </picture>
              </a>
            </div>
            <div>
              <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-B">
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave1/primary-btn-3-b.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave1/mobile/primary-btn-3-b.png" alt="註冊送好禮">
                </picture>
              </a>
            </div>
          </div>
            
        </div>

      </div>
      <!-- 公格navBar -->
      <div id="publicGrid" class="wave1 position-relative" style="z-index: 9;">
        
        <div id="navBar" class="btn-nav-group wave1 d-flex flex-column justify-content-center align-items-center pb-4">
          <div class="navbar-inner d-flex justify-content-center align-items-center position-relative">
            <a id="Btn1" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionA">
              <img src="images/act/2023/12/sp/images/wave1/nav-1.png" class="img-fluid">
            </a>
            <a id="Btn2" data-wow-delay="0.1s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionB">
              <img src="images/act/2023/12/sp/images/wave1/nav-2.png" class="img-fluid">
            </a>
            <a id="Btn3" data-wow-delay="0.2s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionC">
              <img src="images/act/2023/12/sp/images/wave1/nav-3.png" class="img-fluid">
            </a>
          </div>
          <div class="navbar-inner d-flex justify-content-center align-items-center position-relative">
            <a id="Btn4" data-wow-delay="0.3s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionD">
              <img src="images/act/2023/12/sp/images/wave1/nav-4.png" class="img-fluid">
            </a>
            <a id="Btn5" data-wow-delay="0.4s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionE">
              <img src="images/act/2023/12/sp/images/wave1/nav-5.png" class="img-fluid">
            </a>
          </div>
        </div>
        <!-- 公格 -->
        <div class="w-100 position-relative">


          <div class="container-lg px-2 g-0 position-relative" style="z-index: 9;">
            <div class="row g-0 justify-content-center">
              <!-- A -->
              <div id="sectionA" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-a position-relative p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave1/section-title-a.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'A1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item p-1 p-xl-3" :data-wow-delay="item.delay">
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
              <!-- B -->
              <div id="sectionB" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-b position-relative p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave1/section-title-b.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'B1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item p-1 p-xl-3" :data-wow-delay="item.delay">
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
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section p-1 mb-4 mb-xl-5" data-wow-offset="50" data-wow-delay="0.2s">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/category/tertiaryCategory/37A57C0135AA3FDDE0536E0212ACD6ED">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/doyubo.jpg" alt="豆油伯">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/042F43312F4C215FE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/08E757B3705C0DBFE06400144FF9CEC6_m.jpg" alt="宜日宜日孝">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/searchResult/%E5%84%AA%E6%BA%90%E5%A5%BD%E9%A3%9F">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/yoyuan.jpg" alt="優源好食">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/FE26CE0DFB5E6AA9E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/0420E696CBA46AB7E06400144FF9CEC6_m.jpg" alt="紫米">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DB58052A7E800437E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4932D22E05400144FF82309_m.jpg" alt="沛優絲">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/024F9F55CC5B3FF0E06400144FF82309_m.jpg" alt="上班族養生救星">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/category/tertiaryCategory/37A57C0135AA3FDDE0536E0212ACD6ED">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/doyubo.jpg" alt="豆油伯">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/042F43312F4C215FE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/08E757B3705C0DBFE06400144FF9CEC6_m.jpg" alt="宜日宜日孝">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/searchResult/%E5%84%AA%E6%BA%90%E5%A5%BD%E9%A3%9F">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/yoyuan.jpg" alt="優源好食">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/FE26CE0DFB5E6AA9E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/0420E696CBA46AB7E06400144FF9CEC6_m.jpg" alt="紫米">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DB58052A7E800437E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4932D22E05400144FF82309_m.jpg" alt="沛優絲">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/024F9F55CC5B3FF0E06400144FF82309_m.jpg" alt="上班族養生救星">
                        </a>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>

              <!-- C -->
              <div id="sectionC" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-c position-relative p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave1/section-title-c.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'C1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item p-1 p-xl-3" :data-wow-delay="item.delay">
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
                              <div></div>
                              <div v-if="item.id == '3128852023' || item.id == '3126762023'" class="item-price text-center mb-1"><a :href="item.url"><span class="fs-6 fs-xl-5">{{item.price}}</span></a></div>
                              <div v-else class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
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
              
              <!-- swpE -->
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section p-1 mb-4 mb-xl-5">
                <div class="swiper-custom">
                  <div id="swpE" class="swiper-container">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DE2BB33E6F851408E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4952D22E05400144FF82309_m.jpg" alt="Lumi">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/7E85612F6BD93B75E0536E0212AC7965">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/E45A89DA4B820BE3E05400144FF9CEC6_m.jpg" alt="Relove">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C5DF6D11792B00E9E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4942D22E05400144FF82309_m.jpg" alt="BioLead">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB3CB363D6034DCE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/FA32E542BF2D0D16E05400144FF9CEC6_m.jpg" alt="森繆斯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F270D2F0AC2748A1E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F5E2B0B21DB80AA0E05400144FF9CEC6_m.jpg" alt="泡菜">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3122572023">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F73B9C8B5B2E1F61E05400144FF9CEC6_m.jpg" alt="養元堂">
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <!-- D -->
              <div id="sectionD" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-d position-relative p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave1/section-title-d.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'D1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item p-1 p-xl-3" :data-wow-delay="item.delay">
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

              <!-- E -->
              <div id="sectionE" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-e position-relative p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave1/section-title-e.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'E1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item p-1 p-xl-3" :data-wow-delay="item.delay">
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
              <div class="swp-banner-section col-12 p-2">
                <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202312_creditcard.html">
                      <img src="images/act/2023/12/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">3500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>輕鬆購</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">3600</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<br><span class="fw-bold text-danger">2000</span>刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">3500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>輕鬆購</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">3600</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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
        </div>
      </div>

    </div>

    <div v-if="wave2" class="main-section wave2 d-flex flex-column align-items-center" style="z-index: 2;">
      
      <div class="primary-section d-flex flex-column align-items-center animated fadeIn px-2 px-lg-0 position-relative" style="z-index: 9">

        <div class="primary-section-group d-flex flex-column justify-content-center align-items-center mb-3 mb-xl-5">
          
          <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center" style="max-width: 100%;">
            <div v-if="before_1218" class="primary-btn-1">
              <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-D">
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave2/primary-btn-1.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave2/mobile/primary-btn-1.png" alt="滿額抽200">
                </picture>
              </a>
            </div>
            <div v-if="before_1218" class="primary-btn-7">
              <a class="d-block" target="_blank" href="https://www.vivatv.com.tw/html/202312draw.html">
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave2/primary-btn-7.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave2/mobile/primary-btn-7.png" alt="金幣等你拿">
                </picture>
              </a>
            </div>
            <div v-if="after_1218" class="primary-btn-2">
              <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-F">
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave2/primary-btn-2.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave2/mobile/primary-btn-2.png" alt="多買多賺">
                </picture>
              </a>
            </div>
            
            <div v-if="after_1218" id="swpPrimaryTopWrapper" class="d-block text-center">
              <div id="swpPrimaryTop" class="swiper-container position-relative">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-6">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-G">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave2/primary-btn-6.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave2/mobile/primary-btn-6.png" alt="好禮三重抽">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide primary-btn-7-a">
                    <a class="d-block" target="_blank" href="https://www.vivatv.com.tw/html/202312draw.html">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave2/primary-btn-7.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave2/mobile/primary-btn-7.png" alt="金幣等你拿">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div class="d-flex">
            <div class="primary-btn-3">
              <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-A">
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave2/primary-btn-3.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave2/mobile/primary-btn-3.png" alt="抽碗組">
                </picture>
              </a>
            </div>
          </div>
          

          <div class="d-flex justify-content-center px-1 px-lg-0">
            <div class="primary-btn-4">
              <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-H">
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave2/primary-btn-4.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave2/mobile/primary-btn-4.png" alt="抽畢耶">
                </picture>
              </a>
            </div>
            <div id="swpPrimaryLeftWrapper" class="d-block position-relative overflow-hidden flex-shrink-0">
              <div id="swpPrimaryLeft" class="swiper-container position-relative">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-5-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave2/primary-btn-5-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave2/mobile/primary-btn-5-a.png" alt="新客首購禮">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide primary-btn-5-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-B">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave2/primary-btn-5-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave2/mobile/primary-btn-5-b.png" alt="註冊送好禮">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
              <!-- <div class="d-none d-xl-block swiper-pagination position-absolute" style="transform: translateY(48px);"></div> -->
            </div>
          </div>

          
            
        </div>

      </div>
      
      <div v-if="tvoneday" id="tvOneDay">
        <div class="tvoneday-section d-flex flex-column mx-auto mb-3 mb-lg-5" style="max-width: 1200px; z-index: 2;">
          <div class="tvoneday-header">
            <!-- <picture>
              <source srcset="images/act/2023/12/sp/images/wave2/tvoneday-header.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave2/mobile/tvoneday-header.png" alt="超級強強滾">
            </picture> -->
            <div class="tvoneday-timer">
              <div class="countdown text-center"></div>
            </div>
          </div>
          <div class="tvoneday-body p-1 p-lg-5 pt-lg-2">
            <div class="row row-cols-2 row-cols-md-3 px-3 px-lg-0 g-0 justify-content-center align-self-stretch">
              <!-- <div class="tvoneday-desc d-flex align-items-center">
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave2/tvoneday-desc.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave2/tvoneday-desc.png" alt="tvoneday-desc">
                </picture>
              </div> -->
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
                      <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                      <div class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                    </div>
                    <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                      <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                      <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                      <div class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                    </div>
                    <div v-else-if="item.id === '3110862023'" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                      <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                      <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                      <div class="item-price text-center mb-1"><span class="fw-normal fs-6">熱銷一空</span></div>
                      <!-- <div v-else class="item-price text-center mb-1"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div> -->
                    </div>
                    <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                      <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                      <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
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
        
        <div id="navBar" class="btn-nav-group wave2 d-flex flex-column justify-content-center align-items-center pb-4">
          <div class="navbar-inner d-flex justify-content-center align-items-center position-relative">
            <a id="Btn1" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionA">
              <img src="images/act/2023/12/sp/images/wave2/nav-1.png" class="img-fluid">
            </a>
            <a id="Btn2" data-wow-delay="0.1s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionB">
              <img src="images/act/2023/12/sp/images/wave2/nav-2.png" class="img-fluid">
            </a>
            <a id="Btn3" data-wow-delay="0.2s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionC">
              <img src="images/act/2023/12/sp/images/wave2/nav-3.png" class="img-fluid">
            </a>
            <a id="Btn4" data-wow-delay="0.3s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionD">
              <img src="images/act/2023/12/sp/images/wave2/nav-4.png" class="img-fluid">
            </a>
            <a id="Btn5" data-wow-delay="0.4s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionE">
              <img src="images/act/2023/12/sp/images/wave2/nav-5.png" class="img-fluid">
            </a>
          </div>
        </div>
        <!-- 公格 -->
        <div class="w-100 position-relative">
          <div class="clock clock-left"><div></div></div>
          <div class="clock clock-right"><div></div></div>

          <div class="container-lg px-2 g-0 position-relative" style="z-index: 9;">
            <div class="row g-0 justify-content-center">
              <!-- A -->
              <div id="sectionA" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-a position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave2/section-title-a.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'A1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
              <div id="sectionB" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-b position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave2/section-title-b.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'B1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section p-1 mb-4 mb-xl-5" data-wow-offset="50" data-wow-delay="0.2s">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/category/tertiaryCategory/37A57C0135AA3FDDE0536E0212ACD6ED">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/doyubo.jpg" alt="豆油伯">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/042F43312F4C215FE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/08E757B3705C0DBFE06400144FF9CEC6_m.jpg" alt="宜日宜日孝">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/searchResult/%E5%84%AA%E6%BA%90%E5%A5%BD%E9%A3%9F">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/yoyuan.jpg" alt="優源好食">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/FE26CE0DFB5E6AA9E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/0420E696CBA46AB7E06400144FF9CEC6_m.jpg" alt="紫米">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DB58052A7E800437E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4932D22E05400144FF82309_m.jpg" alt="沛優絲">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/024F9F55CC5B3FF0E06400144FF82309_m.jpg" alt="上班族養生救星">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/category/tertiaryCategory/37A57C0135AA3FDDE0536E0212ACD6ED">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/doyubo.jpg" alt="豆油伯">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/042F43312F4C215FE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/08E757B3705C0DBFE06400144FF9CEC6_m.jpg" alt="宜日宜日孝">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/searchResult/%E5%84%AA%E6%BA%90%E5%A5%BD%E9%A3%9F">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/yoyuan.jpg" alt="優源好食">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/FE26CE0DFB5E6AA9E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/0420E696CBA46AB7E06400144FF9CEC6_m.jpg" alt="紫米">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DB58052A7E800437E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4932D22E05400144FF82309_m.jpg" alt="沛優絲">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/024F9F55CC5B3FF0E06400144FF82309_m.jpg" alt="上班族養生救星">
                        </a>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>

              <!-- C -->
              <div id="sectionC" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-c position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave2/section-title-c.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'C1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
                                <div></div>
                                <div v-if="item.id == '3128852023' || item.id == '3126762023'" class="item-price text-center mb-1"><a :href="item.url"><span class="fs-6 fs-xl-5">{{item.price}}</span></a></div>
                                <div v-else class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
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
              
              <!-- swpE -->
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section p-1 mb-4 mb-xl-5">
                <div class="swiper-custom">
                  <div id="swpE" class="swiper-container">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DE2BB33E6F851408E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4952D22E05400144FF82309_m.jpg" alt="Lumi">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/7E85612F6BD93B75E0536E0212AC7965">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/E45A89DA4B820BE3E05400144FF9CEC6_m.jpg" alt="Relove">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C5DF6D11792B00E9E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4942D22E05400144FF82309_m.jpg" alt="BioLead">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB3CB363D6034DCE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/FA32E542BF2D0D16E05400144FF9CEC6_m.jpg" alt="森繆斯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F270D2F0AC2748A1E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F5E2B0B21DB80AA0E05400144FF9CEC6_m.jpg" alt="泡菜">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3122572023">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F73B9C8B5B2E1F61E05400144FF9CEC6_m.jpg" alt="養元堂">
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <!-- D -->
              <div id="sectionD" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-d position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave2/section-title-d.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'D1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
              <div id="sectionE" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-e position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave2/section-title-e.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'E1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
              <div class="swp-banner-section col-12 p-2">
                <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202312_creditcard.html">
                      <img src="images/act/2023/12/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">3500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>輕鬆購</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">3600</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<br><span class="fw-bold text-danger">2000</span>刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">3500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>輕鬆購</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">3600</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202312_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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
        </div>
      </div>

    </div>

    <div v-if="wave3" class="main-section wave3 d-flex flex-column align-items-center" style="z-index: 2;">

      <div class="sticky-side-menu">
        <div class="moving-clouds">
          <div class="moving-cloud-left"></div>
          <div class="moving-cloud-right"></div>
        </div>
        <!-- 左選單 -->
        <div v-if="wave3" class="wave3 side-menu-wrapper-left">
          <div class="side-menu-body">
            <div class="d-flex flex-column">

              
              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/FE26D074E2855E90E05400144FF82309'">懷念好滋味</button>
                <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">放鬆品生活</button>
                <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">彰顯藝術感</button>
                <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">異國好風味</button>
                <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/0A15010A39B50423E06400144FF9CEC6'">出國採購趣</button>
                <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/7E85B72A7D003B7CE0536E0212AC29EE'">身心都清爽</button>
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
        <div v-if="wave3" class="wave3 side-menu-wrapper-right">
          <div class="side-menu-body">
            <div class="d-flex flex-column">
              
              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave2-C">新客獨享禮</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave2-F">送2.4萬銀幣</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave2-G">加碼抽好禮</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave2-E">金幣等你拿</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave2-E">滿額拿銀幣</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave2-H">抽日本鍋具</button>
              </div>
              
              <div class="d-flex flex-column justify-content-around side-menu-group-2">
                <a href="#sectionA" class="btn rounded-0">好物不踩雷</a>
                <a href="#sectionB" class="btn rounded-0">除舊佈新趣</a>
                <a href="#sectionC" class="btn rounded-0">送禮不藏私</a>
                <a href="#sectionD" class="btn rounded-0">團聚饗時光</a>
                <a href="#sectionE" class="btn rounded-0">迎春好運來</a>
              </div>

              <!-- <div class="d-flex flex-column side-menu-group-3">
                <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
              </div> -->

            </div>
          </div>
        </div>
      </div>

      
      
      <div class="primary-section d-flex flex-column align-items-center animated fadeIn px-2 px-lg-0 position-relative" style="z-index: 9">

        <div class="primary-section-group d-flex flex-column justify-content-center align-items-center mb-3 mb-xl-5">
          
          <div class="d-flex flex-row flex-lg-row justify-content-center align-items-center w-100 row g-0">
            
            
            
            <div id="swpPrimaryTopWrapper" class="d-block text-center p-1 col-6 col-lg-3">
              <div id="swpPrimaryTop" class="swiper-container position-relative">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-1-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-F">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave3/primary-btn-1-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave3/mobile/primary-btn-1-a.png" alt="多買多賺">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide primary-btn-1-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-H">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave3/primary-btn-1-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave3/mobile/primary-btn-1-b.png" alt="滿額抽不鏽鋼鍋">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex flex-column align-items-center p-1 col-6 col-lg-3">
              <div class="primary-btn-2 mb-3">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-G">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave3/primary-btn-2.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave3/mobile/primary-btn-2.png" alt="好禮三重抽">
                  </picture>
                </a>
              </div>
              <div v-if="before_0122" class="primary-btn-3">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-E">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave3/primary-btn-3.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave3/mobile/primary-btn-3.png" alt="金幣等你拿">
                  </picture>
                </a>
              </div>
              <div v-else class="primary-btn-3">
                <a class="d-block" href="https://www.vivatv.com.tw/html/202401draw.html">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave3/primary-btn-3.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave3/mobile/primary-btn-3.png" alt="金幣等你拿">
                  </picture>
                </a>
              </div>

            </div>

            <div class="d-flex flex-column align-items-center p-1 col-6 col-lg-3">
              <div class="primary-btn-4">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-A">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave3/primary-btn-4.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave3/mobile/primary-btn-4.png" alt="抽碗組">
                  </picture>
                </a>
              </div>
            </div>

            <div id="swpPrimaryLeftWrapper" class="d-block text-center p-1 col-6 col-lg-3" style="overflow-x: clip;">
              <div id="swpPrimaryLeft" class="swiper-container position-relative">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-5-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-B">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave3/primary-btn-5-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave3/mobile/primary-btn-5-a.png" alt="註冊送好禮">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide primary-btn-5-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-C">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave3/primary-btn-5-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/12/sp/images/wave3/mobile/primary-btn-5-b.png" alt="新客首購禮">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
              <!-- <div class="d-none d-xl-block swiper-pagination position-absolute" style="transform: translateY(48px);"></div> -->
            </div>
            

          </div>

          
          

          

          
            
        </div>

      </div>
      
      

      <!-- 公格navBar -->
      <div id="publicGrid" class="wave3 position-relative" style="z-index: 9;">
        

        <!-- 公格 -->
        <div class="w-100 position-relative">

          <div class="container-lg px-2 g-0 position-relative" style="z-index: 99;">
            <div class="row g-0 justify-content-center">
              <!-- A -->
              <div id="sectionA" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-a position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave3/section-title-a.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'A1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
              <div id="sectionB" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-b position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave3/section-title-b.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'B1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
              
              <div id="navBar" class="btn-nav-group wave3 d-flex flex-column justify-content-center align-items-center pb-4">
                <div class="navbar-inner d-flex justify-content-center align-items-center position-relative">
                  <a id="Btn1" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionA">
                    <img src="images/act/2023/12/sp/images/wave3/nav-1.png" class="img-fluid">
                    <img src="images/act/2023/12/sp/images/wave3/nav-1-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn2" data-wow-delay="0.1s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionB">
                    <img src="images/act/2023/12/sp/images/wave3/nav-2.png" class="img-fluid">
                    <img src="images/act/2023/12/sp/images/wave3/nav-2-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn3" data-wow-delay="0.2s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionC">
                    <img src="images/act/2023/12/sp/images/wave3/nav-3.png" class="img-fluid">
                    <img src="images/act/2023/12/sp/images/wave3/nav-3-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn4" data-wow-delay="0.3s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionD">
                    <img src="images/act/2023/12/sp/images/wave3/nav-4.png" class="img-fluid">
                    <img src="images/act/2023/12/sp/images/wave3/nav-4-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn5" data-wow-delay="0.4s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionE">
                    <img src="images/act/2023/12/sp/images/wave3/nav-5.png" class="img-fluid">
                    <img src="images/act/2023/12/sp/images/wave3/nav-5-hover.png" class="img-fluid">
                  </a>
                </div>
              </div>

              <!-- swpD -->
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section mb-4 mb-xl-5" data-wow-offset="50" data-wow-delay="0.2s">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/category/tertiaryCategory/37A57C0135AA3FDDE0536E0212ACD6ED">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/doyubo.jpg" alt="豆油伯">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/042F43312F4C215FE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/08E757B3705C0DBFE06400144FF9CEC6_m.jpg" alt="宜日宜日孝">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/searchResult/korea%20king">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/0E16F087421F6744E06400144FF82309_m.png" alt="korea king">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/searchResult/%E5%84%AA%E6%BA%90%E5%A5%BD%E9%A3%9F">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/yoyuan.jpg" alt="優源好食">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/FE26CE0DFB5E6AA9E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/0420E696CBA46AB7E06400144FF9CEC6_m.jpg" alt="紫米">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DB58052A7E800437E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4932D22E05400144FF82309_m.jpg" alt="沛優絲">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/024F9F55CC5B3FF0E06400144FF82309_m.jpg" alt="上班族養生救星">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/category/tertiaryCategory/37A57C0135AA3FDDE0536E0212ACD6ED">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/doyubo.jpg" alt="豆油伯">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/042F43312F4C215FE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/08E757B3705C0DBFE06400144FF9CEC6_m.jpg" alt="宜日宜日孝">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/searchResult/korea%20king">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/0E16F087421F6744E06400144FF82309_m.png" alt="korea king">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/searchResult/%E5%84%AA%E6%BA%90%E5%A5%BD%E9%A3%9F">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/yoyuan.jpg" alt="優源好食">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/FE26CE0DFB5E6AA9E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/0420E696CBA46AB7E06400144FF9CEC6_m.jpg" alt="紫米">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DB58052A7E800437E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4932D22E05400144FF82309_m.jpg" alt="沛優絲">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/024F9F55CC5B3FF0E06400144FF82309_m.jpg" alt="上班族養生救星">
                        </a>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>

              <!-- C -->
              <div id="sectionC" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-c position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave3/section-title-c.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'C1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
                                <div></div>
                                <div v-if="item.id == '3128852023' || item.id == '3126762023'" class="item-price text-center mb-1"><a :href="item.url"><span class="fs-6 fs-xl-5">{{item.price}}</span></a></div>
                                <div v-else class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
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
              
              <!-- swpE -->
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section mb-4 mb-xl-5">
                <div class="swiper-custom">
                  <div id="swpE" class="swiper-container">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DE2BB33E6F851408E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4952D22E05400144FF82309_m.jpg" alt="Lumi">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/7E85612F6BD93B75E0536E0212AC7965">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/E45A89DA4B820BE3E05400144FF9CEC6_m.jpg" alt="Relove">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C5DF6D11792B00E9E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4942D22E05400144FF82309_m.jpg" alt="BioLead">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB3CB363D6034DCE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/FA32E542BF2D0D16E05400144FF9CEC6_m.jpg" alt="森繆斯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F270D2F0AC2748A1E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F5E2B0B21DB80AA0E05400144FF9CEC6_m.jpg" alt="泡菜">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3122572023">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F73B9C8B5B2E1F61E05400144FF9CEC6_m.jpg" alt="養元堂">
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <!-- D -->
              <div id="sectionD" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-d position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave3/section-title-d.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'D1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
              <div id="sectionE" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-e position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave3/section-title-e.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'E1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
                <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202401_creditcard.html">
                      <img src="images/act/2023/12/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">4500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期滿額回饋<br><span class="fw-bold text-danger">200</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>新春大採購</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">3600</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br><span class="fw-bold text-danger">滿額送刷卡金</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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

          <!-- <div><img class="img-fluid us-none" src="images/act/2023/12/sp/images/wave3/page-bottom-cloud.png" alt="page bottom cloud"></div> -->
        </div>
      </div>

    </div>

    <div v-if="wave4" class="main-section wave4 d-flex flex-column align-items-center" style="z-index: 2;">

      <div class="sticky-side-menu">
        <!-- <div class="moving-clouds">
          <div class="moving-cloud-left"></div>
          <div class="moving-cloud-right"></div>
        </div> -->

        <div class="falling-petals">
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
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
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
        </div>

        <!-- <div id="petal" class="d-block d-xl-block falling-petal"></div> -->
        <!-- 左選單 -->
        <div class="wave4 side-menu-wrapper-left">
          <div class="side-menu-body">
            <div class="d-flex flex-column">

              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/FE26D074E2855E90E05400144FF82309'">懷念好滋味</button>
                <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">放鬆品生活</button>
                <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">彰顯藝術感</button>
                <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">異國好風味</button>
                <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/0A15010A39B50423E06400144FF9CEC6'">出國採購趣</button>
                <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/7E85B72A7D003B7CE0536E0212AC29EE'">身心都清爽</button>
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
          <div class="side-menu-overlay"></div>
        </div>
        <!-- 右選單 -->
        <div class="wave4 side-menu-wrapper-right">
          <div class="side-menu-body">
            <div class="d-flex flex-column">
              
              <div class="d-flex flex-column justify-content-around side-menu-group-1">
                
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave2-C">新客獨享禮</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave2-F">送2.4萬銀幣</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave2-G">加碼抽好禮</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave2-E">金幣等你拿</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave2-E">滿額拿銀幣</button>
                <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave2-H">抽日本鍋具</button>
              </div>
              
              <div class="d-flex flex-column justify-content-around side-menu-group-2">
                <a href="#sectionE" class="btn rounded-0">迎春好運來</a>
                <a href="#sectionC" class="btn rounded-0">送禮不藏私</a>
                <a href="#sectionD" class="btn rounded-0">團聚饗時光</a>
                <a href="#sectionB" class="btn rounded-0">除舊佈新趣</a>
                <a href="#sectionA" class="btn rounded-0">好物不踩雷</a>
              </div>

              <!-- <div class="d-flex flex-column side-menu-group-3">
                <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
              </div> -->

            </div>
          </div>
          <div class="side-menu-overlay"></div>
        </div>
      </div>

      
      
      <div class="primary-section d-flex flex-column align-items-center px-2 px-lg-0 position-relative" style="z-index: 9">

        <div class="primary-section-group d-flex flex-column justify-content-center align-items-center mb-3 mb-xl-5">
          
          <div class="d-flex flex-row flex-lg-row justify-content-center align-items-center w-100 row g-0">
            
            <div class="hover-translate d-flex flex-column align-items-center p-1 p-lg-3 col-6 col-lg-3">
              <div class="primary-btn-4">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-H">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave4/primary-btn-4.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/primary-btn-4.png" alt="滿額抽不鏽鋼鍋">
                  </picture>
                </a>
              </div>
            </div>
            
            <div id="swpPrimaryTopWrapper" class="hover-translate d-block text-center p-1 p-lg-3 col-6 col-lg-3">
              <div id="swpPrimaryTop" class="swiper-container position-relative">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-1-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-F">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave4/primary-btn-1-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/primary-btn-1-a.png" alt="多買多賺">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide primary-btn-1-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-A">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave4/primary-btn-1-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/primary-btn-1-b.png" alt="抽碗組">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex flex-column align-items-center p-0 col-6 col-lg-3">
              <div class="hover-translate primary-btn-2">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-G">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave4/primary-btn-2.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/primary-btn-2.png" alt="好禮三重抽">
                  </picture>
                </a>
              </div>
              <div v-if="before_0122" class="hover-translate primary-btn-3">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-E">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave4/primary-btn-3.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/primary-btn-3.png" alt="金幣等你拿">
                  </picture>
                </a>
              </div>
              <div v-else class="hover-translate primary-btn-3">
                <a class="d-block" href="https://www.vivatv.com.tw/html/202401draw.html">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave4/primary-btn-3.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/primary-btn-3.png" alt="金幣等你拿">
                  </picture>
                </a>
              </div>

            </div>

            

            <div id="swpPrimaryLeftWrapper" class="hover-translate d-block text-center p-1 p-lg-3 col-6 col-lg-3" style="overflow-x: clip;">
              <div id="swpPrimaryLeft" class="swiper-container position-relative">
                <div class="swiper-wrapper">
                  <div class="swiper-slide primary-btn-5-a">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-B">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave4/primary-btn-5-a.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/primary-btn-5-a.png" alt="註冊送好禮">
                      </picture>
                    </a>
                  </div>
                  <div class="swiper-slide primary-btn-5-b">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave2-C">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave4/primary-btn-5-b.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/primary-btn-5-b.png" alt="新客首購禮">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
              <!-- <div class="d-none d-xl-block swiper-pagination position-absolute" style="transform: translateY(48px);"></div> -->
            </div>
            

          </div>

          
          

          

          
            
        </div>

      </div>
      
      

      <!-- 公格navBar -->
      <div id="publicGrid" class="wave4 position-relative" style="z-index: 9;">
        

        <!-- 公格 -->
        <div class="w-100 position-relative">

          <div class="container-lg px-2 g-0 position-relative" style="z-index: 99;">
            <div class="row g-0 justify-content-center">

              <!-- E -->
              <div id="sectionE" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-e position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave4/section-title-e.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'C1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
              <div id="sectionC" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-c position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave4/section-title-c.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'A1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
                                <div></div>
                                <div v-if="item.id == '3128852023' || item.id == '3126762023'" class="item-price text-center mb-1"><a :href="item.url"><span class="fs-6 fs-xl-5">{{item.price}}</span></a></div>
                                <div v-else class="item-price text-center mb-1"><a :href="item.url"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></a></div>
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
              
              
              
              <div id="navBar" class="btn-nav-group wave4 d-flex flex-column justify-content-center align-items-center pb-4">
                <div class="navbar-inner d-flex justify-content-center align-items-center position-relative">
                  <a id="Btn5" data-wow-delay="0.4s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionE">
                    <img src="images/act/2023/12/sp/images/wave4/nav-5.png" class="img-fluid">
                    <img src="images/act/2023/12/sp/images/wave4/nav-5-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn3" data-wow-delay="0.2s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionC">
                    <img src="images/act/2023/12/sp/images/wave4/nav-3.png" class="img-fluid">
                    <img src="images/act/2023/12/sp/images/wave4/nav-3-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn4" data-wow-delay="0.3s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionD">
                    <img src="images/act/2023/12/sp/images/wave4/nav-4.png" class="img-fluid">
                    <img src="images/act/2023/12/sp/images/wave4/nav-4-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn2" data-wow-delay="0.1s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionB">
                    <img src="images/act/2023/12/sp/images/wave4/nav-2.png" class="img-fluid">
                    <img src="images/act/2023/12/sp/images/wave4/nav-2-hover.png" class="img-fluid">
                  </a>
                  <a id="Btn1" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionA">
                    <img src="images/act/2023/12/sp/images/wave4/nav-1.png" class="img-fluid">
                    <img src="images/act/2023/12/sp/images/wave4/nav-1-hover.png" class="img-fluid">
                  </a>
                </div>
              </div>

              <!-- swpD -->
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section mb-4 mb-xl-5" data-wow-offset="50" data-wow-delay="0.2s">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/category/tertiaryCategory/37A57C0135AA3FDDE0536E0212ACD6ED">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/doyubo.jpg" alt="豆油伯">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/042F43312F4C215FE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/08E757B3705C0DBFE06400144FF9CEC6_m.jpg" alt="宜日宜日孝">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/searchResult/korea%20king">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/0E16F087421F6744E06400144FF82309_m.png" alt="korea king">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/searchResult/%E5%84%AA%E6%BA%90%E5%A5%BD%E9%A3%9F">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/yoyuan.jpg" alt="優源好食">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/FE26CE0DFB5E6AA9E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/0420E696CBA46AB7E06400144FF9CEC6_m.jpg" alt="紫米">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DB58052A7E800437E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4932D22E05400144FF82309_m.jpg" alt="沛優絲">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/024F9F55CC5B3FF0E06400144FF82309_m.jpg" alt="上班族養生救星">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/category/tertiaryCategory/37A57C0135AA3FDDE0536E0212ACD6ED">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/doyubo.jpg" alt="豆油伯">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/042F43312F4C215FE06400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/08E757B3705C0DBFE06400144FF9CEC6_m.jpg" alt="宜日宜日孝">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/searchResult/korea%20king">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/0E16F087421F6744E06400144FF82309_m.png" alt="korea king">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/searchResult/%E5%84%AA%E6%BA%90%E5%A5%BD%E9%A3%9F">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/yoyuan.jpg" alt="優源好食">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/FE26CE0DFB5E6AA9E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/0420E696CBA46AB7E06400144FF9CEC6_m.jpg" alt="紫米">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DB58052A7E800437E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4932D22E05400144FF82309_m.jpg" alt="沛優絲">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/024F9F55CC5B3FF0E06400144FF82309_m.jpg" alt="上班族養生救星">
                        </a>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>

              <!-- D -->
              <div id="sectionD" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-d position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave4/section-title-d.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'B1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
              
              <!-- swpE -->
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section mb-4 mb-xl-5">
                <div class="swiper-custom">
                  <div id="swpE" class="swiper-container">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DE2BB33E6F851408E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4952D22E05400144FF82309_m.jpg" alt="Lumi">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/7E85612F6BD93B75E0536E0212AC7965">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/E45A89DA4B820BE3E05400144FF9CEC6_m.jpg" alt="Relove">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C5DF6D11792B00E9E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F6092A72D4942D22E05400144FF82309_m.jpg" alt="BioLead">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB3CB363D6034DCE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/FA32E542BF2D0D16E05400144FF9CEC6_m.jpg" alt="森繆斯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F270D2F0AC2748A1E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F5E2B0B21DB80AA0E05400144FF9CEC6_m.jpg" alt="泡菜">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3122572023">
                          <img class="img-fluid us-none" src="images/act/2023/12/sp/images/bn/F73B9C8B5B2E1F61E05400144FF9CEC6_m.jpg" alt="養元堂">
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <!-- B -->
              <div id="sectionB" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-b position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave4/section-title-b.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'D1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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

              <!-- A -->
              <div id="sectionA" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-a position-relative p-2 p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <!-- <div class="section-title w-100 text-center"><img src="images/act/2023/12/sp/images/wave4/section-title-a.png" class="img-fluid us-none"></div> -->
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'E1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-1 p-xl-2">
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
              <div v-if="before_0201" class="swp-banner-section swp-bank-section col-12">
                <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202401_creditcard.html">
                      <img src="images/act/2023/12/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">4500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期滿額回饋<br><span class="fw-bold text-danger">200</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>新春大採購</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">3600</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br><span class="fw-bold text-danger">滿額送刷卡金</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202401_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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
              <div v-else class="swp-banner-section swp-bank-section col-12">
                <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202402_creditcard.html">
                      <img src="images/act/2023/12/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202402_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202402_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">4500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202402_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期滿額回饋<br><span class="fw-bold text-danger">200</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202402_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>新春大採購</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202402_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">3888</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202402_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br><span class="fw-bold text-danger">滿額送刷卡金</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202402_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/12/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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

          <!-- <div><img class="img-fluid us-none" src="images/act/2023/12/sp/images/wave4/page-bottom-cloud.png" alt="page bottom cloud"></div> -->
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
      imgError: 'this.src="/html/images/act/2023/12/sp/images/img-error.png"',
      items: [],
      wave1: false,
      wave2: false,
      wave3: false,
      wave4: false,
      blackfriday: false,
      dailysale: false,
      tvoneday: false,
      before_1218: false,
      after_1218: false,
      before_0122: false,
      before_0201: false,
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = '/html/images/act/2023/12/sp/json/data.json';
      var path2 = '/html/images/act/2023/12/sp/json/data2.json';
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
      

      

      if ( moment(timeNow).isBetween('2023-11-28 00:00:00', '2023-12-14 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
      }
      if ( moment(timeNow).isBetween('2023-12-15 00:00:00', '2024-01-07 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
      }
      if ( moment(timeNow).isBetween('2024-01-08 00:00:00', '2024-01-29 23:59:59', 'second', '[]') ) {
        this.wave3 = true;
      }
      if ( moment(timeNow).isBetween('2024-01-30 00:00:00', '2024-02-18 23:59:59', 'second', '[]') ) {
        this.wave4 = true;
      }


      if ( moment(timeNow).isBetween('2023-12-11 00:00:00', '2023-12-17 23:59:59', 'second', '[]') ) {
        this.before_1218 = true;
      }
      if ( moment(timeNow).isBetween('2023-12-18 00:00:00', '2024-12-17 23:59:59', 'second', '[]') ) {
        this.after_1218 = true;
      }
      if ( moment(timeNow).isBetween('2023-12-18 00:00:00', '2023-12-24 23:59:59', 'second', '[]') ) {
        this.tvoneday = true;
        document.body.classList.add('tvoneday');
      }
      
      if ( moment(timeNow).isBetween('2024-01-19 00:00:00', '2024-01-21 23:59:59', 'second', '[]') ) {
        this.before_0122 = true;
      }

      if ( moment(timeNow).isBetween('2024-01-19 00:00:00', '2024-01-31 23:59:59', 'second', '[]') ) {
        this.before_0201 = true;
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



      
      

      if ( moment(timeNow).isSameOrBefore('2024-01-07 23:59:59') ) {
        path = path1;
      } else {
        path = path2;
      }



      console.log('path:'+path);




      // 倒數計時
      var eventTime = moment('2023-12-24 10:12:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');

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
            '<span class="countdown-number">' + md + '</span> 天 ' + 
            '<span class="countdown-number">' + duration.hours() + '</span> 時 ' + 
            '<span class="countdown-number">' + duration.minutes() + '</span> 分 ' + 
            '<span class="countdown-number">' + duration.seconds() + '</span> 秒 ' );
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
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2023/12/sp/images/product/'+ this.items[i].id +'/1.jpg');
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
        
        e.target.src = "/html/images/act/2023/12/sp/images/product/"+ t +".jpg";

      }

      
    },
    altImage: function(e) {
      

      var t = e.target.alt;
      e.target.src = "/html/images/act/2023/12/sp/images/product/"+ t +".jpg";
      

      if (e.target.imgchecked) {
        e.target.src = "/html/images/act/2023/12/sp/images/img-error.png";
      } else {
        e.target.src = "/html/images/act/2023/12/sp/images/product/"+ t +".jpg";
      }

      if (e.target.naturalWidth == 1) {
        e.target.src = "/html/images/act/2023/12/sp/images/product/"+ t +".jpg";

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

