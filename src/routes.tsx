import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Search from './pages/Search';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Dashboard} path="/" exact />
            <Route component={Search} path="/search" />
        </BrowserRouter>
    )
}

export default Routes;