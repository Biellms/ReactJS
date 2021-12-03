import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className='appbar'>
          <Link to='/home'>
            <Box className='pointer' >
              <Typography variant="h5" color="inherit">
                <img src="https://i.imgur.com/O1GG69J.png" alt="" width="" height="200px" />
              </Typography>
            </Box>
          </Link>
          <Box display="flex" justifyContent="start">
            <Link to='/home' className='text-decorator-none'>
              <Box mx={1} className='pointer'>
                <Typography variant="h6" color="inherit">
                  <a className='txtmenu' href="/home"> Home </a>
                </Typography>
              </Box>
            </Link>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit">
                <a className='txtmenu'> Postagens </a>
              </Typography>
            </Box>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit">
                <a className='txtmenu'>Temas</a>
              </Typography>
            </Box>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit">
                <a className='txtmenu'> Cadastrar temas </a>
              </Typography>
            </Box>
          </Box>
          <Link to='/login' className='text-decorator-none'>
            <Box mx={1} className='pointer'>
              <Typography variant="h6" color="inherit">
                <a className='txtmenu'> Logout </a>
              </Typography>
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;