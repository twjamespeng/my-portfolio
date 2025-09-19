import { tsParticles } from "https://cdn.jsdelivr.net/npm/@tsparticles/engine@3.1.0/+esm";
import { loadAll } from "https://cdn.jsdelivr.net/npm/@tsparticles/all@3.1.0/+esm";

async function loadParticles(options) {
  await loadAll(tsParticles);

  await tsParticles.load({ id: "tsparticles", options });
}



var starSize, emitDur, emitDelay, emitSize, emitRateDelay, trailLenMin, trailLenMax;

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  starSize = 1;
  emitDur = 0.5;
  emitDelay = 0.5;
  emitSize = 10;
  emitRateDelay = 1;
  trailLenMin = 3;
  trailLenMax = 9;
}
else{
  starSize = 3;
  emitDur = 0.1;
  emitDelay = 0.1;
  emitSize = 100;
  emitRateDelay = 0.25;
  trailLenMin = 10;
  trailLenMax = 30;
}



const configs = {
  name: "Fireworks Mask",
  fullScreen: {
    enable: true
  },
  background: {
    // color: "#000000",
    // image: "url('https://particles.js.org/images/background3.jpg')",
    // position: "50% 50%",
    // repeat: "no-repeat",
    // size: "cover"
    color: "transparent"
  },
  // backgroundMask: {
  //   enable: true,
  //   cover: {
  //     color: "#000"
  //   }
  // },
  emitters: {
    direction: "top",
    life: {
      count: 0,
      duration: emitDur,
      delay: emitDelay
    },
    rate: {
      delay: emitRateDelay, //發射頻率
      quantity: 1
    },
    size: {
      width: emitSize,
      height: 0
    },
    position: {
      y: 100,
      x: 50
    }
  },
  particles: {
    color: {
      value: "#fff"
    },
    number: {
      value: 0
    },
    destroy: {
      bounds: {
        top: 15
      },
      mode: "split",
      split: {
        count: 1,
        factor: {
          value: 0.333333
        },
        rate: {
          value: 100
        },
        particles: {
          stroke: {
            width: 0
          },
          color: {
            value: ["#ff595e", "#ffca3a", "#8ac926", "#1982c4", "#6a4c93"]
          },
          number: {
            value: 0
          },
          collisions: {
            enable: false
          },
          destroy: {
            bounds: {
              top: 0
            }
          },
          opacity: {
            value: {
              min: 0.1,
              max: 1
            },
            animation: {
              enable: true,
              speed: 0.7,
              sync: false,
              startValue: "max",
              destroy: "min"
            }
          },
          effect: {
            type: "trail",
            options: {
              trail: {
                length: {
                  min: 5,
                  max: 10
                }
              }
            }
          },
          shape: {
            type: "star"
          },
          size: {
            value: starSize,
            animation: {
              enable: false
            }
          },
          life: {
            count: 1,
            duration: {
              value: {
                min: 1,
                max: 2
              }
            }
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
              acceleration: 9.81,
              inverse: false
            },
            decay: 0.1,
            speed: {
              min: 10,
              max: 25
            },
            direction: "outside",
            outModes: "destroy"
          }
        }
      }
    },
    life: {
      count: 1
    },
    effect: {
      type: "trail",
      options: {
        trail: {
          length: {
            min: trailLenMin,
            max: trailLenMax
          },
          minWidth: 1,
          maxWidth: 1
        }
      }
    },
    rotate: {
      path: true
    },
    shape: {
      type: "circle"
    },
    size: {
      value: 1
    },
    move: {
      enable: true,
      gravity: {
        acceleration: 15,
        enable: true,
        inverse: true,
        maxSpeed: 100
      },
      speed: {
        min: 10,
        max: 20
      },
      outModes: {
        default: "destroy",
        top: "none"
      }
    }
  }
  // sounds: {
  //   enable: true,
  //   events: [
  //     {
  //       event: "particleRemoved",
  //       filter: (args) => args.data.particle.options.move.gravity.inverse,
  //       audio: [
  //         "https://particles.js.org/audio/explosion0.mp3",
  //         "https://particles.js.org/audio/explosion1.mp3",
  //         "https://particles.js.org/audio/explosion2.mp3"
  //       ]
  //     }
  //   ],
  //   volume: 50
  // }
};


document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  setTimeout(()=>{
    loadParticles(configs);
  }, 1000);
  
});

