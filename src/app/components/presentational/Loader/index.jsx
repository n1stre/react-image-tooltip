import React from "react";
import classNames from "classnames";
import "./style.scss";

const Loader = props => {
  const className = classNames(
    "loader", { "is-visible": props.isVisible }
  )

  return (
    <span className={className}>
      <span className="loader__spinner"></span>
    </span>
  )
}

export default Loader;