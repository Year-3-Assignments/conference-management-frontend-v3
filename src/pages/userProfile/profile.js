import React from 'react';
import './userProfilePage.scss';

let initialState = {};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div className="p-lg-3 profile-card">
        <div className="card">
          <div className="row">
            <div className="col-6">
              <img
                src="https://mdbootstrap.com/img/new/standard/nature/111.jpg"
                className="rounded-circle" width="250"
              />
            </div>
            <div className="col-6">
              <h2>Rusiru Abhisheak</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;