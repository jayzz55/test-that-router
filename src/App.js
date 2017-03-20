import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
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
    <NavLink to="/page">Page</NavLink>
    <NavLink to="/query?ask=hi">Query</NavLink>
    <NavLink to="/menu">Menu</NavLink>
  </nav>
)

const Menu = () => (
  <div>
    <h1>Menu</h1>
    <Link to="/menu/foods">Foods</Link>
    <Link to="/menu/drinks">Drinks</Link>
    <Link to="/menu/sides">Sides</Link>
    <Route
      path="/menu/:section"
      render={({match}) => <h2>{match.params.section}</h2>} />
  </div>
)

const App = () => (
  <Router>
    <div>
      <div className="header" >
        <NavLinks />
      </div>

      <div className="content" >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" render={() => <h1>About</h1>} />
          <Route
            path="/about-2"
            children={({match}) => match && <h1>About with children</h1>} />
          <Route path="/contact" render={() => <h1>Contact</h1>} />
          <Route path="/page/:page?-:subpage(\d+)" render={({match}) => (
            <h1>
              PAGE: {match.params.page || 'Home'} <br/>
              SUBPAGE: {match.params.subpage}
            </h1>
          )} />
          <Route path="/query" render={({match, location}) => (
            <div>
              <p>Query</p>
              <p>{JSON.stringify(match)}</p>
              <p>{JSON.stringify(location)}</p>
              <p>{new URLSearchParams(location.search).get('ask')}</p>
            </div>
          )} />
          <Route path="/menu" component={Menu} />
          <Route path="/:itemid" render={({match}) => (
            <h1>Item: {match.params.itemid}</h1>
          )} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>
    </div>
  </Router>
)

export default App;
