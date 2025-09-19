<template>
  <div>
    <div>
      
      <div v-if="wave1" class="landing-main wave1 container-fluid position-relative p-0" style="z-index: 1">
        <div id="scene" class="w-100 position-relative overflow-hidden">
          <div class="landing-logo pe-none us-none ">
            <picture>
              <source srcset="images/act/2023/12/sp/images/wave1/landing-logo.jpg" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave1/mobile/landing-logo.jpg" alt="landing logo">
            </picture>

          </div>
          <div class="landing-text pe-none us-none ">
            <picture>
              <source srcset="images/act/2023/12/sp/images/wave1/landing-text.png" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave1/mobile/landing-text.png" alt="landing text">
            </picture>

          </div>

        </div>
      </div>

      <div v-if="wave2" class="landing-main wave2 container-fluid position-relative p-0" style="z-index: 1">
        <div id="scene" class="w-100 position-relative overflow-hidden">
          <div class="landing-bg pe-none us-none">
            <picture>
              <source srcset="images/act/2023/12/sp/images/wave2/landing-bg.jpg" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave2/mobile/landing-bg.jpg" alt="landing bg">
            </picture>

            <div class="spotlight-left"></div>
            <div class="spotlight-left-corner"></div>
            <div class="spotlight-right"></div>
            <div class="spotlight-right-corner"></div>

            <div class="firework-left"><div></div></div>
            <div class="firework-right"><div></div></div>

            <div class="landing-logo pe-none us-none animated fadeInUp">
              <div>
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave2/landing-logo.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave2/mobile/landing-logo.png" alt="landing logo">
                </picture>
              </div>
            </div>
            <!-- <div class="landing-dragons pe-none us-none">
              <picture>
                <source srcset="images/act/2023/12/sp/images/wave2/landing-dragons.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave2/mobile/landing-dragons.png" alt="landing dragons">
              </picture>
            </div> -->
            
            <div class="landing-dragon-left pe-none us-none">
              <div>
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave2/landing-dragon-left.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated slideInLeft" src="images/act/2023/12/sp/images/wave2/mobile/landing-dragon-left.png" alt="landing dragon left">
                </picture>
              </div>
            </div>
            
            <div class="landing-dragon-right pe-none us-none">
              <div>
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave2/landing-dragon-right.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none animated slideInRight" src="images/act/2023/12/sp/images/wave2/mobile/landing-dragon-right.png" alt="landing dragon right">
                </picture>
              </div>
            </div>

          </div>
          

        </div>
      </div>

      <div v-if="wave3" class="landing-main wave3 container-fluid position-relative p-0" style="z-index: 1">
        <div id="scene" class="w-100 position-relative overflow-hidden">
          <div class="landing-bg pe-none us-none">
            <picture>
              <source srcset="images/act/2023/12/sp/images/wave3/landing-bg.jpg" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/mobile/landing-bg.jpg" alt="landing bg">
            </picture>

            <div class="landing-curtain pe-none us-none">
              <picture>
                <source srcset="images/act/2023/12/sp/images/wave3/landing-curtain.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/mobile/landing-curtain.png" alt="landing logo">
              </picture>
            </div>

            <div class="landing-clouds-top pe-none us-none">
              <picture>
                <source srcset="images/act/2023/12/sp/images/wave3/landing-clouds-top.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/mobile/landing-clouds-top.png" alt="landing logo">
              </picture>
            </div>

            <div class="landing-lantern pe-none us-none">
              <picture>
                <source srcset="images/act/2023/12/sp/images/wave3/landing-lantern.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/mobile/landing-lantern.png" alt="landing logo">
              </picture>
            </div>

            <div class="landing-text pe-none us-none">
              <picture>
                <source srcset="images/act/2023/12/sp/images/wave3/landing-text.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/mobile/landing-text.png" alt="landing logo">
              </picture>
            </div>

            <div class="landing-left-dragon pe-none us-none">
              <div class="left-body">
                <div class="left-tail">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave3/dragons/left-tail.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/left-tail.png" alt="landing right dragon">
                  </picture>
                </div>
                <div class="left-hand-left">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave3/dragons/left-hand-left.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/left-hand-left.png" alt="landing right dragon">
                  </picture>
                  
                </div>
                <div class="left-torso">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave3/dragons/left-body.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/left-body.png" alt="landing right dragon">
                  </picture>
                </div>
                
                
                <div class="left-head">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave3/dragons/left-head.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/left-head.png" alt="landing right dragon">
                  </picture>
                  <div class="left-eyebrows">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave3/dragons/left-eyebrows.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/left-eyebrows.png" alt="landing right dragon">
                    </picture>
                  </div>
                  <div class="left-eyes-1">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave3/dragons/left-eyes-1.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/left-eyes-1.png" alt="landing right dragon">
                    </picture>
                  </div>
                  <div class="left-whisker-left">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave3/dragons/left-whisker-left.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/left-whisker-left.png" alt="landing right dragon">
                    </picture>
                  </div>
                  <div class="left-whisker-right">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave3/dragons/left-whisker-right.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/left-whisker-right.png" alt="landing right dragon">
                    </picture>
                  </div>
                  <div class="left-beard">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave3/dragons/left-beard.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/left-beard.png" alt="landing right dragon">
                    </picture>
                  </div>
                </div>
                <div class="left-hand-right">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave3/dragons/left-hand-right.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/left-hand-right.png" alt="landing right dragon">
                  </picture>
                </div>
                <div class="left-nugget">
                  <div>
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave3/dragons/left-nugget.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/left-nugget.png" alt="landing right dragon">
                    </picture>
                  </div>
                </div>
              </div>
                
              
            </div>
            <div class="landing-right-dragon pe-none us-none">
              <div class="right-body">
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave3/dragons/right-body.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/right-body.png" alt="landing right dragon">
                </picture>

                <div class="right-head">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave3/dragons/right-head.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/right-head.png" alt="landing right dragon">
                  </picture>
                  <div class="right-eyebrows">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave3/dragons/right-eyebrows.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/right-eyebrows.png" alt="landing right dragon">
                    </picture>
                  </div>
                  <div class="right-eyes-1">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave3/dragons/right-eyes-1.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/right-eyes-1.png" alt="landing right dragon">
                    </picture>
                  </div>

                  <div class="right-eyes-2">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave3/dragons/right-eyes-2.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/right-eyes-2.png" alt="landing right dragon">
                    </picture>
                  </div>
                  
                  <div class="right-beard">
                    <div class="right-whisker-left">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave3/dragons/right-whisker-left.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/right-whisker-left.png" alt="landing right dragon">
                      </picture>
                    </div>
                    <div class="right-whisker-right">
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave3/dragons/right-whisker-right.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/right-whisker-right.png" alt="landing right dragon">
                      </picture>
                    </div>
                    <div>
                      <picture>
                        <source srcset="images/act/2023/12/sp/images/wave3/dragons/right-beard.png" media="(min-width: 992px)">
                        <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/right-beard.png" alt="landing right dragon">
                      </picture>
                    </div>
                  </div>
                </div>
                <div class="right-scroll">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave3/dragons/right-scroll.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/dragons/right-scroll.png" alt="landing right dragon">
                  </picture>
                </div>
              </div>
            </div>
            <div class="landing-clouds-bottom pe-none us-none">
              <div>
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave3/landing-clouds-bottom.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave3/mobile/landing-clouds-bottom.png" alt="landing logo">
                </picture>
              </div>
            </div>

            

          </div>

        </div>
      </div>

      <div v-if="wave4" class="landing-main wave4 container-fluid position-relative p-0" style="z-index: 1">
        <div id="scene" class="w-100 position-relative overflow-hidden">
          <div class="landing-bg pe-none us-none">
            <picture>
              <source srcset="images/act/2023/12/sp/images/wave4/landing-bg.jpg" media="(min-width: 992px)">
              <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/landing-bg.jpg" alt="landing bg">
            </picture>

            <div class="landing-pillars pe-none us-none">
              <picture>
                <source srcset="images/act/2023/12/sp/images/wave4/landing-pillars.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/landing-pillars.png" alt="landing pillars">
              </picture>
            </div>

            

            <div class="landing-left-lantern pe-none us-none">
              <picture>
                <source srcset="images/act/2023/12/sp/images/wave4/landing-left-lantern.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/landing-left-lantern.png" alt="landing left lantern">
              </picture>
            </div>
            <div class="landing-right-lantern pe-none us-none">
              <picture>
                <source srcset="images/act/2023/12/sp/images/wave4/landing-right-lantern.png" media="(min-width: 992px)">
                <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/landing-right-lantern.png" alt="landing right lantern">
              </picture>
            </div>

            <div class="landing-text pe-none us-none">
              <div>
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave4/landing-text.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/landing-text.png" alt="landing logo">
                </picture>
                <div class="landing-text-overlay"></div>
              </div>
            </div>

            <div class="landing-left-dragon pe-none us-none">
              <div class="left-dragon-inner">
                <div class="left-dragon-lower">
                  <div class="left-tail">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/left-tail.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/left-tail.png" alt="left tail">
                    </picture>
                  </div>
                  <div class="left-body">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/left-body.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/left-body.png" alt="left body">
                    </picture>
                  </div>
                </div>
                <div class="left-dragon-upper">
                  <div class="left-head">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/left-head.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/left-head.png" alt="left head">
                    </picture>
                  </div>
                  <div class="left-eyebrows">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/left-eyebrows.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/left-eyebrows.png" alt="left eyebrows">
                    </picture>
                  </div>
                  <div class="left-eyes">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/left-eyes.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/left-eyes.png" alt="left eyes">
                    </picture>
                  </div>
                  <div class="left-nose">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/left-nose.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/left-nose.png" alt="left nose">
                    </picture>
                  </div>
                  <div class="left-whisker">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/left-whisker.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/left-whisker.png" alt="left whisker">
                    </picture>
                  </div>
                  <div class="left-nose">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/left-nose.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/left-nose.png" alt="left nose">
                    </picture>
                  </div>
                </div>
                <div class="left-scroll">
                  <picture>
                    <source srcset="images/act/2023/12/sp/images/wave4/dragons/left-scroll.png" media="(min-width: 992px)">
                    <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/left-scroll.png" alt="left scroll">
                  </picture>
                </div>
              </div>
            </div>
            
            <div class="landing-right-dragon pe-none us-none">
              <div class="right-dragon-inner">
                <div class="right-dragon-lower">
                  <div class="right-tail">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/right-tail.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/right-tail.png" alt="right tail">
                    </picture>
                  </div>
                  <div class="right-body">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/right-body.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/right-body.png" alt="right body">
                    </picture>
                  </div>
                  <div class="right-hands-1">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/right-hands-1.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/right-hands-1.png" alt="right hands 1">
                    </picture>
                  </div>
                  <!-- <div class="right-hands-2">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/right-hands-2.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/right-hands-2.png" alt="right hands 2">
                    </picture>
                  </div> -->
                </div>
                <div class="right-dragon-upper">
                  <div class="right-head">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/right-head.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/right-head.png" alt="right head">
                    </picture>
                  </div>
                  <div class="right-eyebrows">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/right-eyebrows.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/right-eyebrows.png" alt="right eyebrows">
                    </picture>
                  </div>
                  <div class="right-eyes">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/right-eyes.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/right-eyes.png" alt="right eyes">
                    </picture>
                  </div>
                  <div class="right-nose">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/right-nose.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/right-nose.png" alt="right nose">
                    </picture>
                  </div>
                  <div class="right-whisker">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/right-whisker.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/right-whisker.png" alt="right whisker">
                    </picture>
                  </div>
                  <div class="right-nose">
                    <picture>
                      <source srcset="images/act/2023/12/sp/images/wave4/dragons/right-nose.png" media="(min-width: 992px)">
                      <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/dragons/right-nose.png" alt="right nose">
                    </picture>
                  </div>
                </div>
                
              </div>
            </div>

            <div class="landing-chat pe-none us-none">
              <div>
                <picture>
                  <source srcset="images/act/2023/12/sp/images/wave4/landing-chat.png" media="(min-width: 992px)">
                  <img class="img-fluid pe-none us-none" src="images/act/2023/12/sp/images/wave4/mobile/landing-chat.png" alt="landing chat">
                </picture>
              </div>
            </div>

            

          </div>

        </div>
      </div>




      
      

      <!-- 左選單 -->
      <div v-if="wave1" class="wave1 side-menu-wrapper-left">
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column justify-content-around side-menu-group-1">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/FE26D074E2855E90E05400144FF82309'">懷念好滋味</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">放鬆品生活</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">彰顯藝術感</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">異國好風味</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/0A15010A39B50423E06400144FF9CEC6'">出國採購趣</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/7E85B72A7D003B7CE0536E0212AC29EE'">身心都清爽</button>
            </div>

            <div class="d-flex flex-column justify-content-around side-menu-group-2">
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
      <div v-if="wave1" class="wave1 side-menu-wrapper-right">
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column justify-content-around side-menu-group-1">
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-A">新客獨享禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D">雙12大放送</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-F">送2.4萬銀幣</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-G">加碼抽好禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E">金幣等你拿</button>
            </div>
            
            <div class="d-flex flex-column justify-content-around side-menu-group-2">
              <a href="#sectionA" class="btn rounded-0">好物不踩雷</a>
              <a href="#sectionB" class="btn rounded-0">除舊佈新趣</a>
              <a href="#sectionC" class="btn rounded-0">送禮不藏私</a>
              <a href="#sectionD" class="btn rounded-0">團聚饗時光</a>
              <a href="#sectionE" class="btn rounded-0">迎春好運來</a>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>

      <!-- 左選單 -->
      <div v-if="wave2" class="wave2 side-menu-wrapper-left">
        <div class="wine"></div>
        <div class="hat"></div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">

            <div class="d-flex flex-column justify-content-around side-menu-group-0">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/FE26D074E2855E90E05400144FF82309'">懷念好滋味</button>
            </div>
            <div class="d-flex flex-column justify-content-around side-menu-group-1">
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/CC9223EEB31B4C1EE05400144FF82309'">放鬆品生活</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E7813B7043D83E0CE05400144FF82309'">彰顯藝術感</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/E91349E4211C4A4BE05400144FF82309'">異國好風味</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/0A15010A39B50423E06400144FF9CEC6'">出國採購趣</button>
              <button class="btn" type="button" onclick="location.href='https://www.vivatv.com.tw/category/secondaryCategory/7E85B72A7D003B7CE0536E0212AC29EE'">身心都清爽</button>
            </div>

            <div class="d-flex flex-column justify-content-around side-menu-group-2">
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
      <div v-if="wave2" class="wave2 side-menu-wrapper-right">
        <div class="wine"></div>
        <div class="hat"></div>
        <div class="side-menu-body">
          <div class="d-flex flex-column">
            <div class="d-flex flex-column justify-content-around side-menu-group-0">
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-A">新客獨享禮</button>
            </div>
            <div class="d-flex flex-column justify-content-around side-menu-group-1">
              <button v-if="before_1218" class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-D">雙12大放送</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-F">送2.4萬銀幣</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-G">加碼抽好禮</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E">金幣等你拿</button>
              <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-E">滿額拿銀幣</button>
              <button v-if="after_1218" class="btn" type="button" data-bs-toggle="modal" data-bs-target="#eventModal-Wave1-H">抽精美鍋具</button>
            </div>
            
            <div class="d-flex flex-column justify-content-around side-menu-group-2">
              <a href="#sectionA" class="btn rounded-0">好物不踩雷</a>
              <a href="#sectionB" class="btn rounded-0">除舊佈新趣</a>
              <a href="#sectionC" class="btn rounded-0">送禮不藏私</a>
              <a href="#sectionD" class="btn rounded-0">團聚饗時光</a>
              <a href="#sectionE" class="btn rounded-0">迎春好運來</a>
            </div>

            <div class="d-flex flex-column side-menu-group-3">
              <button class="btn rounded-0 py-2" type="button" onclick="window.open('https://www.vivatv.com.tw/')">點我看更多</button>
            </div>

          </div>
        </div>
      </div>





      

      <!-- 公格商品 itemApp -->
      <div class="container-fluid container-item-app p-0" style="z-index: 103;">
        
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
      before_1218: false,
      after_1218: false
    };
  },
  components: {
    'item-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2023/12/sp/js/component/itemApp.vue"),
    'modal-app': httpVueLoader((window.location.hostname.includes("github.io") ? "/my-portfolio" : "") + "/html/images/act/2023/12/sp/js/component/modalApp.vue")
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/12/sp/images/og-wave2.jpg");
        } else if (timeFromURL.substr(0,8) >= '20230425') {
          this.wave2 = true;
          

          $('body').addClass('wave-2');
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/12/sp/images/og-wave2.jpg");
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
          $("meta[property='og:image']").attr("content", "https://www.vivatv.com.tw/html/images/act/2023/12/sp/images/og-wave2.jpg");
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
      

      if ( moment(timeNow).isBetween('2023-11-28 00:00:00', '2023-12-14 23:59:59', 'second', '[]') ) {
        this.wave1 = true;
        document.body.classList.add('wave1');
      }
      if ( moment(timeNow).isBetween('2023-12-15 00:00:00', '2024-01-07 23:59:59', 'second', '[]') ) {
        this.wave2 = true;
        document.body.classList.add('wave2');
      }
      if ( moment(timeNow).isBetween('2024-01-08 00:00:00', '2024-01-29 23:59:59', 'second', '[]') ) {
        this.wave3 = true;
        document.body.classList.add('wave3');
        document.title = "美好納福迎新春 - ViVa美好購物網";
      }
      if ( moment(timeNow).isBetween('2024-01-30 00:00:00', '2024-02-18 23:59:59', 'second', '[]') ) {
        this.wave4 = true;
        document.body.classList.add('wave4');
      }

      if ( moment(timeNow).isBetween('2023-12-11 00:00:00', '2023-12-17 23:59:59', 'second', '[]') ) {
        this.before_1218 = true;
      }
      if ( moment(timeNow).isBetween('2023-12-18 00:00:00', '2024-12-17 23:59:59', 'second', '[]') ) {
        this.after_1218 = true;
      }
      
      

      // if ( moment(timeNow).isBetween('2023-08-08 00:00:00', '2023-08-31 23:59:59', 'second', '[]') ) {
      //   this.wave2 = true;
      //   document.body.classList.add('wave2');
      // }

      



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

