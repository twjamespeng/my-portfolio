<template>
  
  <div>
    
    <div v-if="wave1" class="main-section wave1 d-flex flex-column align-items-center" style="z-index: 2;">
      <div class="people-sticky">
        <div class="people">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div class="primary-section d-flex flex-column align-items-center animated fadeIn px-2 px-lg-0">

        <div class="primary-section-group d-flex flex-column justify-content-center align-items-center mb-3 mb-xl-5">
          
            <div class="primary-date-1 p-2 mb-2 p-lg-3 mb-lg-3">
              <picture>
                <source srcset="images/act/2023/11/sp/images/wave1/primary-date-1.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave1/mobile/primary-date-1.png" alt="1020-1126">
              </picture>
            </div>
            <!-- upper part -->
            <div class="d-flex justify-content-center w-100 position-relative mb-3">

              <div class="d-flex flex-column">
                <div class="d-flex flex-column flex-lg-row">
                  <div class="primary-btn-1">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C">
                      <picture>
                        <source srcset="images/act/2023/11/sp/images/wave1/primary-btn-1.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave1/mobile/primary-btn-1.png" alt="滿1111回饋11%">
                      </picture>
                    </a>
                  </div>
                  <div class="primary-btn-2">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-D">
                      <picture>
                        <source srcset="images/act/2023/11/sp/images/wave1/primary-btn-2.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave1/mobile/primary-btn-2.png" alt="滿30000送耶誕麵包">
                      </picture>
                    </a>
                  </div>
                </div>
                <div class="primary-4 d-none d-lg-block">
                  <!-- <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C"> -->
                    <picture>
                      <source srcset="images/act/2023/11/sp/images/wave1/primary-btn-4.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave1/primary-btn-4.png" alt="滿額送">
                    </picture>
                  <!-- </a> -->
                </div>
              </div>

              <div class="primary-btn-3">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-I">
                  <picture>
                    <source srcset="images/act/2023/11/sp/images/wave1/primary-btn-3.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave1/mobile/primary-btn-3.png" alt="新友送冰淇淋">
                  </picture>
                </a>
              </div>

            </div>

            <div class="primary-date-2-m d-flex d-lg-none flex-fill justify-content-center align-items-center p-2 mb-2 p-lg-0 mb-lg-0">
              <div class="text-center">
                <picture>
                  <source srcset="images/act/2023/11/sp/images/wave1/primary-date-2.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave1/mobile/primary-date-2.png" alt="1101-1112">
                </picture>
              </div>
            </div>

            <!-- lower part -->
            <div class="d-flex justify-content-center w-100 position-relative">
              <div id="swpPrimaryLeftWrapper" class="position-relative overflow-hidden flex-shrink-0">
                <div id="swpPrimaryLeft" class="swiper-container position-relative">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-A">
                        <picture>
                          <source srcset="images/act/2023/11/sp/images/wave1/primary-btn-5-a.png" media="(min-width: 992px)">
                          <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave1/mobile/primary-btn-5-a.png" alt="註冊送好禮">
                        </picture>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-B">
                        <picture>
                          <source srcset="images/act/2023/11/sp/images/wave1/primary-btn-5-b.png" media="(min-width: 992px)">
                          <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave1/mobile/primary-btn-5-b.png" alt="新客首購禮">
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="d-none d-xl-block swiper-pagination position-absolute" style="transform: translateY(48px);"></div>
              </div>

              <div class="d-flex flex-column">
                <div class="d-flex">
                  <div class="d-flex flex-column">
                    <div class="primary-btn-6">
                      <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-E">
                        <picture>
                          <source srcset="images/act/2023/11/sp/images/wave1/primary-btn-6.png" media="(min-width: 992px)">
                          <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave1/mobile/primary-btn-6.png" alt="滿額抽">
                        </picture>
                      </a>
                    </div>
                    <div class="primary-btn-7">
                      <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-H">
                        <picture>
                          <source srcset="images/act/2023/11/sp/images/wave1/primary-btn-7.png" media="(min-width: 992px)">
                          <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave1/mobile/primary-btn-7.png" alt="11點搶銀幣">
                        </picture>
                      </a>
                    </div>
                  </div>
                  <div class="primary-8 d-none d-lg-block">
                    <!-- <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C"> -->
                      <picture>
                        <source srcset="images/act/2023/11/sp/images/wave1/primary-btn-8.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave1/primary-btn-8.png" alt="雙11加碼">
                      </picture>
                    <!-- </a> -->
                  </div>
                </div>

                <div class="primary-date-2 d-none d-lg-flex flex-fill justify-content-center align-items-center">
                  <div class="text-center">
                    <picture>
                      <source srcset="images/act/2023/11/sp/images/wave1/primary-date-2.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave1/mobile/primary-date-2.png" alt="1101-1112">
                    </picture>
                  </div>
                </div>

              </div>


            </div>






            
        </div>

        


      </div>

      <div v-if="start_1101" class="dailysale-section d-flex flex-column mx-auto position-relative mb-5">
        <!-- <img src="images/act/2023/11/sp/images/wave2/bg-dailysale.png" class="img-fluid us-none"> -->
        <picture>
          <source srcset="images/act/2023/11/sp/images/wave2/bg-dailysale.png" media="(min-width: 992px)">
          <img class="img-fluid pe-none us-none" src="images/act/2023/11/sp/images/wave2/mobile/bg-dailysale.png" alt="每日限搶">
        </picture>
        <div class="dailysale-click position-absolute top-0 start-0 w-100 d-flex justify-content-center">
          <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/EC10C7D937ED04E7E05400144FF82309" title="前往每日限搶專區">
            <picture>
              <source srcset="images/act/2023/11/sp/images/wave2/click-dailysale.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/11/sp/images/wave2/mobile/click-dailysale.png" alt="每日限搶專區">
            </picture>
          </a>
        </div>
        <div class="position-absolute end-0 bottom-0 start-0" style="top: 15%;">
          <ul class="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-1106-tab" data-bs-toggle="pill" data-bs-target="#pills-1106" type="button" role="tab">11/6</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-1107-tab" data-bs-toggle="pill" data-bs-target="#pills-1107" type="button" role="tab">11/7</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-1108-tab" data-bs-toggle="pill" data-bs-target="#pills-1108" type="button" role="tab">11/8</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-1109-tab" data-bs-toggle="pill" data-bs-target="#pills-1109" type="button" role="tab">11/9</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-1110-tab" data-bs-toggle="pill" data-bs-target="#pills-1110" type="button" role="tab">11/10</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-1111-tab" data-bs-toggle="pill" data-bs-target="#pills-1111" type="button" role="tab">11/11</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-1112-tab" data-bs-toggle="pill" data-bs-target="#pills-1112" type="button" role="tab">11/12</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane show active" id="pills-1106" role="tabpanel" tabindex="0">
              <div id="swp-1106" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS06'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
            <div class="tab-pane " id="pills-1107" role="tabpanel" tabindex="0">
              <div id="swp-1107" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS07'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
            <div class="tab-pane " id="pills-1108" role="tabpanel" tabindex="0">
              <div id="swp-1108" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS08'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
            <div class="tab-pane " id="pills-1109" role="tabpanel" tabindex="0">
              <div id="swp-1109" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS09'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
            <div class="tab-pane " id="pills-1110" role="tabpanel" tabindex="0">
              <div id="swp-1110" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS10'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
            <div class="tab-pane " id="pills-1111" role="tabpanel" tabindex="0">
              <div id="swp-1111" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS11'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
            <div class="tab-pane " id="pills-1112" role="tabpanel" tabindex="0">
              <div id="swp-1112" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS12'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center mb-5 w-100 position-relative">
        <div class="secondary-btn-1 p-1 wow fadeInUp">
          <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-G">
            <picture>
              <source srcset="images/act/2023/11/sp/images/wave1/secondary-btn-1.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave1/mobile/secondary-btn-1.png" alt="加碼抽蛋捲冰淇淋">
            </picture>
          </a>
        </div>
      </div>

      <!-- <div class="secondary-banner d-flex flex-column justify-content-center align-items-center mb-2 wow fadeInUp px-2 px-xl-0">
        <div class="secondary-banner-stage w-100 overflow-hidden rounded-3">
          
          <div id="swpSecondaryBanner" class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/FE26D074E2855E90E05400144FF82309">
                  <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/FE26D074E5A15E90E05400144FF82309.jpg" alt="食光麵攤">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/flagShip/flagshipBrand/EDF5B2635E802429E05400144FF9CEC6">
                  <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/EDF5A51747D0054CE05400144FF82309.jpg" alt="勝崎生鮮">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/F18E14AC5C092E4BE05400144FF9CEC6">
                  <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F8A569FCB86505EBE05400144FF9CEC6.jpg" alt="露營">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/flagShip/flagshipBrand/DF416DF3282E5107E05400144FF82309">
                  <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/E8CEDBA85E880BECE05400144FF82309.jpg" alt="畢耶">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/7E85B72A7D003B7CE0536E0212AC29EE">
                  <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F5F637E9A419464AE05400144FF9CEC6.jpg" alt="雨季乾爽對策">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309">
                  <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/E8C580515FC463F1E05400144FF82309.jpg" alt="常玉">
                </a>
              </div>
            </div>
          </div>

        </div>
        <div class="swiper-pagination my-xl-3"></div>
      </div> -->
      <!-- 公格navBar -->
      <div id="publicGrid" class="wave1">
        
        <div id="navBar" class="btn-nav-group wave1 d-flex justify-content-center pb-4">
          <div class="navbar-inner d-flex justify-content-between align-items-center position-relative">
            <a id="Btn1" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionA">
              <img src="images/act/2023/11/sp/images/wave1/nav-1.png" class="img-fluid">
            </a>
            <a id="Btn2" data-wow-delay="0.2s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionB">
              <img src="images/act/2023/11/sp/images/wave1/nav-2.png" class="img-fluid">
            </a>
            <a id="Btn3" data-wow-delay="0.4s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionC">
              <img src="images/act/2023/11/sp/images/wave1/nav-3.png" class="img-fluid">
            </a>
            <a id="Btn4" data-wow-delay="0.6s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionD">
              <img src="images/act/2023/11/sp/images/wave1/nav-4.png" class="img-fluid">
            </a>
            <a id="Btn5" data-wow-delay="0.8s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionE">
              <img src="images/act/2023/11/sp/images/wave1/nav-5.png" class="img-fluid">
            </a>
          </div>
        </div>
        <!-- 公格 -->
        <div class="w-100 position-relative">


          <div class="container-lg px-2 g-0 position-relative" style="z-index: 2;">
            <div class="row g-0 justify-content-center">
              <!-- A -->
              <div id="sectionA" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-a position-relative p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="w-100 text-center"><img src="images/act/2023/11/sp/images/wave1/section-title-a.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
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
              <!-- B -->
              <div id="sectionB" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-b position-relative p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="w-100 text-center"><img src="images/act/2023/11/sp/images/wave1/section-title-b.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
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
              
              <!-- swpD -->
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section p-1 mb-4 mb-xl-5" data-wow-offset="50" data-wow-delay="0.2s">
                <div class="swiper-custom">
                  <div id="swpD" class="swiper-container">
                    <div class="swiper-wrapper">

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/category/tertiaryCategory/37A57C0135AA3FDDE0536E0212ACD6ED">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/doyubo.jpg" alt="豆油伯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/searchResult/%E5%84%AA%E6%BA%90%E5%A5%BD%E9%A3%9F">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/yoyuan.jpg" alt="優源好食">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/FE26CE0DFB5E6AA9E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/0420E696CBA46AB7E06400144FF9CEC6_m.jpg" alt="紫米">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DB58052A7E800437E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F6092A72D4932D22E05400144FF82309_m.jpg" alt="沛優絲">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/024F9F55CC5B3FF0E06400144FF82309_m.jpg" alt="上班族養生救星">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/category/tertiaryCategory/37A57C0135AA3FDDE0536E0212ACD6ED">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/doyubo.jpg" alt="豆油伯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/searchResult/%E5%84%AA%E6%BA%90%E5%A5%BD%E9%A3%9F">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/yoyuan.jpg" alt="優源好食">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/FE26CE0DFB5E6AA9E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/0420E696CBA46AB7E06400144FF9CEC6_m.jpg" alt="紫米">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DB58052A7E800437E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F6092A72D4932D22E05400144FF82309_m.jpg" alt="沛優絲">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/024F9F55CC5B3FF0E06400144FF82309_m.jpg" alt="上班族養生救星">
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
                    <div class="w-100 text-center"><img src="images/act/2023/11/sp/images/wave1/section-title-c.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
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
              
              <!-- swpE -->
              <div class="col-12 d-flex flex-column justify-content-center align-items-center swp-banner-section p-1 mb-4 mb-xl-5">
                <div class="swiper-custom">
                  <div id="swpE" class="swiper-container">
                    <div class="swiper-wrapper">
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DE2BB33E6F851408E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F6092A72D4952D22E05400144FF82309_m.jpg" alt="Lumi">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/7E85612F6BD93B75E0536E0212AC7965">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/E45A89DA4B820BE3E05400144FF9CEC6_m.jpg" alt="Relove">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C5DF6D11792B00E9E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F6092A72D4942D22E05400144FF82309_m.jpg" alt="BioLead">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB3CB363D6034DCE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/FA32E542BF2D0D16E05400144FF9CEC6_m.jpg" alt="森繆斯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F270D2F0AC2748A1E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F5E2B0B21DB80AA0E05400144FF9CEC6_m.jpg" alt="泡菜">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3122572023">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F73B9C8B5B2E1F61E05400144FF9CEC6_m.jpg" alt="養元堂">
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
                    <div class="w-100 text-center"><img src="images/act/2023/11/sp/images/wave1/section-title-d.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
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

              <!-- E -->
              <div id="sectionE" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-e position-relative p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="w-100 text-center"><img src="images/act/2023/11/sp/images/wave1/section-title-e.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
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
              
              
              
              
              
              <!-- 銀行優惠 -->
              <div class="swp-banner-section col-12 p-2">
                <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202310_creditcard.html">
                      <img src="images/act/2023/11/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202310_creditcard.html#card-ctbc" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-ctbc.png" class="card-img-top" alt="中信">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<br>刷卡金<span class="fw-bold text-danger">1000</span>元</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202310_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202310_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">3500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202310_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期滿額<br>最高回饋<span class="fw-bold text-danger">1000</span>刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <!-- <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202310_creditcard.html#card-citi" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-citi.png" class="card-img-top" alt="花旗">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<span class="fw-bold text-danger">600元</span><br>統一超商商品卡</p>
                            </div>
                          </div>
                        </a>
                      </div> -->
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202310_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>FUN假享高回饋</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202310_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">3000</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202310_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br>滿額送刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202310_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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
      <div class="people-sticky">
        <div class="people d-none d-lg-block">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div class="primary-section d-flex flex-column align-items-center animated fadeIn px-2 px-lg-0">

        <!-- <div v-if="blackfriday" class="blackfriday-section d-flex justify-content-center mb-5 w-100 position-relative">
          <div class="blackfriday-btn-1 p-1 wow fadeInUp">
            <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-F">
              <picture>
                <source srcset="images/act/2023/11/sp/images/wave2/blackfriday-btn-1.jpg" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/blackfriday-btn-1.jpg" alt="黑五超閃購">
              </picture>
            </a>
          </div>
        </div> -->

        <div class="primary-section-group d-flex flex-column justify-content-center align-items-center mb-3 mb-xl-5">
          
            <div class="primary-date-1 p-2 mb-2 p-lg-3 mb-lg-3">
              <picture>
                <source srcset="images/act/2023/11/sp/images/wave2/primary-date-1.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/mobile/primary-date-1.png" alt="1020-1126">
              </picture>
            </div>
            <!-- upper part -->
            <div class="d-flex upper-part justify-content-center w-100 position-relative px-2 px-lg-3 mb-lg-3">

              <div class="d-flex flex-column p-lg-3">
                <div class="primary-4 d-none d-lg-block mb-lg-2">
                  <picture>
                    <source srcset="images/act/2023/11/sp/images/wave2/primary-btn-4.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/primary-btn-4.png" alt="滿額送">
                  </picture>
                </div>
                <div class="d-flex flex-column flex-lg-row p-1 p-lg-0">
                  <div class="primary-btn-1 p-1 p-lg-2">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-C">
                      <picture>
                        <source srcset="images/act/2023/11/sp/images/wave2/primary-btn-1.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/mobile/primary-btn-1.png" alt="滿1111回饋11%">
                      </picture>
                    </a>
                  </div>
                  <div class="primary-btn-2 p-1 p-lg-2">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-D">
                      <picture>
                        <source srcset="images/act/2023/11/sp/images/wave2/primary-btn-2.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/mobile/primary-btn-2.png" alt="滿30000送耶誕麵包">
                      </picture>
                    </a>
                  </div>
                </div>
              </div>

              <div class="primary-btn-3 p-1 ps-2 pe-2 p-lg-3 ps-lg-3 pe-lg-3">
                <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-I">
                  <picture>
                    <source srcset="images/act/2023/11/sp/images/wave2/primary-btn-3.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/mobile/primary-btn-3.png" alt="新友送冰淇淋">
                  </picture>
                </a>
              </div>
            </div>

            <div class="primary-date-2-m d-flex d-lg-none flex-fill justify-content-center align-items-center p-2 p-lg-0">
              <div class="text-center">
                <picture>
                  <source srcset="images/act/2023/11/sp/images/wave2/primary-date-2.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/mobile/primary-date-2-m.png" alt="1101-1112">
                </picture>
              </div>
            </div>

            <!-- lower part -->
            <div class="d-flex lower-part justify-content-between w-100 position-relative px-lg-3">
              <div id="swpPrimaryLeftWrapper" class="position-relative overflow-hidden flex-shrink-0 p-2 p-lg-3">
                <div id="swpPrimaryLeft" class="swiper-container position-relative">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-A">
                        <picture>
                          <source srcset="images/act/2023/11/sp/images/wave2/primary-btn-5-a.png" media="(min-width: 992px)">
                          <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/mobile/primary-btn-5-a.png" alt="註冊送好禮">
                        </picture>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-B">
                        <picture>
                          <source srcset="images/act/2023/11/sp/images/wave2/primary-btn-5-b.png" media="(min-width: 992px)">
                          <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/mobile/primary-btn-5-b.png" alt="新客首購禮">
                        </picture>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="d-none d-xl-block swiper-pagination position-absolute" style="transform: translateY(48px);"></div>
              </div>

              <!-- <div class="primary-8 d-none d-lg-flex align-items-center ps-lg-4">  
                <picture>
                  <source srcset="images/act/2023/11/sp/images/wave2/primary-btn-8.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/primary-btn-8.png" alt="雙11加碼">
                </picture>
              </div> -->

              <div v-if="blackfriday" class="blackfriday-section d-flex justify-content-center w-100 position-relative">
                <div class="blackfriday-btn-1 px-2 ps-lg-4 pe-lg-3 py-lg-3 align-self-center wow fadeInUp">
                  <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-F">
                    <picture>
                      <source srcset="images/act/2023/11/sp/images/wave2/blackfriday-btn-1.jpg" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/blackfriday-btn-1.jpg" alt="黑五超閃購">
                    </picture>
                  </a>
                </div>
              </div>

              

              
              <!-- <div class="d-flex flex-column p-2 p-lg-3">
                <div class="primary-date-2 d-none d-lg-flex flex-fill justify-content-center align-items-center mb-lg-2">
                  <div class="text-center">
                    <picture>
                      <source srcset="images/act/2023/11/sp/images/wave2/primary-date-2.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/mobile/primary-date-2.png" alt="1101-1112">
                    </picture>
                  </div>
                </div>
                <div class="d-flex">
                  <div class="primary-btn-6">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-E">
                      <picture>
                        <source srcset="images/act/2023/11/sp/images/wave2/primary-btn-6.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/mobile/primary-btn-6.png" alt="滿額抽">
                      </picture>
                    </a>
                  </div>
                  <div class="primary-btn-7">
                    <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-H">
                      <picture>
                        <source srcset="images/act/2023/11/sp/images/wave2/primary-btn-7.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/mobile/primary-btn-7.png" alt="11點搶銀幣">
                      </picture>
                    </a>
                  </div>
                </div>
                
              </div> -->


            </div>

        </div>

        

        

      </div>


      <div v-if="dailysale" class="dailysale-section d-flex flex-column mx-auto position-relative mb-4 mb-lg-5" style="z-index: 2;">
        <!-- <img src="images/act/2023/11/sp/images/wave2/bg-dailysale.png" class="img-fluid us-none"> -->
        <picture>
          <source srcset="images/act/2023/11/sp/images/wave2/bg-dailysale.png" media="(min-width: 992px)">
          <img class="img-fluid pe-none us-none" src="images/act/2023/11/sp/images/wave2/mobile/bg-dailysale.png" alt="每日限搶">
        </picture>
        <div class="dailysale-click position-absolute top-0 start-0 w-100 d-flex justify-content-center">
          <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/EC10C7D937ED04E7E05400144FF82309" title="前往每日限搶專區">
            <picture>
              <source srcset="images/act/2023/11/sp/images/wave2/click-dailysale.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/11/sp/images/wave2/mobile/click-dailysale.png" alt="每日限搶專區">
            </picture>
          </a>
        </div>
        <div class="position-absolute end-0 bottom-0 start-0" style="top: 15%;">
          <ul class="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-1106-tab" data-bs-toggle="pill" data-bs-target="#pills-1106" type="button" role="tab">11/6</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-1107-tab" data-bs-toggle="pill" data-bs-target="#pills-1107" type="button" role="tab">11/7</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-1108-tab" data-bs-toggle="pill" data-bs-target="#pills-1108" type="button" role="tab">11/8</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-1109-tab" data-bs-toggle="pill" data-bs-target="#pills-1109" type="button" role="tab">11/9</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-1110-tab" data-bs-toggle="pill" data-bs-target="#pills-1110" type="button" role="tab">11/10</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-1111-tab" data-bs-toggle="pill" data-bs-target="#pills-1111" type="button" role="tab">11/11</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-1112-tab" data-bs-toggle="pill" data-bs-target="#pills-1112" type="button" role="tab">11/12</button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane show active" id="pills-1106" role="tabpanel" tabindex="0">
              <div id="swp-1106" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS06'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
            <div class="tab-pane " id="pills-1107" role="tabpanel" tabindex="0">
              <div id="swp-1107" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS07'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
            <div class="tab-pane " id="pills-1108" role="tabpanel" tabindex="0">
              <div id="swp-1108" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS08'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
            <div class="tab-pane " id="pills-1109" role="tabpanel" tabindex="0">
              <div id="swp-1109" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS09'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
            <div class="tab-pane " id="pills-1110" role="tabpanel" tabindex="0">
              <div id="swp-1110" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS10'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
            <div class="tab-pane " id="pills-1111" role="tabpanel" tabindex="0">
              <div id="swp-1111" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS11'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
            <div class="tab-pane " id="pills-1112" role="tabpanel" tabindex="0">
              <div id="swp-1112" class="swiper-container">
                <div class="swiper-wrapper">
                  <div v-if="item.type === 'DS12'" v-for="item in items" class="swiper-slide p-1 p-xl-1 text-start d-flex flex-column item">
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
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><span>{{item.name}}</span></div>
                        <div v-if="item.before" class="item-price text-center mb-1"><span class="fw-normal fs-6">尚未開賣</span></div>
                        <div v-else class="item-price text-center mb-1"><span class="fw-normal fs-6">搶購結束</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dailysale-prev d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-prev.png" class="img-fluid us-none"></div>
              <div class="dailysale-next d-none d-lg-block"><img src="images/act/2023/11/sp/images/wave2/btn-dailysale-next.png" class="img-fluid us-none"></div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="tvoneday" id="tvOneDay">
        <div class="tvoneday-section d-flex flex-column mx-auto mb-3 mb-lg-5" style="max-width: 1200px; z-index: 2;">
          <div class="tvoneday-header">
            <picture>
              <source srcset="images/act/2023/11/sp/images/wave2/tvoneday-header.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/mobile/tvoneday-header.png" alt="超級強強滾">
            </picture>
            <div class="tvoneday-timer">
              <div class="countdown text-center"></div>
            </div>
          </div>
          <div class="tvoneday-body p-1 px-lg-3 py-lg-4">
            <div class="row row-cols-2 row-cols-md-3 px-3 px-lg-0 g-0 align-self-stretch">
              <div class="tvoneday-desc d-flex align-items-center">
                <picture>
                  <source srcset="images/act/2023/11/sp/images/wave2/tvoneday-desc.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/tvoneday-desc.png" alt="買就回饋10%銀幣">
                </picture>
              </div>
              <div v-if="item.type === 'S1'" v-for="item in items" class="wow fadeInUp col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay" :data-item-id="item.id">
                <div class="item-inner d-flex flex-column h-100 p-2">
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
          <div class="tvoneday-footer">
            <picture>
              <source srcset="images/act/2023/11/sp/images/wave2/tvoneday-footer.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/mobile/tvoneday-footer.png" alt="tvoneday-footer">
            </picture>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-center mb-3 mb-xl-5 w-100 position-relative">
        <div class="secondary-btn-1 p-1 wow fadeInUp">
          <a class="d-block" data-bs-toggle="modal" href="#eventModal-Wave1-G">
            <picture>
              <source srcset="images/act/2023/11/sp/images/wave2/secondary-btn-1.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/11/sp/images/wave2/mobile/secondary-btn-1.png" alt="加碼抽蛋捲冰淇淋">
            </picture>
          </a>
        </div>
      </div>

      
      <!-- 公格navBar -->
      <div id="publicGrid" class="wave2">
        
        <div id="navBar" class="btn-nav-group wave2 d-flex justify-content-center pb-4">
          <div class="navbar-inner d-flex justify-content-between align-items-center position-relative">
            <a id="Btn1" data-wow-delay="0s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionA">
              <img src="images/act/2023/11/sp/images/wave2/nav-1.png" class="img-fluid">
            </a>
            <a id="Btn2" data-wow-delay="0.2s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionB">
              <img src="images/act/2023/11/sp/images/wave2/nav-2.png" class="img-fluid">
            </a>
            <a id="Btn3" data-wow-delay="0.4s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionC">
              <img src="images/act/2023/11/sp/images/wave2/nav-3.png" class="img-fluid">
            </a>
            <a id="Btn4" data-wow-delay="0.6s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionD">
              <img src="images/act/2023/11/sp/images/wave2/nav-4.png" class="img-fluid">
            </a>
            <a id="Btn5" data-wow-delay="0.8s" class="d-block wow fadeInUp btn btn-nav border-0 rounded-0 p-1 p-lg-3" href="#sectionE">
              <img src="images/act/2023/11/sp/images/wave2/nav-5.png" class="img-fluid">
            </a>
          </div>
        </div>
        <!-- 公格 -->
        <div class="w-100 position-relative">


          <div class="container-fluid px-0 g-0 position-relative" style="z-index: 2;">
            <div class="row g-0 justify-content-center">
              <!-- A -->
              <div id="sectionA" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-a position-relative p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="w-100 text-center" style="z-index: 5;"><img src="images/act/2023/11/sp/images/wave2/section-title-a.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch px-3 py-2 py-lg-3">
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
                    <div class="w-100 text-center">
                      <picture>
                        <source srcset="images/act/2023/11/sp/images/wave2/section-footer.png" media="(min-width: 992px)">
                        <img class="img-fluid d-block pe-none us-none" src="images/act/2023/11/sp/images/wave2/mobile/section-footer.png" alt="section-footer">
                      </picture>
                    </div>
                  </div>  
                </div>
              </div>
              <!-- B -->
              <div id="sectionB" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-b position-relative p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="w-100 text-center" style="z-index: 5;"><img src="images/act/2023/11/sp/images/wave2/section-title-b.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch px-3 py-2 py-lg-3">
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
                    <div class="w-100 text-center">
                      <picture>
                        <source srcset="images/act/2023/11/sp/images/wave2/section-footer.png" media="(min-width: 992px)">
                        <img class="img-fluid d-block pe-none us-none" src="images/act/2023/11/sp/images/wave2/mobile/section-footer.png" alt="section-footer">
                      </picture>
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
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/doyubo.jpg" alt="豆油伯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/searchResult/%E5%84%AA%E6%BA%90%E5%A5%BD%E9%A3%9F">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/yoyuan.jpg" alt="優源好食">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/FE26CE0DFB5E6AA9E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/0420E696CBA46AB7E06400144FF9CEC6_m.jpg" alt="紫米">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DB58052A7E800437E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F6092A72D4932D22E05400144FF82309_m.jpg" alt="沛優絲">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/024F9F55CC5B3FF0E06400144FF82309_m.jpg" alt="上班族養生救星">
                        </a>
                      </div>

                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/category/tertiaryCategory/37A57C0135AA3FDDE0536E0212ACD6ED">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/doyubo.jpg" alt="豆油伯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="http://www.vivatv.com.tw/searchResult/%E5%84%AA%E6%BA%90%E5%A5%BD%E9%A3%9F">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/yoyuan.jpg" alt="優源好食">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/FE26CE0DFB5E6AA9E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/0420E696CBA46AB7E06400144FF9CEC6_m.jpg" alt="紫米">
                        </a>
                      </div>
                      
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DB58052A7E800437E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F6092A72D4932D22E05400144FF82309_m.jpg" alt="沛優絲">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/024F9F55CC5B3FF0E06400144FF82309_m.jpg" alt="上班族養生救星">
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
                    <div class="w-100 text-center" style="z-index: 5;"><img src="images/act/2023/11/sp/images/wave2/section-title-c.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch px-3 py-2 py-lg-3">
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
                    <div class="w-100 text-center">
                      <picture>
                        <source srcset="images/act/2023/11/sp/images/wave2/section-footer.png" media="(min-width: 992px)">
                        <img class="img-fluid d-block pe-none us-none" src="images/act/2023/11/sp/images/wave2/mobile/section-footer.png" alt="section-footer">
                      </picture>
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
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F6092A72D4952D22E05400144FF82309_m.jpg" alt="Lumi">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/7E85612F6BD93B75E0536E0212AC7965">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/E45A89DA4B820BE3E05400144FF9CEC6_m.jpg" alt="Relove">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C5DF6D11792B00E9E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F6092A72D4942D22E05400144FF82309_m.jpg" alt="BioLead">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/FAB3CB363D6034DCE05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/FA32E542BF2D0D16E05400144FF9CEC6_m.jpg" alt="森繆斯">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/F270D2F0AC2748A1E05400144FF9CEC6">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F5E2B0B21DB80AA0E05400144FF9CEC6_m.jpg" alt="泡菜">
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/goods/3122572023">
                          <img class="img-fluid us-none" src="images/act/2023/11/sp/images/bn/F73B9C8B5B2E1F61E05400144FF9CEC6_m.jpg" alt="養元堂">
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
                    <div class="w-100 text-center" style="z-index: 5;"><img src="images/act/2023/11/sp/images/wave2/section-title-d.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch px-3 py-2 py-lg-3">
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
                    <div class="w-100 text-center">
                      <picture>
                        <source srcset="images/act/2023/11/sp/images/wave2/section-footer.png" media="(min-width: 992px)">
                        <img class="img-fluid d-block pe-none us-none" src="images/act/2023/11/sp/images/wave2/mobile/section-footer.png" alt="section-footer">
                      </picture>
                    </div>
                  </div>  
                </div>
              </div>

              <!-- E -->
              <div id="sectionE" class="col-12 mb-4 my-xl-5">
                <div class="section-wrapper section-e position-relative p-xl-4">
                  <div class="section-observer"></div>
                  <div class="section-row d-flex flex-column">
                    <div class="w-100 text-center" style="z-index: 5;"><img src="images/act/2023/11/sp/images/wave2/section-title-e.png" class="img-fluid us-none"></div>
                    <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                      <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch px-3 py-2 py-lg-3">
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
                    <div class="w-100 text-center">
                      <picture>
                        <source srcset="images/act/2023/11/sp/images/wave2/section-footer.png" media="(min-width: 992px)">
                        <img class="img-fluid d-block pe-none us-none" src="images/act/2023/11/sp/images/wave2/mobile/section-footer.png" alt="section-footer">
                      </picture>
                    </div>
                  </div>  
                </div>
              </div>
              
              
              
              
              
              <!-- 銀行優惠 -->
              <div class="swp-banner-section col-12 p-2">
                <div class="d-flex flex-column rounded-3 overflow-hidden shadow">
                  <div>
                    <a href="https://www.vivatv.com.tw/html/202311_creditcard.html">
                      <img src="images/act/2023/11/sp/images/header-bank.jpg" class="img-fluid us-none">
                    </a>
                  </div>
                  <div id="swpBank" class="swiper-container position-relative overflow-hidden">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202311_creditcard.html#card-ctbc" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-ctbc.png" class="card-img-top" alt="中信">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<br>刷卡金<span class="fw-bold text-danger">1000</span>元</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202311_creditcard.html#card-dbs" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-dbs.png" class="card-img-top" alt="星展">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">最高回饋<span class="fw-bold text-danger">2000元</span><br>ViVa美好禮券</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202311_creditcard.html#card-sinopac" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-sinopac.png" class="card-img-top" alt="永豐">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">ViVa購物刷永豐<br>最高送<span class="fw-bold text-danger">3500</span></p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202311_creditcard.html#card-feib" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-feib.png" class="card-img-top" alt="遠東">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期滿額<br>最高回饋<span class="fw-bold text-danger">1000</span>刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <!-- <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202310_creditcard.html#card-citi" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-citi.png" class="card-img-top" alt="花旗">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">分期最高享<span class="fw-bold text-danger">600元</span><br>統一超商商品卡</p>
                            </div>
                          </div>
                        </a>
                      </div> -->
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202311_creditcard.html#card-rakuten" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-rakuten.png" class="card-img-top" alt="樂天">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">【分期０利率】<br>FUN假享高回饋</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202311_creditcard.html#card-scsb" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-scsb.png" class="card-img-top" alt="上海">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷卡分期最高回饋<br><span class="fw-bold text-danger">3000</span>元刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202311_creditcard.html#card-ubot" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-ubot.png" class="card-img-top" alt="聯邦">
                            <div class="card-body border-top p-2">
                              <p class="card-text text-center text-dark">刷聯邦卡<br>滿額送刷卡金</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="swiper-slide">
                        <a href="https://www.vivatv.com.tw/html/202311_creditcard.html#card-first" class="d-block">
                          <div class="card h-100 border-end rounded-0">
                            <img src="images/act/2023/11/sp/images/bank/logo-first.png" class="card-img-top" alt="第一">
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
      imgError: 'this.src="/html/images/act/2023/11/sp/images/img-error.png"',
      items: [],
      wave1: false,
      wave2: false,
      wave3: false,
      blackfriday: false,
      dailysale: false,
      tvoneday: false,
      start_1101: false,
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = '/html/images/act/2023/11/sp/json/data.json';
      var path2 = '/html/images/act/2023/11/sp/json/data2.json';
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
      

      if ( moment(timeNow).isBetween('2023-10-11 00:00:00', '2023-11-05 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
      }
      if ( moment(timeNow).isBetween('2023-11-06 00:00:00', '2023-11-26 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
      }
      if ( moment(timeNow).isBetween('2023-11-01 00:00:00', '2023-11-26 23:59:59', 'second', '[]') ) {
        this.start_1101 = true;
      }
      if ( moment(timeNow).isBetween('2023-11-18 00:00:00', '2023-11-26 23:59:59', 'second', '[]') ) {
        this.blackfriday = true;
      }
      
      if ( moment(timeNow).isBetween('2023-11-01 00:00:00', '2023-11-12 23:59:59', 'second', '[]') ) {
        this.dailysale = true;
      }
      if ( moment(timeNow).isBetween('2023-11-06 00:00:00', '2023-11-12 23:59:59', 'second', '[]') ) {
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
        
      }



      
      

      if ( moment(timeNow).isSameOrBefore('2023-11-05 23:59:59') ) {
        path = path1;
      } else {
        path = path2;
      }



      console.log('path:'+path);




      // 倒數計時
      var eventTime = moment('2023-11-11 10:12:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');

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
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2023/11/sp/images/product/'+ this.items[i].id +'/1.jpg');
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
        
        e.target.src = "/html/images/act/2023/11/sp/images/product/"+ t +".jpg";

      }

      
    },
    altImage: function(e) {
      

      var t = e.target.alt;
      e.target.src = "/html/images/act/2023/11/sp/images/product/"+ t +".jpg";
      

      if (e.target.imgchecked) {
        e.target.src = "/html/images/act/2023/11/sp/images/img-error.png";
      } else {
        e.target.src = "/html/images/act/2023/11/sp/images/product/"+ t +".jpg";
      }

      if (e.target.naturalWidth == 1) {
        e.target.src = "/html/images/act/2023/11/sp/images/product/"+ t +".jpg";

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

