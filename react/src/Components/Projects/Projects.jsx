import ScrollableAnchor from 'react-scrollable-anchor'
import React from "react";
import './Projects.css'

const bigProjectsH2 = (
    <div className="big__projects-h2">
        <h2>НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h2>
    </div>
)

const bigProjectsInfo = [
    {
        img: '/src/img/resource.jpg',
        name: 'Карьер "Никольский"',
        text: 'Первый наш проект. Добываем более 25 лет полезные ископаемые, ' +
            'оборудованы места для рабочих и техники. Мы гордимся данным проектом.',
        id: 1,
    },
    {
        img: '/src/img/resource-2.jpg',
        name: 'Рудник "Ново-Каменск"',
        text: 'Разработка шахты велась 2 года, полезные ископаемые добываются из недр земли' +
            'более 15 лет. Рудник приносит около 300000 тонн угля в месяц.',
        id: 2,
    },
    {
        img: '/src/img/resource-3.jpg',
        name: 'Карьер "Початая гора"',
        text: 'Добыча началась 4 года назад и уже принесла несколько видов полезных ископаемых,' +
            'которые компания поставляет по территории всей России.',
        id: 3,
    }
]

function BigProjectsItems({item}) {
    return (
        <div className="big__projects-item">
            <img className="big__projects-img" src={item.img} alt={item.name}/>
            <hr/>
            <h3>
                {item.name}
            </h3>
            <p>
                {item.text}
            </p>
        </div>
    )
}

export const Projects = () => {
    return (
        <ScrollableAnchor id={"projects"}>
            <section className="big__projects">
                <div className="container">
                    <div className="big__projects-body">
                        {bigProjectsH2}
                        <div className="big__projects-items">
                            {bigProjectsInfo.map(item => {
                                return <BigProjectsItems
                                    item={item}
                                    key={item.id}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </ScrollableAnchor>
    )
}
