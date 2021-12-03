import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid, Container } from '@material-ui/core';
import './Footer.css';

function Footer() {
  return (
    <footer>
            <Box className="footer-container">
                <Container maxWidth='lg'>
                    <Grid container spacing={7}>
                        <Grid item xs={12} sm={4}>
                            <Box className="titulo-f" borderBottom={1}>
                                Contato
                            </Box>
                            <Box marginTop={1}>
                                <Box className="p-f">
                                    <a href="mailto:biell.mendes8@gmail.com" color="inherit" target="_blank">
                                    E-mail
                                    </a>
                                </Box>
                                <Box className="p-f">
                                    <a href="https://www.linkedin.com/in/gabriel-mendes-0706ab1b8/" color="inherit" target="_blank">
                                    LinkedIn
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className="titulo-f" borderBottom={1}>
                                Portfólio
                            </Box>
                            <Box marginTop={1}>
                                <Box className="p-f">
                                    <a href="https://github.com/Biellms" color="inherit" target="_blank">
                                    GitHub
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className="titulo-f" borderBottom={1}>
                                Telefone
                            </Box>
                            <Box marginTop={1}>
                                <Box className="p-f">
                                    <a href="https://github.com/Biellms" color="inherit" target="_blank">
                                    (11) 95977-5765
                                    </a>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Box className="p-f" textAlign="center">
                                Gabriel Mendes © Todos os Direitos Reservados
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
  )
}

export default Footer;