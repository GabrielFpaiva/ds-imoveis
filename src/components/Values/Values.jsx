import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton , AccordionItemPanel, AccordionItemState } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import './Values.css'
import data from '../../utils/accordion'
import { useState } from 'react'

const Values = () => {
  return (
    <section className="v-wrapper">
        
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                
                <div className="image-container">
                    <img src='./value.png'/>
                </div>
            </div>
            {/* right side */}

            <div className="flexColStart v-right">
                
                <span className='goldenText'>Nossos Valores</span>
                <span className='primaryText'>Tudo que entregamos pra vc</span>
                <span className='secondaryText'>Sempre o melhor serviço para vc
                <br/>
                Um lugar melhor para viver pode fazer sua vida melhor!
                </span>

                <Accordion allowMultipleExpanded={false} preExpanded={[0]}>
                    {
                      data.map((item,i)=> {
                            const [className, setClassName] = useState(null)
                        return(
                            <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                    <AccordionItemState>
                                        {({ expanded }) => 
                                            expanded
                                            ? setClassName("expanded")
                                            : setClassName("collapsed")
                                        }
                                    </AccordionItemState>
                                        <div className="flexCenter icon">
                                            {item.icon}
                                        </div>
                                        <span className='primaryText'>{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}></MdOutlineArrowDropDown>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <span className='secondaryText'>{item.detail}</span>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                      })
                    }
                </Accordion>
            </div>
        </div>

    </section>
  )
}

export default Values