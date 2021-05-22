import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Componentes
import Navbar from '../components/navBar/navbar';
import Footer from '../components/footer/footer';
import Login from '../pages/login/login';

class PageRoutes extends React.Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar />
          <section>
            <Switch>
              <Route path="/login" component={Login} exact />
            </Switch>
          </section>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default PageRoutes;