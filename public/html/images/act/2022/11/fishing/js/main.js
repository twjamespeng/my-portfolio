if (window.location.hash == "#played") {
  const alreadyPlayed = new bootstrap.Modal(document.getElementById('alreadyPlayed'));
  alreadyPlayed.show();
}

if (window.location.hash == "#full") {
  const alreadyFull = new bootstrap.Modal(document.getElementById('alreadyFull'));
  alreadyFull.show();
}


var size = checkMobile() ? 0.33 : 0.5;
console.log('size: '+ size);
var swimSpeed = 1;
var swimSpeedMax = 20;
var canvasFishWidth = 600 * size;
var canvasFishHeight = 800 * size;
var successRate = 0;
var successRateMax = 50;


function checkMobile() {
  return /iPhone|iPod|Android/i.test(navigator.userAgent);
}


// Debounce
function debounce(func, time){
    var time = time || 100; // 100 by default if no param
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func, time, event);
    };
}
window.addEventListener('resize', debounce(updateCanvas, 500));

function updateCanvas() {
  size = checkMobile() ? 0.33 : 0.5;
  console.log('size changed to: ' + size);

  canvas.width = canvasFishWidth;
canvas.height = canvasFishHeight;

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

canvas3.width = window.innerWidth;
canvas3.height = window.innerHeight;
}

  
var offsetX = (canvasFishWidth / 2) - (226 * size);
var offsetY = (canvasFishHeight / 2) - (360 * size);

console.log('offsetX, offsetY: '+ offsetX + ', ' + offsetY);

class Point {
  
  constructor(x, y) {
    
    this.x = x * size + offsetX;
    this.y = y * size + offsetY;
    
    this.minX = x - 0;
    this.maxX = x + 0;
    this.minY = y - 0;
    this.maxY = y + 0;
  }
}

class Polygon {
  
  constructor(fillStyle, ...points) {
    this.points = points;
    this.fillStyle = fillStyle;

  }
}

var canvas = document.querySelector("#canvasFish");
var ctx = canvas.getContext("2d");

var canvas2 = document.querySelector('#canvasWaterFlow');
var ctx2 = canvas2.getContext("2d");

var canvas3 = document.querySelector('#canvasLine');
var ctx3 = canvas3.getContext("2d");



canvas.width = canvasFishWidth;
canvas.height = canvasFishHeight;

canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

canvas3.width = window.innerWidth;
canvas3.height = window.innerHeight;





document.addEventListener('contextmenu', (e)=> {
  e.preventDefault();
  return false;
});

var point1 = new Point(227, 0);
var point2 = new Point(145, 47);
var point3 = new Point(132, 104);
var point4 = new Point(227, 172);
var point5 = new Point(322, 104);
var point6 = new Point(309, 47);
var point7 = new Point(0, 316);
var point8 = new Point(132, 261);
var point9 = new Point(322, 261);
var point10 = new Point(454, 316);
var point11 = new Point(227, 385);
var point12 = new Point(199, 496);
var point13 = new Point(255, 496);
var point14 = new Point(110, 689);
var point15 = new Point(177, 758);
var point16 = new Point(227, 720);
var point17 = new Point(277, 758);
var point18 = new Point(344, 689);


var poly1 = new Polygon("#ffad01", point1, point2, point3);
// var poly1 = new Polygon("rgba(255, 173, 1, 0.5)", point1, point2, point3);
var poly2 = new Polygon("#ffde00", point1, point3, point4);
var poly3 = new Polygon("#f7ff00", point1, point4, point5);
var poly4 = new Polygon("#ff8b4d", point1, point5, point6);
var poly5 = new Polygon('#ff5124', point3, point7, point8);
var poly6 = new Polygon('#fecc01', point3, point4, point8);
var poly7 = new Polygon('#ffe749', point4, point5, point9);
var poly8 = new Polygon('#ff6d46', point5, point9, point10);
var poly9 = new Polygon('#ffd800', point4, point8, point11);
var poly10 = new Polygon('#fff700', point4, point9, point11);
var poly11 = new Polygon('#fecc01', point8, point11, point12);
var poly12 = new Polygon('#ffe749', point9, point11, point13);
var poly13 = new Polygon('#ffad01', point11, point12, point13); 
var poly14 = new Polygon('#ff265e', point12, point13, point16);
var poly15 = new Polygon('#ff0024', point12, point14, point15);
var poly16 = new Polygon('#ff5871', point12, point15, point16);
var poly17 = new Polygon('#ff2485', point13, point16, point17);
var poly18 = new Polygon('#fe15d0', point13, point17, point18);



var points = [point1, point2, point3, point4, point5, point6, point7, point8, point9, point10, point11, point12, point13, point14, point15, point16, point17, point18];
var polys  = [poly1, poly2, poly3, poly4, poly5, poly6, poly7, poly8, poly9, poly10, poly11, poly12, poly13, poly14, poly15, poly16, poly17, poly18];

var point1X = [point10, point11, point15, point17];
var point2X = [point12, point13];
var point4X = [point16];


var pointXR = [point7, point4, point14, point18];
var point2XR = [];

var pointY  = [point7, point12];
var pointYR = [point10, point13];



point1X.forEach(movePoint1X);
point2X.forEach(movePoint2X);
point4X.forEach(movePoint4X);

pointXR.forEach(movePointXR);
point2XR.forEach(movePoint2XR);

pointY.forEach(movePointY);
pointYR.forEach(movePointYR);

gsap.ticker.add(render);


function movePoint1X(point) {
  var tl = gsap.timeline();
  
  tl.to(point, 2, {
    x: point.x + 15,
    ease: 'none'
  });
  tl.to(point, 4, {
    x: point.x - 15,
    ease: 'none'
  });
  tl.to(point, 2, {
    x: point.x,
    ease: 'none',
    onComplete: movePoint1X,
    onCompleteParams: [point]
  });
  tl.timeScale(2);  
}

function movePoint2X(point) {
  var tl = gsap.timeline();
  
  tl.to(point, 2, {
    x: point.x + 30,
    ease: 'none'
  });
  tl.to(point, 4, {
    x: point.x - 30,
    ease: 'none'
  });
  tl.to(point, 2, {
    x: point.x,
    ease: 'none',
    onComplete: movePoint2X,
    onCompleteParams: [point]
  });
  tl.timeScale(4);  
}

function movePoint4X(point) {
  var tl = gsap.timeline();
  
  tl.to(point, 2, {
    x: point.x + 60,
    ease: 'none'
  });
  tl.to(point, 4, {
    x: point.x - 60,
    ease: 'none'
  });
  tl.to(point, 2, {
    x: point.x,
    ease: 'none',
    onComplete: movePoint4X,
    onCompleteParams: [point]
  });
  tl.timeScale(8);  
}

function movePointXR(point) {
  var tl = gsap.timeline();
  tl.to(point, 2, {
    x: point.x - 15,
    ease: 'none'
  });
  tl.to(point, 4, {
    x: point.x + 15,
    ease: 'none'
  });
  tl.to(point, 2, {
    x: point.x,
    ease: 'none',
    onComplete: movePointXR,
    onCompleteParams: [point]
  });
  tl.timeScale(5);  
}
function movePoint2XR(point) {
  var tl = gsap.timeline();
  tl.to(point, 2, {
    x: point.x - 60,
    ease: 'none'
  });
  tl.to(point, 4, {
    x: point.x + 60,
    ease: 'none'
  });
  tl.to(point, 2, {
    x: point.x,
    ease: 'none',
    onComplete: movePoint2XR,
    onCompleteParams: [point]
  });
  tl.timeScale(5);  
}

function movePointY(point) {
  var tl = gsap.timeline();
  tl.to(point, 2, {
    y: point.y + 10,
    ease: 'none'
  });
  tl.to(point, 4, {
    y: point.y - 10,
    ease: 'none'
  });
  tl.to(point, 2, {
    y: point.y,
    ease: 'none',
    onComplete: movePointY,
    onCompleteParams: [point]
  });
  tl.timeScale(5);  
}

function movePointYR(point) {
  var tl = gsap.timeline();
  tl.to(point, 2, {
    y: point.y - 10,
    ease: 'none'
  });
  tl.to(point, 4, {
    y: point.y + 10,
    ease: 'none'
  });
  tl.to(point, 2, {
    y: point.y,
    ease: 'none',
    onComplete: movePointYR,
    onCompleteParams: [point]
  });
  tl.timeScale(5);  
}

function movePoint(point) {
  
  var tl = gsap.to(point, random(2.5, 3.5), {
    x: random(point.minX, point.maxX),
    y: random(point.minY, point.maxY),
    ease: Power1.easeInOut,
    // ease: 'none',
    onComplete: movePoint,
    onCompleteParams: [point]
  });

  // control speed
  tl.timeScale(5);
}





// waterflow particles
class Particle {
  constructor(x, y, r, c) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
  }
}

var particleCount = checkMobile() ? 50 : 100;
var particles = [];
console.log('particleCount: ' + particleCount);

for (var k = 0; k < particleCount; k++) {
  var xpos = Math.round(Math.random() * canvas2.width);
  var ypos = Math.round(Math.random() * canvas2.height) - 200;
  var radius = random(1, 3);
  // var color = 'rgba(255, 255, 255, '+ Math.random() +')';
  var color = 'rgba(20, 255, 247, '+ Math.random() +')';

  var particle = new Particle(xpos, ypos, radius, color);
  particles.push(particle);
}

particles.forEach(moveParticle);

function moveParticle(particle) {
  var tl = gsap.to(particle, random(2, 8), {
    y: canvas2.height + 10,
    ease: 'none',
    repeat: -1,
    onComplete: moveParticle,
    onCompleteParams: [particle]
  });
}



function render() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  
  for (var i = 0; i < polys.length; i++) {

    var poly = polys[i];
    var pts  = poly.points;

    ctx.fillStyle = poly.fillStyle;
    // fix polygon gap by adding stroke
    ctx.strokeStyle = poly.fillStyle;
    ctx.lineWidth = 1;

    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    
    for (var j = 1; j < pts.length; j++) {
      // ctx.shadowColor = '#14fff7';
      // ctx.shadowBlur = 5;
      ctx.lineTo(pts[j].x, pts[j].y);
      // ctx.arc(pts[j].x, pts[j].y, 5, 0, 2 * Math.PI, false);
    }
    ctx.closePath();
    ctx.fill();
    // fix gap
    ctx.stroke();
  }

  // draw particles
  for (var m = 0; m < particles.length; m++) {

    var p = particles[m];

    if (document.querySelector('body').classList.contains('hooked')) {
      // ctx2.fillStyle = '#ffd800';
      ctx2.fillStyle = p.c;
      // ctx2.shadowColor = '#14fff7';
      // ctx2.shadowBlur = 5;
    } else {
      ctx2.fillStyle = p.c;
      // ctx2.shadowColor = '#14fff7';
      // ctx2.shadowBlur = 5;
    }

    
    ctx2.beginPath();
    ctx2.arc(p.x, p.y, p.r, 0, 2 * Math.PI, false);
    ctx2.closePath();
    ctx2.fill();  
    
  }

  // fishing line
  ctx3.strokeStyle = '#ffffff';

  ctx3.beginPath();
  ctx3.lineWidth = 1;
  ctx3.moveTo(canvas2.width * 0.5, 0);
  ctx3.lineTo(canvas2.width * 0.5, canvas2.height * 0.4 - 20);
  ctx3.stroke();

  ctx3.beginPath();
  ctx3.lineWidth = 5;
  ctx3.lineCap = 'round';
  ctx3.lineJoin = 'round';
  ctx3.moveTo(canvas2.width * 0.5, canvas2.height * 0.4 - 20);
  ctx3.lineTo(canvas2.width * 0.5, canvas2.height * 0.4);
  ctx3.lineTo(canvas2.width * 0.5 - 10, canvas2.height * 0.4 + 10);
  ctx3.lineTo(canvas2.width * 0.5 - 20, canvas2.height * 0.4 );
  ctx3.lineTo(canvas2.width * 0.5 - 20, canvas2.height * 0.4 - 10);
  ctx3.stroke();

}

function random(min, max) {
  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.random() * (max - min);
}


var canvasFish = document.querySelector('#canvasFish');
var canvasLine = document.querySelector('#canvasLine');
var btnGroup = document.querySelector('#btnGroup');
var progressWrapper = document.querySelector('#progressWrapper');
var waitingMsg = document.querySelector('#waitingMsg');
var body = document.querySelector('body');
var lineHPBar = document.querySelector('#lineHPBar');
var lineHPValue = document.querySelector('#lineHPValue');
var clickMsg = document.querySelector('#clickMsg');
var progressBar = document.querySelector('#progressBar');
var percent = document.querySelector('#percent');
var tooStrongMsg = document.querySelector('#tooStrongMsg');
var tooWeakMsg = document.querySelector('#tooWeakMsg');
var btnTryAgain = document.querySelector('#btnTryAgain');
var tapNow = document.querySelector('#tapNow');
var loginSuccess = document.querySelector('#loginSuccess');
var tipMsg = document.querySelector('#tipMsg');
var strongWarningMsg = document.querySelector('#strongWarningMsg');
var weakWarningMsg = document.querySelector('#weakWarningMsg');


//accelerate
var canvasAll = document.querySelectorAll('canvas');
[].forEach.call(canvasAll, (el)=>{
  el.addEventListener('click', ()=> {
    if ( document.querySelector('body').classList.contains('hooked') ) {

      if (successRate < successRateMax) {

        swimSpeed = (swimSpeed < swimSpeedMax) ? swimSpeed + 1 : swimSpeed;
        successRate = successRate + 1;
        lineHP = lineHP + random(5, 10);
        document.querySelector('#progressBar').style.width = successRate * 2 + '%';        

      } else {

        catchedHandler();

      }
    
      gsap.globalTimeline.timeScale(swimSpeed);
      document.querySelector('#swimSpeed').innerText = swimSpeed;
      document.querySelector('#percent').innerText = successRate * 2;
      
      console.log('swimSpeed: ' + swimSpeed);
      console.log('successRate: ' + successRate);
    }
  });
});

function catchedHandler() {
  swimSpeed = swimSpeedMax;
  successRate = successRateMax;

  tipMsg.classList.remove('show');
  strongWarningMsg.classList.remove('show');
  weakWarningMsg.classList.remove('show');

  clearInterval(escapeInterval);
  
  document.querySelector('#progressBar').style.width = successRate * 2 + '%';
  document.querySelector('body').classList.add('catched');
  document.querySelector('#clickMsg').classList.remove('show');

  //顯示釣魚成功modal
  setTimeout(()=>{
    
    var modalSuccess = new bootstrap.Modal(document.querySelector('#modalSuccess'), {
      backdrop: 'static',
      keyboard: false
    });

    modalSuccess.show();

    progressWrapper.classList.remove('show');
    
  }, 500);
}

function startFishing() {

  canvasFish.classList.remove('standby');
  canvasLine.classList.add('cast');
  btnGroup.style.display = 'none';
  progressWrapper.classList.add('show');
  waitingMsg.classList.add('show');
  body.classList.add('cast');

  lineHPBar.style.width = Math.round(lineHP) + '%';
  lineHPValue.innerText = Math.round(lineHP);

  setTimeout(()=> {

    startEscape();

    body.classList.add('hooked');
    tapNow.classList.add('show');

    setTimeout(()=> {
      clickMsg.classList.remove('show');
    },1000);
    setTimeout(()=>{
      tapNow.classList.remove('show');
    },5000);


    waitingMsg.classList.remove('show');
    clickMsg.classList.add('show');
    
    swimSpeed = 4;
    successRate = 0;
    
    gsap.globalTimeline.timeScale(swimSpeed);
    progressBar.style.width = successRate * 2 + '%';
    percent.innerText = successRate * 2;


  }, random(5000, 8000));
  
}

var lineHP = 0;
var escapeInterval;

function startEscape() {
  
  lineHP = 60;

  escapeInterval = setInterval(()=>{
    
    lineHP = lineHP > 0 ? lineHP - random(5, 10) : lineHP;

    if (lineHP < 20) {
      tipMsg.classList.remove('show');
      strongWarningMsg.classList.remove('show');
      weakWarningMsg.classList.add('show');
    } else if (lineHP > 80) {
      tipMsg.classList.remove('show');
      strongWarningMsg.classList.add('show');
      weakWarningMsg.classList.remove('show');
    } else {
      tipMsg.classList.add('show');
      strongWarningMsg.classList.remove('show');
      weakWarningMsg.classList.remove('show');
    }


    if (lineHP <= 0) {

      clearInterval(escapeInterval);
      swimSpeed = 0;
      successRate = 0;
      body.classList.remove('hooked');
      body.classList.add('escaped');
      clickMsg.classList.remove('show');
      tapNow.classList.remove('show');
      tooWeakMsg.classList.add('show');
      setTimeout(()=>{
        btnTryAgain.classList.add('d-block');  
      }, 1000);
      

      tipMsg.classList.remove('show');
      strongWarningMsg.classList.remove('show');
      weakWarningMsg.classList.remove('show');

      lineHP = 0;

    } else if (lineHP >= 100) {

      clearInterval(escapeInterval);
      swimSpeed = 0;
      successRate = 0;
      body.classList.remove('hooked');
      body.classList.add('escaped');
      clickMsg.classList.remove('show');
      tapNow.classList.remove('show');
      tooStrongMsg.classList.add('show');

      setTimeout(()=>{
        btnTryAgain.classList.add('d-block');  
      }, 1000);

      tipMsg.classList.remove('show');
      strongWarningMsg.classList.remove('show');
      weakWarningMsg.classList.remove('show');

      lineHP = 100;

    } else {

    }

    if (successRate >= successRateMax) {
      catchedHandler();
    }






    lineHPBar.style.width = Math.round(lineHP) + '%';
    lineHPValue.innerText = Math.round(lineHP);
    console.log('lineHP: '+ Math.round(lineHP));
  
  }, 500);

}

function tryAgain() {

  swimSpeed = 1;
  successRate = 0;

  lineHP = 0;
  lineHPBar.style.width = Math.round(lineHP) + '%';
  lineHPValue.innerText = Math.round(lineHP);

  gsap.globalTimeline.timeScale(swimSpeed);
  progressBar.style.width = successRate * 2 + '%';
  percent.innerText = successRate * 2;
  btnTryAgain.classList.remove('d-block');

  waitingMsg.classList.add('show');
  
  tooWeakMsg.classList.remove('show');
  tooStrongMsg.classList.remove('show');

  setTimeout(()=> {
    
    body.classList.remove('escaped');
    startFishing();

  }, 500);

}


//demo銀幣100的情況
if (window.location.hash == '#100') {
  document.querySelector('#prizeImage').src = 'images/act/2022/11/fishing/images/prize-100.png';
}

function loginDemo() {
  
  loginSuccess.classList.add('show');

  document.querySelector('#btnStartWrapper').classList.add('animate__rotateIn');
  document.querySelector('#btnStart').style.display = 'block';
  document.querySelector('#btnLogin').style.display = 'none';

  setTimeout(()=>{
    loginSuccess.classList.remove('show');
  }, 2000);
  
}






//Custom cursor to follow cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+(e.pageY-15)+"px; left: "+(e.pageX-20)+"px;")
})

//Add on click pulse effect
function clickEffect(e){
  var effect = document.createElement("div");
  effect.className="cursoreffect";
  effect.setAttribute("style", "top: "+(e.pageY-16)+"px; left: "+(e.pageX-21)+"px;")
  document.body.appendChild(effect);
  effect.addEventListener('animationend',function(){effect.parentElement.removeChild(effect);}.bind(this));
}
document.addEventListener('click',clickEffect);







