// ProjectCard.js - Versão Corrigida
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../pages/style.css';

function ProjectCard({ imgPath, isBlog, title, description, ghLink, buttonText }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} className="card-img-top" />
      <Card.Body>
        <Card.Title className="card-titulo">{title}</Card.Title>
        <Card.Text className="card-text">{description}</Card.Text>
      </Card.Body>
      {/* CORREÇÃO: Botão centralizado na parte inferior */}
      <div className="view-button-container">
        <Button variant="primary" href={ghLink} target="_blank" className="view-button">
          {buttonText}
        </Button>
      </div>
    </Card>
  );
}

export default ProjectCard;

