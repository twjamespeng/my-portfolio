<template>
  <div>
    <div class="position-relative">
      
      <div v-if="wave1" class="landing-main wave1 container-fluid sticky-top-nav p-0" style="z-index: 1;">
        <div class="w-100 position-relative overflow-hidden">

          <div class="landing-background">
            <picture>
              <source srcset="images/act/2022/12/sp/images/landing-background.jpg" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/landing-background.jpg" alt="landing background">
            </picture>  
          </div>

          <div class="landing-rabbit-family">
            <!-- 全家福 -->
            <picture>
              <source srcset="images/act/2022/12/sp/images/landing-rabbit-family.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/landing-rabbit-family.png" alt="landing rabbit family">
            </picture>
            <!-- 兔媽 -->
            <div class="rabbit-mom">
              <div class="rabbit-mom-righthand">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/mom-righthand.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/mom-righthand.png">
                </picture>
              </div>
              <div class="rabbit-mom-body">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/mom-body.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/mom-body.png">
                </picture>
              </div>
              <div class="rabbit-mom-head">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/mom-head.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/mom-head.png">
                </picture>
                <div class="rabbit-mom-eyes-1">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/mom-eyes-1.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/mom-eyes-1.png">
                  </picture>
                </div>
                <div class="rabbit-mom-eyes-2">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/mom-eyes-2.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/mom-eyes-2.png">
                  </picture>
                </div>
                <div class="rabbit-mom-eyebrows">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/mom-eyebrows.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/mom-eyebrows.png">
                  </picture>
                </div>
              </div>
              <div class="rabbit-mom-ribs">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/mom-ribs.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/mom-ribs.png">
                </picture>
              </div>
            </div>
            <!-- 兔仔 -->
            <div class="rabbit-kid">
              <div class="rabbit-kid-righthand">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/kid-righthand.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/kid-righthand.png">
                </picture>
              </div>
              <div class="rabbit-kid-lefthand">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/kid-lefthand.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/kid-lefthand.png">
                </picture>
              </div>
              <div class="rabbit-kid-body">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/kid-body.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/kid-body.png">
                </picture>
              </div>
              <div class="rabbit-kid-head">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/kid-head.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/kid-head.png">
                </picture>
                <div class="rabbit-kid-eyes-1">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/kid-eyes-1.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/kid-eyes-1.png">
                  </picture>
                </div>
                <div class="rabbit-kid-eyes-2">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/kid-eyes-2.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/kid-eyes-2.png">
                  </picture>
                </div>
                <div class="rabbit-kid-eyebrows">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/kid-eyebrows.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/kid-eyebrows.png">
                  </picture>
                </div>
              </div>
            </div>
            <!-- 兔爺 -->
            <div class="rabbit-grandpa">
              <div class="rabbit-grandpa-lefthand">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/grandpa-lefthand.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/grandpa-lefthand.png">
                </picture>
                <div class="rabbit-grandpa-chopstick-left">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/grandpa-chopstick-left.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/grandpa-chopstick-left.png">
                  </picture>
                </div>
                <div class="rabbit-grandpa-chopstick-right">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/grandpa-chopstick-right.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/grandpa-chopstick-right.png">
                  </picture>
                </div>
              </div>
              <div class="rabbit-grandpa-body">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/grandpa-body.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/grandpa-body.png">
                </picture>
              </div>
              <div class="rabbit-grandpa-head">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/grandpa-head.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/grandpa-head.png">
                </picture>
              </div>
              <div class="rabbit-grandpa-head">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/grandpa-head.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/grandpa-head.png">
                </picture>
                <div class="rabbit-grandpa-eyebrows">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/grandpa-eyebrows.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/grandpa-eyebrows.png">
                  </picture>
                </div>
                <div class="rabbit-grandpa-eyes-1">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/grandpa-eyes-1.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/grandpa-eyes-1.png">
                  </picture>
                </div>
                <div class="rabbit-grandpa-eyes-2">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/grandpa-eyes-2.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/grandpa-eyes-2.png">
                  </picture>
                </div>
                <div class="rabbit-grandpa-beard">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/grandpa-beard.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/grandpa-beard.png">
                  </picture>
                </div>
              </div>
                
                


            </div>


          </div>



          <div class="landing-lantern">
            <picture>
              <source srcset="images/act/2022/12/sp/images/landing-lantern.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/landing-lantern.png" alt="landing lantern">
            </picture>
          </div>
          <div class="landing-table">
            <picture>
              <source srcset="images/act/2022/12/sp/images/landing-table.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/landing-table.png" alt="landing table">
            </picture>
          </div>

          

          <div class="landing-logo">
            <div class="animate__animated animate__bounceIn">
              
              <picture>
                <source srcset="images/act/2022/12/sp/images/landing-logo.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/landing-logo.png" alt="landing logo">
              </picture>  
              
            </div>
            
          </div>


          <div class="landing-steam">
            <div class="steam">
              <div class="steam-flow">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="150px" height="250px" viewBox="-10 -20 150 250" style="enable-background:new 0 0 150 250;" xml:space="preserve">
                  <g><path class="steam-cloud cloud-1" d="M64.2,40.6c-2.7,23.8,18,21,18.3,39.6c0.3,17.5-31.7,16.8-32.8,36c1.5,26.9,39.4,18.9,41.4,49.5c1.8,27.8-42.1,37.8-41,53.1"/></g>
                  <g><path class="steam-cloud cloud-2" d="M95.7,56c1.8,18.8,13,16.6,12.4,31.2C107.6,98.6,86,102.1,86,115.6c0,18.5,28,19.2,28.6,50.6c0.5,24.3-29.5,36.5-27.6,47.4"/></g>
                  <g><path class="steam-cloud cloud-3" d="M39.2,10.5C41.3,30.2,24,27.9,24.8,43.2C25.4,55.1,50.5,58.9,50.5,73c0,19.3-29.7,20.6-31.3,45.8c-1.9,30.8,37.8,25.6,40.4,57.7"/></g>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div v-if="wave2" class="landing-main wave2 container-fluid sticky-top-nav p-0" style="z-index: 1">
        <div class="w-100 position-relative overflow-hidden">
          <div class="landing-background">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave2/landing-background.jpg" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave2/landing-background.jpg" alt="landing background">
            </picture>  
          </div>
          <div class="landing-back-row-lantern">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave2/landing-back-row-lantern.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave2/landing-back-row-lantern.png" alt="landing back row lantern">
            </picture>
          </div>
          <div class="landing-front-row-lantern">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave2/landing-front-row-lantern.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave2/landing-front-row-lantern.png" alt="landing front row lantern">
            </picture>
          </div>
          <!-- 兔媽帶兔仔 -->
          <div class="landing-mom-kid">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave2/landing-mom-kid.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave2/landing-mom-kid.png" alt="landing mom kid">
            </picture>
            <!-- 兔仔 -->
            <div class="rabbit-wave2-kid">
              <div class="rabbit-wave2-kid-body">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/wave2/kid-body.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/kid-body.png">
                </picture>
                <div class="rabbit-wave2-kid-hands">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave2/kid-hands.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/kid-hands.png">
                  </picture>
                  <div class="rabbit-wave2-kid-bag-3">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave2/kid-bag-3.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/kid-bag-3.png">
                    </picture>
                  </div>
                  <div class="rabbit-wave2-kid-bag-2">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave2/kid-bag-2.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/kid-bag-2.png">
                    </picture>
                  </div>
                  <div class="rabbit-wave2-kid-bag-1">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave2/kid-bag-1.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/kid-bag-1.png">
                    </picture>
                  </div>
                </div>
                  
                <div class="rabbit-wave2-kid-head">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave2/kid-head.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/kid-head.png">
                  </picture>
                  <div class="rabbit-wave2-kid-eyes-1">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave2/kid-eyes-1.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/kid-eyes-1.png">
                    </picture>
                  </div>
                  <div class="rabbit-wave2-kid-eyes-2">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave2/kid-eyes-2.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/kid-eyes-2.png">
                    </picture>
                  </div>
                  <div class="rabbit-wave2-kid-eyebrow-left">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave2/kid-eyebrow-left.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/kid-eyebrow-left.png">
                    </picture>
                  </div>
                  <div class="rabbit-wave2-kid-eyebrow-right">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave2/kid-eyebrow-right.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/kid-eyebrow-right.png">
                    </picture>
                  </div>
                  <div class="rabbit-wave2-kid-sweat">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave2/kid-sweat.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/kid-sweat.png">
                    </picture>
                  </div>
                </div>
              </div>
              
                
            </div>
            <!-- 兔媽 -->
            <div class="rabbit-wave2-mom">
                
              <div class="rabbit-wave2-mom-clothe">
                <div class="rabbit-wave2-mom-right-hand">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave2/mom-right-hand.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/mom-right-hand.png">
                  </picture>
                </div>
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/wave2/mom-clothe.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/mom-clothe.png">
                </picture>
              
                <div class="rabbit-wave2-mom-scarf">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave2/mom-scarf.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/mom-scarf.png">
                  </picture>
                </div>
                <div class="rabbit-wave2-mom-head">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave2/mom-head.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/mom-head.png">
                  </picture>
                  <div class="rabbit-wave2-mom-eyes-1">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave2/mom-eyes-1.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/mom-eyes-1.png">
                    </picture>
                  </div>
                  <div class="rabbit-wave2-mom-eyes-2">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave2/mom-eyes-2.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/mom-eyes-2.png">
                    </picture>
                  </div>
                  <div class="rabbit-wave2-mom-eyebrows-1">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave2/mom-eyebrows-1.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/mom-eyebrows-1.png">
                    </picture>
                  </div>
                  <div class="rabbit-wave2-mom-eyebrows-2">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave2/mom-eyebrows-2.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/mom-eyebrows-2.png">
                    </picture>
                  </div>
                </div>
                <div class="rabbit-wave2-mom-nuts">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave2/mom-nuts.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/mom-nuts.png">
                  </picture>
                </div>
                <div class="rabbit-wave2-mom-left-hand">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave2/mom-left-hand.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/mom-left-hand.png">
                  </picture>
                </div>
                <div class="rabbit-wave2-mom-bling-1">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave2/mom-bling-1.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/mom-bling-1.png">
                  </picture>
                </div>
                <div class="rabbit-wave2-mom-bling-2">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave2/mom-bling-2.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/rabbits/wave2/mom-bling-2.png">
                  </picture>
                </div>
              </div>
            </div>

          </div>
          <div class="landing-table">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave2/landing-table.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave2/landing-table.png" alt="landing table">
            </picture>
          </div>
          
        </div>
      </div>

      <div v-if="wave3" class="landing-main wave3 container-fluid sticky-top-nav p-0" style="z-index: 1">
        <div class="w-100 position-relative overflow-hidden">
          <div class="landing-background">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave3/landing-background.jpg" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/landing-background.jpg" alt="landing background">
            </picture>
            <div class="landing-left-door">
              <picture>
                <source srcset="images/act/2022/12/sp/images/wave3/landing-left-door.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/landing-left-door.png" alt="landing left door">
              </picture>
            </div>
            <div class="landing-right-door">
              <picture>
                <source srcset="images/act/2022/12/sp/images/wave3/landing-right-door.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/landing-right-door.png" alt="landing right door">
              </picture>
            </div>
            <div class="landing-wall">
              <picture>
                <source srcset="images/act/2022/12/sp/images/wave3/landing-wall.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/landing-wall.png" alt="landing wall">
              </picture>
            </div>
            <div class="landing-snow">
              <div class="snow"></div>
              <div class="snow"></div>
              <div class="snow"></div>
              <div class="snow"></div>
              <div class="snow"></div>
              <div class="snow"></div>
              <div class="snow"></div>
              <div class="snow"></div>
              <div class="snow"></div>
              <div class="snow"></div>

              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>

              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              <div class="snow d-none d-xl-block"></div>
              
              
            </div>
          </div>
          <!-- 三代同堂 -->
          <div class="landing-wave3-family">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave3/landing-wave3-family.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/landing-wave3-family.png" alt="landing wave3 family">
            </picture>
            <!-- 兔爺 -->
            <div class="landing-wave3-grandpa">
              <div class="landing-wave3-grandpa-body">
                <div class="landing-wave3-grandpa-right-hand">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave3/grandpa-right-hand.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/grandpa-right-hand.png" alt="landing wave3 grandpa right hand">
                  </picture>
                </div>
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/wave3/grandpa-body.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/grandpa-body.png" alt="landing wave3 grandpa body">
                </picture>
                <div class="landing-wave3-grandpa-head">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave3/grandpa-head.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/grandpa-head.png" alt="landing wave3 grandpa head">
                  </picture>
                  <div class="landing-wave3-grandpa-beard">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave3/grandpa-beard.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/grandpa-beard.png" alt="landing wave3 grandpa beard">
                    </picture>
                  </div>
                  <div class="landing-wave3-grandpa-eyes-1">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave3/grandpa-eyes-1.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/grandpa-eyes-1.png" alt="landing wave3 grandpa eyes 1">
                    </picture>
                  </div>
                  <div class="landing-wave3-grandpa-eyes-2">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave3/grandpa-eyes-2.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/grandpa-eyes-2.png" alt="landing wave3 grandpa eyes 2">
                    </picture>
                  </div>
                  <div class="landing-wave3-grandpa-wrinkles">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave3/grandpa-wrinkles.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/grandpa-wrinkles.png" alt="landing wave3 grandpa wrinkles">
                    </picture>
                  </div>
                  <div class="landing-wave3-grandpa-eyebrows">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave3/grandpa-eyebrows.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/grandpa-eyebrows.png" alt="landing wave3 grandpa eyebrows">
                    </picture>
                  </div>
                </div>
              </div>
            </div>
            <!-- 兔媽 -->
            <div class="landing-wave3-mom">
              <div class="landing-wave3-mom-body">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/wave3/mom-body.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/mom-body.png" alt="landing wave3 mom body">
                </picture>
                <div class="landing-wave3-mom-left-hand">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave3/mom-left-hand.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/mom-left-hand.png" alt="landing wave3 mom left hand">
                  </picture>
                </div>    
                <div class="landing-wave3-mom-scarf">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave3/mom-scarf.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/mom-scarf.png" alt="landing wave3 mom scarf">
                  </picture>
                </div>
                <div class="landing-wave3-mom-head">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave3/mom-head.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/mom-head.png" alt="landing wave3 mom head">
                  </picture>
                  <div class="landing-wave3-mom-eyes-1">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave3/mom-eyes-1.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/mom-eyes-1.png" alt="landing wave3 mom eyes 1">
                    </picture>
                  </div>
                  <div class="landing-wave3-mom-eyes-2">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave3/mom-eyes-2.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/mom-eyes-2.png" alt="landing wave3 mom eyes 2">
                    </picture>
                  </div>
                  <div class="landing-wave3-mom-eyebrows">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave3/mom-eyebrows.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/mom-eyebrows.png" alt="landing wave3 mom eyebrows">
                    </picture>
                  </div>
                </div>
              </div>
              <div class="landing-wave3-mom-couplet">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/wave3/mom-couplet.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/mom-couplet.png" alt="landing wave3 mom couplet">
                </picture>
              </div>
              <div class="landing-wave3-mom-right-hand">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/wave3/mom-right-hand.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/mom-right-hand.png" alt="landing wave3 mom right hand">
                </picture>
              </div>
            </div>
            <!-- 兔仔 -->
            <div class="landing-wave3-kid" style="z-index: 4;">
              <div class="landing-wave3-kid-body">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/wave3/kid-body.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/kid-body.png" alt="landing wave3 kid body">
                </picture>
                <div class="landing-wave3-kid-hands-2">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave3/kid-hands-2.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/kid-hands-2.png" alt="landing wave3 kid hands 2">
                  </picture>
                </div>
                <div class="landing-wave3-kid-head">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave3/kid-head.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/kid-head.png" alt="landing wave3 kid head">
                  </picture>

                  <div class="landing-wave3-kid-eyes-1">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave3/kid-eyes-1.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/kid-eyes-1.png" alt="landing wave3 kid eyes 1">
                    </picture>
                  </div>
                  <div class="landing-wave3-kid-eyes-2">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave3/kid-eyes-2.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/kid-eyes-2.png" alt="landing wave3 kid eyes 2">
                    </picture>
                  </div>
                  <div class="landing-wave3-kid-eyebrows-1">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave3/kid-eyebrows-1.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/kid-eyebrows-1.png" alt="landing wave3 kid eyebrows 1">
                    </picture>
                  </div>
                  <div class="landing-wave3-kid-eyebrows-2">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave3/kid-eyebrows-2.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/kid-eyebrows-2.png" alt="landing wave3 kid eyebrows 2">
                    </picture>
                  </div>
                </div>
                <div class="landing-wave3-kid-hands-1">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave3/kid-hands-1.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/kid-hands-1.png" alt="landing wave3 kid hands 1">
                  </picture>
                </div>
                <div class="landing-wave3-kid-money">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave3/kid-money.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/kid-money.png" alt="landing wave3 kid money">
                  </picture>
                </div>
                <div class="landing-wave3-kid-words">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave3/kid-words.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/kid-words.png" alt="landing wave3 kid words">
                  </picture>
                </div>
              </div>
            </div>
          </div>
          <div class="landing-wave3-logo">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave3/landing-logo.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave3/landing-logo.png" alt="landing logo">
            </picture>
          </div>
        </div>
      </div>

      <div v-if="wave4" class="landing-main wave4 container-fluid p-0" style="z-index: 1">
        <div class="w-100 position-relative overflow-hidden">
          <div class="landing-background">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave4/landing-background.jpg" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave4/landing-background.jpg" alt="landing background">
            </picture> 
          </div>
          <div class="landing-balloon">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave4/landing-balloon.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave4/landing-balloon.png" alt="landing balloon">
            </picture> 
          </div>

          <div class="landing-heart-left-group">
            <div class="landing-heart-left-1">
              <picture>
                <source srcset="images/act/2022/12/sp/images/wave4/landing-heart-left-1.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave4/landing-heart-left-1.png" alt="landing heart left 1">
              </picture>
            </div>
            <div class="landing-heart-left-2">
              <picture>
                <source srcset="images/act/2022/12/sp/images/wave4/landing-heart-left-2.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave4/landing-heart-left-2.png" alt="landing heart left 2">
              </picture>
            </div>
            <div class="landing-heart-left-3">
              <picture>
                <source srcset="images/act/2022/12/sp/images/wave4/landing-heart-left-3.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave4/landing-heart-left-3.png" alt="landing heart left 3">
              </picture>
            </div>
          </div>

          <div class="landing-heart-right-group">
            <div class="landing-heart-right-1">
              <picture>
                <source srcset="images/act/2022/12/sp/images/wave4/landing-heart-right-1.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave4/landing-heart-right-1.png" alt="landing heart right 1">
              </picture>
            </div>
            <div class="landing-heart-right-2">
              <picture>
                <source srcset="images/act/2022/12/sp/images/wave4/landing-heart-right-2.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave4/landing-heart-right-2.png" alt="landing heart right 2">
              </picture>
            </div>
            <div class="landing-heart-right-3">
              <picture>
                <source srcset="images/act/2022/12/sp/images/wave4/landing-heart-right-3.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave4/landing-heart-right-3.png" alt="landing heart right 3">
              </picture>
            </div>
          </div>

          <!-- 新郎新娘 -->
          <div class="landing-couple">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave4/landing-couple.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave4/landing-couple.png" alt="landing couple">
            </picture>
            <!-- 新娘 -->
            <div class="landing-bride">
              <div class="landing-bride-body">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/wave4/bride-body.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/bride-body.png" alt="landing bride body">
                </picture>
                <div class="landing-bride-head">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave4/bride-head.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/bride-head.png" alt="landing bride head">
                  </picture>
                  <div class="landing-bride-eyes-1">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave4/bride-eyes-1.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/bride-eyes-1.png" alt="landing bride eyes 1">
                    </picture>
                  </div>
                  <div class="landing-bride-eyes-2">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave4/bride-eyes-2.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/bride-eyes-2.png" alt="landing bride eyes 2">
                    </picture>
                  </div>
                  <div class="landing-bride-eyebrows">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave4/bride-eyebrows.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/bride-eyebrows.png" alt="landing bride eyebrows">
                    </picture>
                  </div>
                  <div class="landing-bride-blush">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave4/bride-blush.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/bride-blush.png" alt="landing bride blush">
                    </picture>
                  </div>
                </div>
                <div class="landing-bride-hand">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave4/bride-hand.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/bride-hand.png" alt="landing bride hand">
                  </picture>
                </div>
                
              </div>
            </div>
            <!-- 新郎 -->
            <div class="landing-groom">
              <div class="landing-groom-body">
                <picture>
                  <source srcset="images/act/2022/12/sp/images/rabbits/wave4/groom-body.png" media="(min-width: 992px)">
                  <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/groom-body.png" alt="landing groom body">
                </picture>
                <div class="landing-groom-head">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave4/groom-head.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/groom-head.png" alt="landing groom head">
                  </picture>
                  <div class="landing-groom-eyes-1">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave4/groom-eyes-1.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/groom-eyes-1.png" alt="landing groom eyes 1">
                    </picture>
                  </div>
                  
                  <div class="landing-groom-eyebrows">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave4/groom-eyebrows.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/groom-eyebrows.png" alt="landing groom eyebrows">
                    </picture>
                  </div>
                  <div class="landing-groom-blush">
                    <picture>
                      <source srcset="images/act/2022/12/sp/images/rabbits/wave4/groom-blush.png" media="(min-width: 992px)">
                      <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/groom-blush.png" alt="landing groom blush">
                    </picture>
                  </div>
                </div>
                <div class="landing-groom-hand">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave4/groom-hand.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/groom-hand.png" alt="landing groom hand">
                  </picture>
                </div>
                <div class="landing-groom-flower">
                  <picture>
                    <source srcset="images/act/2022/12/sp/images/rabbits/wave4/groom-flower.png" media="(min-width: 992px)">
                    <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/rabbits/wave4/groom-flower.png" alt="landing groom flower">
                  </picture>
                </div>
              </div>
            </div>
            <!-- 鐘 -->
            <div class="landing-bell">
              <picture>
                <source srcset="images/act/2022/12/sp/images/wave4/landing-bell.png" media="(min-width: 992px)">
                <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave4/landing-bell.png" alt="landing bell">
              </picture>
            </div>
          </div>
          <div class="landing-wave4-logo">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave4/landing-logo.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave4/landing-logo.png" alt="landing logo">
            </picture>
          </div>
          
          <!-- <div class="landing-petal">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave4/landing-petal.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave4/landing-petal.png" alt="landing petal">
            </picture>
          </div> -->

          

          <div class="landing-cloud">
            <picture>
              <source srcset="images/act/2022/12/sp/images/wave4/landing-cloud.png" media="(min-width: 992px)">
              <img class="landing-adjustment img-fluid pe-none us-none" src="images/act/2022/12/sp/images/m/wave4/landing-cloud.png" alt="landing cloud">
            </picture>
          </div>
        </div>
      </div>

      <div v-if="wave4" id="petal" class="landing-falling-petal"></div>


      <!-- 左選單 -->
      <div v-if="start_1021" class="side-menu-wrapper-left fade show">
        <div class="left-side-menu-header">
          <img src="images/act/2022/12/sp/images/left-side-menu-header.png" class="img-fluid us-none">
        </div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1">
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">異國情調</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/A1D4C5712CD12C8EE0536F0212AC6C55'">養肌樂趣</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/D548C8B37A1B6466E05400144FF9CEC6'">開運聚財</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">生活儀式感</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">休閒一刻</button>
              <!-- <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E922AF5237EC4A49E05400144FF82309'">食在必行</button> -->
              <!-- <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/000000301'">換季好禮賞</button> -->
            </div>

            <div class="d-flex flex-column side-menu-group-2 px-2">
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
              <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>
      <!-- 右選單 -->
      <div v-if="start_1021" class="side-menu-wrapper-right fade show">
        <div class="right-side-menu-header">
          <img src="images/act/2022/12/sp/images/right-side-menu-header.png" class="img-fluid us-none">
        </div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1">
              <button class="btn text-white rounded-0 lh-1 py-2" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-C">滿額抽<img src="images/act/2022/12/sp/images/logo-lecreuset.png" class="img-fluid"></button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-D">滿額抽金幣</button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-A">新客首購禮</button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-B">回饋無上限</button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-E">揚眉兔氣<br>好事成雙</button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-J">兔步高昇<br>三重好禮</button>
            </div>

            <div v-if="wave1" class="d-flex flex-column side-menu-group-2">
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionA')">繽紛年趣</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionB')">節慶禮讚</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionC')">歲末歡聚</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionD')">除舊佈新</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionE')">開運魔法</button>
            </div>

            <div v-if="wave2" class="d-flex flex-column side-menu-group-2">
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionA')">歲末歡聚</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionB')">節慶禮讚</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionC')">繽紛年趣</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionD')">除舊佈新</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionE')">開運魔法</button>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>
      
      <!-- 左選單 -->
      <div v-if="wave2" class="side-menu-wrapper-left fade show">
        <div class="left-side-menu-header">
          <img src="images/act/2022/12/sp/images/left-side-menu-header.png" class="img-fluid us-none">
        </div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1">
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">異國情調</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/A1D4C5712CD12C8EE0536F0212AC6C55'">養肌樂趣</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/D548C8B37A1B6466E05400144FF9CEC6'">開運聚財</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">生活儀式感</button>
              <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">休閒一刻</button>
              <!-- <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E922AF5237EC4A49E05400144FF82309'">食在必行</button> -->
              <!-- <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/000000301'">換季好禮賞</button> -->
            </div>

            <div class="d-flex flex-column side-menu-group-2 px-2">
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
              <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>
      <!-- 右選單 -->
      <div v-if="wave2" class="side-menu-wrapper-right fade show">
        <div class="right-side-menu-header">
          <img src="images/act/2022/12/sp/images/right-side-menu-header.png" class="img-fluid us-none">
        </div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1">
              <button class="btn text-white rounded-0 lh-1 py-2" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-C">滿額抽<img src="images/act/2022/12/sp/images/logo-lecreuset.png" class="img-fluid"></button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-D">滿額抽金幣</button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-A">新客首購禮</button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-B">回饋無上限</button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-E">揚眉兔氣<br>好事成雙</button>
              <button class="btn text-white rounded-0" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-J">兔步高昇<br>三重好禮</button>
            </div>

            <div v-if="wave1" class="d-flex flex-column side-menu-group-2">
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionA')">繽紛年趣</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionB')">節慶禮讚</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionC')">歲末歡聚</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionD')">除舊佈新</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionE')">開運魔法</button>
            </div>

            <div v-if="wave2" class="d-flex flex-column side-menu-group-2">
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionA')">歲末歡聚</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionB')">節慶禮讚</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionC')">繽紛年趣</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionD')">除舊佈新</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionE')">開運魔法</button>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>

      <!-- 左選單 -->
      <div v-if="wave3" class="wave3 side-menu-wrapper-left fade show">
        <div class="left-side-menu-header">
          <img src="images/act/2022/12/sp/images/wave3/right-side-menu-header.png" class="img-fluid us-none">
        </div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1">
              <button class="btn mb-2" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">一秒即出國</button>
              <button class="btn mb-2" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/A1D4C5712CD12C8EE0536F0212AC6C55'">內外都兼具</button>
              <button class="btn mb-2" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/53890F3EE5720BAFE0536F0212AC6475'">開運小法寶</button>
              <button class="btn mb-2" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">生活儀式感</button>
              <button class="btn mb-2" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">品味好食光</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/166DB2B136B622E5E0540003BA0FF88E'">防疫小尖兵</button>
              <!-- <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E922AF5237EC4A49E05400144FF82309'">食在必行</button> -->
              <!-- <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/000000301'">換季好禮賞</button> -->
            </div>

            <div class="d-flex flex-column side-menu-group-2 px-2">
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
              <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>
      <!-- 右選單 -->
      <div v-if="wave3" class="wave3 side-menu-wrapper-right fade show">
        <div class="right-side-menu-header">
          <img src="images/act/2022/12/sp/images/wave3/right-side-menu-header.png" class="img-fluid us-none">
        </div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 mb-2">
              <button class="btn mb-2" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave3-A">買就抽500</button>
              <button class="btn mb-2" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave3-B">滿額抽800</button>
              <button class="btn mb-2" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave3-C">滿額抽3000</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave3-D">你買我就送</button>
            </div>

            
            <div class="d-flex flex-column side-menu-group-2 mb-2">
              <button class="btn py-2 rounded-0" type="button" onclick="scrollToSection('sectionA')">走春納福</button>
              <button class="btn py-2 rounded-0" type="button" onclick="scrollToSection('sectionB')">夢幻佳節</button>
              <button class="btn py-2 rounded-0" type="button" onclick="scrollToSection('sectionC')">迎春開運</button>
              <button class="btn py-2 rounded-0" type="button" onclick="scrollToSection('sectionD')">禮饗好年</button>
              <button class="btn py-2 rounded-0" type="button" onclick="scrollToSection('sectionE')">專屬飾禮</button>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>


      <!-- 左選單 -->
      <div v-if="wave4" class="wave4 side-menu-wrapper-left fade show">
        <div class="left-side-menu-header">
          <!-- <img src="images/act/2022/12/sp/images/wave4/left-side-menu-header.png" class="img-fluid us-none"> -->
        </div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-2">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">一秒即出國</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/A1D4C5712CD12C8EE0536F0212AC6C55'">內外都兼具</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/53890F3EE5720BAFE0536F0212AC6475'">開運小法寶</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">生活儀式感</button>
              
              <!-- <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E922AF5237EC4A49E05400144FF82309'">食在必行</button> -->
              <!-- <button class="btn text-white rounded-0" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/000000301'">換季好禮賞</button> -->
            </div>

            <div class="d-flex flex-column side-menu-group-2 p-2">
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
      <div v-if="wave4" class="wave4 side-menu-wrapper-right fade show">
        <div class="right-side-menu-header">
          <!-- <img src="images/act/2022/12/sp/images/wave4/right-side-menu-header.png" class="img-fluid us-none"> -->
        </div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column side-menu-group-1 pt-2">
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave3-D">你買我就送</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">品味好食光</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/166DB2B136B622E5E0540003BA0FF88E'">防疫小尖兵</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionA')">專屬飾禮</button>
            </div>

            
            <div class="d-flex flex-column side-menu-group-2 py-2">
              
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionB')">精氣養神</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionC')">夢幻佳節</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionD')">開工必備</button>
              <button class="btn rounded-0" type="button" onclick="scrollToSection('sectionE')">時尚美學</button>
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
      wave3: false,
      wave4: false,

      end_0915: false,
      start_0916: false,
      start_1021: false,
      before_1021: false,
      start_1028: false,
      start_1101: false,
      before_1101: false,
      
      // wave3: false
    };
  },
  components: {
    'item-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/12/sp/js/component/itemApp.vue"),
    'modal-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2022/12/sp/js/component/modalApp.vue")
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/12/sp/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/12/sp/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2022/12/sp/images/og-wave2.jpg");
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
      var end_0915 = '2022-09-15 23:59:59';
      var start_0916 = '2022-09-16 00:00:00';
      var start_1021 = '2022-10-21 00:00:00';
      var before_1021 = '2022-10-20 23:59:59';
      var start_1101 = '2022-11-01 00:00:00';
      var start_1028 = '2022-10-28 00:00:00';


      if ( moment(timeNow).isBefore('2022-12-22 23:59:59') ) {
        this.wave1 = true;
      }

      if ( moment(timeNow).isBetween('2022-12-23 00:00:00', '2023-01-20 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
      }

      if ( moment(timeNow).isBetween('2023-01-21 00:00:00', '2023-02-05 23:59:59', 'second', '[]') ) {
        this.wave3 = true;
        document.title = '錢兔似錦賀新春 - ViVa美好購物網';
      }

      if ( moment(timeNow).isBetween('2023-02-06 00:00:00', '2023-02-14 23:59:59', 'second', '[]') ) {
        this.wave4 = true;
        document.body.classList.add('wave4');
        document.title = '緣來飾你 - ViVa美好購物網';
      }






      




      if ( moment(timeNow).isSameOrAfter(start_1021)) {
        this.start_1021 = true;
      }

      if ( moment(timeNow).isSameOrAfter(start_1028)) {
        this.start_1028 = true;
      }

      if ( moment(timeNow).isSameOrBefore(before_1021)) {
        this.before_1021 = true;
        document.body.classList.add('pre-event');
      }

      if ( moment(timeNow).isSameOrAfter(start_1101)) {
        this.start_1101 = true;
      } else {
        this.before_1101 = true;
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

