import React from "react";
import { AppsMenu } from "../../components/appsMenu/appsMenu";
import "./Footer.css";

const Footer = ({ isAuthenticated = false }) => {
  return (
    <>
      <div className="footer_main">
        {isAuthenticated === true && <AppsMenu />}
      </div>
    </>
  );
};

export default Footer;
