import React, { Component } from 'react'
import {connect} from 'react-redux';
import { getAllResources } from '../../actions/resourceActions';
import BootstrapTable from 'react-bootstrap-table-next';

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
          this.setState(
            { 
                resources: nextProps.allResources 
            });
        }
    }

    render() {

        const products = this.state.resources;
        const columns = [{
          dataField: '_id',
          text: 'Resource ID'
        }, {
          dataField: 'name',
          text: 'Resource Title'
        }, {
          dataField: 'venue',
          text: 'Venue'
        }, {
            dataField: 'time',
            text: 'Time'
        }, {
            dataField: 'description',
            text: 'Description'
         },{
            dataField: 'status',
            text: 'Status'
         }
        //  ,{
        //     dataField: 'createdby',
        //     text: 'Resource People'
        //  }
        ];

        return (
            <div>
                <BootstrapTable keyField='_id' data={ products } columns={ columns } />
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
    }
  })

export default connect(mapStateToProps,mapDispatchToProps)(Reviewer);