import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Componentes
import SignUp from '../pages/SignUp/Signup';
import Navbar from '../components/navBar/navbar';
import Footer from '../components/footer/footer';
import Login from '../pages/login/login';
import UserProfilePage from '../pages/userProfile/userProfilePage';
import UserResource from '../pages/userResources/resources';
import Reviewer from '../pages/reviewer/reviewer'
import Dashboard from '../pages/admin/dashboard/dashboard';
import ConferenceList from '../pages/conferences/conference';
import AdminConferences from '../pages/conferences/approveConferences';

function PageRoutes() {
  return (
    <div>
      <Router>
      <Navbar />
        <section className="content">
          <Switch>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/reviewer" component={Reviewer} exact/>
            <Route path="/signup" component={SignUp} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/me/resource" component={UserResource} exact />
            <Route path="/me" component={UserProfilePage} />
            <Route path="/conferencelist" component={ConferenceList} />
            {/* <Route path="/admin/conference" component={AdminConferences} /> */}
            <Route path="/admin/dashboard" component={Dashboard} exact />
          </Switch>
        </section>
        <Footer/>
      </Router>
    </div>
  );
}

export default PageRoutes;