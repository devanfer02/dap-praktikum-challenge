function initSignUpPage() {
  document.getElementsByClassName('form-group')[2].style.marginBottom = '0'
}

function initUsersData() {
  if(localStorage.getItem('users') == null) {
    localStorage.setItem('users', '[]');
  }
}

initUsersData()