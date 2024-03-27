import React, { useState } from 'react';
import './styles/AthleteCard.css';

const AthleteCard = ({ athlete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedAthlete, setUpdatedAthlete] = useState({ ...athlete });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setUpdatedAthlete((prevAthlete) => ({
        ...prevAthlete,
        [name]: value,
      }));
    };
  
    const handleEditClick = () => {
      setIsEditing(true);
    };
  
    const handleSaveClick = () => {
      // Здесь можно добавить логику для сохранения обновленных данных на сервере
      setIsEditing(false);
    };
  
    return (
      <div className="athlete-card">
        {isEditing ? (
          <div className="edit-form">
            <h2>Паспортные данные</h2>
            <div>
              <label>Регистрационный номер:</label>
              <input
                type="text"
                name="registrationNumber"
                value={updatedAthlete.registrationNumber}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>ФИО:</label>
              <input
                type="text"
                name="fullName"
                value={updatedAthlete.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Национальность:</label>
              <select
                name="nationality"
                value={updatedAthlete.nationality}
                onChange={handleInputChange}
              >
                <option value="kazakh">Казах</option>
                <option value="uzbek">Узбек</option>
                <option value="russian">Русский</option>
              </select>
            </div>
            <div>
              <label>Пол:</label>
              <select
                name="gender"
                value={updatedAthlete.gender}
                onChange={handleInputChange}
              >
                <option value="male">Мужской</option>
                <option value="female">Женский</option>
              </select>
            </div>
            {/* Добавьте другие поля и разделы здесь */}
            <button onClick={handleSaveClick}>Сохранить</button>
          </div>
        ) : (
          <div className="athlete-info">
            <h2>{athlete.fullName}</h2>
            <p>Регистрационный номер: {athlete.registrationNumber}</p>
            <p>Национальность: {athlete.nationality}</p>
            <p>Пол: {athlete.gender}</p>
            {/* Добавьте другие поля и разделы здесь */}
            <button onClick={handleEditClick}>Редактировать</button>
          </div>
        )}
      </div>
    );
  };
  
  export default AthleteCard;
  