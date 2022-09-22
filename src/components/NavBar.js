function NavBar (){
    return(
        //no se pudo insertar imagen 
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        <nav className="navbar bg-light">
  <div className="image">
    <a className="navbar-brand" href="#">
      <img src="" alt="" width="30" height="24"></img>
    </a>
  </div>
</nav>
    <a className="navbar-brand" href="#">Bad People</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav"> 
        <li className="nav-item">
          <a className="nav-link" href="#">Hoodies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Jackets</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Camisas
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Tees</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        )
}

export default NavBar 