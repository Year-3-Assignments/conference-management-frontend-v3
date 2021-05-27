import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getAllResources, chnageResourceState } from '../../actions/resourceActions';
import _ from 'lodash';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import firebase from '../../firebase.config';
import moment from 'moment';

class Reviewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            resources: []
        };
    }

    componentDidMount() {
        this.props.getAllResource();
    }

    componentWillReceiveProps = (nextProps) => {
      if (this.props.allResources !== nextProps.allResources) {
        this.setState({ resources: nextProps.allResources }, () => console.log(this.state.resources));
      }
    }

    setStatusFormatter(cell, row) {
      console.log('cell', cell)
      if (_.isEqual(cell, 'PENDING')) {
        return <span className="badge rounded-pill bg-warning text-dark"><strong>PENDING</strong></span>
      }
  
      if (_.isEqual(cell, 'APPROVED')) {
  
      }
    }

    setApprove(e, id) {
      var resource = {
        id: id,
        status: 'APPROVED'
      }
      this.props.chnageResourceState(resource);
    }

    manageStatus(row){
      return (<div>
        <button onClick={e => this.setApprove(e, row._id)}>Approve</button>
        <button>Reject</button>
      </div>)
    }
  
    tableColumnData = [
      { dataField: '_id', text: 'Request ID',  headerStyle: () => { return {width: '150px'}}},
      { dataField: 'time', text: 'Date & Time'},
      { dataField: 'name', text: 'Name'},
      { dataField: 'type', text: 'Type', formatter: col => col.toUpperCase()},
      { dataField: 'status', text: 'Status', formatter: (cell, row) => this.setStatusFormatter(cell, row)},
      { dataField: 'createdby', text: 'Requested By', formatter: (col, row) => <div><img src={col.imageurl} className="created-person-img" />&nbsp;&nbsp;{col.firstname}&nbsp;{col.lastname}</div>},
      { dataField: 'rejectorapprove', text: 'Reject/Approve', formatter: (col, row) => this.manageStatus(row)},
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
              data={ this.state.resources } 
              columns={ this.tableColumnData } 
              pagination={ paginationFactory() } 
              striped
              hover
              headerClasses="header-class"
              expandRow={this.expandRow}
            />
          </div>
        </div>
   
        )
    }
}

  const mapStateToProps = state =>({
    allResources: state.resourceReducer.allResources,
  });
  
  const mapDispatchToProps = dispatch =>({
    getAllResource: () =>{
      dispatch(getAllResources());
    },
    chnageResourceState: (resource) =>{
      dispatch(chnageResourceState(resource));
    },
  })

export default connect(mapStateToProps,mapDispatchToProps)(Reviewer);