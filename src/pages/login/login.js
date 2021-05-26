import React from 'react';
import './login.scss';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import {connect} from 'react-redux';
import {loginUserAccount} from '../../actions/userActions';

let formData = {};
let initialState = {
  userName: '',
  password: '',
  isFormInvalid: false,
};

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = initialState;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps = (nextProps) =>{
    if(this.props.loginUser !== nextProps.loginUser){
      this.setState({ loginResponse: nextProps.loginUserError }, () => {
        if (this.state.loginResponse && this.state.loginResponse === 'Error') {
          this.setState({ isLoginSuccess: false, isLoginClicked: nextProps.isLogin });
        } else {
          this.setState({ isLoginSuccess: '', isLoginClicked: nextProps.isLogin });
        }
      });
    }
  }
  
  validateForm() {
    const data = {
      username: this.state.userName && this.state.userName.trim().length > 0 ? this.state.userName : null,
      password: this.state.password && this.state.password.trim().length > 0 ? this.state.password : null
    };
    formData = Object.assign({},data)
    return true;
  }

  onSubmit(e){
    e.preventDefault();
    if(this.validateForm()){
      let data = Object.values(formData).map(key =>{
        return key !== null;
      });

      if(!data.includes(false)){
        let login = {
          username : this.state.userName,
          password : this.state.password
        }
        console.log('DATA To SEND',login);
        this.props.loginUserAccount(login);
        NotificationManager.success('User Logged in successfully!','Success');
      }
      else{
        this.setState({isFormInvalid: true});
        NotificationManager.warning('Please fill input fields')
      }
    }
  }

  render(){
    return(
      <div className="p-5 login-cart ml-auto"> 
        <div className="p-4 card ">
          <h4>Login to My Account</h4>
          <div className="form-group mb-3">
            <label htmlFor="username" className="form-text">Username</label>
            <input type="text" className="form-control" id="username" name="userName" onChange={this.onChange} value={this.state.userName}/>
            {formData.username===null && this.state.isFormInvalid ? <span className="text-danger validation-text p-0">Username is required</span> : null}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-text">Password</label>
            <input type="password" className="form-control" id="password" name="password" onChange={this.onChange} value={this.state.password}/>
            {formData.password===null && this.state.isFormInvalid ? <span className="text-danger validation-text p-0">Password is required</span> : null}
          </div>
          <div className="d-flex justify-content-center">
            <a className="btn btn-primary btn-block" href="#!" role="button" onClick={this.onSubmit} >
              Login
            </a>
          </div>
        </div> 
        <NotificationContainer/>   
      </div>
    )
  }
}

const mapStateToProps = state =>({
  loginUser: state.userReducer.loginUser
});

const mapDispatchToProps = dispatch =>({
  loginUserAccount: user =>{
    dispatch(loginUserAccount(user));
  }
})
export default connect(mapStateToProps,mapDispatchToProps)(Login);