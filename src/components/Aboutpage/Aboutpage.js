// Aboutpage.js - Atualizado com container para imagem
import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'

function Aboutpage() {
    return (
        <div id='aboutoage' className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                  <Col md={7}>
                      <h3 className='aboutmetext'>Sobre Mim</h3>
                      <p className='aboutdetails'>
                          Sou Bacharel em Ciência da Computação pela Universidade Federal do Tocantins e um profissional apaixonado por tecnologia. Atualmente, estou trabalhando como Analista em Tecnologia da Informação na Gerência de Sistemas da Secretaria de Educação do Estado do Tocantins (SEDUC), onde atuo como desenvolvedor fullstack e líder de projetos. Minhas principais características como profissional incluem inovação, inteligência, organização, excelente gerenciamento de tempo, liderança, comprometimento, foco, respeito, comunicação, proatividade, harmonia e, claro, competência como desenvolvedor.
                      </p>
                      <p className='aboutdetails'>
                          Meu objetivo como Desenvolvedor FullStack é impulsionar tecnologias, criar soluções que façam a diferença, desenvolver sistemas com excelência, comunicar-me com os clientes de forma a compreender seus problemas e desejos, cultivar relacionamentos positivos e respeitosos, crescer como profissional e tornar-me uma referência na área.
                      </p>
                  </Col>
                  <Col md={5}>
                      {/* ATUALIZADO: Container para centralizar a imagem */}
                      <div className="image-container">
                        <div className="webimage">
                          <img src={require('../../Assets/perfilRenato.jpg')} alt="Renato Luiz" />
                        </div>
                      </div>
                  </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage;