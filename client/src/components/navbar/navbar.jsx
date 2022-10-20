import React from "react";
import { Link } from 'react-router-dom'
import s from './navbar.module.css'
import img from './rick-and-morty-wazzaldorp-deviantart-34.png'

const Navbar = () => {
  return (
    <div className={s.containerNav} >
      <Link to='/'>
        <img className={s.img} src={img} alt="asd" />
      </Link>
      <div className={s.containerDiv}>
        <Link to='/create'>
          <button className={s.button}> Create </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;