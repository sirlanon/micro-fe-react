import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
    return (
        <div>
            <StylesProvider>
                <Router>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>  
    )
}