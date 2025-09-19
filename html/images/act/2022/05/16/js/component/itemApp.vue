<template>
  <div>
    <div v-if="wave2">
      <div class="section-oneday p-2 p-xl-3 mb-3 mb-xl-5">
        <div class="section-header d-block d-md-none">
          <img src="images/act/2022/05/16/images/m/oneday-title.png" class="img-fluid">
        </div>
        <div class="section-header d-none d-md-block">
          <img src="images/act/2022/05/16/images/oneday-title.png" class="img-fluid">
        </div>
        <div class="section-body shadow-custom" style="">
          <div class="d-flex justify-content-center countdown-timer">
            <div id="countDownTimer" class="mb-2 mt-md-3 fs-4">
              <span>倒數</span>
              <span class="countdown fw-normal"></span>
            </div>
          </div>
          <div class="row row-cols-2 row-cols-md-3 row-cols-xl-5 g-0 px-2">
            <div v-if="item.type === 'S'" v-for="item in items" :key="item.id" class="col p-1 p-md-2 text-start d-flex flex-column item mb-2 mb-xl-3">
              <div class="item-inner d-flex flex-column flex-grow-1 p-2 bg-white">
                <div v-if="item.available" class="item-body d-flex mb-2">
                  <a :href="item.url" class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                </div>
                <div v-else class="item-body d-flex mb-2">
                  <a class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                </div>
                <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                  <div class="item-brand bg-white py-2"><a :href="item.url" class="text-dark" target="_blank">{{item.brand}}</a></div>
                  <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url" class="text-dark" target="_blank">{{item.name}}</a></div>
                  <div class="item-price bg-white dollar-sign"><span>{{item.price}}</span></div>
                </div>
                <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                  <div class="item-brand bg-white py-2"><span class="text-dark">{{item.brand}}</span></div>
                  <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><span class="text-dark">{{item.name}}</span></div>
                  <div class="item-price bg-white"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-wrapper section-a p-2 p-xl-3 mb-3 mb-xl-5">
        <div class="section-inner p-2 p-xl-3 d-flex flex-column flex-xl-row shadow-custom">
          <div class="section-header d-flex justify-content-center align-items-center flex-shrink-0">
            <div class="d-block d-xl-none p-0 position-relative" style="margin-bottom: -0.5rem;">
              <div class="w-100 text-center">
                <a href="https://www.vivatv.com.tw/Product.go?itemCode=2988502021" name="輝葉 追夢椅HY-5083(魔力紅)" target="_blank">
                  <img src="images/act/2022/05/16/images/m/wave-2/product-a.png" class="img-fluid" alt="輝葉 追夢椅HY-5083(魔力紅)" title="輝葉 追夢椅HY-5083(魔力紅)">
                </a>
              </div>
            </div>
            <div class="d-none d-xl-block p-0 position-relative">
              <div class="w-100">
                <a href="https://www.vivatv.com.tw/Product.go?itemCode=2988502021" name="輝葉 追夢椅HY-5083(魔力紅)" target="_blank">
                  <img src="images/act/2022/05/16/images/wave-2/product-a.png" class="img-fluid" alt="輝葉 追夢椅HY-5083(魔力紅)" title="輝葉 追夢椅HY-5083(魔力紅)">
                </a>
              </div>
            </div>
          </div>
          <div class="section-body d-flex">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0">
              <div v-if="item.type === 'A'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2 bg-white shadow-sm">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>

                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand bg-white py-2"><a :href="item.url" class="text-dark" target="_blank">{{item.brand}}</a></div>
                    <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url" class="text-dark" target="_blank">{{item.name}}</a></div>
                    <div class="item-price bg-white dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand bg-white py-2"><span class="text-dark">{{item.brand}}</span></div>
                    <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><span class="text-dark">{{item.name}}</span></div>
                    <div class="item-price bg-white"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          
        </div>
      </div>
      <div class="section-wrapper section-b p-2 p-xl-3 mb-3 mb-xl-5">
        <div class="section-inner p-2 p-xl-3 d-flex flex-column flex-xl-row shadow-custom">
          <div class="section-header d-flex justify-content-center align-items-center flex-shrink-0">
            <div class="d-block d-xl-none p-0 position-relative">
              <div class="w-100 text-center">
                <a href="https://www.vivatv.com.tw/Product.go?itemCode=3037662022" name="【吉品保健】頂級膠原胜肽 巧克力禮盒(16片/盒)*3盒" target="_blank">
                  <img src="images/act/2022/05/16/images/m/wave-2/product-b.png" class="img-fluid" alt="【吉品保健】頂級膠原胜肽 巧克力禮盒(16片/盒)*3盒" title="【吉品保健】頂級膠原胜肽 巧克力禮盒(16片/盒)*3盒">
                </a>
              </div>
            </div>
            <div class="d-none d-xl-block p-0 position-relative">
              <div class="w-100">
                <a href="https://www.vivatv.com.tw/Product.go?itemCode=3037662022" name="【吉品保健】頂級膠原胜肽 巧克力禮盒(16片/盒)*3盒" target="_blank">
                  <img src="images/act/2022/05/16/images/wave-2/product-b.png" class="img-fluid" alt="【吉品保健】頂級膠原胜肽 巧克力禮盒(16片/盒)*3盒" title="【吉品保健】頂級膠原胜肽 巧克力禮盒(16片/盒)*3盒">
                </a>
              </div>
            </div>
          </div>
          <div class="section-body d-flex">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0">
              <div v-if="item.type === 'B'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2 bg-white shadow-sm">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>

                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand bg-white py-2"><a :href="item.url" class="text-dark" target="_blank">{{item.brand}}</a></div>
                    <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url" class="text-dark" target="_blank">{{item.name}}</a></div>
                    <div class="item-price bg-white dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand bg-white py-2"><span class="text-dark">{{item.brand}}</span></div>
                    <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><span class="text-dark">{{item.name}}</span></div>
                    <div class="item-price bg-white"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          
        </div>
      </div>
      <div class="section-wrapper section-c p-2 p-xl-3 mb-3 mb-xl-5">
        <div class="section-inner p-2 p-xl-3 d-flex flex-column flex-xl-row shadow-custom">
          <div class="section-header d-flex justify-content-center align-items-center flex-shrink-0">
            <div class="d-block d-xl-none p-0 position-relative" style="margin-top: -1rem;">
              <div class="w-100 text-center">
                <a href="https://www.vivatv.com.tw/Product.go?itemCode=3041522022" name="【EliteBakery】  法式經典烤乳酪(6吋)" target="_blank">
                  <img src="images/act/2022/05/16/images/m/wave-2/product-c.png" class="img-fluid" alt="【EliteBakery】  法式經典烤乳酪(6吋)" title="【EliteBakery】  法式經典烤乳酪(6吋)">
                </a>
              </div>
            </div>
            <div class="d-none d-xl-block p-0 position-relative">
              <div class="w-100">
                <a href="https://www.vivatv.com.tw/Product.go?itemCode=3041522022" name="【EliteBakery】  法式經典烤乳酪(6吋)" target="_blank">
                  <img src="images/act/2022/05/16/images/wave-2/product-c.png" class="img-fluid" alt="【EliteBakery】  法式經典烤乳酪(6吋)" title="【EliteBakery】  法式經典烤乳酪(6吋)">
                </a>
              </div>
            </div>
          </div>
          <div class="section-body d-flex">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0">
              <div v-if="item.type === 'C'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2 bg-white shadow-sm">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>

                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand bg-white py-2"><a :href="item.url" class="text-dark" target="_blank">{{item.brand}}</a></div>
                    <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url" class="text-dark" target="_blank">{{item.name}}</a></div>
                    <div class="item-price bg-white dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand bg-white py-2"><span class="text-dark">{{item.brand}}</span></div>
                    <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><span class="text-dark">{{item.name}}</span></div>
                    <div class="item-price bg-white"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
          
        </div>
      </div>
    </div>
    <div v-else>
      <div class="section-wrapper section-a p-2 mb-3 mb-xl-5">
        <div class="section-inner d-flex flex-column flex-xl-row">
          <div class="section-header d-flex justify-content-center align-items-center flex-shrink-0">
            <div class="d-block d-xl-none p-0 position-relative">
              <div class="w-100 text-center">
                <a href="https://www.vivatv.com.tw/Product.go?itemCode=3043692022" name="【晶華酒店】剝皮辣椒雞粽(5入/盒)x1" target="_blank">
                  <img src="images/act/2022/05/16/images/m/product-a.png" class="img-fluid" alt="【晶華酒店】剝皮辣椒雞粽(5入/盒)x1" title="【晶華酒店】剝皮辣椒雞粽(5入/盒)x1">
                </a>
              </div>
            </div>
            <div class="d-none d-xl-block p-0 position-relative">
              <div class="w-100">
                <a href="https://www.vivatv.com.tw/Product.go?itemCode=3043692022" name="【晶華酒店】剝皮辣椒雞粽(5入/盒)x1" target="_blank">
                  <img src="images/act/2022/05/16/images/product-a.png" class="img-fluid" alt="【晶華酒店】剝皮辣椒雞粽(5入/盒)x1" title="【晶華酒店】剝皮辣椒雞粽(5入/盒)x1">
                </a>
              </div>
            </div>
          </div>
          <div class="section-body d-flex">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0">
              <div v-if="item.type === 'A'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2 bg-white shadow-sm">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>

                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand bg-white py-2"><a :href="item.url" class="text-dark" target="_blank">{{item.brand}}</a></div>
                    <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url" class="text-dark" target="_blank">{{item.name}}</a></div>
                    <div class="item-price bg-white dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand bg-white py-2"><span class="text-dark">{{item.brand}}</span></div>
                    <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><span class="text-dark">{{item.name}}</span></div>
                    <div class="item-price bg-white"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <div class="section-wrapper section-b p-2 mb-3 mb-xl-5">
        <div class="section-inner d-flex flex-column flex-xl-row">
          <div class="section-header d-flex justify-content-center align-items-center flex-shrink-0">
            <div class="d-block d-xl-none p-0 position-relative">
              <div class="w-100 text-center">
                <a href="https://www.vivatv.com.tw/Product.go?itemCode=2975192021" name="沁峯養蜂場 蜂蜜醋 (500ml)玫瑰x1+百花x1" target="_blank">
                  <img src="images/act/2022/05/16/images/m/product-b.png" class="img-fluid" alt="沁峯養蜂場 蜂蜜醋 (500ml)玫瑰x1+百花x1" title="沁峯養蜂場 蜂蜜醋 (500ml)玫瑰x1+百花x1">
                </a>
              </div>
            </div>
            <div class="d-none d-xl-block p-0 position-relative">
              <div class="w-100">
                <a href="https://www.vivatv.com.tw/Product.go?itemCode=2975192021" name="沁峯養蜂場 蜂蜜醋 (500ml)玫瑰x1+百花x1" target="_blank">
                  <img src="images/act/2022/05/16/images/product-b.png" class="img-fluid" alt="沁峯養蜂場 蜂蜜醋 (500ml)玫瑰x1+百花x1" title="沁峯養蜂場 蜂蜜醋 (500ml)玫瑰x1+百花x1">
                </a>
              </div>
            </div>
          </div>
          <div class="section-body d-flex">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0">
              <div v-if="item.type === 'B'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2 bg-white shadow-sm">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>

                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand bg-white py-2"><a :href="item.url" class="text-dark" target="_blank">{{item.brand}}</a></div>
                    <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url" class="text-dark" target="_blank">{{item.name}}</a></div>
                    <div class="item-price bg-white dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand bg-white py-2"><span class="text-dark">{{item.brand}}</span></div>
                    <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><span class="text-dark">{{item.name}}</span></div>
                    <div class="item-price bg-white"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
      <div class="section-wrapper section-c p-2 mb-3 mb-xl-5">
        <div class="section-inner d-flex flex-column flex-xl-row">
          <div class="section-header d-flex justify-content-center align-items-center flex-shrink-0">
            <div class="d-block d-xl-none p-0 position-relative">
              <div class="w-100 text-center">
                <a href="https://www.vivatv.com.tw/Product.go?itemCode=3037672022" name="【吉品保健】鳳梨雙酵飲14入/盒(單盒)" target="_blank">
                  <img src="images/act/2022/05/16/images/m/product-c.png" class="img-fluid" alt="【吉品保健】鳳梨雙酵飲14入/盒(單盒)" title="【吉品保健】鳳梨雙酵飲14入/盒(單盒)">
                </a>
              </div>
            </div>
            <div class="d-none d-xl-block p-0 position-relative">
              <div class="w-100">
                <a href="https://www.vivatv.com.tw/Product.go?itemCode=3037672022" name="【吉品保健】鳳梨雙酵飲14入/盒(單盒)" target="_blank">
                  <img src="images/act/2022/05/16/images/product-c.png" class="img-fluid" alt="【吉品保健】鳳梨雙酵飲14入/盒(單盒)" title="【吉品保健】鳳梨雙酵飲14入/盒(單盒)">
                </a>
              </div>
            </div>
          </div>
          <div class="section-body d-flex">
            <div class="row row-cols-2 row-cols-md-3 row-cols-xl-3 g-0">
              <div v-if="item.type === 'C'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                <div class="item-inner d-flex flex-column flex-grow-1 p-2 bg-white shadow-sm">
                  <div v-if="item.available" class="item-body d-flex mb-0">
                    <a :href="item.url" class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>
                  <div v-else class="item-body d-flex mb-0">
                    <a class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                  </div>

                  <div v-if="item.available" class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand bg-white py-2"><a :href="item.url" class="text-dark" target="_blank">{{item.brand}}</a></div>
                    <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><a :href="item.url" class="text-dark" target="_blank">{{item.name}}</a></div>
                    <div class="item-price bg-white dollar-sign"><span>{{item.price}}</span></div>
                  </div>
                  <div v-else class="item-footer px-xl-1 d-flex flex-column flex-grow-1">
                    <div class="item-brand bg-white py-2"><span class="text-dark">{{item.brand}}</span></div>
                    <div class="item-name bg-white d-flex flex-grow-1 justify-content-start align-items-start"><span class="text-dark">{{item.name}}</span></div>
                    <div class="item-price bg-white"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
      imgError: 'this.src="/html/images/act/2022/05/16/images/img-error.jpg"',
      items: [],
      wave2: false,
      wave3: false
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = '/html/images/act/2022/05/16/json/data.json';
      var path2 = '/html/images/act/2022/05/16/json/data2.json';
      var path;

      let timeFromURL = this.getUrlParameter('t');
      var dataTime;

      let year = moment().format('YYYY');
      let month = moment().format('MM');
      let date = moment().format('DD');

      /*if (timeFromURL) {
        // dataTime = timeFromURL.substr(4, 4);
        dataTime = timeFromURL;
        console.log('dataTime: ' + dataTime);
        if (dataTime.substr(0,8) == '20230516') {
          this.wave2 = true;
          console.log('wave2');
        } else if (dataTime.substr(0,8) >= '20230517') {
          this.wave3 = true;
          console.log('wave3');
        } else {
          console.log('wave1');
        }
      } else {
        dataTime = year + month + date;
        console.log('dataTime: ' + dataTime);
        if (dataTime.substr(0,8) == '20230516') {
          this.wave2 = true;
          console.log('wave2');
        } else if (dataTime.substr(0,8) >= '20230517') {
          this.wave3 = true;
          console.log('wave3');
        } else {
          //do nothing
          console.log('wave1');
        }
      }*/
      

      
      // for (let j=0; j < this.items.length; j++) {
      //   let targetStart = moment.utc(this.items[j].start, 'YYYY-MM-DD[T]HH:mm[Z]');
        
        
      //   this.items[j].launch = this.items[j].start.substr(11,5);
        
      //   if (moment(targetStart).isAfter(localTimeUtc)) {
      //     this.items[j].available = false;
      //   } else {
      //     this.items[j].available = true;
      //   }

      // }


      



      /*var eventTime = moment('2022-05-16 09:00:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');

      

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
      
      
      
      

      
      /*if (dataTime.substr(0,8) == '20230516') {
        path = path2;
      } else if (dataTime.substr(0,8) >= '20230516') {
        path = path2;
      } else {
        path = path1;
      }*/
      
      path = path1;
      

      

      

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
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2022/05/16/images/product/'+ this.items[i].id +'/1.jpg');
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
        
        // this.items[j].launch = this.items[j].start.substr(11,5);
        // console.log('this.items[j].start: '+ this.items[j].start);
        // this.items[j].launch = this.items[j].start.substr(11,5);

        this.items[j].launch = this.items[j].start.substr(11,5);
        // this.items[j].launch = moment(this.items[j].start).local().format('MM-DD[T]HH:mm[Z]');
        // localTime = moment(stillUtc).local().format('YYYY-MM-DD[T]HH:mm[Z]');
        if (moment(targetStart).isAfter(localTimeUtc)) {
          this.items[j].available = false;
        } else {
          this.items[j].available = true;
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


      // e.target.src = "/html/images/act/2022/05/16/images/img-error.jpg";

      if (e.target.imgchecked) {
        e.target.src = "/html/images/act/2022/05/16/images/img-error.jpg";
      } else {
        e.target.src = "/html/images/act/2022/05/16/images/product/"+ t +".jpg";
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

