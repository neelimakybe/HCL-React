import React, { Component } from 'react';
import View from './View';
import Add from './Add';
import Modify from './Modify';

import {
    BrowserRouter as Router,
    Route,
    NavLink 
} from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <Router>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <NavLink className="navbar-brand" to="/home" activeClassName="active">EMS</NavLink>                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/add" activeClassName="active">Add</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/view" activeClassName="active">View</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/modify" activeClassName="active">Modify</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/add" component={Add} />
                    <Route exact path="/view" component={View} />
                    <Route exact path="/modify" component={Modify} />
            </Router>
        );
    }
}

export default Navbar;