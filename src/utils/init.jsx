function initSignUpPage() {
  document.getElementsByClassName('form-group')[2].style.marginBottom = '0'
}

function initUsersData() {
  if(localStorage.getItem('traveleen-users') == null) {
    localStorage.setItem('traveleen-users', '[]');
  }
}

initUsersData()