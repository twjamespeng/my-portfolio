<template>
	<div :class="wave2 ? 'wave-2' : ''">
    <div class="position-relative">
      <div class="bg-start"></div>
      <div class="bg-end"></div>

      <!-- landing -->
      <div class="container-xl p-0">
        <div class="row g-0">
          <div class="col-12">
            <div class="d-flex flex-column">
              <!-- 主視覺 -->
              <div class="main">
                <!-- mobile -->
                <img class="img-fluid d-inline d-md-none" src="images/act/2022/08/29/images/m/main.jpg" alt="秋感謝 加倍奉還">
                <!-- desktop -->
                <img class="img-fluid d-none d-md-inline" src="images/act/2022/08/29/images/main.jpg" alt="秋感謝 加倍奉還">
              </div>

              <!-- btn-section -->
              <div class="d-flex justify-content-center p-1 my-xl-4">
                <div class="d-flex mb-2 p-1 me-xl-3">
                  <a href="#eventModal-1" data-bs-toggle="modal">
                    <img class="img-fluid d-inline d-md-none" src="images/act/2022/08/29/images/m/btn-event-modal-1.png" alt="全通路滿5000抽$5000美好禮券">
                    <img class="img-fluid d-none d-md-inline" src="images/act/2022/08/29/images/btn-event-modal-1.png" alt="全通路滿5000抽$5000美好禮券">
                  </a>
                </div>
                <div class="d-flex mb-2 p-1 ms-xl-3">
                  <a href="#eventModal-2" data-bs-toggle="modal">
                    <img class="img-fluid d-inline d-md-none" src="images/act/2022/08/29/images/m/btn-event-modal-2.png" alt="新會員註冊禮$100銀幣">
                    <img class="img-fluid d-none d-md-inline" src="images/act/2022/08/29/images/btn-event-modal-2.png" alt="新會員註冊禮$100銀幣">
                  </a>  
                </div>
              </div>

              <!-- btn-product -->
              <div v-if="end_0915" class="d-flex justify-content-center position-relative p-2 p-xl-0 mt-xl-4 mb-xl-5" style="z-index: 3;">
                <div style="width: 1110px;">
                  <div class="d-flex flex-column">
                    <div>
                      <img src="images/act/2022/08/29/images/m/section-s-title.png" class="img-fluid d-inline d-md-none">
                      <img src="images/act/2022/08/29/images/section-s-title.png" class="img-fluid d-none d-md-inline">
                    </div>
                    <div class="d-flex flex-column">
                      <div class="d-flex">
                        <div><a href="https://www.vivatv.com.tw/goods/3002532021">
                          <img src="images/act/2022/08/29/images/m/section-s-1.png" class="img-fluid d-inline d-md-none" alt="FOLIAGE 肌活青春健髮露EX-敏感肌" title="FOLIAGE 肌活青春健髮露EX-敏感肌">
                          <img src="images/act/2022/08/29/images/section-s-1.png" class="img-fluid d-none d-md-inline" alt="FOLIAGE 肌活青春健髮露EX-敏感肌" title="FOLIAGE 肌活青春健髮露EX-敏感肌">
                        </a></div>
                        <div><a href="https://www.vivatv.com.tw/goods/3005622021">
                          <img src="images/act/2022/08/29/images/m/section-s-2.png" class="img-fluid d-inline d-md-none" alt="LONGCHAMP 小羊皮短把摺疊包(小/黑/附背帶)" title="LONGCHAMP 小羊皮短把摺疊包(小/黑/附背帶)">
                          <img src="images/act/2022/08/29/images/section-s-2.png" class="img-fluid d-none d-md-inline" alt="LONGCHAMP 小羊皮短把摺疊包(小/黑/附背帶)" title="LONGCHAMP 小羊皮短把摺疊包(小/黑/附背帶)">
                        </a></div>
                      </div>
                      <div class="d-flex">
                        <div><a href="https://www.vivatv.com.tw/goods/3043342022">
                          <img src="images/act/2022/08/29/images/m/section-s-3.png" class="img-fluid d-inline d-md-none" alt="WOOM 23:33舒緩 高效安瓶(幸福版)" title="WOOM 23:33舒緩 高效安瓶(幸福版)">
                          <img src="images/act/2022/08/29/images/section-s-3.png" class="img-fluid d-none d-md-inline" alt="WOOM 23:33舒緩 高效安瓶(幸福版)" title="WOOM 23:33舒緩 高效安瓶(幸福版)">
                        </a></div>
                        <div><a href="https://www.vivatv.com.tw/goods/3029642022">
                          <img src="images/act/2022/08/29/images/m/section-s-4.png" class="img-fluid d-inline d-md-none" alt="下村玉廣 京都屏風耳環" title="下村玉廣 京都屏風耳環">
                          <img src="images/act/2022/08/29/images/section-s-4.png" class="img-fluid d-none d-md-inline" alt="下村玉廣 京都屏風耳環" title="下村玉廣 京都屏風耳環">
                        </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="start_0916" class="d-flex justify-content-center position-relative p-2 p-xl-0 mt-xl-4 mb-xl-5" style="z-index: 3;">
                <div style="width: 1110px;">
                  <div class="d-flex flex-column">
                    <div>
                      <img src="images/act/2022/08/29/images/m/section-s-title-0916.png" class="img-fluid d-inline d-md-none">
                      <img src="images/act/2022/08/29/images/section-s-title-0916.png" class="img-fluid d-none d-md-inline">
                    </div>
                    <div class="d-flex flex-column">
                      <div class="d-flex">
                        <div><a href="https://www.vivatv.com.tw/goods/3047572022">
                          <img src="images/act/2022/08/29/images/m/section-s-1-0916.png" class="img-fluid d-inline d-md-none" alt="【茶寶 自然力】香療SPA按摩油－緊實肌膚 250ml" title="【茶寶 自然力】香療SPA按摩油－緊實肌膚 250ml">
                          <img src="images/act/2022/08/29/images/section-s-1-0916.png" class="img-fluid d-none d-md-inline" alt="【茶寶 自然力】香療SPA按摩油－緊實肌膚 250ml" title="【茶寶 自然力】香療SPA按摩油－緊實肌膚 250ml">
                        </a></div>
                        <div><a href="https://www.vivatv.com.tw/goods/3007322021">
                          <img src="images/act/2022/08/29/images/m/section-s-2-0916.png" class="img-fluid d-inline d-md-none" alt="【M2nd】歐蜜雅真鱷腹皮方包(棕)" title="【M2nd】歐蜜雅真鱷腹皮方包(棕)">
                          <img src="images/act/2022/08/29/images/section-s-2-0916.png" class="img-fluid d-none d-md-inline" alt="【M2nd】歐蜜雅真鱷腹皮方包(棕)" title="【M2nd】歐蜜雅真鱷腹皮方包(棕)">
                        </a></div>
                      </div>
                      <div class="d-flex">
                        <div><a href="https://www.vivatv.com.tw/goods/3022182021">
                          <img src="images/act/2022/08/29/images/m/section-s-3-0916.png" class="img-fluid d-inline d-md-none" alt="EVELINE高效嫩白潤膚霜(100ml) x3瓶" title="EVELINE高效嫩白潤膚霜(100ml) x3瓶">
                          <img src="images/act/2022/08/29/images/section-s-3-0916.png" class="img-fluid d-none d-md-inline" alt="EVELINE高效嫩白潤膚霜(100ml) x3瓶" title="EVELINE高效嫩白潤膚霜(100ml) x3瓶">
                        </a></div>
                        <div><a href="https://www.vivatv.com.tw/goods/3002512021">
                          <img src="images/act/2022/08/29/images/m/section-s-4-0916.png" class="img-fluid d-inline d-md-none" alt="FOLIAGE 肌活青春頭皮面膜-油性頭皮500ml" title="FOLIAGE 肌活青春頭皮面膜-油性頭皮500ml">
                          <img src="images/act/2022/08/29/images/section-s-4-0916.png" class="img-fluid d-none d-md-inline" alt="FOLIAGE 肌活青春頭皮面膜-油性頭皮500ml" title="FOLIAGE 肌活青春頭皮面膜-油性頭皮500ml">
                        </a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>

      <div class="side-menu-wrapper">
        <div class="side-menu-header"></div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">
            
            <div class="d-flex flex-column p-2" style="background-color: rgba(156, 5, 0, 0.55);">
              <button class="btn text-white rounded-0 fs-5" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-1">滿額抽5千</button>
              <button class="btn text-white rounded-0 fs-5" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-2">註冊送1百</button>
            </div>
            
            <div class="d-flex flex-column p-2 custom-rounded-bottom" style="background-color: rgba(0, 0, 0, 0.55);">
              <div class="btn-group">
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000004')">生活</button>
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000002')">家電</button>
              </div>
              <div class="btn-group">
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A24D23F00F52C2E0440003BA0FF872')">時尚</button>
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000003')">美妝</button>  
              </div>
              <div class="btn-group">
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C04AE75708173CA7E05400144FF9CEC6')">健康</button>
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A1B2891B10444DE0440003BA0FF88E')">美食</button>
              </div>
              <div class="btn-group">
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C5532AF44E31474EE05400144FF82309')">日用</button>
                <button class="btn text-white" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C064C88E9DDC3999E05400144FF82309')">３Ｃ</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      

      <!-- 公格商品 -->
      <div class="container-fluid container-item-app pt-3">
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
      wave2: false,
      end_0915: false,
      start_0916: false
      // wave3: false
    };
  },
  components: {
    'item-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/08/29/js/component/itemApp.vue'),
    'modal-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/08/29/js/component/modalApp.vue')
  },
  methods: {
    init: function() {
      var main = this;
      main.promoCheck();


      const swpA = new Swiper('#swpA', {
        loop: true,
        autoplay: {
          delay: 2000,
        },

        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        
      });


      const swpB = new Swiper('#swpB', {
        loop: true,
        autoplay: {
          delay: 4000,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'slide',
        pagination: {
          el: '#swpB .swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });

      

      // let m = 'febuary';

      /*let timeFromURL = this.getUrlParameter('t');
      if (timeFromURL) {
        let monthFromURL = timeFromURL.substr(4, 2);
        let mmddFromURL = timeFromURL.substr(4, 4);
        console.log('mmddFromURL: ' + mmddFromURL);

        if (timeFromURL.substr(0,8) == '20230424') {
          this.wave2 = true;

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/08/29/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/08/29/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/08/29/images/og-wave2.jpg");
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

      //0915 23:59:59前
      if ( moment(timeNow).isBefore(end_0915) ) {
        this.end_0915 = true;
        this.start_0916 = false;
      } else {
        this.end_0915 = false;
        this.start_0916 = true;
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

