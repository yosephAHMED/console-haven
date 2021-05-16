import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link to="/" className="navbar-brand">
        Console Haven
        <i class="fas fa-gamepad"></i>
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase ml-5" to="#">
              Home
              <i class="fas fa-home"></i>
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white text-uppercase ml-5" to="#">
              All Consoles
              <i class="fas fa-layer-group"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white text-uppercase ml-5" to="#">
              Console Lookup
              <i class="fas fa-search"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
