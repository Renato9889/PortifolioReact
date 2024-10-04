import React from 'react';
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap';
import useradminpanel from '../../Assets/Admin-Panel-Dashboard.png';
import game from '../../Assets/game_home.png';
import javaimg from '../../Assets/java_app.png';
import django from '../../Assets/encyclopidia.png';
import pibic from '../../Assets/pibic.png';
import django2 from '../../Assets/commerce.png';
import mail from '../../Assets/mail.png';
import usersgb from '../../Assets/sgb.png';
import usercertifica from '../../Assets/certifica.png';
import userescolaquetransforma from '../../Assets/EscolaQueTransforma.png';
import ams from '../../Assets/ams.png';

function Projectlist() {
  return (
    <div id='projectpage' className="projectbackground">
      <Container className="project-container">
        <p className="projectext">Projetos</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usersgb}
              isBlog={false}
              title="SGB - Sistema de Gerenciamento de Bolsistas"
              description="O Sistema de Gerenciamento de Bolsistas (SGB) do Programa de Bolsa Permanência (PROFE) facilita a administração e o suporte aos estudantes beneficiados, otimizando a eficiência administrativa e contribuindo para o sucesso acadêmico. Desenvolvido com uma interface intuitiva em React e back-end em Spring Boot, o SGB garante estabilidade e acessibilidade para todos os usuários."
              ghLink="https://sgb.seduc.to.gov.br/login"
              buttonText="Visualizar"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={usercertifica}
              isBlog={false}
              title="Certifica - Sistema de Certificados"
              description="Software web dedicado à automatização do processo de progressão de carreira para os servidores da educação do estado do Tocantins. Sistema desenvolvido em react e spring boot. Planejado como uma plataforma web em React e Spring Boot acessível a partir de qualquer dispositivo conectado à internet, o sistema oferece muitas funcionalidades para servidores e profissionais de Recursos Humanos (RH)."
              ghLink="https://certifica.seduc.to.gov.br"
              buttonText="Visualizar"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={userescolaquetransforma}
              isBlog={false}
              title="Aplicativo Escola Que Transforma"
              description="O aplicativo Escola que Transforma foi desenvolvido  em AppSheet, uma ferramenta Google, em parceria com o Prêmio Escola que Transforma, promovido pelo governo do estado. Esta plataforma é dedicada a reconhecer e valorizar as boas práticas educacionais desenvolvidas nas escolas públicas tocantinenses."
              ghLink="https://www.appsheet.com/start/842c6c08-4b6f-4fc7-9dcf-620d73120bb9"
              buttonText="Visualizar"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ams}
              isBlog={false}
              title="Site AMS - Comércio e Empreendimentos"
              description="Site desenvolvido em React para a empresa Tocantinense AMS Comércio e Empreendimentos Ltda, especializada em licitações de equipamentos tecnológicos. Configurei o DNS e o domínio, além de criar os e-mails corporativos da empresa."
              ghLink="https://amsempreendimento.com.br/"
              buttonText="Visualizar"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={useradminpanel}
              isBlog={false}
              title="Cotação e Câmbio de Moedas Usando Python, API, Interface e POO"
              description="Projeto feito por mim que teve como finalidade aplicar conhecimentos de Python, API, interface gráfica e POO. A aplicação é uma ferramenta que faz a cotação e câmbio entre moedas do mundo todo, ela exibe as informações de cotação, valor de compra, valor de venda, variação, porcentagem de variação, máximo e mínimo."
              ghLink="https://github.com/Renato9889/CotacaoCambioDeMoedasUsandoAPIePOO"
              buttonText="Visualizar"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Torneio de Heróis"
              description="Web site desenvolvido em React, onde apliquei meus conhecimentos de UX/IU designer, desenvolvimento web, Java script, CSS, HTML e Bootstrap. Todo o projeto foi criação minha, onde busquei muita originalidade para mostrar minhas habilidades, usei ferramentas como o canva para o designer e a própria documentação do react para os componentes."
              ghLink="https://jogo-torneio-de-herois.vercel.app/"
              buttonText="Visualizar"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={javaimg}
              isBlog={false}
              title="Catálogo de Filmes em Java"
              description="Projeto desenvovido em Java usando POO, Interface e manipulação de arquivos. Trata-se de um sistema de catalogo de filmes onde o usuário poderá através da interface fazer as ações desejadas, um sistema simples graficamente mas com ,uitas funcionalidades para você trabalhar com manipulação de dados, o sistema permite cadastrar bases de dados, adicionar filmes nessas bases, pesquisar, editar e excluir dados."
              ghLink="https://github.com/Renato9889/CatalogoDeFilmes_JAVA"
              buttonText="Visualizar"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={django}
              isBlog={false}
              title="Encyclopedia in DJango"
              description="Encyclopedia project developed in Django for Harvard University's Python and JavaScript web programming course. This project is an online encyclopedia similar to Wikipedia, where the user is able to search and create pages, in addition to being able to use several other features, such as displaying random pages, viewing all available pages and editing them."
              ghLink="https://github.com/Renato9889/project1"
              buttonText="Visualizar"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pibic}
              isBlog={false}
              title="ANÁLISE COMPUTACIONAL DE DADOS DE RECURSOS HÍDRICOS DO ESTADO DO TOCANTINS"
              description="Este trabalho busca analisar computacionalmente os dados de vazão e chuva das estações Telemétricas e Convencionais localizadas na Bacia do Rio Formoso, com o intuito de identificar os fatores que vem contribuindo com os problemas de escassez hídrica enfrentados na bacia nos últimos anos."
              ghLink="https://www.even3.com.br/anais/sicuft/288953-analise-computacional-de-dados-de-recursos-hidricos-do-estado-do-tocantins/"
              buttonText="Visualizar"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={django2}
              isBlog={false}
              title="E-COMMERCE Django"
              description="Design of an e-commerce auction site that allowed users to post auction listings, bid on listings, comment on those listings, and add listings to a “watchlist”"
              ghLink="https://github.com/Renato9889/commerce"
              buttonText="Visualizar"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mail}
              isBlog={false}
              title="E-Mail feito com JavaScript e usando Api"
              description="Este projeto é um design front-end para um cliente de email que faz chamadas de API para enviar e receber emails, com foco em JavaScript e APIs."
              ghLink="https://github.com/Renato9889/mail"
              buttonText="Visualizar"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projectlist;
