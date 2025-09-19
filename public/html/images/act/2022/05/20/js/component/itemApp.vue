<template>
  <div>
    <!-- S -->
    <div v-if="oneday" id="sectionS" class="section-oneday p-2 p-xl-3 mb-3 mb-xl-5 mx-auto" style="">
      
      <div class="section-body" style="">
        <div class="d-flex justify-content-center mb-3">
          <img src="images/act/2022/05/20/images/oneday-title-1.png" class="img-fluid">
        </div>
        
        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 mb-5">
          <div v-if="item.type === 'S1'" v-for="item in items" :key="item.id" class="col p-1 p-md-2 text-start d-flex flex-column item mb-2 mb-xl-3">
            <div class="item-inner d-flex flex-column flex-grow-1 p-2">
              <div v-if="item.available" class="item-body d-flex mb-2">
                <a :href="item.url" class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
              </div>
              <div v-else class="item-body d-flex mb-2">
                <a v-if="item.before" :href="item.url" class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                <a v-else class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
              </div>
              <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                <div class="item-brand py-xl-2 text-center"><a :href="item.url">{{item.brand}}</a></div>
                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-2"><a :href="item.url">{{item.name}}</a></div>
                <div class="item-price dollar-sign mb-2 text-center"><span>{{item.price}}</span></div>
                <a :href="item.url" class="btn btn-go-now"><span class="me-2">立即搶購</span><i class="fa-solid fa-play"></i></a>
              </div>
              <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                <div v-if="item.before">
                  <a :href="item.url" class="d-block w-100">
                    <div class="d-flex flex-column flex-grow-1">
                      <div class="item-brand py-xl-2 text-center"><span>{{item.brand}}</span></div>
                      <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-2"><span>{{item.name}}</span></div>
                      <div class="item-price text-center"><span class="coming-soon lh-base text-center">6/18 {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                    </div>
                  </a>
                </div>
                <div v-else class="d-flex flex-column flex-grow-1">
                  <div class="item-brand py-xl-2 text-center"><a>{{item.brand}}</a></div>
                  <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-3"><a>{{item.name}}</a></div>
                  <a class="btn btn-go-now pe-none"><span class="me-2">搶購結束</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center mb-3">
          <img src="images/act/2022/05/20/images/oneday-title-2.png" class="img-fluid">
        </div>

        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 mb-5">
          <div v-if="item.type === 'S2'" v-for="item in items" :key="item.id" class="col p-1 p-md-2 text-start d-flex flex-column item mb-2 mb-xl-3">
            <div class="item-inner d-flex flex-column flex-grow-1 p-2">
              <div v-if="item.available" class="item-body d-flex mb-2">
                <a :href="item.url" class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
              </div>
              <div v-else class="item-body d-flex mb-2">
                <a v-if="item.before" :href="item.url" class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                <a v-else class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
              </div>
              <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                <div class="item-brand py-xl-2 text-center"><a :href="item.url">{{item.brand}}</a></div>
                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-2"><a :href="item.url">{{item.name}}</a></div>
                <div class="item-price dollar-sign mb-2 text-center"><span>{{item.price}}</span></div>
                <a :href="item.url" class="btn btn-go-now"><span class="me-2">立即搶購</span><i class="fa-solid fa-play"></i></a>
              </div>
              <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                <div v-if="item.before">
                  <a :href="item.url" class="d-block w-100">
                    <div class="d-flex flex-column flex-grow-1">
                      <div class="item-brand py-xl-2 text-center"><span>{{item.brand}}</span></div>
                      <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-2"><span>{{item.name}}</span></div>
                      <div class="item-price text-center"><span class="coming-soon lh-base text-center">6/18 {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                    </div>
                  </a>
                </div>
                <div v-else class="d-flex flex-column flex-grow-1">
                  <div class="item-brand py-xl-2 text-center"><a>{{item.brand}}</a></div>
                  <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-3"><a>{{item.name}}</a></div>
                  <a class="btn btn-go-now pe-none"><span class="me-2">搶購結束</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center mb-3">
          <img src="images/act/2022/05/20/images/oneday-title-3.png" class="img-fluid">
        </div>

        <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0 mb-5">
          <div v-if="item.type === 'S3'" v-for="item in items" :key="item.id" class="col p-1 p-md-2 text-start d-flex flex-column item mb-2 mb-xl-3">
            <div class="item-inner d-flex flex-column flex-grow-1 p-2">
              <div v-if="item.available" class="item-body d-flex mb-2">
                <a :href="item.url" class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
              </div>
              <div v-else class="item-body d-flex mb-2">
                <a v-if="item.before" :href="item.url" class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                <a v-else class="d-block w-100"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
              </div>
              <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                <div class="item-brand py-xl-2 text-center"><a :href="item.url">{{item.brand}}</a></div>
                <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-2"><a :href="item.url">{{item.name}}</a></div>
                <div class="item-price dollar-sign mb-2 text-center"><span>{{item.price}}</span></div>
                <a :href="item.url" class="btn btn-go-now"><span class="me-2">立即搶購</span><i class="fa-solid fa-play"></i></a>
              </div>
              <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                <div v-if="item.before">
                  <a :href="item.url" class="d-block w-100">
                    <div v-if="item.before" class="d-flex flex-column flex-grow-1">
                      <div class="item-brand py-xl-2 text-center"><span>{{item.brand}}</span></div>
                      <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-2"><span>{{item.name}}</span></div>
                      <div class="item-price text-center"><span class="coming-soon lh-base text-center">6/18 {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                    </div>
                  </a>
                  </div>
                <div v-else class="d-flex flex-column flex-grow-1">
                  <div class="item-brand py-xl-2 text-center"><a>{{item.brand}}</a></div>
                  <div class="item-name d-flex flex-grow-1 justify-content-center align-items-start mb-3"><a>{{item.name}}</a></div>
                  <a class="btn btn-go-now pe-none"><span class="me-2">搶購結束</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        


      </div>
    </div>

    <!-- navBar -->
    <div id="navBar" class="d-flex justify-content-center btn-nav-group">  
      <button id="Btn1" class="btn btn-nav p-0 active" type="button" onclick="scrollToSection('sectionA')" data-scroll-target="#sectionA">
        <img src="images/act/2022/05/20/images/m/btn-1.png" class="img-fluid d-inline d-md-none">
        <img src="images/act/2022/05/20/images/btn-1.png" class="img-fluid d-none d-md-inline">
      </button>
      <button id="Btn2" class="btn btn-nav p-0" type="button" onclick="scrollToSection('sectionB')" data-scroll-target="#sectionB">
        <img src="images/act/2022/05/20/images/m/btn-2.png" class="img-fluid d-inline d-md-none">
        <img src="images/act/2022/05/20/images/btn-2.png" class="img-fluid d-none d-md-inline">
      </button>
      <button id="Btn3" class="btn btn-nav p-0" type="button" onclick="scrollToSection('sectionC')" data-scroll-target="#sectionC">
        <img src="images/act/2022/05/20/images/m/btn-3.png" class="img-fluid d-inline d-md-none">
        <img src="images/act/2022/05/20/images/btn-3.png" class="img-fluid d-none d-md-inline">
      </button>
      <button id="Btn4" class="btn btn-nav p-0" type="button" onclick="scrollToSection('sectionD')" data-scroll-target="#sectionD">
        <img src="images/act/2022/05/20/images/m/btn-4.png" class="img-fluid d-inline d-md-none">
        <img src="images/act/2022/05/20/images/btn-4.png" class="img-fluid d-none d-md-inline">
      </button>
      <button id="Btn5" class="btn btn-nav p-0" type="button" onclick="scrollToSection('sectionE')" data-scroll-target="#sectionE">
        <img src="images/act/2022/05/20/images/m/btn-5.png" class="img-fluid d-inline d-md-none">
        <img src="images/act/2022/05/20/images/btn-5.png" class="img-fluid d-none d-md-inline">
      </button>
    </div> 
    <div>

      <!-- A -->
      <div id="sectionA" class="section-wrapper section-a p-1 p-xl-3 mb-3">
        <div class="section-observer"></div>
        <div class="section-inner d-flex flex-column">
          <!-- 上排 -->
          <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <!-- 大圖 -->
            <div class="tablet-fix p-1 p-lg-0" style="margin-right: 3px;">
              <a href="https://www.vivatv.com.tw/Product.go?itemCode=3043692022" name="【晶華酒店】 剝皮辣椒雞粽(5入/盒)x1">
                <img src="images/act/2022/05/20/images/product/m/product-a-1.png" class="img-fluid d-inline d-md-none" alt="【晶華酒店】 剝皮辣椒雞粽(5入/盒)x1" title="【晶華酒店】 剝皮辣椒雞粽(5入/盒)x1">
                <img src="images/act/2022/05/20/images/product/product-a-1.png" class="img-fluid d-none d-md-inline" alt="【晶華酒店】 剝皮辣椒雞粽(5入/盒)x1" title="【晶華酒店】 剝皮辣椒雞粽(5入/盒)x1">
              </a>  
            </div>
            <!-- 公格 -->
            <div class="row row-cols-2 row-cols-md-2 row-cols-xl-2 g-0">
              <div v-if="item.type === 'A1'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><a :href="item.url">{{item.brand}}</a></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url">{{item.name}}</a></div>
                    <div class="item-price dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><span>{{item.brand}}</span></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><span>{{item.name}}</span></div>
                    <div class="item-price"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <!-- 下排 -->
          <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <!-- 大圖 -->
            <div class="tablet-fix p-1 p-lg-0" style="margin-right: 3px;">
              <a href="https://www.vivatv.com.tw/Product.go?itemCode=3048952022" name="【蔣府宴】 滬味菜飯粽(3入)x2盒">
                <img src="images/act/2022/05/20/images/product/product-a-2.png" class="img-fluid" alt="【蔣府宴】 滬味菜飯粽(3入)x2盒" title="【蔣府宴】 滬味菜飯粽(3入)x2盒">
              </a>  
            </div>
            <!-- 公格 -->
            <div class="row row-cols-2 row-cols-md-2 row-cols-xl-2 g-0">
              <div v-if="item.type === 'A2'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><a :href="item.url">{{item.brand}}</a></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url">{{item.name}}</a></div>
                    <div class="item-price dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><span>{{item.brand}}</span></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><span>{{item.name}}</span></div>
                    <div class="item-price"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <!-- B -->
      <div id="sectionB" class="section-wrapper section-b p-1 p-xl-3 mb-3">
        <div class="section-observer"></div>
        <div class="section-inner d-flex flex-column">
          <!-- 上排 -->
          <div class="d-flex flex-column flex-md-row-reverse justify-content-center align-items-center">
            <!-- 大圖 -->
            <div class="tablet-fix p-1 p-lg-0" style="margin-left: 3px;">
              <a href="https://www.vivatv.com.tw/Product.go?itemCode=2975192021" name="沁峯養蜂場 蜂蜜醋 (500ml)玫瑰x1+百花x1">
                <img src="images/act/2022/05/20/images/product/m/product-b-1.png" class="img-fluid d-inline d-md-none" alt="沁峯養蜂場 蜂蜜醋 (500ml)玫瑰x1+百花x1" title="沁峯養蜂場 蜂蜜醋 (500ml)玫瑰x1+百花x1">
                <img src="images/act/2022/05/20/images/product/product-b-1.png" class="img-fluid d-none d-md-inline" alt="沁峯養蜂場 蜂蜜醋 (500ml)玫瑰x1+百花x1" title="沁峯養蜂場 蜂蜜醋 (500ml)玫瑰x1+百花x1">
              </a>  
            </div>
            <!-- 公格 -->
            <div class="row row-cols-2 row-cols-md-2 row-cols-xl-2 g-0">
              <div v-if="item.type === 'B1'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><a :href="item.url">{{item.brand}}</a></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url">{{item.name}}</a></div>
                    <div class="item-price dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><span>{{item.brand}}</span></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><span>{{item.name}}</span></div>
                    <div class="item-price"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <!-- 下排 -->
          <div class="d-flex flex-column flex-md-row-reverse justify-content-center align-items-center">
            <!-- 大圖 -->
            <div class="tablet-fix p-1 p-lg-0" style="margin-left: 3px;">
              <a href="https://www.vivatv.com.tw/Product.go?itemCode=2964782021" name="【谷溜谷溜】 井裡月_12瓶(含禮盒)">
                <img src="images/act/2022/05/20/images/product/product-b-2.png" class="img-fluid" alt="【谷溜谷溜】 井裡月_12瓶(含禮盒)" title="【谷溜谷溜】 井裡月_12瓶(含禮盒)">
              </a>  
            </div>
            <!-- 公格 -->
            <div class="row row-cols-2 row-cols-md-2 row-cols-xl-2 g-0">
              <div v-if="item.type === 'B2'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><a :href="item.url">{{item.brand}}</a></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url">{{item.name}}</a></div>
                    <div class="item-price dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><span>{{item.brand}}</span></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><span>{{item.name}}</span></div>
                    <div class="item-price"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <!-- C -->
      <div id="sectionC" class="section-wrapper section-c p-1 p-xl-3 mb-3">
        <div class="section-observer"></div>
        <div class="section-inner d-flex flex-column">
          <!-- 上排 -->
          <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <!-- 大圖 -->
            <div class="tablet-fix p-1 p-lg-0" style="margin-right: 3px;">
              <a href="https://www.vivatv.com.tw/Product.go?itemCode=3045272022" name="【茶寶】靜心精油 除穢噴霧3入組(贈艾草粉)">
                <img src="images/act/2022/05/20/images/product/m/product-c-1.png" class="img-fluid d-inline d-md-none" alt="【茶寶】靜心精油 除穢噴霧3入組(贈艾草粉)" title="【茶寶】靜心精油 除穢噴霧3入組(贈艾草粉)">
                <img src="images/act/2022/05/20/images/product/product-c-1.png" class="img-fluid d-none d-md-inline" alt="【茶寶】靜心精油 除穢噴霧3入組(贈艾草粉)" title="【茶寶】靜心精油 除穢噴霧3入組(贈艾草粉)">
              </a>  
            </div>
            <!-- 公格 -->
            <div class="row row-cols-2 row-cols-md-2 row-cols-xl-2 g-0">
              <div v-if="item.type === 'C1'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><a :href="item.url">{{item.brand}}</a></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url">{{item.name}}</a></div>
                    <div class="item-price dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><span>{{item.brand}}</span></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><span>{{item.name}}</span></div>
                    <div class="item-price"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <!-- 下排 -->
          <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <!-- 大圖 -->
            <div class="tablet-fix p-1 p-lg-0" style="margin-right: 3px;">
              <a href="https://www.vivatv.com.tw/Product.go?itemCode=3005192021" name="招財鎮宅琉璃 雙神獸(大)貔貅(天鹿)">
                <img src="images/act/2022/05/20/images/product/product-c-2.png" class="img-fluid" alt="招財鎮宅琉璃 雙神獸(大)貔貅(天鹿)" title="招財鎮宅琉璃 雙神獸(大)貔貅(天鹿)">
              </a>  
            </div>
            <!-- 公格 -->
            <div class="row row-cols-2 row-cols-md-2 row-cols-xl-2 g-0">
              <div v-if="item.type === 'C2'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><a :href="item.url">{{item.brand}}</a></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url">{{item.name}}</a></div>
                    <div class="item-price dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><span>{{item.brand}}</span></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><span>{{item.name}}</span></div>
                    <div class="item-price"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <!-- D -->
      <div id="sectionD" class="section-wrapper section-d p-1 p-xl-3 mb-3">
        <div class="section-observer"></div>
        <div class="section-inner d-flex flex-column">
          <!-- 上排 -->
          <div class="d-flex flex-column flex-md-row-reverse justify-content-center align-items-center">
            <!-- 大圖 -->
            <div class="tablet-fix p-1 p-lg-0" style="margin-left: 3px;">
              <a href="https://www.vivatv.com.tw/Product.go?itemCode=3037672022" name="【吉品保健】 鳳梨雙酵飲14入/盒(單盒)">
                <img src="images/act/2022/05/20/images/product/m/product-d-1.png" class="img-fluid d-inline d-md-none" alt="【吉品保健】 鳳梨雙酵飲14入/盒(單盒)" title="【吉品保健】 鳳梨雙酵飲14入/盒(單盒)">
                <img src="images/act/2022/05/20/images/product/product-d-1.png" class="img-fluid d-none d-md-inline" alt="【吉品保健】 鳳梨雙酵飲14入/盒(單盒)" title="【吉品保健】 鳳梨雙酵飲14入/盒(單盒)">
              </a>  
            </div>
            <!-- 公格 -->
            <div class="row row-cols-2 row-cols-md-2 row-cols-xl-2 g-0">
              <div v-if="item.type === 'D1'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><a :href="item.url">{{item.brand}}</a></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url">{{item.name}}</a></div>
                    <div class="item-price dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><span>{{item.brand}}</span></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><span>{{item.name}}</span></div>
                    <div class="item-price"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <!-- 下排 -->
          <div class="d-flex flex-column flex-md-row-reverse justify-content-center align-items-center">
            <!-- 大圖 -->
            <div class="tablet-fix p-1 p-lg-0" style="margin-left: 3px;">
              <a href="https://www.vivatv.com.tw/Product.go?itemCode=3046812022" name="【吉品保健】療肺草清潤飴 80克±3%(補充包)*5包">
                <img src="images/act/2022/05/20/images/product/product-d-2.png" class="img-fluid" alt="【吉品保健】療肺草清潤飴 80克±3%(補充包)*5包" title="【吉品保健】療肺草清潤飴 80克±3%(補充包)*5包">
              </a>  
            </div>
            <!-- 公格 -->
            <div class="row row-cols-2 row-cols-md-2 row-cols-xl-2 g-0">
              <div v-if="item.type === 'D2'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><a :href="item.url">{{item.brand}}</a></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url">{{item.name}}</a></div>
                    <div class="item-price dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><span>{{item.brand}}</span></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><span>{{item.name}}</span></div>
                    <div class="item-price"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    	<!-- E -->
      <div id="sectionE" class="section-wrapper section-e p-1 p-xl-3 mb-3">
        <div class="section-observer"></div>
        <div class="section-inner d-flex flex-column">
          <!-- 上排 -->
          <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <!-- 大圖 -->
            <div class="tablet-fix p-1 p-lg-0" style="margin-right: 3px;">
              <a href="https://www.vivatv.com.tw/Product.go?itemCode=3040452022" name="鍋寶 原礦大理石 不沾鍋深炒鍋30cm">
                <img src="images/act/2022/05/20/images/product/m/product-e-1.png" class="img-fluid d-inline d-md-none" alt="鍋寶 原礦大理石 不沾鍋深炒鍋30cm" title="鍋寶 原礦大理石 不沾鍋深炒鍋30cm">
                <img src="images/act/2022/05/20/images/product/product-e-1.png" class="img-fluid d-none d-md-inline" alt="鍋寶 原礦大理石 不沾鍋深炒鍋30cm" title="鍋寶 原礦大理石 不沾鍋深炒鍋30cm">
              </a>  
            </div>
            <!-- 公格 -->
            <div class="row row-cols-2 row-cols-md-2 row-cols-xl-2 g-0">
              <div v-if="item.type === 'E1'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><a :href="item.url">{{item.brand}}</a></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url">{{item.name}}</a></div>
                    <div class="item-price dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><span>{{item.brand}}</span></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><span>{{item.name}}</span></div>
                    <div class="item-price"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          <!-- 下排 -->
          <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <!-- 大圖 -->
            <div class="tablet-fix p-1 p-lg-0" style="margin-right: 3px;">
              <a href="https://www.vivatv.com.tw/Product.go?itemCode=3030432022" name="【La proie 萊博瑞】 女式休閒健走鞋">
                <img src="images/act/2022/05/20/images/product/product-e-2.png" class="img-fluid" alt="【La proie 萊博瑞】 女式休閒健走鞋" title="【La proie 萊博瑞】 女式休閒健走鞋">
              </a>  
            </div>
            <!-- 公格 -->
            <div class="row row-cols-2 row-cols-md-2 row-cols-xl-2 g-0">
              <div v-if="item.type === 'E2'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><a :href="item.url">{{item.brand}}</a></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url">{{item.name}}</a></div>
                    <div class="item-price dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand py-2"><span>{{item.brand}}</span></div>
                    <div class="item-name d-flex flex-grow-1 justify-content-start align-items-start"><span>{{item.name}}</span></div>
                    <div class="item-price"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
      imgError: 'this.src="/html/images/act/2022/05/20/images/img-error.jpg"',
      items: [],
      wave2: false,
      wave3: false,
      oneday: false
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = '/html/images/act/2022/05/20/json/data.json';
      // var path2 = '/html/images/act/2022/05/20/json/data2.json';
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
        $('#Btn1, #Btn2, #sectionA, #sectionB').hide();
        $('#Btn3').addClass('active');
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
        if (this.items[i].id == '2957712021') {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.png');
        } else {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
        }
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2022/05/20/images/product/'+ this.items[i].id +'/1.jpg');
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


      // e.target.src = "/html/images/act/2022/05/20/images/img-error.jpg";

      if (e.target.imgchecked) {
        e.target.src = "/html/images/act/2022/05/20/images/img-error.jpg";
      } else {
        e.target.src = "/html/images/act/2022/05/20/images/product/"+ t +".jpg";
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

    const observer = new IntersectionObserver(changeNav, options);

    // target the elements to be observed
    const section = document.querySelectorAll('.section-observer');
    setTimeout(function(){
      section.forEach((el) => {
        observer.observe(el);
      });
    }, 2000);
    




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

