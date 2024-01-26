// import React, { Component } from 'react';
// import { Routes,Route, Navigate } from 'react-router-dom';
// import { isAuthenticated } from './auth';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Routes>
//     <Route
//     {...rest}
//     render={(props) =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Navigate
//           to={{
//             pathname: '/login',
//             state: { from: props.location },
//           }}
//         />
//       )
//     }
//   />
//   </Routes>
  
// );

// export default PrivateRoute;
import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import { BASE_URL } from "../../config";
//checking private route for user
export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  //eslint-disable-next-line
  const [auth, setAuth] = useAuth();//get user information from contextapi

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`${BASE_URL}/api/v1/user/user-auth`);//get the information from backend using axios and get
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth.token) authCheck();
  }, [auth.token]);
  //after getting the token and check whether the user and load in to corresponding pages in app.js route or spinner will load

  return ok ? <Outlet /> : <Spinner />;
}