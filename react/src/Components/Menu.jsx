import React, { useState } from 'react';

function ListItem({item, setMenuActive}) {
    return (
        <li>
            <a onClick={() => setMenuActive(false)} href={item.href}>{item.value}</a>
        </li>
    )
}

const Menu = ({header, items}) => {
    const [menuActive, setMenuActive] = useState(false)
    return (
        <>
            <div className="burger__btn" onClick={() => setMenuActive(!menuActive)}>
                <span className={menuActive ? 'active' : ''}/>
                <span className={menuActive ? 'active' : ''}/>
                <span className={menuActive ? 'active' : ''}/>
            </div>
            <nav className={menuActive ? 'header__nav active' : 'header__nav'}>
                <div className="menu__header">{header}</div>
                <ul>
                    {items.map((item, index) =>
                        <ListItem setMenuActive={setMenuActive} key={index} item={item}/>
                    )}
                </ul>
            </nav>
        </>
    );
};

export { Menu };
