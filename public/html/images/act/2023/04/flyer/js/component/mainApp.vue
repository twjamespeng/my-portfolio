<template>
  <div>
    <div class="position-relative">

      <div v-if="wave1" class="landing-main wave1 container-fluid p-0" style="z-index: 1">
        <div class="w-100 text-center position-relative">
          
          <div class="landing-background us-none" style="z-index: 1;">
            <div class="position-relative pe-none">
              <picture>
                <source srcset="images/act/2023/04/flyer/images/wave1/landing.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2023/04/flyer/images/wave1/mobile/landing.png" alt="閃耀女人 好禮馨意">
              </picture>
            </div>

            <div class="landing-button-group" style="z-index: -1;">
              <div class="landing-btn-1">
                <a href="https://www.vivatv.com.tw/html/202304dailycheckin.html?utm_source=member_mde&utm_medium=mde&utm_campaign=member_mde_202304flyer" class="d-block">
                  <picture>
                    <source srcset="images/act/2023/04/flyer/images/wave1/btn-1.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid us-none" src="images/act/2023/04/flyer/images/wave1/mobile/btn-1.png" title="簽到拿金幣" alt="簽到拿金幣">
                  </picture>
                </a>
              </div>
              <div class="landing-btn-2">
                <a href="https://www.vivatv.com.tw/html/202304sp.html?utm_source=member_mde&utm_medium=mde&utm_campaign=member_mde_202304flyer">
                  <picture>
                    <source srcset="images/act/2023/04/flyer/images/wave1/btn-2.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid us-none" src="images/act/2023/04/flyer/images/wave1/mobile/btn-2.png" title="消費滿額送" alt="消費滿額送">
                  </picture>
                </a>
              </div>
              <div class="landing-btn-3">
                <a href="https://www.vivatv.com.tw/html/202304signup.html?utm_source=member_mde&utm_medium=mde&utm_campaign=member_mde_202304flyer">
                  <picture>
                    <source srcset="images/act/2023/04/flyer/images/wave1/btn-3.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid us-none" src="images/act/2023/04/flyer/images/wave1/mobile/btn-3.png" title="滿額抽好禮" alt="滿額抽好禮">
                  </picture>
                </a>
              </div>
            </div>
            <a class="d-block" href="https://www.vivatv.com.tw/signUp?utm_source=member_mde&utm_medium=mde&utm_campaign=member_mde_202304flyer" title="新客好禮GO">
              <div class="landing-new-comer"></div>
            </a>
          </div>
        </div>
      </div>

      <div class="container-xl p-0 mb-5">
        <div class="row g-0">
          <div class="col-12 pt-5 pt-xl-0 position-relative">
            
            <div class="cookies-group">
              <div class="cookie-1">
                <img src="images/act/2023/04/flyer/images/wave1/cookie-1.png" class="img-fluid">
              </div>
              <div class="cookie-2">
                <img src="images/act/2023/04/flyer/images/wave1/cookie-2.png" class="img-fluid">
              </div>
              <div class="cookie-3">
                <img src="images/act/2023/04/flyer/images/wave1/cookie-3.png" class="img-fluid">
              </div>

              <div class="cookie-4">
                <img src="images/act/2023/04/flyer/images/wave1/cookie-4.png" class="img-fluid">
              </div>
              <div class="cookie-5">
                <img src="images/act/2023/04/flyer/images/wave1/cookie-5.png" class="img-fluid">
              </div>
              <div class="cookie-6">
                <img src="images/act/2023/04/flyer/images/wave1/cookie-6.png" class="img-fluid">
              </div>
            </div>

            <a href="https://www.vivatv.com.tw/goods/3123332023/C5DF6D117D7F00E9E05400144FF9CEC6?utm_source=member_mde&utm_medium=mde&utm_campaign=member_mde_202304flyer">
              <picture>
                <source srcset="images/act/2023/04/flyer/images/wave1/primary.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid us-none" src="images/act/2023/04/flyer/images/wave1/mobile/primary.png" title="【大武山牧場 X 艾許奶油 X 法朋】頂級手工餅乾禮盒 BUTTER EGG PREMIUM HANDMADE COOKIE" alt="【大武山牧場 X 艾許奶油 X 法朋】頂級手工餅乾禮盒 BUTTER EGG PREMIUM HANDMADE COOKIE">
              </picture>
            </a>
            
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
    'item-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2023/04/flyer/js/component/itemApp.vue"),
    'modal-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2023/04/flyer/js/component/modalApp.vue")
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/04/flyer/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/04/flyer/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/04/flyer/images/og-wave2.jpg");
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
      

      if ( moment(timeNow).isBetween('2023-02-18 00:00:00', '2023-05-14 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
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

