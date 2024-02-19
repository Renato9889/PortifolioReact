import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div id='contactpage' className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Entrar em contato</h2>
        <p className='contactpara'>  
        Atualmente, estou comprometido com minha função como Analista em Tecnologia da Informação na Gerência de Sistemas da Secretaria de Educação do Estado do Tocantins (SEDUC).
         No entanto, gostaria de ressaltar que estou aberto a propostas de trabalho que possam agregar valor à minha trajetória profissional. 
         Mesmo enquanto me dedico integralmente às minhas responsabilidades atuais, estou disponível para explorar oportunidades que possam alinhar-se com meus objetivos e habilidades. 
         Minha caixa de mensagens está sempre aberta para discussões e possíveis colaborações. 
         Se houver uma oportunidade que possa ser interessante para ambas as partes, ficarei feliz em considerá-la.
       </p>
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

export default Contactpage;