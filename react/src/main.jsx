import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import App from './App'
import { YMaps } from "react-yandex-maps";
import { applyMiddleware, compose, createStore } from "redux";
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

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))
const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <YMaps>
            <App />
        </YMaps>
    </Provider>,
    document.getElementById('root')
)
