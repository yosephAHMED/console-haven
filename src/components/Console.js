import axios from "axios";
import React, { useEffect, useState } from "react";

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
    return <p>Loading...</p>;
  }

  return (
    <div>
      <img src={console.image} alt={console.name} />
      <h1>{console.name}</h1>
      <h2>{console.price}</h2>
      <p>{console.country}</p>
      <p>{console.releaseYear}</p>
    </div>
  );
}

export default Console;
