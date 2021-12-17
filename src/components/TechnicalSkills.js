import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { skillIcons } from '../data/SkillIcons';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const StyledButton = styled(Button)(({selected, index, theme}) => ({
  fontSize: '11pt',
  color: selected === index ? theme.palette.background.primary 
                              : theme.palette.text.primary,
  border: `1px solid ${theme.palette.text.secondary}`,
  backgroundColor: selected === index ? theme.palette.text.secondary 
                              : theme.palette.background.primary,
  '&:hover': {
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.background.primary,
    border: `1px solid ${theme.palette.text.secondary}`,
  }
}))

const SkillsGrid = styled(Grid)(({theme}) => ({
  // fontSize: '24pt', 
  display: 'flex', 
  // flexDirection: 'column',
  // justifyContent: 'center', 
  // flexWrap: 'wrap',
  // gap: '0.5em',
  border: `1px solid ${theme.palette.text.alternate}`,
  // width: '80%',
  borderRadius: '10px',
  marginTop: '0.5em'
}))

const SmallButtonText = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'block'
  },
  [theme.breakpoints.up('sm')]: {
    display: 'none'
  }
}))

const MedButtonText = styled(Typography)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block'
  }
}))

const TechnicalSkills = () => {
  const [selected, setSelected] = React.useState('0');

  const handleClick = (e) => {
    setSelected(e.target.id[5]);
  }

  return (
  <Box sx={{ width: '100%', textAlign: 'center' }}>
    <ButtonGroup
      sx={{ marginTop: '0.5em' }}
      variant="outlined"
      aria-label="button group for filtering technical skills"
    >
      <StyledButton 
        selected={selected}
        index={'0'}
        id={'abtn-0'}
        onClick={handleClick}>
          All
      </StyledButton>
      <StyledButton 
        selected={selected}
        index={'1'}
        id={'abtn-1'}
        onClick={handleClick}>
          <SmallButtonText variant="subtitle">FE</SmallButtonText>
          <MedButtonText variant="subtitle">Frontend</MedButtonText>
      </StyledButton>
      <StyledButton 
        selected={selected}
        index={'2'}
        id={'abtn-2'}
        onClick={handleClick}>
          <SmallButtonText variant="subtitle">BE</SmallButtonText>
          <MedButtonText variant="subtitle">Backend</MedButtonText>
      </StyledButton>
      <StyledButton
        selected={selected}
        index={'3'}
        id={'abtn-3'}
        onClick={handleClick}>
          Tools
      </StyledButton>
    </ButtonGroup>
    <Container sx={{ width: '80%', marginTop: '1em', marginBottom: '1em' }}>
    <SkillsGrid container columns={{ xs: 3, sm: 8}}>
      {skillIcons.filter(skill => skill.types.includes(selected)).map((skill, idx) => {
        return (
          <Grid item xs={1} sm={2} key={idx}>
            <Tooltip title={
              <React.Fragment>
                <Typography variant="h6" color="inherit">{skill.title}</Typography>
                <Typography><b>Used in</b>: {skill.when}</Typography>
              </React.Fragment>}
              disableInteractive
            >
              <Box 
                sx={{ fontSize: '24pt', padding: '10px 0 5px 0' }}
              >
                {skill.icon}
              </Box>
            </Tooltip>
          </Grid>);
      })}
    </SkillsGrid>
    </Container>
  </Box>
  )

}

export default TechnicalSkills;