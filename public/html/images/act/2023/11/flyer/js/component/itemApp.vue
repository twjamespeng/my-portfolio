<template>
  
  <div>
    <div v-if="wave1" class="main-section wave1 d-flex flex-column">
      <div class="event-btn-container container-lg p-0 position-relative mb-lg-5" style="z-index: 1;">
        <div class="d-flex flex-column flex-lg-row event-btn-group p-3">
          <div class="p-1">
            <a href="#eventModal-Wave1-A" data-bs-toggle="modal" class="d-block">
              <picture class="d-block">
                <source srcset="images/act/2023/11/flyer/images/wave1/primary-btn-1.png" media="(min-width: 992px)">
                <img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/mobile/primary-btn-1.png" alt="滿額送">
              </picture>
            </a>
          </div>
          <div v-if="before_1113" class="p-1">
            <a href="#eventModal-Wave1-B" data-bs-toggle="modal" class="d-block">
              <picture class="d-block">
                <source srcset="images/act/2023/11/flyer/images/wave1/primary-btn-2.png" media="(min-width: 992px)">
                <img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/mobile/primary-btn-2.png" alt="雙11加碼">
              </picture>
            </a>
          </div>
          <div v-else class="p-1">
            <a href="https://page.line.me/toe2230g?openQrModal=true" target="_blank" class="d-block">
              <picture class="d-block">
                <source srcset="images/act/2023/11/flyer/images/wave1/primary-btn-3.png" media="(min-width: 992px)">
                <img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/mobile/primary-btn-3.png" alt="LINE綁定">
              </picture>
            </a>
          </div>
        </div>
      </div>
      <div class="title-img d-flex justify-content-center px-3 mx-auto"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/primary-product-title.png" alt="禮饗時光"></div>
      <div class="primary-product-section d-flex position-relative mx-auto mb-3 overflow-hidden">
        <picture class="d-block">
          <source srcset="images/act/2023/11/flyer/images/wave1/primary-product-bg.jpg" media="(min-width: 992px)">
          <img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/mobile/primary-product-bg.jpg" alt="禮饗時光背景">
        </picture>
        <div class="primary-product-inner d-flex flex-column align-items-center">
          <div class="d-flex flex-column flex-lg-row mb-lg-5">
            <div class="d-flex">
              <div class="primary-product">
                <a href="https://www.vivatv.com.tw/goods/3155692023" class="d-block"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/3155692023.png" alt="【VERGANI】義大利潘娜朵妮經典水果乾蛋糕750G/盒 (鐵盒裝) "></a>
              </div>
              <div class="primary-product">
                <a href="https://www.vivatv.com.tw/goods/3155702023" class="d-block"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/3155702023.png" alt="【VERGANI】義大利潘娜朵妮綜合精選蛋糕禮盒(380GX2盒) "></a>
              </div>
            </div>
            <div class="d-flex">
              <div class="primary-product">
                <a href="https://www.vivatv.com.tw/goods/3155742023" class="d-block"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/3155742023.png" alt="【VERGANI】義大利潘娜朵妮綜合巧克力蛋糕750GX1入組 "></a>
              </div>
              <div class="primary-product">
                <a href="https://www.vivatv.com.tw/goods/3155762023" class="d-block"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/3155762023.png" alt="【VERGANI】義大利潘娜朵妮蜜思嘉葡萄酒蛋糕750GX1入組 "></a>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column flex-lg-row mb-lg-5">
            <div class="d-flex">
              <div class="primary-product">
                <a href="https://www.vivatv.com.tw/goods/3155812023" class="d-block"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/3155812023.png" alt="【VERGANI】義大利潘娜朵妮經典水果乾蛋糕500GX2盒(紙盒裝) "></a>
              </div>
              <div class="primary-product">
                <a href="https://www.vivatv.com.tw/goods/3155712023" class="d-block"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/3155712023.png" alt="【VERGANI】義大利潘娜朵妮經典水果乾蛋糕米蘭大教堂造型禮盒 2盒(100GX2盒) "></a>
              </div>
            </div>
            <div class="d-flex">
              <div class="primary-product">
                <a href="https://www.vivatv.com.tw/goods/3155722023" class="d-block"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/3155722023.png" alt="【VERGANI】義大利潘娜朵妮經典水果乾蛋糕(小熊或麋鹿款)隨機出貨 (100GX2入組) "></a>
              </div>
              <div class="primary-product right-hand">
                <a href="https://www.vivatv.com.tw/goods/3155792023" class="d-block"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/3155792023.png" alt="【VERGANI】義大利潘娜朵妮綜合莓果蛋糕750GX1入組 "></a>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column flex-lg-row mb-lg-5">
            <div class="d-flex">
              <div class="primary-product left-hand">
                <a href="https://www.vivatv.com.tw/goods/3155732023" class="d-block"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/3155732023.png" alt="【VERGANI】義大利潘娜朵妮經典水果乾蛋糕750GX1入組 "></a>
              </div>
              <div class="primary-product">
                <a href="https://www.vivatv.com.tw/goods/3155772023" class="d-block"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/3155772023.png" alt="【VERGANI】義大利潘娜朵妮糖漬黑櫻桃蛋糕750GX1入組 "></a>
              </div>
            </div>
            <div class="d-flex">
              <div class="primary-product">
                <a href="https://www.vivatv.com.tw/goods/3155782023" class="d-block"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/3155782023.png" alt="【VERGANI】義大利潘娜朵妮檸檬酒蛋糕750GX1入組"></a>
              </div>
              <div class="primary-product">
                <a href="https://www.vivatv.com.tw/goods/3155752023" class="d-block"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/3155752023.png" alt="【VERGANI】義大利潘娜朵妮提拉米蘇風味蛋糕750GX1入組 "></a>
              </div>
            </div>
          </div>
          <div class="d-flex primary-row-4">
            <div class="primary-product">
              <a href="https://www.vivatv.com.tw/goods/3155802023" class="d-block">
                <picture class="d-block">
                  <source srcset="images/act/2023/11/flyer/images/wave1/3155802023.png" media="(min-width: 992px)">
                  <img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/mobile/3155802023.png" alt="【VERGANI】義大利潘娜朵妮糖漬栗子蛋糕750GX1入組">
                </picture>
                <!-- <img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/3155802023.png" alt="【VERGANI】義大利潘娜朵妮糖漬栗子蛋糕750GX1入組"> -->
              </a>
            </div>
            <div class="primary-product">
              <a href="https://www.vivatv.com.tw/goods/2976762021" class="d-block">
                <picture class="d-block">
                  <source srcset="images/act/2023/11/flyer/images/wave1/2976762021.png" media="(min-width: 992px)">
                  <img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/mobile/2976762021.png" alt="【在家享松露大餐】松露蘑菇醬/松露鹽/松露油組合">
                </picture>
                <!-- <img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/2976762021.png" alt="【在家享松露大餐】松露蘑菇醬/松露鹽/松露油組合"> -->
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="publicGrid" class="wave1">
        <!-- 公格 -->
        <div class="row p-0 g-0 justify-content-center">
          <!-- A -->
          
          
          <div id="sectionA" class="col-12 mb-5 mb-xl-5 d-flex flex-column align-items-center">

            <div class="title-img d-flex justify-content-center px-3"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/section-a-title.png" alt="秋收味蕾"></div>

            <div class="d-flex flex-column position-relative" style="margin-top: -1.5rem;">
              <div class="d-flex justify-content-center">
                <picture class="d-block">
                  <source srcset="images/act/2023/11/flyer/images/wave1/section-a-bg.jpg" media="(min-width: 992px)">
                  <img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/mobile/section-a-bg.jpg" alt="秋收味蕾背景">
                </picture>  
              </div>
              <div class="section-wrapper section-a">
                <div class="section-observer"></div>
                <div class="section-row d-flex flex-column flex-xl-row">
                  <div class="section-inner position-relative d-flex flex-column justify-content-center align-items-center">

                    <div class="section-body d-flex flex-column justify-content-center align-items-center p-lg-2">
                      <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'A1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-0 p-lg-3">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block text-center"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block text-center"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                            </div>
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center mb-1 mb-lg-0"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center mb-1 mb-lg-0"><span class="fw-normal fs-xl-5">搶購一空</span></div>
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
          <!-- B -->
          
          <div id="sectionB" class="col-12 d-flex flex-column align-items-center">
            <div class="title-img d-flex justify-content-center px-3"><img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/section-b-title.png" alt="享樂生活"></div>

            <div class="d-flex flex-column position-relative" style="margin-top: -1.5rem;">
              <div class="d-flex justify-content-center">
                <picture class="d-block">
                  <source srcset="images/act/2023/11/flyer/images/wave1/section-b-bg.jpg" media="(min-width: 992px)">
                  <img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/mobile/section-b-bg.jpg" alt="享樂生活背景">
                </picture>  
              </div>
              
              <div class="section-wrapper section-b">
                <div class="section-observer"></div>
                <div class="section-row d-flex flex-column flex-xl-row">
                  <div class="section-inner position-relative d-flex flex-column justify-content-center align-items-center">

                    <div class="section-body d-flex flex-column justify-content-center align-items-center p-lg-2">
                      <div class="row row-cols-3 row-cols-md-4 g-0 align-self-stretch">
                        <div v-if="item.type === 'B1'" v-for="item in items" class="col p-1 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column p-0 p-lg-3">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block text-center"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block text-center"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="400" height="400"></a>
                            </div>
                            <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center mb-1 mb-lg-0"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                            </div>
                            <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                              <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-xl-2"><a :href="item.url">{{item.brand}}</a></div>
                              <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-xl-0"><a :href="item.url">{{item.name}}</a></div>
                              <div class="item-price text-center mb-1 mb-lg-0"><span class="fw-normal fs-xl-5">搶購一空</span></div>
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
      <div>
        <picture class="d-block">
          <source srcset="images/act/2023/11/flyer/images/wave1/bg-bottom.jpg" media="(min-width: 992px)">
          <img class="img-fluid us-none" src="images/act/2023/11/flyer/images/wave1/mobile/bg-bottom.jpg" alt="bg bottom">
        </picture>
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
      imgError: 'this.src="/html/images/act/2023/11/flyer/images/img-error.png"',
      items: [],
      wave1: false,
      wave2: false,
      before_1113: false
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = '/html/images/act/2023/11/flyer/json/data.json';
      var path2 = '/html/images/act/2023/11/flyer/json/data2.json';
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
      

      // if ( moment(timeNow).isBetween('2023-05-16 00:00:00', '2023-06-04 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
      // }

      if ( moment(timeNow).isBetween('2023-11-07 00:00:00', '2023-11-12 23:59:59', 'second', '[]') ) {
        this.before_1113 = true;
      }



      

      

      


      path = path1;

      


      if (timeFromURL) {
        // dataTime = timeFromURL.substr(4, 4);
        dataTime = timeFromURL;
        console.log('dataTime: ' + dataTime);
        
      } else {
        dataTime = year + month + date;
        console.log('dataTime: ' + dataTime);
        
      }



      
      // if ( moment(timeNow).isSameOrBefore('2023-06-04 23:59:59') ) {
      //   path = path1;
      // } else {
      //   path = path2;
      // }

      path = path1;



      console.log('path:'+path);




      // 倒數計時
      var eventTime = moment('2023-06-04 10:12:00', 'YYYY-MM-DD HH:mm:ss').diff(moment().startOf('year'), 'seconds');

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
            '<span class="countdown-number">' + md + '</span> 天 ' + 
            '<span class="countdown-number">' + duration.hours() + '</span> 時 ' + 
            '<span class="countdown-number">' + duration.minutes() + '</span> 分 ' + 
            '<span class="countdown-number">' + duration.seconds() + '</span> 秒 ' );
        } else {
          $('#countDownTimer').hide();
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

        if (this.items[i].id == '3079912022' || this.items[i].id == '2988582021' || this.items[i].id == '3120592023' || this.items[i].id == '3120482023') {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.png');
        } else {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
        }
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2023/11/flyer/images/product/'+ this.items[i].id +'/1.jpg');
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
        let targetStart = moment.utc(this.items[j].start, 'YYYY-MM-DD[T]HH:mm[Z]');
        let targetEnd = moment.utc(this.items[j].end, 'YYYY-MM-DD[T]HH:mm[Z]');
        
        // this.items[j].launch = this.items[j].start.substr(11,5);
        // console.log('this.items[j].start: '+ this.items[j].start);
        // this.items[j].launch = this.items[j].start.substr(11,5);

        this.items[j].launch = this.items[j].start.substr(5,11);
        // this.items[j].launch = moment(this.items[j].start).local().format('MM-DD[T]HH:mm[Z]');
        // localTime = moment(stillUtc).local().format('YYYY-MM-DD[T]HH:mm[Z]');
        // if (moment(targetStart).isAfter(localTimeUtc)) {
        //   this.items[j].available = false;
        // } else {
        //   this.items[j].available = true;
        // }

        if ( moment(localTimeUtc).isBetween(targetStart, targetEnd, 'seconds', '[]') ) {
          this.items[j].available = true;
        } 
        else {
          if ( moment(localTimeUtc).isAfter(targetEnd) ) {
            this.items[j].available = false;
            this.items[j].before = false;
          } else {
            this.items[j].available = false;  
          }
          
        }


        if (timeFromURL == '20221223') {
          this.items[j].available = true;
        }

        

        

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
      

      if (e.target.naturalWidth == 1) {
        e.target.src = "/html/images/act/2023/11/flyer/images/product/"+ t +".jpg";

      }

      
    },
    altImage: function(e) {
      

      // var t = e.target.alt;
      // e.target.src = "/html/images/act/2023/11/flyer/images/product/"+ t +".jpg";
      

      // if (e.target.imgchecked) {
      //   e.target.src = "/html/images/act/2023/11/flyer/images/img-error.png";
      // } else {
      //   e.target.src = "/html/images/act/2023/11/flyer/images/product/"+ t +".jpg";
      // }

      // if (e.target.naturalWidth == 1) {
      //   e.target.src = "/html/images/act/2023/11/flyer/images/product/"+ t +".jpg";

      // }

      
      // e.target.imgchecked = true;
      // e.target.onerror = null;

      
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

      
      if (moment(timeNow).isBetween('2022-12-13 00:00:00', '2022-12-25 23:59:59', 'second', '[]')) {
        var dateNow = '1106';
      } else {
        var dateNow = timeNow.substr(5,2) + timeNow.substr(8,2);
      }
      

      console.log('dateNow:'+dateNow);

      

      setTimeout(()=>{

        var triggerEl = document.querySelector('#pills-'+ dateNow +'-tab');
        
        

        if (triggerEl) {
            new bootstrap.Tab(triggerEl).show();  
        }
      
      }, 1000);
      
    
      



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

