import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

const propTypes = {
  url: PropTypes.string.isRequired,
  sm: PropTypes.bool,
  lg: PropTypes.bool,
}

const getDimensitons = ({ sm, lg }) => {
  if (lg) return { width: "300px", height: "300px" }
  if (sm) return { width: "50px", height: "50px" }
  return { width: "100px", height: "100px" }
}

const TooltipedImage = props => {
  const style = getDimensitons({ ...props })
  return (
    <span 
      className={ classNames("tooltiped-image", props.className) } 
      style={ style }>
      <img 
        className="tooltiped-image__img"
        src={ props.url } 
      />
      { props.text &&
        <span className="tooltiped-image__text-wrap">
          <span className="tooltiped-image__text">
            { props.text }
          </span>
        </span>
      }
    </span>
  )
}

TooltipedImage.propTypes = propTypes;

export default TooltipedImage;