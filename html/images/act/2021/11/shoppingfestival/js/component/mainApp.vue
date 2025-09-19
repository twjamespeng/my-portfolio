<template>
	<div :class="wave2 ? 'wave-2' : ''">
    <div class="bg-start"></div>
    <div class="bg-end"></div>
    <div class="page-wrapper">

      <div class="header-wrapper">

        <div class="position-relative mx-auto" style="max-width: 1200px;">
          <!-- mobile -->
          <div class="d-block d-lg-none">
            <img v-if="wave2" class="img-fluid" src="images/act/2021/11/shoppingfestival/images/main-m-2.jpg" alt="買就抽好禮 滿額享20%回饋">
            <img v-else class="img-fluid" src="images/act/2021/11/shoppingfestival/images/main-m.jpg" alt="買就抽好禮 滿額享20%回饋">
          </div>
          <!-- desktop -->
          <div class="d-none d-lg-block main">
            <img v-if="wave2" class="img-fluid" src="images/act/2021/11/shoppingfestival/images/main-2.jpg" alt="買就抽好禮 滿額享20%回饋">
            <img v-else class="img-fluid" src="images/act/2021/11/shoppingfestival/images/main.jpg" alt="買就抽好禮 滿額享20%回饋">
          </div>

          
          
          <!-- slider -->
          <div class="promo-slider promo-slider-1">
            <div id="swpMain" class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#eventModal">
                    <img src="images/act/2021/11/shoppingfestival/images/slide-1.png" class="img-fluid">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/20210801_mgm.html" target="_blank">
                    <img src="images/act/2021/11/shoppingfestival/images/slide-2.png" class="img-fluid">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#eventModal">
                    <img src="images/act/2021/11/shoppingfestival/images/slide-3.png" class="img-fluid">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#eventModal">
                    <img src="images/act/2021/11/shoppingfestival/images/slide-4.png" class="img-fluid">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#eventModal">
                    <img src="images/act/2021/11/shoppingfestival/images/slide-5.png" class="img-fluid">
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          
          <div class="promo-slider promo-slider-2">
            <div id="swpMain2" class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#eventModal">
                    <img src="images/act/2021/11/shoppingfestival/images/slide-1.png" class="img-fluid">
                  </a>
                </div>
                <!-- <div class="swiper-slide" style="width: 200px;">
                  <div class="ratio ratio-16x9 bg-dark">
                    <iframe :src="youtubeURL" allowfullscreen></iframe>
                  </div>
                </div> -->
                <div class="swiper-slide">
                  <a href="https://www.vivatv.com.tw/html/20210801_mgm.html" target="_blank">
                    <img src="images/act/2021/11/shoppingfestival/images/slide-2.png" class="img-fluid">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#eventModal">
                    <img src="images/act/2021/11/shoppingfestival/images/slide-3.png" class="img-fluid">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#eventModal">
                    <img src="images/act/2021/11/shoppingfestival/images/slide-4.png" class="img-fluid">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#eventModal">
                    <img src="images/act/2021/11/shoppingfestival/images/slide-5.png" class="img-fluid">
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>


          <!-- 活動說明btn -->
          <div class="d-block d-md-block btn-detail">
            <button class="btn btn-dark rounded-3" type="button" data-bs-toggle="modal" data-bs-target="#eventModal">活動說明 <i class="fas fa-chevron-right"></i></button>
          </div>


        </div>

        




        
        <!-- youtube -->
        <!-- <div class="cf-container">
          <div class="mx-auto position-relative" style="max-width: 680px;">
            <div class="ratio ratio-16x9 bg-dark">
              <iframe :src="youtubeURL" allowfullscreen></iframe>
            </div>
          </div>
        </div> -->

        
        <!-- mobile title image -->
        <div class="d-block d-md-block text-center">
          <img v-if="wave2" src="images/act/2021/11/shoppingfestival/images/title-2.jpg" class="img-fluid">
          <img v-else src="images/act/2021/11/shoppingfestival/images/title.jpg" class="img-fluid">
        </div>

      </div>
      
      
        <div class="content-wrapper pb-lg-4 mx-auto position-relative" style="max-width: 1200px;">
          <div class="container-fluid">
            <item-app></item-app>
          </div>
        </div>
      
    </div><!-- page-wrapper -->
    <modal-app></modal-app>
	</div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      youtubeURL: '',
      month: '',
      wave2: false
    };
  },
  components: {
    'item-app': httpVueLoader('/html/images/act/2021/11/shoppingfestival/js/component/itemApp.vue'),
    'modal-app': httpVueLoader('/html/images/act/2021/11/shoppingfestival/js/component/modalApp.vue')
  },
  methods: {
    init: function() {
      var main = this;
      main.promoCheck();

      const swpMain = new Swiper('#swpMain', {
        loop: true,
        autoplay: {
          delay: 4000,
        },

        spaceBetween: 10,
        effect: 'slide',
        pagination: {
          el: '.promo-slider-1 .swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });

      const swpMain2 = new Swiper('#swpMain2', {
        loop: true,
        autoplay: {
          delay: 4000,
        },

        spaceBetween: 10,
        effect: 'slide',
        pagination: {
          el: '.promo-slider-2 .swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });

      // let m = 'febuary';

      let timeFromURL = this.getUrlParameter('t');
      if (timeFromURL) {
        let monthFromURL = timeFromURL.substr(4, 2);
        let mmddFromURL = timeFromURL.substr(4, 4);
        console.log('mmddFromURL: ' + mmddFromURL);


        

        if (mmddFromURL >= '1115') {
          this.wave2 = true;
          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2021/11/shoppingfestival/images/og-wave2.jpg");
        }
      } else {
        let month = moment().format('MM');
        let date = moment().format('DD');

        

        let mmdd = month + date ;
        console.log('mmdd: ' + mmdd);

        if (mmdd >= '1115') { 
          this.wave2 = true;
          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2021/11/shoppingfestival/images/og-wave2.jpg");
        }

        
      }
      
      
      

      
    },
    promoCheck: function() {
    	let timeFromURL = this.getUrlParameter('t');

      let today = moment().format('YYYY-MM-DD');

      if (timeFromURL >= '20211102') {
      	today = '2021-11-02';
      }

      let promoChangeDate = moment('2021-11-02');
      if (moment(today).isBefore(promoChangeDate)) {
        this.youtubeURL = 'https://www.youtube.com/embed/kr9oZIBhZIk?playsinline=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&autoplay=0&mute=1&playlist=kr9oZIBhZIk&loop=1'; //1st promo
      } else {
        this.youtubeURL = 'https://www.youtube.com/embed/4ahQGbh645Q?playsinline=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&autoplay=0&mute=1&playlist=4ahQGbh645Q&loop=1'; //2nd promo
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

