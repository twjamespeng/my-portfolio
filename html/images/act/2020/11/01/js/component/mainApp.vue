<template>
	<div>
    <div class="bg-wrapper animate__animated animate__fadeIn">
      <div class="bg rellax" data-rellax-speed="5">
        <img class="img-fluid" src="images/act/2020/11/01/images/bg.jpg">
      </div>
    </div>
    <div class="host-wrapper animate__animated animate__fadeIn">
      <div class="d-none d-xl-block host-yy rellax" data-rellax-speed="-2" data-rellax-zindex="1">
        <div class="animate__animated animate__fadeInLeft animate__delay-2s">
          <img class="img-fluid" src="images/act/2020/11/01/images/host-yy.png" alt="主持人言羽">
        </div>
      </div>
      <div class="d-none d-xl-block host-may rellax" data-rellax-speed="-2" data-rellax-zindex="1">
        <div class="animate__animated animate__fadeInRight animate__delay-2s">
          <img class="img-fluid" src="images/act/2020/11/01/images/host-may.png" alt="主持人茵如">
        </div>
      </div>
      <div class="d-none d-xl-block host-fang rellax animate__animated animate__zoomIn animate__delay-2s" data-rellax-speed="-2" data-rellax-zindex="1">
        <img class="img-fluid" src="images/act/2020/11/01/images/host-fang.png" alt="主持人其芳">
      </div>
    </div>
    <div class="page-wrapper animate__animated animate__fadeIn">
      <div class="header-wrapper">
        <div class="row">
          <!-- logo mobile -->
          <div class="d-block d-xl-none col-12 offset-0 col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-3 logo rellax" data-rellax-speed="-3" data-rellax-zindex="2">
            <img class="img-fluid" src="images/act/2020/11/01/images/logo-mobile.png" alt="購物狂歡節 消費滿3000送500 週週抽王品牛排雙人餐券">
          </div>
          <div class="d-block d-xl-none col-12 hosts rellax" data-rellax-speed="0" data-rellax-zindex="3">
            <img class="img-fluid" src="images/act/2020/11/01/images/hosts.png" alt="主持人">
          </div>
        </div>
        <div class="row px-5">
          <!-- logo desktop -->
          <div class="d-none d-xl-block col-lg-8 offset-lg-2 col-xxl-10 offset-xxl-1 logo rellax animate__animated animate__zoomInDown animate__delay-1s" data-rellax-speed="0" data-rellax-zindex="2">
            <img class="img-fluid" src="images/act/2020/11/01/images/logo.png" alt="購物狂歡節 消費滿3000送500 週週抽王品牛排雙人餐券">
            <div class="d-none d-xl-block col-lg-2 text-center btn-detail">
              <button type="button" class="btn btn-orange rounded-pill" data-toggle="modal" data-target="#eventModal">活動說明</button>
            </div>
          </div>
        </div>
        <div class="row px-5 px-lg-0 px-xxxl-5 mb-0 mt-xl-3 mb-xl-n5 justify-content-center">
          <div class="col-12 col-lg-3 d-flex flex-grow-1 order-2 order-lg-1 mb-4 p-0 p-sm-2" style="z-index: 3;">
            <div class="card text-center border-0 rounded-0 shadow-sm animate__animated animate__flipInX animate__delay-4s">
              <img src="images/act/2020/11/01/images/banner-500dollar.jpg" class="card-img-top rounded-0" alt="消費滿3000送500">
              <div class="card-body d-flex justify-content-center align-items-center">
                <div class="card-text d-flex flex-grow-1 justify-content-center">消費滿3千送5百 累積回饋無上限</div>
                
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 d-flex flex-grow-1 order-4 order-lg-2 mb-4 p-0 p-sm-2" style="z-index: 3;">
            <div class="card text-center border-0 rounded-0 shadow-sm card-111 animate__animated animate__flipInX animate__delay-3s">
              <img src="images/act/2020/11/01/images/banner-1100dollar.jpg" class="card-img-top rounded-0" alt="11/1購買下列商品送1100元購物金">
              <div class="card-body d-flex justify-content-center align-items-center">
                <div class="card-text d-flex flex-grow-1 justify-content-center">11/1購買下列商品送1,100元購物金</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 d-flex flex-grow-1 order-3 order-lg-3 mb-4 p-0 p-sm-2" style="z-index: 3;">
            <div class="card text-center border-0 rounded-0 shadow-sm animate__animated animate__flipInX animate__delay-3s">
              <img src="images/act/2020/11/01/images/banner-steak.jpg" class="card-img-top rounded-0" alt="不限金額週週抽王品牛排雙人套餐">
              <div class="card-body d-flex justify-content-center align-items-center">
                <div class="card-text d-flex flex-grow-1 justify-content-center">不限金額 週週抽王品牛排雙人套餐</div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-3 d-flex flex-grow-1 order-1 order-lg-4 mb-4 p-1 p-sm-1 bg-light shadow-sm animate__animated animate__flipInX animate__delay-4s" style="z-index: 3;">
            <div class="embed-responsive embed-responsive-16by9 bg-dark">
              <iframe class="embed-responsive-item" :src="youtubeURL" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="item-header"></div>
        <div class="container-fluid bg-orange">
          <item-app></item-app>
        </div>
        <div class="d-block d-xl-none col-12 px-2 pt-0 pb-2">
          <button type="button" class="btn btn-block btn-orange rounded-0" data-toggle="modal" data-target="#eventModal">活動說明</button>
        </div>
        <div class="pillar-left-wrapper">
          <div class="rellax pillar-left" data-rellax-speed="6"></div>
        </div>
        <div class="pillar-right-wrapper">
          <div class="rellax pillar-right" data-rellax-speed="6"></div>
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
      youtubeURL: ''
    };
  },
  components: {
    'item-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2020/11/01/js/component/itemApp.vue"),
    'modal-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2020/11/01/js/component/modalApp.vue")
  },
  methods: {
    init: function() {
      var main = this;
      main.promoCheck();
    },
    promoCheck: function() {
      let today = moment().format('YYYY-MM-DD');
      let promoChangeDate = moment('2020-11-02');
      if (moment(today).isBefore(promoChangeDate)) {
        this.youtubeURL = 'https://www.youtube.com/embed/x6rZggKU4QE?playsinline=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&autoplay=1&mute=1&playlist=x6rZggKU4QE&loop=1'; //1st promo
      } else {
        this.youtubeURL = 'https://www.youtube.com/embed/2DR9oyutrac?playsinline=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&autoplay=1&mute=1&playlist=2DR9oyutrac&loop=1'; //2nd promo
      }
    }
  },
  mounted: function() {
    this.init();
    var rellax = new Rellax('.rellax', {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
  }
}
</script>

