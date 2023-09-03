import React from 'react'
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cientista da Computação",
          "Desenvolvedor Front End Junior",
          "Ciência de Dados",
          "UX/IU design",
          "Desenvolvedor mobile e web"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Text