import React, { Component } from 'react';
import Navbar from './Navbar';

class Header extends Component {
    state = {}
    render() {
        return (
            <header className="header">
                <Navbar />
            </header>
        );
    }
}

export default Header;