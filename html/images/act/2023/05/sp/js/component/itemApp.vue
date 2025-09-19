<template>
  
  <div>
    
    <div v-if="wave1" class="main-section wave1" style="z-index: 2;">

      

      <div class="primary-section d-flex flex-column align-items-center animated fadeIn mb-xl-5">

        <div class="primary-section-stage d-flex justify-content-center align-items-center mx-auto">
          <div class="d-flex flex-row">
            <div class="animated fadeInUp">
              <div class="primary-section-btn-1 p-2">
                <a data-bs-toggle="modal" href="#eventModal-Wave1-B"><img src="images/act/2023/05/sp/images/wave1/primary-btn-1.png" class="img-fluid us-none"></a>
              </div>
            </div>
            <div class="animated fadeInUp">
              <div class="primary-section-btn-2 p-2">
                <a data-bs-toggle="modal" href="#eventModal-Wave1-F"><img src="images/act/2023/05/sp/images/wave1/primary-btn-2.png" class="img-fluid us-none"></a>
              </div>
            </div>
          </div>
          <div id="primarySectionRightGroup" class="d-flex flex-row">
            <div id="swpPrimaryWrapper" class="position-relative animated fadeInUp">
              <div class="primary-section-btn-3 p-2">
                <div id="swpPrimary" class="swiper-container position-relative overflow-hidden">
                  <div class="swiper-wrapper">
                    <!-- 5/30曝光 -->
                    <div v-if="after_0530" class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/html/202306catch.html">
                        <img class="img-fluid us-none" src="images/act/2023/05/sp/images/wave1/primary-btn-3-b.png">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-A">
                        <img class="img-fluid us-none" src="images/act/2023/05/sp/images/wave1/primary-btn-3-a.png">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C">
                        <img class="img-fluid us-none" src="images/act/2023/05/sp/images/wave1/primary-btn-3-c.png">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-none d-xl-block swiper-pagination position-absolute" style="transform: translateY(36px);"></div>
            </div>
          </div>
        </div>
        
      </div>

      <div class="secondary-section d-flex justify-content-center align-items-center mb-2 mb-xl-5 animated fadeIn">

        <div class="secondary-section-stage d-flex flex-column mx-auto pt-2 pt-xl-4">
          <div class="d-flex flex-column">
            <div class="wow fadeInUp secondary-section-btn-1 mb-3 mb-xl-5" data-wow-delay="0.2s">
              <a class="d-block" href="#eventModal-Wave1-D" data-bs-toggle="modal">
                <picture>
                  <source srcset="images/act/2023/05/sp/images/wave1/secondary-btn-1.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave1/secondary-btn-1.png">
                </picture>
              </a>
            </div>
            <div class="wow fadeInUp secondary-section-btn-2 mb-3 mb-xl-5" data-wow-delay="0.4s">
              <a class="d-block" href="#eventModal-Wave1-E" data-bs-toggle="modal">
                <picture>
                  <source srcset="images/act/2023/05/sp/images/wave1/secondary-btn-2.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave1/secondary-btn-2.png">
                </picture>
              </a>
            </div>
          </div>
        </div>
        
        
      </div>

      

      <div class="secondary-banner d-flex flex-column justify-content-center align-items-center mb-2 wow fadeInUp px-2 px-xl-0">
        <div class="secondary-banner-stage w-100">
          
          <div id="swpSecondaryBanner" class="swiper-container">
            <div class="swiper-wrapper">
              
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/flagShip/flagshipBrand/EDF5B2635E802429E05400144FF9CEC6">
                  <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/EDF5A51747D0054CE05400144FF82309.jpg" alt="勝崎生鮮">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/F18E14AC5C092E4BE05400144FF9CEC6">
                  <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F8A569FCB86505EBE05400144FF9CEC6.jpg" alt="露營">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/flagShip/flagshipBrand/DF416DF3282E5107E05400144FF82309">
                  <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/DF416FC3482705A9E05400144FF9CEC6.jpg" alt="畢耶">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/7E85B72A7D003B7CE0536E0212AC29EE">
                  <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/DE2A217ABBFC111DE05400144FF9CEC6.jpg" alt="雨季乾爽對策">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309">
                  <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/E8C580515FC463F1E05400144FF82309.jpg" alt="常玉">
                </a>
              </div>
            </div>
          </div>

        </div>
        <div class="swiper-pagination mt-3 mb-0 mb-xl-3"></div>
      </div>

      

      <!-- 公格navBar -->
      <div id="publicGrid" class="wave1">
        
        <div id="navBar" class="btn-nav-group wave1 d-flex justify-content-center mb-5 mb-xl-5">
          <div class="navbar-inner d-flex justify-content-between align-items-center position-relative">
            <a id="Btn1" data-wow-delay="0s" class="wow fadeInUp btn btn-nav border-0 rounded-0 p-0" href="#sectionA">
              <img src="images/act/2023/05/sp/images/wave1/nav-1.png" class="img-fluid rounded-3">
            </a>
            <a id="Btn2" data-wow-delay="0.2s" class="wow fadeInUp btn btn-nav border-0 rounded-0 p-0" href="#sectionB">
              <img src="images/act/2023/05/sp/images/wave1/nav-2.png" class="img-fluid">
            </a>
            <a id="Btn3" data-wow-delay="0.4s" class="wow fadeInUp btn btn-nav border-0 rounded-0 p-0" href="#sectionC">
              <img src="images/act/2023/05/sp/images/wave1/nav-3.png" class="img-fluid">
            </a>
            <a id="Btn4" data-wow-delay="0.6s" class="wow fadeInUp btn btn-nav border-0 rounded-0 p-0" href="#sectionD">
              <img src="images/act/2023/05/sp/images/wave1/nav-4.png" class="img-fluid">
            </a>
            <a id="Btn5" data-wow-delay="0.8s" class="wow fadeInUp btn btn-nav border-0 rounded-0 p-0" href="#sectionE">
              <img src="images/act/2023/05/sp/images/wave1/nav-5.png" class="img-fluid">
            </a>
          </div>
        </div>
        <!-- 公格 -->
        <div class="w-100" style="overflow-x: visible;">
          <div class="container-fluid p-0 g-0 position-relative" style="z-index: 2;">
            <div class="row g-0 justify-content-center">
              <!-- A -->
              <div id="sectionA" class="wow fadeIn col-12 mb-3 my-xl-5">
                <div class="section-wrapper section-a position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center p-1 p-xl-5">
                      <div class="section-product mx-0 ms-xl-5 mt-xl-3 px-5 px-xl-0">
                        <a href="https://www.vivatv.com.tw/goods/3039752022" class="d-block">
                          <picture>
                            <source srcset="images/act/2023/05/sp/images/wave1/product-a.png" media="(min-width: 992px)">
                            <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave1/mobile/product-a.png">
                          </picture>
                        </a>
                      </div>
                      <div class="section-product-group d-flex flex-column justify-content-center align-items-center mb-5 me-xl-5 px-4 px-xl-0">
                        <div class="row row-cols-2 row-cols-md-3 g-0 align-self-stretch px-2 px-xl-0">
                          <div v-if="item.type === 'A1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
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
              <div id="sectionB" class="wow fadeIn col-12 mb-3 my-xl-5">
                <div class="section-wrapper section-b position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row-reverse justify-content-center p-1 p-xl-5">
                      <div class="section-product mx-0 ms-xl-3 mt-xl-3 px-5 px-xl-0">
                        <a href="https://www.vivatv.com.tw/goods/3060702022" class="d-block">
                          <picture>
                            <source srcset="images/act/2023/05/sp/images/wave1/product-b.png" media="(min-width: 992px)">
                            <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave1/mobile/product-b.png">
                          </picture>
                        </a>
                      </div>
                      <div class="section-product-group d-flex flex-column justify-content-center align-items-center mb-5 mx-xl-4 px-4 px-xl-0">
                        <div class="row row-cols-2 row-cols-md-3 g-0 align-self-stretch px-2 px-xl-0">
                          <div v-if="item.type === 'B1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
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
              <div class="wow fadeInUp col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section p-1 mb-5" data-wow-offset="50" data-wow-delay="0.2s">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB3CB363D6034DCE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/FA32E542BF2D0D16E05400144FF9CEC6_m.jpg" alt="森繆斯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/C5DF6D11790F00E9E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F5E2B0B21E070AA0E05400144FF9CEC6_m.jpg" alt="3d面膜">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB35BBF445C34E2E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/FCF46AD8F2983634E05400144FF9CEC6_m.jpg" alt="田倉">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F5E2973B605C3EECE05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/FCE16CC7828B6201E05400144FF9CEC6_m.jpg" alt="台塑生醫">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3122572023">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F73B9C8B5B2E1F61E05400144FF9CEC6_m.jpg" alt="珍珠粉">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/EA1C43A87D5A5BE4E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/04/sp/images/bn/F6092A72CC0E2D22E05400144FF82309_m.jpg" alt="PURESCENT">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- C -->
              <div id="sectionC" class="wow fadeIn col-12 mb-3 my-xl-5">
                <div class="section-wrapper section-c position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center p-1 p-xl-5">
                      <div class="section-product mx-0 ms-xl-5 mt-xl-3 px-5 px-xl-0">
                        <a href="https://www.vivatv.com.tw/goods/3048302022" class="d-block">
                          <picture>
                            <source srcset="images/act/2023/05/sp/images/wave1/product-c.png" media="(min-width: 992px)">
                            <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave1/mobile/product-c.png">
                          </picture>
                        </a>
                      </div>
                      <div class="section-product-group d-flex flex-column justify-content-center align-items-center mb-5 me-xl-5 px-4 px-xl-0">
                        <div class="row row-cols-2 row-cols-md-3 g-0 align-self-stretch px-2 px-xl-0">
                          <div v-if="item.type === 'C1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
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
              <div id="sectionD" class="wow fadeIn col-12 mb-3 my-xl-5">
                <div class="section-wrapper section-d position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row-reverse justify-content-center p-1 p-xl-5">
                      <div class="section-product mx-0 mt-xl-3 px-5 px-xl-0">
                        <a href="https://www.vivatv.com.tw/goods/3123492023" class="d-block">
                          <picture>
                            <source srcset="images/act/2023/05/sp/images/wave1/product-d.png" media="(min-width: 992px)">
                            <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave1/mobile/product-d.png">
                          </picture>
                        </a>
                      </div>
                      <div class="section-product-group d-flex flex-column justify-content-center align-items-center mb-5 mx-xl-4 px-4 px-xl-0">
                        <div class="row row-cols-2 row-cols-md-3 g-0 align-self-stretch px-2 px-xl-0">
                          <div v-if="item.type === 'D1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
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
              <div class="wow fadeInUp col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section p-1 mb-5">
                <div class="swiper-custom">
                  <div id="swpE" class="swiper-container">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/E63AF89FEFAF3D0EE0440003BA0FF872">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/FCF46AD8F2173634E05400144FF9CEC6_m.jpg" alt="芒果">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F8A569FCBA0D05EBE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/FCF46AD8F2183634E05400144FF9CEC6_m.jpg" alt="勝崎生鮮46">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F270D2F0AC2748A1E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F5E2B0B21DB80AA0E05400144FF9CEC6_m.jpg" alt="泡菜">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/EAD5CAC78C1E4F82E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F216A9FBA8131460E05400144FF9CEC6_m.jpg" alt="吉米莊">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3059672022">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F21C15729AA44AD4E05400144FF82309_m.jpg" alt="輕食">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- E -->
              <div id="sectionE" class="wow fadeIn col-12 mb-3 my-xl-5">
                <div class="section-wrapper section-e position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center p-1 p-xl-5">
                      <div class="section-product mx-0 ms-xl-5 mt-xl-3 px-5 px-xl-0">
                        <a href="https://www.vivatv.com.tw/goods/3122602023" class="d-block">
                          <picture>
                            <source srcset="images/act/2023/05/sp/images/wave1/product-e.png" media="(min-width: 992px)">
                            <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave1/mobile/product-e.png">
                          </picture>
                        </a>
                      </div>
                      <div class="section-product-group d-flex flex-column justify-content-center align-items-center mb-5 me-xl-5 mx-xl-4 px-4 px-xl-0">
                        <div class="row row-cols-2 row-cols-md-3 g-0 align-self-stretch px-2 px-xl-0">
                          <div v-if="item.type === 'E1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
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
              <div class="swp-banner-section col-12 p-2 mb-3 mb-xl-5 wow fadeInRight">
                <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202306_creditcard.html">
                      <img src="images/act/2023/05/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-ctbc" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-ctbc.png" class="card-img-top" alt="中信">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<br>刷卡金<span class="fw-bold text-danger">1000</span>元</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">3500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期滿額<br>最高回饋<span class="fw-bold text-danger">1000</span>刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <!-- <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-citi" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-citi.png" class="card-img-top" alt="花旗">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<span class="fw-bold text-danger">600元</span><br>統一超商商品卡</p>
                            </div>
                          </div>
                        </a>
                      </div> -->
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>滿額加贈高回饋</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">2000</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br>滿額送刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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
    
    <div v-if="wave2" class="main-section wave2" style="z-index: 2;">
      
      <div v-if="ecOnly" id="ecOnly" class="mb-0" style="background-color: rgba(255,255,255,0);">
        <div class="ec-only-section d-flex flex-column mx-auto">

          <div class="tab-content mb-3" id="pills-tabContent">
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
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">搶購結束</span></div>
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
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">搶購結束</span></div>
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
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">搶購結束</span></div>
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
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">搶購結束</span></div>
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
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">搶購結束</span></div>
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
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">搶購結束</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
            </div>
            <div id="pills-S19" class="tab-pane fade" role="tabpanel" aria-labelledby="pills-S19-tab" tabindex="0">
              <div class="w-100 position-relative">
                <div id="swpS19" class="swiper-container overflow-hidden">
                  <div class="swiper-wrapper">
                    <div v-if="item.type === 'S19'" v-for="item in items" class="swiper-slide p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
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
                          <div v-else class="item-price text-center"><span class="fw-normal fs-5">搶購結束</span></div>
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

          <div class="nav justify-content-center nav-pills mb-2" id="pills-tab" role="tablist">
            <button class="nav-link" id="pills-0613-tab" data-bs-toggle="pill" data-bs-target="#pills-S13" type="button" role="tab" aria-controls="pills-S13" aria-selected="true">6/13</button>
            <button class="nav-link" id="pills-0614-tab" data-bs-toggle="pill" data-bs-target="#pills-S14" type="button" role="tab" aria-controls="pills-S14" aria-selected="true">6/14</button>
            <button class="nav-link" id="pills-0615-tab" data-bs-toggle="pill" data-bs-target="#pills-S15" type="button" role="tab" aria-controls="pills-S15" aria-selected="true">6/15</button>
            <button class="nav-link" id="pills-0616-tab" data-bs-toggle="pill" data-bs-target="#pills-S16" type="button" role="tab" aria-controls="pills-S16" aria-selected="true">6/16</button>
            <button class="nav-link" id="pills-0617-tab" data-bs-toggle="pill" data-bs-target="#pills-S17" type="button" role="tab" aria-controls="pills-S17" aria-selected="true">6/17</button>
            <button class="nav-link" id="pills-0618-tab" data-bs-toggle="pill" data-bs-target="#pills-S18" type="button" role="tab" aria-controls="pills-S18" aria-selected="true">6/18</button>
            <button class="nav-link" id="pills-0619-tab" data-bs-toggle="pill" data-bs-target="#pills-S19" type="button" role="tab" aria-controls="pills-S19" aria-selected="true">6/19</button>
          </div>

          

        </div>
      </div>

      <div v-if="ecOnly" class="ec-only-button mx-auto mb-3 mb-xl-5">
        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/DF416FC3489805A9E05400144FF9CEC6">
          <picture>
            <source srcset="images/act/2023/05/sp/images/wave2/btn-ec-only.png" media="(min-width: 992px)">
            <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave2/btn-ec-only.png">
          </picture>
        </a>
      </div>

      <div class="secondary-section d-flex justify-content-center align-items-center mb-2 mb-xl-4 animated fadeIn">
        <div class="secondary-section-stage d-flex flex-column mx-auto">
          <div class="d-flex flex-column">
            <div class="wow fadeInUp secondary-section-btn-2">
              <a class="d-block" href="#eventModal-Wave1-E" data-bs-toggle="modal">
                <picture>
                  <source srcset="images/act/2023/05/sp/images/wave2/secondary-btn-2.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave2/secondary-btn-2.png">
                </picture>
              </a>
            </div>
            <div class="wow fadeInUp secondary-section-btn-1">
              <a class="d-block" href="#eventModal-Wave1-D" data-bs-toggle="modal">
                <picture>
                  <source srcset="images/act/2023/05/sp/images/wave2/secondary-btn-1.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave2/secondary-btn-1.png">
                </picture>
              </a>
            </div>
          </div>
        </div>  
      </div>

      <div class="primary-section d-flex flex-column align-items-center animated fadeIn mb-3 mb-xl-5">
        <div class="primary-section-stage d-flex justify-content-center align-items-center mx-auto">
          
          <div id="primarySectionRightGroup" class="d-flex flex-row">
            <div id="swpPrimaryWrapper" class="position-relative animated fadeInUp">
              <div class="primary-section-btn-3 p-2">
                <div id="swpPrimary" class="swiper-container position-relative overflow-hidden">
                  <div class="swiper-wrapper">
                    <!-- 5/30曝光 -->
                    <!-- <div v-if="after_0530" class="swiper-slide">
                      
                    </div> -->
                    <div class="swiper-slide">
                      <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-A">
                        <img class="img-fluid us-none" src="images/act/2023/05/sp/images/wave2/primary-btn-3-a.png">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C">
                        <img class="img-fluid us-none" src="images/act/2023/05/sp/images/wave2/primary-btn-3-c.png">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-none d-xl-block swiper-pagination position-absolute" style="transform: translateY(36px);"></div>
            </div>
          </div>
          <div class="d-flex flex-row">
            <div class="animated fadeInUp">
              <div class="primary-section-btn-1 p-2">
                <a data-bs-toggle="modal" href="#eventModal-Wave1-B"><img src="images/act/2023/05/sp/images/wave2/primary-btn-1.png" class="img-fluid us-none"></a>
              </div>
            </div>
          </div>
          <div class="d-flex flex-row">
            <div class="animated fadeInUp">
              <div class="primary-section-btn-2 p-2">
                <!-- <a data-bs-toggle="modal" href="#eventModal-Wave1-G"><img src="images/act/2023/05/sp/images/wave2/primary-btn-2.png" class="img-fluid us-none"></a> -->
                <a class="d-block" href="https://www.vivatv.com.tw/html/202306catch.html"><img class="img-fluid us-none" src="images/act/2023/05/sp/images/wave2/primary-btn-3-b.png"></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="secondary-banner d-flex flex-column justify-content-center align-items-center mb-2 wow fadeInUp px-2 px-xl-0">
        <div class="secondary-banner-stage w-100">
          
          <div id="swpSecondaryBanner" class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/7E85B72A7D003B7CE0536E0212AC29EE">
                  <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F5F637E9A419464AE05400144FF9CEC6.jpg" alt="雨季乾爽對策">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/flagShip/flagshipBrand/EDF5B2635E802429E05400144FF9CEC6">
                  <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/EDF5A51747D0054CE05400144FF82309.jpg" alt="勝崎生鮮">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/F18E14AC5C092E4BE05400144FF9CEC6">
                  <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F8A569FCB86505EBE05400144FF9CEC6.jpg" alt="露營">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/7E85B72A7D003B7CE0536E0212AC29EE">
                  <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F5F637E9A419464AE05400144FF9CEC6.jpg" alt="雨季乾爽對策">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/flagShip/flagshipBrand/DF416DF3282E5107E05400144FF82309">
                  <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/DF416FC3482705A9E05400144FF9CEC6.jpg" alt="畢耶">
                </a>
              </div>
              
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309">
                  <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/E8C580515FC463F1E05400144FF82309.jpg" alt="常玉">
                </a>
              </div>
            </div>
          </div>

        </div>
        <div class="swiper-pagination mt-3 mb-0 mb-xl-3"></div>
      </div>

      <!-- 公格navBar -->
      <div id="publicGrid" class="wave2">
        
        <div id="navBar" class="btn-nav-group wave2 d-flex justify-content-center mb-5 mb-xl-5">
          <div class="navbar-inner d-flex justify-content-between align-items-center position-relative">
            <a id="Btn1" data-wow-delay="0s" class="wow fadeInUp btn btn-nav border-0 rounded-0 p-0" href="#sectionA">
              <img src="images/act/2023/05/sp/images/wave2/nav-1.png" class="img-fluid rounded-3">
            </a>
            <a id="Btn2" data-wow-delay="0.2s" class="wow fadeInUp btn btn-nav border-0 rounded-0 p-0" href="#sectionB">
              <img src="images/act/2023/05/sp/images/wave2/nav-2.png" class="img-fluid">
            </a>
            <a id="Btn3" data-wow-delay="0.4s" class="wow fadeInUp btn btn-nav border-0 rounded-0 p-0" href="#sectionC">
              <img src="images/act/2023/05/sp/images/wave2/nav-3.png" class="img-fluid">
            </a>
            <a id="Btn4" data-wow-delay="0.6s" class="wow fadeInUp btn btn-nav border-0 rounded-0 p-0" href="#sectionD">
              <img src="images/act/2023/05/sp/images/wave2/nav-4.png" class="img-fluid">
            </a>
            <a id="Btn5" data-wow-delay="0.8s" class="wow fadeInUp btn btn-nav border-0 rounded-0 p-0" href="#sectionE">
              <img src="images/act/2023/05/sp/images/wave2/nav-5.png" class="img-fluid">
            </a>
          </div>
        </div>
        <!-- 公格 -->
        <div class="w-100" style="overflow-x: visible;">
          <div class="container-fluid p-0 g-0 position-relative" style="z-index: 2;">
            <div class="row g-0 justify-content-center">
              <!-- A -->
              <div id="sectionA" class="wow fadeIn col-12 mb-3 my-xl-5">
                <div class="section-wrapper section-a position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center p-1 p-xl-5">
                      <div class="section-product mx-0 ms-xl-5 mt-xl-3 px-5 px-xl-0">
                        <a href="https://www.vivatv.com.tw/goods/3058582022" class="d-block">
                          <picture>
                            <source srcset="images/act/2023/05/sp/images/wave2/product-a.png" media="(min-width: 992px)">
                            <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave2/mobile/product-a.png">
                          </picture>
                        </a>
                      </div>
                      <div class="section-product-group d-flex flex-column justify-content-center align-items-center mb-5 me-xl-5 px-4 px-xl-0">
                        <div class="row row-cols-2 row-cols-md-3 g-0 align-self-stretch px-2 px-xl-0">
                          <div v-if="item.type === 'A1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
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
              <div id="sectionB" class="wow fadeIn col-12 mb-3 my-xl-5">
                <div class="section-wrapper section-b position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row-reverse justify-content-center p-1 p-xl-5">
                      <div class="section-product mx-0 ms-xl-3 mt-xl-3 px-5 px-xl-0">
                        <a href="https://www.vivatv.com.tw/goods/3048182022" class="d-block">
                          <picture>
                            <source srcset="images/act/2023/05/sp/images/wave2/product-b.png" media="(min-width: 992px)">
                            <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave2/mobile/product-b.png">
                          </picture>
                        </a>
                      </div>
                      <div class="section-product-group d-flex flex-column justify-content-center align-items-center mb-5 mx-xl-4 px-4 px-xl-0">
                        <div class="row row-cols-2 row-cols-md-3 g-0 align-self-stretch px-2 px-xl-0">
                          <div v-if="item.type === 'B1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
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
              <div class="wow fadeInUp col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section p-1 mb-5" data-wow-offset="50" data-wow-delay="0.2s">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB3CB363D6034DCE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/FA32E542BF2D0D16E05400144FF9CEC6_m.jpg" alt="森繆斯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB35BBF445C34E2E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/FCF46AD8F2983634E05400144FF9CEC6_m.jpg" alt="田倉">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F5E2973B605C3EECE05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/FCE16CC7828B6201E05400144FF9CEC6_m.jpg" alt="台塑生醫">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3122572023">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F73B9C8B5B2E1F61E05400144FF9CEC6_m.jpg" alt="珍珠粉">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/EA1C43A87D5A5BE4E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/04/sp/images/bn/F6092A72CC0E2D22E05400144FF82309_m.jpg" alt="PURESCENT">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F5E2973B605C3EECE05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/FCE16CC7828B6201E05400144FF9CEC6_m.jpg" alt="台塑生醫">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- C -->
              <div id="sectionC" class="wow fadeIn col-12 mb-3 my-xl-5">
                <div class="section-wrapper section-c position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center p-1 p-xl-5">
                      <div class="section-product mx-0 ms-xl-5 mt-xl-3 px-5 px-xl-0">
                        <a href="https://www.vivatv.com.tw/goods/3132592023" class="d-block">
                          <picture>
                            <source srcset="images/act/2023/05/sp/images/wave2/product-c.png" media="(min-width: 992px)">
                            <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave2/mobile/product-c.png">
                          </picture>
                        </a>
                      </div>
                      <div class="section-product-group d-flex flex-column justify-content-center align-items-center mb-5 me-xl-5 px-4 px-xl-0">
                        <div class="row row-cols-2 row-cols-md-3 g-0 align-self-stretch px-2 px-xl-0">
                          <div v-if="item.type === 'C1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
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
              <div id="sectionD" class="wow fadeIn col-12 mb-3 my-xl-5">
                <div class="section-wrapper section-d position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row-reverse justify-content-center p-1 p-xl-5">
                      <div class="section-product mx-0 mt-xl-3 px-5 px-xl-0">
                        <a href="https://www.vivatv.com.tw/goods/3138172023" class="d-block">
                          <picture>
                            <source srcset="images/act/2023/05/sp/images/wave2/product-d.png" media="(min-width: 992px)">
                            <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave2/mobile/product-d.png">
                          </picture>
                        </a>
                      </div>
                      <div class="section-product-group d-flex flex-column justify-content-center align-items-center mb-5 mx-xl-4 px-4 px-xl-0">
                        <div class="row row-cols-2 row-cols-md-3 g-0 align-self-stretch px-2 px-xl-0">
                          <div v-if="item.type === 'D1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
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
              <div class="wow fadeInUp col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section p-1 mb-5">
                <div class="swiper-custom">
                  <div id="swpE" class="swiper-container">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/E63AF89FEFAF3D0EE0440003BA0FF872">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/FCF46AD8F2173634E05400144FF9CEC6_m.jpg" alt="芒果">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F8A569FCBA0D05EBE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/FCF46AD8F2183634E05400144FF9CEC6_m.jpg" alt="勝崎生鮮46">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F270D2F0AC2748A1E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F5E2B0B21DB80AA0E05400144FF9CEC6_m.jpg" alt="泡菜">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/EAD5CAC78C1E4F82E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F216A9FBA8131460E05400144FF9CEC6_m.jpg" alt="吉米莊">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3059672022">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F21C15729AA44AD4E05400144FF82309_m.jpg" alt="輕食">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F270D2F0AC2748A1E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/05/sp/images/bn/F5E2B0B21DB80AA0E05400144FF9CEC6_m.jpg" alt="泡菜">
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <!-- E -->
              <div id="sectionE" class="wow fadeIn col-12 mb-3 my-xl-5">
                <div class="section-wrapper section-e position-relative">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column flex-xl-row">
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center p-1 p-xl-5">
                      <div class="section-product mx-0 ms-xl-5 mt-xl-3 px-5 px-xl-0">
                        <a href="https://www.vivatv.com.tw/goods/3122622023" class="d-block">
                          <picture>
                            <source srcset="images/act/2023/05/sp/images/wave2/product-e.png" media="(min-width: 992px)">
                            <img class="img-fluid pe-none us-none" src="images/act/2023/05/sp/images/wave2/mobile/product-e.png">
                          </picture>
                        </a>
                      </div>
                      <div class="section-product-group d-flex flex-column justify-content-center align-items-center mb-5 me-xl-5 mx-xl-4 px-4 px-xl-0">
                        <div class="row row-cols-2 row-cols-md-3 g-0 align-self-stretch px-2 px-xl-0">
                          <div v-if="item.type === 'E1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
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
              <div class="swp-banner-section col-12 p-2 mb-3 mb-xl-5 wow fadeInRight">
                <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202306_creditcard.html">
                      <img src="images/act/2023/05/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-ctbc" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-ctbc.png" class="card-img-top" alt="中信">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<br>刷卡金<span class="fw-bold text-danger">1000</span>元</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">3500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期滿額<br>最高回饋<span class="fw-bold text-danger">1000</span>刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <!-- <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-citi" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-citi.png" class="card-img-top" alt="花旗">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<span class="fw-bold text-danger">600元</span><br>統一超商商品卡</p>
                            </div>
                          </div>
                        </a>
                      </div> -->
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>滿額加贈高回饋</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">2000</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br>滿額送刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202306_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/05/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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

  </div>
</template>


<script>
module.exports = {
  data: function() {
    return {
      isLoading: false,
      failed: false,
      imgError: 'this.src="/html/images/act/2023/05/sp/images/img-error.png"',
      items: [],
      wave1: false,
      wave2: false,
      after_0530: false,
      ecOnly: false
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = (window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2023/05/sp/json/data.json";
      var path2 = (window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2023/05/sp/json/data2.json";
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
      

      if ( moment(timeNow).isBetween('2023-05-16 00:00:00', '2023-06-04 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
      }

      if ( moment(timeNow).isBetween('2023-06-05 00:00:00', '2023-06-25 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
      }

      if ( moment(timeNow).isBetween('2023-05-30 00:00:00', '2023-06-25 23:59:59', 'second', '[]') ) {
        this.after_0530 = true;
      }

      if ( moment(timeNow).isBetween('2023-06-12 00:00:00', '2023-06-19 23:59:59', 'second', '[]') ) {
        this.ecOnly = true;
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



      
      if ( moment(timeNow).isSameOrBefore('2023-06-04 23:59:59') ) {
        path = path1;
      } else {
        path = path2;
      }



      console.log('path:'+path);




      // 倒數計時
      // var eventTime = moment('2023-06-04 10:12:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');

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
      //       '倒數&ensp;' +
      //       '<span class="countdown-number">' + md + '</span> 天 ' + 
      //       '<span class="countdown-number">' + duration.hours() + '</span> 時 ' + 
      //       '<span class="countdown-number">' + duration.minutes() + '</span> 分 ' + 
      //       '<span class="countdown-number">' + duration.seconds() + '</span> 秒 ' );
      //   } else {
      //     $('#countDownTimer').hide();
      //     $('.countdown').hide();
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
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2023/05/sp/images/product/'+ this.items[i].id +'/1.jpg');
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

        this.items[j].launch = this.items[j].start.substr(5,6);
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
        e.target.src = "/html/images/act/2023/05/sp/images/product/"+ t +".jpg";

      }

      
    },
    altImage: function(e) {
      

      // var t = e.target.alt;
      // e.target.src = "/html/images/act/2023/05/sp/images/product/"+ t +".jpg";
      

      // if (e.target.imgchecked) {
      //   e.target.src = "/html/images/act/2023/05/sp/images/img-error.png";
      // } else {
      //   e.target.src = "/html/images/act/2023/05/sp/images/product/"+ t +".jpg";
      // }

      // if (e.target.naturalWidth == 1) {
      //   e.target.src = "/html/images/act/2023/05/sp/images/product/"+ t +".jpg";

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

