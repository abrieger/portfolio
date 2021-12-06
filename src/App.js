import DarkMode from './themes/DarkMode';
import { ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <ThemeProvider theme={DarkMode}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }} >
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
