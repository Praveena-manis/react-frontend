import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart";
import {toast} from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //used fontawesome icon
 import { faCartShopping } from '@fortawesome/free-solid-svg-icons';//used cart icon
 import logo from "../../images/katirmunai.png";
 import './header.css';
import { Badge } from "antd";
//created header with user and cart details
const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart]=useCart();
  //in handle logout set user information null
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
       <div> 
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#ADD8E6" }}>  {/*used navbar and toggler */}
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width={120} height={80} className="d-inline-block align-text-top" /></Link>{/*set logo with height and width*/}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>{/*used toggler button for responsive*/}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex m-auto" role="search">
               {/*used form with input type as search and used button*/}
              <input className="form-control" type="search" placeholder="product name,category name etc.." aria-label="Search" />
              <button className="btn btn-outline-danger rightRadius px-10" type="submit">Search</button>
            </form>
          </div>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto fw-100 mb-2 mb-lg-0">
              <li className="nav-item">
                {/*created various item and linked with NAVLINK*/}
                <NavLink to="/home" className="nav-link ">
                  Products
                </NavLink>
              </li>
          {/*after logged in register and login is not visible using user information*/}
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link">
                    <button className="btn btn-warning" type="submit">Register</button>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                       <button className="btn btn-warning" type="submit">Login</button>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {/*get user name*/}
                      {auth.user.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        {/*checked user is admin or user then linked with corresponding dashboard*/}
                        <NavLink
                          to={`/dashboard/${
                            auth.user.isAdmin === 1 ? "Admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              {/*used badge for displaying cart values with fontawesome icons are linked and initially it shows zero*/}
              <li className="nav-item">
                <Badge count={cart.length} showZero>
                <NavLink to="/cartpage" className="nav-link">
                <FontAwesomeIcon className="icon fa-2x pl-auto" icon={faCartShopping} /></NavLink> 
                </Badge>
              </li>
            </ul>
            </div>
          </div>
            </nav>
        </div>
    
    </>
  );
};

export default Header;