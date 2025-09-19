<template>
  <div>
    
    <div v-if="end_0915" class="container-xl p-0 py-xl-5 position-relative" style="z-index: 2;">
      <div class="row g-0 justify-content-center">
        <div class="col-12" style="max-width: 1200px;">
          <!-- A -->
          <div id="sectionA" class="section-wrapper section-a mb-3 mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column justify-content-center align-items-center">
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch p-1 p-xl-3">
                  <div v-if="item.type === 'A'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-3">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-3">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-2"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand text-center mb-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- B -->
          <div id="sectionB" class="section-wrapper section-b mb-3 mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column justify-content-center align-items-center">
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch p-1 p-xl-3">
                  <div v-if="item.type === 'B'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-3">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-3">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-2"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand text-center mb-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- C -->
          <div id="sectionC" class="section-wrapper section-c mb-3 mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column justify-content-center align-items-center">
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch p-1 p-xl-3">
                  <div v-if="item.type === 'C'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-3">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-3">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-2"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand text-center mb-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- D -->
          <div id="sectionD" class="section-wrapper section-d mb-3 mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column justify-content-center align-items-center">
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch p-1 p-xl-3">
                  <div v-if="item.type === 'D'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-3">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-3">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-2"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand text-center mb-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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

    <div v-if="start_0916" class="container-xl p-0 py-xl-5 position-relative" style="z-index: 2;">
      <div class="row g-0 justify-content-center">
        <div class="col-12" style="max-width: 1200px;">
          <!-- A -->
          <div id="sectionA" class="section-wrapper section-a-0916 mb-3 mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column justify-content-center align-items-center">
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch p-1 p-xl-3">
                  <div v-if="item.type === 'A'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-3">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-3">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-2"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand text-center mb-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- B -->
          <div id="sectionB" class="section-wrapper section-b-0916 mb-3 mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column justify-content-center align-items-center">
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch p-1 p-xl-3">
                  <div v-if="item.type === 'B'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-3">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-3">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-2"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand text-center mb-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- C -->
          <div id="sectionC" class="section-wrapper section-c-0916 mb-3 mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column justify-content-center align-items-center">
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch p-1 p-xl-3">
                  <div v-if="item.type === 'C'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-3">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-3">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-2"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand text-center mb-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <!-- D -->
          <div id="sectionD" class="section-wrapper section-d-0916 mb-3 mb-xl-5">
            <div class="section-observer"></div>
            <div class="section-inner d-flex flex-column">
              <!-- 上排 -->
              <div class="d-flex flex-column justify-content-center align-items-center">
                <!-- 公格 -->
                <div class="row row-cols-2 row-cols-md-4 g-0 align-self-stretch p-1 p-xl-3">
                  <div v-if="item.type === 'D'" v-for="item in items" :key="item.id" class="col p-5px text-start d-flex flex-column item">
                    <div class="item-inner d-flex flex-column flex-grow-1 p-2">
                      <div v-if="item.available" class="item-body d-flex mb-3">
                        <a :href="item.url" class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-else class="item-body d-flex mb-3">
                        <a class="d-block"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
                      </div>
                      <div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand d-flex flex-grow-1 justify-content-center align-items-end mb-2"><a :href="item.url">{{item.brand}}</a></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><a :href="item.url">{{item.name}}</a></div>
                        <div class="item-price text-center"><span class="price-type me-1">活動價</span><span class="dollar-sign">$</span><span>{{item.price}}</span></div>
                      </div>
                      <div v-else class="item-footer d-flex flex-column flex-grow-1 pt-2 pt-xl-0">
                        <div class="item-brand text-center mb-2"><span>{{item.brand}}</span></div>
                        <div class="item-name d-flex flex-grow-1 justify-content-center align-items-center mb-2"><span>{{item.name}}</span></div>
                        <div class="item-price text-center"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>
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
      imgError: 'this.src="/html/images/act/2022/08/29/images/img-error.jpg"',
      items: [],
      end_0915: false,
      start_0916: false,
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = '/html/images/act/2022/08/29/json/data.json';
      var path2 = '/html/images/act/2022/08/29/json/data2.json';
      var path;

      let timeFromURL = this.getUrlParameter('t');
      var dataTime;

      let year = moment().format('YYYY');
      let month = moment().format('MM');
      let date = moment().format('DD');

      var timeNow = moment().format('YYYY-MM-DD HH:mm:ss');
      if (timeFromURL) {
        timeNow = moment(timeFromURL).format('YYYY-MM-DD HH:mm:ss');
      }
      var end_0915 = '2022-09-15 23:59:59';
      var start_0916 = '2022-09-16 00:00:00';

      //0915 23:59:59前
      if ( moment(timeNow).isBefore(end_0915) ) {
        this.end_0915 = true;
        this.start_0916 = false;
        path = path1;
      } else {
        this.end_0915 = false;
        this.start_0916 = true;
        path = path2;
      }


      if (timeFromURL) {
        // dataTime = timeFromURL.substr(4, 4);
        dataTime = timeFromURL;
        console.log('dataTime: ' + dataTime);
        
      } else {
        dataTime = year + month + date;
        console.log('dataTime: ' + dataTime);
        
      }
          

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
        if (this.items[i].id == '3029392022') {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.JPG');
        } else {
          this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
        }
        
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2022/08/29/images/product/'+ this.items[i].id +'/1.jpg');
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

        this.items[j].launch = this.items[j].start.substr(11,5);
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


        // if (this.items[j].id == '2987182021') {
        //   this.items[j].price = '銷售一空';
        //   this.items[j].available = false;
        // }

        

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
    altImage: function(e) {
      

      var t = e.target.alt;
      // console.log(t);


      // e.target.src = "/html/images/act/2022/08/29/images/img-error.jpg";

      if (e.target.imgchecked) {
        e.target.src = "/html/images/act/2022/08/29/images/img-error.jpg";
      } else {
        e.target.src = "/html/images/act/2022/08/29/images/product/"+ t +".jpg";
      }

      
      e.target.imgchecked = true;
      e.target.onerror = null;

      
    }
  },
  mounted: function() {   
    this.isLoading = true;
    this.initItem();

    // init the observer
    // const options = {
    //   rootMargin: '0px 0px -50% 0px',
    //   threshold: [0, 1]
    // }

    // const observer = new IntersectionObserver(changeNav, options);

    // target the elements to be observed
    // const section = document.querySelectorAll('.section-observer');
    // setTimeout(function(){
    //   section.forEach((el) => {
    //     observer.observe(el);
    //   });
    // }, 2000);
    




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

