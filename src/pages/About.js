import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { styled } from '@mui/material/styles';
import TechnicalSkills from '../components/TechnicalSkills';
import CodeDemo from '../components/CodeDemo';

const StyledPara = styled(Typography)(({theme}) => ({
  marginTop: '1em', 
  fontSize: '14pt',
}))

const Emphasis = styled(Box)(({theme}) => ({
  color: theme.palette.text.alternate,
}))

const EmphasisAlt = styled(Box)(({theme}) => ({
  color: theme.palette.text.secondary,
}))

const BoldBox = styled(Box)(({theme}) => ({
  fontWeight: 'bold', 
  cursor: 'pointer',
  '&:hover': {
    color: theme.palette.text.secondary
  }
}))

const About = () => {
  const [showAbout, setShowAbout] = React.useState(false);

  const toggleShow = () => {
    setShowAbout(!showAbout);
  }

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', width: '80%', marginTop: '1em' }}>
      <Box sx={{ display: 'flex', alignItems: 'center'}}>
        <Typography variant="h4">
          About Me
        </Typography>
        {showAbout && <UnfoldLessIcon style={{ paddingRight: '1em' }} onClick={toggleShow} />}
        {!showAbout && <UnfoldMoreIcon style={{ paddingRight: '1em' }} onClick={toggleShow} />}
      </Box>
      {showAbout ?
        <>
        <StyledPara variant='body1'>
        I worked as a lawyer for three years before joining the <EmphasisAlt component="span">Computer Science degree at UNSW</EmphasisAlt>, trying everything from criminal to corporate law. Yet there was always an itch I couldn’t scratch and it took me a long time to pinpoint what was missing: <Emphasis component="span">creativity</Emphasis>.
        </StyledPara>
        <StyledPara variant='body1'>
          My first lines of code helped me choose what cuisine to have for dinner using Python’s random library. It was simple (and heavily biased), but I was hooked:
        </StyledPara>
        <CodeDemo/>
        <StyledPara variant='body1'>
          Coding has opened up a new world of <Emphasis component="span">possibility</Emphasis> and <Emphasis component="span">innovation</Emphasis>. Rather than analysing the past and litigating over what has happened, I can now think in terms of what could be. My previous career allows me to bring a <Emphasis component="span">unique perspective</Emphasis> to software engineering. I appreciate that all code has context and that products are designed with purpose.
        </StyledPara>
        <StyledPara variant='body1'>
          I am now in my final year of Computer Science at UNSW. I worked as an <EmphasisAlt component="span">assistant tutor</EmphasisAlt> for COMP1511 Programming Fundamentals in 2021, was a UNSW <EmphasisAlt component="span">CSESoc Software Project team member</EmphasisAlt> in 2021, completed an internship in the Full Stack Team at <EmphasisAlt component="span">PwC</EmphasisAlt> in early 2022, and was a member of the Telemetry team in <EmphasisAlt component="span">Sunswift Racing</EmphasisAlt> for a year. There’s always more to learn and I am excited to continue my journey as a software engineer. <BoldBox component="span" onClick={toggleShow} aria-label='Minimise text'>Less</BoldBox>
        </StyledPara>
        </>
        : <StyledPara sx={{ textAlign: 'center' }}>
          <EmphasisAlt component="span" sx={{ fontWeight: 'bold' }}>tl;dr </EmphasisAlt>
          I am a  Computer Science student in my final year at UNSW looking to <Emphasis component="span">make an impact</Emphasis> in the software space. <BoldBox component="span" onClick={toggleShow} aria-label='Expand text'>More</BoldBox>
          </StyledPara>}
        <Box sx={{ marginTop: '1.5em' }}>
          <Typography variant="h5" sx={{ textAlign: 'left' }}>
          Technical Skills
          </Typography>
          <TechnicalSkills/>
        </Box>
    </Container>
  )
}

export default About;