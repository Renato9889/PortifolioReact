import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Entrar em contato</h2>
        <p className='contactpara'>  
          Busco oportunidade de trabalho após minha formação em Ciência da Computação, 
          tendo em vista desenvolver minhas<br />habilidades e aplicar meus conhecimentos com profissionalismo e excelência,
          em busca experiência, estou <br />determinado a ser o melhor profissional possível, 
          aberto para aprender cada dia mais e disposto<br /> a supurar qualquer dificuldade.
          Se houver alguma vaga, minha caixa de mensagem<br /> estará sempre aberta. Se 
            você tiver mais alguma dúvida ou <br />apenas quizer dizer olá, 
           farei o possível para entrar em<br /> contato com voçê!</p>
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