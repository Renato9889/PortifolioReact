import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div id='aboutoage'className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>Sobre Mim</h3>
                        <p className='aboutdetails'>
                        Bacharel em Ciência da Computação pela Universidade Federal do Tocantins, 
                        sempre fui uma pessoa apaixonada por tecnologia e motivada pela curiosidade 
                        e criatividade. Busco sempre aprender e a criar soluções inovadoras para os problemas 
                        que enfrento. Sou organizado e tenho um ótimo gerenciamento de tempo, o que me permite 
                        ter sucesso em alcançar metas estabelecidas. 
                        </p>
                        <p className='aboutdetails'>
                        Em busca de crescimento profissional, carrego comigo o desejo de desenvolver minhas habilidades e me destacar como um 
                        profissional de excelência. Tenho experiências em desenvolvimento web usando os frameworks React e Django,
                         o que possibilitou desenvolver minhas habilidades em design UX/UI e na criação de interfaces inteligentes e interativas de alta qualidade. Também carrego experiências em Ciência de Dados,
                          onde trabalhei um ano e dois meses em um projeto que constituiu na realização da mineração dos dados hidrográficos do 
                          Tocantins em busca de conhecimento, realizei todos os processos do KDD, da limpeza a aplicação dos algoritmos de 
                          inteligência artificial da mineração. Após essa experiência, no meu projeto de graduação, voltei a trabalhar com ciência de dados, 
                          agora na exploração de dados de covid-19. 

                        </p>
                        <p className='aboutdetails'> 
                        Trabalhar em equipe é uma abordagem que aprecio profundamente, já que acredito que 
                        colaborar proporciona a oportunidade de aprender através de diversas perspectivas. Minha habilidade 
                        de cultivar relacionamentos positivos se reflete na maneira como trato as pessoas ao meu redor, 
                        sempre priorizando o respeito e a empatia. 
                        </p>
                        <p className='aboutdetails'> 
                        Além dos meus interesses técnicos, mantenho um compromisso com questões ambientais, 
                        integrando conscientemente essa abordagem em meus objetivos. Nos meus momentos de lazer, adoro receber 
                        amigos para jogos de tabuleiro, assistir series e filmes. Meus principais hobbies são, explorar a culinária,
                         me aventurar em trilhas de bicicleta e mergulhar em livros de ficção cientifica e fantasia. 
                        </p>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage