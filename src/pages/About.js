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

const About = () => {
  const [showAbout, setShowAbout] = React.useState(true);

  const toggleShow = () => {
    setShowAbout(!showAbout);
  }

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
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
          Before joining the <EmphasisAlt component="span">Computer Science degree at UNSW</EmphasisAlt>, I worked as a lawyer for three years. I tried many areas of law during that time, ranging from criminal to corporate law. Yet there was always an itch I couldn’t scratch and it took me a long time to pinpoint and articulate what was missing: <Emphasis component="span">creativity</Emphasis>.
        </StyledPara>
        <StyledPara variant='body1'>
          My first lines of code helped me choose what cuisine to have for dinner using Python’s random library. It was simple (and heavily biased), but I was hooked:
        </StyledPara>
        <CodeDemo/>
        <StyledPara variant='body1'>
          Coding has opened up a new world of <Emphasis component="span">possibility</Emphasis> and <Emphasis component="span">innovation</Emphasis>. Rather than analysing the past and litigating over what has happened, I can now think in terms of what could be. The time was not wasted in my previous career. It allows me to bring a <Emphasis component="span">unique perspective</Emphasis> to software engineering. I appreciate that all code has context and that products are designed with purpose.
        </StyledPara>
        <StyledPara variant='body1'>
          I am now in my penultimate year of Computer Science at UNSW. I have worked as an <EmphasisAlt component="span">assistant tutor</EmphasisAlt> for COMP1511 Programming Fundamentals over the past two terms, have been a member of a UNSW <EmphasisAlt component="span">CSESoc Software Project team member</EmphasisAlt> in 2021, and have recently joined <EmphasisAlt component="span">Sunswift Racing</EmphasisAlt>. There’s always more to learn and I am excited to continue this journey into software engineering.
        </StyledPara>
        </>
        : <StyledPara>
          <EmphasisAlt component="span" sx={{ fontWeight: 'bold' }}>tl;dr </EmphasisAlt>
          Software engineering lets me be <Emphasis component="span">creative</Emphasis> and think about <Emphasis component="span">what could be</Emphasis> rather than what has been.
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