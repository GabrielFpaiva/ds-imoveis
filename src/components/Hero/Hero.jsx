import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="hero-wrapper">
    <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
        
            <div className="hero-title">
                <div className='golden-circle'/>
                <h1>Descubra<br/>As melhores<br/>Propriedades!</h1>
            </div>

            <div className="flexColStart hero-description">
                <span className='secondaryText'>lorem ipsulom lorem ipsulom lorem ipsulom</span>
                <span className='secondaryText'>lorem ipsulom lorem ipsulom lorem ipsulom</span>
            </div>

            <div className="flexCenter search-bar">
             <HiLocationMarker color='var(--primary)' size={25}/>
                <input type="text" />
                <button className='button'>Procurar</button>
            </div>

            <div className='flexCenter stats'>
                <div className='flexColCenter stat'>
                    <span>
                        <CountUp start={100} end={200} duration={4} />
                        <span>
                          +
                        </span>
                    </span>
                    <span className='secondaryText'>
                        Propriedades Vendidas
                    </span>
                </div>

            
                <div className='flexColCenter stat'>
                    <span>
                        <CountUp start={1800} end={2000} duration={4} />
                        <span>
                          +
                        </span>
                    </span>
                    <span className='secondaryText'>
                        Clientes Satisfeitos
                    </span>
                </div>
            </div>
        </div>
        

        <div className="flexCenter hero-right">
            <div className="image-container">
                <img src='./hero-image.png' alt=''/>  
            </div>
        </div>
        </div>
    </section>

  )
}

export default Hero