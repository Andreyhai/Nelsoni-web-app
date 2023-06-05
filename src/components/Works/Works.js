import React from 'react';
import photo1 from "./images/img_1.png"
import photo2 from "./images/img_2.png"
import photo3 from "./images/img_3.png"
import photo4 from "./images/img_4.png"
import photo5 from "./images/img_5.png"
import photo6 from "./images/img_6.png"
import photo7 from "./images/img_7.png"
import photo8 from "./images/img_8.png"
import style from "./Works.module.css"

const Works = () => {
    return (
        <div className={style.works}>
            <div className="flex items-center flex-wrap w-full">
                <div className={style.works__title}>Наши работы</div>
                <div className={style.works__subtitle}>
                    Примеры выполненных работ, которыми гордится наша команда
                </div>
            </div>
            <div>

            </div>
            <div className="flex items-center flex-wrap w-full">
                <div className={style.works__box}>
                    <img className={style.works__box_item} src={photo1} alt="photo"/>
                    <img className={style.works__box_item} src={photo2} alt="photo"/>
                    <img className={style.works__box_item} src={photo3} alt="photo"/>
                    <img className={style.works__box_item} src={photo4} alt="photo"/>
                    <img className={style.works__box_item} src={photo5} alt="photo"/>
                    <img className={style.works__box_item} src={photo6} alt="photo"/>
                    <img className={style.works__box_item} src={photo7} alt="photo"/>
                    <img className={style.works__box_item} src={photo8} alt="photo"/>
                </div>
            </div>
            <div className="flex items-center flex-wrap w-full">
                <div className={style.works__title}>Почему мы вам понравимся?</div>
            </div>
            <div className="flex items-center flex-wrap w-full my-28">
                <div className="flex items-center flex-nowrap w-full">
                    <div className={style.works__box2}>
                        <div className={style.works__box2_cause}>
                            <div className={style.works__box2_cause_circule}>1</div>
                            <div className={style.works__box2_cause_title}>Цена известна заранее</div>
                            <div className={style.works__box2_cause_subtitle}>Она фиксирована. Мы составляем план и смету в день приезда замерщика.</div>
                        </div>
                    </div>
                    <div className={style.works__box2}>
                        <div className={style.works__box2_cause}>
                            <div className={style.works__box2_cause_circule}>2</div>
                            <div className={style.works__box2_cause_title}>Дизайн проект</div>
                            <div className={`${style.works__box2_cause_subtitle} pt-5`}>Может быть полностью ваш или доработан после консультацией наших дизайнеров.</div>
                        </div>
                    </div>
                    <div className={style.works__box2}>
                        <div className={style.works__box2_cause}>
                            <div className={style.works__box2_cause_circule}>3</div>
                            <div className={style.works__box2_cause_title}>Гарантия</div>
                            <div className={style.works__box2_cause_subtitle}>На все работы мы даем официальную гарантию пять лет.</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center flex-nowrap w-full mt-28">
                    <div className={style.works__box2}>
                        <div className={style.works__box2_cause}>
                            <div className={style.works__box2_cause_circule}>4</div>
                            <div className={style.works__box2_cause_title}>Качественные материалы</div>
                            <div className={`${style.works__box2_cause_subtitle} pt-5`}>Закупку и доставку на нас. Мы работаем с материалами компаний KNAUF, ABB, BIOFA.</div>
                        </div>
                    </div>
                    <div className={style.works__box2}>
                        <div className={style.works__box2_cause}>
                            <div className={style.works__box2_cause_circule}>5</div>
                            <div className={style.works__box2_cause_title}>Специалисты своего дела</div>
                            <div className={`${style.works__box2_cause_subtitle} pt-5`}>Мы за разделение труда. Над каждым проектом работают специалисты узкого профиля.</div>
                        </div>
                    </div>
                    <div className={style.works__box2}>
                        <div className={style.works__box2_cause}>
                            <div className={style.works__box2_cause_circule}>6</div>
                            <div className={style.works__box2_cause_title}>Цена известна заранее.</div>
                            <div className={`${style.works__box2_cause_subtitle} pt-5`}>Поэтапная оплата ремонта. Прием работ заказчиком и оплата поделены на 3 части.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;