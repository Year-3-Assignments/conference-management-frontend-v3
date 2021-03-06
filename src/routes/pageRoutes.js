import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Componentes
import SignUp from '../pages/SignUp/Signup';
import Navbar from '../components/navBar/navbar';
import Footer from '../components/footer/footer';
import Login from '../pages/login/login';
import UserProfilePage from '../pages/userProfile/userProfilePage';
import UserResource from '../pages/userResources/resources';

function PageRoutes() {
  return (
    <div>
      <Router>
      <Navbar />
        <section className="content">
          <Switch>
            <Route path="/signup" component={SignUp} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/me/resource" component={UserResource} exact />
            <Route path="/me" component={UserProfilePage} />
          </Switch>
        </section>
        <Footer/>
      </Router>
    </div>
  );
}

export default PageRoutes;