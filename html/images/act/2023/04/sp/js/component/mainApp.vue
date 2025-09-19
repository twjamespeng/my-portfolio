<template>
  <div>
    <div class="position-relative">

      <div v-if="wave1" class="landing-main wave1 container-fluid p-0" style="z-index: 1">
        <div id="scene" class="w-100 position-relative overflow-hidden">

          <div class="landing-background pe-none us-none">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave1/landing-bg.jpg" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/04/sp/images/wave1/mobile/landing-bg.png" alt="landing background">
            </picture>
          </div>
          
          <div data-depth="0.1" class="landing-goddess pe-none us-none">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave1/landing-goddess.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInRight" style="animation-delay: .6s;" src="images/act/2023/04/sp/images/wave1/mobile/landing-goddess.png" alt="landing goddess">
            </picture>
          </div>
          
          <div data-depth="0.06" class="landing-mask-5 pe-none us-none d-none d-xl-block">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave1/landing-mask-5.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 1s;" src="images/act/2023/04/sp/images/wave1/mobile/landing-mask-5.png" alt="landing mask">
            </picture>
          </div>

          <div data-depth="0.06" class="landing-mask-4 pe-none us-none d-none d-xl-block">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave1/landing-mask-4.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 1s;" src="images/act/2023/04/sp/images/wave1/mobile/landing-mask-4.png" alt="landing mask">
            </picture>
          </div>

          <div data-depth="0.06" class="landing-mask-3 pe-none us-none d-none d-xl-block">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave1/landing-mask-3.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 1s;" src="images/act/2023/04/sp/images/wave1/mobile/landing-mask-3.png" alt="landing mask">
            </picture>
          </div>
          <div data-depth="0.07" class="landing-mask-2 pe-none us-none d-none d-xl-block">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave1/landing-mask-2.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: .5s;" src="images/act/2023/04/sp/images/wave1/mobile/landing-mask-2.png" alt="landing mask">
            </picture>
          </div>

          <div class="landing-butterflies pe-none us-none">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave1/landing-butterflies.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 1.5s;" src="images/act/2023/04/sp/images/wave1/mobile/landing-butterflies.png" alt="landing date">
            </picture>
            <div class="butterfly-A">
              <div class="butterfly-A-shadow">
                <div class="butterfly-s-left-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-left-shadow.png">
                </div>
                <div class="butterfly-s-right-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-right-shadow.png">
                </div>
              </div>
              <div class="butterfly-A-body">
                <div class="butterfly-s-left">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-left.png">
                </div>
                <div class="butterfly-s-right">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-right.png">
                </div>
              </div>
            </div>
            <div class="butterfly-B">
              <div class="butterfly-B-shadow">
                <div class="butterfly-s-left-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-left-shadow.png">
                </div>
                <div class="butterfly-s-right-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-right-shadow.png">
                </div>
              </div>
              <div class="butterfly-B-body">
                <div class="butterfly-s-left">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-left.png">
                </div>
                <div class="butterfly-s-right">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-right.png">
                </div>
              </div>
            </div>
          </div>
          
          <div class="landing-leaves-1 pe-none us-none d-none d-xl-block">
            <div>
              <picture>
                <source srcset="images/act/2023/04/sp/images/wave1/landing-leaves-1.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 0.25s;" src="images/act/2023/04/sp/images/wave1/mobile/landing-leaves-1.png" alt="landing flower">
              </picture>
            </div>
          </div>
          <div class="landing-leaves-2 pe-none us-none d-none d-xl-block">
            <div>
              <picture>
                <source srcset="images/act/2023/04/sp/images/wave1/landing-leaves-2.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 0.25s;" src="images/act/2023/04/sp/images/wave1/mobile/landing-leaves-2.png" alt="landing flower">
              </picture>
            </div>
          </div>
          <div class="landing-flower pe-none us-none d-none d-xl-block">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave1/landing-flower.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 0.25s;" src="images/act/2023/04/sp/images/wave1/mobile/landing-flower.png" alt="landing flower">
            </picture>
          </div>

          <div class="landing-mask-1 pe-none us-none d-none d-xl-block">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave1/landing-mask-1.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 0s;" src="images/act/2023/04/sp/images/wave1/mobile/landing-mask-1.png" alt="landing mask">
            </picture>
          </div>
          <div class="landing-title pe-none us-none">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave1/landing-title.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInLeft" style="animation-delay: .3s;" src="images/act/2023/04/sp/images/wave1/mobile/landing-title.png" alt="landing date">
            </picture>
          </div>
        </div>
      </div>

      <div v-if="wave2" class="landing-main wave2 container-fluid p-0" style="z-index: 1">
        <div id="scene" class="w-100 position-relative overflow-hidden">

          <div class="landing-background pe-none us-none">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave2/landing-bg.jpg" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeIn" src="images/act/2023/04/sp/images/wave2/mobile/landing-bg.png" alt="landing background">
            </picture>
          </div>
          
          <div data-depth="0.1" class="landing-goddess pe-none us-none">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave2/landing-goddess.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInRight" style="animation-delay: .6s;" src="images/act/2023/04/sp/images/wave2/mobile/landing-goddess.png" alt="landing goddess">
            </picture>
          </div>
          
          <div data-depth="0.06" class="landing-mask-5 pe-none us-none d-none d-xl-block">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave2/landing-mask-5.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 1s;" src="images/act/2023/04/sp/images/wave2/mobile/landing-mask-5.png" alt="landing mask">
            </picture>
          </div>

          <div data-depth="0.06" class="landing-mask-4 pe-none us-none d-none d-xl-block">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave2/landing-mask-4.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 1s;" src="images/act/2023/04/sp/images/wave2/mobile/landing-mask-4.png" alt="landing mask">
            </picture>
          </div>

          <div data-depth="0.06" class="landing-mask-3 pe-none us-none d-none d-xl-block">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave2/landing-mask-3.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 1s;" src="images/act/2023/04/sp/images/wave2/mobile/landing-mask-3.png" alt="landing mask">
            </picture>
          </div>
          <div data-depth="0.07" class="landing-mask-2 pe-none us-none d-none d-xl-block">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave2/landing-mask-2.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: .5s;" src="images/act/2023/04/sp/images/wave2/mobile/landing-mask-2.png" alt="landing mask">
            </picture>
          </div>

          <div class="landing-butterflies pe-none us-none">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave2/landing-butterflies.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 1.5s;" src="images/act/2023/04/sp/images/wave2/mobile/landing-butterflies.png" alt="landing date">
            </picture>
            <div class="butterfly-A">
              <div class="butterfly-A-shadow">
                <div class="butterfly-s-left-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-left-shadow.png">
                </div>
                <div class="butterfly-s-right-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-right-shadow.png">
                </div>
              </div>
              <div class="butterfly-A-body">
                <div class="butterfly-s-left">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-left.png">
                </div>
                <div class="butterfly-s-right">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-right.png">
                </div>
              </div>
            </div>
            <div class="butterfly-B">
              <div class="butterfly-B-shadow">
                <div class="butterfly-s-left-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-left-shadow.png">
                </div>
                <div class="butterfly-s-right-shadow">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-right-shadow.png">
                </div>
              </div>
              <div class="butterfly-B-body">
                <div class="butterfly-s-left">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-left.png">
                </div>
                <div class="butterfly-s-right">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-right.png">
                </div>
              </div>
            </div>
          </div>
          
          <div class="landing-leaves-1 pe-none us-none d-none d-xl-block">
            <div>
              <picture>
                <source srcset="images/act/2023/04/sp/images/wave2/landing-leaves-1.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 0.25s;" src="images/act/2023/04/sp/images/wave2/mobile/landing-leaves-1.png" alt="landing flower">
              </picture>
            </div>
          </div>
          <div class="landing-leaves-2 pe-none us-none d-none d-xl-block">
            <div>
              <picture>
                <source srcset="images/act/2023/04/sp/images/wave2/landing-leaves-2.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 0.25s;" src="images/act/2023/04/sp/images/wave2/mobile/landing-leaves-2.png" alt="landing flower">
              </picture>
            </div>
          </div>
          <div class="landing-flower pe-none us-none d-none d-xl-block">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave2/landing-flower.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 0.25s;" src="images/act/2023/04/sp/images/wave2/mobile/landing-flower.png" alt="landing flower">
            </picture>
          </div>

          <div class="landing-mask-1 pe-none us-none d-none d-xl-block">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave2/landing-mask-1.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInUp" style="animation-delay: 0s;" src="images/act/2023/04/sp/images/wave2/mobile/landing-mask-1.png" alt="landing mask">
            </picture>
          </div>
          <div class="landing-title pe-none us-none">
            <picture>
              <source srcset="images/act/2023/04/sp/images/wave2/landing-title.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none animated fadeInLeft" style="animation-delay: .3s;" src="images/act/2023/04/sp/images/wave2/mobile/landing-title.png" alt="landing date">
            </picture>
          </div>
        </div>
      </div>

      <div v-if="wave1" class="butterfly-overlay">
        
        <div class="butterfly-1" style="z-index: 104;">
          <div class="butterfly-1-shadow">
            <div class="butterfly-s-left-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-left-shadow.png">
            </div>
            <div class="butterfly-s-right-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-right-shadow.png">
            </div>
          </div>
          <div class="butterfly-1-body">
            <div class="butterfly-s-left">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-left.png">
            </div>
            <div class="butterfly-s-right">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-right.png">
            </div>
          </div>
        </div>

        <div class="butterfly-2" style="z-index: 104;">
          <div class="butterfly-2-shadow">
            <div class="butterfly-s-left-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-left-shadow.png">
            </div>
            <div class="butterfly-s-right-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-right-shadow.png">
            </div>
          </div>
          <div class="butterfly-2-body">
            <div class="butterfly-s-left">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-left.png">
            </div>
            <div class="butterfly-s-right">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-right.png">
            </div>
          </div>
        </div>

        <div class="butterfly-3" style="z-index: 104;">
          <div class="butterfly-3-shadow">
            <div class="butterfly-s-left-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-left-shadow.png">
            </div>
            <div class="butterfly-s-right-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-right-shadow.png">
            </div>
          </div>
          <div class="butterfly-3-body">
            <div class="butterfly-s-left">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-left.png">
            </div>
            <div class="butterfly-s-right">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-right.png">
            </div>
          </div>
        </div>

        <div class="butterfly-4" style="z-index: 104;">
          <div class="butterfly-4-shadow">
            <div class="butterfly-s-left-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-left-shadow.png">
            </div>
            <div class="butterfly-s-right-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-right-shadow.png">
            </div>
          </div>
          <div class="butterfly-4-body">
            <div class="butterfly-s-left">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-left.png">
            </div>
            <div class="butterfly-s-right">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave1/butterfly-s-right.png">
            </div>
          </div>
        </div>
      </div>
      <div v-if="wave2" class="butterfly-overlay">
        
        <div class="butterfly-1" style="z-index: 104;">
          <div class="butterfly-1-shadow">
            <div class="butterfly-s-left-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-left-shadow.png">
            </div>
            <div class="butterfly-s-right-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-right-shadow.png">
            </div>
          </div>
          <div class="butterfly-1-body">
            <div class="butterfly-s-left">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-left.png">
            </div>
            <div class="butterfly-s-right">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-right.png">
            </div>
          </div>
        </div>

        <div class="butterfly-2" style="z-index: 104;">
          <div class="butterfly-2-shadow">
            <div class="butterfly-s-left-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-left-shadow.png">
            </div>
            <div class="butterfly-s-right-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-right-shadow.png">
            </div>
          </div>
          <div class="butterfly-2-body">
            <div class="butterfly-s-left">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-left.png">
            </div>
            <div class="butterfly-s-right">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-right.png">
            </div>
          </div>
        </div>

        <div class="butterfly-3" style="z-index: 104;">
          <div class="butterfly-3-shadow">
            <div class="butterfly-s-left-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-left-shadow.png">
            </div>
            <div class="butterfly-s-right-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-right-shadow.png">
            </div>
          </div>
          <div class="butterfly-3-body">
            <div class="butterfly-s-left">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-left.png">
            </div>
            <div class="butterfly-s-right">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-right.png">
            </div>
          </div>
        </div>

        <div class="butterfly-4" style="z-index: 104;">
          <div class="butterfly-4-shadow">
            <div class="butterfly-s-left-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-left-shadow.png">
            </div>
            <div class="butterfly-s-right-shadow">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-right-shadow.png">
            </div>
          </div>
          <div class="butterfly-4-body">
            <div class="butterfly-s-left">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-left.png">
            </div>
            <div class="butterfly-s-right">
              <img class="img-fluid pe-none us-none" src="images/act/2023/04/sp/images/wave2/butterfly-s-right.png">
            </div>
          </div>
        </div>
      </div>
      

      <!-- 左選單 -->
      <div v-if="wave1" class="wave1 side-menu-wrapper-left">
        <div class="left-side-menu-header animated fadeInLeft"></div>
        <div class="side-menu-body animated fadeInLeft">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 py-2">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/A1D4C5712CD12C8EE0536F0212AC6C55'">健康好食在</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">家一點品味</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">享樂新生活</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">一秒即出國</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/goods/3059672022'">輕盈樂苗條</button>
              <button v-if="end_0417" class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/tertiaryCategory/E391F8619E263D07E05400144FF9CEC6'">蒜出新滋味</button>
              <!-- 4/18曝光 -->
              <button v-if="start_0418" class="btn" type="button" data-bs-target="#eventModal-Wave1-M" data-bs-toggle="modal">臻愛滿額抽</button>
              
            </div>

            <div class="d-flex flex-column side-menu-group-2 px-3 py-3">
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000004')">生活</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000002')">家電</button>
              </div>
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A24D23F00F52C2E0440003BA0FF872')">時尚</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000003')">美妝</button>  
              </div>
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C04AE75708173CA7E05400144FF9CEC6')">健康</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A1B2891B10444DE0440003BA0FF88E')">美食</button>
              </div>
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C5532AF44E31474EE05400144FF82309')">日用</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C064C88E9DDC3999E05400144FF82309')">３Ｃ</button>
              </div>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>
      <!-- 右選單 -->
      <div v-if="wave1" class="wave1 side-menu-wrapper-right">
        <div class="right-side-menu-header animated fadeInRight"></div>
        <div class="side-menu-body animated fadeInRight">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-1">
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-G">抽愛馬仕絲巾</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-N">抽國際保養品</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E">抽享瘦好體態</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-A">新客首購送禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-H">好馨情四重奏</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C">禮享無限馨意</button>
              
            </div>

            
            <div class="d-flex flex-column side-menu-group-2">
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionC')">甜蜜好滋味</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionD')">獻禮好馨情</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionA')">就飾要愛我</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionB')">女神放光芒</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionE')">悅享好時光</button>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>

      <!-- 左選單 -->
      <div v-if="wave2" class="wave2 side-menu-wrapper-left">
        <div class="left-side-menu-header animated fadeInLeft"></div>
        <div class="side-menu-body animated fadeInLeft">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 py-2">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/A1D4C5712CD12C8EE0536F0212AC6C55'">健康好食在</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">家一點品味</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">享樂新生活</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">一秒即出國</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/goods/3059672022'">輕盈樂苗條</button>
              <button v-if="end_0417" class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/tertiaryCategory/E391F8619E263D07E05400144FF9CEC6'">蒜出新滋味</button>
              <!-- 4/18曝光 -->
              <button v-if="start_0418" class="btn" type="button" data-bs-target="#eventModal-Wave1-M" data-bs-toggle="modal">臻愛滿額抽</button>
              
            </div>

            <div class="d-flex flex-column side-menu-group-2 px-3 py-3">
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000004')">生活</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000002')">家電</button>
              </div>
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A24D23F00F52C2E0440003BA0FF872')">時尚</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/000000003')">美妝</button>  
              </div>
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C04AE75708173CA7E05400144FF9CEC6')">健康</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/57A1B2891B10444DE0440003BA0FF88E')">美食</button>
              </div>
              <div class="btn-group">
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C5532AF44E31474EE05400144FF82309')">日用</button>
                <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/category/primaryCategory/C064C88E9DDC3999E05400144FF82309')">３Ｃ</button>
              </div>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>
      <!-- 右選單 -->
      <div v-if="wave2" class="wave2 side-menu-wrapper-right">
        <div class="right-side-menu-header animated fadeInRight"></div>
        <div class="side-menu-body animated fadeInRight">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-1">
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-G">抽愛馬仕絲巾</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-N">抽國際保養品</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E">抽享瘦好體態</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-A">新客首購送禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-H">好馨情四重奏</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-C">禮享無限馨意</button>
              
            </div>

            
            <div class="d-flex flex-column side-menu-group-2">
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionD')">獻禮好馨情</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionE')">悅享好時光</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionB')">女神放光芒</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionA')">就飾要愛我</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionC')">甜蜜好滋味</button>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>

      

      



      <!-- 公格商品 itemApp -->
      <div class="container-fluid container-item-app p-0 position-relative" style="z-index: 103;">
        <item-app></item-app>  
      </div>

      <!-- modal -->
      <modal-app></modal-app>


      

      


      

      

    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      youtubeURL: '',
      month: '',
      wave1: false,
      wave2: false,
      tvoneday: false,
      start_0418: false,
      end_0417: false,
    };
  },
  components: {
    'item-app': httpVueLoader('/html/images/act/2023/04/sp/js/component/itemApp.vue'),
    'modal-app': httpVueLoader('/html/images/act/2023/04/sp/js/component/modalApp.vue')
  },
  methods: {
    init: function() {
      var main = this;
      main.promoCheck();

      // setTimeout(()=>{


      // const swpD = new Swiper('#swpD', {
        
      //   loop: true,
      //   slidesPerView: 5,
      //   slidesPerGroup: 1,
      //   speed: 10000,
      //   autoplay: {
      //     delay: 0,
      //   },
      //   spaceBetween: 0,
      //   effect: 'slide',
        
      // });
      

      // }, 500);



      

      // let m = 'febuary';

      /*let timeFromURL = this.getUrlParameter('t');
      if (timeFromURL) {
        let monthFromURL = timeFromURL.substr(4, 2);
        let mmddFromURL = timeFromURL.substr(4, 4);
        console.log('mmddFromURL: ' + mmddFromURL);

        if (timeFromURL.substr(0,8) == '20230424') {
          this.wave2 = true;

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/04/sp/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/04/sp/images/og-wave2.jpg");
        }

      } else {
        let year = moment().format('YYYY');
        let month = moment().format('MM');
        let date = moment().format('DD');

        

        let yyyymmdd = year + month + date ;
        console.log('mmdd: ' + yyyymmdd);

        if (yyyymmdd >= '20230424') { 
          this.wave2 = true;
          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/04/sp/images/og-wave2.jpg");
        } 

        
      }*/

      let timeFromURL = this.getUrlParameter('t');
      var dataTime;

      let year = moment().format('YYYY');
      let month = moment().format('MM');
      let date = moment().format('DD');

      var timeNow = moment().format('YYYY-MM-DD HH:mm:ss');
      if (timeFromURL) {
        timeNow = moment(timeFromURL).format('YYYY-MM-DD HH:mm:ss');
      }
      

      if ( moment(timeNow).isBetween('2023-03-16 00:00:00', '2023-04-25 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
      }

      if ( moment(timeNow).isBetween('2023-04-26 00:00:00', '2023-05-14 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
        document.body.classList.add('wave2');
      }

      if ( moment(timeNow).isBetween('2023-04-18 00:00:00', '2023-05-14 23:59:59', 'second', '[]') ) {
        this.start_0418 = true;
      }

      if ( moment(timeNow).isBetween('2023-04-12 00:00:00', '2023-04-17 23:59:59', 'second', '[]') ) {
        this.end_0417 = true;
      }



      if (timeFromURL) {
        // dataTime = timeFromURL.substr(4, 4);
        dataTime = timeFromURL;
        console.log('dataTime: ' + dataTime);
        
      } else {
        dataTime = year + month + date;
        console.log('dataTime: ' + dataTime);
        
      }


      

      
      
      
      

      
    },
    promoCheck: function() {
/*      let timeFromURL = this.getUrlParameter('t');

      let today = moment().format('YYYY-MM-DD');

      if (timeFromURL >= '20211102') {
        today = '2021-11-02';
      }

      let promoChangeDate = moment('2021-11-02');
      if (moment(today).isBefore(promoChangeDate)) {
        this.youtubeURL = 'https://www.youtube.com/embed/LSLsRrpFlCw?playsinline=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&autoplay=0&mute=1&playlist=LSLsRrpFlCw&loop=1'; //1st promo
      } else {
        this.youtubeURL = 'https://www.youtube.com/embed/LSLsRrpFlCw?playsinline=1&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&autoplay=0&mute=1&playlist=LSLsRrpFlCw&loop=1'; //2nd promo
      }*/
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

