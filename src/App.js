import React from 'react';
import './App.scss';
import PageRoutes from './routes/pageRoutes';

class App extends React.Component {
  render() {
    return (
      <div>
        <PageRoutes />
      </div>
    );
  }
}

export default App;