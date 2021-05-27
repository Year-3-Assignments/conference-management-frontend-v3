import React from 'react';
import './userProfilePage.scss';
import {connect} from 'react-redux';
import {getUserAccount} from '../../actions/userActions';

let initialState = {
  firstName: '',
  lastName: '',
  userName: '',
  email:'',
  description:'',
  isEditClicked: false,
};

class EditProfile extends React.Component{
  constructor(props){
    super(props);
    this.onEditClick = this.onEditClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = initialState;
  }

  componentDidMount(){
    if(localStorage.getItem('token') !== null){
      this.props.getUserAccount();
    }
  }

  componentWillReceiveProps = (nextProps) =>{
    console.log(nextProps.getUser);
    if(this.props.getUser !== nextProps.getUser){
      console.log("User Information", nextProps.getUser);
      this.setState({
        firstName: nextProps.getUser.firstname,
        lastName: nextProps.getUser.lastname,
        description: nextProps.getUser.description,
        userName: nextProps.getUser.username,
        email: nextProps.getUser.email
      });
    } 
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onEditClick(e) {
    this.setState({ isEditClicked: !this.state.isEditClicked }, () => {
      this.setState({ buttonText: this.state.isEditClicked ? 'cancel': 'edit profile' })
    });
  }

  render(){
    return(
      <div className="">
        <div className="p-4 card">
          <h4>Edit Profile</h4>
          <div className="col-md-13">
          <div className="form-group mb-3">
            <label htmlFor="firstName" className="form-text">First Name</label>
            <input type="text" className="form-control" id="firstName" name="firstName" onChange={this.onChange} value={this.state.firstName} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="lastName" className="form-text">Last Name</label>
            <input type="text" className="form-control" id="lastName" name="lastName" onChange={this.onChange} value={this.state.lastName} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="userName" className="form-text">Username</label>
            <input type="text" className="form-control" id="userName" name="userName" onChange={this.onChange} value={this.state.userName} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-text">Email Address</label>
            <input type="text" className="form-control" id="email" name="email" onChange={this.onChange} value={this.state.email} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="description" className="form-text">Description</label>
            {!this.state.isEditClicked ?
              <p>{this.state.description}</p> :
              <textarea className="form-control mb-3" id="description" rows="2" name="description" onChange={this.onChange} value={this.state.description}></textarea>
            }
          </div>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <a className="btn btn-info btn--pill" role="button" onClick={this.onEditClick} type="button">Edit Profile</a>
          </div>
          </div> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  getUser: state.userReducer.getUser,
  getUserError: state.userReducer.getUserError
});

const mapDispatchToProps = dispatch =>({
  getUserAccount: () =>{
    dispatch(getUserAccount());
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(EditProfile);
