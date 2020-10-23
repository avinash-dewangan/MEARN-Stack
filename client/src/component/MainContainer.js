import React, { Component } from 'react';
import RouterComponent from './RouterComponent';


class MainContainer extends Component {
    state = {}
    render() {
        return (
            <div className="main-container py-4">
                <RouterComponent />
            </div>
        );
    }
}

export default MainContainer;