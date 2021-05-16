import React, { useEffect, useState } from "react";
import axios from "axios";
import Console from "./Console";

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
        <button onClick={() => setSelectedConsole(null)}>Reset</button>
      </div>
    );
  }

  if (consoles.length === 0) {
    return <p>Loading!</p>;
  }

  return (
    <div>
      {consoles.map(function (console) {
        return (
          <p key={console.id}>
            <button onClick={() => setSelectedConsole(console.id)}>
              {console.name}
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default Consoles;
