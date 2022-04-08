import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { YMaps } from "react-yandex-maps";
import { createStore } from "redux";
import { Provider } from "react-redux";


const calculator = {
    answer: null,
}

const reducer = (state = calculator, action) => {
    switch (action.type) {
        case 'add_answer':
            return {...state, answer: action.amount }
        default: return state
    }
}

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <YMaps>
            <App />
        </YMaps>
    </Provider>,
    document.getElementById('root')
)
