function initTogglePassword() {
  const inputPassword = document.getElementById('password')
  const togglePassword = document.getElementById('toggle-password')
  const inputConfirm = document.getElementById('confirm')
  const toggleConfirm = document.getElementById('confirm-password')  

  togglePassword.addEventListener('click', () => {
    toggle(inputPassword, togglePassword)
  })  
  if (inputConfirm != null) {
    toggleConfirm.addEventListener('click', () => {
      toggle(inputConfirm, toggleConfirm)
    })
  }
};

function initPasswordBehaviour() {
  const passwordTag = document.getElementById('password')
  const confirmTag = document.getElementById('confirm')
  const messagePassTag = document.getElementById('password-message')
  const computed = getComputedStyle(messagePassTag)

  checkMessage(computed, passwordTag, confirmTag, messagePassTag)

  passwordTag.addEventListener('click', () => {
    checkMessage(computed, passwordTag, confirmTag, messagePassTag)
  })

  confirmTag.addEventListener('click', () => {
    checkMessage(computed, passwordTag, confirmTag, messagePassTag)
  })
}

function initLoginBehaviour() {
  const inputTag = document.getElementById('credential')
  const passwordTag = document.getElementById('password')
  const messagePassTag = document.getElementById('message-login')
  const computed = getComputedStyle(messagePassTag)

  checkMessage(computed, inputTag, passwordTag, messagePassTag)

  inputTag.addEventListener('click', () => {
    checkMessage(computed, inputTag, passwordTag, messagePassTag)
  })

  passwordTag.addEventListener('click', () => {
    checkMessage(computed, inputTag, passwordTag, messagePassTag)
  })
}

function initUsersData() {
  if(localStorage.getItem('users') == null) {
    localStorage.setItem('users', '[]');
  }
}

function toggle(inputTag, buttonTag) {
  if(inputTag.getAttribute('type') === 'password') {
    inputTag.setAttribute('type', 'text')
    buttonTag.classList.remove('fa-eye-slash')
    buttonTag.classList.add('fa-eye')
  } else {
    inputTag.setAttribute('type', 'password')
    buttonTag.classList.remove('fa-eye')
    buttonTag.classList.add('fa-eye-slash')
  }
};

function checkMessage(computed, passwordTag, confirmTag, messagePassTag) {
  if (computed.getPropertyValue('display') === 'block') {        
    passwordTag.classList.remove('form-control-error')
    confirmTag.classList.remove('form-control-error')
    messagePassTag.style.display = 'none'
    messagePassTag.style.color = 'red'
    messagePassTag.value = 'Kata Sandi Dengan Konfirmasi Sandi Tidak Sama'
  }
}

initUsersData()