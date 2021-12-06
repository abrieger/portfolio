import ParticleBackground from '../components/ParticleBackground';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';

const MyName = styled(Typography)(({theme}) => ({
  color: theme.palette.text.secondary,
  display: 'inline',
  fontSize: '1em',
  fontWeight: 'bold'
}));

const Emphasis = styled(Typography)(({theme}) => ({
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
    <Box sx={{ display: 'flex', height: '100%', alignItems: 'center', textAlign: 'center' }} >
      <Box>
        <Typography sx={{ fontSize: '2.5em' }}>
          Hello, I'm <MyName>Adam</MyName>
        </Typography>
        <Typography sx={{ fontSize: '1.2em' }}>
          an aspiring <Emphasis>software engineer</Emphasis>, 
          former <Emphasis>lawyer</Emphasis>, 
          and peri-peri <Emphasis>pizza addict</Emphasis>.
        </Typography>
      </Box>
    </Box>
    </div>
  )
}

export default Home;