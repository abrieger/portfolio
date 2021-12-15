import DarkMode from './themes/DarkMode';
import { ThemeProvider, styled} from '@mui/material/styles';
import NavBar from './components/NavBar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const Content = styled('div', {
  shouldForwardProp: (prop) => prop !== 'home'
  })(({home, theme}) => ({
    width: '100%',
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.primary,
    background: home ? 'none' : '',
    color: theme.palette.text.primary,
  }))

function App() {
  const location = useLocation();

  const isHome = () => {
    // NavBar is transparent on Home page only
    return location.pathname === '/';
  }


  return (
    <ThemeProvider theme={DarkMode}>
      <NavBar home={isHome()}/>
      <Content home={isHome()}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>
      </Content>
    </ThemeProvider>
  );
}

export default App;
