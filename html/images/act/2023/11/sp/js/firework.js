//tsParticles library - https://github.com/matteobruni/tsparticles
function checkMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

// window.onload = function() {
  setTimeout(function(){
    initialFireworks();
  }, 2000);
  
// };



function initialFireworks() {

  if (checkMobile()) {
    tsParticles.load("tsparticles", {
      fullScreen: {
        enable: false
      },
      detectRetina: true,
      background: {
        color: "#000"
      },
      fpsLimit: 60,
      emitters: {
        direction: "top",
        life: {
          count: 0,
          duration: 0.1,
          delay: 0.1
        },
        rate: {
          delay: 0.25,
          quantity: 1
        },
        size: {
          width: 50,
          height: 75
        },
        position: {
          y: 100,
          x: 50
        }
      },
      particles: {
        number: {
          value: 0
        },
        destroy: {
          mode: "split",
          split: {
            count: 1,
            factor: { value: 1 / 3 },
            rate: {
              value: 100
            },
            particles: {
              stroke: {
                color: {
                  value: [
                    "#ffffff",
                    "#b22234",
                    "#b22234",
                    "#b22234",
                    "#3c3bfe",
                    "#3c3bfe",
                    "#fefc3b",
                    "#fefc3b",
                  ]
                },
                width: 1
              },
              number: {
                value: 0
              },
              collisions: {
                enable: false
              },
              opacity: {
                value: 1,
                animation: {
                  enable: true,
                  speed: 0.7,
                  minimumValue: 0.1,
                  sync: false,
                  startValue: "max",
                  destroy: "min"
                }
              },
              shape: {
                type: "circle"
              },
              size: {
                value: .5,
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
                  enable: false
                },
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                outMode: "destroy"
              }
            }
          }
        },
        life: {
          count: 1
        },
        shape: {
          type: "line"
        },
        size: {
          value: 50,
          animation: {
            enable: true,
            sync: true,
            speed: 150,
            startValue: "max",
            destroy: "min"
          }
        },
        stroke: {
          color: {
            value: "#ffffff"
          },
          width: 1
        },
        rotate: {
          path: true
        },
        move: {
          enable: true,
          gravity: {
            acceleration: 15,
            enable: true,
            inverse: true,
            maxSpeed: 100
          },
          speed: { min: 10, max: 20 },
          outModes: {
            default: "destroy",
            top: "none"
          },
          trail: {
            fillColor: "#000",
            enable: true,
            length: 10
          }
        }
      }
    });
  } else {
    tsParticles.load("tsparticles", {
    fullScreen: {
      enable: false
    },
    detectRetina: true,
    background: {
      color: "#000"
    },
    fpsLimit: 60,
    emitters: {
      direction: "top",
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.1
      },
      rate: {
        delay: 0.25,
        quantity: 1
      },
      size: {
        width: 50,
        height: 0
      },
      position: {
        y: 100,
        x: 50
      }
    },
    particles: {
      number: {
        value: 0
      },
      destroy: {
        mode: "split",
        split: {
          count: 1,
          factor: { value: 1 / 3 },
          rate: {
            value: 100
          },
          particles: {
            stroke: {
              color: {
                value: [
                  "#ffffff",
                  "#b22234",
                  "#b22234",
                  "#b22234",
                  "#3c3bfe",
                  "#3c3bfe",
                  "#fefc3b",
                  "#fefc3b",
                ]
              },
              width: 1
            },
            number: {
              value: 0
            },
            collisions: {
              enable: false
            },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                speed: 0.7,
                minimumValue: 0.1,
                sync: false,
                startValue: "max",
                destroy: "min"
              }
            },
            shape: {
              type: "circle"
            },
            size: {
              value: 1,
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
                enable: false
              },
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outMode: "destroy"
            }
          }
        }
      },
      life: {
        count: 1
      },
      shape: {
        type: "line"
      },
      size: {
        value: 50,
        animation: {
          enable: true,
          sync: true,
          speed: 150,
          startValue: "max",
          destroy: "min"
        }
      },
      stroke: {
        color: {
          value: "#ffffff"
        },
        width: 1
      },
      rotate: {
        path: true
      },
      move: {
        enable: true,
        gravity: {
          acceleration: 15,
          enable: true,
          inverse: true,
          maxSpeed: 100
        },
        speed: { min: 10, max: 20 },
        outModes: {
          default: "destroy",
          top: "none"
        },
        trail: {
          fillColor: "#000",
          enable: true,
          length: 10
        }
      }
    }
  });
  }

}
