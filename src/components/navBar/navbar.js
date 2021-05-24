import React from 'react';
import logo from '../../../assets/conference_logo.png';
import './navbar.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-bg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <a className="navbar-brand" href="#">
              <img src={logo} height="35" alt="" loading="lazy" />
              <small>REACH</small>
            </a>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {localStorage.length ===  0 ?
                  <span className="nav-content">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Keynotes</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Conferences</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Workshops</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">About Us</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Downloads</a>
                      </li>
                    </ul>
                  </span>
                :
                  null
                }

                {localStorage.getItem('role') === 'ROLE_ADMIN' ?
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Dashboard</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Designs</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Users</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Reviwers</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Editors</a>
                    </li>
                  </ul>
                :
                  null
                }

                {localStorage.getItem('role') === 'ROLE_REVIEWER' ?
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#">Resources</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Users</a>
                    </li>
                  </ul>
                :
                  null
                }

                {localStorage.getItem('role') === 'ROLE_EDITOR' ?
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#">My Edits</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Resources</a>
                    </li>
                  </ul>
                :
                  null
                }

                {localStorage.getItem('role') === 'ROLE_PRESENTER' ?
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#">My Profile</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Resources</a>
                    </li>
                  </ul>
                :
                  null
                }
              </div>
            
            {localStorage.getItem('role') === 'ROLE_ADMIN' || 
              localStorage.getItem('role') === 'ROLE_REVIEWER' || 
              localStorage.getItem('role') === 'ROLE_EDITOR' ||
              localStorage.getItem('role') === 'ROLE_PRESENTER' ||
              localStorage.getItem('role') === 'ROLE_ATENDEE' ?
              <div className="d-flex align-items-center">
                <a
                  className="text-reset me-3 dropdown-toggle hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-bell notification-icon"></i>
                  <span className="badge rounded-pill badge-notification bg-danger">10</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="#">See my notifications</a></li>
                </ul>
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-circle" height="35" alt="" loading="lazy" />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a className="dropdown-item" href="#">My profile</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Logout</a>
                  </li>
                </ul>
              </div>
            : 
              null
            }

            {localStorage.length === 0 ? 
              <div>
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="dropDown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-caret-down fa-lg" style={{color: '#fff'}}></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropDown">
                  <li>
                    <a className="dropdown-item" href="#">Create Account</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Login</a>
                  </li>
                </ul>
              </div>
            :
              null
            }
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;