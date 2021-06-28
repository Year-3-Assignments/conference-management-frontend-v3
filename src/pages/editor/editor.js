import React from 'react';
import {connect} from 'react-redux';
import {getEditorResources} from '../../actions/resourceActions';
import _ from 'lodash';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './editor.scss';
import moment from 'moment';
import firebase from '../../firebase.config';

const initialState = {
  resources:[],
  users:[]
};

class Editor extends React.Component{
  constructor(props){
    super(props);
    this.state = initialState;
  }

  componentDidMount(){
    if(!_.isNull(localStorage.getItem('token'))){
      this.props.getEditorResources();
    }
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.editorResources !== nextProps.editorResources) {
      this.setState({ resources: nextProps.editorResources }, () => console.log(this.state.resources));
    }
  }

  manageStatus(row){
    return (
    <div>
      <button>Create Post</button>
    </div>)
  }

  manageStatusActions(col){
    return (
    <div>
      <button 
        className="btn btn-primary" 
        data-mdb-toggle="modal"
        data-mdb-target="#modal">
        Create Conference
      </button>
      <div
        className="modal fade"
        id="modal"
        tabindex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalLabel">Upload Conference</h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        <div className="modal-body">...</div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal">Cancel</button>
          <button type="button" className="btn btn-primary">Upload</button>
        </div>
      </div>
    </div>
  </div>
  <button 
    className="btn btn-primary" 
    data-mdb-toggle="modal"
    data-mdb-target="#modal">
    Create Workshop
  </button>
  <div
    class="modal fade"
    id="modal"
    tabindex="-1"
    aria-labelledby="ModalLabel1"
    aria-hidden="true"
  >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ModalLabel1">Upload Workshop</h5>
        <button
          type="button"
          class="btn-close"
          data-mdb-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
    <div class="modal-body">...</div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary">Upload</button>
    </div>
  </div>
  </div>
  </div>
    </div>)
  }

  tableColumnData = [
    { dataField: '_id', text: 'Request ID',  headerStyle: () => { return {width: '150px'}}},
    { dataField: 'time', text: 'Date & Time'},
    { dataField: 'name', text: 'Name'},
    { dataField: 'type', text: 'Type', formatter: col => col.toUpperCase()},
    { dataField: 'status', text: 'Status', formatter: (cell, row) => this.setStatusFormatter(cell, row)},
    { dataField: 'createdby', text: 'Requested By', formatter: (col, row) => <div><img src={col.imageurl} className="created-person-img" />&nbsp;&nbsp;{col.firstname}&nbsp;{col.lastname}</div>},
    { dataField: 'createpost', text: 'Create Post', formatter: (col, row) => this.manageStatus(row)},
    { dataField: 'actions', text: 'Actions', formatter: (col, row) => this.manageStatusActions(row)},
  ];

  setStatusFormatter(cell, row) {
    if (_.isEqual(cell, 'PENDING')) {
      return <span className="badge rounded-pill bg-warning text-dark"><strong>PENDING</strong></span>
    }

    if (_.isEqual(cell, 'APPROVED')) {
      return <span className="badge rounded-pill bg-success text-dark"><strong>APPROVED</strong></span>
    }
  }

  expandRow = {
    showExpandColumn: true,
    renderer: row => (

      <div className="row">

        <div className="col-md-7">
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
            wrapperClasses="table-responsive"
          />
        </div>
      </div>
 
      )
  }
}

const mapStateToProps = state =>({
  editorResources: state.resourceReducer.editorResources,
});

const mapDispatchToProps = dispatch =>({
  getEditorResources: () =>{
    dispatch(getEditorResources());
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(Editor);