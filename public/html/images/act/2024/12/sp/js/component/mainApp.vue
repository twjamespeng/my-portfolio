<template>
  <div>
    <div>
      
      

      <div v-if="wave1" class="landing-main wave1 container-fluid position-relative p-0" style="z-index: 120">
        <div id="scene" class="w-100 position-relative">
          <div class="landing-bg us-none">
            <picture>
              <source srcset="images/act/2024/12/sp/images/wave1/landing-bg.jpg" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/landing-bg.jpg" alt="landing-bg">
            </picture>

            <!-- <video id="goldParticles" class="wave1" muted loop playsinline webkit-playsinline>
              <source src="images/act/2024/12/sp/images/wave1/brush.webm" type="video/webm">
              <source src="images/act/2024/12/sp/images/wave1/brush.mp4" type="video/mp4">
            </video> -->

            <!-- <canvas id="Bokeh"></canvas> -->

            <div id="tsparticles"></div>

            <div class="landing-logo pe-none us-none" style="z-index: 3;">  
              <picture>
                <source srcset="images/act/2024/12/sp/images/wave1/landing-logo.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/landing-logo.png" alt="landing logo">
              </picture>
              <div class="landing-logo-text-overlay"></div>
            </div>

            <div class="merry-xmas d-none d-lg-block pe-none us-none">
              <picture>
                <source srcset="images/act/2024/12/sp/images/wave1/merry-xmas.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/merry-xmas.png" alt="merry-xmas">
              </picture>
            </div>

            <div class="tree-light pe-none us-none">
              <picture>
                <source srcset="images/act/2024/12/sp/images/wave1/tree-light.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/tree-light.png" alt="tree-light">
              </picture>
            </div>

            <div class="happy-new-year d-none d-lg-block pe-none us-none">
              <picture>
                <source srcset="images/act/2024/12/sp/images/wave1/happy-new-year.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/happy-new-year.png" alt="happy-new-year">
              </picture>
            </div>

            <div class="xmas-tree pe-none us-none">
              <picture>
                <source srcset="images/act/2024/12/sp/images/wave1/xmas-tree.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/xmas-tree.png" alt="xmas-tree">
              </picture>
            </div>

            <div class="xmas-tree-star pe-none us-none">
              <picture>
                <source srcset="images/act/2024/12/sp/images/wave1/xmas-tree-star.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2024/12/sp/images/wave1/mobile/xmas-tree-star.png" alt="xmas-tree-star">
              </picture>
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


      

      <div id="signInTimer">
        <div class="d-flex flex-column">
          <div id="secondsRemain"><span class="fs-4">還有</span><span id="signInSeconds" class="fs-4">10</span><span class="fs-4">秒即可完成任務</span></div>
          <div id="questComplete"><span>任務完成</span><br><a class="btn btn-primary fs-5" href="202411checkin.html?q=done">回上一頁進行簽到</a></div>
        </div>
      </div>


      

      

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
    'item-app': httpVueLoader('/html/images/act/2024/12/sp/js/component/itemApp.vue'),
    'modal-app': httpVueLoader('/html/images/act/2024/12/sp/js/component/modalApp.vue')
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2024/12/sp/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2024/12/sp/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2024/12/sp/images/og-wave2.jpg");
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
      
      
      

      if ( moment(timeNow).isBetween('2024-11-21 00:00:00', '2025-01-01 23:59:59', 'second', '[]') ) {
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

