import React, {Component} from 'react';
import './createConference.scss';
import {updateConference} from '../../actions/conferenceActions';
import Progress from '../progress/progress';
import {connect} from 'react-redux';
import _ from 'lodash';
import moment from 'moment';
import firebase from '../../firebase.config';
import {NotificationContainer, NotificationManager} from 'react-notifications';


let formData = {};

class CreateConference extends Component{
  constructor(props) {
    super(props);
    this.state = {
      publishTitle: '',
      publishDescription: '',
      image: '',
      imageUrl: '',
      rowImage: '',
      formNotValid: false,
      uploadPercentage: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.setImagePreview = this.setImagePreview.bind(this);
    this.setUploadPercentage = this.setUploadPercentage.bind(this);
    this.setImageUrl = this.setImageUrl.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  setImageUrl = ({image}) => {
    this.setState({ image: image});
  }
  setUploadPercentage = (progress) => {
    this.setState({ uploadPercentage: progress });
  }

  setImagePreview(e) {
    const image = e.target.files[0];
    this.setState({ 
      image: URL.createObjectURL(image),
      rowImage: image
    });
  }

  uploadImage = (e) => {
    e.preventDefault();
    if(this.state.rowImage !== null) {
      let folderName = 'Conference-Images';
      let file = this.state.rowImage;
      let upload = firebase.storage().ref(`${folderName}/${this.state.publishTitle}`).put(file);

      upload.on('state_changed', (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setUploadPercentage(progress);
      }, (error) => {
        console.log(error);
      }, () => {
        upload.snapshot.ref.getDownloadURL().then((url) => {
          this.setImageUrl({ imageUrl: url });
          NotificationManager.success('Image uploaded successfully');
        });
      });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(this.validateForm()) {
      let data = Object.values(formData).map(key => {
        console.log(key);
        return key != null;
      });
      if(!data.includes(false)) {
        let publishData = {
          name: this.state.publishTitle,
          description: this.state.publishDescription,
          image_url: this.state.imageUrl
        };

        console.log("DATA TO SEND", publishData);
        this.props.updateConference(publishData);
        NotificationManager.success('Publish data Successfully sent to Admin', 'Success');
      } else {
        this.setState({ formNotValid: true}, () => {
          NotificationManager.warning('Please Check the inpu Fields');
        });
      }
    }
  }

  validateForm() {
    const data = {
      name: this.state.publishTitle && this.state.publishTitle.trim().length > 0 ? this.state.publishTitle : null,
      description: this.state.publishDescription && this.state.publishDescription.trim().length > 0 ? this.state.publishDescription : null,
      image_url: this.state.imageUrl && this.state.imageUrl.trim().length > 0 ? this.state.imageUrl : null
    };
    formData = Object.assign({}, data);
    return true;
  }

  render() {
    return(
      <div>
        <div
          className="modal fade"
          id="create-conference"
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
                <i>Above information are appear on the live webpage with the data that you insert below. After you create this post for Conference it will send to the 
                  system admin for the approval. When it got approved, then it will appear to the users as Conference.
                </i>
              </small>
            </p>
            <hr/>
            <div className="row m-0 mb-2">
              <label htmlFor="publishTitle" className="form-label p-0">Publish Title</label>
              <input type="text" id="publishTitle" className="form-control" name="publishTitle" value={this.state.publishTitle} onChange={this.onChange} />
              {formData.name===null && this.state.formNotValid ? <span className="text-danger validation-text p-0"> Publish Title is required</span> : null}
            </div>
            <div className="row m-0 mb-3">
              <label htmlFor="publishDescription" className="form-label p-0">Publish Note</label>
              <textarea type="text" id="publishDescription" rows="4" className="form-control" name="publishDescription" value={this.state.publishDescription} onChange={this.onChange}/>
              {formData.description===null && this.state.formNotValid ? <span className="text-danger validation-text p-0">Publish description is required</span> : null}
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Publish Image</label>
              <div className="input-group">
                <input type="file" className="form-control" id="image" name="image" onChange={e => this.setImagePreview(e)} />
                <button className="btn btn-color btn-sm" type="button" onClick={this.uploadImage}>UPLOAD</button>
              </div>
             </div>
            <div className="mb-3">
              <Progress percentage={this.state.uploadPercentage} />
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
              <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Upload</button>
            </div>
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
    )
  }
}

const mapStateToProps = state => ({
  updateConference: state.conferenceReducer.updateconference
});

const mapDispatchToProps = dispatch => ({
  updateConference: conference => {
    dispatch(updateConference(conference));
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(CreateConference);