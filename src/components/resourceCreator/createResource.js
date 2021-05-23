import React from 'react';
import Progress from '../progress/progress';
import firebase from '../../firebase.config';
import './createResource.scss';
import {NotificationContainer, NotificationManager} from 'react-notifications';

let formData = {};
let initialState = {
    resourceUrl: '',
    uploadPercentatge: 0,
    users: '',
    resourceName: '',
    venue: '',
    time: '',
    resourceType: '',
    description: '',
    status: '',
    isFormInvalid: false,
    buttonText: 'CREATE'
};

class CreateResource extends React.Component{
    constructor(props){
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.setUploadPercentage = this.setUploadPercentage.bind(this);
        this.onChange = this.onChange.bind(this);
        this.uploadResourceFile = this.uploadResourceFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.state = initialState;   
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }
    onFileChange(e){
        this.setState({ resource: e.target.files[0]});
    }
    setUploadPercentage(progress){
        this.setState({ uploadPercentatge: progress});
    }
    uploadResourceFile(e){
        e.preventDefault();
        if(this.state.resource !== '' ){
            let folderName = "Resources";
            let file = this.state.resource;
            let upload = firebase.storage().ref(`${folderName}/${file.name}`).put(file);

            upload.on('state_changed', (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setUploadPercentatge(progress);
              }, (error) => {
                console.log(error);
              }, () => {
                upload.snapshot.ref.getDownloadURL()
                .then(url => {
                  this.setState({ fileUrl: url});
                  NotificationManager.success('File uploaded successfully')
                  console.log(url)
                });
              });
            } else {
              NotificationManager.warning('Please select a file')
            }
    }

    validateResourceForm(){
        const data = {
            resourceUrl: this.state.resourceUrl && this.state.resourceUrl.trim().length > 0 ? this.state.resourceUrl : null,
            resourceName: this.state.resourceName && this.state.resourceName.trim().length > 0 ? this.state.resourceName : null,
            description: this.state.description && this.state.description.trim().length > 0 ? this.state.description : null,
        };
        formData = Object.assign({}, data);
        return true;
    }

    onSubmit(e){
        e.preventDefault();
        if(this.validateResourceForm()){
            let data = Object.values(formData).map(key => {
                return key !== null;
            });

            if(!data.includes(false)){
                let resource = {
                    resourceUrl:this.state.resourceUrl,
                    resourceName: this.state.resourceName,
                    description: this.state.description
                };

                console.log('RESOURCE DATA TO SEND', resource);
                NotificationManager.success('New Resource is created');
            }else{
                this.setState({ isFormInvalid: true});
                NotificationManager.warning('Please fill the input fields!')
            }
        }
    }

    render(){
        return(
            <div className="create-resource-form">
                     <div className="p-4 card">
          <h4>Create Resources</h4>
          <div className="form-group mb-3">
            <label className="form-text" htmlFor="files">Select Resource File</label>
            <div className="input-group">
              <input type="files" className="form-control" id="files" onChange={e => this.onFileChange(e)} onF />
              <button className="btn btn-info" type="button" onClick={this.uploadResourceFile}>UPLOAD</button>
            </div>
            {formData.resourceUrl===null && this.state.isFormInvalid ? <span className="text-danger validation-text p-0">Resource is required</span> : null}
          </div>
          <div className="mb-3">
            <Progress percentage={this.state.uploadPercentatge} />
          </div>

          <div className="form-group mb-3">
              <select className="form-control browser-default custom-select" id="users" name="users" onChange={this.onChange} value={this.state.users}>
                <option selected>Users</option>
                <option value="1">user 1</option>
                <option value="2">user 2</option>
                <option value="3">user 3</option>
              </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="resourceName" className="form-text">Resource Name</label>
            <input type="text" className="form-control" id="resourceName" name="resourceName" onChange={this.onChange} value={this.state.resourceName} />
            {formData.resourceName===null && this.state.isFormInvalid ? <span className="text-danger validation-text p-0">Resource name is required</span> : null}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="venue" className="form-text">Venue</label>
            <input type="text" className="form-control" id="venue" name="venue" onChange={this.onChange} value={this.state.venue} />
          </div>
          
          <div className="form-group mb-3">
            <label htmlFor="time" className="form-text">Time</label>
            <input type="text" className="form-control timepicker" id="time" name="time" onChange={this.onChange} value={this.state.time} />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="time" className="form-text"  name="resourceType" onChange={this.onChange} value={this.state.resourceType}> Resource Type  </label><br></br>
            <div className="form-check form-check-inline">
                <input className="form-check-input"  type="radio" name="inlineRadioOptions"  id="inlineRadio1" value="option1" />
                <label className="form-check-label" for="inlineRadio1">Conference</label>
                </div>
                 <div className="form-check form-check-inline">
                <input  className="form-check-input"  type="radio"  name="inlineRadioOptions" id="inlineRadio2"   value="option2"   />
                <label class="form-check-label" for="inlineRadio2">Workshop</label>
                </div>
            </div>

          <div className="form-group mb-3">
            <label htmlFor="description" className="form-text">Description</label>
            <textarea className="form-control" id="description" rows="3" name="description" onChange={this.onChange} value={this.state.description}></textarea>
            {formData.description===null && this.state.isFormInvalid ? <span className="text-danger validation-text p-0">Description is required</span> : null}
          </div>

          <div className="form-group mb-3">
            <label htmlFor="status" className="form-text">Status</label>
            <input type="text" placeholder="PENDING" className="form-control" id="status" name="status" onChange={this.onChange} value={this.state.status} />
          </div>
          
          <div className="d-flex justify-content-end">
            <a className="btn btn-info btn--pill" href="#!" role="button" onClick={this.onSubmit}>
              <i className="fas fa-cloud-upload-alt fa-lg"></i>&nbsp;&nbsp;CREATE
            </a>
          </div>
        </div>
        <NotificationContainer />
            </div>
        );
    }
}

export default CreateResource;