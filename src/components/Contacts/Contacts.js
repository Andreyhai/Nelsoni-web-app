import React from 'react';
import style from "./Contacts.module.css"
const Contacts = () => {
    return (
        <div className={style.contacts}>
            <div className={style.contacts__title}>
                <div className="w-full">
                    +7(909)904-26-02,
                </div>
                <div>
                    +7(961)409-99-89
                </div>
            </div>
            <div className={`${style.contacts__subtitle} mb-16`}>
                Адрес нашего производства:
            </div>
            <div className={`${style.contacts__subtitle} mb-2`}>
                Московская область,г.Долгопрудный ул.Жуковского 2
            </div>
            <div className={`${style.contacts__subtitle} mb-44`}>Ростовская область,село Чалтырь</div>
            <div className="flex justify-center mb-44">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac887845e42b0d7a6563d14b5e9511428b1324f92aafde1fcd2d26000c4045f13&amp;source=constructor"
                    width="1152" height="517" frameBorder="0"></iframe></div>
        </div>
    );
};

export default Contacts;