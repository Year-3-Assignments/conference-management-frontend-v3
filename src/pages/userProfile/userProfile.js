import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';

let initialState = {};

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <div>
        <h1>User Profile</h1>
      </div>
    );
  }
}

export default UserProfile;