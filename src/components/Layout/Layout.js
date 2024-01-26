import React from "react";
import Footer from "./footer";
import Header from "../Layout/Header";
import {Helmet} from 'react-helmet';
import { ToastContainer } from "react-toastify";
const Layout = ({ children, title, description, keywords, author }) => {
  //created layout for maintaing header,body and footer
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <ToastContainer />
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern  project",
  keywords: "mern,react,node,mongodb",
 
};

export default Layout;