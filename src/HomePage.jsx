import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Товары ХХХ 18+</h1>
        <nav>
          <ul>
            <li>
              <Link to="/signin">Войти</Link>
            </li>
            <li>
              <Link to="/signup">Зарегистрироваться</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/*доп. контент главной страницы */}
    </div>
  );
};

export default HomePage;
