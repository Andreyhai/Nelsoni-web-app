import React from 'react';

import stylesAdverts from "./Adverts.module.css";

import image1 from "./images/img.png"
import image2 from "./images/facade_4.jpg"
import image3 from "./images/images_23.jpg"
import Advert from "../Advert/Advert";



const Adverts = () => {

    const data=  [
        {
            url: image1,
            title: 'Фасадные Термопанели',
            square: 'от 1200 р/м²',
            info: 'Фасадные термопанели для наружной отделки дома – это современный материал, ' +
                'обладающий рядом свойств. С его помощью вы за очень короткое время сможете обновить ' +
                'облик вашего дома и сделать его при этом существенно теплее. Внешний облик этих панелей ' +
                'имитируют кирпичную или каменную кладку.',
            flag: false
        },
        {
            url: image2,
            title: 'Фасадный Декор',
            square: 'от 320 р/п.м.',
            info: 'Декор из пенопласта придаст фасаду вашего дома эстетичный облик. Они армированы пластичной ' +
                'смесью на основе мраморной крошки, сополимеров и модифицирующих добавок, благодаря чему обладают ' +
                'антивандальными свойствами.Изделия легкие, не оказывают дополнительной нагрузки на фасад, в отличие ' +
                'от лепного декора из гипса.',
            flag: false
        },
        {
            url: image3,
            title: 'Фигурная резка пенопласта',
            square: 'Виды изготавливаемых изделий из пенопласта:',
            info: 'Буквы, цифры, фигуры, логотипы, животные и тд.',
            flag: 'В услугу входят бесплатные консультации с нашими дизайнерами, замеры , расчет.'
        }
    ]



    return (
        <div className={stylesAdverts.main}>
            <div className={stylesAdverts.wrapper}>
                {data.map(item => {
                    return (
                        <Advert key={item.url} url={item.url} title={item.title} info={item.info} square={item.square} flag={item.flag}/>
                    );
                })}
            </div>
        </div>
    );
};

export default Adverts;