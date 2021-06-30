import React, {Component} from 'react';
import {connect} from 'react-redux';
import {connect} from 'react-redux';

import _ from 'lodash';

const initialState = {
  resources:[],
  users:[]
};


class Workshops extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
  }

  componentDidMount() {

  }

  componentWillReceiveProps = (nextProps) => {

  }
  
  render() {
    return(
      <div className="card">
        <h1 className="center">WORKSHOPS</h1>
        {this.props.data.resourcepersons && this.props.data.resourcepersons.length > 0 ? 
          <div className="row"> 
          {this.props.data.resourcepersons.map((person, index) => (
            <div className="mb-1 col-md-4" key={index}>
              <h2>Workshop Topic : "{this.props.data.name}"</h2>
              <img class="rounded-circle" alt="100x100" src={person.imageurl}
              data-holder-rendered="true"/>&nbsp;&nbsp;&nbsp;
              <h3 className="person-info m-0">{person.firstname}&nbsp;{person.lastname}</h3>
            </div>
          ))}
          </div>
          :
          null
        }
      </div> 
    )
  }
}

const mapStateToProps = state => {

};

const mapDispatchToProps = dispatch => ({
  
  
});

export default Workshops;