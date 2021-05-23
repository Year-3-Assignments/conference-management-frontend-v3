import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// UI Componentes
import SignUp from '../pages/SignUp/Signup';
import Navbar from '../components/navBar/navbar';

class PageRoutes extends React.Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar />
          <section>
            <Switch>
              <Route path="/signup" component={SignUp} exact />
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}

export default PageRoutes;