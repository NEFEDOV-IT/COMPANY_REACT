

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

export function SelectDistance({setDistance}) {
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
