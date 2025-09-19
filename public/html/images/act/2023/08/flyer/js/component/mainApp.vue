<template>
  <div>
    <div class="d-flex flex-column position-relative">

      
      <div class="landing-main">
        <picture class="d-block position-relative" style="z-index: 2;">
          <source srcset="images/act/2023/08/flyer/images/wave1/landing-2560.png" media="(min-width: 1921px)">
          <source srcset="images/act/2023/08/flyer/images/wave1/landing.png" media="(min-width: 992px)">

          <img class="img-fluid pe-none us-none" src="images/act/2023/08/flyer/images/wave1/mobile/landing.png" alt="landing">
        </picture>
        <div class="landing-cloud-group">
          <div class="landing-left-cloud"><img class="img-fluid pe-none us-none" src="images/act/2023/08/flyer/images/wave1/left-cloud.png" alt="left cloud"></div>
          <div class="landing-right-cloud"><img class="img-fluid pe-none us-none" src="images/act/2023/08/flyer/images/wave1/right-cloud.png" alt="right cloud"></div>  
        </div>
      </div>

      <!-- <div class="event-btn-container container-lg p-0 position-relative mb-3" style="z-index: 1;">
        <div class="d-flex flex-column flex-lg-row event-btn-group">
          <div class="p-3 py-1">
            <a href="#eventModal-Wave1-A" data-bs-toggle="modal" class="d-block">
              <picture class="d-block">
                <source srcset="images/act/2023/08/flyer/images/wave1/btn-1.png" media="(min-width: 992px)">
                <img class="img-fluid" src="images/act/2023/08/flyer/images/wave1/mobile/btn-1.png" alt="滿額送200銀幣">
              </picture>
            </a>
          </div>
          <div class="d-none d-lg-block p-3 py-1 pt-lg-4">
            <a href="#eventModal-Wave1-B" data-bs-toggle="modal" class="d-block">
              <picture class="d-block">
                <source srcset="images/act/2023/08/flyer/images/wave1/btn-2.png" media="(min-width: 992px)">
                <img class="img-fluid" src="images/act/2023/08/flyer/images/wave1/mobile/btn-2.png" alt="滿額抽精緻家電廚具">
              </picture>
            </a>
          </div>
          <div class="p-3 py-1">
            <a href="#eventModal-Wave1-C" data-bs-toggle="modal" class="d-block">
              <picture class="d-block">
                <source srcset="images/act/2023/08/flyer/images/wave1/btn-3.png" media="(min-width: 992px)">
                <img class="img-fluid" src="images/act/2023/08/flyer/images/wave1/mobile/btn-3.png" alt="消費最高送18,888金幣">
              </picture>
            </a>
          </div>
          <div class="d-block d-lg-none p-3 py-1 pt-lg-4">
            <a href="#eventModal-Wave1-B" data-bs-toggle="modal" class="d-block">
              <picture class="d-block">
                <source srcset="images/act/2023/08/flyer/images/wave1/btn-2.png" media="(min-width: 992px)">
                <img class="img-fluid" src="images/act/2023/08/flyer/images/wave1/mobile/btn-2.png" alt="滿額抽精緻家電廚具">
              </picture>
            </a>
          </div>
        </div>
      </div> -->

      <!-- <div class="event-date text-center text-white mb-3 p-3" style="">活動期間：2023/5/19(五)～6/25(日)</div> -->

      <!-- 公格商品 itemApp -->
      <div class="container-fluid container-item-app p-0 position-relative">
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
    'item-app': httpVueLoader('/html/images/act/2023/08/flyer/js/component/itemApp.vue'),
    'modal-app': httpVueLoader('/html/images/act/2023/08/flyer/js/component/modalApp.vue')
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/08/flyer/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/08/flyer/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/08/flyer/images/og-wave2.jpg");
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
      

      // if ( moment(timeNow).isBetween('2023-05-16 00:00:00', '2023-06-04 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
      // }

      // if ( moment(timeNow).isBetween('2023-06-05 00:00:00', '2023-06-25 23:59:59', 'second', '[]') ) {
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

