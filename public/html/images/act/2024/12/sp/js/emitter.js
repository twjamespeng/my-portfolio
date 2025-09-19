import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.0.3/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.0.3/+esm";

async function loadParticles(options) {
  await loadAll(tsParticles);

  await tsParticles.load({ id: "tsparticles", options });
}

var sizeMin, sizeMax, speedMin, speedMax, posX, posY;

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  sizeMin = 20;
  sizeMax = 40;
  speedMin = 5;
  speedMax = 10;
  posX = 85;
  posY = 80;
}
else{
  sizeMin = 50;
  sizeMax = 100;
  speedMin = 15;
  speedMax = 30;
  posX = 75;
  posY = 75;
}

const emitterRate = {
    delay: .2,
    quantity: 2
  },
  options = {
    particles: {
      opacity: {
        value: 1
      },
      size: {
        value: {
          min: sizeMin,
          max: sizeMax
        }
      },
      move: {
        enable: true,
        gravity: {
          enable: true
        },
        speed: {
          min: speedMin,
          max: speedMax
        },
        outModes: {
          default: "destroy",
          top: "none"
        }
      },
      rotate: {
        value: {
          min: 0,
          max: 360
        },
        direction: "random",
        move: true,
        animation: {
          enable: true,
          speed: 60
        }
      },
      tilt: {
        direction: "random",
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360
        },
        animation: {
          enable: true,
          speed: 60
        }
      },
      roll: {
        darken: {
          enable: true,
          value: 30
        },
        enlighten: {
          enable: true,
          value: 30
        },
        enable: true,
        mode: "both",
        speed: {
          min: 15,
          max: 25
        }
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15
        }
      }
    },
    background: {
      // color: "#000000"
      color: "transparent"
    },
    emitters: [
      {
        position: {
          x: posX,
          y: posY
        },
        rate: emitterRate,
        particles: {
          move: {
            direction: "top-left"
          },
          shape: {
            type: "image",
            options: {
              image: [{
                src: "images/act/2024/11/sp/images/wave1/cash-01.png"
              },{
                src: "images/act/2024/11/sp/images/wave1/cash-02.png"
              },{
                src: "images/act/2024/11/sp/images/wave1/cash-03.png"
              },{
                src: "images/act/2024/11/sp/images/wave1/cash-04.png"
              },{
                src: "images/act/2024/11/sp/images/wave1/cash-05.png"
              },{
                src: "images/act/2024/11/sp/images/wave1/cash-06.png"
              },{
                src: "images/act/2024/11/sp/images/wave1/cash-07.png"
              }]
            }
          }
        }
      }
    ]
  };

loadParticles(options);