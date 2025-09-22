//  以下固定不動

/***************************
 * 第一頁 login modal 登入按鈕
 *
 ****************************/
// 以下測試區
// const BASE_URL = 'https://webt.vivatv.com.tw'
// const AUTH_TOKEN = 'eyJhbGciOiJIUzM4NCJ9.eyJncm91cF9jb2RlIjoid2ViIiwiZW52IjoiZGV2IiwicmFuZG9tIjo3ODAzNDQ2OTM3Mjc0MTkxMDYxLCJpc3MiOiJ2aXZhIGVjIiwic3ViIjoiYWNjZXNzIGNvbnRyb2wiLCJpYXQiOjE2Njk3ODk3NzYsImV4cCI6MTcwNDAzODM5OX0.tClxcUvJ-UTuUk2EmLhr-kYByLjAJiRScgcXQ1EFo7c7S41Ch_RZ9ljkslqIWgpf'
// 以上測試區

// 以下正式區
// const BASE_URL = 'https://www.vivatv.com.tw'
// const AUTH_TOKEN = 'eyJhbGciOiJIUzM4NCJ9.eyJncm91cF9jb2RlIjoid2ViIiwiZW52IjoicHJvZCIsInJhbmRvbSI6LTUyMjA5NTA4MTgyODc0ODYwMDMsImlzcyI6InZpdmEgZWMiLCJzdWIiOiJhY2Nlc3MgY29udHJvbCIsImlhdCI6MTY2OTc4OTkzMCwiZXhwIjoxNzA0MDM4Mzk5fQ.VPEqOWbPA1iNaqGqecqJsS_Y_lzGzPl58TIfsYesAzOeMNwIB7Low6T3_AEqSNmv'
// 以上正式區

const contentWidth = '102'
const contentHeight = '41'
let identifyCode = ''
const fontSizeMax = 30
const fontSizeMin = 30
const colorMin = 50
const colorMax = 160
let memberId = ''
let token = ''

const KEY = `$59cdb9af-6C22-4571-Ab46-82603d6`
const IV = `ec-B909-0242ac1@`

const btnLogin = document.querySelector('#btnLogin')
const btnPlay = document.querySelector('#btnPlay')
const msgDone = document.querySelector('#msgDone')
const btnHome = document.querySelector('#btnHome')
const btnViVa = document.querySelector('#btnViVa')

btnPlay.style.display = 'block'
btnLogin.style.display = 'none'

const loginLoading = document.querySelector('#loginLoading')
const loginSuccess = document.querySelector('#loginSuccess')

const gameStage = document.querySelector('#gameStage')

const prizeModal = new bootstrap.Modal(document.querySelector('#prizeModal'))

// 年齡視窗關閉後, 去開登入視窗
const ageRuleModalElement = document.querySelector('#ageRuleModal')
const loginModal = new bootstrap.Modal(document.getElementById('loginModal'))

ageRuleModalElement.addEventListener('hidden.bs.modal', (event) => {
  loginModal.show()
})

function preventDefault (e) {
  e.preventDefault()
}

function disableScroll () {
  document.body.addEventListener('touchmove', preventDefault, { passive: false })
}
function enableScroll () {
  document.body.removeEventListener('touchmove', preventDefault)
}

function playGame () {
  gameStage.classList.add('show')
  document.body.classList.add('body-fixed')
}

function finishGame () {
  document.body.classList.remove('body-fixed')
  enableScroll()
  prizeModal.hide()
  gameStage.classList.remove('show')
  btnLogin.style.display = 'none'
  btnPlay.style.display = 'none'
  msgDone.style.display = 'block'
  //btnHome.style.display = 'block'
  btnViVa.style.display = 'block'
}

// 初始化
async function init () {
  const vid = getCookieByName('vd') || ''
  const vtoken = getCookieByName('vt') || ''
  if (vid && vtoken) {
    memberId = vid
    token = vtoken

    await checkedIsLogin()
  }

  $('#userIDInput').val('')
  $('#passwordInput').val('')
  $('#inputValidateCode').val('')
  // $('#userIDInput').val('A137888100')
  // $('#passwordInput').val('vivach59')
}

async function checkedIsLogin () {
  btnLogin.style.display = 'none'
  const isOk = await checkedAvyActionInspect()
  if (isOk) {
    btnLogin.style.display = 'none'
    btnPlay.style.display = 'block'
  } else {
    btnLogin.style.display = 'none'
    btnViVa.style.display = 'block'
  }
}

/**
 * API錯誤提示
 * @param {Number} code
 * @param {String} type
 */
function APIErrorPrompt (code) {
  const errorMessage = errorCode[code] || `錯誤代碼=${code}，系統異常，請聯絡客服`
  refreshCode()

  if (code === 575 || code === 533) {
    $('#logoutContent').text(errorMessage)
    $('#logoutModal').modal('show')
  } else {
    $('#otherContent').text(errorMessage)
    $('#otherModal').modal('show')
  }

  return false
}

// 取得活動銀幣卡
function getAvyCode (avyCode) {
  const scratchcardResult = document.querySelector('#scratchcardResult') // 卡片銀幣的DOM
  const scratchcard = document.querySelector('#scratchcard') // 提示卡

  if (!avyCode || avyCode === null) {
    scratchcard.classList.add('prize-300')
    return
  }

  const avyCodeMap = {
    10300: 300,
    10200: 200,
    10100: 100
  }

  scratchcardResult.classList.add(`prize-${avyCodeMap[Number(avyCode)]}`)

  scratchcard.classList.remove('prize-300')
  scratchcard.classList.add(`prize-${avyCodeMap[Number(avyCode)]}`)
}

// 使用者資料
async function checkedAvyActionInspect () {
  try {
    if (!memberId && !token) {
      loginModal.show()
      return
    }

    const { data: { code, data } } = await instance.post(`${BASE_URL}/api/AvyAction/Birthday/Inspect`, {
      memberId,
      token
    })

    if (data && data?.avy_code) {
      getAvyCode(data?.avy_code)
    }

    const defaultDisplay = () => { // 預設按鈕複用
      btnLogin.style.display = 'none'
      btnPlay.style.display = 'none'
      //btnHome.style.display = 'block'
      btnViVa.style.display = 'block'
    }

    if (code === 200) {
      if (!data.has_quota) {
        defaultDisplay()
        msgDone.style.display = 'none'
        $('#alreadyFull').modal('toggle') // 200狀態下活動額滿彈窗
        return false
      }

      if (data.is_join) {
        defaultDisplay()
        msgDone.style.display = 'block'
        $('#alreadyPlayed').modal('toggle') // 200狀態下活動已參加彈窗
        return false
      }

      btnLogin.style.display = 'block'
      return true
    } else {
      if (code === 565) { // 已參加過
        gameStage.classList.remove('show')
        defaultDisplay()

        if (data && data?.avy_code === '-1') {
          msgDone.style.display = 'none'
          $('#alreadyFull').modal('toggle') // 565&&-1狀態下活動額滿彈窗
          return false
        }

        msgDone.style.display = 'block'
      }
      return APIErrorPrompt(code)
    }
  } catch (error) {
    console.log(error)
  }
}

// 按確定後重登
function memberReLogin () {
  const vid = getCookieByName('vd') || ''
  const vtoken = getCookieByName('vt') || ''
  if (vid && vtoken) {
    // 如果有id，token, 先記錄下來 並跳過登入
    memberId = vid
    token = vtoken
    checkedAvyActionInspect()
  } else {
    $('#userIDInput').val('')
    $('#passwordInput').val('')
    $('#inputValidateCode').val('')
    loginModal.show()
  }
}

// 登錄驗證和返回payload
function loginValidateData () {
  const validateCode = $('#inputValidateCode').val().trim()
  const userID = $('#userIDInput').val().trim()
  const userPassword = $('#passwordInput').val().trim()

  if (!userID || !userPassword || !validateCode || (validateCode !== identifyCode)) {
    const message = !userID
      ? '請輸入帳號'
      : !userPassword
          ? '請輸入密碼'
          : (validateCode !== identifyCode) ? '驗證碼錯誤' : '請輸入驗證碼'

    $('#alertContent').text(message)
    $('#alertModal').modal('show')
    refreshCode()
    return
  }

  const loginData = {
    idNO: userID,
    password: encrypt(userPassword)
  }

  return loginData
}

/**
 * 記錄登錄Cookies
 * @param {Object} data
 */
function setLoginCookies (data) {
  if (data.tCustomerBean.memberId) { memberId = data.tCustomerBean.memberId }
  if (data.token) { token = data.token }
  const memberName = encodeURI(data.tCustomerBean.memberName)
  setCookie('vd', memberId)
  setCookie('vt', token)
  setCookie('vn', memberName)
  setCookie('vc', data.tCustomerBean.custNo)
  setCookie('vl', data.tCustomerBean.custGrade || '')
  setCookie('vbean', encodeURI(JSON.stringify(data.tCustomerBean)))
  setCookie('ct', encodeURI(JSON.stringify(data.cust_tag)))
}

// 登入
async function loginDemo () {
  const loginData = loginValidateData()

  try {
    const res = await instance.post(`${BASE_URL}/api/Login`, loginData)

    if (res.data.code === 200) {
      setLoginCookies(res.data.data)
      loginModal.hide()

      const isQualifications = await checkedAvyActionInspect()

      if (isQualifications) {
        loginSucc()
      } else {
        btnLogin.style.display = 'none'
        btnViVa.style.display = 'block'
      }
    } else {
      APIErrorPrompt(res.data.code)
    }
  } catch (errors) {
    // console.error(errors)
  }
}

// 未登錄
function notLoggedIn () {
  if (!memberId && !token) {
    loginModal.show()
    return true
  }

  return false
}

// 登出
async function logout () {
  const vid = getCookieByName('vd') || ''
  const vtoken = getCookieByName('vt') || ''
  const loginData = {
    memberId: vid,
    token: vtoken
  }
  const res = await instance.post(`${BASE_URL}/api/Logout`, loginData)
  if (res.data.code === 200) {
    setCookie('vd', '')
    setCookie('vt', '')
    setCookie('vn', '')
    window.location.assign(window.location.href)
  } else {
    clearAllCookies()
    notLoggedIn()
  }
}

// 登入成功
function loginSucc () {
  if (memberId && token) {
    loginLoading.classList.add('show')
    loginSuccess.classList.add('show')
    btnLogin.style.display = 'none'
    setTimeout(() => {
      loginLoading.classList.remove('show')
      loginSuccess.classList.remove('show')
      btnPlay.style.display = 'block'
    }, 2000)
  }
}

function makeCode (data, len) {
  for (let i = 0; i < len; i++) {
    identifyCode += data[this.randomNum(0, data.length - 1)]
  }
}

function randomNum (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}
// 生成一個隨機的顏色
function randomColor (min, max) {
  const r = randomNum(min, max)
  const g = randomNum(min, max)
  const b = randomNum(min, max)
  return 'rgb(' + r + ',' + g + ',' + b + ')'
}

function transparent () {
  return 'rgb(255,255,255)'
}
function refreshCode () { //
  identifyCode = ''
  drawPic()
  // this.makeCode('123456789', 4)
}

function drawPic () {
  // console.log('drawPic identify height', $('#identify').height())
  makeCode('123456789', 4)
  const canvas = document.getElementById('s-canvas')
  const ctx = canvas.getContext('2d')
  ctx.textBaseline = 'bottom'
  // 亂數繪制背景
  ctx.fillStyle = randomColor(
    180,
    240
  )
  // 自訂背景顏色
  ctx.fillRect(0, 0, contentWidth, contentHeight)
  // 繪制文字
  for (let i = 0; i < identifyCode.length; i++) {
    drawText(ctx, identifyCode[i], i)
  }
  // 亂數繪制背景線條
  // this.drawLine(ctx)

  // 亂數繪制背景彩色點
  drawDot(ctx)
}

function drawText (ctx, txt, i) {
  ctx.fillStyle = randomColor(colorMin, colorMax)
  ctx.font =
    randomNum(fontSizeMin, fontSizeMax) + 'px SimHei'
  const x = (i + 1) * (contentWidth / (identifyCode.length + 1))
  const y = randomNum(fontSizeMax, contentHeight - 5)
  const deg = randomNum(-10, 10)
  // 修改坐標原點和旋轉角度
  ctx.translate(x, y)
  ctx.rotate((deg * Math.PI) / 180)
  ctx.fillText(txt, 0, 0)
  // 恢復坐標原點和旋轉角度
  ctx.rotate((-deg * Math.PI) / 180)
  ctx.translate(-x, -y)
}

function drawDot (ctx) {
  // 繪制幹擾點
  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = randomColor(0, 255)
    ctx.beginPath()
    ctx.arc(
      randomNum(0, contentWidth),
      randomNum(0, contentHeight),
      1,
      0,
      2 * Math.PI
    )
    ctx.fill()
  }
}

function parseCookie () {
  const cookieObj = {}
  const cookieAry = document.cookie.split(';')
  let cookie

  for (let i = 0, l = cookieAry.length; i < l; ++i) {
    // cookie = jQuery.trim(cookieAry[i])
    cookie = cookieAry[i].trim()
    cookie = cookie.split('=')
    cookieObj[cookie[0]] = cookie[1]
  }

  return cookieObj
}

function getCookieByName (name) {
  let value = parseCookie()[name]
  if (value) {
    value = decodeURIComponent(value)
  }

  return value
}

function setCookie (name, value, days) {
  let expires = ''
  if (days) {
    const date = new Date()
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/'
}

function clearAllCookies () {
  const cookies = document.cookie.split(';')

  cookies.forEach((cookie) => {
    const [name] = cookie.split('=')
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`
  })
}

function encrypt (data) {
  const encrypted = CryptoJS.AES.encrypt(data, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  // 返回的是base64格式的密文
  return encrypted.ciphertext.toString().toUpperCase()
}
