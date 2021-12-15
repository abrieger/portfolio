import { createTheme } from '@mui/material/styles';

let DarkMode = createTheme({
  palette: {
    background: {
      alternate: '#111',
      secondary: '#ffffff',
      primary: '#222',
    },
    text: {
      primary: '#ffffff',
      secondary: '#e6dc87',
      alternate: '#70ffde'
    }
  },
})

DarkMode = createTheme(DarkMode, {
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: DarkMode.palette.text.primary
        }
      }
    },

    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: DarkMode.palette.text.primary,
          fontSize: '22pt',
          cursor: 'pointer',
          '&:hover': {
            color: DarkMode.palette.text.secondary,
          }
        }
      }
    }
  },
})

export default DarkMode;