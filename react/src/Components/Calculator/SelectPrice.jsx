import React from "react";

const options = [
  {value: '0', label: 'Выберите металл...'},
  {value: '90', label: 'Железо'},
  {value: '20', label: 'Руда'},
  {value: '250', label: 'Свинец'},
  {value: '350', label: 'Алюминий'}
]

export const SelectPrice = ({setPrice}) => {
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
