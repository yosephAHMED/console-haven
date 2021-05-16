import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="jumbotron jumbotron-fluid vh-100">
      <div className="container">
        <div className="embed-responsive embed-responsive-16by9">
          <video src="/videos/video.mp4" autoPlay loop muted />
        </div>
        <div className="d-flex flex-row justify-content-between mt-3">
          <div>
            <h1 className="display-4">Console Haven</h1>
            <p className="h1 lead">The Ultimate Console Database For Gamers!</p>
          </div>
          <div className="align-self-center">
            <Link to="/consoles">
              <button type="button" className="btn btn-primary btn-lg">
                View All
              </button>
            </Link>
            <Link to="/lookup">
              <button type="button" className="btn btn-danger btn-lg">
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
