import { useState } from "react";
import ScrollableAnchor from 'react-scrollable-anchor'

const options = [
    {value: '0', label: 'Выберите металл...'},
    {value: '90', label: 'Железо'},
    {value: '20', label: 'Руда'},
    {value: '250', label: 'Свинец'},
    {value: '350', label: 'Алюминий'}
]

const cities = [
    {value: '0', label: 'Выберите город...'},
    {value: '1420', label: 'Архангельск'},
    {value: '8547', label: 'Благовещенск'},
    {value: '2233', label: 'Екатеринбург'},
    {value: '1533', label: 'Казань'},
    {value: '1397', label: 'Киров'},
    {value: '716', label: 'Москва'},
    {value: '1135', label: 'Нижний Новгород'},
    {value: '4078', label: 'Новосибирск'},
    {value: '1822', label: 'Ростов-на-дону'},
    {value: '2070', label: 'Уфа'},
]

function SelectPrice({setPrice}) {
    function handleChange(e) {
        setPrice(e.target.value)
    }

    return (
        <select
            onChange={handleChange}
            className={'calculator__input'}
        >
            {options.map((item, index) => {
                return <option
                    key={index}
                    value={item.value}
                >
                    {item.label}
                </option>
            })}
        </select>
    )
}

function SelectDistance({setDistance}) {
    function handleChange(e) {
        setDistance(e.target.value)
    }

    return (
        <select
            onChange={handleChange}
            className={'calculator__input'}
        >
            {cities.map((city, index) => {
                return <option
                    key={index}
                    value={city.value}
                >
                    {city.label}
                </option>
            })}
        </select>
    )
}

const Calculator = () => {
    const [answer, setAnswer] = useState(null)
    const [valueSize, setValueSize] = useState('')
    const [distance, setDistance] = useState(null)
    const [price, setPrice] = useState(null)

    function saveValueSize(e) {
        setValueSize(e.target.value)
    }

    function calc() {
        if (!valueSize || !distance || !price) return
        setValueSize('')
        if (distance < 2000) return setAnswer(valueSize * price + (distance * 10))
        return setAnswer(valueSize * price + (distance * 40))
    }

    return (
        <ScrollableAnchor id={"calc"}>
            <div className="calculator">
                <div className="container">
                    <div className="calculator__h2">
                        Калькулятор стоимости доставки
                    </div>
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
                                <p>Примерная стоимость металла с учетом доставки:<br/>
                                    {answer ? answer + ' рублей.' : null}
                                </p>
                            </div>
                            <div className="calculator__callback">
                                <form className='calculator__form' action="#">
                                    <input placeholder='Ваше Имя' type="text"/><br/><br/>
                                    <input placeholder='Ваш E-mail' type="email"/><br/><br/>
                                    <input
                                        pattern="^[ 0-9]+$"
                                        placeholder='Номер телефона' type="tel"
                                    /><br/><br/>
                                    <button>Закажите доставку прямо сейчас!</button>
                                </form>
                            </div>
                        </div>
                        <div className="calculator__text">
                            *Отгрузка осуществляется со склада г.Санкт-Петербург. Указанная в калькуляторе стоимость
                            является
                            ориентировочной, за подробностями обращайтесь в отдел продаж!
                        </div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )
}

export { Calculator }
