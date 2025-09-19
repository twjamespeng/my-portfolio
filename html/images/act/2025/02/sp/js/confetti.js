


const end = Date.now() + 15 * 1000;

(function frame() {

  confetti("tsparticles", {
    particleCount: 20,
    origin: {
      x: 0.5,
      y: 0.5,
    },
    angle: 90,
    count: 50,
    position: {
      x: 50,
      y: 50,
    },
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 1000,
    colors: ["#ffffff", "#ff0000"],
    shapes: ["square", "circle"],
    scalar: 1,
    zIndex: 100,
    disableForReducedMotion: true,
  });
  
  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();