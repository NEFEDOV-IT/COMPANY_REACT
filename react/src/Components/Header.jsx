import { Menu } from "./Menu";
import ScrollableAnchor from "react-scrollable-anchor";
import React, { useEffect, useState } from "react";

const home = (
    <div className="home">
        <div className="container">
            <h1 className="h1__design">
                ДОБЫВАЕМ ПОЛЕЗНЫЕ ИСКОПАЕМЫЕ<br/>
                ДОСТАВКА ПО ВСЕЙ РОССИИ
            </h1>
            <p>золото, руда, сереберо, каменный уголь</p>
        </div>
    </div>
)

const items = [
    {value: 'Главная', href: '#home'},
    {value: 'Наши проекты', href: '#projects'},
    {value: 'График добычи руды', href: '#graph'},
    {value: 'Калькулятор доставки металлов', href: '#calc'},
    {value: 'График стоимости зотота', href: '#goldView'},
    {value: 'Контакты', href: '#contacts'},
]

export const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    return (
        <ScrollableAnchor id={"home"}>
            <section className="first-screen">
                <header className="header">
                    <div className={scroll ? 'header__body active' : 'header__body'}>
                        <div className="header__icon">
                            <a href={"#home"}>
                                <img src="/src/img/svg/logo.svg" alt=""/>
                            </a>
                        </div>
                        <div className="header__text">
                            Resource Company LTD.
                        </div>

                        <Menu
                            setScroll={setScroll}
                            scroll={scroll}
                            header={'Меню'}
                            items={items}
                        />

                    </div>
                </header>

                {home}
            </section>
        </ScrollableAnchor>
    )
}
