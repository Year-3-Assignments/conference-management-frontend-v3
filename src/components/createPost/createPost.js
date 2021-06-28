import React, {Component} from 'react';
import './createPost.scss';
import {connect} from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import firebase from '../../firebase.config';

class CreatePost extends Component{
  constructor(props) {
    super(props);
    this.state = {
      publishTitle: '',
      publishDescription: '',
      image: '',
      publishImage: ''
    }
  }

  setImagePreview(e) {
    const image = e.target.files[0];
    this.setState({ image: URL.createObjectURL(image) });
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
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
            <h5 className="modal-title" id="ModalLabel">New Post</h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6 className="editor-title">Resource Persons</h6>
            {this.props.data.resourcepersons && this.props.data.resourcepersons.length > 0 ? 
              <div className="row">
                {this.props.data.resourcepersons.map((person, index) => (
                  <div className="mb-1 col-md-4" key={index}>
                    <img src={person.imageurl} className="created-person-img" />&nbsp;&nbsp;&nbsp;
                    <h6 className="person-info m-0">{person.firstname}&nbsp;{person.lastname}</h6>
                    <p><i className="fas fa-at"></i>&nbsp;&nbsp;{person.username}</p>
                    <p><i className="fas fa-envelope"></i>&nbsp;&nbsp;{person.email}</p>
                    <p><i className="fas fa-phone"></i>&nbsp;&nbsp;{person.phonenumber}</p>
                  </div>
                ))}
              </div>
            :
              null
            }
            <div className="row">
              <div className="col-md-6">
                <h6 className="editor-title mt-3">Request Information</h6>
                <p><i className="fas fa-align-left"></i>&nbsp;{this.props.data.description}</p>
                <p><i className="fas fa-map-pin"></i>&nbsp;{this.props.data.venue}</p>
                <p><i className="fas fa-clock"></i>&nbsp;{moment(this.props.data.createdAt).format('LLLL')}</p>
              </div>
              <div className="col-md-6">
              <h6 className="mt-3 editor-title">Submitted Documents</h6>
                {this.props.data.resourceurls && this.props.data.resourceurls.length > 0 && this.props.data.resourceurls.map((item, index) => (
                  <div key={index}> 
                    <i className="fas fa-file-alt"></i>&nbsp;<a href={item} target="_blank">{firebase.storage().refFromURL(item).name}</a>
                  </div>
                ))}
              </div>
            </div>
            <hr/>
            <p className="text-muted">
              <small className="editor-note-title">Note for the editor</small> :
              <small>
                <i>Above information are appear on the live webpage with the data that you insert below. After you create this post it will send to the 
                  system admin for the approval. When it got approved, then it will appear to the users
                </i>
              </small>
            </p>
            <hr/>
            <div className="row m-0 mb-2">
              <label htmlFor="publishTitle" className="form-label p-0">Publish Title</label>
              <input type="text" id="publishTitle" className="form-control" name="publishTitle" />
            </div>
            <div className="row m-0 mb-3">
              <label htmlFor="publishNote" className="form-label p-0">Publish Note</label>
              <textarea type="publishNote" id="publishNote" rows="4" className="form-control" name="publishNote" />
            </div>
            <div className="mb-3">
              <label htmlFor="profile-image" className="form-label">Publish Image</label>
              <div className="input-group">
                <input type="file" className="form-control" id="profile-image" name="imageUrl" onChange={e => this.setImagePreview(e)} />
                <button className="btn btn-color btn-sm" type="button">UPLOAD</button>
              </div>
            </div>
            {this.state.image && this.state.image !== '' ?
              <div>
                <img src={this.state.image} className="upload-img" />
              </div>
            :
              null
            }
          </div>  
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

const mapStateToProps = state =>({
  editorResources: state.resourceReducer.editorResources,
});

const mapDispatchToProps = dispatch =>({
  getEditorResources: () =>{
    dispatch(getEditorResources());
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(CreatePost);