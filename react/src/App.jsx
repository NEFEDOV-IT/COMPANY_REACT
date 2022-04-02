import './App.css'
import { Menu } from "./Components/Menu";
import React from "react";
import ScrollableAnchor, { configureAnchors }  from 'react-scrollable-anchor'
import { Calculator } from "./Components/Calculator";

configureAnchors({offset: -60, scrollDuration: 800})

const items = [
    {value: 'Главная', href: '#home'},
    {value: 'Наши проекты', href: '#projects'},
    {value: 'Чем мы занимаемся?', href: '#work'},
    {value: 'Портфолио', href: '#portfolio'},
    {value: 'Ответы на вопросы', href: '#answer'},
    {value: 'Наши партнеры', href: '#partners'},
    {value: 'Отзывы', href: '#reviews'},
    {value: 'Контакты', href: '#contacts'}
]

function App() {
    return (
        <div className="wrapper">
            <ScrollableAnchor id={"home"}>
                <section className="first-screen">
                    <header className="header">
                        <div className="header__body">
                            <div className="header__icon">
                                <img src="/src/img/svg/logo.svg" alt=""/>
                            </div>
                            <div className="header__text">
                                Resource Company LTD.
                            </div>

                            <Menu header={'Меню'} items={items}/>

                        </div>
                    </header>

                    <div className="home">
                        <h1 className="h1__design">
                            ДОБЫВАЕМ ПОЛЕЗНЫЕ ИСКОПАЕМЫЕ<br/>
                            ДОСТАВКА ПО ВСЕЙ РОССИИ
                        </h1>
                        <p>золото, руда, сереберо, каменный уголь</p>
                    </div>
                </section>
            </ScrollableAnchor>

            <section className="work__time">
                <div className="container">
                    <div className="work__time-content">
                        <div className="section">
                            <p className="section-number">25</p>
                            <p className="section-year">лет</p>
                            <p className="section__text">на рынке</p>
                        </div>
                        <div className="section">
                            <p className="section-number">20</p>
                            <p className="section-year">лет</p>
                            <p className="section__text">добываем золото</p>
                        </div>
                        <div className="section">
                            <p className="section-number">15</p>
                            <p className="section-year">лет</p>
                            <p className="section__text">добываем руду</p>
                        </div>
                        <div className="section">
                            <p className="section-number">17</p>
                            <p className="section-year">лет</p>
                            <p className="section__text">добываем серебро</p>
                        </div>
                    </div>
                </div>
            </section>

            <main className="main">
                <ScrollableAnchor id={"projects"}>
                    <section className="big__projects">
                        <div className="container">
                            <div className="big__projects-body">
                                <div className="big__projects-h2">
                                    <h2 id="t1">НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h2>
                                </div>

                                <div className="big__projects-items">
                                    <div className="big__projects-item">
                                        <img className="big__projects-img" src="/src/img/resource.jpg" alt="Стадион"/>
                                        <hr/>
                                        <h3>
                                            Карьер "Никольский"
                                        </h3>
                                        <p>
                                            Первый наш проект. Добываем более 25 лет полезные ископаемые, оборудованы места
                                            для
                                            рабочих и техники. Мы гордимся данным проектом.
                                        </p>
                                    </div>

                                    <div className="big__projects-item">
                                        <img className="big__projects-img" src="/src/img/resource-2.jpg" alt="Стадион"/>
                                        <hr/>
                                        <h3>
                                            Рудник "Ново-Каменск"
                                        </h3>
                                        <p>
                                            Разработка шахты велась 2 года, полезные ископаемые добываются из недр земли
                                            более
                                            15 лет. Рудник приносит около 300000 тонн угля в месяц.
                                        </p>
                                    </div>
                                    <div className="big__projects-item">
                                        <img className="big__projects-img" src="/src/img/resource-3.jpg" alt="Стадион"/>
                                        <hr/>
                                        <h3>
                                            Карьер "Початая гора"
                                        </h3>
                                        <p>
                                            Добыча началась 4 года назад и уже принесла несколько видов полезных ископаемых,
                                            которые компания поставляет по территории всей России.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </ScrollableAnchor>

                <Calculator/>

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
                                    <p className="contacts__content-text">НЕВСКИЙ ПРОСПЕКТ 140, ОФИС 140-142</p>
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
                                    <p className="contacts__content-text">ПН-СБ</p>
                                    <p className="contacts__content-text">10:00 - 20:00</p>
                                </div>
                                <div className="contacts__content">
                                    <img src="/src/img/svg/mesto.svg" alt="Местоположение"/>
                                    <h3 className="contacts__info">E-MAIL:</h3>
                                    <a href="mailto:nefedov_it@mail.ru"
                                       className="contacts__content-text">
                                <span className="span-mail">
                                    MAIL@MAIL.RU
                                </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollableAnchor>

            </main>

            <footer className="footer">
                <div className="container">
                    <div className="footer__body">
                        <div className="footer__body-name">
                            <p>&copy; 2022 Resource Company LTD.</p>
                        </div>
                        <div className="footer-block block-p">
                            Powered by NEFEDOV_IT and Simeon_Ermolin
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
