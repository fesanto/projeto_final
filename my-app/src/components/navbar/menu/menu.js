import React from 'react'
import Container from '../../container'
import menu from './menu-32.png'
import './menu.css'



const Menu = (props) => {
    return (
        <Container>
                <ul className='navbar__menu-list'>
                        <a href="#header"><li>O que é?</li></a>
                        <a href="#sintomas"><li>Sintomas</li></a>
                        <a href="#casos-reais"><li>Casos Reais</li></a>
                        <a href="#curiosidades"><li>Curiosidades</li></a>
                        <a href="#contato"><li>Contato</li></a>
                    </ul>
                <div className='navbar__menu-barras'>
                    <a href="#"><img src={menu} /></a>
                </div>
        </Container>
    )
}




export default Menu