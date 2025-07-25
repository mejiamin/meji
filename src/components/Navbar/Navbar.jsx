import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { menus } from './import';
import { PiList, PiX } from "react-icons/pi";

const Menu = ({ menu, onMenu, className }) => {
  return (
    <>
      {menus.map(({ id, text, name }) => (
        <p
          key={id}
          onClick={() => onMenu(name)}
        >
          <a
            href={`#${name}`}
            className={`${className} ${menu === name && 'active'}`}
          >
            {text}
          </a>
        </p>
      ))}
    </>
  )
}

const Navbar = () => {
  const [menu, setMenu] = useState('');
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar section__margin'>

      <div className="container">

        <div className="navbar-logo">
          <a href="/"><img src={logo} alt="logo" /></a>
        </div>

        <div className="navbar-container">
          <Menu
            menu={menu}
            onMenu={setMenu}
          />
        </div>

        <div className="navbar-menu">
          {toggleMenu
            ? <PiX className='tracking-in-expand' size={25} color={'#ccc'} onClick={() => setToggleMenu(false)} />
            : <PiList className='tracking-in-expand' size={25} color={'#ccc'} onClick={() => setToggleMenu(true)} />}

          {toggleMenu && (
            <div className="navbar-menu-container ">
              <Menu
                menu={menu}
                onMenu={setMenu}
                className={'tracking-in-expand '}
              />
            </div>
          )}
        </div>

      </div>

    </div>
  )
}

export default Navbar
