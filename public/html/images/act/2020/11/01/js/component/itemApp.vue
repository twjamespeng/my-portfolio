<template>
	<div>
		<h1 v-if="failed" class="text-center text-white p-5">Failed</h1>
		<h1 v-else-if="isLoading" class="text-center text-white p-5"><i class="fa fa-spinner fa-spin"></i></h1>
		<div v-else class="row row-cols-2 row-cols-sm-4 row-cols-lg-5 p-1 p-sm-2">
			<div v-for="item in items" :key="item.id" class="col p-1 p-sm-2 text-center d-flex flex-column item">
				<div v-if="item.available" class="item-body d-flex bg-white shadow-sm">
				  <a :href="item.url" class="d-block" target="_blank"><img :src="item.imgsrc" :onerror="imgError" class="img-fluid w-100" :alt="item.name" :title="item.name"></a>
				</div>
        <div v-else class="item-body d-flex bg-white shadow-sm">
          <a class="d-block" target="_blank"><img src="/html/images/act/2020/11/01/images/coming-soon.jpg" class="img-fluid w-100" alt="商品即將開賣"></a>
        </div>

				<div v-if="item.available" class="item-footer d-flex flex-column flex-grow-1 shadow-sm">
					<div class="item-brand p-2 bg-dark"><a :href="item.url" class="text-light" target="_blank">{{item.brand}}</a></div>
					<div class="item-name p-2 bg-light d-flex flex-grow-1 justify-content-center align-items-center"><a :href="item.url" class="text-dark" target="_blank">{{item.name}}</a></div>
					<div class="item-price p-2 bg-white text-danger font-weight-normal">$<span>{{item.price}}</span></div>
				</div>
        <div v-else class="item-footer d-flex flex-column flex-grow-1 shadow-sm">
          <div class="item-brand p-2 bg-dark-orange">&nbsp;</div>
          <div class="item-name p-2 bg-dark-orange d-flex flex-grow-1 justify-content-center align-items-center"><span class="text-white coming-soon">{{item.launch}} 開賣</span></div>
          <div class="item-price p-2 bg-dark-orange">&nbsp;</div>
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
      imgError: 'this.src="/html/images/act/2020/11/01/images/no-image.jpg"',
      items: []
    };
  },
  methods: {
    initItem: function() {
      var self = this;
      axios.get((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2020/11/01/json/data.json")
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
        // this.$set(this.items[i], "imgsrc", '/html/images/act/2020/11/01/images/product/'+ this.items[i].id +'/1.jpg');
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
        this.items[j].launch = this.items[j].start.substr(5,11);
        // this.items[j].launch = moment(this.items[j].start).local().format('MM-DD[T]HH:mm[Z]');
        // localTime = moment(stillUtc).local().format('YYYY-MM-DD[T]HH:mm[Z]');
        if (moment(targetStart).isAfter(localTimeUtc)) {
          this.items[j].available = false;
        } else {
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

