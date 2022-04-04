import './App.css'
import React from "react";
import { configureAnchors } from 'react-scrollable-anchor'
import { Calculator } from "./Components/Calculator";
import { removeHash } from 'react-scrollable-anchor'
import { Projects } from "./Components/Projects";
import { Contacts } from "./Components/Contacts";
import { Header } from "./Components/Header";
import { WorkTime } from "./Components/Worktime";
import { Footer } from "./Components/Footer";
import { GraphTon } from "./Components/GraphTon";
import GoldView from './Components/GoldView';

removeHash()
configureAnchors({offset: -60, scrollDuration: 800})

function App() {
    return (
        <div className="wrapper">
            <Header />
            <WorkTime />
            <main className="main">
                <Projects />
                <GraphTon />
                <Calculator />
                <GoldView />
                <Contacts />
            </main>
            <Footer />
        </div>
    )
}

export default App
