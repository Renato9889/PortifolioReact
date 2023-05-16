import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div id='contactpage' className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Entrar em contato</h2>
        <p className='contactpara'>  
          Busco oportunidade de trabalho após minha formação em Ciência da Computação, 
          tendo em vista desenvolver minhas habilidades e aplicar meus conhecimentos com profissionalismo e excelência,
          em busca de experiência, estou determinado a ser o melhor profissional possível, 
          aberto para aprender cada dia mais e disposto a superar qualquer dificuldade.
          Se houver alguma vaga, minha caixa de mensagem estará sempre aberta. Se 
            você tiver mais alguma dúvida ou apenas quizer dizer olá, 
           farei o possível para entrar em contato com você!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open('mailto:renatoluiz3498@gmail.com?subject=Via Portifólio');
          }}
        >Diga olá</button>
        <span></span>
        <hr className='line' />
      </Container>
    </div>
  )
}

export default Contactpage