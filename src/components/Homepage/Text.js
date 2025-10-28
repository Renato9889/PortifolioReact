// Text.js (Componente de digitação)
import React from 'react'
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cientista da Computação",
          "Desenvolvedor Full Stack",
          "UX/UI Designer",
          "Desenvolvedor Mobile e Web"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
        delay: 60,
      }}
    />
  )
}

export default Text