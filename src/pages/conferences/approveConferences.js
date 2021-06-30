import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllApprovedConferences } from '../../actions/conferenceActions';
import _ from 'lodash';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import moment from 'moment';

class ApproveConferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conferences: [],
    }
  }

  componentDidMount() {
      this.props.getConferencesForAdmin();
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.getadminconferences !== nextProps.getadminconferences) {
        this.setState({ conferences: nextProps.getadminconferences }, () => console.log(this.state.conferences));
      }
  }

  tableColumnData = [
    { dataField: '_id', text: 'Request ID',  headerStyle: () => { return {width: '150px'}}},
    { dataField: 'time', text: 'Date & Time'},
    { dataField: 'name', text: 'Name'},
    { dataField: 'type', text: 'Type', formatter: col => col.toUpperCase()},
    { dataField: 'status', text: 'Status', formatter: (cell, row) => this.setStatusFormatter(cell, row)},
    { dataField: 'createdby', text: 'Requested By', formatter: (col, row) => <div><img src={col.imageurl} className="created-person-img" />&nbsp;&nbsp;{col.firstname}&nbsp;{col.lastname}</div>},
  ];

  expandRow = {
    showExpandColumn: true,
    renderer: row => (

      <div className="row">

        <div className="col-md-6">
          <h6>Resource Persons</h6>
          <div className="row">
            {row.resourcepersons.length > 0 && row.resourcepersons.map((person, index) => (
              <div className="mb-1 col-md-4" key={index}>
                <img src={person.imageurl} className="created-person-img" />&nbsp;&nbsp;&nbsp;
                <h6 className="person-info m-0">{person.firstname}&nbsp;{person.lastname}</h6>
                <p><i className="fas fa-at"></i>&nbsp;&nbsp;{person.username}</p>
                <p><i className="fas fa-envelope"></i>&nbsp;&nbsp;{person.email}</p>
                <p><i className="fas fa-phone"></i>&nbsp;&nbsp;{person.phonenumber}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <h6>Request Information</h6>
          <p><i className="fas fa-align-left"></i>&nbsp;{row.description}</p>
          <p><i className="fas fa-map-pin"></i>&nbsp;{row.venue}</p>
          <p><i className="fas fa-clock"></i>&nbsp;{moment(row.createdAt).format('LLLL')}</p>
          <h6 className="mt-1">Submitted Documents</h6>
          {row.resourceurls.length > 0 && row.resourceurls.map((item, index) => (
            <div key={index}> 
              <i class="fas fa-file-alt"></i>&nbsp;<a href={item} target="_blank">{firebase.storage().refFromURL(item).name}</a>
            </div>
          ))}
        </div>

      </div>
    )
  };

  render() {
    return (
        <div className="container">

        <h4 className="mt-3">Resources</h4>
        <div className="card p-4">
          <BootstrapTable 
            keyField='_id' 
            data={ this.state.conferences } 
            columns={ this.tableColumnData } 
            pagination={ paginationFactory() } 
            striped
            hover
            headerClasses="header-class"
            expandRow={this.expandRow}
          />

        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
    getadminconferences: state.conferenceReducer.getadminconferences,
});

const mapDispatchToProps = dispatch =>({
    getConferencesForAdmin: () =>{
        dispatch(getConferencesForAdmin());
      },
});

export default connect(mapStateToProps,mapDispatchToProps)(ConferenceSummary);