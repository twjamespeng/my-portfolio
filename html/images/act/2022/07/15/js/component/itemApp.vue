<template>
  <div>
    

    <!-- S -->
    <div class="container-fluid p-0 py-xl-5">
      <div class="row g-0 justify-content-center">
        <div class="col-12" style="max-width: 2560px;">
          <div class="d-flex flex-column align-items-center nav-wrapper pt-4">
            <div class="nav flex-row nav-pills row row-cols-3 row-cols-xl-6 g-0 justify-content-center mb-3 mb-xl-4" id="pills-tab" role="tablist" style="max-width: 1200px;">
              <button class="nav-link rounded-circle active p-2" id="pills-1-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1" aria-selected="true" onmouseenter="clickTab('#pills-1-tab')">
                <img class="img-fluid rounded-circle" src="images/act/2022/07/15/images/nav-1.png">
              </button>
              <button class="nav-link rounded-circle p-2" id="pills-2-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-1" aria-selected="true" onmouseenter="clickTab('#pills-2-tab')">
                <img class="img-fluid rounded-circle" src="images/act/2022/07/15/images/nav-2.png">
              </button>
              <button class="nav-link rounded-circle p-2" id="pills-3-tab" data-bs-toggle="pill" data-bs-target="#pills-3" type="button" role="tab" aria-controls="pills-1" aria-selected="true" onmouseenter="clickTab('#pills-3-tab')">
                <img class="img-fluid rounded-circle" src="images/act/2022/07/15/images/nav-3.png">
              </button>
              <button class="nav-link rounded-circle p-2" id="pills-4-tab" data-bs-toggle="pill" data-bs-target="#pills-4" type="button" role="tab" aria-controls="pills-1" aria-selected="true" onmouseenter="clickTab('#pills-4-tab')">
                <img class="img-fluid rounded-circle" src="images/act/2022/07/15/images/nav-4.png">
              </button>
              <button class="nav-link rounded-circle p-2" id="pills-5-tab" data-bs-toggle="pill" data-bs-target="#pills-5" type="button" role="tab" aria-controls="pills-1" aria-selected="true" onmouseenter="clickTab('#pills-5-tab')">
                <img class="img-fluid rounded-circle" src="images/act/2022/07/15/images/nav-5.png">
              </button>
              <button class="nav-link rounded-circle p-2" id="pills-6-tab" data-bs-toggle="pill" data-bs-target="#pills-6" type="button" role="tab" aria-controls="pills-1" aria-selected="true" onmouseenter="clickTab('#pills-6-tab')">
                <img class="img-fluid rounded-circle" src="images/act/2022/07/15/images/nav-6.png">
              </button>
            </div>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane p-2 pt-4 p-xl-5 show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab" tabindex="0">
                <div class="d-flex">
                  <div class="d-none d-xl-flex align-items-center pe-xl-4"><button class="btn text-white p-0 btn-chevron" type="button" onclick="clickTab('#pills-6-tab')"><i class="fa-solid fa-chevron-left"></i></button></div>
                  <div class="d-flex flex-column flex-fill">
                    <div class="d-flex justify-content-center mb-3 mb-xl-4"><img class="img-fluid" src="images/act/2022/07/15/images/title-pills-1.png"></div>
                    <div class="d-flex">
                      <div class="row row-cols-2 row-cols-md-3 row-cols-xxl-6 g-0">
                        <div v-if="item.type === 'S1'" v-for="item in items" :key="item.id" class="col p-1 p-md-2 text-start d-flex flex-column item mb-2 mb-xl-3">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                            <div class="item-body d-flex mb-2">
                              <a :href="item.url" class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                              <div class="item-brand py-xl-2 text-center"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-1"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-none d-xl-flex align-items-center ps-xl-4 nav-pills"><button class="btn text-white p-0 btn-chevron" type="button" onclick="clickTab('#pills-2-tab')"><i class="fa-solid fa-chevron-right"></i></button></div>
                </div>
              </div>
              <div class="tab-pane p-2 pt-4 p-xl-5" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab" tabindex="0">
                <div class="d-flex">
                  <div class="d-none d-xl-flex align-items-center pe-xl-4"><button class="btn text-white p-0 btn-chevron" type="button" onclick="clickTab('#pills-1-tab')"><i class="fa-solid fa-chevron-left"></i></button></div>
                  <div class="d-flex flex-column flex-fill">
                    <div class="d-flex justify-content-center mb-3 mb-xl-4"><img class="img-fluid" src="images/act/2022/07/15/images/title-pills-2.png"></div>
                    <div class="d-flex">
                      <div class="row row-cols-2 row-cols-md-3 row-cols-xxl-6 g-0">
                        <div v-if="item.type === 'S2'" v-for="item in items" :key="item.id" class="col p-1 p-md-2 text-start d-flex flex-column item mb-2 mb-xl-3">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                            <div class="item-body d-flex mb-2">
                              <a :href="item.url" class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                              <div class="item-brand py-xl-2 text-center"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-1"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-none d-xl-flex align-items-center ps-xl-4"><button class="btn text-white p-0 btn-chevron" type="button" onclick="clickTab('#pills-3-tab')"><i class="fa-solid fa-chevron-right"></i></button></div>
                </div>
              </div>
              <div class="tab-pane p-2 pt-4 p-xl-5" id="pills-3" role="tabpanel" aria-labelledby="pills-3-tab" tabindex="0">
                <div class="d-flex">
                  <div class="d-none d-xl-flex align-items-center pe-xl-4"><button class="btn text-white p-0 btn-chevron" type="button" onclick="clickTab('#pills-2-tab')"><i class="fa-solid fa-chevron-left"></i></button></div>
                  <div class="d-flex flex-column flex-fill">
                    <div class="d-flex justify-content-center mb-3 mb-xl-4"><img class="img-fluid" src="images/act/2022/07/15/images/title-pills-3.png"></div>
                    <div class="d-flex">
                      <div class="row row-cols-2 row-cols-md-3 row-cols-xxl-6 g-0">
                        <div v-if="item.type === 'S3'" v-for="item in items" :key="item.id" class="col p-1 p-md-2 text-start d-flex flex-column item mb-2 mb-xl-3">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                            <div class="item-body d-flex mb-2">
                              <a :href="item.url" class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                              <div class="item-brand py-xl-2 text-center"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-1"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-none d-xl-flex align-items-center ps-xl-4"><button class="btn text-white p-0 btn-chevron" type="button" onclick="clickTab('#pills-4-tab')"><i class="fa-solid fa-chevron-right"></i></button></div>
                </div>
              </div>
              <div class="tab-pane p-2 pt-4 p-xl-5" id="pills-4" role="tabpanel" aria-labelledby="pills-4-tab" tabindex="0">
                <div class="d-flex">
                  <div class="d-none d-xl-flex align-items-center pe-xl-4"><button class="btn text-white p-0 btn-chevron" type="button" onclick="clickTab('#pills-3-tab')"><i class="fa-solid fa-chevron-left"></i></button></div>
                  <div class="d-flex flex-column flex-fill">
                    <div class="d-flex justify-content-center mb-3 mb-xl-4"><img class="img-fluid" src="images/act/2022/07/15/images/title-pills-4.png"></div>
                    <div class="d-flex">
                      <div class="row row-cols-2 row-cols-md-3 row-cols-xxl-6 g-0">
                        <div v-if="item.type === 'S4'" v-for="item in items" :key="item.id" class="col p-1 p-md-2 text-start d-flex flex-column item mb-2 mb-xl-3">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                            <div class="item-body d-flex mb-2">
                              <a :href="item.url" class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                              <div class="item-brand py-xl-2 text-center"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-1"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-none d-xl-flex align-items-center ps-xl-4"><button class="btn text-white p-0 btn-chevron" type="button" onclick="clickTab('#pills-5-tab')"><i class="fa-solid fa-chevron-right"></i></button></div>
                </div>
              </div>
              <div class="tab-pane p-2 pt-4 p-xl-5" id="pills-5" role="tabpanel" aria-labelledby="pills-5-tab" tabindex="0">
                <div class="d-flex">
                  <div class="d-none d-xl-flex align-items-center pe-xl-4"><button class="btn text-white p-0 btn-chevron" type="button" onclick="clickTab('#pills-4-tab')"><i class="fa-solid fa-chevron-left"></i></button></div>
                  <div class="d-flex flex-column flex-fill">
                    <div class="d-flex justify-content-center mb-3 mb-xl-4"><img class="img-fluid" src="images/act/2022/07/15/images/title-pills-5.png"></div>
                    <div class="d-flex">
                      <div class="row row-cols-2 row-cols-md-3 row-cols-xxl-6 g-0">
                        <div v-if="item.type === 'S5'" v-for="item in items" :key="item.id" class="col p-1 p-md-2 text-start d-flex flex-column item mb-2 mb-xl-3">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                            <div class="item-body d-flex mb-2">
                              <a :href="item.url" class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                              <div class="item-brand py-xl-2 text-center"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-1"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-none d-xl-flex align-items-center ps-xl-4"><button class="btn text-white p-0 btn-chevron" type="button" onclick="clickTab('#pills-6-tab')"><i class="fa-solid fa-chevron-right"></i></button></div>
                </div>
              </div>
              <div class="tab-pane p-2 pt-4 p-xl-5" id="pills-6" role="tabpanel" aria-labelledby="pills-6-tab" tabindex="0">
                <div class="d-flex">
                  <div class="d-none d-xl-flex align-items-center pe-xl-4"><button class="btn text-white p-0 btn-chevron" type="button" onclick="clickTab('#pills-5-tab')"><i class="fa-solid fa-chevron-left"></i></button></div>
                  <div class="d-flex flex-column flex-fill">
                    <div class="d-flex justify-content-center mb-3 mb-xl-4"><img class="img-fluid" src="images/act/2022/07/15/images/title-pills-6.png"></div>
                    <div class="d-flex">
                      <div class="row row-cols-2 row-cols-md-3 row-cols-xxl-6 g-0">
                        <div v-if="item.type === 'S6'" v-for="item in items" :key="item.id" class="col p-1 p-md-2 text-start d-flex flex-column item mb-2 mb-xl-3">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                            <div class="item-body d-flex mb-2">
                              <a :href="item.url" class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                            </div>
                            <div class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                              <div class="item-brand py-xl-2 text-center"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-1"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-none d-xl-flex align-items-center ps-xl-4"><button class="btn text-white p-0 btn-chevron" type="button" onclick="clickTab('#pills-1-tab')"><i class="fa-solid fa-chevron-right"></i></button></div>
                </div>
              </div>        
            </div>
          </div>
        </div>
      </div>
    </div>
    

    <div class="container-xl p-0 py-xl-5">
      <div class="row g-0 justify-content-center">
        <div class="col-12" style="max-width: 1200px;">
          <!-- A -->
          <div id="sectionA" class="section-wrapper section-a mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <!-- 大圖 -->
                <div class="tablet-fix">
                  <img src="images/act/2022/07/15/images/m/section-a.jpg" class="img-fluid d-inline d-md-none" alt="在家也能做出美味饗宴" title="在家也能做出美味饗宴">
                  <img src="images/act/2022/07/15/images/section-a.jpg" class="img-fluid d-none d-md-inline" alt="在家也能做出美味饗宴" title="在家也能做出美味饗宴">
                </div>
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 align-self-stretch p-1">
                  <div v-if="item.type === 'A'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-0">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-0">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- B -->
          <div id="sectionB" class="section-wrapper section-b mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column flex-md-row-reverse justify-content-center align-items-center">
                <!-- 大圖 -->
                <div class="tablet-fix">
                  <img src="images/act/2022/07/15/images/m/section-b.jpg" class="img-fluid d-inline d-md-none" alt="輕鬆料理 美味健康" title="輕鬆料理 美味健康">
                  <img src="images/act/2022/07/15/images/section-b.jpg" class="img-fluid d-none d-md-inline" alt="輕鬆料理 美味健康" title="輕鬆料理 美味健康">
                </div>
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 align-self-stretch p-1">
                  <div v-if="item.type === 'B'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-0">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-0">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- C -->
          <div id="sectionC" class="section-wrapper section-c mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
                <!-- 大圖 -->
                <div class="tablet-fix">
                  <img src="images/act/2022/07/15/images/m/section-c.jpg" class="img-fluid d-inline d-md-none" alt="品味生活 薰陶生活" title="品味生活 薰陶生活">
                  <img src="images/act/2022/07/15/images/section-c.jpg" class="img-fluid d-none d-md-inline" alt="品味生活 薰陶生活" title="品味生活 薰陶生活">
                </div>
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 align-self-stretch p-1">
                  <div v-if="item.type === 'C'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-0">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-0">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
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
</template>


<script>
module.exports = {
  data: function() {
    return {
      isLoading: false,
      failed: false,
      imgError: 'this.src="/html/images/act/2022/07/15/images/img-error.jpg"',
      items: [],
      wave2: false,
      wave3: false,
      oneday: false
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = (window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/07/15/json/data.json";
      // var path2 = (window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/07/15/json/data2.json";
      var path;

      let timeFromURL = this.getUrlParameter('t');
      var dataTime;

      let year = moment().format('YYYY');
      let month = moment().format('MM');
      let date = moment().format('DD');

      if (timeFromURL) {
        // dataTime = timeFromURL.substr(4, 4);
        dataTime = timeFromURL;
        console.log('dataTime: ' + dataTime);
        // if (dataTime.substr(0,8) == '20230424') {
        //   this.wave2 = true;
        //   console.log('wave2');
        // } else if (dataTime.substr(0,8) >= '20230425') {
        //   this.wave3 = true;
        //   console.log('wave3');
        // } else {
        //   console.log('wave1');
        // }
      } else {
        dataTime = year + month + date;
        console.log('dataTime: ' + dataTime);
        // if (dataTime.substr(0,8) == '20230424') {
        //   this.wave2 = true;
        //   console.log('wave2');
        // } else if (dataTime.substr(0,8) >= '20230425') {
        //   this.wave3 = true;
        //   console.log('wave3');
        // } else {
        //   //do nothing
        //   console.log('wave1');
        // }
      }
      

      
      // for (let j=0; j < this.items.length; j++) {
      //   let targetStart = moment.utc(this.items[j].start, 'YYYY-MM-DD[T]HH:mm[Z]');
        
        
      //   this.items[j].launch = this.items[j].start.substr(11,5);
        
      //   if (moment(targetStart).isAfter(localTimeUtc)) {
      //     this.items[j].available = false;
      //   } else {
      //     this.items[j].available = true;
      //   }

      // }


      



      /*var eventTime = moment('2022-04-24 09:00:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');

      

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

      }, 1000);*/

        /*if (diffTime > 0) {

          var duration = moment.duration(diffTime*1000, 'milliseconds');
          var interval = 1000;

          setInterval(function(){

            currentTime = moment().diff(moment().startOf('day'), 'seconds');
            diffTime = eventTime - currentTime;
            console.log('diffTime: ' + diffTime);

            duration = moment.duration(duration - interval, 'milliseconds');
            
            $('.countdown').html(
              '<span class="countdown-number">' + duration.days() + '</span> 天 ' + 
              '<span class="countdown-number">' + duration.hours() + '</span> 時 ' + 
              '<span class="countdown-number">' + duration.minutes() + '</span> 分 ' + 
              '<span class="countdown-number">' + duration.seconds() + '</span> 秒 ' );

          }, interval);


        } else {
          $('#countDownTimer').hide();
        }*/
      
      
      
      

      
      /*if (dataTime.substr(0,8) == '20220424') {
        path = path2;
      } else if (dataTime.substr(0,8) >= '20220425') {
        path = path2;
      } else {
        path = path1;
      }*/

      path = path1;



      
      var currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
      var customTime = '2022-06-03 00:00:00';

      if (timeFromURL) {
        currentTime = moment(timeFromURL).format('YYYY-MM-DD HH:mm:ss');
        console.log('currentTime: '+ currentTime);
      }

      var p  = moment(currentTime).isBefore(customTime);



      if (!p) {
        // $('#Btn1, #Btn2, #sectionA, #sectionB').hide();
        // $('#Btn3').addClass('active');
      }

      var onedayTime = '2022-06-08 00:00:00';

      var q = moment(currentTime).isBefore(onedayTime);



      if (!q) {
        this.oneday = true;
      }


      console.log('p: '+ p);
      console.log('q: '+ q);
      

      

      

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
        this.$set(this.items[i], "url", 'https://www.vivatv.com.tw/Product.go?itemCode=' + this.items[i].id);
        if (this.items[i].id == '3029392022') {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.JPG');
        } else {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
        }
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2022/07/15/images/product/'+ this.items[i].id +'/1.jpg');
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

        this.items[j].launch = this.items[j].start.substr(11,5);
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


        // if (this.items[j].id == '2987182021') {
        //   this.items[j].price = '銷售一空';
        //   this.items[j].available = false;
        // }

        

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
    altImage: function(e) {
      

      var t = e.target.alt;
      // console.log(t);


      // e.target.src = "/html/images/act/2022/07/15/images/img-error.jpg";

      if (e.target.imgchecked) {
        e.target.src = "/html/images/act/2022/07/15/images/img-error.jpg";
      } else {
        e.target.src = "/html/images/act/2022/07/15/images/product/"+ t +".jpg";
      }

      
      e.target.imgchecked = true;
      e.target.onerror = null;

      
    }
  },
  mounted: function() {   
    this.isLoading = true;
    this.initItem();

    // init the observer
    // const options = {
    //   rootMargin: '0px 0px -50% 0px',
    //   threshold: [0, 1]
    // }

    // const observer = new IntersectionObserver(changeNav, options);

    // target the elements to be observed
    // const section = document.querySelectorAll('.section-observer');
    // setTimeout(function(){
    //   section.forEach((el) => {
    //     observer.observe(el);
    //   });
    // }, 2000);
    




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

