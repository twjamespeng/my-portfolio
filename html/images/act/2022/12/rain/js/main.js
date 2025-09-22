if (window.location.hash == "#played") {
  document.querySelector('#btnLogin').style.display = 'none';
  document.querySelector('#btnStartWrapper').style.display = 'none';

  const alreadyPlayed = new bootstrap.Modal(document.getElementById('alreadyPlayed'), {
    backdrop: 'static',
    keyboard: false
  });
  alreadyPlayed.show();
}

if (window.location.hash == "#full") {
  document.querySelector('#btnLogin').style.display = 'none';
  document.querySelector('#btnStartWrapper').style.display = 'none';
  const alreadyFull = new bootstrap.Modal(document.getElementById('alreadyFull'), {
    backdrop: 'static',
    keyboard: false
  });
  alreadyFull.show();
}

if (window.location.hash == "#not") {
  document.querySelector('#btnLogin').style.display = 'none';
  document.querySelector('#btnStartWrapper').style.display = 'none';
  const notQualified = new bootstrap.Modal(document.getElementById('notQualified'), {
    backdrop: 'static',
    keyboard: false
  });
  notQualified.show();
}



var size = checkMobile() ? 0.33 : 0.5;
console.log('size: '+ size);



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
// window.addEventListener('resize', debounce(updateCanvas, 500));


const modalSuccess = new bootstrap.Modal(document.querySelector('#modalSuccess'), {
  backdrop: 'static',
  keyboard: false
});





window.onload = function() {
  
  setTimeout(()=>{  
    document.querySelector('.loading').classList.add('fade');
    document.body.classList.add('loaded');
  }, 800);
}




//demo其它銀幣的情況
if (window.location.hash == '#200') {
  document.querySelector('#prizeImage').src = 'images/act/2022/12/rain/images/prize-200.png';
} else if (window.location.hash == '#800')  {
  document.querySelector('#prizeImage').src = 'images/act/2022/12/rain/images/prize-800.png';
} else if (window.location.hash == '#1000') {
  document.querySelector('#prizeImage').src = 'images/act/2022/12/rain/images/prize-1000.png';
} else {
  document.querySelector('#prizeImage').src = 'images/act/2022/12/rain/images/prize-100.png';
}

function loginDemo() {
  
  loginSuccess.classList.add('show');

  document.querySelector('#btnStartWrapper').classList.add('animate__zoomInDown');
  document.querySelector('#btnStart').style.display = 'block';
  document.querySelector('#btnLogin').style.display = 'none';

  setTimeout(()=>{
    loginSuccess.classList.remove('show');
  }, 2000);
  
}



const images = document.querySelectorAll('img');
[].forEach.call(images, (image)=>{
  image.setAttribute('draggable', 'false');
});



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






const assets = document.querySelectorAll('.spinningasset');
const area = document.querySelector('.area');
const satin = document.querySelector('.satin');
const backdropFilterOverlay = document.querySelector('.backdrop-filter-overlay');
const boxProps = document.querySelector('.box-props');
const rabbitProps = document.querySelector('.rabbit-props');
const cloudProps = document.querySelector('.cloud-props');
const coinBag = document.querySelector('.coinbag');

function pauseAllAssets() {
  [].forEach.call(assets, (asset)=>{
    asset.classList.add('paused');

  });
}

// document.querySelector('#btnTest').addEventListener('click', ()=> {
//   area.classList.remove('paused');
//   area.classList.add('show');
//   area.classList.add('yellow');
//   satin.classList.add('fade');
// });


function startGame() {
  area.classList.remove('paused');
  area.classList.add('show');
  area.classList.add('yellow');
  satin.classList.add('fade');
  boxProps.classList.add('fade');
  rabbitProps.classList.add('fade');
  cloudProps.classList.add('fade');
  coinBag.classList.add('fade');
}

document.querySelector('.coinbag-body').addEventListener('touchstart', e => {
  e.preventDefault;
  console.log('touchstart');
  document.querySelector('.coinbag-body img').classList.add('animate__animated', 'animate__rubberBand');
  document.querySelector('.coinbag-shadow img').classList.add('animate__animated', 'animate__rubberBand');
  setTimeout(()=>{
    document.querySelector('.coinbag-body img').classList.remove('animate__animated', 'animate__rubberBand');
    document.querySelector('.coinbag-shadow img').classList.remove('animate__animated', 'animate__rubberBand');
  }, 1500);
});
document.querySelector('.coinbag-body').addEventListener('click', e => {
  e.preventDefault;
  console.log('click');
  document.querySelector('.coinbag-body img').classList.add('animate__animated', 'animate__rubberBand');
  document.querySelector('.coinbag-shadow img').classList.add('animate__animated', 'animate__rubberBand');
  setTimeout(()=>{
    document.querySelector('.coinbag-body img').classList.remove('animate__animated', 'animate__rubberBand');
    document.querySelector('.coinbag-shadow img').classList.remove('animate__animated', 'animate__rubberBand');
  }, 1500);
});



if (assets) {
  [].forEach.call(assets, (asset)=>{

    asset.addEventListener('touchstart', e => {
      e.preventDefault();
      console.log('touchstart');
      area.classList.add('paused');
      backdropFilterOverlay.classList.add('show');
      modalSuccess.show();
    });

    asset.addEventListener('click', e => {
      e.preventDefault();
      console.log('click');
      area.classList.add('paused');
      backdropFilterOverlay.classList.add('show');
      modalSuccess.show();
    });

  });
}
