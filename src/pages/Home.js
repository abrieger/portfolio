import ParticleBackground from '../components/ParticleBackground';
import { Icon, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ContactIcon from '../components/ContactIcon';

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

const IconContainer = styled(Container)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5em',
  marginTop: '0.1em',
}))

const Home = () => {
  const icons = [
    { icon: <GitHubIcon aria-label="Link to GitHub page" />,
      to: "https://github.com/abrieger" },
    { icon: <LinkedInIcon aria-label="Link to LinkedIn page" />,
      to: "https://www.linkedin.com/in/adam-brieger/" },
    { icon: <EmailIcon aria-label="Link to send an email" />,
      to: "" },
  ]

  return (
    <div style={{ height: '100%', alignItems: 'center'}}>
      <Box sx={{ position: 'fixed', zIndex: '-1' }}>
        <ParticleBackground />
      </Box>
    <Box sx={{ display: 'flex', height: '100%', alignItems: 'center', textAlign: 'center' }} >
      <Box>
        <Typography sx={{ fontSize: '2.5em' }}>
          Hello, I'm <MyName component="span">Adam</MyName>
        </Typography>
        <Typography sx={{ fontSize: '1.2em' }}>
          an aspiring <Emphasis component="span">software engineer</Emphasis>, 
          former <Emphasis component="span">lawyer</Emphasis>, 
          and peri-peri <Emphasis component="span">pizza addict</Emphasis>.
        </Typography>
        <IconContainer>
          {icons.map((icon, idx) => <ContactIcon icon={icon} />)}
        </IconContainer>
      </Box>
    </Box>
    </div>
  )
}

export default Home;