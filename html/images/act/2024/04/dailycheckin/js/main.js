
const btnLogin = document.querySelector('#btnLogin');
const btnQuest = document.querySelector('#btnQuest');
const btnCheckin = document.querySelector('#btnCheckin');
const btnDone = document.querySelector('#btnDone');
const btnCheckinRecord = document.querySelector('#btnCheckinRecord');

const loginSuccess = document.querySelector('#loginSuccess');
const checkInSuccess = document.querySelector('#checkInSuccess');





function loginDemo() {

  document.body.classList.add('login-true');
  loginSuccess.classList.add('show');


  btnQuest.style.display = 'block';
  //btnCheckin.style.display = 'block';
  btnCheckinRecord.style.display = 'block';
  btnLogin.style.display = 'none';

  setTimeout(()=>{
    loginSuccess.classList.remove('show');
  }, 1500);
  
}

function checkinDemo() {

  checkInSuccess.classList.add('show');

  btnCheckin.style.display = 'none';
  btnDone.style.display = 'block';

  setTimeout(()=>{
    checkInSuccess.classList.remove('show');
  }, 3000);
}



//檢查localstorage中今天的簽到紀錄
function checkLocalStorage() {
  var signInDate = dayjs().format('YYYYMMDD');
  var result = localStorage.getItem(signInDate);
  if (result == 'OK') {
    btnLogin.style.display = 'none';
    btnQuest.style.display = 'none';
    btnCheckin.style.display = 'block';
    btnCheckinRecord.style.display = 'block';
  }
}

window.onload = function() {
  var q = getUrlParameter('q');
  if (q == 'done') {
    checkLocalStorage();
  }
}


function getUrlParameter(sParam) {
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



//年齡視窗關閉後, 去開登入視窗
const ageRuleModalElement = document.querySelector('#ageRuleModal');
const loginModalElement = document.querySelector('#loginModal');

ageRuleModalElement.addEventListener('hidden.bs.modal', event => {
  var loginModal = bootstrap.Modal.getInstance(loginModalElement);
  loginModal.show();
})

