import React from 'react'
import redesFb from './fb-32.png'
import redesInst from './inst-32.png'
import redesEmail from './email-32.png'
import redesWhats from './whats-32.png'
import './footer.css'

const Footer = ( ) => {
    return (
        <footer className='footer'>
            <p>Esclarecendo a Esclerose Múltipla</p>
            <div className='footer__redes'>
                <img
                    className='footer__redes-fb'
                    src={redesFb}
                    alt='logo Facebook redondo preto'
                />
                <img
                    className='footer__redes-inst'
                    src={redesInst}
                    alt='logo Instagram redondo preto'
                />
                <img
                    className='footer__redes-email'
                    src={redesEmail}
                    alt='imagem do arroba preto'
                />
                <img
                    className='footer__redes-whats'
                    src={redesWhats}
                    alt='logo WhatsApp redondo preto'
                />
            </div>
        </footer>

    );
};

export default Footer