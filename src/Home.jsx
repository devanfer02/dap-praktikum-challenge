function Home() {
  const homeHref = () => {
    if (localStorage.getItem('traveleen-loggedIn') === 'true') {
      window.location.href = 'user.profile.html'
    } else {
      window.location.href = 'signin.html'
    }
  }

  const buttonTextDecider = () => {
    if (localStorage.getItem('traveleen-loggedIn') === 'true') {
      return `Welcome, ${localStorage.getItem('traveleen-loggedInUsername')}`
    } 

    return 'Get Started Now'
  }

  const controlVideo = () => {
    const videoElement = document.getElementById('video-hero')
    const containerDiv = document.getElementById('home-hero')
    const imgElement = document.getElementById('icon-video')
    const homeElemenet = document.getElementById('home-text')

    if (videoElement.style.display == 'block') {
      homeElemenet.classList.toggle('dissapear-text')
      containerDiv.style.backgroundImage = 'url(./resources/imgs/Home.jpg)'
      videoElement.style.display = 'none'
      imgElement.src = 'resources/icons/jpeg/play24.png'
      videoElement.pause()
      videoElement.currentTime = 0
    } else {
      homeElemenet.classList.toggle('dissapear-text')
      videoElement.play()
      containerDiv.style.backgroundImage = 'none'
      videoElement.style.display = 'block'
      imgElement.src = 'resources/icons/jpeg/stop1.png'
    }
  }

  return (
    <div>
      <Navbar activeLink={'Home'}/>
      <div className="p-5 jumbotron text-white hero-container" id="home-hero">
        <video loop muted playsInline controls={false} id="video-hero" style={{ display: 'none' }}>
          <source src="resources/videos/vidhero.mp4" type="video/mp4"/>
        </video>
        <div className="home-desc">
          <div id="home-text">
            <h1 className="hero-title"><b>Traveleen</b></h1>
            <hr/>  
            <p className="hero-content">
              At Traveleen, the journey begins the moment you arrive on our digital doorstep. We're more than just a website; we're your portal to the wonders of the world. Whether you're a seasoned traveler, an armchair explorer, or someone on the cusp of their first adventure, we're here to ignite your wanderlust, provide invaluable insights, and fuel your passion for exploring our remarkable planet. So, fasten your virtual seatbelt, get ready to roam, and let the adventure begin. Welcome to a world of boundless discovery and inspiration.
            </p>
          </div>
          <Button 
            textContent={buttonTextDecider()} 
            classList={'btn btn-modified'} 
            onClick={homeHref}
          />
          <ButtonIcon 
            iconSrc={'resources/icons/jpeg/play24.png'} 
            classList={'btn btn-modified'} 
            onClick={controlVideo}
            style={{ marginLeft: '0.5em', alignItems: 'center' }}
          />
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