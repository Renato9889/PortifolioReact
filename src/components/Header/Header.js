// Header.js - Versão Melhorada
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../../pages/style.css';

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState('homepage');

  function scrollHandler() {
    if (window.scrollY >= 50) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
    
    // Atualizar seção ativa
    const sections = ['homepage', 'aboutoage', 'habilidadespage', 'projectpage', 'contactpage'];
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    
    if (currentSection) {
      setActiveSection(currentSection);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const handleNavClick = (section) => {
    updateExpanded(false);
    setActiveSection(section);
  };

  return (
    <Navbar expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "sticky" : "navbar"}>

      <Navbar.Brand className='logotext' as={Link} to='/'>
        <span className="logo-text">R</span>
      </Navbar.Brand>

      <Navbar.Toggle className='navbar-toggler' aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      
      <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar'>
        <Nav className="ms-auto" defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link 
              href='#homepage' 
              onClick={() => handleNavClick('homepage')}
              className={activeSection === 'homepage' ? 'active' : ''}
            > 
              <span className="nav-link-number">01.</span> Home 
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              href='#aboutoage'
              onClick={() => handleNavClick('aboutoage')}
              className={activeSection === 'aboutoage' ? 'active' : ''}
            >
              <span className="nav-link-number">02.</span> Sobre
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              href='#habilidadespage'
              onClick={() => handleNavClick('habilidadespage')}
              className={activeSection === 'habilidadespage' ? 'active' : ''}
            >
              <span className="nav-link-number">03.</span> Habilidades
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              href='#projectpage'
              onClick={() => handleNavClick('projectpage')}
              className={activeSection === 'projectpage' ? 'active' : ''}
            >
              <span className="nav-link-number">04.</span> Projetos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              href='#contactpage'
              onClick={() => handleNavClick('contactpage')}
              className={activeSection === 'contactpage' ? 'active' : ''}
            >
              <span className="nav-link-number">05.</span> Contato
            </Nav.Link>
          </Nav.Item>
          <Button
            onClick={() => {
              window.open("https://drive.google.com/file/d/1A5R4L6aHYPUkwdM230ZZzTGaY6uEx7JI/view?usp=sharing");
            }}
            className='resumebtn'
          >
            <span>Currículo</span>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;