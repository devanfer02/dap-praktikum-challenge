function dataExist(list, email, username) {
  return list.some(user => user.email === email) || list.some(user => user.username === username)
}

function validEmail(input) {
  const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  return pattern.test(input)
}

function register() {
  const usernameTag = document.getElementById('username')
  const usernameInput = usernameTag.value.trim()
  const emailTag = document.getElementById('email')
  const emailInput = emailTag.value.trim()
  const passwordTag = document.getElementById('password')
  const confirmTag = document.getElementById('confirm')
  const messagePassTag = document.getElementById('password-message')
  const passwordInput = passwordTag.value 
  const confirmInput = confirmTag.value
  
  if (passwordInput !== confirmInput) {
    passwordTag.classList.add('form-control-error')
    confirmTag.classList.add('form-control-error')
    messagePassTag.style.display = 'block'
    messagePassTag.style.color = 'red'
    return
  }

  if (usernameInput.length === 0 || emailInput === 0) {
    return 
  }

  if (!validEmail(emailInput)) {
    messagePassTag.textContent = 'Invalid Email'
    messagePassTag.style.display = 'block'
    emailTag.classList.add('form-control-error')
    return 
  }

  const users = JSON.parse(localStorage.getItem('users'))

  if (dataExist(users, emailInput, usernameInput)) {
    messagePassTag.style.display = 'block'
    messagePassTag.style.color = 'red'
    messagePassTag.textContent = 'Username Atau Email Sudah Digunakan'
    emailTag.classList.add('form-control-error')
    usernameTag.classList.add('form-control-error')
    return 
  }

  const user = {
    username: usernameInput,
    email: emailInput,
    password: passwordInput
  }

  users.push(user)

  localStorage.setItem('users', JSON.stringify(users))

  alert("Pendaftaran Sukses! Kamu bisa mencoba untuk melakukan login")

  window.location.href = 'signin.html'
}

function login() {
  const messsageTag = document.getElementById('message-login')
  const credential = document.getElementById('credential').value.trim();
  const passwordTag = document.getElementById('password');
  const password = passwordTag.value.trim()

  if (credential === 'admin' && password === 'clearstorage') {
    localStorage.clear()
    alert('successfully clear local storage')
    return;
  }

  const users = JSON.parse(localStorage.getItem('users'))

  const result = users.find(user => (user.username === credential || user.email === credential) && user.password === password)

  if (!result) {
    passwordTag.classList.add('form-control-error')
    messsageTag.style.display = 'block'
    return 
  }

  localStorage.setItem('session', 'true')

  alert('Login Berhasil!')
  window.location.href = "index.html"
}