import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Layout from "$presentational/Layout";
import TooltipedImage from "../../presentational/TooltipedImage";
import { NAME } from "../../../constants";
import "./style.scss";

const mapStateToProps = (state, ownProps) => ({ 
  currentImage: state[NAME].entities.filter(
    item => item.id == ownProps.match.params.id
  )[0],
})

@connect(mapStateToProps)
class TooltipedImagePreview extends Component {

  render() {
    const { currentImage } = this.props;
    if (!currentImage) { return <Redirect to="/" /> }

    return <Layout>
      <div className="preview-container">
        <h2>Image #{currentImage.id} Preview: </h2>
        <TooltipedImage {...currentImage} lg/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum cupiditate, incidunt quis non. Minima, et. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia eligendi placeat, sapiente minima accusamus ipsum quas repudiandae nobis, cumque tenetur! <TooltipedImage {...currentImage} sm /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sapiente, illum dicta iure? Nemo quae odio consequatur, totam temporibus error sint sunt deleniti consequuntur. Unde expedita similique dolorum ipsam, possimus perspiciatis, non nobis molestiae in numquam modi placeat facilis! Amet sunt, possimus. Libero, possimus, ut accusantium soluta sint commodi a.
        </p>
      </div>
    </Layout>
  }

}

export default TooltipedImagePreview