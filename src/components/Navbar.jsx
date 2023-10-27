function Navbar({ activeLink }) {
  const isActive = (link) => {
    return link === activeLink ? 'active' : ''
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="d-flex">
          <img src="resources/icons/traveleen_logo.svg" alt="logo" width="50" className="img-fluid icon-nav" draggable='false'/>
          <h3 className="pt-2 logo-title"><b>Traveleen</b></h3>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto" style={{ paddingTop: '10px' }}>
            <li className="nav-item nav-item-custom">
              <h5><a className={`nav-link ${isActive('Home')}`} aria-current="page" href="index.html">Home</a></h5>
            </li>
            <li className="nav-item nav-item-custom">
              <h5><a className={`nav-link ${isActive('About')}`} href="about.html">About</a></h5>
            </li>
            <li className="nav-item nav-item-custom">
              <h5><a className="nav-link auth-button" href="signin.html">&nbsp;Login&nbsp;</a></h5>
            </li>
            <li className="nav-item nav-item-custom">
              <h5><a className="nav-link auth-button" href="signup.html">&nbsp;Register&nbsp;</a></h5>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}