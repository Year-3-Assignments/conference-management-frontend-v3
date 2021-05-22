import React from 'react';
import "../node_modules/react-notifications/lib/notifications.css";
import PageRoutes from './routes/pageRoutes';
import './App.scss';
import UserProfile from './pages/userProfile/userProfile';

class App extends React.Component {
  render() {
    return (
      <div>
        <PageRoutes />
        <UserProfile />
      </div>
    );
  }
}

export default App;