import ScrollableAnchor from "react-scrollable-anchor";
import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const graph = {
    h2: (
        <div className="graphTon__h2">
            График добычи руды за прошлый год
        </div>
    ),
    text: (
        <div className="graphTon__text">
            <p>*Добыча руды указана в тоннах за месяц.</p>
            <span className={'graphTon__text-ton'}> &nbsp; - Фактическая добыча</span>
            <span className={'graphTon__text-plan'}> &nbsp; - Плановая добыча</span>
        </div>
    )
}

const data = [
    {name: 'янв.', fact: 400, plan: 300},
    {name: 'фев.', fact: 300, plan: 200},
    {name: 'март', fact: 500, plan: 290},
    {name: 'апр.', fact: 700, plan: 290},
    {name: 'май', fact: 800, plan: 370},
    {name: 'июнь', fact: 900, plan: 200},
    {name: 'июль', fact: 1100, plan: 600},
    {name: 'авг.', fact: 1000, plan: 800},
    {name: 'сент.', fact: 1100, plan: 500},
    {name: 'окт.', fact: 600, plan: 400},
    {name: 'нояб.', fact: 400, plan: 200},
    {name: 'дек.', fact: 300, plan: 150},
];

const renderLineChart = (
    <ResponsiveContainer width={'100%'} height={300}>
        <LineChart data={data}>
            <Line type="monotone" dataKey="fact" stroke="#F7654A"/>
            <Line type="monotone" dataKey="plan" stroke="#656565"/>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip />
        </LineChart>
    </ResponsiveContainer>
);

export const GraphTon = () => {
    return (
        <ScrollableAnchor id={"graph"}>
            <section className={'graphTon'}>
                <div className="container">
                    {graph.h2}
                    {renderLineChart}
                    {graph.text}
                </div>
            </section>
        </ScrollableAnchor>
    )
}
