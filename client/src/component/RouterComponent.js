import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import todo from './Todo';
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import NotFound from './NotFound';
import ReactHooks from './basic/ReactHooks';
import ReactEvent from './basic/ReactEvent';
import LiveSearch from './LiveSearchComponent/LiveSearch';
import PagiNation from './PagiNation';
import EComHome from './ECommerceComponent/EComHome';
class RouterComponent extends Component {
    state = {}
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/todo" component={todo} />
                <Route exact path="/react-hooks" component={ReactHooks} />
                <Route exact path="/react-event" component={ReactEvent} />
                <Route exact path="/live-search" component={LiveSearch} />
                <Route exact path="/pagination" component={PagiNation} />
                {/* <Route component={NotFound} /> */}
                <Route exact path="/e-com-home-page" component={EComHome} />
                <Redirect to="/" />
            </Switch>
        );
    }
}

export default RouterComponent;
