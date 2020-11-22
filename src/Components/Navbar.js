import React from "react";
import { Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#282828" }}
      >
        <Navbar.Brand
          href="/"
          style={{
            fontSize: "40px",
            fontWeight: "bolder",
            color: "red",
          }}
        >
          <center>USERS LIST</center>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default NavBar;
