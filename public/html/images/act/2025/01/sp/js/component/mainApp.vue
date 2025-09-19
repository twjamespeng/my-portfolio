<template>
  <div>
    <div>
      
      

      <div v-if="wave1" class="landing-main wave1 container-fluid position-relative p-0" style="z-index: 120">
        <div id="scene" class="w-100 position-relative">
          <div class="landing-bg us-none">
            <picture>
              <source srcset="images/act/2025/01/sp/images/wave1/landing-bg.jpg" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/landing-bg.jpg" alt="landing-bg">
            </picture>

            <video id="goldParticles" class="wave1" muted loop playsinline webkit-playsinline>
              <source src="images/act/2025/01/sp/images/wave1/cosmos.webm" type="video/webm">
              <source src="images/act/2025/01/sp/images/wave1/cosmos.mp4" type="video/mp4">
            </video>
            <!-- https://www.freepik.com/premium-video/flying-small-red-valentine-hearts-with-colorful-confetti-romantic-sky_1191900#fromView=search&page=3&position=9&uuid=34a36cac-4e40-499f-ba28-dd3f91b4f5e9 -->
            
            <!-- https://www.freepik.com/premium-video/animation-closeup-motion-small-romantic-hearts-glitters-red-valentines-day-shiny-background_140554#fromView=search&page=3&position=17&uuid=54e873db-64b1-4a5e-b492-3cc3d77a2b17 -->


            <!-- <canvas id="Bokeh"></canvas> -->

            <!-- <div id="tsparticles"></div> -->

            <!-- <div class="landing-logo pe-none us-none" style="z-index: 3;">  
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave1/landing-logo.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/landing-logo.png" alt="landing logo">
              </picture>
              <div class="landing-logo-text-overlay"></div>
            </div> -->

            <div class="left-back-flower" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave1/left-back-flower.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/left-back-flower.png">
              </picture>
            </div>
            <div class="left-back-flower-small" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave1/left-back-flower-small.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/left-back-flower-small.png">
              </picture>
            </div>

            <div class="landing-text landing-text-1" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave1/landing-text-1-gold.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/landing-text-1-gold.png">
              </picture>
              <div class="landing-text-1-red">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave1/landing-text-1-red.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/landing-text-1-red.png">
                </picture>
              </div>
              <div class="landing-text-1-overlay"></div>
            </div>
            <div class="landing-text landing-text-2" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave1/landing-text-2-gold.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/landing-text-2-gold.png">
              </picture>
              <div class="landing-text-2-red">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave1/landing-text-2-red.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/landing-text-2-red.png">
                </picture>
              </div>
              <div class="landing-text-2-overlay"></div>
            </div>
            <div class="landing-text landing-text-3" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave1/landing-text-3-gold.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/landing-text-3-gold.png">
              </picture>
              <div class="landing-text-3-red">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave1/landing-text-3-red.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/landing-text-3-red.png">
                </picture>
              </div>
              <div class="landing-text-3-overlay"></div>
            </div>
            <div class="landing-text landing-text-4" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave1/landing-text-4-gold.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/landing-text-4-gold.png">
              </picture>
              <div class="landing-text-4-red">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave1/landing-text-4-red.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/landing-text-4-red.png">
                </picture>
              </div>
              <div class="landing-text-4-overlay"></div>
            </div>
            
            <div class="right-umbrella" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave1/right-umbrella.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/right-umbrella.png">
              </picture>
            </div>

            <div class="golden-snake" style="z-index: 3;">
              <div class="golden-snake-inner">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave1/golden-snake.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/golden-snake.png">
                </picture>
              </div>
            </div>

            <div class="viva-logo-golden" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave1/viva-logo-golden.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/viva-logo-golden.png">
              </picture>
            </div>

            <div class="landing-date" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave1/landing-date.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/landing-date.png">
              </picture>
            </div>

            <div class="landing-doors" style="z-index: 3;">
              <div class="landing-door-left"></div>
              <div class="landing-door-right"></div>
            </div>
            <div class="landing-decorations" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave1/landing-decorations.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/landing-decorations.png">
              </picture>
            </div>
            <div class="left-front-flower" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave1/left-front-flower.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/left-front-flower.png">
              </picture>
            </div>


            <div class="tree-left" style="z-index: 3;">
              <div class="tree-left-inner">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave1/tree-left.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/tree-left.png">
                </picture>
              </div>
            </div>
            <div class="tree-right" style="z-index: 3;">
              <div class="tree-right-inner">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave1/tree-right.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave1/mobile/tree-right.png">
                </picture>
              </div>
            </div>

            


          </div>
          
        </div>
      </div>

      <div v-if="wave2" class="landing-main wave2 container-fluid position-relative p-0" style="z-index: 120">
        <div id="scene" class="w-100 position-relative">
          <div class="landing-bg us-none">
            <picture>
              <source srcset="images/act/2025/01/sp/images/wave2/landing-bg.jpg" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/landing-bg.jpg" alt="landing-bg">
            </picture>

            <video id="goldParticles" class="wave2" muted loop playsinline webkit-playsinline>
              <source src="images/act/2025/01/sp/images/wave2/hearts.webm" type="video/webm">
              <source src="images/act/2025/01/sp/images/wave2/hearts.mp4" type="video/mp4">
            </video>

            <!-- https://www.freepik.com/premium-video/animation-red-hearts-icons-floating-black-background_2601734#fromView=resource_detail&position=0&from_element=related_resources -->

            


            <!-- <canvas id="Bokeh"></canvas> -->

            <!-- <div id="tsparticles"></div> -->

            <!-- <div class="landing-logo pe-none us-none" style="z-index: 3;">  
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/landing-logo.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/landing-logo.png" alt="landing logo">
              </picture>
              <div class="landing-logo-text-overlay"></div>
            </div> -->

            <div class="left-back-flower" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/left-back-flower.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/left-back-flower.png">
              </picture>
            </div>
            <!-- <div class="left-back-flower-small" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/left-back-flower-small.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/left-back-flower-small.png">
              </picture>
            </div> -->

            <div class="viva-logo-golden" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/viva-logo-golden.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/viva-logo-golden.png">
              </picture>
            </div>

            <div class="landing-bridge" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/landing-bridge.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/landing-bridge.png">
              </picture>

              <div class="landing-lovers">
                <div class="landing-female">
                  <picture>
                    <source srcset="images/act/2025/01/sp/images/wave2/female.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/female.png">
                  </picture>
                </div>
                <div class="landing-male">
                  <picture>
                    <source srcset="images/act/2025/01/sp/images/wave2/male.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/male.png">
                  </picture>
                </div>
              </div>



            </div>

            <div class="landing-text landing-text-1" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/landing-text-1-gold.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/landing-text-1-gold.png">
              </picture>
              <div class="landing-text-1-red">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave2/landing-text-1-red.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/landing-text-1-red.png">
                </picture>
              </div>
              <div class="landing-text-1-overlay"></div>
            </div>
            <div class="landing-text landing-text-2" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/landing-text-2-gold.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/landing-text-2-gold.png">
              </picture>
              <div class="landing-text-2-red">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave2/landing-text-2-red.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/landing-text-2-red.png">
                </picture>
              </div>
              <div class="landing-text-2-overlay"></div>
            </div>
            <div class="landing-text landing-text-3" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/landing-text-3-gold.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/landing-text-3-gold.png">
              </picture>
              <div class="landing-text-3-red">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave2/landing-text-3-red.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/landing-text-3-red.png">
                </picture>
              </div>
              <div class="landing-text-3-overlay"></div>
            </div>
            <div class="landing-text landing-text-4" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/landing-text-4-gold.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/landing-text-4-gold.png">
              </picture>
              <div class="landing-text-4-red">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave2/landing-text-4-red.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/landing-text-4-red.png">
                </picture>
              </div>
              <div class="landing-text-4-overlay"></div>
            </div>
            
            <!-- <div class="right-umbrella" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/right-umbrella.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/right-umbrella.png">
              </picture>
            </div> -->

            <div class="golden-snake" style="z-index: 3;">
              <div class="golden-snake-inner">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave2/golden-snake.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/golden-snake.png">
                </picture>
              </div>
            </div>

            

            <div class="landing-date" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/landing-date.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/landing-date.png">
              </picture>
            </div>

            <div class="landing-doors" style="z-index: 3;">
              <div class="landing-door-left"></div>
              <div class="landing-door-right"></div>
            </div>
            <div class="landing-decorations" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/landing-decorations.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/landing-decorations.png">
              </picture>
            </div>
            <div class="left-front-flower" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/left-front-flower.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/left-front-flower.png">
              </picture>
            </div>
            <div class="right-front-flower" style="z-index: 3;">
              <picture>
                <source srcset="images/act/2025/01/sp/images/wave2/right-front-flower.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/right-front-flower.png">
              </picture>
            </div>


            
            <div class="tree-right" style="z-index: 3;">
              <div class="tree-right-inner">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave2/tree-right.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/tree-right.png">
                </picture>
              </div>
            </div>
            <div class="golden-snake" style="z-index: 3;">
              <div class="golden-snake-inner">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave2/golden-snake.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/golden-snake.png">
                </picture>
              </div>
            </div>
            <div class="tree-left" style="z-index: 3;">
              <div class="tree-left-inner">
                <picture>
                  <source srcset="images/act/2025/01/sp/images/wave2/tree-left.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/01/sp/images/wave2/mobile/tree-left.png">
                </picture>
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
    'item-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2025/01/sp/js/component/itemApp.vue'),
    'modal-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2025/01/sp/js/component/modalApp.vue')
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2025/01/sp/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2025/01/sp/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2025/01/sp/images/og-wave2.jpg");
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
      
      
      

      
      if ( moment(timeNow).isBetween('2024-12-12 00:00:00', '2025-02-02 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
      }
      if ( moment(timeNow).isBetween('2025-02-03 00:00:00', '2025-02-16 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
        document.body.classList.add('wave2');
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

