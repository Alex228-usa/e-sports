import React, { useState } from 'react';
import './styles/AthletesManagement.css'

const AthletesManagement = () => {
  const [athletes, setAthletes] = useState([]);
  const [newAthleteName, setNewAthleteName] = useState('');

  const handleAddAthlete = () => {
    if (newAthleteName.trim() !== '') {
      setAthletes([...athletes, { id: athletes.length + 1, name: newAthleteName }]);
      setNewAthleteName('');
    }
  };

  const handleDeleteAthlete = (id) => {
    const updatedAthletes = athletes.filter((athlete) => athlete.id !== id);
    setAthletes(updatedAthletes);
  };

  return (
    <div>
      <h2>Управление спортсменами</h2>
      <input
        type="text"
        value={newAthleteName}
        onChange={(e) => setNewAthleteName(e.target.value)}
        placeholder="Имя спортсмена"
      />
      <button onClick={handleAddAthlete}>Добавить спортсмена</button>
      <ul>
        {athletes.map((athlete) => (
          <li key={athlete.id}>
            {athlete.name}
            <button onClick={() => handleDeleteAthlete(athlete.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AthletesManagement;
