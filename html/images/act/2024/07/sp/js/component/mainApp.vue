<template>
  <div>
    <div>
      
      

      <div v-if="wave1" class="landing-main wave1 container-fluid position-relative p-0" style="z-index: 120">
        <div id="scene" class="w-100 position-relative">
          <div class="landing-bg us-none">
            <picture>
              <source srcset="images/act/2024/07/sp/images/wave1/landing-bg.jpg" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2024/07/sp/images/wave1/mobile/landing-bg.jpg" alt="landing-bg">
            </picture>

            

            <video id="goldParticles" class="wave1" muted loop playsinline webkit-playsinline>
              <source src="images/act/2024/07/sp/images/wave1/gold.webm" type="video/webm">
              <source src="images/act/2024/07/sp/images/wave1/gold.mp4" type="video/mp4">
            </video>

            <!-- <div class="gold-particles">
            <iframe src="https://www.youtube.com/embed/dSP3LkYGO58?playlist=dSP3LkYGO58&controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" frameborder="0" allowfullscreen></iframe>
            </div> -->
            
            <div class="landing-viva-logo pe-none us-none" style="z-index: 3;">  
              <picture>
                <source srcset="images/act/2024/07/sp/images/wave1/landing-vivalogo.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2024/07/sp/images/wave1/mobile/landing-vivalogo.png" alt="landing vivalogo">
              </picture>
            </div>

            
            <div class="landing-logo-back pe-none us-none" style="z-index: 3;">  
              <picture>
                <source srcset="images/act/2024/07/sp/images/wave1/19logo-back.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2024/07/sp/images/wave1/mobile/19logo-back.png" alt="19logo-back">
              </picture>
              <div class="landing-logo-plate">
                <picture>
                  <source srcset="images/act/2024/07/sp/images/wave1/19logo-plate.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2024/07/sp/images/wave1/mobile/19logo-plate.png" alt="19logo-plate">
                </picture>
              </div>
              <div class="landing-logo-front">
                <picture>
                  <source srcset="images/act/2024/07/sp/images/wave1/19logo-front.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2024/07/sp/images/wave1/mobile/19logo-front.png" alt="19logo-front">
                </picture>
              </div>
              <div class="landing-logo-text">
                <picture>
                  <source srcset="images/act/2024/07/sp/images/wave1/19logo-text.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2024/07/sp/images/wave1/mobile/19logo-text.png" alt="19logo-text">
                </picture>
                <div class="landing-logo-text-overlay"></div>
              </div>
            </div>

            

            

          </div>
          
        </div>
      </div>

      <div v-if="wave2" class="landing-main wave2 container-fluid position-relative p-0" style="z-index: 120">
        <div id="scene" class="w-100 position-relative">
          <div class="landing-bg us-none">

            <picture>
              <source srcset="images/act/2024/07/sp/images/wave2/landing-bg.jpg" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2024/07/sp/images/wave2/mobile/landing-bg.jpg" alt="landing-bg">
            </picture>

            <video id="goldParticles" class="wave2" muted loop playsinline webkit-playsinline>
              <source src="images/act/2024/07/sp/images/wave2/gold3.webm" type="video/webm">
              <source src="images/act/2024/07/sp/images/wave2/gold3.mp4" type="video/mp4">
            </video>
            
            <div class="landing-viva-logo pe-none us-none" style="z-index: 3;">  
              <picture>
                <source srcset="images/act/2024/07/sp/images/wave2/landing-vivalogo.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2024/07/sp/images/wave2/mobile/landing-vivalogo.png" alt="landing vivalogo">
              </picture>
            </div>
            
            <div class="landing-logo-back pe-none us-none" style="z-index: 3;">  
              <picture>
                <source srcset="images/act/2024/07/sp/images/wave2/19logo-back.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2024/07/sp/images/wave2/mobile/19logo-back.png" alt="19logo-back">
              </picture>
              <div class="landing-logo-plate">
                <picture>
                  <source srcset="images/act/2024/07/sp/images/wave2/19logo-plate.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2024/07/sp/images/wave2/mobile/19logo-plate.png" alt="19logo-plate">
                </picture>
              </div>
              <div class="landing-logo-front">
                <picture>
                  <source srcset="images/act/2024/07/sp/images/wave2/19logo-front.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2024/07/sp/images/wave2/mobile/19logo-front.png" alt="19logo-front">
                </picture>
              </div>
              <div class="landing-logo-text">
                <picture>
                  <source srcset="images/act/2024/07/sp/images/wave2/19logo-text.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2024/07/sp/images/wave2/mobile/19logo-text.png" alt="19logo-text">
                </picture>
                <div class="landing-logo-text-overlay"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      

      

      <!-- 公格商品 itemApp -->
      <div class="container-fluid container-item-app p-0" style="z-index: 121;">
        
        <item-app></item-app>

      </div>

      <!-- modal -->
      <modal-app></modal-app>


      

      <!-- <div id="signInTimer">
        <div class="d-flex flex-column">
          <div id="secondsRemain"><span class="fs-4">還有</span><span id="signInSeconds" class="fs-4">10</span><span class="fs-4">秒即可完成任務</span></div>
          <div id="questComplete"><span>任務完成</span><br><a class="btn btn-primary fs-5" href="202404dailycheckin.html?q=done">回上一頁進行簽到</a></div>
        </div>
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
      wave1: false,
      wave2: false
    };
  },
  components: {
    'item-app': httpVueLoader('/html/images/act/2024/07/sp/js/component/itemApp.vue'),
    'modal-app': httpVueLoader('/html/images/act/2024/07/sp/js/component/modalApp.vue')
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2024/07/sp/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2024/07/sp/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2024/07/sp/images/og-wave2.jpg");
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
      
      
      if ( moment(timeNow).isBetween('2024-07-11 00:00:00', '2024-08-11 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
      }

      if ( moment(timeNow).isBetween('2024-08-12 00:00:00', '2024-08-31 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
        document.body.classList.add('wave2');
      }

      

      
      
      

      // if ( moment(timeNow).isBetween('2023-08-08 00:00:00', '2023-08-31 23:59:59', 'second', '[]') ) {
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

