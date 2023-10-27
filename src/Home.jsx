function Home() {
  return (
    <div>
      <Navbar activeLink={'Home'}/>
      <div className="p-5 jumbotron text-white hero-container">
        <div className="home-desc">
          <h1 className="hero-title"><b>Traveleen</b></h1>
          <hr/>  
          <p className="hero-content">At Traveleen, the journey begins the moment you arrive on our digital doorstep. We're more than just a website; we're your portal to the wonders of the world. Whether you're a seasoned traveler, an armchair explorer, or someone on the cusp of their first adventure, we're here to ignite your wanderlust, provide invaluable insights, and fuel your passion for exploring our remarkable planet. So, fasten your virtual seatbelt, get ready to roam, and let the adventure begin. Welcome to a world of boundless discovery and inspiration.
          </p>
          <Button textContent={'Get Started'} classList={'btn btn-modified'}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

ReactDOM.render(
  <Home/>,
  document.getElementById('root')
);

initUsersData()