import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png'
import game from '../../Assets/game_home.png'
import javaimg from '../../Assets/java_app.png'


function Projectlist() {
  return (
    <div id='projectpage' className="projectbackground">
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
                imgPath={javaimg}
                isBlog={false}
                title="Catálogo de Filmes em Java"
                description="Projeto desenvovido em Java usando POO, Interface e manipulação de arquivos. Trata-se de um sistema de catalogo de filmes onde o usuário poderá através da interface fazer as ações desejadas, um sistema simples graficamente mas com ,uitas funcionalidades para você trabalhar com manipulação de dados, o sistema permite cadastrar bases de dados, adicionar filmes nessas bases, pesquisar, editar e excluir dados."
                ghLink="https://github.com/Renato9889/CatalogoDeFilmes_JAVA"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist