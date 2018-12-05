import React from 'react'
import bruna from './woman-1.png'
import karina from './woman-2.png'
import abem from './abem.png'
import ame from './ame.png'
import Carrossel from '../carousel'
import Container from '../container'
import Label from '../label'
import Input from '../input'
import './main.css'


const Main = (props) => {
    return (
        <React.Fragment>
            <header id="header" className="header">
                <h1>O que é Esclerose Múltipla?</h1>
                <p>É uma doença inflamatória do sistema nervoso central (cérebro, medula espinhal e nervos ópticos) cujo
                    alvo é
                    o revestimento do nervo responsável pela condução dos impulsos elétricos do sistema nervoso central
                    para
                o corpo e vice-versa.</p>
                <p>Não há tratamento preventivo e não há cura, por isso, quanto mais cedo for realizado o diagnóstico,
                maiores as chances de prevenção dos danos.</p>
                <p>A forma mais comum de esclerose múltipla é a remitente recorrente que evolui em surtos e os sintomas ocorrem subitamente com recuperação total ou parcial. A esclerose primariamente progressiva é a mais rara e mais maligna, apresentando uma progressão dos sintomas e deixa sequelas desde o início. A terceira forma da doença é a secundariamente progressiva, uma evolução da remitente recorrente, em que o portador piora de forma lenta e progressiva.</p>
            </header>

            <Container>
                <section id="sintomas" className="sintomas">
                    <h2>Sintomas</h2>
                    <p>Os sintomas da Esclerose Múltipla são diversos e não se apresentam na mesma maneira nas pessoas, pois depende dos nervos afetados. </p>
                </section>

                <section id="casos-reais" className="casos-reais">
                    <h2>Casos Reais</h2>
                    <div className="casos-reais__div">
                        <div className="casos-reais__div-1">
                            <img src={bruna} />
                            <h3>Bruna</h3>
                            <ul>
                                <li>1º sintoma: paralisia muscular.</li>
                                <li>Passou a cair com frequência. </li>
                                <li>Diagnósticos eram de stress.</li>
                                <li>Piora dos sintomas: visão nublada, perda do movimento das pernas enquanto dirigia, fraqueza muscular constante.</li>
                                <li>Após muitos exames, o diagnóstico de Esclerose Múltipla.</li>
                            </ul>
                        </div>

                        <div className="casos-reais__div-2">
                            <img src={karina} />
                            <h3>Karina</h3>
                            <ul>
                                <li>1º sintoma:  fraqueza e dor generalizada.</li>
                                <li>Dores nas costas e dificuldade para realizar movimentos simples como tomar banho. </li>
                                <li>Vários diagnósticos equivocados antes do diagnóstico final.</li>
                                <li>Mudança de atividade profissional em razão da limitação que a doença trouxe.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="curiosidades" className="curiosidades">
                    <h2>Curiosidades</h2>
                    <Carrossel />
                </section>

                <section id="contatp" className='contato'>
                    <h2>Contato</h2>
                    <div className="contato__div">
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