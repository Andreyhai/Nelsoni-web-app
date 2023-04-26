import React from 'react';
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../routes";

const Temp = () => {
    return (
        <div>
            Temp
            <Link to={HOME_ROUTE}>
                to home
            </Link>
        </div>
    );
};

export default Temp;