import { IoMdLogOut } from "react-icons/io";
import { NavLink,Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">
     LOGO
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            PRODUCTS
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            ABOUT
          </a>
        </li>
      </ul>
      <div className="d-flex" role="search">
      
        <p className="border border-danger rounded-2 p-2 m-3 " type="submit">
          Logout  <IoMdLogOut  className="fs-4"/>
        </p>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar