// import React, { Component } from 'react';
// import {Routes, Route, Navigate } from 'react-router-dom';
// import { isAuthenticated } from './auth';

// const AdminRoute = ({ component: Component, ...rest }) => (
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

// export default AdminRoute;
import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";
import { BASE_URL } from "../../config";
//set private route for checking admin and get the user details from context api
export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  //eslint-disable-next-line
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      //used axios and get method for checking admin
      const res = await axios.get(`${BASE_URL}/api/v1/user/admin-auth`);
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth.token) authCheck();
  }, [auth.token]);
//after getting token it will move the further link in app.js or else spinner will load
  return ok ? <Outlet /> : <Spinner path="" />;
}