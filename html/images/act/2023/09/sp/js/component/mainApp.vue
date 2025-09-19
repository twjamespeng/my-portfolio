<template>
  <div>
    <div class="position-relative">
      

      
      <!-- <video class="wave1" loop playsinline muted>
        <source src="images/act/2023/09/sp/images/BB_0c852b20-c7e0-4f92-822e-99b1b85fd706_FPpreview.mp4" type="video/mp4">
      </video> -->
      

      <div v-if="wave1" class="landing-main wave1 container-fluid position-relative p-0" style="z-index: 1">
        <div id="scene" class="w-100 position-relative overflow-hidden">
          <div class="landing-background pe-none us-none">
            <picture>
              <source srcset="images/act/2023/09/sp/images/wave1/bg-main.jpg" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/09/sp/images/wave1/mobile/bg-main.jpg" alt="landing">
            </picture>
          </div>
          <div class="landing-logo pe-none us-none animated fadeInUp">
            <picture>
              <source srcset="images/act/2023/09/sp/images/wave1/landing-logo.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/09/sp/images/wave1/mobile/landing-logo.png" alt="landing">
            </picture>
          </div>
        </div>
      </div>  

      <div v-if="wave2" class="landing-main wave2 container-fluid position-relative p-0" style="z-index: 1">
        <div id="scene" class="w-100 position-relative overflow-hidden">
          <div class="landing-background pe-none us-none">
            <picture>
              <source srcset="images/act/2023/09/sp/images/wave2/landing-bg.jpg" media="(min-width: 992px)">
              <img class="w-100 pe-none us-none" src="images/act/2023/09/sp/images/wave2/mobile/landing-bg.jpg" alt="landing">
            </picture>
          </div>
          
          <div class="position-absolute top-0 bottom-0 start-0 end-0 overflow-hidden">
            <div class="landing-logo pe-none us-none anima">
              <picture>
                <source srcset="images/act/2023/09/sp/images/wave2/landing-logo.png" media="(min-width: 992px)">
                <img class="w-100 pe-none us-none" src="images/act/2023/09/sp/images/wave2/mobile/landing-logo.png" alt="landing">
              </picture>
            </div>
            
            <div class="landing-layer-4 pe-none us-none">
              <picture>
                <source srcset="images/act/2023/09/sp/images/wave2/landing-layer-4.png" media="(min-width: 992px)">
                <img class="w-100 pe-none us-none" src="images/act/2023/09/sp/images/wave2/mobile/landing-layer-4.png" alt="landing">
              </picture>
            </div>

            <div class="sky-lantern-2 sky-lantern-back"></div>
            <div class="sky-lantern-2 sky-lantern-front"></div>

            <div class="sky-lantern-4 sky-lantern-back"></div>
            <div class="sky-lantern-4 sky-lantern-front"></div>

            <div class="sky-lantern-6 sky-lantern-back"></div>
            <div class="sky-lantern-6 sky-lantern-front"></div>

            <div class="landing-layer-3 pe-none us-none">
              <picture>
                <source srcset="images/act/2023/09/sp/images/wave2/landing-layer-3.png" media="(min-width: 992px)">
                <img class="w-100 pe-none us-none" src="images/act/2023/09/sp/images/wave2/mobile/landing-layer-3.png" alt="landing">
              </picture>
            </div>

            

            <div class="landing-layer-2 pe-none us-none">
              <picture>
                <source srcset="images/act/2023/09/sp/images/wave2/landing-layer-2.png" media="(min-width: 992px)">
                <img class="w-100 pe-none us-none" src="images/act/2023/09/sp/images/wave2/mobile/landing-layer-2.png" alt="landing">
              </picture>
            </div>

            <div class="sky-lantern-1 sky-lantern-back"></div>
            <div class="sky-lantern-1 sky-lantern-front"></div>

            <div class="sky-lantern-3 sky-lantern-back"></div>
            <div class="sky-lantern-3 sky-lantern-front"></div>

            <div class="sky-lantern-5 sky-lantern-back"></div>
            <div class="sky-lantern-5 sky-lantern-front"></div>

            <div class="landing-layer-1 pe-none us-none">
              <picture>
                <source srcset="images/act/2023/09/sp/images/wave2/landing-layer-1.png" media="(min-width: 992px)">
                <img class="w-100 pe-none us-none" src="images/act/2023/09/sp/images/wave2/mobile/landing-layer-1.png" alt="landing">
              </picture>
            </div>
            <div class="landing-top-cloud pe-none us-none">
              <picture>
                <source srcset="images/act/2023/09/sp/images/wave2/landing-top-cloud.png" media="(min-width: 992px)">
                <img class="w-100 pe-none us-none" src="images/act/2023/09/sp/images/wave2/mobile/landing-top-cloud.png" alt="landing">
              </picture>
            </div>
          </div>
        </div>
      </div>

      <div v-if="wave3" class="landing-main wave3 container-fluid position-relative p-0" style="z-index: 1">
        <div id="scene" class="w-100 position-relative overflow-hidden">
          <div class="landing-background pe-none us-none">
            <picture>
              <source srcset="images/act/2023/09/sp/images/wave3/bg-main.jpg" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/09/sp/images/wave3/mobile/bg-main.jpg" alt="landing">
            </picture>
          </div>
          <div class="position-absolute top-0 bottom-0 start-0 end-0 overflow-hidden">
            <div class="landing-cloud-1 pe-none us-none">
              <picture>
                <source srcset="images/act/2023/09/sp/images/wave3/landing-cloud-1.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/09/sp/images/wave3/mobile/landing-cloud-1.png" alt="landing">
              </picture>
            </div>
            <div class="landing-cloud-2 pe-none us-none">
              <picture>
                <source srcset="images/act/2023/09/sp/images/wave3/landing-cloud-2.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/09/sp/images/wave3/mobile/landing-cloud-2.png" alt="landing">
              </picture>
            </div>
            <div class="landing-cloud-3 pe-none us-none">
              <picture>
                <source srcset="images/act/2023/09/sp/images/wave3/landing-cloud-1.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/09/sp/images/wave3/mobile/landing-cloud-1.png" alt="landing">
              </picture>
            </div>
            <div class="landing-left-tree pe-none us-none">
              <picture>
                <source srcset="images/act/2023/09/sp/images/wave3/landing-left-tree.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/09/sp/images/wave3/mobile/landing-left-tree.png" alt="landing">
              </picture>
            </div>
            <div class="landing-right-tree pe-none us-none">
              <picture>
                <source srcset="images/act/2023/09/sp/images/wave3/landing-right-tree.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/09/sp/images/wave3/mobile/landing-right-tree.png" alt="landing">
              </picture>
            </div>
            <div class="landing-logo pe-none us-none animated fadeInUp">
              <picture>
                <source srcset="images/act/2023/09/sp/images/wave3/landing-logo.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/09/sp/images/wave3/mobile/landing-logo.png" alt="landing">
              </picture>
            </div>  
          </div>
          
        </div>
      </div>  

      

      <!-- 左選單 -->
      <div v-if="wave1" class="wave1 side-menu-wrapper-left">
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-3">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/FE26D074E2855E90E05400144FF82309'">共享美味食光</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">品味時尚生活</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/tertiaryCategory/DE2BB33E6F851408E05400144FF9CEC6'">慢下來享食光</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/flagShip/flagshipBrand/C5DF6D117D7F00E9E05400144FF9CEC6'">滿足挑剔味蕾</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/tertiaryCategory/EAD5CAC786D04F82E05400144FF82309'">打造健康體質</button>
            </div>

            <div class="d-flex flex-column side-menu-group-2">
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
      <div v-if="wave1" class="wave1 side-menu-wrapper-right">
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-3">
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C">感恩回饋好禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D">限時加碼好康</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B">新客首購送禮</button>
              <button v-if="end_0920" class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-F">抽晶華鳳凰酥</button>
              <button v-if="start_0912" class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E">抽美味燒肉組</button>
            </div>
            
            <div class="d-flex flex-column side-menu-group-2">
              <a href="#sectionA" class="btn rounded-0">秋月美好獻禮</a>
              <a href="#sectionB" class="btn rounded-0">迎秋美食饗宴</a>
              <a href="#sectionC" class="btn rounded-0">微秋換季保養</a>
              <a href="#sectionD" class="btn rounded-0">清掃秋鬱心情</a>
              <a href="#sectionE" class="btn rounded-0">秋涼療癒趣遊</a>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>

      <!-- 左選單 -->
      <div v-if="wave2" class="wave2 side-menu-wrapper-left">
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-3">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/FE26D074E2855E90E05400144FF82309'">共享美味食光</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">品味時尚生活</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/tertiaryCategory/DE2BB33E6F851408E05400144FF9CEC6'">慢下來享食光</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/flagShip/flagshipBrand/C5DF6D117D7F00E9E05400144FF9CEC6'">滿足挑剔味蕾</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/tertiaryCategory/EAD5CAC786D04F82E05400144FF82309'">打造健康體質</button>
            </div>

            <div class="d-flex flex-column side-menu-group-2">
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
      <div v-if="wave2" class="wave2 side-menu-wrapper-right">
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-3">
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C">感恩回饋好禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D">限時加碼好康</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B">新客首購送禮</button>
              <button v-if="end_0920" class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-F">抽晶華鳳凰酥</button>
              <button v-if="start_0912" class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E">抽美味燒肉組</button>
            </div>
            
            <div class="d-flex flex-column side-menu-group-2">
              <a href="#sectionA" class="btn rounded-0">秋月美好獻禮</a>
              <a href="#sectionB" class="btn rounded-0">迎秋美食饗宴</a>
              <a href="#sectionC" class="btn rounded-0">微秋換季保養</a>
              <a href="#sectionD" class="btn rounded-0">清掃秋鬱心情</a>
              <a href="#sectionE" class="btn rounded-0">秋涼療癒趣遊</a>
            </div>

            <!-- <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div> -->

          </div>
        </div>
      </div>

      <!-- 左選單 -->
      <div v-if="wave3" class="wave3 side-menu-wrapper-left">
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-3">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/FE26D074E2855E90E05400144FF82309'">共享美味食光</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">品味時尚生活</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/tertiaryCategory/DE2BB33E6F851408E05400144FF9CEC6'">慢下來享食光</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/flagShip/flagshipBrand/C5DF6D117D7F00E9E05400144FF9CEC6'">滿足挑剔味蕾</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/tertiaryCategory/EAD5CAC786D04F82E05400144FF82309'">打造健康體質</button>
            </div>

            <div class="d-flex flex-column side-menu-group-2">
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

            <div class="d-flex flex-column side-menu-group-1 pt-3">
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C">感恩回饋好禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D">限時加碼好康</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B">新客首購送禮</button>
              <button v-if="end_0920" class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-F">抽晶華鳳凰酥</button>
              <button v-if="start_0912" class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E">抽美味燒肉組</button>
            </div>
            
            <div class="d-flex flex-column side-menu-group-2">
              <a href="#sectionB" class="btn rounded-0">迎秋美食饗宴</a>
              <a href="#sectionC" class="btn rounded-0">微秋換季保養</a>
              <a href="#sectionD" class="btn rounded-0">清掃秋鬱心情</a>
              <a href="#sectionE" class="btn rounded-0">秋涼療癒趣遊</a>
              <a href="#sectionA" class="btn rounded-0">秋月美好獻禮</a>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>

      

      <!-- 公格商品 itemApp -->
      <div class="container-fluid container-item-app p-0 position-relative" style="z-index: 103;">
        <div v-if="wave2" id="shootingStars" class="sticky-top w-100">
          <div class="sky">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <item-app></item-app>  
      </div>

      <!-- modal -->
      <modal-app></modal-app>


      

      


      

      

    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      youtubeURL: '',
      month: '',
      wave1: false,
      wave2: false,
      wave3: false,
      end_0920: false,
      start_0912: false
    };
  },
  components: {
    'item-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2023/09/sp/js/component/itemApp.vue"),
    'modal-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2023/09/sp/js/component/modalApp.vue")
  },
  methods: {
    init: function() {
      var main = this;
      main.promoCheck();

      // setTimeout(()=>{


      // const swpD = new Swiper('#swpD', {
        
      //   loop: true,
      //   slidesPerView: 5,
      //   slidesPerGroup: 1,
      //   speed: 10000,
      //   autoplay: {
      //     delay: 0,
      //   },
      //   spaceBetween: 0,
      //   effect: 'slide',
        
      // });
      

      // }, 500);



      

      // let m = 'febuary';

      /*let timeFromURL = this.getUrlParameter('t');
      if (timeFromURL) {
        let monthFromURL = timeFromURL.substr(4, 2);
        let mmddFromURL = timeFromURL.substr(4, 4);
        console.log('mmddFromURL: ' + mmddFromURL);

        if (timeFromURL.substr(0,8) == '20230424') {
          this.wave2 = true;

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/09/sp/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/09/sp/images/og-wave2.jpg");
        }

      } else {
        let year = moment().format('YYYY');
        let month = moment().format('MM');
        let date = moment().format('DD');

        

        let yyyymmdd = year + month + date ;
        console.log('mmdd: ' + yyyymmdd);

        if (yyyymmdd >= '20230424') { 
          this.wave2 = true;
          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/09/sp/images/og-wave2.jpg");
        } 

        
      }*/

      let timeFromURL = this.getUrlParameter('t');
      var dataTime;

      let year = moment().format('YYYY');
      let month = moment().format('MM');
      let date = moment().format('DD');

      var timeNow = moment().format('YYYY-MM-DD HH:mm:ss');
      if (timeFromURL) {
        timeNow = moment(timeFromURL).format('YYYY-MM-DD HH:mm:ss');
      }
      

      if ( moment(timeNow).isBetween('2023-08-30 00:00:00', '2023-09-17 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
      }
      if ( moment(timeNow).isBetween('2023-09-18 00:00:00', '2023-10-01 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
        document.body.classList.add('wave2');
      }
      if ( moment(timeNow).isBetween('2023-10-02 00:00:00', '2023-10-15 23:59:59', 'second', '[]') ) {
        this.wave3 = true;
        document.body.classList.add('wave3');
      }


      if ( moment(timeNow).isBetween('2023-08-30 00:00:00', '2023-09-20 23:59:59', 'second', '[]') ) {
        this.end_0920 = true;
      }
      if ( moment(timeNow).isBetween('2023-09-12 00:00:00', '2023-10-15 23:59:59', 'second', '[]') ) {
        this.start_0912 = true;
      }

      // if ( moment(timeNow).isBetween('2023-08-08 00:00:00', '2023-08-31 23:59:59', 'second', '[]') ) {
      //   this.wave2 = true;
      //   document.body.classList.add('wave2');
      // }

      



      if (timeFromURL) {
        // dataTime = timeFromURL.substr(4, 4);
        dataTime = timeFromURL;
        console.log('dataTime: ' + dataTime);
        
      } else {
        dataTime = year + month + date;
        console.log('dataTime: ' + dataTime);
        
      }


      

      
      
      
      

      
    },
    promoCheck: function() {
/*      let timeFromURL = this.getUrlParameter('t');

      let today = moment().format('YYYY-MM-DD');

      if (timeFromURL >= '20211102') {
        today = '2021-11-02';
      }

      let promoChangeDate = moment('2021-11-02');
      if (moment(today).isBefore(promoChangeDate)) {
        this.youtubeURL = 'https://www.youtube.com/embed/LSLsRrpFlCw?playsinline=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&autoplay=0&mute=1&playlist=LSLsRrpFlCw&loop=1'; //1st promo
      } else {
        this.youtubeURL = 'https://www.youtube.com/embed/LSLsRrpFlCw?playsinline=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&autoplay=0&mute=1&playlist=LSLsRrpFlCw&loop=1'; //2nd promo
      }*/
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
    }
  },
  mounted: function() {
    this.init();
    

    // var rellax = new Rellax('.rellax', {
    //   speed: -2,
    //   center: false,
    //   wrapper: null,
    //   round: true,
    //   vertical: true,
    //   horizontal: false
    // });
  }
}
</script>

