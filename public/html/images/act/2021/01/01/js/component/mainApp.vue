<template>
	<div :class="feb ? 'febuary' : 'january'">
    <div class="page-wrapper animate__animated animate__fadeIn">
      <div class="header-wrapper">
        
        <!-- mobile -->
        <div class="d-block d-md-none">
          <img v-if="feb" class="img-fluid" src="images/act/2021/01/01/images/main-mobile-2.jpg" alt="美好開春慶 消費滿3千送5百 滿5千抽iPhone12">
          <img v-else class="img-fluid" src="images/act/2021/01/01/images/main-mobile.jpg" alt="美好開春慶 消費滿3千送5百 滿5千抽iPhone12">
        </div>
        <!-- desktop -->
        <div class="d-none d-md-block main">
          <img v-if="feb" class="img-fluid" src="images/act/2021/01/01/images/main-2.jpg" alt="美好開春慶 消費滿3千送5百 滿5千抽iPhone12">
          <img v-else class="img-fluid" src="images/act/2021/01/01/images/main.jpg" alt="美好開春慶 消費滿3千送5百 滿5千抽iPhone12">
          
          <div class="flower-container">
            <div class="flower-shadow"></div>
            <div class="flower"></div>  
          </div>
          
          <div class="event-1 animate__animated animate__fadeInUp">
            <a title="活動說明" href="#eventModal" data-toggle="modal"><img class="img-fluid" alt="滿額送 消費滿3千送5百" src="images/act/2021/01/01/images/event-1.png"></a>
          </div>
          <div class="event-2 animate__animated animate__fadeInUp">
            <a title="活動說明" href="#eventModal" data-toggle="modal"><img class="img-fluid" alt="滿額抽 消費滿5千抽iPhone12" src="images/act/2021/01/01/images/event-2.png"></a>
          </div>
          <div v-if="feb" class="event-3 d-none d-md-block animate__animated animate__fadeInRight">
            <a title="活動說明" href="#eventModal" data-toggle="modal"><img class="img-fluid" alt="滿額抽 消費滿5千抽iPhone12" src="images/act/2021/01/01/images/event-3.png"></a>
          </div>
        </div>
        
        <div class="cf-container">
          <div class="embed-responsive embed-responsive-16by9 bg-dark">
            <iframe class="embed-responsive-item" :src="youtubeURL" allowfullscreen></iframe>
          </div>  
        </div>

      </div>
      <!-- <div v-if="feb" class="event-3 d-block d-md-none">
        <img class="img-fluid" alt="滿額抽 消費滿5千抽iPhone12" src="images/act/2021/01/01/images/event-3-mobile.jpg">
      </div> -->
      
        <div class="content-wrapper">
          <!-- <div class="item-header"></div> -->
          <div class="container-fluid bg-970a2a">
            <item-app></item-app>
          </div>
          <div class="d-block d-xl-none col-12 px-2 pt-0 pb-2">
            <button type="button" class="btn btn-block btn-light rounded-0" data-toggle="modal" data-target="#eventModal">活動說明</button>
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
      feb: false
    };
  },
  components: {
    'item-app': httpVueLoader('/html/images/act/2021/01/01/js/component/itemApp.vue'),
    'modal-app': httpVueLoader('/html/images/act/2021/01/01/js/component/modalApp.vue')
  },
  methods: {
    init: function() {
      var main = this;
      main.promoCheck();

      let m = 'febuary';
      let timeFromURL = this.getUrlParameter('t');
      if (timeFromURL) {
        let monthFromURL = timeFromURL.substr(4, 2);
        let mmddFromURL = timeFromURL.substr(4, 4);



        if (monthFromURL == '02') {
          this.feb = true;
          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2021/01/01/images/og-820x462-wave2.jpg");
        }
        if (mmddFromURL == '0216') {
          $('body').addClass('oneday');
        }
      } else {
        let month = moment().format('MM');
        let date = moment().format('DD');

        console.log('date'+date);

        if (month == '02') { 
          this.feb = true;
          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2021/01/01/images/og-820x462-wave2.jpg");
        }

        if (date == '16') {
          $('body').addClass('oneday');
        }
      }
      
      
      

      
    },
    promoCheck: function() {
    	let timeFromURL = this.getUrlParameter('t');

      let today = moment().format('YYYY-MM-DD');

      if (timeFromURL >= '20210201') {
      	today = '2021-02-01';
      }

      let promoChangeDate = moment('2021-02-01');
      if (moment(today).isBefore(promoChangeDate)) {
        this.youtubeURL = 'https://www.youtube.com/embed/yIkyCHVCn9w?playsinline=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&autoplay=1&mute=1&playlist=yIkyCHVCn9w&loop=1'; //1st promo
      } else {
        this.youtubeURL = 'https://www.youtube.com/embed/TrXBKK3oq8I?playsinline=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&autoplay=1&mute=1&playlist=TrXBKK3oq8I&loop=1'; //2nd promo
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

