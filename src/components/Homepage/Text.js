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
          "UX/IU design",
          "Cientista de Dados",
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