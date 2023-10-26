function login() {
  const usernameInput = document.getElementById('username').textContent
  const emailInput = document.getElementById('email').textContent
  const passwordTag = document.getElementById('password')
  const confirmTag = document.getElementById('confirm')
  const messagePassTag = document.getElementById('password-message')
  
  if (passwordTag.value !== confirmTag.value) {
    passwordTag.style.border = '1px solid red'
    confirmTag.style.border = '1px solid red'
    messagePassTag.style.display = 'block'
    messagePassTag.style.color = 'red'
    return
  }
}

function domRemove(tag, className) {
  tag.classList.remove(className)
}

function domAdd(tag, attribute, value) {
  tag.setAttribute(attribute, value)
}

function Signup() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6 card card-form">
          <div id="logo">
            <img src="resources/icons/traveleen1.png" alt="logo" className="text-center" style={{ marginRight: '6px' }}/>
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
              icon={true}
              iconClass={'fa fa-eye-slash'}
              iconId={'toggle-password'}
            />
            <p className="mt-1 password-info">
              Pakai kata sandi minimal 6 karakter dan bedakan dengan kata sandi akun media sosial atau website lain
            </p>    
            <Input 
              label={"Konfirmasi Kata Sandi"} 
              placeholder={"Enter your confirmation"} 
              id={'confirm'} 
              type={'password'}
              icon={true}
              iconClass={'fa fa-eye-slash'}
              iconId={'confirm-password'}
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
              <button type="button" className="btn w-100 btn-modified" onClick={login}>Click</button>
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

initTogglePassword()
initUsersData()
initPasswordBehaviour()
domRemove(document.getElementsByClassName('form-group')[2], 'form-group')
domAdd(document.getElementById('password'), 'minlength', '6')
domAdd(document.getElementById('confirm'), 'minlength', '6')
