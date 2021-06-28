import React, {Component} from 'react';
import './createPost.scss';
import {connect} from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import firebase from '../../firebase.config';

class CreatePost extends Component{
  constructor(props) {
    super(props);
    this.setPostDetails = thi.setPostDetails.bind(this);
  }

  setPostDetails = () => {
    return(
      <div className="row">
        <div className="col-md-6">
          <h6>Resource Persons</h6>
          <div className="row">
            {row.resourcepersons.length > 0 && row.resourcepersons.map((person, index) => (
              <div className="mb-1 col-md-4" key={index}>
                <img src={person.imageurl} className="created-person-img" />&nbsp;&nbsp;&nbsp;
                <h6 className="person-info m-0">{person.firstname}&nbsp;{person.lastname}</h6>
                <p><i className="fas fa-at"></i>&nbsp;&nbsp;{person.username}</p>
                <p><i className="fas fa-envelope"></i>&nbsp;&nbsp;{person.email}</p>
                <p><i className="fas fa-phone"></i>&nbsp;&nbsp;{person.phonenumber}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h6>Request Information</h6>
          <p><i className="fas fa-align-left"></i>&nbsp;{row.description}</p>
          <p><i className="fas fa-map-pin"></i>&nbsp;{row.venue}</p>
          <p><i className="fas fa-clock"></i>&nbsp;{moment(row.createdAt).format('LLLL')}</p>
          <h6 className="mt-1">Submitted Documents</h6>
          {row.resourceurls.length > 0 && row.resourceurls.map((item, index) => (
            <div key={index}> 
              <i className="fas fa-file-alt"></i>&nbsp;<a href={item} target="_blank">{firebase.storage().refFromURL(item).name}</a>
            </div>
          ))}
        </div>
      </div>
    )
  };

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
            <h5 className="modal-title" id="ModalLabel">Upload Conference</h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
           {this.props.setPostDetails()}
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