import React from 'react';

import stylesAdvert from "./Advert.module.css";
import {TEMP_ROUTE} from "../../routes";

const Advert = (props) => {

    const { url, title, square, info, flag } = props;
    let style1, style2 = {}
    if (flag) {
        style1 = {
            width: '400px'
        }
        style2 = {
            'margin-top': '10px'
        }
    }

    return (
        <div className={stylesAdvert.advert} style={style1}>
            <img className={stylesAdvert.image} src={url} alt={url}/>
            <div className={stylesAdvert.title}>{title}</div>
            <div className={stylesAdvert.square} style={style2}>{square}</div>

            <div className={stylesAdvert.info}>
                {info}
                <br/>
                {flag ? flag : ''}
            </div>

            <button onClick={() => (window.location.replace(TEMP_ROUTE))}>Расчитать стоимость</button>
        </div>
    );
};

export default Advert;