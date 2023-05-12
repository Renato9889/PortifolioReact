import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'

function Habilidades() {
    return (
        <div className='habilidadesbackground'>
            <Container>
                <Row className='textbackgroundhabilidades'>
                    <h3 className='habilidadestext'>Habilidades</h3>
                    <ul className='skilllist'>
                            <Row>
                                <Col md={4}>
                                    <li>Python</li>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Java</li>
                                    <li>C#</li>
                                    <li>React</li>
                                    <li>Mobille Flutter(Dart)</li>
                                    <li>MySQL e SQL Sever</li>
                                </Col>
                                <Col md={4}>
                                    <li>Django</li>
                                    <li>UX e UI design</li>
                                    <li>Inglês Avançado</li>
                                    <li>Material-ui</li>
                                    <li>Git/Github</li>
                                    <li>Estrutura de dados</li>
                                    <li>Front-end</li>
                                    <li>Back-end</li>
                                </Col>
                                <Col md={4}>
                                    <li>SO Windows e Linux</li>
                                    <li>Figma</li>
                                    <li>Trello</li>
                                    <li>Domínio de MS Office</li>
                                    <li>Boa comunicação</li>
                                    <li>Criatividade e Inovação</li>
                                    <li>Capacidade analítica</li>
                                    <li>Exelente Lógica de programação</li>
                                </Col>
                            </Row>
                        </ul>
                </Row>
            </Container>
        </div>
    )
}

export default Habilidades


