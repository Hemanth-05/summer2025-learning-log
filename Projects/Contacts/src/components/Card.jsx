import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.Details.name}</h2>
          <img
            className="circle-img"
            src={props.Details.imgURL}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>{props.Details.phone}</p>
          <p>{props.Details.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
