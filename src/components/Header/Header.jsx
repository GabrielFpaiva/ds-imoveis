import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src='./logo.png' alt='logo' width={100}/>
        <div className="flexCenter h-menu">
            <a href=''>Inicio</a>
            <a href=''>Propriedades</a>
            <a href=''>Contate Nos</a>
            <button className='button'>
                <a href=''>Se inscreva!</a>
            </button>
        </div>
        </div>
    </section>
  )
}

export default Header