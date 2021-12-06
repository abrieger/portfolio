import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Dropdown from './Dropdown';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({theme}) => ({
  backgroundColor: theme.palette.background.primary,
  background: 'none',
  boxShadow: 'none'
}));

const LogoText = styled(Typography)(({theme}) => ({
  color: theme.palette.text.alternate,
  border: `3px solid ${theme.palette.text.secondary}`,
  padding: '0 5px',
  marginBottom: '-1px'
}));

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  const pages = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar position="fixed" >
      <Container maxWidth="xxl" >
        <Toolbar disableGutters sx={{ width: '100%', justifyContent: 'space-between', display: 'flex' }} >
          <Button>
            <LogoText
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}
            >
              AB
            </LogoText>
          </Button>
          <Dropdown
            pages={pages}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
          />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}>
            {pages.map((page) => (
              <Link to={page?.to} style={{ textDecoration: 'none' }}>
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ display: 'block' }}
                  disableRipple={true}
                >
                  <Typography variant="button" sx={{ fontWeight: 'bold' }}>{page.name}</Typography>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  )
}

export default NavBar;