import React from 'react'
import '../../pages/style.css';
import { Container, Row} from 'react-bootstrap'
import { DiPython, DiHtml5, DiCss3, DiJavascript, DiJava, DiReact, DiMysql, DiDjango, DiDart, DiGit, DiGithubBadge, DiWindows, DiLinux, DiPostgresql, DiNodejsSmall } from 'react-icons/di'
import { SiCsharp, SiSpringboot, SiFigma, SiFlutter, SiMicrosoftoffice, SiMaterialdesign, SiTrello, SiTypescript, SiNestjs, SiNextdotjs } from 'react-icons/si'
import { SlBulb, SlGrid, SlPlane, SlPuzzle, SlMagnifier } from 'react-icons/sl'
import { GiTalk } from 'react-icons/gi'

const skills = [
  {
    title: "Linguagens de Programação",
    items: [
      { icon: <DiPython />, name: "Python" },
      { icon: <DiJava />, name: "Java" },
      { icon: <DiHtml5 />, name: "HTML5" },
      { icon: <DiCss3 />, name: "CSS3" },
      { icon: <DiJavascript />, name: "JavaScript" },
      { icon: <SiCsharp />, name: "C#" },
      { icon: <DiDart />, name: "Dart" },
      { icon: <SiTypescript />, name: "TypeScript" }
    ]
  },
  {
    title: "Frameworks e Bibliotecas",
    items: [
      { icon: <DiReact />, name: "React" },
      { icon: <SiSpringboot />, name: "Spring Boot" },
      { icon: <DiDjango />, name: "Django" },
      { icon: <SiFlutter />, name: "Flutter" },
      { icon: <SiMaterialdesign />, name: "Material-UI" },
      { icon: <DiMysql />, name: "MySQL" },
      { icon: <DiPostgresql />, name: "PostgreSQL" },
      { icon: <SiNestjs />, name: "NestJS" },
      { icon: <DiNodejsSmall />, name: "Node.js" },
      { icon: <SiNextdotjs />, name: "Next.js" }
    ]
  },
  {
    title: "Ferramentas",
    items: [
      { icon: <DiGit />, name: "Git" },
      { icon: <DiGithubBadge />, name: "GitHub" },
      { icon: <SiFigma />, name: "Figma" },
      { icon: <SiTrello />, name: "Trello" },
      { icon: <SiMicrosoftoffice />, name: "MS Office" },
      { icon: <DiWindows />, name: "Windows" },
      { icon: <DiLinux />, name: "Linux" }
    ]
  },
  {
    title: "Habilidades Sociais",
    items: [
      { icon: <SlPlane />, name: "Inglês Avançado" },
      { icon: <GiTalk />, name: "Boa Comunicação" },
      { icon: <SlBulb />, name: "Criatividade e Inovação" },
      { icon: <SlPuzzle />, name: "Excelência em Lógica de Programação" },
      { icon: <SlMagnifier />, name: "Capacidade Analítica" },
      { icon: <SlGrid />, name: "UX e UI Design" }
    ]
  }
]

function Habilidades() {
  return (
    <div id='habilidadespage' className='habilidadesbackground'>
      <Container>
        <Row className='textbackgroundhabilidades'>
          <h1 className='habilidadestext'>Habilidades</h1>
          {skills.map((category, index) => (
            <div key={index} className='skills-category'>
              <h2 className='category-title'>{category.title}</h2>
              <div className='skills-list'>
                {category.items.map((skill, idx) => (
                  <div key={idx} className='skill-item'>
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Habilidades




