<template>
	<div>
    <!-- Youtube Modal -->
    <div class="modal fade" id="youtubeModal" tabindex="-1" aria-labelledby="youtubeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content bg-transparent border-0">
          <div class="modal-header rounded-0 border-bottom-0">
            <h6 class="modal-title text-white"></h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-2 bg-dark rounded-0">
            <div id="ytPlayer" class="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/yuhgIlXwPh8?playsinline=1&controls=1&showinfo=1&rel=0&modestbranding=1&enablejsapi=0&autoplay=0&mute=1" allowfullscreen frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- eventModal-Wave1-A -->
    <div class="modal fade" id="eventModal-Wave1-A" tabindex="-1" aria-labelledby="eventModal-Wave1-A" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【新會員註冊禮】</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/02/24(五)00:00～2023/03/26(日)23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間註冊新會員成功，即可獲贈$100元銀幣</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">新會員註冊完成即時歸戶。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日期開始計算)</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- eventModal-Wave1-B -->
    <div class="modal fade" id="eventModal-Wave1-B" tabindex="-1" aria-labelledby="eventModal-Wave1-B" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【新客首購禮】樂遊春饗</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/02/24(五)00:00～2023/03/26(日)23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-3">活動期間註冊新會員成功，首筆消費金額滿$2,000送$100銀幣</p>
            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於02/24(五)起每日結算並於03/10(五)23:59開始發送銀幣，以系統簡訊通知會員；活動期間每月結算一次。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日期開始計算)</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!-- eventModal-Wave1-C -->
    <div class="modal fade" id="eventModal-Wave1-C" tabindex="-1" aria-labelledby="eventModal-Wave1-C" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額送銀幣】</h3>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動期間</span></p>
              <p class="mb-3">2023/02/24(五)00:00～2023/03/26(日)23:59</p>  
            </div>
            <div class="p-xl-2">
              <p class="mb-2"><span class="bg-red text-white px-2 py-1 rounded-pill">活動內容</span></p>
              <p class="mb-2">活動期間單日消費滿$2,000元送$100元銀幣(恕不跨日累計)</p>
              <p class="mb-2">活動期間單日消費滿$6,000元送$500元銀幣(恕不跨日累計)</p>
              <p class="mb-3">活動期間單日消費滿$12,000元送$1,400元銀幣(恕不跨日累計)</p>


            </div>
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">於02/24(五)起每日結算並於03/10(五)23:59開始發送銀幣，以系統簡訊通知會員；活動期間每月結算一次。</li>
              <li class="list-group-item">銀幣使用期限：一個月(自發送日期開始計算)</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777。</li>
            </ol>
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
      faqURL: 'https://www.vivatv.com.tw/Information.go?flag=freshman',
      feb: false
    };
  },
  methods: {
    init: function() {

      var eventModal = document.getElementById('eventModal');
      if (eventModal) {
        eventModal.addEventListener('shown.bs.modal', function(event) {
          
          var button = event.relatedTarget;
          var anchor = button.getAttribute('data-bs-anchor');

          console.log('anchor: '+ anchor);

          scrollToAnchorInModal(anchor);

        });
      }
      
      // let timeFromURL = this.getUrlParameter('t');
      // if (timeFromURL) {
      //   let monthFromURL = timeFromURL.substr(4, 2);
      //   if (monthFromURL == '02') {
      //     this.feb = true;
      //   }
      // } else {
      //   let month = moment().format('MM');
      //   if (month == '02') { 
      //     this.feb = true;
      //   }
      // }  
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
    scrollToAnchorInModal: function(aid) {
      var aTag = $('#'+aid);
      var offset = aTag.offset().top - aTag.parent().offset().top;
      $('.modal-body').animate({scrollTop: offset},'slow');
    }
  },
  mounted: function() {
    this.init();


    
      
    

    


    setTimeout(()=>{

      //youtube modal指定player id (js)
      var live1_ID = 'yuhgIlXwPh8'; //1台youtube直播id
      var live2_ID = '9fXkGPPws_c'; //2台youtube直播id

      var toggleYT1 = document.querySelector('#toggleYT1');

      var ytPlayer = document.querySelector('#ytPlayer');

      if (toggleYT1) {
        toggleYT1.addEventListener('click', () => {
          console.log('yt click');
          var live1HTML = '<iframe src="https://www.youtube.com/embed/'+ live1_ID +'?playsinline=1&controls=1&showinfo=1&rel=0&modestbranding=1&enablejsapi=0&autoplay=0&mute=1" allowfullscreen frameborder="0"></iframe>';
          setTimeout(()=>{
            ytPlayer.innerHTML = live1HTML;  
          }, 500);
          
        });

      }
      var youtubeModal = document.querySelector('#youtubeModal');
      if (youtubeModal) {
        youtubeModal.addEventListener('hidden.bs.modal', () => {
          ytPlayer.innerHTML = '';
          console.log('youtubeModal cleared');
        });
      }

      const swpB = new Swiper('#swpB', {
        loop: true,
        allowTouchMove: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      });

      const swpA = new Swiper('#swpA', {
        loop: true,
        allowTouchMove: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      });
      const swpC = new Swiper('#swpC', {
        loop: true,
        allowTouchMove: false,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        spaceBetween: 0,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      });

      const swpBank = new Swiper('#swpBank', {
        loop: true,
        slidesPerView: 2,
        centerSlide: false,
        slidesPerGroup: 1,
        speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
          // pauseOnMouseEnter: true,
        },
        spaceBetween: 0,
        effect: 'slide',
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 4
          }
        }
      });

      const swpD = new Swiper('#swpD', {
        centeredSlides: true,
        loop: true,
        slidesPerView: 1.5,
        centerSlide: true,
        slidesPerGroup: 1,
        speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
          // pauseOnMouseEnter: true,
        },
        spaceBetween: 0,
        effect: 'slide',
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          }
        }
      });
      const swpE = new Swiper('#swpE', {
        centeredSlides: true,
        loop: true,
        slidesPerView: 1.5,
        centerSlide: true,
        slidesPerGroup: 1,
        speed: 300,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
          // pauseOnMouseEnter: true,
        },
        spaceBetween: 0,
        effect: 'slide',
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          }
        }
      });
      const swpF = new Swiper('#swpF', {
        centeredSlides: true,
        loop: true,
        slidesPerView: 1.5,
        centerSlide: true,
        slidesPerGroup: 1,
        speed: 500,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
          // pauseOnMouseEnter: true,
        },
        spaceBetween: 0,
        effect: 'slide',
        breakpoints: {
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          }
        }
      });
      const swpG = new Swiper('#swpG', {
        centeredSlides: true,
        loop: true,
        slidesPerView: 1.2,
        centerSlide: true,
        slidesPerGroup: 1,
        speed: 500,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true,
          // pauseOnMouseEnter: true,
        },
        spaceBetween: 0,
        effect: 'slide',
        breakpoints: {
          768: {
            centeredSlides: false,
            slidesPerView: 2,
          },
          992: {
            centeredSlides: false,
            slidesPerView: 2,
          },
          1400: {
            centeredSlides: false,
            slidesPerView: 3,
          }
        }
      });

    }, 500);

    
  }

}
</script>

