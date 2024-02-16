import React, { useState, createContext } from "react";
import UseContext2 from "./UseContext2";

// Provider component
// user is now available to use for any child component without prop drilling
export const UserContext = createContext();

function UseContext1() {
  const [user, setUser] = useState("Joshua");

  return (
    <>
      <div className="use-context">
        <div className="box">
          <h1>Component A</h1>
          <h2>{`Hello ${user}`}</h2>
          <UserContext.Provider value={user}>
            <UseContext2 />
          </UserContext.Provider>
        </div>
      </div>
    </>
  );
}

export default UseContext1;
