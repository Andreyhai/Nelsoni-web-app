import React from 'react';
import {Routes, Route} from "react-router-dom";

import {
    CONTACTS_PAGE_ROUTE,
    HOME_ROUTE, SERVICES_ROUTE,
    TEMP_ROUTE, WORKS_PAGE_ROUTE
} from "./routes";

import Home from "./pages/Home";
import Temp from "./pages/Temp";
import WorksPage from "./pages/WorksPage";
import ContactsPage from "./pages/ContactsPage";
import ServicePage from "./pages/ServicePage";

const RouterApp = () => {
    return (
        <Routes>
            <Route path={HOME_ROUTE} element={ <Home /> } />
            <Route path={TEMP_ROUTE} element={ <Temp /> } />
            <Route path={WORKS_PAGE_ROUTE} element={ <WorksPage /> } />
            <Route path={SERVICES_ROUTE} element={ <ServicePage /> } />
            <Route path={CONTACTS_PAGE_ROUTE} element={ <ContactsPage /> } />
        </Routes>
    );
};

export default RouterApp;