import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //used fontawesome icon
 import { faBagShopping, faList } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-space-between bg-dark text-white p-4 vh-50">
        <a href="d-flex align-items-center">
            <i className="bi bi-bootstrap fs-5 me-2"></i>
          <span className="fs-4">Admin Dashboard</span>
          </a>
          <hr className="text-secondary mt-2"/>
          <ul className="nav nav-pills flex-column p-0 m-0">
            <li className="nav-item p-1">
              {/*used navlink for navigating to another page and used fontawesome icon*/}
          <NavLink
            to="/dashboard/admin/createcategory"
            className="nav-link text-white fs-5"     
          >
             <FontAwesomeIcon icon={faList} /> 
            Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/addproduct"
            className="nav-link text-white fs-5"     
          >
             <FontAwesomeIcon icon={faList} /> 
            AddProducts
          </NavLink> <NavLink
            to="/dashboard/admin/allproducts"
            className="nav-link text-white fs-5"     
          >
             <FontAwesomeIcon icon={faList} /> 
            AllProducts
          </NavLink> 
          <NavLink
            to="/dashboard/admin/orders"
            className="nav-link text-white fs-5"     
          >
             <FontAwesomeIcon icon={faBagShopping} /> 
            AdminOrders
          </NavLink>
         </li>
          </ul>
        </div>
    </>
  );
};

export default AdminMenu;