function About() {
  return (
    <div>
      <Navbar activeLink={'About'}/>
      <div className="p-5 jumbotron text-white hero-container">
        <h1 className="hero-title text-center" style={{ paddingTop: '1em' }}><b>About Us</b></h1>
        <div className="about-desc text-black">
          <p>Founded by avid travelers, Traveleen was born out of a deep passion for travel and a belief in the transformative power of exploring new destinations. We understand the joy of discovering new cultures, savoring exotic cuisines, and experiencing the thrill of new adventures. Our journey began as a dream to share this passion with the world.
          </p>
          <p className="about-desc-2">
          At Traveleen, our mission is to inspire, guide, and assist travelers of all kinds, from seasoned globetrotters to first-time adventurers. We aim to make your travel dreams a reality by providing you with the best resources, tips, and advice for unforgettable journeys. Our goal is to help you create memories that last a lifetime.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

ReactDOM.render(
  <About/>,
  document.getElementById('root')
);

initUsersData()