import ScrollableAnchor from "react-scrollable-anchor";
import React from "react";

export const Contacts = () => {
    return (
        <ScrollableAnchor id={"contacts"}>
            <section className="contacts">
                <div className="container">
                    <div className="contacts__h2">
                        <h2>КОНТАКТЫ</h2>
                    </div>

                    <div className="contacts__body">
                        <div className="contacts__content">
                            <img src="/src/img/svg/pismo.svg" alt="Местоположение"/>
                            <h3 className="contacts__info">АДРЕС:</h3>
                            <p className="contacts__content-text">ЛИГОВСКИЙ ПРОСПЕКТ 266В, ОФИС 152</p>
                        </div>
                        <div className="contacts__content">
                            <img src="/src/img/svg/telefon.svg" alt="Местоположение"/>
                            <h3 className="contacts__info">ТЕЛЕФОН:</h3>
                            <a href="tel:88121112233" className="contacts__content-text">8 (812) 111-22-33</a>
                            <a href="tel:88121112233" className="contacts__content-text">8 (812) 111-22-33</a>
                        </div>
                        <div className="contacts__content">
                            <img src="/src/img/svg/vremya.svg" alt="Местоположение"/>
                            <h3 className="contacts__info">ВРЕМЯ РАБОТЫ:</h3>
                            <p className="contacts__content-text">ПН-ПН</p>
                            <p className="contacts__content-text">10:00 - 20:00</p>
                        </div>
                        <div className="contacts__content">
                            <img src="/src/img/svg/mesto.svg" alt="Местоположение"/>
                            <h3 className="contacts__info">E-MAIL:</h3>
                            <a href="mailto:mail@mail.ru"
                               className="contacts__content-text">
                                <span className="span-mail">
                                    MAIL@MAIL.RU
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A55553b2d770c2234845637ba4ea7f8371e4876e3583503afc1480d75c75b25aa&amp;source=constructor"
                    width="100%" height="400" frameBorder="0">
                </iframe>
            </section>
        </ScrollableAnchor>
    )
}
