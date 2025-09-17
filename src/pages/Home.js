// Home.js (página principal)
import React from 'react'
import Header from '../components/Header/Header'
import Homepage from '../components/Homepage/Homepage'
import Aboutpage from '../components/Aboutpage/Aboutpage'
import Habilidades from '../components/Habilidades/Habilidades'
import Projectlist from '../components/Projectlist/Projectlist'
import Contactpage from '../components/Contactpage/Contactpage'

function Home() {
  return (
    <div className="main-container">
      <Header />
      <Homepage />
      <Aboutpage/>
      <Habilidades />
      <Projectlist />
      <Contactpage/>
    </div>
  )
}

export default Home