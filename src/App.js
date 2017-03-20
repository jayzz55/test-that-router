import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import './App.css';

const Home = () => <h1>Home</h1>

const isActiveFunc = (match, location) => {
  return match
}

const NavLinks = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeClassName="active" to={{pathname: '/about'}}>About</NavLink>
    <NavLink activeStyle={{color: 'green'}} to="/about-2">About-2</NavLink>
    <NavLink 
      isActive={isActiveFunc}
      activeClassName="active"
      to="/contact">Contact</NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <NavLinks />
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
