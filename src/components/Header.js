import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <Link to="/">Books</Link>
      <Link to="/Categories">Categories</Link>
    </nav>
    <div>profile pic</div>
  </header>
);

export default Header;
