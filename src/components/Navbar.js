import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link text-white text-uppercase ml-5" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white text-uppercase ml-5" href="#">
              All Consoles
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white text-uppercase ml-5" href="#">
              Console Lookup
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
