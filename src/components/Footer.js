import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} School Management System</p>
    </footer>
  );
}

export default Footer;
