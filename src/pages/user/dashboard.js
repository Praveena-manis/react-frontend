import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  //get user information from contextapi
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu /> {/*linked user menu*/}
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3> Welcome : {auth.user.name}!!!</h3>{/*get user name from context api*/}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;