import React from 'react';
import Profile from './profile';

let initialState = {};

class UserProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-3">
            <Profile />
          </div>
          <div className="col-md-9">
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfilePage;