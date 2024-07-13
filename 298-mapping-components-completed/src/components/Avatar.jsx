import React from "react";

// Make sure you pass in the "props"

function Avatar(props) {
  return <img className="circle-img" src={props.img} alt="avatar_img" />;
}

export default Avatar;
