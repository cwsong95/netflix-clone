import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 95) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    }
  }, []);

  return (<div>
    {show ? (
    <div className='nav__black'>
      <img
        className='nav__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <button className='nav__home'>
        Home
      </button>

      <button className='nav__tv'>
        TV Programs
      </button>
       <button className='nav__movies'>
        Movies
      </button>

      <img
        className='nav__avatar'
        src="https://occ-0-2433-2430.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABTw7t_oDR-SWh9ddj9kh9AlOqCabZMupMWano7R5wg9x1_KPjvABqKHNeCxcMddK7Ku9HsV6keglPmWPZeh0lKU.png?r=fcc"
        alt="Netflix Avatar"
      />
    </div>) :
    (<div className='nav'>
      <img
        className='nav__logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <button className='nav__home'>
        Home
      </button>

      <button className='nav__tv'>
        TV Programs
      </button>
       <button className='nav__movies'>
        Movies
      </button>

      <img
        className='nav__avatar'
        src="https://occ-0-2433-2430.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABTw7t_oDR-SWh9ddj9kh9AlOqCabZMupMWano7R5wg9x1_KPjvABqKHNeCxcMddK7Ku9HsV6keglPmWPZeh0lKU.png?r=fcc"
        alt="Netflix Avatar"
      />
    </div>)}
    </div>
  )
}

export default Nav
