import React from 'react'
import ISSImage from './images/ISS.jpg'

const ISSBlock = ({ spacestation }) => {
  return (
    <div style={{ padding: "20px"}}>
      <h1 style={{color: "white", textAlign: "center", paddingTop: "25px "}}>Международная космическая станция</h1>
      <ul>
        <li>Масса: {spacestation.mass}</li>
        <li>Длина: {spacestation.length}</li>
        <li>Ширина: {spacestation.width}</li>
        <li>Объем: {spacestation.pressurised_volume}</li>
        <li>Перигей: {spacestation.perigee_altitude}</li>
        <li>Апогей: {spacestation.apogee_altitude}</li>
        <li>Скорость: {spacestation.orbital_speed}</li>
        <li>Период обращения: {spacestation.orbital_period}</li>
        <li>На орбите с {spacestation.in_orbit_since}</li>
        <li>Пройденное расстояние: {spacestation.distance_traveled}</li>
        <li>Мощность: {spacestation.power}</li>
        <li>Модули: Российский сегмент МКС: Заря, Звезда, Пирс, Рассвет, Поиск. Американский сегмент МКС: Юнити, Дестини, Квест, Гармония, Транквилити, Купол, BEAM, Коламбус, Леонардо, Кибо</li>
      </ul>
      <p>{spacestation.description}</p>
    </div>
  )
}

export default ISSBlock;

