import React, { Component } from 'react';
import "./home.scss"


class Home extends Component {
    state = {}
    render() {
        return (
            <div className="homepage container">
                <div className="container-fluid bg-1 text-center">
                    <h3>Who Am I?</h3>
                    <img src="bird.jpg" className="img-circle" alt="Bird" width="350" height="350" />
                    <h3>I'm an adventurer</h3>
                </div>

                <div className="container-fluid bg-2 text-center">
                    <h3>What Am I?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <a href="#" className="btn btn-primary btn-lg">
                        <span className="glyphicon glyphicon-search"></span> Search
  </a>
                </div>

                <div className="container-fluid bg-3 text-center">
                    <h3>Where To Find Me?</h3><br />
                    <div className="row">
                        <div className="col-sm-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <img src={process.env.PUBLIC_URL + "/assets/boris.jpg"} alt="Image" width="350" height="auto" />
                        </div>
                        <div className="col-sm-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <img src={process.env.PUBLIC_URL + "/assets/ray.jpg"} alt="Image" width="350" height="auto" />
                        </div>
                        <div className="col-sm-4">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <img src={process.env.PUBLIC_URL + "/assets/david.jpg"} alt="Image" width="350" height="auto" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
