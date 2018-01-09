import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import Loader from "$presentational/Loader";
import Layout from "$presentational/Layout";
import TooltipedImagesTable from "../../presentational/TooltipedImagesTable";
import { NAME } from "../../../constants";
import { 
  fetchAll, 
  create, 
  update, 
  remove 
} from "../../../actions";

const mapStateToProps = (store) => ({ 
  isFetching: store[NAME].isFetching,
  isFetched: store[NAME].isFetched,
  entities: store[NAME].entities,
  fetchError: store[NAME].fetchError
})

const mapDispatchToProps = {
  fetchAll,
  create,
  update,
  remove,
}

@connect(mapStateToProps, mapDispatchToProps)
class TooltipedImagesContainer extends Component {
  constructor() {
    super()
    this.onImageDelete = this.onImageDelete.bind(this)
    this.onImageEdit = this.onImageEdit.bind(this)
    this.onImagePreview = this.onImagePreview.bind(this)
  }

  componentWillMount() {
    if (!this.props.isFetched) {
      this.props.fetchAll()
    }
  }

  onImageDelete(id) {
    if (confirm("Are you shure?")) {
      this.props.remove({ id })
    }
  }

  onImageEdit(id) {
    this.props.history.push(`${id}/edit`)
  }

  onImagePreview(id) {
    this.props.history.push(`${id}/preview`)
  }

  render() {
    return <Layout>
      <h2>Tooltiped Images: </h2>

      { !this.props.isFetched && 
        !this.props.fetchError && 
        this.loader 
      }

      { this.props.isFetched && 
        !this.props.fetchError &&
        <TooltipedImagesTable 
          onDelete={ this.onImageDelete }
          onEdit={ this.onImageEdit }
          onPreview={ this.onImagePreview }
          items={ this.props.entities } />
      }

      { !this.props.isFetched && 
        this.props.fetchError &&
        this.errorMessage
      }

      <Link 
        className="btn"
        to="/create">Create New Image
      </Link>

    </Layout>
  }

  get loader() {
    return <p>
      <span>Loading... </span>
      <Loader /> 
    </p>
  }

  get errorMessage() {
    return [
      <p key="a"><b>Error Occured!</b></p>,
      <p key="b">
        <span className="t-red">{ this.props.fetchError.text } </span>
        <button 
          onClick={ this.props.fetchAll }
          className="btn btn--yellow btn--sm">Try Again...
        </button>
      </p>
    ]
  }
}

export default TooltipedImagesContainer