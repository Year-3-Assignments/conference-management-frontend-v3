import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserNotifications } from '../../../actions/userActions';
import Notification from '../../../components/notification/notification';

class AdminNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token') !== null) {
      this.props.getUserNotifications();
    }
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.notifications !== nextProps.notifications) {
      this.setState({ notifications: nextProps.notifications });
    }
  }

  render() {
    return (
      <div className="card p-3 mt-4">
        <h4 className="payment-title">Recent Notifications</h4>
        {this.state.notifications && this.state.notifications.length > 0 ?
          <div>
            {this.state.notifications.slice(0, 10).map((notification, index) => (
              <div key={index}>
                <Notification id={notification._id} from={notification.from} message={notification.message} />
              </div>
            ))}
          </div>
        :
          null
        }
      </div>
    );
  }
}

const mapStateToProps = state =>({
  notifications: state.userReducer.usernotifications
});

const mapDispatchToProps = dispatch =>({
  getUserNotifications: () => {
    dispatch(getUserNotifications());
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(AdminNotifications);