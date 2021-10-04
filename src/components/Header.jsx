import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <section className="header">
      <div className="flex-between">
        <h1>RTTV</h1>
        <Link to="/logout">
          <p className="cursor logout">Logout</p>
        </Link>
      </div>
    </section>
  );
}
