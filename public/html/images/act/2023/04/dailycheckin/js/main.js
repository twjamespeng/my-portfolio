
const btnLogin = document.querySelector('#btnLogin');
const btnCheckin = document.querySelector('#btnCheckin');
const btnDone = document.querySelector('#btnDone');
const btnCheckinRecord = document.querySelector('#btnCheckinRecord');

const loginSuccess = document.querySelector('#loginSuccess');
const checkInSuccess = document.querySelector('#checkInSuccess');





function loginDemo() {

  document.body.classList.add('login-true');
  loginSuccess.classList.add('show');


  
  btnCheckin.style.display = 'block';
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








//年齡視窗關閉後, 去開登入視窗
const ageRuleModalElement = document.querySelector('#ageRuleModal');
const loginModalElement = document.querySelector('#loginModal');

ageRuleModalElement.addEventListener('hidden.bs.modal', event => {
  var loginModal = bootstrap.Modal.getInstance(loginModalElement);
  loginModal.show();
})

