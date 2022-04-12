import './App.css'
import React from "react";
import { configureAnchors, removeHash } from 'react-scrollable-anchor'
import { Calculator } from "./Components/Calculator/Calculator";
import { Projects } from "./Components/Projects/Projects";
import { Contacts } from "./Components/Contacts/Contacts";
import { Header } from "./Components/Header/Header";
import { WorkTime } from "./Components/WorkTime/Worktime";
import { Footer } from "./Components/Footer/Footer";
import { GraphTon } from "./Components/GraphTon/GraphTon";
import GoldView from './Components/GoldView';

removeHash()
configureAnchors({offset: -60, scrollDuration: 800})

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <WorkTime/>
            <main className="main">
                <Projects/>
                <GraphTon/>
                <Calculator/>
                <GoldView/>
                <Contacts/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
