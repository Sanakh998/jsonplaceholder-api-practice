import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="container-fluid p-0 text-center mb-4">
      <NavBar />
      <h2 className="py-3">API Practice Basic Project.</h2>
      <h6>Goto Other Pages With NavBar Menu</h6>
      <hr className="text-primary"/>
    </div>
  );
};

export default Header;
