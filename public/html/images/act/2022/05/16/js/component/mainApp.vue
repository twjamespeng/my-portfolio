<template>
	<div :class="wave2 ? 'wave-2' : ''">
    <div class="bg-start"></div>
    <div class="bg-end"></div>

    <div class="page-wrapper">

      <div class="header-wrapper">

        <div class="position-relative mx-auto" style="max-width: 1220px;">
          <!-- mobile -->
          <div class="d-block d-md-none">
            <img class="img-fluid" src="images/act/2022/05/16/images/m/main.png" alt="新客募集ViVa銀幣大FUN送">
          </div>
          <!-- desktop -->
          <div class="d-none d-md-block main">
            <img class="img-fluid" src="images/act/2022/05/16/images/main.png" alt="新客募集ViVa銀幣大FUN送">
          </div>
        </div>
        <div class="position-relative mx-auto" style="max-width: 1220px;">
          <a href="https://www.vivatv.com.tw/avyGachaR11935Home.do" title="扭蛋機抽獎GO">
            <!-- mobile -->
            <div class="d-block d-md-none">
              <img class="img-fluid" src="images/act/2022/05/16/images/m/btn-go.png" alt="扭蛋機抽獎GO">
            </div>
            <!-- desktop -->
            <div class="d-none d-md-block">
              <img class="img-fluid" src="images/act/2022/05/16/images/btn-go.png" alt="扭蛋機抽獎GO">
            </div>
          </a>
        </div>

      </div>

      <div class="event-rule mx-auto position-relative" style="max-width: 1220px;">
        <div class="container-xl p-0">
          <div class="row g-0 justify-content-center">
            <div class="col-12 col-xl-8 fs-xl-5 p-3">
              <ol class="ps-3">
                <li>
                  <span class="d-inline-flex">
                    <span class="flex-shrink-0">活動期間：</span>
                    <span>2022/5/16 10:00-2022/5/20 10:00。</span>
                  </span>
                </li>
                <li>
                  <span class="d-inline-flex">
                    <span class="flex-shrink-0">活動內容：</span>
                    <span>活動期間加入會員即可參與每日搶銀幣活動 / 次日中午12時歸戶（每一帳號限參與一次）</span>
                  </span>
                </li>
                <li>
                  <span class="d-inline-flex">
                    <span class="flex-shrink-0">活動獎項：</span>
                    <span>每日100元銀幣 / 限350名<br>每日200元銀幣 / 限250名<br>每日300元銀幣 / 限100名</span>
                  </span>
                </li>
                <li>
                  <span class="d-inline-flex">
                    <span class="flex-shrink-0">銀幣使用期限：</span>
                    <span>2022/6/30</span>
                  </span>
                </li>
                
              </ol>
              <p>￭ ViVa TV美好購物網保有活動變更、修改或終止本活動之權力，如有異動，修改後之內容將公佈於官網上。</p>   
            </div>
            <div class="col-12 col-xl-8">
              <div class="d-flex justify-content-center px-3">
                <img src="images/act/2022/05/16/images/title.png" class="img-fluid" alt="銀幣用起來">
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="content-wrapper mx-auto position-relative">
        <div class="container-xl p-3 pb-xl-5" style="max-width: 1200px;">
          <item-app></item-app>
        </div>
      </div>

      
      
    </div><!-- page-wrapper -->

    <!-- <div class="side-menu-wrapper">
      <div class="side-menu-header">
        <img src="images/act/2022/05/16/images/sideMenu_header.png" class="img-fluid" alt="side menu header">
      </div>
      <div class="side-menu-body">
        <div class="d-flex flex-column">
          <div class="my-3">
            <img src="images/act/2022/05/16/images/sideMenu_title_1.png" class="img-fluid" alt="">
          </div>
          <div class="d-flex flex-column">
            <button class="btn bg-transparent text-white fs-5" type="button" onclick="window.open('https://www.vivatv.com.tw/html/20220318_mgm.html')"><span class="border-bottom">新會員見面禮</span></button>
            <button class="btn bg-transparent text-white fs-5" type="button" data-bs-toggle="modal" data-bs-target="#eventModal" data-bs-anchor="anchor-300"><span class="border-bottom">滿3000送300</span></button>
            <button class="btn bg-transparent text-white fs-5" type="button" data-bs-toggle="modal" data-bs-target="#eventModal" data-bs-anchor="anchor-pot"><span class="border-bottom">抽HARIO冷泡壺</span></button>
            <button class="btn bg-transparent text-white fs-5" type="button" onclick="window.open('https://www.vivatv.com.tw/html/202204_creditcard.html')"><span class="border-bottom">銀行優惠</span></button>
          </div>
          <div class="my-3">
            <img src="images/act/2022/05/16/images/sideMenu_title_2.png" class="img-fluid" alt="">
          </div>
          <div class="d-flex flex-column px-2 mb-2">
            <div class="btn-group">
              <button class="btn bg-transparent text-white fs-5" type="button" onclick="window.open('https://www.vivatv.com.tw/Home.go#ThisWeekNewSale')"><span class="border-bottom">新品</span></button>
              <button class="btn bg-transparent text-white fs-5" type="button" onclick="window.open('http://www.vivatv.com.tw/Shops.go?ctype=1&catb=13&ShopCategoryId=57A1B2891B10444DE0440003BA0FF88E')"><span class="border-bottom">美食</span></button>
            </div>
            <div class="btn-group">
              <button class="btn bg-transparent text-white fs-5" type="button" onclick="window.open('http://www.vivatv.com.tw/Shops.go?ctype=1&catb=9&ShopCategoryId=C04AE75708173CA7E05400144FF9CEC6')"><span class="border-bottom">保健</span></button>
              <button class="btn bg-transparent text-white fs-5" type="button" onclick="window.open('http://www.vivatv.com.tw/Shops.go?ctype=1&catb=6&ShopCategoryId=57A24D23F00F52C2E0440003BA0FF872')"><span class="border-bottom">時尚</span></button>  
            </div>
            <div class="btn-group">
              <button class="btn bg-transparent text-white fs-5" type="button" onclick="window.open('http://www.vivatv.com.tw/Shops.go?ctype=1&catb=3&ShopCategoryId=000000002')"><span class="border-bottom">家電</span></button>
              <button class="btn bg-transparent text-white fs-5" type="button" onclick="window.open('http://www.vivatv.com.tw/Shops.go?ctype=1&catb=15&ShopCategoryId=C5532AF44E31474EE05400144FF82309')"><span class="border-bottom">日用</span></button>  
            </div>
            <div class="btn-group">
              <button class="btn bg-transparent text-white fs-5" type="button" onclick="window.open('http://www.vivatv.com.tw/Shops.go?catb=6&catm=8&middleCategoryId=BDD8624B20C335A6E0440003BA0FF872')"><span class="d-inline-block border-bottom" style="line-height: 1.2;">鑽石<br>珠寶</span></button>
              <button class="btn bg-transparent text-white fs-5" type="button" onclick="window.open('http://www.vivatv.com.tw/Shops.go?catb=1&catm=1&middleCategoryId=1C16E678B2573A94E0540003BA0FF88E')"><span class="d-inline-block border-bottom" style="line-height: 1.2;">TV<br>熱銷</span></button>  
            </div>
          </div>
        </div>
      </div>
      <div class="side-menu-footer" onclick="scrollToAnchor('bodyTop');">
        <img src="images/act/2022/05/16/images/sideMenu_backToTop.png" class="img-fluid" alt="side menu back to top">
      </div>
    </div> -->


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
      // wave3: false
    };
  },
  components: {
    'item-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/05/16/js/component/itemApp.vue'),
    'modal-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/05/16/js/component/modalApp.vue')
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

      const swpMain3 = new Swiper('#swpMain3', {
        loop: false,
        spaceBetween: 10,
        effect: 'slide',
      });

      // let m = 'febuary';

      let timeFromURL = this.getUrlParameter('t');
      if (timeFromURL) {
        let monthFromURL = timeFromURL.substr(4, 2);
        let mmddFromURL = timeFromURL.substr(4, 4);
        console.log('mmddFromURL: ' + mmddFromURL);

        /*if (timeFromURL.substr(0,8) == '20230516') {
          this.wave2 = true;

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/05/16/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20220425') {
          this.wave2 = true;
          // this.wave3 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/05/16/images/og-wave2.jpg");
        }*/

      } else {
        let year = moment().format('YYYY');
        let month = moment().format('MM');
        let date = moment().format('DD');

        

        let yyyymmdd = year + month + date ;
        console.log('mmdd: ' + yyyymmdd);

        /*if (yyyymmdd >= '20230516') { 
          this.wave2 = true;
          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/05/16/images/og-wave2.jpg");
        } */

        
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
        this.youtubeURL = 'https://www.youtube.com/embed/LSLsRrpFlCw?playsinline=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&autoplay=0&mute=1&playlist=LSLsRrpFlCw&loop=1'; //1st promo
      } else {
        this.youtubeURL = 'https://www.youtube.com/embed/LSLsRrpFlCw?playsinline=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&autoplay=0&mute=1&playlist=LSLsRrpFlCw&loop=1'; //2nd promo
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

