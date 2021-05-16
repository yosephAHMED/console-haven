import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

function Console(props) {
  const [console, setConsole] = useState(null);

  useEffect(
    function () {
      axios
        .get(`http://csc225.mockable.io/consoles/${props.selectedConsole}`)
        .then(function (response) {
          setConsole(response.data);
        });
    },
    [props.selectedConsole]
  );

  if (!console) {
    return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />;
  }

  return (
    <div className="container-sm">
      <div className="card bg-primary my-5">
        <img src={console.image} className="card-img-top" alt={console.name} />
        <div className="card-body">
          <h1 className="card-title display-3">{console.name}</h1>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item font-weight-bold">
            Price: ${console.price}
          </li>
          <li className="list-group-item">Country: {console.country}</li>
          <li className="list-group-item">
            Release Year: {console.releaseYear}
          </li>
        </ul>
        <div className="card-body row d-flex justify-content-center">
          <Link to="#">
            <button type="button" className="btn btn-success mr-2">
              Bookmark
            </button>
          </Link>
          <Link to="#">
            <button type="button" className="btn btn-danger ml-2">
              Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Console;
