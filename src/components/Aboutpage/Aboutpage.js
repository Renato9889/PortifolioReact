import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div id='aboutoage'className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7}>
                        <h3 className='aboutmetext'>Sobre Mim</h3>
                        <p className='aboutdetails'>
                            Atualmente, atuo como Líder de Projetos na Secretaria de Educação (Seduc), onde lidero e gerencio projetos com foco em engenharia de software. Além de minha função em engenharia de software, também atuo no desenvolvimento FullStack, apoiando minha equipe tanto no backend quanto no frontend. Minha abordagem natural para liderar e apoiar minha equipe se traduz na nossa capacidade conjunta de atingir objetivos e entregar soluções de alta qualidade. Meu estilo de liderança é colaborativo e orientado para resultados, promovendo um ambiente onde todos têm a oportunidade de contribuir para o sucesso dos nossos projetos.
                        </p>
                        <p className='aboutdetails'>
                            Sou Bacharel em Ciência da Computação pela Universidade Federal do Tocantins, e minha paixão por tecnologia, motivada pela curiosidade e criatividade, tem sido o motor da minha carreira. Como um profissional proativo, estou sempre em busca de aprender e inovar, criando soluções inteligentes para os desafios que enfrento. Minha habilidade de organização e gerenciamento de tempo é fundamental para o sucesso no cumprimento de metas e prazos estabelecidos.
                        </p>
                        <p className='aboutdetails'>
                            Valorizo profundamente o trabalho em equipe, acreditando que a colaboração oferece uma rica oportunidade de aprendizado através de diferentes perspectivas. Minha habilidade em cultivar relacionamentos positivos e respeitosos reflete meu compromisso com o respeito e a empatia, fundamentais para um ambiente de trabalho harmonioso e produtivo.
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

export default Aboutpage;