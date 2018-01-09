import React from 'react';

const FileInput = (props) => {
  const { input } = props; // from redux form
  
  return (
    <input 
      id       = { input.name }
      onChange = { input.onChange }
      onBlur   = { input.onBlur }
      accept   = { props.accept }
      type     = "file"
    />
  )
}

export default FileInput;