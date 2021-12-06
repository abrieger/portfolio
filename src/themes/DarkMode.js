import { createTheme } from '@mui/material/styles';

let DarkMode = createTheme({
  palette: {
    background: {
      primary: '#2a2d37',
      secondary: '#ffffff'
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
    }
  },
})

export default DarkMode;