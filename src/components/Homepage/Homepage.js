// Homepage.js
import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMail,
} from "react-icons/ai";
import { FaLinkedinIn} from "react-icons/fa";

function Home() {
  return (
    <section id='homepage' className='homepage-section'>
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col md={7} className="home-content">
            <h6 className='greeting-text'>Olá, eu sou</h6>
            <h1 className='headtext'>Renato Luiz</h1>
            <h2 className='subtext'><Text /></h2>
            <p className='description-text'>
             "Desenvolvedor FullStack que busca criar soluções que façam diferença, unindo tecnologia, excelência e empatia para compreender necessidades, resolver problemas e crescer junto com cada projeto."
            </p>
            <div className="social-links">
              <button onClick={() => window.open("https://github.com/Renato9889")}
                className='social-btn'><AiFillGithub className='icon' /></button>
              <button onClick={() => window.open("https://www.linkedin.com/in/renato-luiz-de-almeida-590472214/")}
                className='social-btn'><FaLinkedinIn className='icon' /></button>
              <button onClick={() => window.open("https://www.instagram.com/renato_luizx3/")}
                className='social-btn'><AiFillInstagram className='icon' /></button>
              <button onClick={() => window.open('mailto:renatoluiz3498@gmail.com?subject=Via Portifólio')}
                className='social-btn'><AiFillMail className='icon'/></button>
            </div>
            <div className="cta-buttons">
              <button className="btn-primary-custom me-3" onClick={() => document.getElementById('projectpage').scrollIntoView({ behavior: 'smooth' })}>
                Ver Projetos
              </button>
              <button className="btn-outline-custom" onClick={() => window.open('mailto:renatoluiz3498@gmail.com?subject=Via Portifólio')}>
                Entrar em Contato
              </button>
            </div>
          </Col>
          <Col md={5}>
            <div className="hero-image-container">
              <div className="hero-image">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Home