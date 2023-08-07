import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div id='contactpage' className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Entrar em contato</h2>
        <p className='contactpara'>  
        Busco oportunidade de emprego após minha graduação em Ciência da Computação 
        onde eu possa aplicar meus conhecimentos e habilidades para contribuir de maneira
         significativa para projetos desafiadores. Tenho interesse particular nas áreas de Front-End 
         e Ciência de Dados, nas quais desenvolvi proficiência ao longo do tempo. Empenhado em ser um profissional
          exemplar, estou constantemente em busca de aprender e aprimorar minhas habilidades. Para mim, desafios
           são oportunidades de crescimento e estou sempre disposto a superar quaisquer dificuldades que surjam
            no caminho.
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