import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Componentes
import SignUp from '../pages/SignUp/Signup';
import Navbar from '../components/navBar/navbar';
import Footer from '../components/footer/footer';
import Login from '../pages/login/login';
import UserProfilePage from '../pages/userProfile/userProfilePage';
import UserResource from '../pages/userResources/resources';
import Dashboard from '../pages/admin/dashboard/dashboard';
import Workshops from '../pages/homepageWorkshop/workshopsDisplay';

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
            <Route path="/me" component={UserProfilePage} exact/>
            <Route path="/admin/dashboard" component={Dashboard} exact />
            <Route path="/home/workshop" component={Workshops} exact/>
          </Switch>
        </section>
        <Footer/>
      </Router>
    </div>
  );
}

export default PageRoutes;