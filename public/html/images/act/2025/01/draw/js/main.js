// 以下測試區
// const BASE_URL = 'https://webt.vivatv.com.tw'
// const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJncm91cF9jb2RlIjoid2ViIiwiZW52IjoiZGV2IiwicmFuZG9tIjowLjI5OTcyNDI5MjE5NDc5NjcsImlzcyI6InZpdmEgZWMiLCJzdWJqZWN0IjoiYWNjZXNzIGNvbnRyb2wiLCJpYXQiOjE3MzIwNzQ3ODgsImV4cCI6MTc2MzYxMDc4OH0.DFSSKlOSC5gFi4hreda4-tbu2CxA_QT8l4ll43XMlDA'
// 以上測試區

// 以下正式區
// const BASE_URL = 'https://www.vivatv.com.tw'
// const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJncm91cF9jb2RlIjoid2ViIiwiZW52IjoicHJvZCIsInJhbmRvbSI6MC41NjA3MDAyNTU3MDUxMjEzLCJpc3MiOiJ2aXZhIGVjIiwic3ViamVjdCI6ImFjY2VzcyBjb250cm9sIiwiaWF0IjoxNzMyMDc2MjM1LCJleHAiOjE3NjM2MTIyMzV9.Rr18RvmtXkQZu76skYtLnnjysBVhikiiPBSBNIUtcXA'
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
const btnGo = document.querySelector('#btnGo')
const btnFinish = document.querySelector('#btnFinish')

btnPlay.style.display = 'block'
btnLogin.style.display = 'none'

const msgDone = document.querySelector('#msgDone')
const msgFull = document.querySelector('#msgFull')

const loginLoading = document.querySelector('#loginLoading')
const loginSuccess = document.querySelector('#loginSuccess')

const gameModal = new bootstrap.Modal(document.querySelector('#gameModal'))
const spinWheel = document.querySelector('#spinWheel')

// const prizeModalBox = document.querySelector('#prizeModal') // 彈窗本體
const bodyPrizeBox = document.querySelector('#bodyPrize') // 整個body
// default class name
// prizeModalBox.className = 'modal fade prize-100'

// const prizeModal = new bootstrap.Modal(prizeModalBox)
const prizeValue = document.querySelector('#prizeValue') // 錢
const prizeTitle = document.querySelector('#prizeTitle') // x幣
const notQualifiedModal = new bootstrap.Modal(document.querySelector('#notQualifiedModal'))

// 年齡視窗關閉後, 去開登入視窗
const ageRuleModalElement = document.querySelector('#ageRuleModal')
const loginModal = new bootstrap.Modal(document.getElementById('loginModal'))

ageRuleModalElement.addEventListener('hidden.bs.modal', (event) => {
  loginModal.show()
})

function preventDefault (e) {
  e.preventDefault()
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

function playGame () {
  gameModal.show()
}

async function draw () {
  try {
    // const { data: { code, data } } = await instance.post(`${BASE_URL}/api/AvyAction/SnakeYear`, {
    //   memberId,
    //   token
    // })

    code = 200;
    data = { avy_code: 10100 } // 測試用

    if (code === 200) {
      const { avy_code: avyCode } = data

      const avyCodeMap = {
        10100: { name: '100', title: '恭喜獲得：銀幣', value: '$100元' },
        10200: { name: '200', title: '恭喜獲得：銀幣', value: '$200元' },
        10300: { name: '300', title: '恭喜獲得：銀幣', value: '$300元' },
        '-1': { name: '0', title: '再接再厲', value: '' }
      }

      const prize = avyCodeMap[avyCode]
      bodyPrizeBox.className = `prize-${prize.name}`
      // prizeModalBox.className = `modal fade prize-${prize.name}`

      btnGo.style.display = 'none'

      spinWheel.classList.add('start')

      btnLogin.style.display = 'none'
      btnPlay.style.display = 'none'
      msgFull.style.display = 'none'
      msgDone.style.display = 'block'

      // 等11秒,讓輪盤轉完

      setTimeout(function () {
        // gameModal.hide()
        prizeTitle.innerHTML = prize.title
        prizeValue.innerHTML = prize.value
        btnFinish.style.display = 'block'
      }, 11000)

      // setTimeout(function() {
      //   prizeModal.show()
      // }, 13000)
    } else {
      // prizeModal.hide()
      gameModal.hide()
      APIErrorPrompt(code)
    }
  } catch (error) {
    console.log(error)
  }
}

function finishGame () {
  // prizeModal.hide()
  gameModal.hide()
  btnPlay.style.display = 'none'
  msgDone.style.display = 'block'
}

// 初始化
async function init () {
  const vid = getCookieByName('vd') || ''
  const vtoken = getCookieByName('vt') || ''
  if (vid && vtoken) {
    memberId = vid
    token = vtoken

    // 是否為臨時密碼狀態, false才能通過
    const isPasswordChange = confirmationUserTemporaryPassword()
    if (!isPasswordChange) {
      await checkedIsLogin()
    }

    // await autoDraw()
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
    // btnHome.style.display = 'block'
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
  } else if (code === 566) {
    // notQualifiedModal.show()
  } else {
    $('#alertContent').text(errorMessage)
    $('#alertModal').modal('show')
  }

  return false
}

// 使用者資料
async function checkedAvyActionInspect () {
  try {
    if (!memberId && !token) {
      loginModal.show()
      return
    }

    const { data: { code, data } } = await instance.post(`${BASE_URL}/api/AvyAction/SnakeYear/Inspect`, {
      memberId,
      token
    })

    const defaultDisplay = () => { // 預設按鈕複用
      btnLogin.style.display = 'none'
      btnPlay.style.display = 'none'
    }

    if (code === 200) {
      // notQualifiedModal.hide()

      if (!data.has_quota) {
        defaultDisplay()
        msgDone.style.display = 'none'
        msgFull.style.display = 'block'
        $('#alreadyFull').modal('toggle') // 200狀態下活動額滿彈窗
        return false
      }

      if (data.is_join) {
        defaultDisplay()
        msgDone.style.display = 'block'
        msgFull.style.display = 'none'
        $('#alreadyPlayed').modal('toggle') // 200狀態下活動已參加彈窗
        return false
      }

      btnLogin.style.display = 'block'
      return true
    } else {
      if (code === 565) { // 已參加過
        defaultDisplay()

        if (data && data?.avy_code === '-1') {
          msgDone.style.display = 'none'
          msgFull.style.display = 'block'
          $('#alreadyFull').modal('toggle') // 565&&-1狀態下活動額滿彈窗
          return false
        }

        msgDone.style.display = 'block'
        msgFull.style.display = 'none'
        return false
      } else if (code === 582) { // 活動名額滿
        msgDone.style.display = 'none'
        msgFull.style.display = 'block'
        $('#alreadyFull').modal('toggle') // 565&&-1狀態下活動額滿彈窗
        return false
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

let resizeTimeout

// 取得當前用戶系統資訊
function getOS () {
  return new Promise((resolve) => {
    let payload = {}

    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
      const userAgent = navigator.userAgent

      const isMobile = /Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
      const isPad = /iPad|iPod/i.test(userAgent)

      const systemList = [
        { system: 'Windows', key: 'Windows' },
        { system: 'macOS', key: 'Macintosh' },
        { system: 'Android', key: 'Android' },
        { system: 'iOS', key: 'iPhone' },
        { system: 'iOS', key: 'iPad' },
        { system: 'iOS', key: 'iPod' }
      ]
      const systemIndex = systemList.findIndex(item => userAgent.includes(item.key))
      const system = systemList[systemIndex].system

      payload = {
        ip: '172.18.8.76',
        system,
        device: isMobile || isPad ? 'mobile' : 'desktop'
      }

      resolve(payload)
    }, 200)
  })
}

// 登錄驗證和返回payload
async function loginValidateData () {
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

  const payload = await getOS()

  return {
    idNO: userID,
    password: encrypt(userPassword),
    ip: payload.ip,
    device: payload.device,
    system: payload.system
  }
}

/**
 * 記錄登錄Cookies
 * @param {Object} data
 */
function setLoginCookies (data) {
  if (data.tCustomerBean.memberId) { memberId = data.tCustomerBean.memberId }
  if (data.token) { token = data.token }
  const memberName = encodeURI(data.tCustomerBean.memberName)

  const saveUserList = [
    { key: 'vd', value: memberId },
    { key: 'vt', value: token },
    { key: 'vn', value: memberName },
    { key: 'vc', value: data.tCustomerBean.custNo },
    { key: 'vl', value: data.tCustomerBean.custGrade || '' },
    { key: 'vbean', value: encodeURI(JSON.stringify(data.tCustomerBean)) },
    { key: 'ct', value: encodeURI(JSON.stringify(data.cust_tag)) },
    { key: 'cpf', value: data.chgPwdForce }
  ]

  saveUserList.forEach((item) => {
    setCookie(item.key, item.value)
  })
}

/**
 * 確認用戶臨時密碼
 * @param {*} data
 * @returns
 */
function confirmationUserTemporaryPassword (data) {
  const changePasswordForce = Number(getCookieByName('cpf')) === 1 || (data && data?.chgPwdForce === '1')

  // 成立會導向修改密碼頁面
  if (changePasswordForce) {
    window.location.href = 'https://www.vivatv.com.tw/passwordChange'
    return true
  }

  return false
}

// 登入
async function loginDemo () {
  let loginData = {}
  await loginValidateData().then((res) => {
    loginData = res
  })

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
        // btnHome.style.display = 'block'
      }

      confirmationUserTemporaryPassword(res.data.data)
    } else {
      APIErrorPrompt(res.data.code)
    }
  } catch (errors) {
    // console.error(errors)
  }
}

// 回車鍵登錄
async function enterLogin (event) {
  if (event.keyCode === 13) {
    await loginDemo()
  }
}

function convertToUpperCase (inputElement) {
  inputElement.value = inputElement.value.toUpperCase()
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
    const cleanUserList = ['vd', 'vt', 'vn', 'vc', 'vl', 'vbean', 'ct', 'cpf']

    cleanUserList.forEach((key) => {
      setCookie(key, '')
    })

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
    btnLogin.style.display = 'none'

    setTimeout(() => {
      loginLoading.classList.remove('show')
      loginSuccess.classList.add('show')
      btnPlay.style.display = 'block'

      setTimeout(() => {
        loginSuccess.classList.remove('show')
      }, 1500)
    }, 1500)
  }
}

/****************
 * 以下為登錄驗證碼函式
**************** */
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
