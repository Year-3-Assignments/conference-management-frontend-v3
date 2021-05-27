import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Componentes
import SignUp from '../pages/SignUp/Signup';
import Navbar from '../components/navBar/navbar';
import Footer from '../components/footer/footer';
import Login from '../pages/login/login';
import CreateResource from '../components/resourceCreator/createResource';

class PageRoutes extends React.Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar />
          <section className="content">
            <Switch>
              <Route path="/login" component={Login} exact />
              <Route path="/signup" component={SignUp} exact />
              <Route path="/" component={CreateResource}/>
            </Switch>
          </section>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default PageRoutes;