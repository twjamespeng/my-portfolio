<template>
  <div>
    <div class="d-flex flex-column position-relative">

      
      <div class="landing-main">
        <picture class="d-block position-relative" style="z-index: 2;">
          <source srcset="images/act/2024/12/flyer/images/wave1/landing-bg.jpg" media="(min-width: 992px)">
          <img class="img-fluid pe-none us-none" src="images/act/2024/12/flyer/images/wave1/mobile/landing-bg.jpg" alt="landing">
        </picture>

        

        <div class="landing-wheel-outer pe-none us-none" style="z-index: 2;">
          <picture>
            <source srcset="images/act/2024/12/flyer/images/wave1/landing-wheel-outer.png" media="(min-width: 992px)">
            <img class="img-fluid pe-none us-none" src="images/act/2024/12/flyer/images/wave1/mobile/landing-wheel-outer.png" alt="landing wheel outer">
          </picture>
        </div>

        <div class="landing-foods pe-none us-none" style="z-index: 3;">
          <picture>
            <source srcset="images/act/2024/12/flyer/images/wave1/landing-foods.png" media="(min-width: 992px)">
            <img class="img-fluid pe-none us-none" src="images/act/2024/12/flyer/images/wave1/mobile/landing-foods.png" alt="landing foods">
          </picture>

          <div class="landing-food-5 pe-none us-none">
            <picture>
              <source srcset="images/act/2024/12/flyer/images/wave1/landing-food-5.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2024/12/flyer/images/wave1/mobile/landing-food-5.png" alt="landing food 5">
            </picture>
          </div>
          <div class="landing-food-4 pe-none us-none">
            <picture>
              <source srcset="images/act/2024/12/flyer/images/wave1/landing-food-4.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2024/12/flyer/images/wave1/mobile/landing-food-4.png" alt="landing food 4">
            </picture>
          </div>
          <div class="landing-food-3 pe-none us-none">
            <picture>
              <source srcset="images/act/2024/12/flyer/images/wave1/landing-food-3.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2024/12/flyer/images/wave1/mobile/landing-food-3.png" alt="landing food 3">
            </picture>
          </div>
          <div class="landing-food-2 pe-none us-none">
            <picture>
              <source srcset="images/act/2024/12/flyer/images/wave1/landing-food-2.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2024/12/flyer/images/wave1/mobile/landing-food-2.png" alt="landing food 2">
            </picture>
          </div>
          <div class="landing-food-1 pe-none us-none">
            <picture>
              <source srcset="images/act/2024/12/flyer/images/wave1/landing-food-1.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2024/12/flyer/images/wave1/mobile/landing-food-1.png" alt="landing food 1">
            </picture>
          </div>
        </div>


        <div class="landing-wheel-inner pe-none us-none" style="z-index: 2;">
          <picture>
            <source srcset="images/act/2024/12/flyer/images/wave1/landing-wheel-inner.png" media="(min-width: 992px)">
            <img class="img-fluid pe-none us-none" src="images/act/2024/12/flyer/images/wave1/mobile/landing-wheel-inner.png" alt="landing wheel inner">
          </picture>
        </div>
        <div class="landing-logo pe-none us-none" style="z-index: 3;">  
          <picture>
            <source srcset="images/act/2024/12/flyer/images/wave1/landing-logo.png" media="(min-width: 992px)">
            <img class="img-fluid pe-none us-none" src="images/act/2024/12/flyer/images/wave1/mobile/landing-logo.png" alt="landing logo">
          </picture>
          <div class="landing-logo-text-overlay"></div>
        </div>

        <video id="goldParticles" class="wave1" muted loop playsinline webkit-playsinline>
          <source src="images/act/2024/12/flyer/images/wave1/smoke.webm" type="video/webm">
          <source src="images/act/2024/12/flyer/images/wave1/smoke.mp4" type="video/mp4">
        </video>
        
      </div>

      

      <!-- <div class="event-date text-center text-white mb-3 p-3" style="">活動期間：2023/5/19(五)～6/25(日)</div> -->

      <!-- 公格商品 itemApp -->
      <div class="container-fluid container-item-app p-0 position-relative" style="z-index: 2;">
        <item-app></item-app>  
      </div>

      <!-- modal -->
      <modal-app></modal-app>

    
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      youtubeURL: '',
      month: '',
      wave1: false,
      wave2: false
    };
  },
  components: {
    'item-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2024/12/flyer/js/component/itemApp.vue"),
    'modal-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2024/12/flyer/js/component/modalApp.vue")
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2024/12/flyer/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2024/12/flyer/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2024/12/flyer/images/og-wave2.jpg");
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
      

      if ( moment(timeNow).isBetween('2024-12-04 00:00:00', '2025-02-16 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
      }

      // if ( moment(timeNow).isBetween('2024-09-01 00:00:00', '2024-10-13 23:59:59', 'second', '[]') ) {
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

