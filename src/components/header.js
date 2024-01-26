// import React from 'react';
// import logo from '../images/katirmunai.png'; //used logo
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; //used fontawesome icon
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';//used cart icon
// import { faUser } from '@fortawesome/free-solid-svg-icons';
// // import './header.css'; //linked css file
// import { Link, NavLink, useNavigate } from 'react-router-dom'; //used link from router
// import { useDispatch} from 'react-redux';
// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
// // const user = useSelector(state => state.userReducer);
//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     dispatch({ type: "LOGIN_ERROR" });
//     navigate("/login");
//   }
//     return (
//       <div> <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#ADD8E6" }}>  {/*used navbar and toggler */}
//         <div className="container-fluid">
//           <Link className="navbar-brand" href="#">
//             <img src={logo} alt="Logo" width={120} height={80} className="d-inline-block align-text-top" /></Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <form className="d-flex m-auto" role="search"> {/*used form with input type as search and used button*/}
//               <input className="form-control" type="search" placeholder="product name,category name etc.." aria-label="Search" />
//               <button className="btn btn-outline-danger rightRadius px-10" type="submit">Search</button>
//             </form>
//           </div>
//         {localStorage.getItem("token")==null? <> <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link className="nav-link" aria-current="page" to="./login">
//                   <button className="btn btn-warning" type="submit">Login</button>
//                 </Link>
//               </li>
//             </ul>
//             </div></> : ''}
//             <div className="dropdown">
//               {localStorage.getItem("token") != null ? <> <a className="btn" href="/" role="button" data-bs-toggle="dropdown">
//               <FontAwesomeIcon className="icon fa-2x pl-auto" icon={faUser} />  {/*used cart from font awesome icon*/}
//               </a>

//                 <ul className="dropdown-menu">
//                   <li>
//                     <NavLink className="dropdown-item mt-0" to="/profile">My Profile</NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item mt-0" to="/dashboard">Dashboard</NavLink>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#" onClick={() => logout()}>
//                       Logout
//                     </a>
//                   </li>
//                 </ul> </> : ''}
//             </div>

//      {localStorage.getItem("token")==null? <>   <NavLink className="nav-link" aria-current="page" to="./register">
//               <button className="btn btn-warning" type="submit">Register</button>
//             </NavLink>
//             <NavLink className="nav-link" to="./cart">
//               <FontAwesomeIcon className="icon fa-2x pl-auto" icon={faCartShopping} /></NavLink>  {/*used cart from font awesome icon*/}
//           </>:''}
//           </div>
//       </nav>
//         <ul className="nav justify-content-center">
//           <li className="nav-item"> {/*used nav to link the various pages*/}
//             <Link className="nav-link active" aria-current="page" to="./home">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="./allproducts">All Products</Link>
//           </li>
//           <li className="nav-item dropdown">
//             <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Women
//             </Link>
//             <ul className="dropdown-menu"> {/*used dropdown for listing various pages*/}
//               <li><Link className="dropdown-item" to="./allproductswomen">All Products</Link></li>
//               <li><Link className="dropdown-item" to="./dresses">Dresses</Link></li>
//               <li><Link className="dropdown-item" to="./pantswomen">Pants</Link></li>
//               <li><Link className="dropdown-item" to="./skrits">Skrits</Link></li>
//             </ul>
//           </li>
//           <li className="nav-item dropdown">
//             <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//               Men
//             </Link>
//             <ul className="dropdown-menu">
//               <li><Link className="dropdown-item" to="./allproductsmen">All Products</Link></li>
//               <li><Link className="dropdown-item" to="./shirts">Shirts</Link></li>
//               <li><Link className="dropdown-item" to="./pantsmen">Pants</Link></li>
//               <li><Link className="dropdown-item" to="./hoodies">Hoodies</Link></li>
//             </ul>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="./kids">Kids</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="./contact">Contact</Link>
//           </li>
//         </ul></div>
//     )
//   }

// export default Header;