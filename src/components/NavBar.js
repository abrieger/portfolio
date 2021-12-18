import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Dropdown from './Dropdown';
import { styled } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import ComputerIcon from '@mui/icons-material/Computer';

const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'home'
  })(({home, theme}) => ({
  backgroundColor: theme.palette.background.alternate,
  background: home ? 'none' : '',
  boxShadow: 'none',
  }));

const LogoText = styled(Typography)(({theme}) => ({
  color: theme.palette.text.alternate,
  border: `3px solid ${theme.palette.text.secondary}`,
  padding: '0 5px',
  marginBottom: '-1px'
}));

const NavBarLink = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'selected' && prop !== 'name'
})(({selected, name, theme}) => ({
  fontWeight: 'bold',
  color: selected === name ? 
    theme.palette.text.alternate : theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.text.secondary
  }
}));

const iconStyle = {
  color: 'black', 
  fontSize: '18pt'
}


const NavBar = ({ home }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selected, setSelected] = React.useState('HOME');

  const pages = [
    { name: 'Home', to: '/', icon: <HomeIcon style={iconStyle} /> },
    { name: 'About', to: '/about', icon: <PersonIcon style={iconStyle}/> },
    { name: 'Projects', to: '/projects', icon: <ComputerIcon style={iconStyle}/> },
    { name: 'Contact', to: '/contact', icon: <MailIcon style={iconStyle} /> }
  ];

  const location = useLocation();
  React.useEffect(() => {
    location.pathname === '/' ? setSelected('HOME') : 
      setSelected(location.pathname.slice(1,).toUpperCase());
  }, [location.pathname])

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setSelected(e.target.innerText);
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
    <StyledAppBar position="sticky" home={home} >
      <Container maxWidth="xxl" >
        <Toolbar disableGutters sx={{ width: '100%', justifyContent: 'space-between', display: 'flex' }} >
          <Link to='/' style={{ textDecoration: 'none' }}>
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
          </Link>
          <Dropdown
            pages={pages}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
          />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-evenly' }}>
            {pages.map((page) => (
              <Link key={page.name} to={page?.to} style={{ textDecoration: 'none' }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ display: 'block' }}
                  disableRipple={true}
                  id={page.name}
                >
                  <NavBarLink variant="button" selected={selected} name={page.name.toUpperCase()}>
                    {page.name}
                  </NavBarLink>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
    </React.Fragment>
  )
}

export default NavBar;