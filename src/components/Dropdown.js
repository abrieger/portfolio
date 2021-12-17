import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const Dropdown = ({ pages, handleOpenNavMenu, handleCloseNavMenu, anchorElNav }) => {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="navigation button"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' }
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <Link to={page.to} style={{ textDecoration: 'none' }}>
              <Box textAlign="center" sx={{ color: 'black', display: 'flex', alignItems: 'center', gap: '1em' }}>
                <Box>{page.icon}</Box>
                <Box sx={{paddingBottom: '5px'}}>{page.name}</Box>
              </Box>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}


export default Dropdown;