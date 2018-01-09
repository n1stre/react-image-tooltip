import React, { Component } from "react";
import { Field } from "redux-form";
import clasNames from "classnames";
import FileInput from "$presentational/FileInput";
import previewImgFallback from "./placeholder.png";
import "./style.scss";

class ImgInput extends Component {
  constructor() {
    super();
    this.onFileChange = this.onFileChange.bind(this);
    this.updateFileInput = this.updateFileInput.bind(this);
    this.appendPreviewImg = this.appendPreviewImg.bind(this);
    this.changeLogoUrl = this.changeLogoUrl.bind(this);
    this.normalizeValue = this.normalizeValue.bind(this);
    this.state = {
      url: null,
      file: null
    }
  }

  onFileChange(evt) {
    this.appendPreviewImg(evt.target);
    this.updateFileInput(evt.target)
  }

  updateFileInput(input) {
    if (input.files && input.files[0]) {
      const reader  = new FileReader();
      this.setState({ file: input.files[0] });
      reader.onload = e => this.changeLogoUrl(e.target.result)
      reader.readAsDataURL(input.files[0]);
    }
  }

  appendPreviewImg(input) {
    const assetHolder = input.parentNode;
    const previewImg  = assetHolder.querySelector('img');
    previewImg.onload = e => assetHolder.appendChild(previewImg)
  }

  changeLogoUrl(newUrl) {
    this.setState({ url: newUrl });
  }

  normalizeValue(value) {
    return this.props.inlineMode
      ? this.imgUrl
      : value
  }  

  render() {
    const className = clasNames("img-input-wrapper", {
      "img-input-wrapper--is-empty": this.isEmpty
    })
    return (
      <div className={className}>
        <label className="img-input">
          <Field 
            accept = "image/*"
            normalize = { this.normalizeValue }
            name = { this.props.fieldname }
            onChange  = { this.onFileChange }
            component = { FileInput }
          />
          <img 
            src = { this.imgUrl } 
            className = "img-input__preview"
          />
        </label>
      </div>
    )
  }

  get imgUrl() {
    return (
      this.state.url ||
      this.props.url || 
      previewImgFallback
    )
  }

  get isEmpty() {
    return (
      !this.state.url &&
      !this.props.url  
    )
  }
}

export default ImgInput;