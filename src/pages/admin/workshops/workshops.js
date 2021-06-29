import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllWorkshops } from '../../../actions/workshopActions';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import moment from 'moment';
import './workshops.scss';

class Workshops extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: []
    }
  }

  componentDidMount() {
    this.props.getAllWorkshops();
  }

  componentWillReceiveProps = nextProps => {
    if (this.props.workshops !== nextProps.workshops) {
      this.setState({ workshops: nextProps.workshops });
    }
  }

  tableColumnData = [
    { dataField: '_id', text: 'Workshop ID', formatter: (cell) => this.setIdFormatter(cell), headerStyle: () => { return {width: '150px'}} },
    { dataField: 'name', text: 'Name' },
    { dataField: 'createdby', text: 'Editor Details', formatter: (cell) =>  this.setEditorFormatter(cell) },
    { dataField: 'actions', text: 'Action'}
  ]

  setIdFormatter(cell) {
    return ( <p className="badge user-badge rounded-pill bg-warning text-dark">{cell}</p> );
  }

  setEditorFormatter(cell) {
    return (
      <div>
      </div>
    );
  }

  render() {
    return (
      <div className="container p-4">
        <div className="card p-3">
          <h3 className="workshop-title">Workshops</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  workshops: state.workshopReducer.allWorkshops
});

const mapDispatchToProps = dispatch =>({
  getAllWorkshops: () => {
    dispatch(getAllWorkshops());
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Workshops);