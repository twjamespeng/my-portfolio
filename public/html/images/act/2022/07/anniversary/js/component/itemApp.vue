<template>
  <div>
    
    <!-- one day -->
    <div v-if="end_0731" class="container-xl container-oneday p-0">
      <div class="row g-0 justify-content-center">
        <div class="col-12" style="max-width: 1200px;">
          <div class="section-header d-block d-md-none">
              <img src="images/act/2022/07/anniversary/images/m/title-oneday.png" class="img-fluid">
            </div>
            <div class="section-header d-none d-md-block">
              <img src="images/act/2022/07/anniversary/images/title-oneday.png" class="img-fluid">
            </div>
          <div class="section-oneday p-2 mb-5">
            
            <div class="section-body" style="">
              <div class="d-flex justify-content-center countdown-timer">
                <div id="countDownTimer" class="mb-2 mt-md-3 fs-4">
                  <span>最後倒數</span>
                  <span class="countdown fw-normal"></span>
                </div>
              </div>
              <div id="oneDaySection" class="row row-cols-2 row-cols-md-3 row-cols-xl-5 g-0">
                <div 
                  v-if="item.type === 'S'" 
                  v-for="item in items" 
                  :key="item.id" 
                  :class="oneday_0731 ? 'flip' : ''"
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
                      <div v-if="item.available" class="d-flex h-100">
                        <a class="d-flex" :href="item.url" :name="[item.brand + item.name]">
                          <div class="item-inner d-flex flex-column flex-grow-1 p-2 bg-white">
                            <div class="item-body d-flex mb-2"><img :src="item.imgsrc" @error="altImage" class="img-fluid h-100" :alt="[item.brand + item.name]" :id="item.id"></div>
                            <div class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                              <div class="item-brand bg-white pt-2">{{item.brand}}</div>
                              <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start">{{item.name}}</div>
                              <div class="item-price"><span class="price-type me-1">限時</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <!-- 尚未開賣 -->
                      <div v-else-if="item.before" class="d-flex h-100">
                        
                          <div class="item-inner d-flex flex-column flex-grow-1 p-2 bg-white">
                            <div class="item-body d-flex mb-2"><img :src="item.imgsrc" @error="altImage" class="img-fluid h-100" :alt="[item.brand + item.name]" :id="item.id"></div>
                            <div class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                              <div class="item-brand bg-white pt-2">{{item.brand}}</div>
                              <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start">{{item.name}}</div>
                              <div class="item-price bg-white"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                            </div>
                          </div>
                        
                      </div>
                      <!-- 搶購結束 -->
                      <div v-else class="d-flex h-100">
                        
                          <div class="item-inner d-flex flex-column flex-grow-1 p-2 bg-white">
                            <div class="item-body d-flex mb-2"><img :src="item.imgsrc" @error="altImage" class="img-fluid h-100" :alt="[item.brand + item.name]" :id="item.id"></div>
                            <div class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                              <div class="item-brand bg-white pt-2">{{item.brand}}</div>
                              <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start">{{item.name}}</div>
                              <div class="item-over bg-white">搶購結束</div>
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
    
    <div v-if="end_0814" class="container-xl container-grid p-0 py-xl-5">
      <div class="row g-0 justify-content-center">
        <div class="col-12 d-flex flex-column justify-content-center" style="max-width: 1258px;">

          <!-- navBar -->
          <div id="navBar" class="d-flex justify-content-between btn-nav-group align-self-center mb-xl-5">  
            <button id="Btn1" class="btn btn-nav rounded-0 p-0 active" type="button" onclick="scrollToSection('sectionA')" data-scroll-target="#sectionA">
              <img src="images/act/2022/07/anniversary/images/m/btn-1.png" class="img-fluid d-inline d-md-none">
              <img src="images/act/2022/07/anniversary/images/btn-1.png" class="img-fluid d-none d-md-inline">
            </button>
            <button id="Btn2" class="btn btn-nav rounded-0 p-0" type="button" onclick="scrollToSection('sectionB')" data-scroll-target="#sectionB">
              <img src="images/act/2022/07/anniversary/images/m/btn-2.png" class="img-fluid d-inline d-md-none">
              <img src="images/act/2022/07/anniversary/images/btn-2.png" class="img-fluid d-none d-md-inline">
            </button>
            <button id="Btn3" class="btn btn-nav rounded-0 p-0" type="button" onclick="scrollToSection('sectionC')" data-scroll-target="#sectionC">
              <img src="images/act/2022/07/anniversary/images/m/btn-3.png" class="img-fluid d-inline d-md-none">
              <img src="images/act/2022/07/anniversary/images/btn-3.png" class="img-fluid d-none d-md-inline">
            </button>
            <button id="Btn4" class="btn btn-nav rounded-0 p-0" type="button" onclick="scrollToSection('sectionD')" data-scroll-target="#sectionD">
              <img src="images/act/2022/07/anniversary/images/m/btn-4.png" class="img-fluid d-inline d-md-none">
              <img src="images/act/2022/07/anniversary/images/btn-4.png" class="img-fluid d-none d-md-inline">
            </button>
            <button id="Btn5" class="btn btn-nav rounded-0 p-0" type="button" onclick="scrollToSection('sectionE')" data-scroll-target="#sectionE">
              <img src="images/act/2022/07/anniversary/images/m/btn-5.png" class="img-fluid d-inline d-md-none">
              <img src="images/act/2022/07/anniversary/images/btn-5.png" class="img-fluid d-none d-md-inline">
            </button>
          </div> 
          

          <!-- A -->
          <div id="sectionA" class="section-wrapper section-a mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column flex-xl-row justify-content-center align-items-center">
                <!-- 大圖 -->
                <div class="tablet-fix">
                  <a href="https://www.vivatv.com.tw/Product.go?itemCode=3059432022" name="de Buyer 原礦蜂蠟系列 迷你煎餅鍋 獨家買一送一">
                    <img src="images/act/2022/07/anniversary/images/m/product-transparent.png" class="img-fluid d-inline d-xl-none" alt="de Buyer 原礦蜂蠟系列 迷你煎餅鍋 獨家買一送一" title="de Buyer 原礦蜂蠟系列 迷你煎餅鍋 獨家買一送一">
                    <img src="images/act/2022/07/anniversary/images/product-transparent.png" class="img-fluid d-none d-xl-inline" alt="de Buyer 原礦蜂蠟系列 迷你煎餅鍋 獨家買一送一" title="de Buyer 原礦蜂蠟系列 迷你煎餅鍋 獨家買一送一">
                  </a>
                </div>
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 align-self-stretch ms-xl-3">
                  <div v-if="item.type === 'A'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-0">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name" loading="lazy" width="300" height="300"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-0">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launchdate}} <span class="fw-normal fs-5">開賣</span></span></div>
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
              <div class="d-flex flex-column flex-xl-row justify-content-center align-items-center">
                <!-- 大圖 -->
                <div class="tablet-fix">
                  <a href="https://www.vivatv.com.tw/Product.go?itemCode=2960102021" name="Hamilton Beach 漢美馳 液晶數位氣炸鍋">
                    <img src="images/act/2022/07/anniversary/images/m/product-transparent.png" class="img-fluid d-inline d-xl-none" alt="Hamilton Beach 漢美馳 液晶數位氣炸鍋" title="Hamilton Beach 漢美馳 液晶數位氣炸鍋">
                    <img src="images/act/2022/07/anniversary/images/product-transparent.png" class="img-fluid d-none d-xl-inline" alt="Hamilton Beach 漢美馳 液晶數位氣炸鍋" title="Hamilton Beach 漢美馳 液晶數位氣炸鍋">
                  </a>
                </div>
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 align-self-stretch ms-xl-3">
                  <div v-if="item.type === 'B'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-0">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name" loading="lazy" width="300" height="300"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-0">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launchdate}} <span class="fw-normal fs-5">開賣</span></span></div>
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
              <div class="d-flex flex-column flex-xl-row justify-content-center align-items-center">
                <!-- 大圖 -->
                <div class="tablet-fix">
                  <a href="https://www.vivatv.com.tw/Product.go?itemCode=3059592022" name="【詠統】勝蒜在握 黑蒜精禮盒(10入)">
                    <img src="images/act/2022/07/anniversary/images/m/product-transparent.png" class="img-fluid d-inline d-xl-none" alt="【詠統】勝蒜在握 黑蒜精禮盒(10入)" title="【詠統】勝蒜在握 黑蒜精禮盒(10入)">
                    <img src="images/act/2022/07/anniversary/images/product-transparent.png" class="img-fluid d-none d-xl-inline" alt="【詠統】勝蒜在握 黑蒜精禮盒(10入)" title="【詠統】勝蒜在握 黑蒜精禮盒(10入)">
                  </a>
                </div>
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 align-self-stretch ms-xl-3">
                  <div v-if="item.type === 'C'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-0">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name" loading="lazy" width="300" height="300"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-0">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launchdate}} <span class="fw-normal fs-5">開賣</span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- D -->
          <div id="sectionD" class="section-wrapper section-d mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column flex-xl-row justify-content-center align-items-center">
                <!-- 大圖 -->
                <div class="tablet-fix">
                  <a href="https://www.vivatv.com.tw/Product.go?itemCode=3061522022" name="金錦町 月悅中秋禮盒x2盒">
                    <img src="images/act/2022/07/anniversary/images/m/product-transparent.png" class="img-fluid d-inline d-xl-none" alt="金錦町 月悅中秋禮盒x2盒" title="金錦町 月悅中秋禮盒x2盒">
                    <img src="images/act/2022/07/anniversary/images/product-transparent.png" class="img-fluid d-none d-xl-inline" alt="金錦町 月悅中秋禮盒x2盒" title="金錦町 月悅中秋禮盒x2盒">
                  </a>
                </div>
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 align-self-stretch ms-xl-3">
                  <div v-if="item.type === 'D'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-0">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name" loading="lazy" width="300" height="300"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-0">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launchdate}} <span class="fw-normal fs-5">開賣</span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- E -->
          <div id="sectionE" class="section-wrapper section-e mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column flex-xl-row justify-content-center align-items-center">
                <!-- 大圖 -->
                <div class="tablet-fix">
                  <a href="https://www.vivatv.com.tw/Product.go?itemCode=3059762022" name="CTJ 高昇 GIA 0.50克拉18K鑽石戒指">
                    <img src="images/act/2022/07/anniversary/images/m/product-transparent.png" class="img-fluid d-inline d-xl-none" alt="CTJ 高昇 GIA 0.50克拉18K鑽石戒指" title="CTJ 高昇 GIA 0.50克拉18K鑽石戒指">
                    <img src="images/act/2022/07/anniversary/images/product-transparent.png" class="img-fluid d-none d-xl-inline" alt="CTJ 高昇 GIA 0.50克拉18K鑽石戒指" title="CTJ 高昇 GIA 0.50克拉18K鑽石戒指">
                  </a>
                </div>
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 align-self-stretch ms-xl-3">
                  <div v-if="item.type === 'E'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-0">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name" loading="lazy" width="300" height="300"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-0">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launchdate}} <span class="fw-normal fs-5">開賣</span></span></div>
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
    
    <div v-if="start_0815" class="container-xl container-grid p-0 py-xl-5">
      <div class="row g-0 justify-content-center">
        <div class="col-12 d-flex flex-column justify-content-center" style="max-width: 1258px;">

          <!-- navBar -->
          <div id="navBar" class="d-flex justify-content-between btn-nav-group align-self-center mb-xl-5">  
            <button id="Btn1" class="btn btn-nav rounded-0 p-0 active" type="button" onclick="scrollToSection('sectionA')" data-scroll-target="#sectionA">
              <img src="images/act/2022/07/anniversary/images/m/btn-1.png" class="img-fluid d-inline d-md-none">
              <img src="images/act/2022/07/anniversary/images/btn-1.png" class="img-fluid d-none d-md-inline">
            </button>
            <button id="Btn2" class="btn btn-nav rounded-0 p-0" type="button" onclick="scrollToSection('sectionB')" data-scroll-target="#sectionB">
              <img src="images/act/2022/07/anniversary/images/m/btn-2.png" class="img-fluid d-inline d-md-none">
              <img src="images/act/2022/07/anniversary/images/btn-2.png" class="img-fluid d-none d-md-inline">
            </button>
            <button id="Btn3" class="btn btn-nav rounded-0 p-0" type="button" onclick="scrollToSection('sectionC')" data-scroll-target="#sectionC">
              <img src="images/act/2022/07/anniversary/images/m/btn-3.png" class="img-fluid d-inline d-md-none">
              <img src="images/act/2022/07/anniversary/images/btn-3.png" class="img-fluid d-none d-md-inline">
            </button>
            <button id="Btn4" class="btn btn-nav rounded-0 p-0" type="button" onclick="scrollToSection('sectionD')" data-scroll-target="#sectionD">
              <img src="images/act/2022/07/anniversary/images/m/btn-4.png" class="img-fluid d-inline d-md-none">
              <img src="images/act/2022/07/anniversary/images/btn-4.png" class="img-fluid d-none d-md-inline">
            </button>
            <button id="Btn5" class="btn btn-nav rounded-0 p-0" type="button" onclick="scrollToSection('sectionE')" data-scroll-target="#sectionE">
              <img src="images/act/2022/07/anniversary/images/m/btn-5.png" class="img-fluid d-inline d-md-none">
              <img src="images/act/2022/07/anniversary/images/btn-5.png" class="img-fluid d-none d-md-inline">
            </button>
          </div> 
          

          <!-- A -->
          <div id="sectionA" class="section-wrapper section-a mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column flex-xl-row justify-content-center align-items-center">
                <!-- 大圖 -->
                <div class="tablet-fix">
                  <a href="https://www.vivatv.com.tw/Product.go?itemCode=3048052022" name="de Buyer 原礦蜂蠟系列 雙握耳直紋烤煎盤38x26cm">
                    <img src="images/act/2022/07/anniversary/images/m/product-transparent.png" class="img-fluid d-inline d-xl-none" alt="de Buyer 原礦蜂蠟系列 雙握耳直紋烤煎盤38x26cm" title="de Buyer 原礦蜂蠟系列 雙握耳直紋烤煎盤38x26cm">
                    <img src="images/act/2022/07/anniversary/images/product-transparent.png" class="img-fluid d-none d-xl-inline" alt="de Buyer 原礦蜂蠟系列 雙握耳直紋烤煎盤38x26cm" title="de Buyer 原礦蜂蠟系列 雙握耳直紋烤煎盤38x26cm">
                  </a>
                </div>
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 align-self-stretch ms-xl-3">
                  <div v-if="item.type === 'A'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-0">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name" loading="lazy" width="300" height="300"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-0">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launchdate}} <span class="fw-normal fs-5">開賣</span></span></div>
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
              <div class="d-flex flex-column flex-xl-row justify-content-center align-items-center">
                <!-- 大圖 -->
                <div class="tablet-fix">
                  <a href="https://www.vivatv.com.tw/Product.go?itemCode=2960072021" name="Hamilton Beach 漢美馳 多功能浸泡式玻璃快煮壺">
                    <img src="images/act/2022/07/anniversary/images/m/product-transparent.png" class="img-fluid d-inline d-xl-none" alt="Hamilton Beach 漢美馳 多功能浸泡式玻璃快煮壺" title="Hamilton Beach 漢美馳 多功能浸泡式玻璃快煮壺">
                    <img src="images/act/2022/07/anniversary/images/product-transparent.png" class="img-fluid d-none d-xl-inline" alt="Hamilton Beach 漢美馳 多功能浸泡式玻璃快煮壺" title="Hamilton Beach 漢美馳 多功能浸泡式玻璃快煮壺">
                  </a>
                </div>
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 align-self-stretch ms-xl-3">
                  <div v-if="item.type === 'B'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-0">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name" loading="lazy" width="300" height="300"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-0">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launchdate}} <span class="fw-normal fs-5">開賣</span></span></div>
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
              <div class="d-flex flex-column flex-xl-row justify-content-center align-items-center">
                <!-- 大圖 -->
                <div class="tablet-fix">
                  <a href="https://www.vivatv.com.tw/Product.go?itemCode=3059622022" name="【詠統】金賞禮盒 (黑蒜精6入+黑蒜頭9粒)">
                    <img src="images/act/2022/07/anniversary/images/m/product-transparent.png" class="img-fluid d-inline d-xl-none" alt="【詠統】金賞禮盒 (黑蒜精6入+黑蒜頭9粒)" title="【詠統】金賞禮盒 (黑蒜精6入+黑蒜頭9粒)">
                    <img src="images/act/2022/07/anniversary/images/product-transparent.png" class="img-fluid d-none d-xl-inline" alt="【詠統】金賞禮盒 (黑蒜精6入+黑蒜頭9粒)" title="【詠統】金賞禮盒 (黑蒜精6入+黑蒜頭9粒)">
                  </a>
                </div>
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 align-self-stretch ms-xl-3">
                  <div v-if="item.type === 'C'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-0">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name" loading="lazy" width="300" height="300"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-0">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launchdate}} <span class="fw-normal fs-5">開賣</span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- D -->
          <div id="sectionD" class="section-wrapper section-d mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column flex-xl-row justify-content-center align-items-center">
                <!-- 大圖 -->
                <div class="tablet-fix">
                  <a href="https://www.vivatv.com.tw/Product.go?itemCode=3062162022" name="【HOWGOOD好挑】 小青柚燒烤組">
                    <img src="images/act/2022/07/anniversary/images/m/product-transparent.png" class="img-fluid d-inline d-xl-none" alt="【HOWGOOD好挑】 小青柚燒烤組" title="【HOWGOOD好挑】 小青柚燒烤組">
                    <img src="images/act/2022/07/anniversary/images/product-transparent.png" class="img-fluid d-none d-xl-inline" alt="【HOWGOOD好挑】 小青柚燒烤組" title="【HOWGOOD好挑】 小青柚燒烤組">
                  </a>
                </div>
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 align-self-stretch ms-xl-3">
                  <div v-if="item.type === 'D'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-0">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name" loading="lazy" width="300" height="300"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-0">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launchdate}} <span class="fw-normal fs-5">開賣</span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- E -->
          <div id="sectionE" class="section-wrapper section-e mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column flex-xl-row justify-content-center align-items-center">
                <!-- 大圖 -->
                <div class="tablet-fix">
                  <a href="https://www.vivatv.com.tw/Product.go?itemCode=3059762022" name="CTJ 細緻GIA30分 水滴18K鑽石項鍊">
                    <img src="images/act/2022/07/anniversary/images/m/product-transparent.png" class="img-fluid d-inline d-xl-none" alt="CTJ 細緻GIA30分 水滴18K鑽石項鍊" title="CTJ 細緻GIA30分 水滴18K鑽石項鍊">
                    <img src="images/act/2022/07/anniversary/images/product-transparent.png" class="img-fluid d-none d-xl-inline" alt="CTJ 細緻GIA30分 水滴18K鑽石項鍊" title="CTJ 細緻GIA30分 水滴18K鑽石項鍊">
                  </a>
                </div>
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 align-self-stretch ms-xl-3">
                  <div v-if="item.type === 'E'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-0">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name" loading="lazy" width="300" height="300"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-0">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2">
                        <div class="item-brand text-center"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launchdate}} <span class="fw-normal fs-5">開賣</span></span></div>
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
      imgError: 'this.src="/html/images/act/2022/07/anniversary/images/img-error.jpg"',
      items: [],
      start_0731: false,
      end_0731: false,
      oneday_0731: false,
      end_0814: false,
      start_0815: false,
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = (window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/07/anniversary/json/data.json";
      var path2 = (window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/07/anniversary/json/data2.json";
      var path;

      let timeFromURL = this.getUrlParameter('t');
      var dataTime;

      let year = moment().format('YYYY');
      let month = moment().format('MM');
      let date = moment().format('DD');

      
      var timeNow = moment().format('YYYY-MM-DD HH:mm:ss');
      if (timeFromURL) {
        timeNow = moment(timeFromURL).format('YYYY-MM-DD HH:mm:ss');
      }
      var start_0731 = '2022-07-31 00:00:00';
      var end_0731 = '2022-07-31 23:59:59';

      //0731 23:59:59結束
      if ( moment(timeNow).isBefore(end_0731) ) {
        this.end_0731 = true;
      } else {
        this.end_0731 = false;
      }

      //0731 00:00:00開始
      if ( moment(timeNow).isAfter(start_0731) ) {
        this.start_0731 = true;
      } else {
        this.start_0731 = false;
      }

      if ( moment(timeNow).isBetween(start_0731, end_0731, 'minutes', '[]') ) {
        this.oneday_0731 = true;
      }

      var end_0814 = '2022-08-14 23:59:59';
      var start_0815 = '2022-08-15 00:00:00';

      //0814 23:59:59結束
      if ( moment(timeNow).isBefore(end_0814) ) {
        this.end_0814 = true;
        path = path1;
      } else {
        this.end_0814 = false;
        path = path2;
      }

      //0815 00:00:00結束
      if ( moment(timeNow).isAfter(start_0815) ) {
        this.start_0815 = true;
        console.log('start_0815: true');
        path = path2;
      } else {
        this.start_0815 = false;
        path = path1;
      }

      



      setTimeout(function(){
        // init the observer
        const options = {
          rootMargin: '0px 0px -50% 0px',
          threshold: [0, 1]
        }

        const observer = new IntersectionObserver(changeNav, options);

        // target the elements to be observed
        const section = document.querySelectorAll('.section-observer');
      
        section.forEach((el) => {
          observer.observe(el);
        });
      }, 2000);

      

      


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


      



      var eventTime = moment('2022-07-31 10:12:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');

      

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
        this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');

        // if (this.items[i].id == '3029392022') {
        //   this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.JPG');
        // } else {
        //   this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
        // }

        if (this.items[i].id == '3058912022') {
          this.$set(this.items[i], "url", 'https://www.vivatv.com.tw/Product.go?itemCode=3058902022');
        } else if (this.items[i].id == '3058762022') {
          this.$set(this.items[i], "url", 'https://www.vivatv.com.tw/Product.go?itemCode=3058772022');
        } else {
          this.$set(this.items[i], "url", 'https://www.vivatv.com.tw/Product.go?itemCode=' + this.items[i].id);
        }

        // if (this.items[i].id == '3058762022') {
        //   this.$set(this.items[i], "url", 'https://www.vivatv.com.tw/Product.go?itemCode=3058772022');
        // } else {
        //   this.$set(this.items[i], "url", 'https://www.vivatv.com.tw/Product.go?itemCode=' + this.items[i].id);
        // }
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2022/07/anniversary/images/product/'+ this.items[i].id +'/1.jpg');
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
        this.items[j].launchdate = this.items[j].start.substr(5,5);
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

        let check = this.getUrlParameter('c');
        if (check == 'all') {
          for (let j=0; j < this.items.length; j++) {
            this.items[j].available = true;
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
      

      var t = e.target.id;
      // console.log(t);


      // e.target.src = "/html/images/act/2022/07/anniversary/images/img-error.jpg";

      if (e.target.imgchecked) {
        e.target.src = "/html/images/act/2022/07/anniversary/images/img-error.jpg";
      } else {
        e.target.src = "/html/images/act/2022/07/anniversary/images/product/"+ t +".jpg";
      }

      
      e.target.imgchecked = true;
      e.target.onerror = null;

      
    }
  },
  mounted: function() {   
    this.isLoading = true;
    this.initItem();
    
    

    

    
    


    
    




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

