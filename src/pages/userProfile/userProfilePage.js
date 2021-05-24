import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
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
        <Profile />
      </div>
    );
  }
}

export default UserProfilePage;