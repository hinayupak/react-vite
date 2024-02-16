import UseContext4 from "./UseContext4";
import React, { useContext } from "react";
import { UserContext } from "./UseContext1";

function UseContext3() {
  const user = useContext(UserContext);

  return (
    <>
      <div className="use-context">
        <div className="box">
          <h1>Component C</h1>
          <h2>Hello again {user}</h2>
          <UseContext4 />
        </div>
      </div>
    </>
  );
}

export default UseContext3;
