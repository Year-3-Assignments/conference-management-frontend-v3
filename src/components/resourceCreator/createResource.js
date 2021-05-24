import React from 'react';
import Progress from '../progress/progress';
import firebase from '../../firebase.config';
import './createResource.scss';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

let formData = {};
let initialState = {
    uploadPercentatge: 0,
    users: [],
    resourceUrls: [],
    resourceName: '',
    resources: [],
    venue: '',
    time: new Date(),
    resourceType: '',
    description: '',
    status: '',
    isFormInvalid: false,
    buttonText: 'CREATE'
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

class CreateResource extends React.Component{
    constructor(props){
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.setUploadPercentage = this.setUploadPercentage.bind(this);
        this.onChange = this.onChange.bind(this);
        this.uploadResourceFile = this.uploadResourceFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.state = initialState;   
    }

    onChange(e){
      this.setState({ [e.target.name]: e.target.value});
    }

    onTimeChange(time) {
      this.setState({ time: time }, () => {
        console.log('time', this.state.time)
      });
    }

    onFileChange(e){
      this.setState({ resources: e.target.files}, () => {
        console.log(this.state.resources)
      });
    }

    setUploadPercentage(progress){
      this.setState({ uploadPercentatge: progress});
    }

    uploadResourceFile(e){
      e.preventDefault();
      if(this.state.resource !== '' ){
        let folderName = "Resources";
        let files = this.state.resources;
        
        for (let i = 0; i < files.length; i++) {
          let upload = firebase.storage().ref(`${folderName}/${files[i].name}`).put(files[i]);

          upload.on('state_changed', (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            this.setUploadPercentage(progress);
          }, (error) => {
            console.log(error);
          }, () => {
            upload.snapshot.ref.getDownloadURL()
            .then(url => {
              this.state.resourceUrls.push(url);
              NotificationManager.success('File uploaded successfully')
            });
          });
        }
      } else {
        NotificationManager.warning('Please select a file')
      }
    }

    validateResourceForm(){
      const data = {
        resourceurls: this.state.resourceUrls && this.state.resourceUrls.length > 0 ? this.state.resourceUrls : null,
        resourceName: this.state.resourceName && this.state.resourceName.trim().length > 0 ? this.state.resourceName : null,
        venue: this.state.venue && this.state.venue.trim().length > 0 ? this.state.venue : null,
        users: this.state.users && this.state.users.length > 0 ? this.state.users : null,
        resourcetype: this.state.resourceType && this.state.resourceType.trim().length > 0 ? this.state.resourceType : null,
        description: this.state.description && this.state.description.trim().length > 0 ? this.state.description : null,
      };
      formData = Object.assign({}, data);
      return true;
    }

    onSubmit(e){
      e.preventDefault();
      console.log('resources', this.state.resourceUrls)
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
      return (
        <div className="create-resource-form">
          <div className="p-4 card">
            <h4>Send New Request</h4>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label htmlFor="resourceName" className="form-text">Resource Name</label>
                  <input type="text" className="form-control" id="resourceName" name="resourceName" onChange={this.onChange} value={this.state.resourceName} />
                  {formData.resourceName===null && this.state.isFormInvalid ? <span className="text-danger validation-text p-0">Resource name is required</span> : null}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label htmlFor="venue" className="form-text">Venue</label>
                  <input type="text" className="form-control" id="venue" name="venue" onChange={this.onChange} value={this.state.venue} />
                  {formData.venue===null && this.state.isFormInvalid ? <span className="text-danger validation-text p-0">Venue is required</span> : null}
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group mb-3">
                  <label htmlFor="time" className="form-text">Date & Time</label><br/>
                  <DatePicker
                    selected={this.state.time}
                    onChange={this.onTimeChange}
                    timeInputLabel="Time:"
                    dateFormat="MM/dd/yyyy h:mm aa"
                    showTimeInput
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="resourceName" className="form-text">Resource Persons</label>
              <Select
                defaultValue={[options[0], options[1]]}
                isMulti
                name="colors"
                options={options}
                className="basic-multi-select"
                classNamePrefix="select"
              />
              {formData.users===null && this.state.isFormInvalid ? <span className="text-danger validation-text p-0">Resource persons are required</span> : null}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="description" className="form-text">Description</label>
              <textarea className="form-control" id="description" rows="3" name="description" onChange={this.onChange} value={this.state.description}></textarea>
              {formData.description===null && this.state.isFormInvalid ? <span className="text-danger validation-text p-0">Description is required</span> : null}
            </div>
            <div className="form-group mb-3">
              <label htmlFor="time" className="form-text"  name="resourceType" onChange={this.onChange} value={this.state.resourceType}>Resource Type</label><br></br>
              <div className="form-check form-check-inline">
                <input className="form-check-input"  type="radio" name="inlineRadioOptions"  id="resource-conference" value="conference" />
                <label className="form-check-label" htmlFor="resource-conference">Conference</label>
              </div>
              <div className="form-check form-check-inline">
                <input  className="form-check-input"  type="radio"  name="inlineRadioOptions" id="resource-workshop" value="workshop" />
                <label className="form-check-label" htmlFor="resource-workshop">Workshop</label>
              </div><br/>
              {formData.resourcetype===null && this.state.isFormInvalid ? <span className="text-danger validation-text p-0">Resource type is required</span> : null}
            </div>
            <div className="form-group mb-3">
              <label className="form-text" htmlFor="files">Select Resource File</label>
              <div className="input-group">
                <input type="file" className="form-control" multiple id="files" onChange={e => this.onFileChange(e)} />
                <button className="btn btn-info" type="button" onClick={this.uploadResourceFile}>UPLOAD</button>
              </div>
              {formData.resourceurls===null && this.state.isFormInvalid ? <span className="text-danger validation-text p-0">Resources are required</span> : null}
            </div>
            <div className="mb-3">
              <Progress percentage={this.state.uploadPercentatge} />
            </div>
            <div className="d-flex justify-content-end">
              <a className="btn btn-info btn--pill" href="#!" role="button" onClick={this.onSubmit}>
                <i className="fas fa-cloud-upload-alt fa-lg"></i>&nbsp;&nbsp;submit
              </a>
            </div>
          </div>
          <NotificationContainer />
        </div>
      );
    }
}

export default CreateResource;