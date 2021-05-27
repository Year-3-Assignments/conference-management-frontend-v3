import React from 'react';
import './userProfilePage.scss';

class EditProfile extends React.Component{
  render(){
    return(
      <div className="">
        <div className="card">
          <h4>Edit Profile</h4>
          <div className="col-md-4">
            <div className="form-group mb-3">
              <label htmlFor="firstName" className="form-text">First Name</label>
              <input type="text" className="form-control" id="firstName" name="firstName" onChange={this.onChange} value={this.state.firstName} />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="lastName" className="form-text">Last Name</label>
              <input type="text" className="form-control" id="lastName" name="lastName" onChange={this.onChange} value={this.state.lastName} />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-text">Email address</label>
              <input type="text" className="form-control" id="email" name="email" onChange={this.onChange} value={this.state.email} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditProfile;