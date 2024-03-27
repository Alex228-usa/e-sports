import React from 'react';
import './styles/AthletePassport.css'

const AthletePassport = ({ athlete }) => {
  return (
    <div>
      <h2>Паспорт спортсмена</h2>
      <div>
        <img src={athlete.photo} alt="Фото спортсмена" />
      </div>
      <div>
        <p><strong>Имя:</strong> {athlete.name}</p>
        <p><strong>Возраст:</strong> {athlete.age}</p>
        <p><strong>Страна:</strong> {athlete.country}</p>
        <p><strong>Спорт:</strong> {athlete.sport}</p>
      </div>
    </div>
  );
};

export default AthletePassport;
