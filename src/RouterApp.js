import React from 'react';
import {Routes, Route} from "react-router-dom";

import {
    HOME_ROUTE,
    TEMP_ROUTE
} from "./routes";

import Home from "./pages/Home";
import Temp from "./pages/Temp";

const RouterApp = () => {
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={ <Home /> } />
            <Route path={TEMP_ROUTE} element={ <Temp /> } />
        </Routes>
    );
};

export default RouterApp;