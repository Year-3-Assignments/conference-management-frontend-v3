import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Componentes
import SignUp from '../pages/SignUp/Signup';
import Navbar from '../components/navBar/navbar';
import Footer from '../components/footer/footer';
import Login from '../pages/login/login';
import UserProfilePage from '../pages/userProfile/userProfilePage';
import Reviewer from '../pages/reviewer/reviewer'
import Dashboard from '../pages/admin/dashboard/dashboard';
import ConferenceList from '../pages/conferences/conference';
import AdminConferences from '../pages/conferences/approveConferences';
import Users from '../pages/admin/users/users';
import Reviewers from '../pages/admin/reviewers/reviewers';
import Editors from '../pages/admin/editors/editors';

function PageRoutes() {
  return (
    <div>
      <Router>
      <Navbar />
        <section className="content">
          <Switch>
            <Route path="/reviewer" component={Reviewer} exact/>
            <Route path="/signup" component={SignUp} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/me" component={UserProfilePage} />
            <Route path="/conferencelist" component={ConferenceList} />
            <Route path="/admin/conference" component={AdminConferences} />
            <Route path="/admin/dashboard" component={Dashboard} exact />
            <Route path="/admin/users" component={Users} exact />
            <Route path="/admin/reviewers" component={Reviewers} exact />
            <Route path="/admin/editors" component={Editors} exact />
          </Switch>
        </section>
        <Footer/>
      </Router>
    </div>
  );
}

export default PageRoutes;