import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/react-bootstrap';
import './library/bootstrap-3.3.7-dist/css/bootstrap.min.css'
import './styles/melp.css'
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import App from './App';
import About from './components/About';

ReactDOM.render(
    <Router>
        <div className={"container"}>
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="/" id="linkHome">Melp</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={2}>
                            <NavLink to="/about" id="linkHome">About us</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
        </div>
    </Router>
    , document.getElementById('root'));
