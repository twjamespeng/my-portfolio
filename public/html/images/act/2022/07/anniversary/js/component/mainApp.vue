<template>
	<div :class="start_0815 ? 'theme-red' : 'theme-blue'">
    <div class="position-relative">
      <div class="bg-start"></div>
      <div class="bg-end"></div>

      <!-- landing -->
      <div class="container-xl p-0">
        <div class="row g-0">
          <div class="col-12">
            <div class="d-flex flex-column">
              <!-- 主視覺 -->
              <div class="main position-relative d-flex flex-column align-items-end">

                <!-- primary slider 7/25出現 -->
                <div class="primary-slider align-items-end">
                  <div id="swpPrimary" class="swiper-container">
                    <div class="swiper-wrapper">
                      <!-- 7/31-8/31 翻牌 -->
                      <div class="swiper-slide">
                        <a class="d-block" href="https://www.vivatv.com.tw/avyGachaR12400Home.do" target="_blank">
                          <img v-if="start_0815" src="images/act/2022/07/anniversary/images-red/primary-slide-3.png" class="img-fluid" alt="滿2千翻牌抽200銀幣">
                          <img v-else src="images/act/2022/07/anniversary/images/primary-slide-3.png" class="img-fluid" alt="滿2千翻牌抽200銀幣">
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- event section 7/31出現 -->
                <div v-if="start_0731" class="event-section mb-4">
                  <div class="d-flex justify-content-center align-items-start">
                    <!-- secondary slider -->
                    <div class="secondary-slider">
                      <div id="swpSecondary" class="swiper-container">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide">
                            <a class="d-block" href="#eventModalNewCustomer" data-bs-toggle="modal">
                              <img src="images/act/2022/07/anniversary/images/secondary-slide-1.png" class="img-fluid" alt="全通路 單日消費累積滿3千送200金幣">
                            </a>
                          </div>
                          <div class="swiper-slide">
                            <a class="d-block" href="#eventModalNewCustomer" data-bs-toggle="modal">
                              <img src="images/act/2022/07/anniversary/images/secondary-slide-2.png" class="img-fluid" alt="全通路 單日消費累積滿5千送500金幣">
                            </a>
                          </div>
                          <div class="swiper-slide">
                            <a class="d-block" href="#eventModalNewCustomer" data-bs-toggle="modal">
                              <img src="images/act/2022/07/anniversary/images/secondary-slide-3.png" class="img-fluid" alt="全通路 單日消費累積滿1萬送1200金幣">
                            </a>
                          </div>
                          <div class="swiper-slide">
                            <a class="d-block" href="#eventModalNewCustomer" data-bs-toggle="modal">
                              <img src="images/act/2022/07/anniversary/images/secondary-slide-4.png" class="img-fluid" alt="全通路 單日消費累積滿3萬送3600金幣">
                            </a>
                          </div>
                          <div class="swiper-slide">
                            <a class="d-block" href="#eventModalNewCustomer" data-bs-toggle="modal">
                              <img src="images/act/2022/07/anniversary/images/secondary-slide-5.png" class="img-fluid" alt="全通路 單日消費累積滿8萬送5000金幣">
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- tertiary slider 7/31開始 -->
                    <div class="tertiary-slider">
                      <div id="swpTertiary" class="swiper-container">
                        <div class="swiper-wrapper">
                          <!-- 7/31-8/31 -->
                          <div class="swiper-slide">
                            <div class="d-flex flex-column">
                              <div>
                                <a class="d-block" href="#eventModalNewCustomer" data-bs-toggle="modal">
                                  <img v-if="start_0815" src="images/act/2022/07/anniversary/images-red/tertiary-slide-1.png" class="img-fluid" alt="全通路 新客首購滿2千送100銀幣">
                                  <img v-else src="images/act/2022/07/anniversary/images/tertiary-slide-1.png" class="img-fluid" alt="全通路 新客首購滿2千送100銀幣">
                                </a>
                              </div>
                              <div></div>
                            </div>
                          </div>
                          <!-- 8/12一天 -->
                          <div v-if="only_812" class="swiper-slide">
                            <div class="d-flex flex-column">
                              <div>
                                <a class="d-block" href="http://www.vivatv.com.tw/Shops.go?catb=23&catm=2&middleCategoryId=E391F8619C8F3D07E05400144FF9CEC6">
                                  <img src="images/act/2022/07/anniversary/images/tertiary-slide-2.png" class="img-fluid" alt="8/12(五) 新市力集合 買就抽777金幣">
                                </a>
                              </div>
                              <div class="d-flex justify-content-end">
                                <button class="btn btn-secondary btn-dark rounded-pill mb-3 mb-xl-0 me-xl-3" type="button" data-bs-toggle="modal" data-bs-target="#eventModalNewForce" style="transform: scale(0.8);">活動說明<i class="fa-solid fa-chevron-right ms-1"></i></button>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                      <div class="swiper-pagination"></div>
                    </div>


                  </div>
                </div>




              </div>

              
            </div>
          </div>
        </div>
      </div>

      <div v-if="start_0731" class="side-menu-wrapper">
        <div class="side-menu-header"></div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">
            
            <div class="d-flex flex-column">
              <button class="btn btn-highlight" type="button" data-bs-toggle="modal" data-bs-target="#eventModalNewCustomer">滿額送5千</button>
              <button class="btn btn-highlight" type="button" data-bs-toggle="modal" data-bs-target="#eventModalNewCustomer">新客首購禮</button>
            </div>

            <div class="d-flex flex-column p-2 border-bottom-custom" style="">
              <button class="btn text-white" type="button" onclick="scrollToSection('sectionA')">必buy商品</button>
              <button class="btn text-white" type="button" onclick="scrollToSection('sectionB')">居家小幫手</button>
              <button class="btn text-white" type="button" onclick="scrollToSection('sectionC')">健康享樂活</button>
              <button class="btn text-white" type="button" onclick="scrollToSection('sectionD')">美味好時光</button>
              <button class="btn text-white" type="button" onclick="scrollToSection('sectionE')">時尚蓋青春</button>
            </div>
            
            <div class="d-flex flex-column p-2 border-bottom-custom">
              <div class="btn-group">
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/Shops.go?ctype=1&catb=1&ShopCategoryId=000000004')">生活</button>
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/Shops.go?ctype=1&catb=2&ShopCategoryId=000000002')">家電</button>
              </div>
              <div class="btn-group">
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/Shops.go?ctype=1&catb=4&ShopCategoryId=57A24D23F00F52C2E0440003BA0FF872')">時尚</button>
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/Shops.go?ctype=1&catb=5&ShopCategoryId=000000003')">美妝</button>  
              </div>
              <div class="btn-group">
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/Shops.go?ctype=1&catb=9&ShopCategoryId=C04AE75708173CA7E05400144FF9CEC6')">健康</button>
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/Shops.go?ctype=1&catb=11&ShopCategoryId=57A1B2891B10444DE0440003BA0FF88E')">美食</button>
              </div>
              <div class="btn-group">
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/Shops.go?ctype=1&catb=14&ShopCategoryId=C5532AF44E31474EE05400144FF82309')">日用</button>
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/Shops.go?ctype=1&catb=19&ShopCategoryId=C064C88E9DDC3999E05400144FF82309')">３Ｃ</button>
              </div>
            </div>

            <div class="d-flex flex-column p-2">
              <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>

      <!-- 公格商品 -->
      <item-app></item-app>

      


      

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
      wave2: false,
      only_812: false,
      start_0731: false,
      end_0731: false,
      start_0725: false,
      start_0815: false,
      // wave3: false
    };
  },
  components: {
    'item-app': httpVueLoader('/html/images/act/2022/07/anniversary/js/component/itemApp.vue'),
    'modal-app': httpVueLoader('/html/images/act/2022/07/anniversary/js/component/modalApp.vue')
  },
  methods: {
    init: function() {
      var main = this;
      main.promoCheck();


      


      

      

      // let m = 'febuary';

      /*let timeFromURL = this.getUrlParameter('t');
      if (timeFromURL) {
        let monthFromURL = timeFromURL.substr(4, 2);
        let mmddFromURL = timeFromURL.substr(4, 4);
        console.log('mmddFromURL: ' + mmddFromURL);

        if (timeFromURL.substr(0,8) == '20230424') {
          this.wave2 = true;

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/07/anniversary/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/07/anniversary/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/07/anniversary/images/og-wave2.jpg");
        } 

        
      }*/

      var timeNow = moment().format('YYYY-MM-DD HH:mm:ss');

      var start_0725 = '2022-07-25 00:00:00';    
  
      var start_0731 = '2022-07-31 00:00:00';
      var end_0731 = '2022-07-31 23:59:59';

      var start_0812 = '2022-08-12 00:00:00';
      var end_0812 = '2022-08-12 23:59:59';

      var start_0815 = '2022-08-15 00:00:00';

      let timeFromURL = this.getUrlParameter('t');
      if (timeFromURL) {
        timeNow = moment(timeFromURL).format('YYYY-MM-DD HH:mm:ss');
      }

      console.log('timeNow:'+timeNow);

      //只有0812當天
      if ( moment(timeNow).isBetween(start_0812, end_0812, 'minutes', '[]') ) {
        this.only_812 = true;
      }


      //0725 00:00:00開始
      if ( moment(timeNow).isAfter(start_0725) ) {
        this.start_0725 = true;
      } else {
        this.start_0725 = false;
      }

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

      //0815 00:00:00開始
      if ( moment(timeNow).isAfter(start_0815) ) {
        this.start_0815 = true;
        document.body.classList.add('theme-red');
      } else {
        this.start_0815 = false;
        document.body.classList.add('theme-blue');
      }


      setTimeout(function(){

        const swpPrimary = new Swiper('#swpPrimary', {
          loop: true,
          speed: 0,
          autoplay: {
            delay: 3000,
          },
          spaceBetween: 0,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
        });

        const swpSecondary = new Swiper('#swpSecondary', {
          loop: true,
          speed: 0,
          autoplay: {
            delay: 3000,
          },
          spaceBetween: 0,
          effect: 'fade',
          // flipEffect: {
          //   slideShadows: false,
          // },
          fadeEffect: {
            crossFade: true
          },
        });

        const swpTertiary = new Swiper('#swpTertiary', {
          loop: true,
          speed: 0,
          autoplay: {
            delay: 3000,
          },
          spaceBetween: 0,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
          pagination: {
            el: '.tertiary-slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        });


      }, 500);
      

      
    },
    promoCheck: function() {
/*    	let timeFromURL = this.getUrlParameter('t');

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

