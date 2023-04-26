import React from 'react';
import {Link} from "react-router-dom";
import {TEMP_ROUTE} from "../routes";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Adverts from "../components/Adverts/Adverts";

const Home = () => {
    return (
        <div>
            <Header />
            <Main />
            <About />
            <Adverts />
            <Link to={TEMP_ROUTE}>
                to temp
            </Link>
        </div>
    );
};

export default Home;