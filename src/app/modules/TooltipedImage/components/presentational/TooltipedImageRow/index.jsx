import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const propTypes = {
  onEdit: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

const TooltipedImageRow = props => {
  return (
    <tr className="tooltiped-image-row">
      <td>{ props.id }</td>
      <td className="tooltiped-image-row__img-cell">
        <img 
          className="tooltiped-image-row__img"
          src={ props.url }
        />
      </td>
      <td>{ props.text }</td>
      <td className="tooltiped-image-row__actions">
        <button 
          type="button"
          onClick={ () => props.onEdit(props.id) } 
          className="btn btn--sm">Edit</button>
        <button 
          type="button"
          onClick={ () => props.onPreview(props.id) } 
          className="btn btn--sm btn--yellow">Preview</button>
        <button 
          type="button"
          onClick={ () => props.onDelete(props.id) } 
          className="btn btn--sm btn--red">Remove</button>
      </td>
    </tr>
  )
}

TooltipedImageRow.propTypes = propTypes;

export default TooltipedImageRow;