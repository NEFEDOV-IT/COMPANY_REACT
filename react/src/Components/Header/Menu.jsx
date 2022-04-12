import React, { useState } from 'react';
import './Menu.css'

function ListItem({item, setMenuActive, setScroll}) {
    function click() {
        if (window.scrollY < 50 && item.href === '#home') setScroll(false)
        setMenuActive(false)
    }
    return (
        <li>
            <a onClick={click} href={item.href}>{item.value}</a>
        </li>
    )
}

const Menu = ({header, items, setScroll, scroll}) => {
    const [menuActive, setMenuActive] = useState(false)
    function scrollMenuActive() {
        if (window.scrollY < 50) setScroll(!scroll)
        setMenuActive(!menuActive)
    }
    return (
        <>
            <div className="burger__btn" onClick={scrollMenuActive}>
                <span className={menuActive ? 'active' : ''}/>
                <span className={menuActive ? 'active' : ''}/>
                <span className={menuActive ? 'active' : ''}/>
            </div>
            <nav className={menuActive ? 'header__nav active' : 'header__nav'}>
                <div className="menu__content">
                    <div className="menu__header">
                        {header}
                    </div>
                    <ul>
                        {items.map((item, index) =>
                            <ListItem
                                setScroll={setScroll}
                                setMenuActive={setMenuActive}
                                key={index}
                                item={item}/>
                        )}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export { Menu };
