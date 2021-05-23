import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// UI Componentes
import SignUp from '../pages/SignUp/Signup';
import Navbar from '../components/navBar/navbar';
import Footer from '../components/footer/footer';

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
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default PageRoutes;