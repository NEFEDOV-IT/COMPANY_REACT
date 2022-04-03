import ScrollableAnchor from 'react-scrollable-anchor'
import React from "react";

export const Projects = () => {
    return (
        <ScrollableAnchor id={"projects"}>
            <section className="big__projects">
                <div className="container">
                    <div className="big__projects-body">
                        <div className="big__projects-h2">
                            <h2 id="t1">НАШИ САМЫЕ БОЛЬШИЕ<br/> ПРОЕКТЫ</h2>
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
    )
}
