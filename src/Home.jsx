function Home() {
  return (
    <div>
      <Navbar/>
      <div className="p-5 jumbotron text-white">
        <h1 className="hero-title"><b>Traveleen</b></h1>
        <hr/>  
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis massa id justo sagittis interdum. Cras ultrices placerat metus, eget malesuada ligula efficitur ac. In hac habitasse platea dictumst. Quisque sit amet velit et mi bibendum fringilla nec id nunc.
        </p>
        <Button textContent={'Contact Us'} classList={'btn btn-modified'}/>
      </div>
    </div>
  )
}

ReactDOM.render(
  <Home/>,
  document.getElementById('root')
);

initUsersData()