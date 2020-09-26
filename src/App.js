import React from 'react';
import { Home, Login, SignUp, About, Services, Privacy, Contact, Error } from './pages';
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <Router>
      <ScrollTop>
      <Navbar />
      <Switch>
        {/* Navbar Routes */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>

        {/* Footer Routes */}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>

        {/* Error Route */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
      </ScrollTop>
    </Router>
  );
};

export default App;