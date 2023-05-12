import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>Sobre<span> Mim</span></h3>
                        <p className='aboutdetails'>
                            Sou bacharel em Ciência da Computação pela Universidade Federal do Tocantins e sempre fui uma pessoa apaixonada
                            por tecnologia. Motivado pela curiosidade e criatividade, busco sempre aprender e a criar soluções inovadoras
                            para os problemas que enfrento. 
                        </p>
                        <p className='aboutdetails'>
                            Gosto de trabalhar em equipe, sendo para mim uma oportunidade de aprender
                            através de outras perspectivas. Sempre mantive um ótimo relacionamento com as pessoas a minha volta,
                            aplicando sempre o respeito e empatia ao abrir espaço para ouvir e entender-las. Sou uma pessoa organizada, 
                            com um excelente gerenciamento de tempo onde consigo executar minhas metas com eficiência. 
                        </p>
                        <p className='aboutdetails'> 
                            No meu tempo livre, gosto de receber meus amigos para jogarmos jogos de tabuleiro
                            e assistirmos series e filmes. Amo cozinhar, andar de bicicleta e ler livros de ficção cientifica e 
                            suspense. Apaixonado por animais, cuido e crio com muito carinho de dois gatinhos que foram abandonados na rua e eu adotei.
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