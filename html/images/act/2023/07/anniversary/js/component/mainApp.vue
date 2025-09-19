<template>
  <div>
    <div class="position-relative">
      <video v-if="wave1" class="wave1" loop playsinline muted>
        <!-- <source src="images/act/2023/07/anniversary/images/confetti.webm" type="video/webm"> -->
        <source src="images/act/2023/07/anniversary/images/confetti.mp4" type="video/mp4">
      </video>

      <video v-if="wave2" class="wave2" loop playsinline muted>
        <!-- <source src="images/act/2023/07/anniversary/images/confetti.webm" type="video/webm"> -->
        <source src="images/act/2023/07/anniversary/images/confetti.mp4" type="video/mp4">
      </video>

      

      <div v-if="wave1" class="landing-main wave1 container-fluid position-relative p-0" style="z-index: 1">
        <div id="scene" class="w-100 position-relative overflow-hidden">

          <div class="landing-background pe-none us-none">
            <picture>
              <source srcset="images/act/2023/07/anniversary/images/wave1/landing.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/07/anniversary/images/wave1/mobile/bg-main.jpg" alt="landing">
            </picture>
          </div>

          <div class="landing-balloon pe-none us-none">
            <picture>
              <source srcset="images/act/2023/07/anniversary/images/wave1/landing-balloon.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/07/anniversary/images/wave1/landing-balloon.png" alt="landing">
            </picture>
          </div>

          <div class="landing-go" style="z-index: 4" title="查看活動詳情">
            <a data-bs-toggle="modal" href="#eventModal-Wave1-D" class="d-block">
              <picture>
                <source srcset="images/act/2023/07/anniversary/images/wave1/landing-go.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/07/anniversary/images/wave1/mobile/landing-go.png" alt="landing go">
              </picture>
            </a>
          </div>

        </div>
      </div>

      <div v-if="wave2" class="landing-main wave2 container-fluid position-relative p-0" style="z-index: 1">
        <div id="scene" class="w-100 position-relative overflow-hidden">

          <div class="landing-background pe-none us-none">
            <picture>
              <source srcset="images/act/2023/07/anniversary/images/wave2/landing.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/07/anniversary/images/wave2/mobile/bg-main.jpg" alt="landing">
            </picture>
          </div>

          <div class="landing-balloon pe-none us-none">
            <picture>
              <source srcset="images/act/2023/07/anniversary/images/wave2/landing-balloon.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/07/anniversary/images/wave2/landing-balloon.png" alt="landing">
            </picture>
          </div>

          <div class="landing-go" style="z-index: 4" title="查看活動詳情">
            <a data-bs-toggle="modal" href="#eventModal-Wave1-D" class="d-block">
              <picture>
                <source srcset="images/act/2023/07/anniversary/images/wave2/landing-go.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/07/anniversary/images/wave2/mobile/landing-go.png" alt="landing go">
              </picture>
            </a>
          </div>

        </div>
      </div>

      

      

      <!-- 左選單 -->
      <div v-if="wave1" class="wave1 side-menu-wrapper-left">
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-3">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">異國好風味</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/7E85B72A7D003B7CE0536E0212AC29EE'">拒絕溼答答</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/ED06AA0FB0996686E05400144FF82309'">健康養成季</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">撲鼻聞香趣</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">點綴新時尚</button>
            </div>

            <div class="d-flex flex-column side-menu-group-2 px-3 py-1">
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000004')">生活</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000002')">家電</button>
              </div>
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A24D23F00F52C2E0440003BA0FF872')">時尚</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000003')">美妝</button>  
              </div>
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C04AE75708173CA7E05400144FF9CEC6')">健康</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A1B2891B10444DE0440003BA0FF88E')">美食</button>
              </div>
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C5532AF44E31474EE05400144FF82309')">日用</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C064C88E9DDC3999E05400144FF82309')">３Ｃ</button>
              </div>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>
      <!-- 右選單 -->
      <div v-if="wave1" class="wave1 side-menu-wrapper-right">
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-3">
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C">驚喜大放送</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D">消費刷手禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-A">新客有禮賞</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B">新客首購禮</button>
            </div>
            
            <div class="d-flex flex-column side-menu-group-2">
              <a href="#sectionA" class="btn rounded-0">美好璀璨</a>
              <a href="#sectionB" class="btn rounded-0">完美心肌</a>
              <a href="#sectionC" class="btn rounded-0">禮享時光</a>
              <a href="#sectionD" class="btn rounded-0">享樂生活</a>
              <a href="#sectionE" class="btn rounded-0">極致品味</a>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>

      <!-- 左選單 -->
      <div v-if="wave2" class="wave1 side-menu-wrapper-left">
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-3">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">異國好風味</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/7E85B72A7D003B7CE0536E0212AC29EE'">拒絕溼答答</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/A1D4C5712CD12C8EE0536F0212AC6C55'">健康養成季</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">撲鼻聞香趣</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">點綴新時尚</button>
            </div>

            <div class="d-flex flex-column side-menu-group-2 px-3 py-1">
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000004')">生活</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000002')">家電</button>
              </div>
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A24D23F00F52C2E0440003BA0FF872')">時尚</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000003')">美妝</button>  
              </div>
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C04AE75708173CA7E05400144FF9CEC6')">健康</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A1B2891B10444DE0440003BA0FF88E')">美食</button>
              </div>
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C5532AF44E31474EE05400144FF82309')">日用</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C064C88E9DDC3999E05400144FF82309')">３Ｃ</button>
              </div>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>
      <!-- 右選單 -->
      <div v-if="wave2" class="wave1 side-menu-wrapper-right">
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-3">
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C">驚喜大放送</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D">消費刷手禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-A">新客有禮賞</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-B">新客首購禮</button>
            </div>
            
            <div class="d-flex flex-column side-menu-group-2">
              <a href="#sectionE" class="btn rounded-0">極致品味</a>
              <a href="#sectionD" class="btn rounded-0">享樂生活</a>
              <a href="#sectionC" class="btn rounded-0">禮享時光</a>
              <a href="#sectionB" class="btn rounded-0">完美心肌</a>
              <a href="#sectionA" class="btn rounded-0">美好璀璨</a>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

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
      wave2: false
    };
  },
  components: {
    'item-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2023/07/anniversary/js/component/itemApp.vue'),
    'modal-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2023/07/anniversary/js/component/modalApp.vue')
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/07/anniversary/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/07/anniversary/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/07/anniversary/images/og-wave2.jpg");
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
      

      if ( moment(timeNow).isBetween('2023-07-11 00:00:00', '2023-08-07 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
      }

      if ( moment(timeNow).isBetween('2023-08-08 00:00:00', '2023-08-31 23:59:59', 'second', '[]') ) {
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

