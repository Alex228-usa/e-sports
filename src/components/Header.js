import React from 'react';
import './styles/Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo"></div>
      <nav className="nav-menu">
        <button onClick={toggleMenu}>Главная</button>
        {isMenuOpen && (
          <ul className="dropdown-menu">
            <li><a href="#about">О нас</a></li>
            <li><a href="#services">Услуги</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        )}
        <button onClick={toggleMenu}>Поддержка</button>
        <button onClick={toggleMenu}>Служба качества</button>
      </nav>
    </header>
  );
};

export default Header;

