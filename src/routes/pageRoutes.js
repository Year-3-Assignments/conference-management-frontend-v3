import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// UI Componentes
import Navbar from '../components/navBar/navbar';

class PageRoutes extends React.Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar />
          <section>
            <Switch>
              {/* Page routes go here */}
            </Switch>
          </section>
        </Router>
      </div>
    );
  }
}

export default PageRoutes;