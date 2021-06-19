import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { connect } from 'react-redux';
import './dashboard.scss';
import Overview from './overview';

class DashBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 col-sm-12 col-lg-4">
            <Overview />
          </div>
          <div className="col-md-7 col-sm-12 col-lg-8">

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch =>({

})
export default connect(mapStateToProps,mapDispatchToProps)(DashBoard);
