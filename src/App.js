import React from 'react';
import './App.css';
import Routes from './Routes'
import {BrowserRouter as Router, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
        <Link to="/contact">Ir a contact</Link>
      </Router>
    </div>
  );
}

export default App;
