import React, {Component} from 'react';
import './createPost.scss';

class CreatePost extends Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.data);
  }
  render() {
    return(
      <div>
        <div
        className="modal fade"
        id="modal"
        tabIndex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
        >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="ModalLabel">Upload Conference</h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">...</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary">Upload</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default CreatePost;