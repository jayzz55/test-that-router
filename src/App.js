import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <h1>About</h1>} />
      <Route
        path="/about-2"
        children={({match}) => match && <h1>About with children</h1>} />
    </div>
  </Router>
)

export default App;
