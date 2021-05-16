import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Console from "./Console";
import "./Consoles.css";

function Consoles() {
  const [consoles, setConsoles] = useState([]);
  const [selectedConsole, setSelectedConsole] = useState(null);

  // function to send out request for all consoles data
  function getAllConsoles() {
    axios.get("http://csc225.mockable.io/consoles").then(function (response) {
      // update consoles state to data retrieved
      setConsoles(response.data);
    });
  }

  useEffect(function () {
    getAllConsoles();
  }, []);

  if (selectedConsole) {
    return (
      <div>
        <Console selectedConsole={selectedConsole} />
        <button
          type="button"
          className="btn btn-warning btn-lg btn-block"
          onClick={() => setSelectedConsole(null)}
        >
          Go Back
        </button>
      </div>
    );
  }

  if (consoles.length === 0) {
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
  }

  return (
    <div className="container-sm vh-100">
      <div className="row pt-5">
        {consoles.map(function (console) {
          return (
            <div className="col-6 pb-5">
              <div className="card h-100" key={console.id}>
                <img
                  src={console.image}
                  className="card-img-top img-thumbnail"
                  alt={console.name}
                />
                <div className="card-body">
                  <div className="row">
                    <p className="h2 card-text">{console.name}</p>
                  </div>
                  <div className="row pt-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => setSelectedConsole(console.id)}
                    >
                      View More Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Consoles;
