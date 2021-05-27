import React from 'react';
import './userProfilePage.scss';
import { NotificationManager } from 'react-notifications';
import {connect} from 'react-redux';
import {getUserAccount} from '../../actions/userActions';

let initialState = {
  firstName: '',
  lastName: '',
  userName: '',
  description: '',
  profileImage: '',
  isEditClicked: false,
  buttonText: 'edit profile'
};

class Profile extends React.Component {
  constructor(props) {
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
        profileImage: nextProps.getUser.imageUrl
      });
    } 
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onEditClick(e) {
    this.setState({ isEditClicked: !this.state.isEditClicked }, () => {
      this.setState({ buttonText: this.state.isEditClicked ? 'cancel': 'edit profile' })
    });
  }

  render() {
    return (
      <div>
        <div className="">
          <div className="card">
            <div>
              <img src={this.state.profileImage} className="mb-3 profile-img" />
              <div className="p-2">
                <h4 className="m-0">{this.state.firstName}&nbsp;{this.state.lastName}</h4>
                {!this.state.isEditClicked ?
                  <p className="username mb-1">@{this.state.userName}</p> : 
                  <input type="text" className="form-control mb-2 mt-2" id="name" name="userName" onChange={this.onChange} value={this.state.userName} />
                }
                {!this.state.isEditClicked ?
                  <p>{this.state.description}</p> :
                  <textarea className="form-control mb-3" id="description" rows="2" name="description" onChange={this.onChange} value={this.state.description}></textarea>
                }
                <button className="btn btn-color btn-block" onClick={this.onEditClick}>{this.state.buttonText}</button>
              </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Profile);