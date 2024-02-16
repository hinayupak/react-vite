import React, { useContext } from "react";
import { UserContext } from "./UseContext1";

// Consumer component

function UseContext4() {
  const user = useContext(UserContext);

  return (
    <>
      <div className="use-context">
        <div className="box">
          <h1>Component D</h1>
          <h2>Bye {user}</h2>
        </div>
      </div>
    </>
  );
}

export default UseContext4;
