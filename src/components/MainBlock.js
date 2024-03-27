import React, { useState } from 'react';
import './styles/MainBlock.css'

const MainBlock = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <section className="main-block">
      <div className="background-image">Фото на фоне</div>
      {showPopup && (
        <div className="popup">
          <h2>Авторизация</h2>
          {/* Форма для авторизации */}
        </div>
      )}
      <button onClick={handlePopup}>Авторизация</button>
    </section>
  );
};

export default MainBlock;
