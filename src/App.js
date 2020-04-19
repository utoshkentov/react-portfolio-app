import {CssBaseline} from "@material-ui/core";
import {Route, Switch, Redirect} from 'react-router-dom';
import React from 'react';

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from './components/Portfolio';
import Resume from "./components/Resume";
import Contact from './components/Contact'
import './App.css';

const App = () => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/resume' component={Resume}/>
                <Route exact path='/portfolio' component={Portfolio} />
                <Route exact path='/contact' component={Contact} />
                <Redirect to='/' />
            </Switch>
        </React.Fragment>
    );
}

export default App;
