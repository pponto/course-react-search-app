import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Javascript from './components/Javascript';
import Python from './components/Python';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


const Root = () => 
  <Router basename="/course-react-search-app/">
    <div>
      <Navbar>
        <Navbar.Brand>
          <Link to='/'>NEWSAPP</Link>
        </Navbar.Brand>

        <Nav>
          <NavItem>
            <Nav.Link>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link>
              <NavLink to="/javascript" activeClassName="active">Javascript</NavLink>
            </Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link>
              <NavLink to="/python" activeClassName="active">Python</NavLink>
            </Nav.Link>
          </NavItem>
        </Nav>

      </Navbar>

      <Route exact path='/' component={ App } />
      <Route exact path='/javascript' component={ Javascript } />
      <Route exact path='/python' component={ Python } />
    </div>
  </Router>

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
