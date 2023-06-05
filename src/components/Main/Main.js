import React from 'react';

import image from "./images/img.png"

import stylesMain from "./Main.module.css";
import {SERVICES_ROUTE, TEMP_ROUTE} from "../../routes";

const Main = () => {

    return (
        <div className={stylesMain}>
            <div className={`${stylesMain.main}`}>
                <div className={stylesMain.wrapper}>
                <span className={stylesMain.tittles}>
                    <p className={stylesMain.tittle}>Дондекор</p>
                    <p className={`${stylesMain.subtitle} mt-16`}>ПРОИЗВОДСТВО И МОНТАЖ ФАСАДНОГО ДЕКОРА</p>
                    <p className={`${stylesMain.subtitle} mt-28`}>Красиво.Экономично.Быстро.</p>
                    <p className={`${stylesMain.subtitle}`}>Красивый вид Вашего дома</p>
                    <p className={`${stylesMain.subtitle}`}>через 14 дней,с выгодой до 20%</p>
                </span>
                    <img src={image} alt={image} className={stylesMain.image}/>
                </div>
                <div className={stylesMain.wrapperb}>
                    <button onClick={() => (window.location.replace(TEMP_ROUTE))}>Расчитать стоимость</button>
                    <button className={`${stylesMain.button}`} onClick={() => (window.location.replace(SERVICES_ROUTE))}>Услуги</button>
                </div>
            </div>
        </div>
    );
};

export default Main;