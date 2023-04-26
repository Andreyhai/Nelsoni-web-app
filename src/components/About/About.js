import React from 'react';

import stylesAbout from "./About.module.css"

const About = () => {
    return (
        <div className={stylesAbout.main}>
            <div className={stylesAbout.tittle}>О нас</div>
            <div className={stylesAbout.info}>
                Наша компания успешно работает в области изготовления архитектурных фасадных
                элементов из пенополистирола с 2011г. Также мы можем предложить услуги по разработке
                дизайна вашего дома.У нас вы можете заказать необходимые элементы любой сложности и
                различных размеров для самостоятельного монтажа и воспользоваться нашими услугами по
                монтажу элементов фасада из пенополистирола.
            </div>
        </div>
    );
};

export default About;