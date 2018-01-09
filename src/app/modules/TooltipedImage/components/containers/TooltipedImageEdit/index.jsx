import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Layout from "$presentational/Layout";
import TooltipedImageForm from "../TooltipedImageForm";
import { NAME } from "../../../constants";
import { update } from "../../../actions";


const mapStateToProps = (state, ownProps) => ({ 
  currentImage: state[NAME].entities.filter(
    item => item.id == ownProps.match.params.id
  )[0],
})

const mapDispatchToProps = { update };

@connect(mapStateToProps, mapDispatchToProps)
class TooltipedImageEdit extends Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(formData) {
    const {update, history} = this.props;

    update(formData)
      .then( () => history.push("/"))
      .catch( err => alert(err.message))
  }

  render() {

    if (!this.props.currentImage) {
      return <Redirect to="/" />
    }

    return <Layout>
      <h2>Create New Image: </h2>
      <TooltipedImageForm 
        submitAction = { this.onSubmit } 
        initialValues = { this.props.currentImage }
      />
    </Layout>
  }

}

export default TooltipedImageEdit