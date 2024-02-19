import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col} from 'react-bootstrap'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {DiPython,DiHtml5,DiCss3,DiJavascript,DiJava, DiReact, DiMysql, DiDjango, DiDart, DiGit, DiGithubBadge, DiWindows, DiLinux, DiPostgresql} from 'react-icons/di'
import {SiCsharp, SiSpringboot, SiFigma, SiFlutter,SiMicrosoftoffice,SiMaterialdesign, SiTrello} from 'react-icons/si'
import {SlBulb, SlGrid,SlPlane,SlPuzzle,SlMagnifier} from 'react-icons/sl'
import {CgListTree} from 'react-icons/cg'
import {GiTalk} from 'react-icons/gi'

function Habilidades() {
    return (
        <div id='habilidadespage' className='habilidadesbackground'>
            <Container>
                <Row className='textbackgroundhabilidades'>
                    <h className='habilidadestext'>Habilidades</h>
                                <Col md={4}>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#eef2f5e' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <DiPython/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Python" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <DiJava/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Java" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <DiReact/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="React" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <DiHtml5/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="HTML5" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <DiCss3/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="CSS3" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <DiJavascript/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="JavaScript" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <SiCsharp/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="C#" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <SiFlutter/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Flutter" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <DiDart/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Dart" />
                                </ListItem>
                                </List>
                                </Col>
                                <Col md={3}>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#eef2f5e' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <DiMysql/>
                                        <DiPostgresql/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="SQL/MySQL - PostgreSQL" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <SiSpringboot/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Spring Boot" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <DiDjango/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Django"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <SlGrid/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="UX e UI design"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <SlPlane/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Inglês Avançado"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <DiGit/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Git"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <DiGithubBadge/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Github"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <SiMaterialdesign/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Material-UI"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <CgListTree/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Estrutura de dados"/>
                                </ListItem>
                                </List>
                                </Col>
                                <Col md={3}>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#eef2f5e' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <DiWindows/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="SO Windowns"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <DiLinux/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="SO Linux"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <SiFigma/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Figma"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <SiTrello/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Trello"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <SiMicrosoftoffice/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Domínio de MS Office"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <GiTalk/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Boa comunicação"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <SlBulb/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Criatividade e Inovação"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <SlPuzzle/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Exelente Lógica de programação"/>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                    <Avatar>
                                        <SlMagnifier/>
                                    </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Capacidade analítica"/>
                                </ListItem>
                                </List>
                                </Col>    
                </Row>
            </Container>
        </div>
    )
}

export default Habilidades


