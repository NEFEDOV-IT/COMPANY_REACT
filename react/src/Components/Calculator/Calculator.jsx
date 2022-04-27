import React, { useState } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'
import { SelectPrice } from './SelectPrice'
import { SelectDistance } from "./SelectDistance";
import { useDispatch, useSelector } from "react-redux";
import { addAnswer } from "../../Actions";
import './Calculator.css'

const calculatorH2 = (
  <div className="calculator__h2">
    Калькулятор стоимости доставки
  </div>
)

const calcCallBack = (
  <div className="calculator__callback">
    <form className='calculator__form' action="react/src/Components/Calculator/Calculator#">
      <input placeholder='Ваше Имя' type="text"/><br/><br/>
      <input placeholder='Ваш E-mail' type="email"/><br/><br/>
      <input
        pattern="^[ 0-9]+$"
        placeholder='Номер телефона' type="tel"
      /><br/><br/>
      <button onClick={(e) => e.preventDefault()}>Закажите доставку прямо сейчас!</button>
    </form>
  </div>
)

const calcText = (
  <div className="calculator__text">
    *Отгрузка осуществляется со склада г.Санкт-Петербург. Указанная в калькуляторе стоимость
    является
    ориентировочной, за подробностями обращайтесь в отдел продаж!
  </div>
)

const Calculator = () => {
  const [valueSize, setValueSize] = useState('')
  const [distance, setDistance] = useState(null)
  const [price, setPrice] = useState(null)

  const dispatch = useDispatch()
  const ans = useSelector(state => state.answer)

  function saveValueSize(e) {
    setValueSize(e.target.value)
  }

  function calc() {
    if (!valueSize || !distance || !price) return
    setValueSize('')
    const answer = valueSize * price + (distance * 10)
    if (distance < 2000) return dispatch(addAnswer(answer))
    return dispatch(addAnswer(answer * 4))
  }

  return (
    <ScrollableAnchor id={"calc"}>
      <section className="calculator">
        <div className="container">
          {calculatorH2}
          <div className="calculator__item">
            <div className="calculator__content">
              <div className="calculator__body">
                <input
                  value={valueSize}
                  onChange={saveValueSize}
                  placeholder={'Укажите вес в килограммах'}
                  type="number"
                /><br/><br/>
                <SelectPrice setPrice={setPrice}/><br/><br/>
                <SelectDistance setDistance={setDistance}/><br/><br/>
                <button onClick={calc}>Рассчитать!</button>
                <br/><br/>
                <p className={'calculator__answer'}>
                  Примерная стоимость металла с учетом доставки:<br/>
                  {ans && ans + ' рублей.'}
                </p>
              </div>
              {calcCallBack}
            </div>
            {calcText}
          </div>
        </div>
      </section>
    </ScrollableAnchor>
  )
}

export { Calculator }
