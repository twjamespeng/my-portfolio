<template>
  <div>
    <div class="position-relative">

      <div v-if="wave1" class="landing-main wave1 container-fluid p-0" style="z-index: 1">
        <div class="w-100 position-relative">
          <div class="landing-background pe-none us-none">
            <picture>
              <source srcset="images/act/2023/02/24/images/wave1/bg-landing.jpg" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/mobile/bg-landing.jpg" alt="landing background">
            </picture> 
          </div>
          <div class="landing-rail pe-none us-none" style="z-index: 104;">
            <picture>
              <source srcset="images/act/2023/02/24/images/wave1/landing-rail.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/mobile/landing-rail.png" alt="landing rail">
            </picture>
          </div>
          <div class="landing-date">
            <picture>
              <source srcset="images/act/2023/02/24/images/wave1/landing-date.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/mobile/landing-date.png" alt="landing date">
            </picture>
          </div>
          <div class="landing-logo">
            <div class="butterfly-1" style="z-index: 104;">
              <div class="butterfly-1-shadow">
                <div class="butterfly-s-left-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-s-left-shadow.png">
                </div>
                <div class="butterfly-s-right-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-s-right-shadow.png">
                </div>
              </div>
              <div class="butterfly-1-body">
                <div class="butterfly-s-left">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-s-left.png">
                </div>
                <div class="butterfly-s-right">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-s-right.png">
                </div>
              </div>
            </div>
            <div class="butterfly-2" style="z-index: 104;">
              <div class="butterfly-2-shadow">
                <div class="butterfly-s-left-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-s-left-shadow.png">
                </div>
                <div class="butterfly-s-right-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-s-right-shadow.png">
                </div>
              </div>
              <div class="butterfly-2-body">
                <div class="butterfly-s-left">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-s-left.png">
                </div>
                <div class="butterfly-s-right">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-s-right.png">
                </div>
              </div>
            </div>

            <div class="position-relative" style="z-index: 105;">
              <picture>
                <source srcset="images/act/2023/02/24/images/wave1/landing-logo.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/mobile/landing-logo.png" alt="landing logo">
              </picture>
            </div>
            
            <div class="butterfly-3" style="z-index: 106;">
              <div class="butterfly-3-shadow">
                <div class="butterfly-s-left-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-s-left-shadow.png">
                </div>
                <div class="butterfly-s-right-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-s-right-shadow.png">
                </div>
              </div>
              <div class="butterfly-3-body">
                <div class="butterfly-s-left">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-s-left.png">
                </div>
                <div class="butterfly-s-right">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-s-right.png">
                </div>
              </div>
            </div>


          </div>

          <div class="landing-butterfly">
            <div class="butterfly-body">
              <div class="butterfly-left-shadow">
                <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-left-shadow.png">
              </div>
              <div class="butterfly-right-shadow">
                <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-right-shadow.png">
              </div>
              <div class="butterfly-left">
                <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-left.png">
              </div>
              <div class="butterfly-right">
                <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave1/butterfly-right.png">
              </div>
            </div>
          </div>

        </div>
      </div>

      <div v-if="wave2" class="landing-main wave2 container-fluid p-0" style="z-index: 1">
        <div class="w-100 position-relative">
          <div class="landing-background pe-none us-none">
            <picture>
              <source srcset="images/act/2023/02/24/images/wave2/bg-landing.jpg" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/mobile/bg-landing.jpg" alt="landing background">
            </picture> 
          </div>
          <div class="landing-rail pe-none us-none" style="z-index: 104;">
            <picture>
              <source srcset="images/act/2023/02/24/images/wave2/landing-rail.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/mobile/landing-rail.png" alt="landing rail">
            </picture>
          </div>
          <div class="landing-date">
            <picture>
              <source srcset="images/act/2023/02/24/images/wave2/landing-date.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/mobile/landing-date.png" alt="landing date">
            </picture>
          </div>
          <div class="landing-logo">
            <div class="butterfly-1" style="z-index: 104;">
              <div class="butterfly-1-shadow">
                <div class="butterfly-s-left-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-s-left-shadow.png">
                </div>
                <div class="butterfly-s-right-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-s-right-shadow.png">
                </div>
              </div>
              <div class="butterfly-1-body">
                <div class="butterfly-s-left">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-s-left.png">
                </div>
                <div class="butterfly-s-right">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-s-right.png">
                </div>
              </div>
            </div>
            <div class="butterfly-2" style="z-index: 104;">
              <div class="butterfly-2-shadow">
                <div class="butterfly-s-left-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-s-left-shadow.png">
                </div>
                <div class="butterfly-s-right-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-s-right-shadow.png">
                </div>
              </div>
              <div class="butterfly-2-body">
                <div class="butterfly-s-left">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-s-left.png">
                </div>
                <div class="butterfly-s-right">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-s-right.png">
                </div>
              </div>
            </div>

            <div class="position-relative" style="z-index: 105;">
              <picture>
                <source srcset="images/act/2023/02/24/images/wave2/landing-logo.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/mobile/landing-logo.png" alt="landing logo">
              </picture>
            </div>
            
            <div class="butterfly-3" style="z-index: 106;">
              <div class="butterfly-3-shadow">
                <div class="butterfly-s-left-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-s-left-shadow.png">
                </div>
                <div class="butterfly-s-right-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-s-right-shadow.png">
                </div>
              </div>
              <div class="butterfly-3-body">
                <div class="butterfly-s-left">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-s-left.png">
                </div>
                <div class="butterfly-s-right">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-s-right.png">
                </div>
              </div>
            </div>


          </div>

          <div class="landing-butterfly">
            <div class="butterfly-body">
              <div class="butterfly-left-shadow">
                <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-left-shadow.png">
              </div>
              <div class="butterfly-right-shadow">
                <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-right-shadow.png">
              </div>
              <div class="butterfly-left">
                <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-left.png">
              </div>
              <div class="butterfly-right">
                <img class="img-fluid pe-none us-none" src="images/act/2023/02/24/images/wave2/butterfly-right.png">
              </div>
            </div>
          </div>

        </div>
      </div>

      <div v-if="wave1" id="petal" class="landing-falling-petal"></div>

      <div v-if="wave2" id="petal" class="landing-falling-petal"></div>

      <!-- 左選單 -->
      <div v-if="wave1" class="wave1 side-menu-wrapper-left fade show">
        <div class="left-side-menu-header">
          <!-- <img src="images/act/2023/02/24/images/wave4/left-side-menu-header.png" class="img-fluid us-none"> -->
        </div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-2">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">異國情調</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/A1D4C5712CD12C8EE0536F0212AC6C55'">時尚養肌</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/92F4C172F8C620D0E0536E0212AC2C79'">智能居家好物</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">生活儀式感</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">幸福時刻</button>
              
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
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>
      <!-- 右選單 -->
      <div v-if="wave1" class="wave1 side-menu-wrapper-right fade show">
        <div class="right-side-menu-header">
          <!-- <img src="images/act/2023/02/24/images/wave4/right-side-menu-header.png" class="img-fluid us-none"> -->
        </div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-1">
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-A">新客註冊禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B">新客滿額禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C">滿額送銀幣</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/166DB2B136B622E5E0540003BA0FF88E'">日日是好日</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/article/E19D1089127HC387E053844D12AC1375'">科普知識文</button>
              
            </div>

            
            <div class="d-flex flex-column side-menu-group-2">
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionA')">品味生活</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionB')">美妝香氛</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionC')">聚財開運</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionD')">健康生活</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionE')">戶外休閒</button>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>

      <!-- 左選單 -->
      <div v-if="wave2" class="wave2 side-menu-wrapper-left fade show">
        <div class="left-side-menu-header">
          <!-- <img src="images/act/2023/02/24/images/wave4/left-side-menu-header.png" class="img-fluid us-none"> -->
        </div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-2">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">異國情調</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/A1D4C5712CD12C8EE0536F0212AC6C55'">時尚養肌</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/92F4C172F8C620D0E0536E0212AC2C79'">智能居家好物</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">生活儀式感</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">幸福時刻</button>
              
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
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>
      <!-- 右選單 -->
      <div v-if="wave2" class="wave2 side-menu-wrapper-right fade show">
        <div class="right-side-menu-header">
          <!-- <img src="images/act/2023/02/24/images/wave4/right-side-menu-header.png" class="img-fluid us-none"> -->
        </div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-1">
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-A">新客註冊禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B">新客滿額禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C">滿額送銀幣</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/166DB2B136B622E5E0540003BA0FF88E'">日日是好日</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/article/E19D1089127LC387E053844D12AC1375'">科普知識文</button>
              
            </div>

            
            <div class="d-flex flex-column side-menu-group-2">
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionA')">美妝香氛</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionB')">健康生活</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionC')">聚財開運</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionD')">戶外休閒</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionE')">品味生活</button>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>



      <!-- 公格商品 itemApp -->
      <div class="container-fluid container-item-app p-0 position-relative" style="z-index: 103;">
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
    };
  },
  components: {
    'item-app': httpVueLoader('/html/images/act/2023/02/24/js/component/itemApp.vue'),
    'modal-app': httpVueLoader('/html/images/act/2023/02/24/js/component/modalApp.vue')
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/02/24/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/02/24/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/02/24/images/og-wave2.jpg");
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
      

      if ( moment(timeNow).isBetween('2023-02-18 00:00:00', '2023-03-12 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
      }

      if ( moment(timeNow).isBetween('2023-03-13 00:00:00', '2023-03-26 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
        document.body.classList.add('wave2');
      }



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

