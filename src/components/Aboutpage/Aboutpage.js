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
                        Com um domínio abrangente em programação, conquistado ao longo de experiências profissionais, 
                        dentro de sala de aula e na realização de projetos pessoais, tenho foco em especial em duas 
                        áreas especificas: a primeira delas é Front-end, que engloba aspectos de UX/UI designer 
                        e desenvolvimento de soluções web e mobile. A segunda é a Ciência de Dados, onde possuo 
                        conhecimentos sólidos em mineração de dados e inteligência artificial. 
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