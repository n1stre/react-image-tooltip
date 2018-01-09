import React, { Component } from "react";
import { connect } from "react-redux";

import Layout from "$presentational/Layout";
import TooltipedImageForm from "../TooltipedImageForm";
import { NAME } from "../../../constants";
import { create } from "../../../actions";



@connect(null, { create })
class TooltipedImagesCreate extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(formData) {
    const {create, history} = this.props;
    create(formData)
      .then( () => history.push("/"))
      .catch( err => alert(err.message))
  }

  render() {
    return <Layout>
      <h2>Create New Image: </h2>
      <TooltipedImageForm submitAction = { this.onSubmit } />
    </Layout>
  }

}

export default TooltipedImagesCreate