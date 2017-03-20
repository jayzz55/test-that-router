import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

const Home = () => <h1>Home</h1>

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to={{pathname: '/about'}}>About</Link>
    <Link to="/about-2">About-2</Link>
    <Link to="/contact">Contact</Link>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <h1>About</h1>} />
      <Route
        path="/about-2"
        children={({match}) => match && <h1>About with children</h1>} />
      <Route path="/contact" render={() => <h1>Contact</h1>} />
    </div>
  </Router>
)

export default App;
