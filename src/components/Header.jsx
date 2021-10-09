import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="header">
      <div className="flex-between">
        <div className="logo">
          <h1>RTTV</h1>
        </div>
        <div className="flex nav">
          <p className="manager-details">Manager Id: {localStorage.getItem("managerId")}</p>
          <Link to="/logout">
            <p className="cursor logout">Logout</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
