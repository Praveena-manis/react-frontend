import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className=" text-blue pt-3 pb-4" style={{ backgroundColor: "#ADD8E6" }}> {/*used inline style for color and text*/}
      <div className="container-fluid text-center text-md-left"> {/*used container fluid and link with various pages*/}
        <div className="row text-center text-md-left">
          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mt-1">
            <h5 className="text-captilize mb-3 font-weight-bold text-primary">Women</h5>
            <p>
              <Link to="/home" className="text-blue" style={{ textDecoration: "none" }}>Dresses</Link>
            </p>
            <p>
              <Link to="/home" className="text-blue" style={{ textDecoration: "none" }}>Pants</Link>
            </p>
            <p>
              <Link to="/home" className="text-blue" style={{ textDecoration: "none" }}>Skrits</Link>
            </p>
          </div>
          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mt-1">
            <h5 className="text-captilize mb-3 font-weight-bold text-primary">Men</h5>
            <p>
              <Link to="/home" className="text-blue" style={{ textDecoration: "none" }}>Shirts</Link>
            </p>
            <p>
              <Link to="/home" className="text-blue" style={{ textDecoration: "none" }}>Pants</Link>
            </p>
            <p>
              <Link to="/home" className="text-blue" style={{ textDecoration: "none" }}>Hoodies</Link>
            </p>
          </div>
          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mt-1">
            <h5 className="text-captilize mb-3 font-weight-bold text-primary">Kids</h5>
            <Link to="/home" className="text-blue" style={{ textDecoration: "none" }}>Kids</Link>
          </div>
          <div className="col-md-6 col-lg-3 col-xl-3 mx-auto mt-1">
            <h5 className="text-captilize mb-3 font-weight-bold text-primary">Links</h5>
            <p>
              <Link to="/" className="text-blue" style={{ textDecoration: "none" }}>Home</Link>
            </p>
            <p>
              <Link to="/login" className="text-blue" style={{ textDecoration: "none" }}>Login</Link>
            </p>
            <p>
              <Link to="/register" className="text-blue" style={{ textDecoration: "none" }}>Register</Link>
            </p>
          </div>
          <hr className="mb-1" />
          <div className="d-flex justify-content-center">
            <div className="col-md-6 col-lg-3 col-xl-3">
              <p className="text-blue">Copyright &copy; E-commerce 2023-24</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;