import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        React User
                </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/todo">Todo</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/react-hooks">ReactHooks</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/react-event">ReactEvent</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="live-search">Live Search</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/pagination">Pagination</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="/e-com-home-page">E-Commerce Home</NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav >
        );
    }
}

export default Navbar;
