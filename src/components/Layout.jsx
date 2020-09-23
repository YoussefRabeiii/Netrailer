import React from "react";

// import { Nav, Footer } from "./";

import "./layout.css";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <>{/* <Nav /> */}</>

      <>{children}</>

      <>{/* <Footer /> */}</>
    </div>
  );
};

export default Layout;
