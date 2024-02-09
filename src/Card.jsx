import { useState } from "react";
import profilePic from "./assets/pp.jpg";

function Card(props) {
  const [sList, setSList] = useState(props.sList);
  console.log(sList);

  return (
    <>
      <div className="card">
        <img
          className="card-image"
          src={profilePic}
          alt="Profile picture"
        ></img>
        <h2 className="card-title">Joshua</h2>
        <p className="card-text">Web Developer</p>
      </div>
    </>
  );
}

export default Card;
