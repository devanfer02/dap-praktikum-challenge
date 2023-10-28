function UserProfile() {
  function readURL() {
    const file = document.getElementById('image-upload').files[0]
    const reader = new FileReader()
    
    reader.onload = function () {   
      const img = document.getElementById('profile-img')
      img.style.backgroundImage = `url(${reader.result})`
    }

    if (file) reader.readAsDataURL(file)
  }

  return (
    <div>
      <Navbar activeLink={localStorage.getItem('traveleen-loggedInUsername')}/>
      <div className="profile">
        <div className="justify-content-between text-center card-profile">
          <div className="card card-inside">
            <div className="profile-picture mt-3">
              <label htmlFor="image-upload">
                <div className="edit-icon"> 
                  <i className="fas fa-pen"></i>
                </div>
                <div id="profile-img" draggable="false"/>
              </label>
              <input type="file" id="image-upload" accept=".png, .jpg, .jpeg" onChange={readURL}/>
              <h5 className="mt-2 card-title">Hello, {localStorage.getItem('traveleen-loggedInUsername')}</h5>
            </div>
            <hr/>
            <div className="card-body">
              <div>
                <h3>Travel History</h3>
                <p>None</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

ReactDOM.render(
  <UserProfile/>,
  document.getElementById('root')
)