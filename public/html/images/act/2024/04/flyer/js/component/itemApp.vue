<template>
  
  <div class="d-flex flex-column">

    <div v-if="wave1" class="wave1 event-btn-container p-0 position-relative" style="z-index: 1;">
      <!-- <div>
        <picture class="d-block">
          <source srcset="images/act/2024/04/flyer/images/wave1/bg.jpg" media="(min-width: 992px)">
          <img class="img-fluid us-none" src="images/act/2024/04/flyer/images/wave1/mobile/bg.jpg" alt="bg">
        </picture>
      </div> -->
      
      <div class="d-flex event-btn-group mx-auto">
        <div class="px-1 px-lg-3">
          <a href="#eventModal-1" data-bs-toggle="modal" class="d-block">
            <picture class="d-block">
              <source srcset="images/act/2024/04/flyer/images/wave1/primary-btn-1.png" media="(min-width: 992px)">
              <img class="img-fluid us-none" src="images/act/2024/04/flyer/images/wave1/mobile/primary-btn-1.png" alt="買就抽萬元禮券">
            </picture>
          </a>
        </div>
        <div class="px-1 px-lg-3">
          <a href="#eventModal-2" data-bs-toggle="modal" class="d-block">
            <picture class="d-block">
              <source srcset="images/act/2024/04/flyer/images/wave1/primary-btn-2.png" media="(min-width: 992px)">
              <img class="img-fluid us-none" src="images/act/2024/04/flyer/images/wave1/mobile/primary-btn-2.png" alt="滿額送最高5.2萬">
            </picture>
          </a>
        </div>
        <div class="px-1 px-lg-3">
          <a href="#eventModal-3" data-bs-toggle="modal" class="d-block">
            <picture class="d-block">
              <source srcset="images/act/2024/04/flyer/images/wave1/primary-btn-3.png" media="(min-width: 992px)">
              <img class="img-fluid us-none" src="images/act/2024/04/flyer/images/wave1/mobile/primary-btn-3.png" alt="滿額抽3大好禮">
            </picture>
          </a>
        </div>
      </div>
      
        
    </div>

    <div v-if="wave1" class="main-section wave1 d-flex flex-column">

      <div id="publicGrid" class="wave1">
        <!-- 公格 -->
        <div class="row p-0 g-0 justify-content-center">
          <!-- A -->
          <div id="sectionA" class="col-12 mb-3 mb-xl-5 d-flex flex-column align-items-center">

            <div class="title-img d-flex justify-content-center">
              <!-- <img class="img-fluid us-none" src="images/act/2024/04/flyer/images/wave1/section-a-title.png" alt="CTJ"> -->
              <picture class="d-block">
                <source srcset="images/act/2024/04/flyer/images/wave1/section-a-title.png" media="(min-width: 992px)">
                <img class="img-fluid us-none" src="images/act/2024/04/flyer/images/wave1/mobile/section-a-title.png" alt="CTJ Jewelry">
              </picture>
            </div>

            <div class="d-flex flex-column position-relative">
              
              <div class="section-wrapper section-a">
                <div class="section-observer"></div>
                <div class="section-row d-flex flex-column flex-xl-row">
                  <div class="section-inner position-relative d-flex flex-column justify-content-center align-items-center">

                    <div class="section-body d-flex flex-column justify-content-center align-items-center">
                      <div class="row row-cols-2 row-cols-lg-4 g-0 align-self-stretch justify-content-center">
                        <div v-if="item.type === 'A1'" v-for="item in items" class="col p-1 p-lg-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block text-center"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgaltsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="600" height="600"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block text-center"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgaltsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="600" height="600"></a>
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
          <div id="sectionB" class="col-12 mb-3 mb-xl-5 d-flex flex-column align-items-center">

            <div class="title-img d-flex justify-content-center">
              <!-- <img class="img-fluid us-none" src="images/act/2024/04/flyer/images/wave1/section-b-title.png" alt="閃耀魅力"> -->
              <picture class="d-block">
                <source srcset="images/act/2024/04/flyer/images/wave1/section-b-title.png" media="(min-width: 992px)">
                <img class="img-fluid us-none" src="images/act/2024/04/flyer/images/wave1/mobile/section-b-title.png" alt="閃耀魅力">
              </picture>
            </div>

            <div class="d-flex flex-column position-relative">
              
              <div class="section-wrapper section-b">
                <div class="section-observer"></div>
                <div class="section-row d-flex flex-column flex-xl-row">
                  <div class="section-inner position-relative d-flex flex-column justify-content-center align-items-center">

                    <div class="section-body d-flex flex-column justify-content-center align-items-center">
                      <div class="row row-cols-2 row-cols-lg-4 g-0 align-self-stretch justify-content-center">
                        <div v-if="item.type === 'B1'" v-for="item in items" class="col p-1 p-lg-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block text-center"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgaltsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="600" height="600"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block text-center"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgaltsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="600" height="600"></a>
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
          <!-- C -->
          <div id="sectionC" class="col-12 mb-3 mb-xl-5 d-flex flex-column align-items-center">

            <div class="title-img d-flex justify-content-center">
              <!-- <img class="img-fluid us-none" src="images/act/2024/04/flyer/images/wave1/section-c-title.png" alt="溫馨獻禮"> -->
              <picture class="d-block">
                <source srcset="images/act/2024/04/flyer/images/wave1/section-c-title.png" media="(min-width: 992px)">
                <img class="img-fluid us-none" src="images/act/2024/04/flyer/images/wave1/mobile/section-c-title.png" alt="溫馨獻禮">
              </picture>
            </div>

            <div class="d-flex flex-column position-relative">
              
              <div class="section-wrapper section-c">
                <div class="section-observer"></div>
                <div class="section-row d-flex flex-column flex-xl-row">
                  <div class="section-inner position-relative d-flex flex-column justify-content-center align-items-center">

                    <div class="section-body d-flex flex-column justify-content-center align-items-center">
                      <div class="row row-cols-2 row-cols-lg-4 g-0 align-self-stretch justify-content-center">
                        <div v-if="item.type === 'C1'" v-for="item in items" class="col p-1 p-lg-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block text-center"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgaltsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="600" height="600"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block text-center"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgaltsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="600" height="600"></a>
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
          <!-- D -->
          <div id="sectionD" class="col-12 mb-3 mb-xl-5 d-flex flex-column align-items-center">

            <div class="title-img d-flex justify-content-center">
              <!-- <img class="img-fluid us-none" src="images/act/2024/04/flyer/images/wave1/section-d-title.png" alt="體貼摯愛"> -->
              <picture class="d-block">
                <source srcset="images/act/2024/04/flyer/images/wave1/section-d-title.png" media="(min-width: 992px)">
                <img class="img-fluid us-none" src="images/act/2024/04/flyer/images/wave1/mobile/section-d-title.png" alt="體貼摯愛">
              </picture>
            </div>

            <div class="d-flex flex-column position-relative">
              
              <div class="section-wrapper section-d">
                <div class="section-observer"></div>
                <div class="section-row d-flex flex-column flex-xl-row">
                  <div class="section-inner position-relative d-flex flex-column justify-content-center align-items-center">

                    <div class="section-body d-flex flex-column justify-content-center align-items-center">
                      <div class="row row-cols-2 row-cols-lg-4 g-0 align-self-stretch justify-content-center">
                        <div v-if="item.type === 'D1'" v-for="item in items" class="col p-1 p-lg-2 text-start d-flex flex-column item" :data-wow-delay="item.delay">
                          <div class="item-inner d-flex flex-column">
                            <div v-if="item.available" class="item-body mb-xl-3">
                              <a :href="item.url" class="d-block text-center"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgaltsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="600" height="600"></a>
                            </div>
                            <div v-else class="item-body mb-xl-3">
                              <a class="d-block text-center"><img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E" :data-src="item.imgaltsrc" @error="altImage" @load="isLoad" :alt="item.id" :title="item.name" class="img-fluid lazy-load" width="600" height="600"></a>
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
      
    </div>
  </div>
</template>


<script>
module.exports = {
  data: function() {
    return {
      isLoading: false,
      failed: false,
      imgError: 'this.src="/html/images/act/2024/04/flyer/images/img-error.png"',
      items: [],
      wave1: false,
      wave2: false,
      before_1113: false
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = '/html/images/act/2024/04/flyer/json/data.json';
      var path2 = '/html/images/act/2024/04/flyer/json/data2.json';
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
          // this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
          this.$set(this.items[i], "imgaltsrc", 'images/act/2024/04/flyer/images/product/'+ this.items[i].id +'.png');
        }
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2024/04/flyer/images/product/'+ this.items[i].id +'/1.jpg');
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
        e.target.src = "/html/images/act/2024/04/flyer/images/product/"+ t +".jpg";

      }

      
    },
    altImage: function(e) {
      

      // var t = e.target.alt;
      // e.target.src = "/html/images/act/2024/04/flyer/images/product/"+ t +".jpg";
      

      // if (e.target.imgchecked) {
      //   e.target.src = "/html/images/act/2024/04/flyer/images/img-error.png";
      // } else {
      //   e.target.src = "/html/images/act/2024/04/flyer/images/product/"+ t +".jpg";
      // }

      // if (e.target.naturalWidth == 1) {
      //   e.target.src = "/html/images/act/2024/04/flyer/images/product/"+ t +".jpg";

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

