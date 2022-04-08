import './App.css'
import React from "react";
import { configureAnchors, removeHash } from 'react-scrollable-anchor'
import { Calculator } from "./Components/Calculator/Calculator";
import { Projects } from "./Components/Projects";
import { Contacts } from "./Components/Contacts/Contacts";
import { Header } from "./Components/Header";
import { WorkTime } from "./Components/Worktime";
import { Footer } from "./Components/Footer";
import { GraphTon } from "./Components/GraphTon";
import GoldView from './Components/GoldView';
import { YMaps } from "react-yandex-maps";

removeHash()
configureAnchors({offset: -60, scrollDuration: 800})

function App() {
	return (
		<YMaps>
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
		</YMaps>
	)
}

export default App
