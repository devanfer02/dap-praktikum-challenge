function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-2 border-top">
        <p className="col-md-4 mb-0 text-body-secondary">2023, Traveleen</p>
        <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <img src="resources/icons/traveleen_logo.svg" alt="logo" />
        </a>
        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
          <li className="nav-item"><a href="https://www.instagram.com/dvnf20/" className="nav-link px-2 text-body-secondary">Instagram</a></li>
          <li className="nav-item"><a href="https://github.com/devanfer02" className="nav-link px-2 text-body-secondary">Github</a></li>
          <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
        </ul>
      </footer>
    </div>
  )
}