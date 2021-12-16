import ParticleBackground from '../components/ParticleBackground';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ContactIcons from '../components/ContactIcons';

const MyName = styled(Box)(({theme}) => ({
  color: theme.palette.text.secondary,
  display: 'inline',
  fontSize: '1em',
  fontWeight: 'bold'
}));

const Emphasis = styled(Box)(({theme}) => ({
  color: theme.palette.text.alternate,
  display: 'inline',
  fontSize: '1em'
}))

const Home = () => {
  return (
    <div style={{ height: '100%', alignItems: 'center'}}>
      <Box sx={{ position: 'fixed', zIndex: '-1' }}>
        <ParticleBackground />
      </Box>
      <Box sx={{  marginTop: '-60px', textAlign: 'center' }} >
        <Box>
          <Typography sx={{ fontSize: '3em' }}>
            Hello, I'm <MyName component="span">Adam</MyName>
          </Typography>
          <Typography sx={{ fontSize: '1.5em', padding: '0 1em' }}>
            an aspiring <Emphasis component="span">software engineer</Emphasis>, 
            former <Emphasis component="span">lawyer</Emphasis>, 
            and current peri-peri <Emphasis component="span">pizza addict</Emphasis>.
          </Typography>
          <ContactIcons size='30pt' />
        </Box>
    </Box>
    </div>
  )
}

export default Home;