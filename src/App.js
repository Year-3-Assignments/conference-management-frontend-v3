import React from 'react';
import './App.scss';
import CreateTemplate from './components/templateUploader/createTemplate';
import PageRoutes from './routes/pageRoutes';

class App extends React.Component {
  render() {
    return (
      <div>
        <PageRoutes />
        <CreateTemplate/>
      </div>
    );
  }
}

export default App;