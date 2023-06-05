import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {TEMP_ROUTE} from "../routes";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Adverts from "../components/Adverts/Adverts";
import Works from "../components/Works/Works";
import Stages from "../components/Stages/Stages";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";

const ContactsPage = () => {

    return (
        <div>
            <Header />
            <Main />
            <Contacts />
            <Footer />
        </div>
    );
};

export default ContactsPage;