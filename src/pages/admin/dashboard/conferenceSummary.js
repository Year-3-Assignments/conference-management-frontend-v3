import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getConferencesForAdmin } from '../../../actions/conferenceActions';
import './dashboard.scss';
import LineChart from '../../../components/charts/lineChart';

class ConferenceSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conferences: []
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token') !== null && 
      localStorage.getItem('role') === 'ROLE_ADMIN' &&
      this.props.conference === null) {
      this.props.getConferencesForAdmin();
    }
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.conference !== nextProps.conference) {
      this.setState({ conferences: nextProps.conference });
    }
  }

  findMonth(dateString) {
    let date = new Date(dateString);
    return date.getMonth();
  }

  makeDateArray() {
    let monthCounts = new Array(12).fill(0);

    if (this.state.conferences.length > 0) {
      for (let conference of this.state.conferences) {
        const MONTH = parseInt(this.findMonth(conference.startdate));
        monthCounts[MONTH] += 1;
      }
    }
    return monthCounts;
  }

  render() {
    return (
      <div className="card p-3">
        <LineChart months={this.makeDateArray()} />
      </div>
    );
  }
}

const mapStateToProps = state =>({
  conference: state.conferenceReducer.getadminconferences,
});

const mapDispatchToProps = dispatch =>({
  getConferencesForAdmin: () => {
    dispatch(getConferencesForAdmin());
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(ConferenceSummary);

