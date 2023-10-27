function initTogglePassword() {
  const inputPassword = document.getElementsByClassName('pass-in')
  const togglePassword = document.getElementsByClassName('icon')
  
  for (let i = 0; i < inputPassword.length; i++) {
    togglePassword[i].addEventListener('click', () => {
      toggle(inputPassword[i], togglePassword[i])
    })
  }
};

function initInputBehaviour() {
  const inputTags = document.getElementsByClassName('form-control-self')
  for (let i = 0; i < inputTags.length; i++) {
    inputTags[i].addEventListener('click', () => {checkMessage(inputTags)})
    checkMessage(inputTags)
  }
}

function initSignUpPage() {
  document.getElementsByClassName('form-group')[2].style.marginBottom = '0'
  domAdd(document.getElementById('password'), 'minlength', '6')
  domAdd(document.getElementById('confirm'), 'minlength', '6')
}

function initUsersData() {
  if(localStorage.getItem('users') == null) {
    localStorage.setItem('users', '[]');
  }
}

function toggle(inputTag, buttonTag) {
  if(inputTag.getAttribute('type') === 'password') {
    inputTag.setAttribute('type', 'text')
    buttonTag.src = 'resources/icons/icon_eye_open.svg'
  } else {
    inputTag.setAttribute('type', 'password')
    buttonTag.src = 'resources/icons/icon_eye_closed.svg'
  }
}

function domAdd(tag, attribute, value) {
  tag.setAttribute(attribute, value)
}

function checkMessage(tags) {
  const messagePassTag = 
    document.getElementById('password-message') ? document.getElementById('password-message') : document.getElementById('message-login');
  const computed = getComputedStyle(messagePassTag)
  if (computed.getPropertyValue('display') === 'block') {        
    for(let i = 0; i < tags.length; i++) {
      tags[i].classList.remove('form-control-error')
    }
    messagePassTag.style.display = 'none'
    messagePassTag.style.color = 'red'
    messagePassTag.value = 'Kata Sandi Dengan Konfirmasi Sandi Tidak Sama'
  }
}

initUsersData()