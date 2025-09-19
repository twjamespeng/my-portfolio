<template>
	<div>
    
    <!-- eventModal-A -->
    <div class="modal fade" id="eventModal-A" tabindex="-1" aria-labelledby="eventModal-A" aria-hidden="true" data-anchor-target="">
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div class="modal-content rounded-0">
          <div class="modal-header rounded-0 bg-red">
            <h6 class="modal-title text-white">活動說明</h6>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h3 class="text-center p-0">【滿額抽】</h3>
            <div class="p-xl-2">
              <h5>活動期間</h5>
              <p class="mb-3">2023/1/30(一)00:00~2023/2/28(二)23:59</p>  
            </div>
            <div class="p-xl-2">
              <h5>活動內容</h5>
              <h6 class="mb-3">活動期間凡購買全通路任一商品不限消費金額，即可抽$6,000元銀幣。<br>本活動一帳號限參加一次。 </h6>
              <ul class="ps-3">
                <li>本活動一帳號限參加一次。 </li>
                <li>活動獎項：抽$6,000銀幣，共計10名</li>
                <li>銀幣將於：2023/3/31(五)中午12時歸戶，使用期限：2023/3/31(五)~4/30(日)</li>
              </ul>
            </div>
            
            
            <h3 class="text-center">注意事項</h3>
            <ol class="list-group list-group-flush mb-4">
              <li class="list-group-item">中獎通知：將於活動結束後3/30(四)由電腦隨機抽出，獲獎者後續將於專人電話通知。</li>
              <li class="list-group-item">本活動以實際成交訂單中購買商品組數/金額計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，則該筆失敗訂購恕無法享有獲獎資格。另如中獎會員於收到獎品後，始辦理取消、退貨後致原成功訂購失效致不符抽/中獎資格者，中獎會員必須寄回完整無瑕獎品予ViVa TV後，本公司始能受理取消、退貨作業。</li>
              <li class="list-group-item">本活動獎項須以公佈於本網站之資料為準，如遇不可抗力之因素，ViVa TV保留更換其他等值獎項之權利，恕不另行通知。</li>
              <li class="list-group-item">本活動注意事項載明於ViVa TV官方網站中，參加之會員於參加本活動之同時，即同意接受本活動注意事項之規範，如有違反本活動注意事項之行為，ViVa TV得取消其參加或得獎資格，對於任何破壞本活動之行為依法主張相關之權利。</li>
              <li class="list-group-item">ViVa TV美好購物網保有活動變更、修改或終止活動之權利，如有異動，修改後之內容將公佈於官網。</li>
              <li class="list-group-item">ViVa TV商品抵用券、美好禮券、生日幣、金幣、銀幣之使用方式請詳閱官網「常見問題解答」，或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動之獎品均不得要求轉換現金或其他獎品。</li>
              <li class="list-group-item">本活動所提供之獎項，消費者相關權益概由提供商品或服務之廠商負責，若有疑義，請逕行向廠商洽詢。</li>
              <li class="list-group-item">活動詳情詳見網站活動專區或洽客服專線0809-052-777</li>
              <li class="list-group-item">本活動以實際成交訂單中計算，若因付款失敗、訂單取消、退貨等因素致該筆訂購不成功，，若交易件數=0，則該筆失敗訂購恕無法享有獲獎資格。</li>
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

    // $('.modal').on('shown.bs.modal', function(){
    //   console.log('modal opened');
    //   swpA.autoplay.stop();
    //   swpB.autoplay.stop();
    //   swpC.autoplay.stop();
    // });

    // $('.modal').on('hidden.bs.modal', function(){
    //   console.log('modal closed');
    //   swpA.autoplay.start();
    //   swpB.autoplay.start();
    //   swpC.autoplay.start();
    // });

    // $('#swpBottom').on('mouseover', function(){
    //   console.log('mouseenter');
    //   swpD.autoplay.stop();
    //   document.querySelector('.side-menu-wrapper-left').classList.remove('show');
    //   document.querySelector('.side-menu-wrapper-right').classList.remove('show');
    //   document.querySelector('.side-menu-wrapper-left').classList.add('pe-none');
    //   document.querySelector('.side-menu-wrapper-right').classList.add('pe-none');
    // });

    // $('#swpBottom').on('mouseout', function(){
    //   console.log('mouseleave');
    //   swpD.autoplay.start();
    //   document.querySelector('.side-menu-wrapper-left').classList.remove('pe-none');
    //   document.querySelector('.side-menu-wrapper-right').classList.remove('pe-none');
    //   document.querySelector('.side-menu-wrapper-left').classList.add('show');
    //   document.querySelector('.side-menu-wrapper-right').classList.add('show');
    // });
  }

}
</script>

