function Signin() {
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
  
    localStorage.setItem('traveleen-loggedIn', 'true')
    localStorage.setItem('traveleen-loggedInUsername', result.username)
  
    alert('Anda Berhasil Login')
    window.location.href = "index.html"
  }

  function toggleCheckbox(event) {
    const checkbox = event.currentTarget
    checkbox.classList.toggle('clicked')
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
            <h1 className="mb-2 text-center" id="masuk"><b>Masuk</b></h1>
            <p className="mt-1 text-center" id="group-name-1">HAMDALLA AGIL</p>
          </div>
          <form>
            <Input 
              label={"Username atau Email"} 
              placeholder={"dvncpp@gmail.com"} 
              id={'credential'} 
              type={'text'}
            />
            <Input 
              label={"Kata Sandi"} 
              placeholder={"12345"} 
              id={'password'} 
              type={'password'}
              icon={true}
              iconSrc={'resources/icons/icon_eye_closed.svg'}
              iconClass={'icon'}
            />
            <p id="message-login">
              Invalid Credential or Password
            </p>
            <div className="mt-4">
              <div className="d-flex align-items-center mt-2 form-remember">
                <div className="rounded-checkbox" id="special-checkbox" onClick={toggleCheckbox}>
                  <p className="checklist" >
                    ✔
                  </p>
                </div>
                <label className="form-check-label check-label" htmlFor="flex-check">
                  Ingat Saya
                </label>
                <p id="forgot"><a href="" style={{ textDecoration: 'none', color: '#171717' }}>Lupa Kata Sandi</a></p>
              </div>
              <Button textContent={'Masuk'} onClick={login} classList={'btn w-100 btn-modified'}/>
                <div id="regis-href">
                  <p className="mt-3 text-center info-no-acc">Tidak Punya Akun? <a href="signup.html" id="register-href">Daftar</a></p>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

ReactDOM.render(
  <Signin/>,
  document.getElementById('root')
);

initUsersData()
