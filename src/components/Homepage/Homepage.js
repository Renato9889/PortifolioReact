import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Olá<span className='wave'>👋 </span></h2>
            <h2 className='nametext'>Eu sou o Renato</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/Renato9889");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/renato-luiz-de-almeida-590472214/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' /></button>
            <button onClick={() => {
              window.open("https://www.instagram.com/renato_luizx3/");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home