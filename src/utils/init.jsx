function initTogglePassword() {
  const inputPassword = document.getElementsByClassName('pass-in')
  const togglePassword = document.getElementsByClassName('icon')
  
  for (let i = 0; i < inputPassword.length; i++) {
    togglePassword[i].addEventListener('click', () => {
      toggle(inputPassword[i], togglePassword[i])
    })
  }
};

function initCheckBoxClick() {
  const checkbox = document.getElementById('special-checkbox')

  checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('clicked')
  })
}

function initInputBehaviour() {
  const inputTags = document.getElementsByClassName('form-control-self')
  for (let i = 0; i < inputTags.length; i++) {
    inputTags[i].addEventListener('click', () => {checkMessage(inputTags)})
    checkMessage(inputTags)
  }
}

function initSignUpPage() {
  document.getElementsByClassName('form-group')[2].style.marginBottom = '0'
}

function initUsersData() {
  if(localStorage.getItem('users') == null) {
    localStorage.setItem('users', '[]');
  }
}

initUsersData()