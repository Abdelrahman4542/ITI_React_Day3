import React from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';

function Navbar() {
  const MyPages = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/shop", text: "Shop" },
    
  ];

  return (
    <ul className={`${style.list} ${style.test}`}>
      {MyPages.map((page, index) => (
        <li key={index}>
          <Link to={page.to}>{page.text}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Navbar;
