import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePageAuth = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Товары ХХХ 18+</h1>
        <nav>
          <ul>
            <li>
              <Link to="/profile">Профиль</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/*доп. контент главной страницы */}
    </div>
  );
};

export default HomePageAuth;