<template>
  <div :class="wave2 ? 'wave-2' : ''">
    <div class="position-relative">
      
      <div v-if="start_1021" class="landing-main container-fluid position-relative p-0" style="z-index: 104;">
        <div class="d-flex flex-column w-100">
          <div v-if="before_1125" class="d-flex flex-column w-100">
            <picture class="picture-blackfriday">
              <source srcset="images/act/2022/11/11/images/landing-blackfriday-2560.jpg" media="(min-width: 1921px)">
              <source srcset="images/act/2022/11/11/images/landing-blackfriday-1920.jpg" media="(min-width: 992px)">
              <img class="landing_01 img-fluid pe-none us-none" src="images/act/2022/11/11/images/m/landing-blackfriday.jpg" alt="黑五">
            </picture>  
          </div>

          <div v-else class="d-flex flex-column w-100">
            <picture>
              <source srcset="images/act/2022/11/11/images/landing_01.jpg" media="(min-width: 992px)">
              <img class="landing_01 img-fluid pe-none us-none" src="images/act/2022/11/11/images/m/landing_01.jpg" alt="V1111P就是您 主視覺">
            </picture>

            <picture>
              <source srcset="images/act/2022/11/11/images/landing_02.png" media="(min-width: 992px)">
              <img class="landing_02 img-fluid pe-none us-none" src="images/act/2022/11/11/images/m/landing_02.png" alt="V1111P就是您 主視覺">
            </picture>
          </div>
          

        </div>

        <div v-if="before_1125" class="btn-group-blackfriday d-flex flex-column mx-auto p-1">
          <div class="p-1">
            <button class="btn p-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-A-2"><img src="images/act/2022/11/11/images/btn-blackfriday-1.png" class="img-fluid"></button>
          </div>
          
          <div class="d-flex flex-row p-1">
            <div class="row w-100 g-0">
              <div class="col-6 pe-1">
                <button class="btn p-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-A-1"><img src="images/act/2022/11/11/images/btn-blackfriday-2.png" class="img-fluid"></button>
              </div>
              <div class="col-6 ps-1 position-relative">

                <div id="swpBlackFriday" class="swiper-container">
                  <div class="swiper-wrapper">
                    

                    <div class="swiper-slide">
                      <a class="d-block" href="#eventModal-B-2" data-bs-toggle="modal">
                        <img class="img-fluid" src="images/act/2022/11/11/images/btn-blackfriday-3.png" alt="">
                      </a>
                    </div>

                    <div class="swiper-slide">
                      <a class="d-block" href="#eventModal-B-1" data-bs-toggle="modal">
                        <img class="img-fluid" src="images/act/2022/11/11/images/btn-blackfriday-4.png" alt="">
                      </a>
                    </div>

                    <div class="swiper-slide">
                      <a class="d-block" href="#eventModal-2" data-bs-toggle="modal">
                        <img class="img-fluid" src="images/act/2022/11/11/images/btn-blackfriday-5.png" alt="">
                      </a>
                    </div>
                    

                  </div>
                </div>

              </div>
            </div>

            
              
          </div>
          

        </div>

        <div v-else id="swpGroup" class="position-absolute w-100">
          <div id="swpInner" class="mx-auto">
            <div class="d-flex">
              <div id="swpLeft">
                
                <div id="swpA" class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a class="d-block" href="#eventModal-A-1" data-bs-toggle="modal">
                        <img class="img-fluid us-none" src="images/act/2022/11/11/images/slide-a-1.png" alt="滿額贈聖誕麵包">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="#eventModal-A-2" data-bs-toggle="modal">
                        <img class="img-fluid us-none" src="images/act/2022/11/11/images/slide-a-2.png" alt="滿額抽iPhone14">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="swpRight" class="d-flex flex-column">
                
                <div id="swpB" class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a class="d-block" href="#eventModal-B-1" data-bs-toggle="modal">
                        <img class="img-fluid us-none" src="images/act/2022/11/11/images/slide-b-1.png" alt="新客首購金">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="#eventModal-B-2" data-bs-toggle="modal">
                        <img class="img-fluid us-none" src="images/act/2022/11/11/images/slide-b-2.png" alt="滿3000送300">
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a class="d-block" href="#eventModal-2" data-bs-toggle="modal">
                        <img class="img-fluid us-none" src="images/act/2022/11/11/images/slide-b-3.png" alt="好禮4重送">
                      </a>
                    </div>
                    
                  </div>
                </div>
                
                <div id="swpC" class="swiper-container">
                  <div class="swiper-wrapper">
                    

                    <div class="swiper-slide">
                      <a class="d-block" href="#eventModal-C-4" data-bs-toggle="modal">
                        <img class="img-fluid us-none" src="images/act/2022/11/11/images/slide-c-6.png" alt="黑五浪潮">
                      </a>
                    </div>
                    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div v-if="before_1021" class="container-xl p-0 h-100 mb-5">
          <div class="row g-0 justify-content-center align-items-center h-100">
            <div class="col-12 animate__animated animate__bounceIn">
              <img src="images/act/2022/11/11/images/logo-pre.png" class="img-fluid us-none" alt="新客大募集">
            </div>
          </div>
          <div class="w-100 text-center">
            <a href="https://www.vivatv.com.tw/signUp" class="btn btn-outline-light fs-4 rounded-pill px-5 py-2 py-xl-3">動動手拿銀幣</a>
          </div>
      </div>
      
      
      <!-- 左選單 -->
      <div v-if="start_1021" class="side-menu-wrapper-left fade show">
        <div class="side-menu-header"></div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="side-menu-title p-2 text-center">
              <div class="p-1" style="border: 1px solid #e0af6d;">驚喜不間斷</div>
            </div>
              
            <div class="d-flex flex-column side-menu-group-1">
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/searchResult/%E9%9B%9911'">限時超優惠</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">異國食好味</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/searchResult/%E6%9D%BE%E9%9C%B2'">松露主題館</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/tertiaryCategory/CC9223EEAA564C1EE05400144FF82309'">健康新主義</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/96D31C75AC9E341EE0536E0212ACCFD7'">Dyson贈好禮</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/C5DF6CB63EAB3708E05400144FF82309'">時尚購好禮</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/000000301'">換季好禮賞</button>
            </div>

            
            <div class="d-flex flex-column side-menu-group-3 px-2">
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

          </div>
        </div>
        <div class="side-menu-footer">
          <div class="d-flex flex-column">
            <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
          </div>
        </div>
      </div>
      <!-- 右選單 -->
      <div v-if="start_1021" class="side-menu-wrapper-right fade show">
        <div class="side-menu-header"></div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">
            
            <div class="side-menu-title p-2 text-center">
              <div class="p-1" style="border: 1px solid #e0af6d;">淘金拿好康</div>
            </div>

            <div class="d-flex flex-column side-menu-group-1">
              <!-- <button v-if="before_1101" class="btn px-0 text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/campaign/202211dailycheckin.html'">&#129689;簽到拿金幣&#129689;</button>
              <button v-if="start_1101" class="btn px-0 text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/campaign/202211fishing.html'">&#127907;釣魚拿銀幣&#127907;</button> -->
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-A-2">滿額抽iPhone</button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-B-1">新客首購禮</button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-B-2">回饋無上限</button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-A-1">送聖誕麵包</button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-2">大獎好四連連</button>
            </div>

            <div class="d-flex flex-column side-menu-group-2">
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionA')">剁手必買</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionB')">夯品搶購</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionC')">食尚主義</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionD')">品味格調</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionE')">脫單必備</button>
            </div>

          </div>
        </div>
        <div class="side-menu-footer">
          <div class="d-flex flex-column">
            <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
          </div>
        </div>
      </div>

      <!-- 公格商品 itemApp -->
      <div class="container-fluid container-item-app p-0 position-relative" style="z-index: 103;">
        <item-app></item-app>  
      </div>

      <!-- modal -->
      <modal-app></modal-app>


      <!-- 官網banner swiper -->
      <!-- <div class="d-flex flex-column justify-content-center align-items-center my-3">
        <div id="swpBottom">
          <div id="swpD" class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/CC9223EEAA564C1EE05400144FF82309">
                  <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/E91349E423AE4A4BE05400144FF82309_m.jpg" alt="自然農法的實踐者">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/96D31C75AC9E341EE0536E0212ACCFD7">
                  <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/E8C580515F3D63F1E05400144FF82309_m.jpg" alt="Dyson購省錢贈好禮">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C04B1A01A20852F2E05400144FF82309">
                  <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/E8C580515F3F63F1E05400144FF82309_m.jpg" alt="安心防疫備起來">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/0354552337F6178FE0540003BA0FF88E">
                  <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/E8C580515F4163F1E05400144FF82309_m.jpg" alt="奧利塔">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/secondaryCategory/C5DF6CB63EAB3708E05400144FF82309">
                  <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/E8C580515F4263F1E05400144FF82309_m.jpg" alt="歐美精品">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/goods/3004972021">
                  <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/E8C60E933126296DE05400144FF9CEC6_m.jpg" alt="清潤飴">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/C55317C9C7CA435DE05400144FF82309">
                  <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/E8C580515F3C63F1E05400144FF82309_m.jpg" alt="立體金箔畫">
                </a>
              </div>
              <div class="swiper-slide">
                <a class="d-block" href="https://www.vivatv.com.tw/category/tertiaryCategory/E391F8619E263D07E05400144FF9CEC6">
                  <img class="img-fluid us-none" src="https://www.vivatv.com.tw/common/images/bn/E8C55FAAC0A166AFE05400144FF9CEC6_m.jpg" alt="黑蒜頭">
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div> -->

      <div v-if="start_1021" class="container-fluid position-relative p-0" style="z-index: 2;">
        <div class="w-100">
          <picture>
            <source srcset="images/act/2022/11/11/images/bg-goldpile.png" media="(min-width: 992px)">
            <img class="img-fluid pe-none us-none" src="images/act/2022/11/11/images/m/bg-goldpile.png" alt="goldpile">
          </picture>
        </div>
      </div>

      <div v-if="before_1101" class="btn-event d-flex d-xxl-none">
        <button class="btn p-0 w-100" type="button" onclick="location.href='https://www.vivatv.com.tw/campaign/202211dailycheckin.html'">簽到拿金幣</button>
      </div>

      <!-- <div v-if="start_1101" class="btn-event d-flex d-xxl-none">
        <button class="btn p-0 w-100" type="button" onclick="location.href='https://www.vivatv.com.tw/campaign/202211fishing.html'">釣魚拿銀幣</button>
      </div> -->

      

      

    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      youtubeURL: '',
      month: '',
      wave2: false,
      end_0915: false,
      start_0916: false,
      start_1021: false,
      before_1021: false,
      start_1028: false,
      start_1101: false,
      before_1101: false,

      before_1125: false,
      
      // wave3: false
    };
  },
  components: {
    'item-app': httpVueLoader('/html/images/act/2022/11/11/js/component/itemApp.vue'),
    'modal-app': httpVueLoader('/html/images/act/2022/11/11/js/component/modalApp.vue')
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/11/11/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/11/11/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/11/11/images/og-wave2.jpg");
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
      var end_0915 = '2022-09-15 23:59:59';
      var start_0916 = '2022-09-16 00:00:00';
      var start_1021 = '2022-10-21 00:00:00';
      var before_1021 = '2022-10-20 23:59:59';
      var start_1101 = '2022-11-01 00:00:00';
      var start_1028 = '2022-10-28 00:00:00';

      var end_1125 = '2022-11-25 23:59:59';


      //0915 23:59:59前
      if ( moment(timeNow).isSameOrBefore(end_0915) ) {
        this.end_0915 = true;
        this.start_0916 = false;
      } else {
        this.end_0915 = false;
        this.start_0916 = true;
      }

      if ( moment(timeNow).isBefore(end_1125) ) {
        this.before_1125 = true;
        document.body.classList.add('blackfriday');
      } else {
        document.body.classList.remove('blackfriday');
      }




      if ( moment(timeNow).isSameOrAfter(start_1021)) {
        this.start_1021 = true;
      }

      if ( moment(timeNow).isSameOrAfter(start_1028)) {
        this.start_1028 = true;
      }

      if ( moment(timeNow).isSameOrBefore(before_1021)) {
        this.before_1021 = true;
        document.body.classList.add('pre-event');
      }

      if ( moment(timeNow).isSameOrAfter(start_1101)) {
        this.start_1101 = true;
      } else {
        this.before_1101 = true;
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

