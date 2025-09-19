<template>
  <div>
    <div class="position-relative">
      
      <div v-if="wave1" class="landing-main wave1 container-fluid position-relative p-0" style="z-index: 1">
        <div id="scene" class="w-100 position-relative overflow-hidden">
          <div class="landing-placeholder position-relative pe-none us-none">

            <div class="position-absolute top-0 bottom-0 start-0 end-0 overflow-hidden">
              <div class="landing-flags">
                <div class="landing-left-flag"></div>
                <div class="landing-right-flag"></div>  
              </div>
            </div>

            <div class="landing-people d-block d-lg-none">
              <div></div>
              <div></div>
            </div>
            
            <picture>
              <source srcset="images/act/2023/11/sp/images/wave1/landing-placeholder.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/11/sp/images/wave1/mobile/landing-placeholder.png" alt="landing placeholder">
            </picture>
            <div class="landing-truck pe-none us-none">
              <picture>
                <source srcset="images/act/2023/11/sp/images/wave1/landing-truck.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/11/sp/images/wave1/mobile/landing-truck.png" alt="landing truck">
              </picture>
            </div>
            <div class="landing-date pe-none us-none">
              <picture>
                <source srcset="images/act/2023/11/sp/images/wave1/landing-date.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/11/sp/images/wave1/mobile/landing-date.png" alt="landing date">
              </picture>
            </div>
            
          </div>
          <div class="landing-logo pe-none us-none">
            <picture>
              <source srcset="images/act/2023/11/sp/images/wave1/landing-logo.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/11/sp/images/wave1/mobile/landing-logo.png" alt="landing logo">
            </picture>
            <div class="landing-circular-light light-1">
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
            <div class="landing-circular-light light-2">
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
            <div class="landing-circular-light light-3">
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
            <div class="landing-circular-light light-4">
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
            <div class="landing-circular-light light-5">
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
          </div>

        </div>
      </div>

      <div v-if="wave2" class="landing-main wave2 container-fluid position-relative p-0" style="z-index: 1">
        <div id="scene" class="w-100 position-relative overflow-hidden">
          <div class="landing-placeholder position-relative pe-none us-none">

            <div class="position-absolute top-0 bottom-0 start-0 end-0 overflow-hidden">
              <div class="landing-flags d-none d-lg-block">
                <div class="landing-left-flag"></div>
                <div class="landing-right-flag"></div>  
              </div>
            </div>
            
            <picture>
              <source srcset="images/act/2023/11/sp/images/wave2/landing-placeholder.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/11/sp/images/wave2/mobile/landing-placeholder.png" alt="landing placeholder">
            </picture>
            
          </div>

          <div class="landing-logo pe-none us-none">
            <picture>
              <source srcset="images/act/2023/11/sp/images/wave2/landing-logo.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/11/sp/images/wave2/mobile/landing-logo.png" alt="landing logo">
            </picture>
          </div>

        </div>
      </div>
      
      

      <!-- 左選單 -->
      <div v-if="wave1" class="wave1 side-menu-wrapper-left">
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-3">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/FE26D074E2855E90E05400144FF82309'">回憶美味食光</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">體驗異國氛圍</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">享受質感生活</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309'">健康養身之道</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/A1D4C5712CD12C8EE0536F0212AC6C55'">聰明養肌秘密</button>
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
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C">雙11銀幣大放送</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D">滿額加碼送好禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-I">新會員送冰淇淋</button>
              <!-- <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E">抽名牌保養禮包</button> -->
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B">新客首購送銀幣</button>
              <button v-if="start_1120" class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-F">抽Marshall喇叭</button>
            </div>
            
            <div class="d-flex flex-column side-menu-group-2">
              <a href="#sectionA" class="btn rounded-0">挑戰最低價</a>
              <a href="#sectionB" class="btn rounded-0">老司機必搶</a>
              <a href="#sectionC" class="btn rounded-0">吃貨們必囤</a>
              <a href="#sectionD" class="btn rounded-0">迎桃花必收</a>
              <a href="#sectionE" class="btn rounded-0">微旅行必備</a>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>

      <!-- 左選單 -->
      <div v-if="wave2" class="wave2 side-menu-wrapper-left">
        <div class="side-menu-body h-100">
          <div class="d-flex flex-column justify-content-end h-100">

            <div class="d-flex flex-column side-menu-group-1 py-2">
              <button class="btn mb-3" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/FE26D074E2855E90E05400144FF82309'">回憶美味食光</button>
              <button class="btn mb-1" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">體驗異國氛圍</button>
              <button class="btn mb-1" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">享受質感生活</button>
              <button class="btn mb-1" type="button" onclick="location.href='https://www.vivatv.com.tw/category/tertiaryCategory/FE26D074DD725E90E05400144FF82309'">健康養身之道</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/tertiaryCategory/C0EB4EEAB6ED1269E05400144FF82309'">聰明養肌秘密</button>
            </div>

            <div class="d-flex flex-column side-menu-group-2 px-3 py-2">
              <div class="btn-group mb-1">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000004')">生活</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000002')">家電</button>
              </div>
              <div class="btn-group mb-1">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A24D23F00F52C2E0440003BA0FF872')">時尚</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000003')">美妝</button>  
              </div>
              <div class="btn-group mb-1">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C04AE75708173CA7E05400144FF9CEC6')">健康</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A1B2891B10444DE0440003BA0FF88E')">美食</button>
              </div>
              <div class="btn-group mb-1">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C5532AF44E31474EE05400144FF82309')">日用</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C064C88E9DDC3999E05400144FF82309')">３Ｃ</button>
              </div>
            </div>

            <div class="d-flex flex-column side-menu-group-3 py-2">
              <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>
      <!-- 右選單 -->
      <div v-if="wave2" class="wave2 side-menu-wrapper-right">
        <div class="side-menu-body h-100">
          <div class="d-flex flex-column justify-content-end h-100">

            <div class="d-flex flex-column side-menu-group-1 pt-3">
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C">雙11銀幣大放送</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D">滿額加碼送好禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-I">新會員送冰淇淋</button>
              <!-- <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E">抽名牌保養禮包</button> -->
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B">新客首購送銀幣</button>
              <button v-if="start_1120" class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-F">抽Marshall喇叭</button>
            </div>
            
            <div class="d-flex flex-column side-menu-group-2 py-2">
              <a href="#sectionA" class="btn rounded-0">挑戰最低價</a>
              <a href="#sectionB" class="btn rounded-0">老司機必搶</a>
              <a href="#sectionC" class="btn rounded-0">吃貨們必囤</a>
              <a href="#sectionD" class="btn rounded-0">迎桃花必收</a>
              <a href="#sectionE" class="btn rounded-0">微旅行必備</a>
            </div>

            <div class="d-flex flex-column side-menu-group-3 py-2">
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
      wave3: false,
      start_1120: false
    };
  },
  components: {
    'item-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2023/11/sp/js/component/itemApp.vue"),
    'modal-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2023/11/sp/js/component/modalApp.vue")
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/11/sp/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/11/sp/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/11/sp/images/og-wave2.jpg");
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
      

      if ( moment(timeNow).isBetween('2023-10-11 00:00:00', '2023-11-05 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
      }
      if ( moment(timeNow).isBetween('2023-11-06 00:00:00', '2023-11-26 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
        document.body.classList.add('wave2');
      }
      

      // if ( moment(timeNow).isBetween('2023-08-08 00:00:00', '2023-08-31 23:59:59', 'second', '[]') ) {
      //   this.wave2 = true;
      //   document.body.classList.add('wave2');
      // }

      if ( moment(timeNow).isBetween('2023-11-20 00:00:00', '2023-11-26 23:59:59', 'second', '[]') ) {
        this.start_1120 = true;
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

