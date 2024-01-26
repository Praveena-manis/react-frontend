import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //used fontawesome icon
 import { faAddressCard } from '@fortawesome/free-solid-svg-icons';//used address card and shopping bag font awesome
 import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
 import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="d-flex flex-column justify-content-space-between bg-dark text-white p-4 vh-50">
        <a href="d-flex align-items-center">
            <i className="bi bi-bootstrap fs-5 me-2"></i>{/*created user menu with dashboard,profile and maintain user orders*/}
          <span className="fs-4">User Dashboard</span>
          </a>
          <hr className="text-secondary mt-2"/>
          <ul className="nav nav-pills flex-column p-0 m-0">
            <li className="nav-item p-1">
          <NavLink
            to="/dashboard/user/profile"
            className="nav-link text-white fs-5"     
          >
             <FontAwesomeIcon icon={faAddressCard} /> 
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="nav-link text-white fs-5"     
          >
             <FontAwesomeIcon icon={faBagShopping} /> 
            Orders
          </NavLink> 
          </li>
          </ul>
        </div>
    </div>
  );
};

export default UserMenu;