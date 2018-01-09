import React from "react";
import PropTypes from "prop-types";
import TooltipedImageRow from "../TooltipedImageRow";
import "./style.scss"

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      text: PropTypes.string
    }).isRequired
  ).isRequired
}

const TooltipedImagesTable = props => {
  return ( 
    <table className="tooltiped-images-table">
      <thead className="tooltiped-images-table__head">
        <tr>
          <th>ID</th>
          <th>Preview</th>
          <th>Tooltip</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        { props.items.map((item, idx) => <TooltipedImageRow {...item}
          key={idx}
          onPreview= {props.onPreview}
          onDelete={props.onDelete}
          onEdit={props.onEdit} />
        )}
      </tbody>
    </table>
  )
}

TooltipedImagesTable.propTypes = propTypes;

export default TooltipedImagesTable;