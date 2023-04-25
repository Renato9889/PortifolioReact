import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import game from '../../Assets/game_home.png'
import netfliximage from '../../Assets/React-App-netflix-clone.png'
import gridlinesbuilders from '../../Assets/Gridlinesbuilders.png'
import charlespizza from '../../Assets/Charlestown-Pizza.png'
import todolist from '../../Assets/todolist.png'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={useradminpanel}
                isBlog={false}
                title="Cotação e Câmbio de Moedas Usando Python, API, Interface e POO"
                description="Projeto feito por mim que teve como finalidade aplicar conhecimentos de Python, API, interface gráfica e programação orientada a objetos. A aplicação é uma ferramenta que faz a cotação e câmbio entre moedas do mundo todo, ela exibe as informações de cotação, valor de compra, valor de venda, variação, porcentagem de variação, máximo e mínimo."
                ghLink="https://github.com/Renato9889/CotacaoCambioDeMoedasUsandoAPIePOO"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={game}
                isBlog={false}
                title="Torneio de Heróis"
                description="Web site desenvolvido em React, onde apliquei meus conhecimentos de UX/IU designer, desenvolvimento web, Java script, CSS, HTML e Bootstrap. Todo o projeto foi criação minha, onde busquei muita originalidade para mostrar minhas habilidades, usei ferramentas como o canva para o designer e a própria documentação do react para os componentes."
                ghLink="https://jogo-torneio-de-herois.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={netfliximage}
                isBlog={false}
                title="Netflix-Clone"
                description="This project is a simplified front-end clone of Netflix. It was created with React js. It uses TMDB (The Movie Data Base ) API and uses the Axios tool. Users can click movie images with embedded YouTube trailers or related videos about the movie."
                ghLink="https://react-rahul-netflix-clone.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={gridlinesbuilders}
                isBlog={false}
                title="Grid Line Builders"
                description="Grid line builders is a static webpage built with HTML, CSS, and JavaScript. Users can see images of their work and contact information that helps to connect the home builders through a webpage. webpage builds responsive to multiple sizes of devices."
                ghLink="https://gridlinesbuilders.in/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={charlespizza}
                isBlog={false}
                title="Charlestown Pizza"
                description="Charlestown pizza is a static website completely build with bootstrap with fully responsive."
                ghLink="https://rahulvijay81.github.io/Pizzastore-bootstrap/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="To Do List"
                description=" To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done."
                ghLink="https://todolist-rahul81.netlify.app/"

              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist