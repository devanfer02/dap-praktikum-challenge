function Signup() {
  function validEmail(input) {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    return pattern.test(String(input))
  }

  function dataExist(list, email, username) {
    return list.some(user => user.email === email) || list.some(user => user.username === username)
  }

  function register() {
    const usernameTag = document.getElementById('username')
    const usernameInput = usernameTag.value.trim()
    const emailTag = document.getElementById('email')
    const emailInput = emailTag.value.trim()
    const passwordTag = document.getElementById('password')
    const confirmTag = document.getElementById('confirm')
    const messagePassTag = document.getElementById('password-message')
    const passwordInput = passwordTag.value.trim()
    const confirmInput = confirmTag.value.trim()
  
    if (usernameInput.length === 0 || emailInput.length === 0) {
      messagePassTag.textContent = 'Required Fields Are Still Empty'
      messagePassTag.style.display = 'block'
      return 
    }
  
    if (!validEmail(emailInput)) {
      messagePassTag.textContent = 'Invalid Email'
      messagePassTag.style.display = 'block'
      emailTag.classList.add('form-control-error')
      return 
    }
  
    if (passwordInput.length === 0) {
      messagePassTag.textContent = 'Password Field Can Not Be Empty'
      messagePassTag.style.display = 'block'
      passwordTag.classList.add('form-control-error')
      return
    }
  
    if (passwordInput.length < 6) {
      messagePassTag.textContent = 'Password Field Minimum Length is 6'
      messagePassTag.style.display = 'block'
      passwordTag.classList.add('form-control-error')
      return
    }
    
    if (passwordInput.includes(' ')) {
      messagePassTag.textContent = 'Password Field Contains Space Character'
      messagePassTag.style.display = 'block'
      passwordTag.classList.add('form-control-error')
      return
    }
    
    if (passwordInput !== confirmInput) {
      passwordTag.classList.add('form-control-error')
      confirmTag.classList.add('form-control-error')
      messagePassTag.textContent = "Pasword Doesn't Match Confirmation"
      messagePassTag.style.display = 'block'
      messagePassTag.style.color = 'red'
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
      password: passwordInput,
      profile_url: 'default'
    }
  
    users.push(user)
  
    localStorage.setItem('users', JSON.stringify(users))
  
    alert("Pendaftaran Sukses! Kamu bisa mencoba untuk melakukan login")
  
    window.location.href = 'signin.html'
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6 card card-form">
          <div id="logo">
            <img src="resources/icons/traveleen_logo.svg" alt="logo" className="text-center" style={{ marginRight: '6px' }} draggable='false'/>
            <h4 className="mt-3 text-center"><b>TRAVELEEN</b></h4>
          </div>
          <div className="entry">
            <h1 className="mb-2 text-center" id="masuk"><b>Daftar</b></h1>
            <p className="mt-1 text-center" id="group-name-1">DEVAN FERREL</p>
          </div>
          <form>
            <Input 
              label={"Username"} 
              placeholder={"Enter your username"} 
              id={'username'} 
              type={'text'}
            />
            <Input 
              label={"Email"} 
              placeholder={"Enter your email"} 
              id={'email'} 
              type={'email'}
            />          
            <Input 
              label={"Kata Sandi"} 
              placeholder={"Enter your password"} 
              id={'password'} 
              type={'password'}
              minLength={'6'}
              icon={true}
              iconSrc={'resources/icons/icon_eye_closed.svg'}
              iconClass={'icon'}
            />
            <p className="password-info">
              Pakai kata sandi minimal 6 karakter dan bedakan dengan kata sandi akun media sosial atau website lain
            </p>    
            <Input 
              label={"Konfirmasi Kata Sandi"} 
              placeholder={"Enter your confirmation"} 
              id={'confirm'} 
              type={'password'}
              minLength={'6'}
              icon={true}
              iconSrc={'resources/icons/icon_eye_closed.svg'}
              iconClass={'icon'}
            />
            <p id="password-message">
              Kata Sandi Dengan Konfirmasi Sandi Tidak Sama
            </p>
            <p className="daftar-info">
            Dengan mengklik Daftar, kamu menyetujui Ketentuan, Kebijakan Privasi, dan Kebijakan Cookie kami. Kami dapat mengirimkan pemberitahuan SMS yang dapat dihentikan kapan saja.
            </p>
            <div className="mt-4">
              <div className="d-flex align-items-center mt-2 form-remember">
              </div>
              <Button textContent={'Masuk'} onClick={register} classList={'btn w-100 btn-modified'} />
                <div id="regis-href">
                  <p className="mt-3 text-center info-no-acc">Sudah Punya Akun? <a href="signin.html" id="register-href">Masuk</a></p>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

ReactDOM.render(
  <Signup/>,
  document.getElementById('root')
);


initUsersData()
initSignUpPage()

