import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import './Propriedades.css'
import 'swiper/css'
import data from '../../utils/slider.json'
import {sliderSettings} from '../../utils/common'


const Propriedades = () => {
  return (
    <section className='r-wrapper'>
        <div className='paddings innerWidth r-container'>
            <div className='r-head flexColStart'>
                <span className='goldenText'>Melhores Escolhas</span>
                <span className='primaryText'>Populares</span>
            </div>
            
            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {data.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className='flexColStart r-card'>
                            
                            <img src={card.image} alt='Imagem da propriedade'/>
                            
                            <span className='secondaryText r-price'>
                                <span style={{color: 'var(--primary)' }}>$</span>
                                <span>{card.price}</span>
                            </span> 

                            <span className='primaryText'>{card.name}</span>
                            <span className='secondaryText'>{card.detail}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

export default Propriedades

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className='flexCenter r-buttons'>
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}