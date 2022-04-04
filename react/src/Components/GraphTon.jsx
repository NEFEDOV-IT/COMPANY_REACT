import ScrollableAnchor from "react-scrollable-anchor";
import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
    {name: 'янв.', fact: 400, plan: 300, amt: 2400},
    {name: 'фев.', fact: 300, plan: 200, amt: 2000},
    {name: 'март', fact: 500, plan: 290, amt: 2900},
    {name: 'апр.', fact: 700, plan: 290, amt: 2900},
    {name: 'май', fact: 800, plan: 370, amt: 2900},
    {name: 'июнь', fact: 900, plan: 200, amt: 2900},
    {name: 'июль', fact: 1100, plan: 600, amt: 2900},
    {name: 'авг.', fact: 1000, plan: 800, amt: 2900},
    {name: 'сент.', fact: 1100, plan: 500, amt: 2900},
    {name: 'окт.', fact: 600, plan: 400, amt: 2900},
    {name: 'нояб.', fact: 400, plan: 200, amt: 2900},
    {name: 'дек.', fact: 300, plan: 150, amt: 2900},
];

const renderLineChart = (
    <LineChart width={900} height={300} data={data}>
        <Line type="monotone" dataKey="fact" stroke="#F7654A" />
        <Line type="monotone" dataKey="plan" stroke="#656565" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="fact" />
        <Tooltip />
    </LineChart>
);

export const GraphTon = () => {
    return (
        <ScrollableAnchor id={"graph"}>
            <section className={'graphTon'}>
                <div className="container">
                    <div className="graphTon__h2">
                        График добычи руды за прошлый год
                    </div>
                    {renderLineChart}
                    <div className="graphTon__text">
                        <p>*Добыча руды указана в тоннах за месяц.</p>
                        <span className={'graphTon__text-ton'}> &nbsp; - Фактическая добыча</span>
                        <span className={'graphTon__text-plan'}> &nbsp; - Плановая добыча</span>
                    </div>
                </div>
            </section>
        </ScrollableAnchor>
    )
}
