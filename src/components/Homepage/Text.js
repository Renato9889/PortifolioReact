import React from 'react'
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cientista da Computação",
          "Desenvolvedor Front End",
          "Ciência de Dados",
          "Desenvolvedor mobile e web",
          "UX design"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Text