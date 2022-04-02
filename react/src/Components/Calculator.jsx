import { useState } from "react";

const options = [
    {value: '90', label: 'Железо'},
    {value: '20', label: 'Руда'},
    {value: '250', label: 'Свинец'},
    {value: '350', label: 'Алюминий'}
]

const size = [
    {value: '0.1', label: '100 гр.'},
    {value: '1', label: '1 кг.'},
    {value: '100', label: '100 кг.'},
    {value: '1000', label: '1 тн.'}
]

const cities = [
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

const Calculator = () => {
    const [answer, setAnswer] = useState(null)
    const [valueKm, setValueKm] = useState('')
    const [valueSize, setValueSize] = useState('')

    function saveValueKm(e) {
        setValueKm(e.target.value)
    }

    function saveValueSize(e) {
        setValueSize(e.target.value)
    }

    function calc() {
        if (!valueKm || !valueSize) return
        setValueKm('')
        setValueSize('')
        if (valueKm > 1000) {
            return setAnswer(valueKm * valueSize * 1.2)
        }
        if (valueSize > 100) {
            return setAnswer(valueKm * 40)
        }
        return setAnswer(valueKm * valueSize)
    }

    return (
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
                                type="text"
                            /><br/><br/>
                            <input
                                value={valueKm}
                                onChange={saveValueKm}
                                placeholder={'Укажите расстояние до Вашего города'}
                                type="text"
                            /><br/><br/>
                            <button onClick={calc}>Рассчитать!</button>
                            <br/><br/>
                            <p>Примерная стоимость доставки:<br/>
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
                        *Отгрузка осуществляется со склада г.Санкт-Петербург. Указанная в калькуляторе стоимость является
                        ориентировочной, за подробностями обращайтесь в отдел продаж!
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Calculator }
