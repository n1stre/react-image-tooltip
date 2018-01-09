import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import ImgInput from "$containers/ImgInput";
import "./style.scss";

@reduxForm({
  form: 'tooltiped-image-form',
  destroyOnUnmount: true, 
  forceUnregisterOnUnmount: true, 
})
class TooltipedImageForm extends Component {

  render() {
    const { 
      handleSubmit, 
      submitAction,
      initialValues
    } = this.props;

    return <form 
      className = "tooltiped-image-form"
      onSubmit = { handleSubmit(submitAction) }>

      <ImgInput 
        inlineMode
        fieldname = "url"
        url={initialValues && initialValues.url}
      />
      
      <div>
        <Field 
          name = "text"
          component = "textarea"
          placeholder = "Enter tooltip text"
        />
      </div>

      <button 
        type="submit"
        className="btn">Submit
      </button>

    </form>
  }


}

export default TooltipedImageForm;