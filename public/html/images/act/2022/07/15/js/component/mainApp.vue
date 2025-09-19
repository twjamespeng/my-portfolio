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
                <img class="img-fluid d-inline d-md-none" src="images/act/2022/07/15/images/m/main.png" alt="饗樂時光">
                <!-- desktop -->
                <img class="img-fluid d-none d-md-inline" src="images/act/2022/07/15/images/main.png" alt="饗樂時光">
              </div>

              <!-- btn-section -->
              <div class="d-flex flex-column flex-md-row justify-content-center p-1 mt-3 my-xl-4">
                <div class="d-flex flex-column mb-2">
                  <div class="mb-2">
                    <a href="https://www.vivatv.com.tw/Shops.go?catb=1&catm=19&smallCategoryId=DF416DF323CE5107E05400144FF82309"><img class="img-fluid" src="images/act/2022/07/15/images/btn-section-debuyer.png" alt="de Buyder專區"></a>  
                  </div>
                  <div class="d-flex justify-content-end pe-xl-2">
                    <button class="btn btn-secondary btn-dark rounded-pill" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-1" style="transform: scale(0.8)">活動說明<i class="fa-solid fa-chevron-right ms-1"></i></button>
                  </div>
                </div>
                <div class="d-flex flex-column mb-2">
                  <div class="mb-2">
                    <a href="https://www.vivatv.com.tw/Shops.go?catb=1&catm=19&smallCategoryId=DF416FC3434605A9E05400144FF9CEC6"><img class="img-fluid" src="images/act/2022/07/15/images/btn-section-sabreparis.png" alt="Sabre Paris專區"></a>  
                  </div>
                  <div class="d-flex justify-content-end pe-xl-2">
                    <button class="btn btn-secondary btn-dark rounded-pill" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-2" style="transform: scale(0.8)">活動說明<i class="fa-solid fa-chevron-right ms-1"></i></button>
                  </div>
                </div>
              </div>

              <!-- btn-product -->
              <div class="d-flex justify-content-center position-relative p-2 p-xl-0 mt-xl-4 mb-xl-5">
                <img class="img-fluid" src="images/act/2022/07/15/images/bg-frame.png">
                <div class="position-absolute top-0 start-0 w-100 h-100">
                  <div class="d-flex justify-content-center align-items-center h-100 px-2 px-xl-0 pt-3 pt-xl-5">
                    <div class="mx-2">
                      <a href="https://www.vivatv.com.tw/Product.go?itemCode=3059432022">
                        <img class="img-fluid d-inline d-md-none" src="images/act/2022/07/15/images/m/btn-product-debuyer.png" alt="de Buyder">
                        <img class="img-fluid d-none d-md-inline" src="images/act/2022/07/15/images/btn-product-debuyer.png" alt="de Buyder">
                      </a>
                    </div>
                    <div class="mx-2">
                      <a href="https://www.vivatv.com.tw/Product.go?itemCode=3059422022">
                        <img class="img-fluid d-inline d-md-none" src="images/act/2022/07/15/images/m/btn-product-sabreparis.png" alt="Sabre Paris">
                        <img class="img-fluid d-none d-md-inline" src="images/act/2022/07/15/images/btn-product-sabreparis.png" alt="Sabre Paris">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
      wave2: false
      // wave3: false
    };
  },
  components: {
    'item-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/07/15/js/component/itemApp.vue'),
    'modal-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/07/15/js/component/modalApp.vue')
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/07/15/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/07/15/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/07/15/images/og-wave2.jpg");
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

