import React from "react";
import "font-awesome/css/font-awesome.css";

const Like = (props) => {
  let icon = "fa fa-heart";
  if (!props.liked) icon += "-o";
  return (
    <i
      onClick={props.likeToggle}
      className={icon}
      aria-hidden="true"
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
