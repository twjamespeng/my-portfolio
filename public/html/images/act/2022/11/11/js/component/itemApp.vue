<template>
  
  <div>
    <!-- one day -->
    <div v-if="oneday_1021" id="oneDayWrapper" class="position-relative">
      <div class="container-xl container-oneday p-0">
        <div class="row g-0 justify-content-center position-relative" style="z-index: 2;">
          <div class="col-12">
            <div class="section-header text-center mx-auto" style="max-width: 800px;">
              <img src="images/act/2022/11/11/images/header-countdown.png" class="img-fluid us-none" alt="雙11購了沒">
            </div>
            <div class="section-oneday p-2 mb-5">
              
              <div class="section-body" style="">
                <div class="d-flex justify-content-center countdown-timer mb-3 mb-xxl-5 pe-none us-none">
                  <div id="countDownTimer" class="px-4 fs-4">
                    <span>最後倒數</span>
                    <span class="countdown fw-normal"></span>
                  </div>
                </div>
                <div id="oneDaySection" class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-0">
                  <div 
                    v-if="item.type === 'S'" 
                    v-for="item in items" 
                    
                    :class="oneday_1023 ? 'flip' : ''"
                    class="col p-1 p-md-2 text-start d-flex flex-column item card-container mb-2 mb-xl-3" onmouseenter="flipMe(this)">
                    <div class="card-observer"></div>
                    <!-- 卡片 -->
                    <div class="flip-card">
                      <!-- 卡面 -->
                      <div class="flip-card-front" :id="['num_' + item.index]">
                        
                      </div>
                      <!-- 卡背 -->
                      <div class="flip-card-back">

                        <!-- 已開賣 -->
                        <div v-if="item.available" class="d-flex flex-column h-100">
                          <a class="d-flex" :href="item.url" :name="[item.brand + item.name]">
                            <div class="item-inner d-flex flex-column flex-grow-1 p-2 p-xxl-3">
                              <div class="item-body mb-2 mb-xl-3"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid us-none" :alt="[item.brand + item.name]" :id="item.id"></div>
                              <div class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                                <div class="item-brand text-center">{{item.brand}}</div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center">{{item.name}}</div>
                                <div class="item-price text-center"><span class="price-type me-1">限時</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <!-- 尚未開賣 -->
                        <div v-else-if="item.before" class="d-flex flex-column h-100">
                          
                            <div class="item-inner d-flex flex-column flex-grow-1 p-2 p-xxl-3">
                              <div class="item-body mb-2 mb-xl-3"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid us-none" :alt="[item.brand + item.name]" :id="item.id"></div>
                              <div class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                                <div class="item-brand text-center">{{item.brand}}</div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center">{{item.name}}</div>
                                <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                              </div>
                            </div>
                          
                        </div>
                        <!-- 搶購結束 -->
                        <div v-else class="d-flex flex-column h-100">
                          
                            <div class="item-inner d-flex flex-column flex-grow-1 p-2 p-xxl-3">
                              <div class="item-body mb-2 mb-xl-3"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid us-none" :alt="[item.brand + item.name]" :id="item.id"></div>
                              <div class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                                <div class="item-brand text-center">{{item.brand}}</div>
                                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center">{{item.name}}</div>
                                <div class="item-over text-center">搶購結束</div>
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


    <!-- goldrush -->
    <div v-if="start_1103" class="w-100 mx-auto position-relative" style="max-width: 800px; z-index: 3;">
      <img src="images/act/2022/11/11/images/header-goldrush.png" class="img-fluid us-none" alt="雙11淘金戰">
    </div>
    <div v-if="start_1103" class="d-flex justify-content-center align-items-center p-2 p-xl-3">
      <div class="d-flex flex-column flex-md-row justify-content-center align-items-center border border-white px-3 py-1 text-white fs-6 fs-xl-5" style="background-color: rgba(0, 0, 0, 0.25); box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5)">
        <span>每日推出不同限時限量、超低價爆殺商品，</span>
        <span>僅此一天，錯過不再！</span>  
      </div>
      
    </div>
    <!-- nav -->
    <div v-if="start_1103" id="goldRushNav" class="w-100 mx-auto sticky-top" style="z-index: 4;">
      <ul class="nav nav-pills justify-content-center flex-nowrap mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link p-0 rounded-0" id="pills-1106-tab" data-bs-toggle="pill" data-bs-target="#pills-1106" type="button" role="tab" aria-controls="pills-1106" aria-selected="true">
            <picture>
              <source srcset="images/act/2022/11/11/images/nav-placeholder.png" media="(min-width: 992px)">
              <img class="img-fluid" src="images/act/2022/11/11/images/m/nav-placeholder.png" alt="">
            </picture>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button :class="start_1107 ? '' : ''" class="nav-link p-0 rounded-0" id="pills-1107-tab" data-bs-toggle="pill" data-bs-target="#pills-1107" type="button" role="tab" aria-controls="pills-1107" aria-selected="true">
            <picture>
              <source srcset="images/act/2022/11/11/images/nav-placeholder.png" media="(min-width: 992px)">
              <img class="img-fluid" src="images/act/2022/11/11/images/m/nav-placeholder.png" alt="">
            </picture>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button :class="start_1108 ? '' : ''" class="nav-link p-0 rounded-0" id="pills-1108-tab" data-bs-toggle="pill" data-bs-target="#pills-1108" type="button" role="tab" aria-controls="pills-1108" aria-selected="true">
            <picture>
              <source srcset="images/act/2022/11/11/images/nav-placeholder.png" media="(min-width: 992px)">
              <img class="img-fluid" src="images/act/2022/11/11/images/m/nav-placeholder.png" alt="">
            </picture>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button :class="start_1109 ? '' : ''" class="nav-link p-0 rounded-0" id="pills-1109-tab" data-bs-toggle="pill" data-bs-target="#pills-1109" type="button" role="tab" aria-controls="pills-1109" aria-selected="true">
            <picture>
              <source srcset="images/act/2022/11/11/images/nav-placeholder.png" media="(min-width: 992px)">
              <img class="img-fluid" src="images/act/2022/11/11/images/m/nav-placeholder.png" alt="">
            </picture>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button :class="start_1110 ? '' : ''" class="nav-link p-0 rounded-0" id="pills-1110-tab" data-bs-toggle="pill" data-bs-target="#pills-1110" type="button" role="tab" aria-controls="pills-1110" aria-selected="true">
            <picture>
              <source srcset="images/act/2022/11/11/images/nav-placeholder.png" media="(min-width: 992px)">
              <img class="img-fluid" src="images/act/2022/11/11/images/m/nav-placeholder.png" alt="">
            </picture>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button :class="start_1111 ? '' : ''" class="nav-link p-0 rounded-0" id="pills-1111-tab" data-bs-toggle="pill" data-bs-target="#pills-1111" type="button" role="tab" aria-controls="pills-1111" aria-selected="true">
            <picture>
              <source srcset="images/act/2022/11/11/images/nav-placeholder.png" media="(min-width: 992px)">
              <img class="img-fluid" src="images/act/2022/11/11/images/m/nav-placeholder.png" alt="">
            </picture>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button :class="start_1112 ? '' : ''" class="nav-link p-0 rounded-0" id="pills-1112-tab" data-bs-toggle="pill" data-bs-target="#pills-1112" type="button" role="tab" aria-controls="pills-1112" aria-selected="true">
            <picture>
              <source srcset="images/act/2022/11/11/images/nav-placeholder.png" media="(min-width: 992px)">
              <img class="img-fluid" src="images/act/2022/11/11/images/m/nav-placeholder.png" alt="">
            </picture>
          </button>
        </li>
      </ul>
    </div>
    <div v-if="start_1103" id="goldRush" class="w-100 position-relative" style="overflow-x: hidden;">
      <div class="container-fluid container-goldrush p-0 position-relative" style="z-index: 2;">
        <div class="row g-0 justify-content-center">
          <div class="col-12" style="max-width: 1500px;">
            <div class="tab-content">
              <!-- 1106 -->
              <div class="tab-pane fade" id="pills-1106" role="tabpanel" aria-labelledby="pills-1106-tab" tabindex="0">
                <div id="sectionN06" class="section-wrapper section-goldrush position-relative">
                  <div class="section-inner d-flex flex-column p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <div class="row row-cols-3 row-cols-md-3 row-cols-lg-6 g-0 align-self-stretch justify-content-start">
                        <div v-if="item.type === 'N06'" v-for="item in items" class="col text-start d-flex flex-column item mb-3 mb-xxl-4">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-1 p-xl-3">
                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>

                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                              <a class="btn btn-outline-light rounded-pill mt-1 pe-none">驚喜價!?</a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <a :href="item.url" class="btn btn-outline-warning rounded-pill mt-1">搶購結束</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 1107 -->
              <div class="tab-pane fade" id="pills-1107" role="tabpanel" aria-labelledby="pills-1107-tab" tabindex="0">
                <div id="sectionN07" class="section-wrapper section-goldrush position-relative">
                  <div class="section-inner d-flex flex-column p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <div class="row row-cols-3 row-cols-md-3 row-cols-lg-6 g-0 align-self-stretch justify-content-start">
                        <div v-if="item.type === 'N07'" v-for="item in items" class="col text-start d-flex flex-column item mb-3 mb-xxl-4">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-1 p-xl-3">
                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>

                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                              <a class="btn btn-outline-light rounded-pill mt-1 pe-none">驚喜價!?</a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <a :href="item.url" class="btn btn-outline-warning rounded-pill mt-1">搶購結束</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 1108 -->
              <div class="tab-pane fade" id="pills-1108" role="tabpanel" aria-labelledby="pills-1108-tab" tabindex="0">
                <div id="sectionN08" class="section-wrapper section-goldrush position-relative">
                  <div class="section-inner d-flex flex-column p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <div class="row row-cols-3 row-cols-md-3 row-cols-lg-6 g-0 align-self-stretch justify-content-start">
                        <div v-if="item.type === 'N08'" v-for="item in items" class="col text-start d-flex flex-column item mb-3 mb-xxl-4">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-1 p-xl-3">
                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>

                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                              <a class="btn btn-outline-light rounded-pill mt-1 pe-none">驚喜價!?</a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <a :href="item.url" class="btn btn-outline-warning rounded-pill mt-1">搶購結束</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 1109 -->
              <div class="tab-pane fade" id="pills-1109" role="tabpanel" aria-labelledby="pills-1109-tab" tabindex="0">
                <div id="sectionN09" class="section-wrapper section-goldrush position-relative">
                  <div class="section-inner d-flex flex-column p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <div class="row row-cols-3 row-cols-md-3 row-cols-lg-6 g-0 align-self-stretch justify-content-start">
                        <div v-if="item.type === 'N09'" v-for="item in items" class="col text-start d-flex flex-column item mb-3 mb-xxl-4">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-1 p-xl-3">
                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>

                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                              <a class="btn btn-outline-light rounded-pill mt-1 pe-none">驚喜價!?</a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <a :href="item.url" class="btn btn-outline-warning rounded-pill mt-1">搶購結束</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 1110 -->
              <div class="tab-pane fade" id="pills-1110" role="tabpanel" aria-labelledby="pills-1110-tab" tabindex="0">
                <div id="sectionN10" class="section-wrapper section-goldrush position-relative">
                  <div class="section-inner d-flex flex-column p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <div class="row row-cols-3 row-cols-md-3 row-cols-lg-6 g-0 align-self-stretch justify-content-start">
                        <div v-if="item.type === 'N10'" v-for="item in items" class="col text-start d-flex flex-column item mb-3 mb-xxl-4">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-1 p-xl-3">
                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>

                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                              <a class="btn btn-outline-light rounded-pill mt-1 pe-none">驚喜價!?</a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <a :href="item.url" class="btn btn-outline-warning rounded-pill mt-1">搶購結束</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 1111 -->
              <div class="tab-pane fade" id="pills-1111" role="tabpanel" aria-labelledby="pills-1111-tab" tabindex="0">
                <div id="sectionN11" class="section-wrapper section-goldrush position-relative">
                  <div class="section-inner d-flex flex-column p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <div class="row row-cols-3 row-cols-md-3 row-cols-lg-6 g-0 align-self-stretch justify-content-start">
                        <div v-if="item.type === 'N11'" v-for="item in items" class="col text-start d-flex flex-column item mb-3 mb-xxl-4">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-1 p-xl-3">
                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>

                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                              <a class="btn btn-outline-light rounded-pill mt-1 pe-none">驚喜價!?</a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <a :href="item.url" class="btn btn-outline-warning rounded-pill mt-1">搶購結束</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 1112 -->
              <div class="tab-pane fade" id="pills-1112" role="tabpanel" aria-labelledby="pills-1112-tab" tabindex="0">
                <div id="sectionN12" class="section-wrapper section-goldrush position-relative">
                  <div class="section-inner d-flex flex-column p-xl-4">
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <div class="row row-cols-3 row-cols-md-3 row-cols-lg-6 g-0 align-self-stretch justify-content-start">
                        <div v-if="item.type === 'N12'" v-for="item in items" class="col text-start d-flex flex-column item mb-3 mb-xxl-4">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-1 p-xl-3">
                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-body mb-0 mb-xl-2 p-1 rounded-circle">
                              <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" @load="isLoad" class="img-fluid w-100 rounded-circle" :alt="item.id" :title="item.name" loading="lazy" width="200" height="200"></a>
                            </div>

                            <!-- 已開賣 -->
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                            <!-- 尚未開賣 -->
                            <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                              <a class="btn btn-outline-light rounded-pill mt-1 pe-none">驚喜價!?</a>
                            </div>
                            <!-- 已結束 -->
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                              <a :href="item.url" class="btn btn-outline-warning rounded-pill mt-1">搶購結束</a>
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

    <div v-if="start_1121" class="parallax mb-3 mb-xl-5">
      <div class="parallax-rect">
        <div class="parallax-bg" style="background-image: url(images/act/2022/11/11/images/bg-blackfriday.jpg);"></div>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center" style="height: 100%;">

        <!-- blackfriday -->
        <div v-if="start_1121" class="w-100 mx-auto position-relative" style="max-width: 800px; z-index: 3;">
          <img src="images/act/2022/11/11/images/header-blackfriday.png" class="img-fluid us-none" alt="黑五">
          <img src="images/act/2022/11/11/images/header-blackfriday-glow.png" class="img-fluid us-none position-absolute top-0 start-0" alt="黑五glow" style="mix-blend-mode: screen;">
        </div>
        <div v-if="start_1121" class="d-flex justify-content-center align-items-center position-relative">
          <div class="d-flex flex-column flex-md-row justify-content-center align-items-center rounded-pill px-3 py-1 fs-6 fs-xl-5" style="color: rgb(242, 208, 127);">
            <span>每日推出不同限時限量、超低價爆殺商品，</span>
            <span>僅此一天，錯過不再！</span>  
          </div>
        </div>
        <!-- nav -->
        <div v-if="start_1121" id="blackFridayNav" class="w-100 mx-auto sticky-top" style="z-index: 4;">
          <ul class="nav nav-pills justify-content-center flex-nowrap px-5" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link p-0 rounded-0" id="pills-1123-tab" data-bs-toggle="pill" data-bs-target="#pills-1123" type="button" role="tab" aria-controls="pills-1123" aria-selected="true">
                <picture>
                  <source srcset="images/act/2022/11/11/images/nav-placeholder.png" media="(min-width: 992px)">
                  <img class="img-fluid" src="images/act/2022/11/11/images/m/nav-placeholder.png" alt="">
                </picture>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link p-0 rounded-0" id="pills-1124-tab" data-bs-toggle="pill" data-bs-target="#pills-1124" type="button" role="tab" aria-controls="pills-1124" aria-selected="true">
                <picture>
                  <source srcset="images/act/2022/11/11/images/nav-placeholder.png" media="(min-width: 992px)">
                  <img class="img-fluid" src="images/act/2022/11/11/images/m/nav-placeholder.png" alt="">
                </picture>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link p-0 rounded-0" id="pills-1125-tab" data-bs-toggle="pill" data-bs-target="#pills-1125" type="button" role="tab" aria-controls="pills-1125" aria-selected="true">
                <picture>
                  <source srcset="images/act/2022/11/11/images/nav-placeholder.png" media="(min-width: 992px)">
                  <img class="img-fluid" src="images/act/2022/11/11/images/m/nav-placeholder.png" alt="">
                </picture>
              </button>
            </li>
          </ul>
        </div>
        <div v-if="start_1121" id="blackFriday" class="w-100 position-relative" style="overflow-x: hidden;">
          <div class="container-fluid container-blackfriday p-0 position-relative mb-3 mb-xl-5" style="z-index: 2;">
            <div class="row g-0 justify-content-center">
              <div class="col-12" style="max-width: 1500px;">
                <div class="tab-content">
                  <!-- 1123 -->
                  <div class="tab-pane fade" id="pills-1123" role="tabpanel" aria-labelledby="pills-1123-tab" tabindex="0">
                    <div id="sectionN23" class="section-wrapper section-goldrush position-relative">
                      <div class="section-inner d-flex flex-column p-xl-4">
                        <div class="d-flex flex-column justify-content-center align-items-center">
                          <div class="row row-cols-3 row-cols-md-3 row-cols-lg-6 g-0 align-self-stretch justify-content-start">
                            <div v-if="item.type === 'N23'" v-for="item in items" class="col p-1 text-start d-flex flex-column item mb-3 mb-xxl-4">
                              <div class="item-inner d-flex flex-column flex-grow-1 p-1 p-xl-2">
                                <!-- 已開賣 -->
                                <div v-if="item.available" class="item-body mb-0 mb-xl-2 p-1">
                                  <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                                </div>
                                <!-- 尚未開賣 -->
                                <div v-else-if="item.before" class="item-body mb-0 mb-xl-2 p-1">
                                  <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                                </div>
                                <!-- 已結束 -->
                                <div v-else class="item-body mb-0 mb-xl-2 p-1">
                                  <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                                </div>

                                <!-- 已開賣 -->
                                <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                  <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                  <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                                  <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                                </div>
                                <!-- 尚未開賣 -->
                                <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                  <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                                  <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                                  <a class="btn btn-outline-light rounded-0 mt-1 pe-none">驚喜價!?</a>
                                </div>
                                <!-- 已結束 -->
                                <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                  <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                  <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                                  <a :href="item.url" class="btn btn-outline-warning rounded-0 mt-1">搶購結束</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 1124 -->
                  <div class="tab-pane fade" id="pills-1124" role="tabpanel" aria-labelledby="pills-1124-tab" tabindex="0">
                    <div id="sectionN24" class="section-wrapper section-goldrush position-relative">
                      <div class="section-inner d-flex flex-column p-xl-4">
                        <div class="d-flex flex-column justify-content-center align-items-center">
                          <div class="row row-cols-3 row-cols-md-3 row-cols-lg-6 g-0 align-self-stretch justify-content-start">
                            <div v-if="item.type === 'N24'" v-for="item in items" class="col p-1 text-start d-flex flex-column item mb-3 mb-xxl-4">
                              <div class="item-inner d-flex flex-column flex-grow-1 p-1 p-xl-2">
                                <!-- 已開賣 -->
                                <div v-if="item.available" class="item-body mb-0 mb-xl-2 p-1">
                                  <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                                </div>
                                <!-- 尚未開賣 -->
                                <div v-else-if="item.before" class="item-body mb-0 mb-xl-2 p-1">
                                  <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                                </div>
                                <!-- 已結束 -->
                                <div v-else class="item-body mb-0 mb-xl-2 p-1">
                                  <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                                </div>

                                <!-- 已開賣 -->
                                <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                  <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                  <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                                  <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                                </div>
                                <!-- 尚未開賣 -->
                                <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                  <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                                  <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                                  <a class="btn btn-outline-light rounded-0 mt-1 pe-none">驚喜價!?</a>
                                </div>
                                <!-- 已結束 -->
                                <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                  <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                  <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                                  <a :href="item.url" class="btn btn-outline-warning rounded-0 mt-1">搶購結束</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- 1125 -->
                  <div class="tab-pane fade" id="pills-1125" role="tabpanel" aria-labelledby="pills-1125-tab" tabindex="0">
                    <div id="sectionN25" class="section-wrapper section-goldrush position-relative">
                      <div class="section-inner d-flex flex-column p-xl-4">
                        <div class="d-flex flex-column justify-content-center align-items-center">
                          <div class="row row-cols-3 row-cols-md-3 row-cols-lg-6 g-0 align-self-stretch justify-content-start">
                            <div v-if="item.type === 'N25'" v-for="item in items" class="col p-1 text-start d-flex flex-column item mb-3 mb-xxl-4">
                              <div class="item-inner d-flex flex-column flex-grow-1 p-1 p-xl-2">
                                <!-- 已開賣 -->
                                <div v-if="item.available" class="item-body mb-0 mb-xl-2 p-1">
                                  <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                                </div>
                                <!-- 尚未開賣 -->
                                <div v-else-if="item.before" class="item-body mb-0 mb-xl-2 p-1">
                                  <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                                </div>
                                <!-- 已結束 -->
                                <div v-else class="item-body mb-0 mb-xl-2 p-1">
                                  <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                                </div>

                                <!-- 已開賣 -->
                                <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                  <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                  <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                                  <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                                </div>
                                <!-- 尚未開賣 -->
                                <div v-else-if="item.before" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                  <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><span>{{item.brand}}</span></div>
                                  <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                                  <a class="btn btn-outline-light rounded-0 mt-1 pe-none">驚喜價!?</a>
                                </div>
                                <!-- 已結束 -->
                                <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                                  <div class="item-brand d-flex justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                                  <div class="item-name d-flex justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                                  <a :href="item.url" class="btn btn-outline-warning rounded-0 mt-1">搶購結束</a>
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
    </div>




    <!-- 公格navBar -->
    <div v-if="start_1021" class="w-100 mx-auto position-relative" style="max-width: 800px; z-index: 3;"><img src="images/act/2022/11/11/images/title-navbar.png" class="img-fluid us-none"></div>
    <div v-if="start_1021" id="navBar" class="btn-nav-group d-flex justify-content-center">
      <!-- <div class="navbar-observer"></div> -->
      <div class="navbar-inner d-flex justify-content-between align-items-center position-relative">
        <button id="Btn1" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionE')" data-scroll-target="#sectionE">
          <img src="images/act/2022/11/11/images/nav-5.png" class="img-fluid">
        </button>
        <button id="Btn2" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionD')" data-scroll-target="#sectionD">
          <img src="images/act/2022/11/11/images/nav-4.png" class="img-fluid">
        </button>
        
        <button id="Btn3" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionC')" data-scroll-target="#sectionC">
          <img src="images/act/2022/11/11/images/nav-3.png" class="img-fluid">
        </button>
        <button id="Btn4" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionB')" data-scroll-target="#sectionB">
          <img src="images/act/2022/11/11/images/nav-2.png" class="img-fluid">
        </button>
        <button id="Btn5" class="btn btn-nav border-0 rounded-0 p-0" type="button" onclick="scrollToSection('sectionA')" data-scroll-target="#sectionA">
          <img src="images/act/2022/11/11/images/nav-1.png" class="img-fluid">
        </button>
        
      </div>
    </div>
    <!-- 公格 -->
    <div v-if="interval_1021_1108" class="w-100" style="overflow-x: hidden;">
      <div class="container-xl p-0 position-relative" style="z-index: 2;">
        <div class="row g-0 justify-content-center">
          <div class="col-12 col-xxl-10 p-1">
            <!-- A -->
            <div id="sectionA" class="mb-4">
              <div class="mx-auto mb-1" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-a.png" class="img-fluid us-none" alt="剁手必買"></div>
              <div class="section-wrapper section-a position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
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
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'A2'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
              <div class="mx-auto mb-1" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-b.png" class="img-fluid us-none" alt="夯品搶購"></div>
              <div class="section-wrapper section-b position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
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
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'B2'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                    
                  </div>
                  
                </div>
              </div>
            </div>

            

            <!-- C -->
            <div id="sectionC" class="mb-4">
              <div class="mx-auto mb-1" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-c.png" class="img-fluid us-none" alt="食尚主義"></div>
              <div class="section-wrapper section-c position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
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
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'C2'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                    
                  </div>
                  
                </div>
              </div>
            </div>

            

            <!-- D -->
            <div id="sectionD" class="mb-4">
              <div class="mx-auto mb-1" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-d.png" class="img-fluid us-none" alt="品味格調"></div>
              <div class="section-wrapper section-d position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
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
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'D2'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
              <div class="mx-auto mb-1" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-e.png" class="img-fluid us-none" alt="脫單必備"></div>
              <div class="section-wrapper section-e position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
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
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'E2'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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

    <!-- 公格 -->
    <div v-if="interval_1109_1127" class="w-100" style="overflow-x: hidden;">
      <div class="container-xl p-0 position-relative" style="z-index: 2;">
        <div class="row g-0 justify-content-center">
          <div class="col-12 col-xxl-10 p-1">

            <!-- J -->
            <div id="sectionE">
              <div class="mx-auto mb-1" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-e.png" class="img-fluid us-none" alt="脫單必備"></div>
              <div class="section-wrapper section-e position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'J1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block">
                              <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300">
                            </a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'J2'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                    
                  </div>
                  
                </div>
              </div>
            </div>

            <!-- swpG -->
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div class="swiper-custom">
                <div id="swpG" class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DF416DF323CE5107E05400144FF82309">
                        <img src="https://www.vivatv.com.tw/common/images/bn/EAD5CAC78B3C4F82E05400144FF82309.jpg" alt="畢耶 de Buyer" class="img-fluid" width="1400" height="560">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DF416FC3434605A9E05400144FF9CEC6">
                        <img src="https://www.vivatv.com.tw/common/images/bn/EAE060024C546B7FE05400144FF82309.jpg" alt="Sabre Paris" class="img-fluid" width="1400" height="560">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DE2BB33E6F7C1408E05400144FF9CEC6">
                        <img src="https://www.vivatv.com.tw/common/images/bn/E8C55FAAC0CE66AFE05400144FF9CEC6.jpg" alt="輝葉" class="img-fluid" width="1400" height="560">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/DE2BB33E6F7F1408E05400144FF9CEC6">
                        <img src="https://www.vivatv.com.tw/common/images/bn/E8C60E933129296DE05400144FF9CEC6.jpg" alt="RONA" class="img-fluid" width="1400" height="560">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- I -->
            <div id="sectionD">
              <div class="mx-auto mb-1" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-d.png" class="img-fluid us-none" alt="品味格調"></div>
              <div class="section-wrapper section-d position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'I1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'I2'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                    
                  </div>
                  
                </div>
              </div>
            </div>

            <!-- swpF -->
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div class="swiper-custom">
                <div id="swpF" class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/searchResult/雅格USB">
                        <img src="https://www.vivatv.com.tw/common/images/bn/E8C55FAAC0A266AFE05400144FF9CEC6_m.jpg" alt="USB檯燈" class="img-fluid" width="640" height="320">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/goods/3005012021">
                        <img src="https://www.vivatv.com.tw/common/images/bn/E8C55FAAC0CC66AFE05400144FF9CEC6_m.jpg" alt="微酵的力量" class="img-fluid" width="640" height="320">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/000000301">
                        <img src="https://www.vivatv.com.tw/common/images/bn/E8C60E933128296DE05400144FF9CEC6_m.jpg" alt="煥膚輕保養" class="img-fluid" width="640" height="320">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C17951C7FAE26E69E05400144FF82309">
                        <img src="https://www.vivatv.com.tw/common/images/bn/E8C55FAAC09E66AFE05400144FF9CEC6_m.jpg" alt="天然純綿" class="img-fluid" width="640" height="320">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- H -->
            <div id="sectionC">
              <div class="mx-auto mb-1" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-c.png" class="img-fluid us-none" alt="食尚主義"></div>
              <div class="section-wrapper section-c position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'H1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'H2'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/CC9223EEAA564C1EE05400144FF82309">
                        <img src="https://www.vivatv.com.tw/common/images/bn/E91349E423AE4A4BE05400144FF82309_m.jpg" alt="自然農法的實踐者" class="img-fluid" width="640" height="320">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/96D31C75AC9E341EE0536E0212ACCFD7">
                        <img src="https://www.vivatv.com.tw/common/images/bn/E8C580515F3D63F1E05400144FF82309_m.jpg" alt="Dyson購省錢贈好禮" class="img-fluid" width="640" height="320">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C04B1A01A20852F2E05400144FF82309">
                        <img src="https://www.vivatv.com.tw/common/images/bn/E8C580515F3F63F1E05400144FF82309_m.jpg" alt="安心防疫備起來" class="img-fluid" width="640" height="320">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/0354552337F6178FE0540003BA0FF88E">
                        <img src="https://www.vivatv.com.tw/common/images/bn/E8C580515F4163F1E05400144FF82309_m.jpg" alt="奧利塔" class="img-fluid" width="640" height="320">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- G -->
            <div id="sectionB">
              <div class="mx-auto mb-1" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-b.png" class="img-fluid us-none" alt="夯品搶購"></div>
              <div class="section-wrapper section-b position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'G1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'G2'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
                        <img src="https://www.vivatv.com.tw/common/images/bn/E8C580515F4263F1E05400144FF82309_m.jpg" alt="歐美精品" class="img-fluid" width="640" height="320">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/goods/3004972021">
                        <img src="https://www.vivatv.com.tw/common/images/bn/E8C60E933126296DE05400144FF9CEC6_m.jpg" alt="清潤飴" class="img-fluid" width="640" height="320">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C55317C9C7CA435DE05400144FF82309">
                        <img src="https://www.vivatv.com.tw/common/images/bn/E8C580515F3C63F1E05400144FF82309_m.jpg" alt="立體金箔畫" class="img-fluid" width="640" height="320">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/E391F8619E263D07E05400144FF9CEC6">
                        <img src="https://www.vivatv.com.tw/common/images/bn/E8C55FAAC0A166AFE05400144FF9CEC6_m.jpg" alt="黑蒜頭" class="img-fluid" width="640" height="320">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            

            <!-- F -->
            <div id="sectionA">
              <div class="mx-auto mb-1" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-a.png" class="img-fluid us-none" alt="剁手必買"></div>
              <div class="section-wrapper section-a position-relative">
                <div class="section-observer"></div>
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <!-- 公格上排 -->
                    <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'F1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- 公格下排 -->
                    <!-- <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'F2'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column p-2">
                          <div v-if="item.available" class="item-body mb-xl-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-xl-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><a :href="item.url">{{item.name}}</a></div>
                            <div v-if="start_1021" class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            <div v-else class="item-price text-center"><span class="price-type me-1">驚喜價</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-xl-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
    


    <!-- 公格 -->
    <div v-if="before_1021" class="w-100" style="overflow-x: hidden;">
      <div class="container-xl p-0 py-xl-5 position-relative" style="z-index: 2;">
        <div class="row g-0 justify-content-center">
          <div class="col-12">
            <!-- P1 -->
            <div id="sectionP1">
              <div class="mx-auto" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-p1.png" class="img-fluid us-none" alt="保暖新煮義"></div>
              <div class="section-wrapper section-p1 position-relative mb-3 mb-xl-5">
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    
                    <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'P1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                          <div v-if="item.available" class="item-body mb-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><a :href="item.url">{{item.name}}</a></div>
                            <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </div>
            <!-- P2 -->
            <div id="sectionP2">
              <div class="mx-auto" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-p2.png" class="img-fluid us-none" alt="南洋好風味"></div>
              <div class="section-wrapper section-p2 position-relative mb-3 mb-xl-5">
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    
                    <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'P2'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                          <div v-if="item.available" class="item-body mb-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><a :href="item.url">{{item.name}}</a></div>
                            <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </div>
            <!-- P1 -->
            <div id="sectionP3">
              <div class="mx-auto" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-p3.png" class="img-fluid us-none" alt="健康好實力"></div>
              <div class="section-wrapper section-p3 position-relative mb-3 mb-xl-5">
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    
                    <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'P3'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                          <div v-if="item.available" class="item-body mb-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><a :href="item.url">{{item.name}}</a></div>
                            <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </div>
            <!-- P4 -->
            <div id="sectionP4">
              <div class="mx-auto" style="max-width: 800px;"><img src="images/act/2022/11/11/images/title-section-p4.png" class="img-fluid us-none" alt="休閒來一刻"></div>
              <div class="section-wrapper section-p4 position-relative mb-3 mb-xl-5">
                <div class="section-inner d-flex flex-column p-xl-5">
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    
                    <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch">
                      <div v-if="item.type === 'P4'" v-for="item in items" class="col p-1 text-start d-flex flex-column item">
                        <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                          <div v-if="item.available" class="item-body mb-3">
                            <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-else class="item-body mb-3">
                            <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="300" height="300"></a>
                          </div>
                          <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-2"><a :href="item.url">{{item.brand}}</a></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><a :href="item.url">{{item.name}}</a></div>
                            <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                          </div>
                          <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                            <div class="item-brand text-center mb-2"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
</template>


<script>
module.exports = {
  data: function() {
    return {
      isLoading: false,
      failed: false,
      imgError: 'this.src="/html/images/act/2022/11/11/images/img-error.png"',
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

      
      oneday_1021: false,
      oneday_1023: false,

      end_1113: false,

      start_1103: false,

      start_1121: false,

    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = '/html/images/act/2022/11/11/json/data.json';
      var path2 = '/html/images/act/2022/11/11/json/data2.json';
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

      var start_1121 = '2022-11-21 00:00:00';
      var start_1123 = '2022-11-23 00:00:00';
      var end_1125 = '2022-11-25 23:59:59';

      var dateNow = timeNow.substr(5,2) + timeNow.substr(8,2);
      console.log('dateNow:'+dateNow);



      if (moment(timeNow).isSameOrBefore(before_1021)) {
        this.before_1021 = true;
      }

      if (moment(timeNow).isBetween(start_1021, end_1023, 'second', '[]')) {
        this.oneday_1021 = true;
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
        // console.log(this.start_1103);
      }      

      if (moment(timeNow).isBetween(start_1106, end_1113, 'second', '[]')) {
        this.start_1106 = true;
      }
      if (moment(timeNow).isBetween(start_1107, end_1113, 'second', '[]')) {
        this.start_1107 = true;
      }
      if (moment(timeNow).isBetween(start_1108, end_1113, 'second', '[]')) {
        this.start_1108 = true;
      }
      if (moment(timeNow).isBetween(start_1109, end_1113, 'second', '[]')) {
        this.start_1109 = true;
      }
      if (moment(timeNow).isBetween(start_1110, end_1113, 'second', '[]')) {
        this.start_1110 = true;
      }
      if (moment(timeNow).isBetween(start_1111, end_1113, 'second', '[]')) {
        this.start_1111 = true;
      }
      if (moment(timeNow).isBetween(start_1112, end_1113, 'second', '[]')) {
        this.start_1112 = true;
      }
      if (moment(timeNow).isBetween(start_1123, end_1125, 'second', '[]')) {
        this.start_1123 = true;
      }
      if (moment(timeNow).isBetween(start_1121, end_1125, 'second', '[]')) {
        this.start_1121 = true;
      }

      path = path1;

      //1109 00:00:00前
      // if ( moment(timeNow).isBefore(start_1109) ) {
        
      //   path = path1;
      // } else {
        
      //   path = path2;
      // }


      if (timeFromURL) {
        // dataTime = timeFromURL.substr(4, 4);
        dataTime = timeFromURL;
        console.log('dataTime: ' + dataTime);
        
      } else {
        dataTime = year + month + date;
        console.log('dataTime: ' + dataTime);
        
      }

      // 倒數計時
      var eventTime = moment('2022-10-23 15:00:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');

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
        
        // console.log('diffTime:'+diffTime);

      var timer = setInterval(function(){

        currentTime = moment().diff(moment().startOf('year'), 'seconds');

        // console.log('currentTime: '+ currentTime);

        diffTime = eventTime - currentTime;
        // console.log('diffTime:'+diffTime);
        if (diffTime > 0) {

          var duration = moment.duration(diffTime*1000, 'milliseconds');
          var m = duration.months();
          var d = duration.days();
          var md = m*30 + d;
          // console.log('md: '+ md);


          $('.countdown').html(
            '<span class="countdown-number">' + md + '</span> 天 ' + 
            '<span class="countdown-number">' + duration.hours() + '</span> 時 ' + 
            '<span class="countdown-number">' + duration.minutes() + '</span> 分 ' + 
            '<span class="countdown-number">' + duration.seconds() + '</span> 秒 ' );
        } else {
          $('#countDownTimer').hide();
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
        if (this.items[i].id == '3029132022' || this.items[i].id == '3029752022') {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.JPG');
        } else {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
        }
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2022/11/11/images/product/'+ this.items[i].id +'/1.jpg');
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


        if (timeFromURL == '20221023T000001') {
          
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
      // console.log(e.target.width);

      if (e.target.width == 1) {
        e.target.src = "/html/images/act/2022/11/11/images/product/"+ t +".jpg";
        // if (e.target.width == 1) {
        //   e.target.src = "/html/images/act/2022/11/11/images/img-error.png";
        // }
        
      }

      
    },
    altImage: function(e) {
      

      var t = e.target.id;
      // console.log(t);
      // e.target.src = "/html/images/act/2022/11/11/images/img-error.png";

      if (e.target.imgchecked) {
        e.target.src = "/html/images/act/2022/11/11/images/img-error.png";
      } else {
        e.target.src = "/html/images/act/2022/11/11/images/product/"+ t +".jpg";
      }

      
      e.target.imgchecked = true;
      e.target.onerror = null;

      
    }
  },
  mounted: function() {   
    this.isLoading = true;
    this.initItem();


      
      


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

      if (moment(timeNow).isBetween('2022-11-03', '2022-11-06', 'second', '[]')) {
        var dateNow = '1106';
      } else {
        var dateNow = timeNow.substr(5,2) + timeNow.substr(8,2);
      }

      if (moment(timeNow).isBetween('2022-11-21', '2022-11-23', undefined, '[]')) {
        var dateNow = '1123';
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

