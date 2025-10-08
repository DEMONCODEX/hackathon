import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import DepartmentCoordination from './pages/DepartmentCoordination';
import DocumentList from './components/DocumentList';
import DocumentUpload from './components/DocumentUpload';
import ComplianceTracker from './components/ComplianceTracker';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/department-coordination" component={DepartmentCoordination} />
          <Route path="/documents" component={DocumentList} />
          <Route path="/upload" component={DocumentUpload} />
          <Route path="/compliance" component={ComplianceTracker} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;