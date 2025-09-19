<template>
	<div>
		<h1 v-if="failed" class="text-center text-white p-5">Failed</h1>
		<h1 v-else-if="isLoading" class="text-center text-white p-5"><i class="fa fa-spinner fa-spin"></i></h1>
		<div v-else class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 p-1 p-sm-2">
			<div v-for="item in items" :key="item.id" class="col p-1 p-sm-2 text-center d-flex flex-column item">
        <div class="item-inner d-flex flex-column flex-grow-1">
  				<div v-if="item.available" class="item-body p-2 p-sm-3 d-flex bg-white">
  				  <a :href="item.url" class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
  				</div>
          <div v-else class="item-body p-2 p-sm-3 d-flex bg-white">
            <!-- <a class="d-block" target="_blank"><img src="/html/images/act/2021/11/shoppingfestival/images/coming-soon.jpg" class="img-fluid w-100" alt="商品即將開賣"></a> -->
            <a class="d-block" target="_blank"><img :src="item.imgsrc" @error="altImage" class="img-fluid w-100" :alt="item.id" :title="item.name"></a>
          </div>

  				<div v-if="item.available" class="item-footer p-2 p-sm-3 pb-sm-2 pt-0 bg-white d-flex flex-column flex-grow-1">
  					<div class="item-brand bg-white border-top pt-2 pt-xl-3 pb-2"><a :href="item.url" class="text-dark" target="_blank">{{item.brand}}</a></div>
  					<div class="item-name bg-white d-flex flex-grow-1 justify-content-center align-items-start"><a :href="item.url" class="text-dark" target="_blank">{{item.name}}</a></div>
  					<div class="item-price p-1 bg-white dollar-sign"><span>{{item.price}}</span></div>
            <div class="p-1 mb-xl-2 bonus">轉盤優惠 {{item.bonustype}}<span class="fw-bold">{{item.bonus}}</span></div>
  				</div>
          <div v-else class="item-footer p-2 p-sm-3 pb-sm-2 pt-0 bg-white d-flex flex-column flex-grow-1">
            <div class="item-brand bg-white border-top pt-2 pt-xl-3 pb-2"><span class="text-dark">{{item.brand}}</span></div>
            <div class="item-name bg-white d-flex flex-grow-1 justify-content-center align-items-start"><span class="text-dark">{{item.name}}</span></div>
            <div class="item-price p-2 bg-white"><span class="coming-soon lh-base"> {{item.launch}} <span class="fw-normal fs-5">開賣</span></span></div>

            <!-- <div class="item-price p-1 bg-white"><span class="fs-4">銷售一空</span></div> -->

            <!-- <div class="item-brand p-2 bg-light"></div>
            <div class="item-name p-2 bg-light d-flex flex-grow-1 justify-content-center align-items-center"><span class="text-white coming-soon">{{item.launch}} 開賣</span></div>
            <div class="item-price p-2 bg-light"></div> -->
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
      // imgError: 'this.src="/html/images/act/2021/11/shoppingfestival/images/img-error.jpg"',
      items: []
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      var path1 = (window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2021/11/shoppingfestival/json/data.json";
      var path2 = (window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2021/11/shoppingfestival/json/data2.json";
      var path;

      let timeFromURL = this.getUrlParameter('t');
      var dataTime;

      let month = moment().format('MM');
      let date = moment().format('DD');

      if (timeFromURL) {
        dataTime = timeFromURL.substr(4, 4);  
        console.log('dataTime: ' + dataTime);
      } else {
        dataTime = month + date;
        console.log('dataTime: ' + dataTime);
      }
      
      
      
      

      
      if (dataTime >= '1115') {
        path = path2;
      } else {
        path = path1;
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
        this.$set(this.items[i], "url", 'https://www.vivatv.com.tw/Product.go?itemCode=' + this.items[i].id);
        this.$set(this.items[i], "imgsrc", 'https://www.vivatv.com.tw/common/images/product/'+ this.items[i].id +'/1.jpg');
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2021/11/shoppingfestival/images/product/'+ this.items[i].id +'/1.jpg');
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
        
        // this.items[j].launch = this.items[j].start.substr(11,5);
        // console.log('this.items[j].start: '+ this.items[j].start);
        this.items[j].launch = this.items[j].start.substr(11,5);
        // this.items[j].launch = moment(this.items[j].start).local().format('MM-DD[T]HH:mm[Z]');
        // localTime = moment(stillUtc).local().format('YYYY-MM-DD[T]HH:mm[Z]');
        if (moment(targetStart).isAfter(localTimeUtc)) {
          this.items[j].available = false;
        } else {
          this.items[j].available = true;
        }

        if (this.items[j].id == '2987182021') {
          this.items[j].price = '銷售一空';
          this.items[j].available = false;
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
    altImage: function(e) {
      

      var t = e.target.alt;
      // console.log(t);


      // e.target.src = "/html/images/act/2021/11/shoppingfestival/images/img-error.jpg";

      if (e.target.imgchecked) {
        e.target.src = "/html/images/act/2021/11/shoppingfestival/images/img-error.jpg";
      } else {
        e.target.src = "/html/images/act/2021/11/shoppingfestival/images/product/"+ t +".jpg";
      }

      
      e.target.imgchecked = true;
      e.target.onerror = null;

      
    }
  },
  mounted: function() {   
    this.isLoading = true;
    this.initItem();
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

