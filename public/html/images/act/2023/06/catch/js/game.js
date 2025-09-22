const h = window.innerHeight
const w = window.innerWidth
const container = document.getElementById('gameStage')
const objects = 20
let counterNumber = 0
const counter = document.getElementById('counter')

const prizeValue = document.querySelector('#prizeValue') // 銀幣的DOM

// generate object divs
for (let i = 0; i < objects; i++) {
  const objectDiv = document.createElement('div')
  const objectDivChild = document.createElement('div')
  objectDiv.appendChild(objectDivChild)
  TweenMax.set(objectDiv, { attr: { class: 'object' }, x: R(50, w - 150), y: R(-150, -100) })
  container.appendChild(objectDiv)
}

// falling objects animations
function startObjectAnim () {
  for (let i = 0; i < objects; i++) {
    const objectDiv = document.getElementsByClassName('object')[i]
    fallingObject(objectDiv, i)
  }
}

function fallingObject (element, delay) {
  const objectTL = new TimelineMax()
  objectTL.set(element, { autoAlpha: 1 }).to(element, R(3, 6), { y: h + 50, ease: Linear.easeNone, onUpdate: checkHit, onUpdateParams: [element], repeat: -1, delay: delay * 1.5 })
}
// randomize function
function R (min, max) { return min + Math.random() * (max - min) }

// check for collision
function checkHit (element) {
  const selectObject = element
  if (Draggable.hitTest(basketInner, selectObject, '80%')) {
    basketInner.classList.add('animate__rubberBand')
    setTimeout(() => {
      basketInner.classList.remove('animate__rubberBand')
    }, 1000)

    TweenMax.set(selectObject, { autoAlpha: 0 })
    TweenMax.killTweensOf(selectObject)
    // if (parseInt(counter.textContent) < objects ) {
    // 	counter.textContent = parseInt(counter.textContent) + 1;
    // 	checkHowManyCaught();
    // }

    if (counterNumber < objects) {
      counterNumber++
      counter.textContent = counterNumber * 5
      checkHowManyCaught()
      if (counterNumber >= 16) {
        basketInner.classList.add('zongzi-80')
      } else if (counterNumber >= 8) {
        basketInner.classList.add('zongzi-40')
      } else {
        // do nothing
      }
      // console.log('counterNumber:' + counterNumber)
    }
  }
}
// function if you want to run some animation after game finishes
async function checkHowManyCaught () {
  if (counterNumber === objects) {
    await getAvyAction()
    setTimeout(() => {
      prizeModal.show()
    }, 500)
  }
}

// stop objects animation and reset to starting positions
function killAllObjects () {
  for (let i = 0; i < 10; i++) {
    const killedObjects = document.getElementsByClassName('object')[i]
    TweenMax.set(killedObjects, { autoAlpha: 0 })
    TweenMax.set(killedObjects, { x: R(50, w), y: R(-150, -100) })
    TweenMax.killTweensOf(killedObjects)
  }
}

// Move basket on mouse move
const basket = document.getElementById('basket')
var basketInner = document.getElementById('basketInner')
let enabled = false
const max = w - basket.offsetWidth / 2

function moveBasket (e) {
  let x = e.clientX

  if (x > max) {
    x = max
  }
  TweenMax.set(basket, { xPercent: -50 })
  TweenMax.to(basket, 0.5, { x, ease: Power1.easenone })
}
function moveBasketBack () {
  container.removeEventListener('mousemove', moveBasket)
  enabled = false
}
function enableMovement () {
  if (enabled) { return }
  enabled = true
  container.addEventListener('mousemove', moveBasket)
}

function moveBasketMobile (e) {
  let x = e.changedTouches[0].clientX

  if (x > max) {
    x = max
  }
  TweenMax.set(basket, { xPercent: -50 })
  TweenMax.to(basket, 0.5, { x, ease: Power1.easenone })
}
function moveBasketBackMobile () {
  container.removeEventListener('touchmove', moveBasketMobile)
  enabled = false
}
function enableMovementMobile () {
  if (enabled) { return }
  enabled = true
  container.addEventListener('touchmove', moveBasketMobile)
}

// 在vue裡 window.load 會失效, 改為 window.addEventListener
window.addEventListener('load', () => {
  container.addEventListener('mouseenter', enableMovement)
  container.addEventListener('mouseleave', moveBasketBack)

  container.addEventListener('touchstart', enableMovementMobile)
  container.addEventListener('touchend', moveBasketBackMobile)
})

async function getAvyAction () {
  try {
    const { data: { code, data } } = await instance.post(`${BASE_URL}/api/AvyAction/Zongzi`, {
      memberId,
      token
    })

    if (code === 200) {
      const { avy_code: avyCode } = data

      const avyCodeMap = {
        10500: 500,
        10200: 200,
        10100: 100
      }

      prizeValue.innerHTML = `$${avyCodeMap[avyCode]}元`
    } else {
      APIErrorPrompt(code)
    }
  } catch (error) {
    console.log(error)
  }
}
