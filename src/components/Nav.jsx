import React from 'react';
import Logo from "../foto/logoHenry.jpg"
import SearchBar from './SearchBar.jsx';
import style from './Nav.module.css';


function Nav({onSearch}) {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <img src={Logo}alt="no esta"/>
        <SearchBar onSearch={onSearch}/>
      </nav>
    </div>
  );
};

export default Nav;
