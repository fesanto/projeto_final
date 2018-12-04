import React from 'react'
import abem from './abem.png'
import ame from './ame.png'
import DemoCarousel from '../carousel'
import Container from '../container'
import Label from '../label'
import Input from '../input'
import './main.css'


const Main = (props) => {
    return (
        <React.Fragment>
            <header className="header">
                <h1>O que é Esclerose Múltipla?</h1>
                <p>É uma doença inflamatória do sistema nervoso central (cérebro, medula espinhal e nervos ópticos) cujo
                    alvo é
                    o revestimento do nervo responsável pela condução dos impulsos elétricos do sistema nervoso central
                    para
                o corpo e vice-versa.</p>
                <p>Não há tratamento preventivo e não há cura, por isso, quanto mais cedo for realizado o diagnóstico,
                maiores as chances de prevenção dos danos.</p>
            </header>

            <Container>
                <section className="sintomas">
                    <h2>Sintomas</h2>
                </section>

                <section className="curiosidades">
                    <h2>Curiosidades</h2>
                    <DemoCarousel/>
                </section>

                <section className='contato'>
                    <h2>Contato</h2>
                    <div className="contato__x">
                        <div className="contato__form">
                            <Label htmlFor='name'>Nome</Label>
                            <Input id='name' type='text' placeholder='Digite seu nome' />
                            <Label htmlFor='email'>E-mail</Label>
                            <Input id='email' type='email' placeholder='Digite seu e-mail' />
                            <Label id='mensagem'>Mensagem</Label>
                            <textarea placeholder='Deixe-nos uma mensagem' cols="25" rows="5" maxLength='200'></textarea>
                            <button className='button'>Enviar</button>
                        </div>
                        <div class="contato__links">
                            <a href="http://abem.org.br/" target="_blank">
                                <img src={abem} />
                            </a>
                            <a href="https://amigosmultiplos.org.br/" target="_blank">
                                <img src={ame} />
                            </a>
                        </div>
                    </div>
                   
                </section>
                
            </Container>
        </React.Fragment>
    );
};

export default Main