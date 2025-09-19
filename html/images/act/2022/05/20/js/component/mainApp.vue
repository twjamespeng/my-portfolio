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
                <img class="img-fluid d-inline d-md-none" src="images/act/2022/05/20/images/m/main.png" alt="「午」保庇•仲夏好運接力年中慶">
                <!-- desktop -->
                <img class="img-fluid d-none d-md-inline" src="images/act/2022/05/20/images/main.png" alt="「午」保庇•仲夏好運接力年中慶">
              </div>
              <!-- 功能區 -->
              <div class="d-flex position-relative mb-3 mb-md-5">
                <!-- mobile -->
                <img class="img-fluid d-inline d-md-none" src="images/act/2022/05/20/images/m/main-2.png" alt="「午」保庇•仲夏好運接力年中慶">
                <!-- desktop -->
                <img class="img-fluid d-none d-md-inline" src="images/act/2022/05/20/images/main-2.png" alt="「午」保庇•仲夏好運接力年中慶">
                <!-- button & swiper -->
                <div class="position-absolute top-50 start-50 translate-middle w-100" style="max-width: 950px;">
                  <div class="d-flex flex-row justify-content-center">
                    <div class="d-flex flex-column justify-content-between me-2 me-xl-3" style="max-width: 33.15%;">
                      <div class="d-flex">
                        <div id="swpA" class="swiper">
                          <div class="swiper-wrapper">
                            <div class="swiper-slide">
                              <a href="20220520guide.html">
                                <img src="images/act/2022/05/20/images/slide-a-1.png" class="img-fluid" alt="當日結帳金額/滿2千送1百銀幣">
                              </a>
                            </div>
                            <div class="swiper-slide">
                              <a href="20220520guide.html">
                                <img src="images/act/2022/05/20/images/slide-a-2.png" class="img-fluid" alt="當日結帳金額/滿6千送6百銀幣">
                              </a>
                            </div>
                            <div class="swiper-slide">
                              <a href="20220520guide.html">
                                <img src="images/act/2022/05/20/images/slide-a-3.png" class="img-fluid" alt="當日結帳金額/滿1萬2千送1千4百銀幣">
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button class="btn p-0" type="button">
                        <img src="images/act/2022/05/20/images/btn-member-only.png" class="img-fluid" alt="會員限定" onclick="window.open('https://www.vivatv.com.tw/html/20220318_mgm.html');">
                      </button>
                    </div>
                    <div class="d-flex" style="max-width: 59.89%;">
                      <div id="swpB" class="swiper position-relative">
                        <div class="swiper-wrapper">
                          <div class="swiper-slide">
                            <a href="20220520guide.html">
                              <img src="images/act/2022/05/20/images/slide-b-1.png" class="img-fluid" alt="全通路消費累計滿6千抽Le Creuset「韓式飯碗組」">
                            </a>
                          </div>
                          <div class="swiper-slide">
                            <a href="20220520guide.html">
                              <img src="images/act/2022/05/20/images/slide-b-2.png" class="img-fluid" alt="全通路消費累計滿3千抽阿原YUAN-艾草小團圓皂串">
                            </a>
                          </div>
                        </div>
                        <div class="swiper-pagination position-absolute bottom-0"></div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <!-- 公格商品 -->
      <div class="container-xl p-0">
        <div class="row g-0 justify-content-center">
          <div class="col-12" style="max-width: 1200px;">
            <item-app></item-app>
          </div>
        </div>
      </div>


      <!-- 側邊選單 -->
      <div class="side-menu-wrapper">
        <div class="side-menu-header"></div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">
            
            <div class="d-flex flex-column">
              <button class="btn btn-grunge text-white mb-2 pe-none" type="button">仲夏好運接力</button>
              <!-- <button class="btn btn-grunge text-white mb-2" type="button">滿2000送100</button> -->
              <button class="btn btn-grunge text-white mb-2" type="button" onclick="location.href='20220520guide.html'">滿6000送600</button>
              <!-- <button class="btn btn-grunge text-white mb-2" type="button">滿12000送1400</button>
              <button class="btn btn-grunge text-white mb-2" type="button">抽阿原艾草皂串</button> -->
              <button class="btn btn-grunge text-white mb-2" type="button" onclick="window.open('https://www.vivatv.com.tw/html/202205_creditcard.html')">銀行優惠</button>
              <!-- <button class="btn btn-grunge text-white mb-2" type="button">6/18一日下殺</button> -->
            </div>
            
            <div class="d-flex flex-column side-menu-bottom-bg px-3">
              <button class="btn btn-grunge text-white mb-1 mb-xxl-1 pe-none" type="button">好康推薦</button>
              <button class="btn btn-grunge text-white mb-1 mb-xxl-1" type="button" onclick="window.open('https://www.vivatv.com.tw/Home.go#ThisWeekNewSale')">本週新品</button>
              <button class="btn btn-grunge text-white mb-1 mb-xxl-1" type="button" onclick="window.open('https://www.vivatv.com.tw/Shops.go?ctype=1&catb=11&ShopCategoryId=57A1B2891B10444DE0440003BA0FF88E')">美味食光</button>
              <button class="btn btn-grunge text-white mb-1 mb-xxl-1" type="button" onclick="window.open('https://www.vivatv.com.tw/Shops.go?ctype=1&catb=13&ShopCategoryId=80CF037E7120311EE0440003BA0FF88E')">開運珍藏</button>
              <button class="btn btn-grunge text-white mb-1 mb-xxl-1" type="button" onclick="window.open('https://www.vivatv.com.tw/Shops.go?ctype=1&catb=7&ShopCategoryId=C04AE75708173CA7E05400144FF9CEC6')">健康生活</button>
              <button class="btn btn-grunge text-white mb-1 mb-xxl-1" type="button" onclick="window.open('https://www.vivatv.com.tw/Shops.go?ctype=1&catb=4&ShopCategoryId=57A24D23F00F52C2E0440003BA0FF872')">時尚名品</button>
              <button class="btn btn-grunge text-white mb-1 mb-xxl-1" type="button" onclick="window.open('https://www.vivatv.com.tw/Shops.go?ctype=1&catb=2&ShopCategoryId=000000002')">質感家電</button>
            </div>
          </div>
        </div>
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
      wave2: false
      // wave3: false
    };
  },
  components: {
    'item-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/05/20/js/component/itemApp.vue'),
    'modal-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/05/20/js/component/modalApp.vue')
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/05/20/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/05/20/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/05/20/images/og-wave2.jpg");
        } 

        
      }*/


      

      
      
      
      

      
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

