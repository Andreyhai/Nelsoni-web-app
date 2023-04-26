import React from 'react';

import image from "./images/img.png"

import stylesMain from "./Main.module.css";

const Main = () => {
    return (
        <div className={stylesMain.main}>
            <div className={stylesMain.wrapper}>
            <span className={stylesMain.tittles}>
                <p className={stylesMain.tittle}>Дондекор</p>
                <p className={stylesMain.subtitle}>ПРОИЗВОДСТВО И МОНТАЖФАСАДНОГО ДЕКОРА</p>
            </span>
                <img src={image} alt={image} className={stylesMain.image}/>
            </div>
            <div className={stylesMain.wrapperb}>
                <button>Расчитать стоимость</button>
                <button className={stylesMain.button}>Услуги</button>
            </div>
        </div>
    );
};

export default Main;