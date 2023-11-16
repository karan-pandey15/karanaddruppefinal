import React from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div>
      <nav style={{ backgroundColor: "#036E8C" }} className="navbar">
        <div className="container-fluid">
          <p
            className="navbar-brand p-0"
            style={{ fontSize: "22px", color: "white" }}
          >
            Welcome you to AddRuppe
          </p>
          <div className="d-flex p-0 ">
            <Link
              to={"/cibil-issue"}
              style={{
                textDecoration: "none",
                fontSize: "24px",
                color: "#FFFF00",
              }}
            >
              Issue related Cibil
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
