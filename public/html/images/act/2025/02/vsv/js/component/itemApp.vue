<template>
  <div>
    <div class="container-xl position-relative">
      <div class="row justify-content-center mb-3 mb-xl-5">
        <div class="col-12 d-flex flex-column">
          <div class="d-flex flex-column flex-lg-row px-2">
            <div class="vsv-logo">
              <picture>
                <source srcset="images/act/2025/02/vsv/images/vsv-logo.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2025/02/vsv/images/mobile/vsv-logo.png" alt="美好黃金週 logo">
              </picture>
            </div>
            <div class="viva-live">
              <div class="ratio ratio-16x9">
                <iframe src="https://www.youtube.com/embed/7IyxOiGMLgw?playsinline=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&autoplay=1&mute=1&playlist=7IyxOiGMLgw&loop=1" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div class="live-text">
            <picture>
              <source srcset="images/act/2025/02/vsv/images/live-text.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2025/02/vsv/images/mobile/live-text.png" alt="">
            </picture>
          </div>
        </div>
      </div>
      <div v-if="item.available" v-for="item in items" class="row justify-content-center mb-3 mb-xl-5">
        <div class="col-12">
          <a v-if="item.launch" :href="item.url" class="d-block">
            <div class="item-today-wrapper d-flex flex-column px-2">
              <div v-if="item.today" class="live-time">
                <picture>
                  <source srcset="images/act/2025/02/vsv/images/live-time-1.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/02/vsv/images/mobile/live-time-1.png" alt="今日播出時間">
                </picture>
              </div>
              <div v-else class="live-time">
                <picture>
                  <source srcset="images/act/2025/02/vsv/images/live-time-2.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/02/vsv/images/mobile/live-time-2.png" alt="今日播出時間">
                </picture>
              </div>
              <div class="item-today">
                <div class="item-today-info">
                  <div class="item-today-fullname">
                    <span class="item-today-brand">{{item.brand}}</span>
                    <span class="item-today-name">{{item.name}}</span>
                  </div>
                  <div class="item-today-feature">
                    <ul class="ps-4" v-html="item.feature"></ul>
                  </div>
                  <div class="item-today-price">
                    <span class="item-today-price-type">限時價$</span>
                    <span class="item-today-price-number">{{item.price}}</span>
                    <span class="item-today-price-delete">{{item.marketprice}}</span>
                  </div>
                </div>
                <div class="item-today-image">
                  <!-- <div><img class="img-fluid" :src="item.imgsrc"></div> -->
                  <div><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="800" height="800"></div>
                  <div class="item-today-discount">
                    <span class="item-today-discount-number">{{item.discount}}</span>
                    <span>折</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div v-else>
            <div class="item-today-wrapper d-flex flex-column px-2">
              <div class="live-time">
                <picture>
                  <source srcset="images/act/2025/02/vsv/images/live-time-1.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/02/vsv/images/mobile/live-time-1.png" alt="今日播出時間">
                </picture>
              </div>
              <div class="item-today">
                <div class="item-today-info preview">
                  <div class="item-today-fullname">
                    <span class="item-today-brand">{{item.brand}}</span>
                    <span class="item-today-name">{{item.name}}</span>
                  </div>
                  <div class="item-today-feature">
                    <!-- <ul class="ps-4" v-html="item.feature"></ul> -->
                  </div>
                  <div class="item-today-price">
                    <span class="item-today-price-type"><span class="fw-bold">21:00</span>開賣 敬請期待</span>
                  </div>
                </div>
                <div class="item-today-image preview">
                  <!-- <div><img class="img-fluid" :src="item.imgsrc"></div> -->
                  <div><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="800" height="800"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-3 mb-xl-5">
        <div class="col-12">
          <div class="section-wrapper position-relative">
            <div class="section-observer"></div>
            <div class="section-row d-flex flex-column">
              <!-- 公格標題 -->
              <div class="section-title w-100 text-center">
                <picture>
                  <source srcset="images/act/2025/02/vsv/images/title.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2025/02/vsv/images/mobile/title.png" alt="title">
                </picture>
              </div>
              <!-- 公格商品 -->
              <div class="section-inner position-relative d-flex flex-column flex-xl-row justify-content-center">
                <div class="row row-cols-2 row-cols-md-4 g-0 justify-content-start justify-content-lg-center align-self-stretch w-100">
                  <div v-if="item.type === 'A1'" v-for="item in items" class="col p-1 p-xl-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                    <div class="item-date" :class="{'item-date-today' : item.today === true}">{{item.start.substr(5,5)}}</div>
                    <div class="item-inner d-flex flex-column">
                      <div class="d-flex flex-column p-2">
                        <div v-if="item.launch" class="item-body mb-xl-2">
                          <a :href="item.url" class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="800" height="800"></a>
                          <div class="item-discount">
                            <span class="item-discount-number">{{item.discount}}</span>
                            <span>折</span>
                          </div>
                        </div>
                        <div v-else class="item-body mb-xl-2">
                          <a class="d-block"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="800" height="800"></a>
                        </div>
                        <div v-if="item.launch" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                          <a :href="item.url">
                            <div class="item-slogan d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.slogan}}</span></div>
                            <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-0"><span>{{item.brand}}</span></div>
                            <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                            <div class="item-price text-center mb-1"><span class="price-type me-1">限時價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                          </a>
                        </div>
                        <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                          <div class="item-slogan d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>&nbsp;</span></div>
                          <div class="item-brand text-center mb-xl-0"><span>{{item.brand}}</span></div>
                          <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-2"><span>{{item.name}}</span></div>
                          <div class="item-price text-center mb-1"><span class="coming-soon lh-base"><span class="fw-normal">敬請期待</span></span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
module.exports = {
  data: function() {
    return {
      isLoading: false,
      failed: false,
      imgError: 'this.src="/html/images/act/2025/02/vsv/images/img-error.png"',
      items: [],
      wave1: false,
      wave2: false,
      tvoneday: false,
      bank_202501: false,
      bank_202502: false,
      ecOnly: false,
      before_0119: false
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = '/html/images/act/2025/02/vsv/json/data.json';
      var path;

      let timeFromURL = this.getUrlParameter('t');
      var dataTime;

      let year = moment().format('YYYY');
      let month = moment().format('MM');
      let date = moment().format('DD');

      var timeNow = moment().format('YYYY-MM-DD HH:mm:ss');


      if (timeFromURL) {
        timeNow = moment(timeFromURL).format('YYYY-MM-DD HH:mm:ss');
        console.log('timeNow: '+ timeNow);
      }

      var dateNow = timeNow.substr(5,2) + timeNow.substr(8,2);
      console.log('dateNow:'+dateNow);
      


      // if ( moment(timeNow).isBetween('2024-12-12 00:00:00', '2025-02-02 23:59:59', 'second', '[]') ) {
      //   this.wave1 = true;
      //   document.body.classList.add('wave1');
      // }
      

      

      
      
      

      
      

      path = path1;

      // if ( moment(timeNow).isSameOrBefore('2025-02-02 23:59:59') ) {
      //   path = path1;
      // } else {
      //   path = path2;
      // }

      console.log('path:'+path);
      


      if (timeFromURL) {
        // dataTime = timeFromURL.substr(4, 4);
        dataTime = timeFromURL;
        console.log('dataTime: ' + dataTime);
        
      } else {
        dataTime = year + month + date;
        console.log('dataTime: ' + dataTime);
        
        function showTimer() {
          
          console.log('從簽到頁來的');
          
          document.querySelector('#signInTimer').style.display = 'block';

          var signInStart = 10;

          const countdown = () => {
          let timer = document.getElementById("signInSeconds");
          // let dt = new Date();
          // let m = dt.getMinutes();
          // let s = dt.getSeconds();
          

          // minutes remaining until next 10 minute mark
          // m = s ? 9 - (m % 10) : 10 - (m % 10);

          // seconds remaining until next minute mark
            if (signInStart > 0) {
              signInStart = signInStart - 1 ;
              console.log('signInStart: ' + signInStart );
              timer.textContent = signInStart;
            }
            else if (signInStart == 0) {
              document.querySelector('#secondsRemain').style.display = 'none';
              document.querySelector('#questComplete').style.display = 'block';

              signInDate = year + month + date;
      
              var str = 'OK';
              console.log('***signInDate:', signInDate);
              localStorage.setItem(signInDate, str);
            }

          // timer.textContent = `${s < 10 ? "0" + s : s} `;
          };
       

          setInterval(countdown, 1000);


          

          
        }


        let fromSignInEvent = this.getUrlParameter('f');
          if (fromSignInEvent == '202411checkin') {
            showTimer();
          }
        }



      
      

      




      // 倒數計時

      var eventTime;

      // if ( moment(timeNow).isBetween('2024-10-16 00:00:00', '2024-10-27 23:59:59', 'second', '[]') ) {
      //   eventTime = moment('2024-10-26 10:12:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');
      // } else {
      //   eventTime = moment('2024-11-04 00:00:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');
      // }
      
      eventTime = moment('2024-12-22 10:12:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');



      if (timeFromURL) {
        var hhmmFromURL = timeFromURL.substr(8,2) + ':' + timeFromURL.substr(10,2) + ':00' ;
        console.log('hhmmFromURL:'+hhmmFromURL);
        currentTime = moment(hhmmFromURL, 'HH:mm:ss').diff(moment().startOf('year'), 'seconds');
        console.log('currentTime:'+currentTime);
      }

      console.log('eventTime: '+eventTime);
      
        
      var currentTime = moment().diff(moment().startOf('year'), 'seconds');
      
      console.log('currentTime: '+ currentTime);

      var diffTime = eventTime - currentTime;
        
        

      var timer = setInterval(function(){

        currentTime = moment().diff(moment().startOf('year'), 'seconds');

        

        diffTime = eventTime - currentTime;
        
        if (diffTime > 0) {

          var duration = moment.duration(diffTime*1000, 'milliseconds');
          var m = duration.months();
          var d = duration.days();
          var md = m*30 + d;
          
          

          $('.countdown').html(
            '倒數&ensp;' +
            '<span class="countdown-number">' + String(md).padStart(2, '0').substr(0,1) + '</span>' + 
            '<span class="countdown-number">' + String(md).padStart(2, '0').substr(1,1) + '</span> 天 ' + 
            '<span class="countdown-number">' + String(duration.hours()).padStart(2, '0').substr(0,1) + '</span>' + 
            '<span class="countdown-number">' + String(duration.hours()).padStart(2, '0').substr(1,1) + '</span> 時 ' + 
            '<span class="countdown-number">' + String(duration.minutes()).padStart(2, '0').substr(0,1) + '</span>' + 
            '<span class="countdown-number">' + String(duration.minutes()).padStart(2, '0').substr(1,1) + '</span> 分 ' + 
            '<span class="countdown-number">' + String(duration.seconds()).padStart(2, '0').substr(0,1) + '</span>' +
            '<span class="countdown-number">' + String(duration.seconds()).padStart(2, '0').substr(1,1) + '</span> 秒 ' );
        } else {
          $('.tvoneday-timer').hide();
          $('.countdown').hide();
          clearInterval(timer);
        }

      }, 1000);
          

      axios.get(path)
      .then(function(response){
        let data = response.data;
        self.isLoading = false;
        self.items = data;
        self.generateURL();
        self.checkDate();
        self.splitFeature();
        setInterval(function(){
          setTimeout(function(){
            self.checkDate();
          }, 0);
        }, 1000);
      })
    },
    generateURL: function() {
      for (let i=0; i < this.items.length; i++) {
        this.$set(this.items[i], "url", 'https://www.vivatv.com.tw/goods/' + this.items[i].id);
        this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.' + this.items[i].file );

        // if (this.items[i].id == '3079912022' || this.items[i].id == '2988582021' || this.items[i].id == '3120592023' || this.items[i].id == '3120482023' || this.items[i].id == '3134982023') {
        //   this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.png');
        // } else {
        //   this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
        // }

        // if (this.items[i].id == '2960272021') {
        //   this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.gif');
        // } else {
        //   this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
        // }
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2025/02/vsv/images/product/'+ this.items[i].id +'/1.jpg');
      }
    },
    splitFeature: function() {
      for (let j=0; j < this.items.length; j++) {
        var featureSplit = this.items[j].feature.split('◎').filter(i => i);

        let featureHTML = "";

        for (let k=0; k < featureSplit.length; k++) {
          if ((featureSplit[k].indexOf('加碼') >= 0) || (featureSplit[k].indexOf('贈') >= 0)) {
            featureHTML = featureHTML + '<li class="text-danger">' + featureSplit[k] + '</li>';
          } else {
            featureHTML = featureHTML + '<li>' + featureSplit[k] + '</li>';  
          }
          
        }

        this.items[j].feature = featureHTML;
      }
    },
    checkDate: function() {
      moment.locale('zh-tw');
      //Convert current time to moment object with utc time
      let utcTime = moment.utc().format('YYYY-MM-DD[T]HH:mm[Z]');
      let stillUtc = moment.utc(utcTime).toDate();
      let localTime = moment(stillUtc).local().format('YYYY-MM-DD[T]HH:mm[Z]');
      localTimeUtc = moment.utc(localTime, 'YYYY-MM-DD[T]HH:mm[Z]');

      let timeFromURL = this.getUrlParameter('t');
      if (timeFromURL) {
        //String is already in utc time, but still need to put it into utc mode
        localTimeUtc = moment.utc(timeFromURL, 'YYYY-MM-DD[T]HH:mm[Z]');
        
      }

      
      

      for (let j=0; j < this.items.length; j++) {

        let s, u, e;

        

        if (moment(this.items[j].start).day() == 3) {
          s = this.items[j].start + " 00:00:00";
          u = this.items[j].start + " 21:00:00";
          e = moment(this.items[j].start).add('days', 1).format('YYYY/MM/DD') + " 17:00:59";
        } 
        else if (moment(this.items[j].start).day() == 4) {
          s = this.items[j].start + " 17:01:00";
          u = this.items[j].start + " 21:00:00";
          e = moment(this.items[j].start).add('days', 1).format('YYYY/MM/DD') + " 17:00:59";
        }
        else if (moment(this.items[j].start).day() == 5) {
          s = this.items[j].start + " 17:01:00";
          u = this.items[j].start + " 21:00:00";
          e = moment(this.items[j].start).add('days', 1).format('YYYY/MM/DD') + " 23:59:59";
        }
        else {
          // do nothing
        }



        // let targetStart = moment.utc(this.items[j].start, 'YYYY-MM-DD[T]HH:mm[Z]');
        // let targetUnlock = moment.utc(this.items[j].unlock, 'YYYY-MM-DD[T]HH:mm[Z]');
        // let targetEnd = moment.utc(this.items[j].end, 'YYYY-MM-DD[T]HH:mm[Z]');

        let targetStart = moment.utc(s, 'YYYY-MM-DD[T]HH:mm[Z]');
        let targetUnlock = moment.utc(u, 'YYYY-MM-DD[T]HH:mm[Z]');
        let targetEnd = moment.utc(e, 'YYYY-MM-DD[T]HH:mm[Z]');        
        



        if ( moment(localTimeUtc).isBetween(targetStart, targetEnd, 'seconds', '[]') ) {
          this.items[j].available = true;
          // this.items[j].today = true;
        }
        else {
          // if ( moment(localTimeUtc).isAfter(targetEnd) ) {
          //   this.items[j].available = true;
          //   this.items[j].before = false;
          // } else {
          //   this.items[j].available = false;
          // }
          this.items[j].available = false;
          // this.items[j].today = false;
        }



        if ( moment(localTimeUtc).isSameOrAfter(targetUnlock) ) {
          this.items[j].launch = true;
        } else {
          this.items[j].launch = false;
        }

        if ( moment(localTimeUtc).format('YYYY/MM/DD') === moment(targetStart).format('YYYY/MM/DD') ) {
          this.items[j].today = true;
        } else {
          this.items[j].today = false;
        }

        // console.log('this.items[j].launch: '+this.items[j].launch);


        // if (timeFromURL == '20231112T235959') {
        //   this.items[j].available = true;
        // }


        let tempDiscount = new String( ((this.items[j].price / this.items[j].marketprice) * 10).toFixed(1) ) ;
        // this.items[j].discount = ((this.items[j].price / this.items[j].marketprice) * 10);
        this.items[j].discount = tempDiscount.substr(0,3);
          

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
    },
    isLoad: function(e) {
      // console.log(e.target.naturalWidth);

      var t = e.target.alt;
      
      // console.log('e.target.alt:' + t);

      if (e.target.naturalWidth == 1) {
        
        e.target.src = "/html/images/act/2025/02/vsv/images/product/"+ t +".jpg";

      }

      
    },
    altImage: function(e) {
      

      var t = e.target.alt;
      e.target.src = "/html/images/act/2025/02/vsv/images/product/"+ t +".jpg";
      

      if (e.target.imgchecked) {
        e.target.src = "/html/images/act/2025/02/vsv/images/img-error.png";
      } else {
        e.target.src = "/html/images/act/2025/02/vsv/images/product/"+ t +".jpg";
      }

      if (e.target.naturalWidth == 1) {
        e.target.src = "/html/images/act/2025/02/vsv/images/product/"+ t +".jpg";

      }

      
      e.target.imgchecked = true;
      e.target.onerror = null;

      
    }
  },
  mounted: function() {   
    this.isLoading = true;
    this.initItem();

      // init the observer
      const options = {
        rootMargin: '0px 0px -50% 0px',
        threshold: [0, 1]
      }

      const options2 = {
        rootMargin: '-1px 0px 0px 0px',
        threshold: [1]
      }


      // setTimeout(function(){

      //   const observer = new IntersectionObserver(changeNav, options);
      //   const section = document.querySelectorAll('.section-observer');
      //   if (section) {
      //     section.forEach((el) => {
      //       observer.observe(el);
      //     });
      //   }
      

      //   const stickyElm = document.querySelector('.btn-nav-group');
      //   const stickyBlackFridayNav = document.querySelector('#blackFridayNav');

      //   const observer2 = new IntersectionObserver( 
      //     ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
      //     {
      //       rootMargin: '-1px 0px 0px 0px',
      //       threshold: [1]
      //     }
      //   );
      //   if (stickyElm) {
      //     observer2.observe(stickyElm);
      //   }

      //   if (stickyBlackFridayNav) {
      //     observer2.observe(stickyBlackFridayNav);
      //   }


        

      // }, 2000);
      
      


      let timeFromURL = this.getUrlParameter('t');
      var dataTime;

      let year = moment().format('YYYY');
      let month = moment().format('MM');
      let date = moment().format('DD');

      var timeNow = moment().format('YYYY-MM-DD HH:mm:ss');


      if (timeFromURL) {
        timeNow = moment(timeFromURL).format('YYYY-MM-DD HH:mm:ss');
        console.log('timeNow: '+ timeNow);
      }

      
      if (moment(timeNow).isBetween('2024-10-24 00:00:00', '2024-11-03 23:59:59', 'second', '[]')) {
        var dateNow = '1104';
      } else {
        var dateNow = timeNow.substr(5,2) + timeNow.substr(8,2);
      }
      

      console.log('dateNow:'+dateNow);

      

      setTimeout(()=>{
        var triggerEl = document.querySelector('#pills-'+ dateNow +'-tab');  
        if (triggerEl) {
            new bootstrap.Tab(triggerEl).show(); 
            $('#pills-'+ dateNow +'-tab').click();
        }

        // const tabEl = document.querySelector('button[data-bs-toggle="pill"]')

        // tabEl.addEventListener('shown.bs.tab', event => {
        //   console.log('tabEl.id: '+tabEl.id);
        // })
      }, 1500);


      
      



    // this.interval = setInterval(this.checkDate, 1000);
    // this.interval = setInterval(function(){
    //   this.checkDate
    // }, 1000);
  },
  // beforeDestroy: function() {
  //   clearInterval(this.interval);
  // }
}
</script>

