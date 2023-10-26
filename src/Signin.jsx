function login(event) {
  event.preventDefault()
  const credential = document.getElementById('credential').textContent.trim();
  const password = document.getElementById('password').textContent.trim();

  
}

function Signin() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6 card card-form">
          <div id="logo">
            <img src="resources/icons/traveleen1.png" alt="logo" className="text-center" style={{ marginRight: '6px' }}/>
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
              iconClass={'fa fa-eye-slash'}
              iconId={'toggle-password'}
            />
            <div className="mt-4">
              <div className="d-flex align-items-center mt-2 form-remember">
                <input className="form-check-input rounded-checkbox" type="checkbox" value="" id="flex-check" />
                <label className="form-check-label check-label" htmlFor="flex-check">
                  Ingat Saya
                </label>
                <p id="forgot">Lupa Kata Sandi</p>
              </div>
              <button type="submit" className="btn w-100 btn-modified">Masuk</button>
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

initTogglePassword()
initUsersData()