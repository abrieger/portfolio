import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Transition } from 'react-transition-group';

const StyledBox = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '2em'
}))

const CodeBox = styled('code')(({theme}) => ({
  color: theme.palette.text.secondary,
  justifyContent: 'center',
  fontFamily: 'monospace',
  display: 'flex',
  marginTop: '0.5em',
  fontSize: '12pt',
}))

const duration = 500;

const fade = {
  transition: `opacity 500ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const getRandomInt = (max) => Math.floor(Math.random() * Math.ceil(max));

const CodeDemo = () => {
  const [showCode, setShowCode] = React.useState('');
  const [appear, setAppear] = React.useState(false);

  const food = ['Pizza', 'Pad Thai', 'Schnitzel', 'something healthy :(', 
    'Pizza!', 'Pizza!!'];

  const playCode = () => {
    setAppear(true);
    setShowCode(food[getRandomInt(food.length)]);
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAppear(false);
    }, 5000)

    return (() => clearTimeout(timer))
  }, [showCode])

  return (
    <StyledBox>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
      <PlayArrowIcon onClick={playCode} aria-label='Play code demo'/>
      <code style={{ textAlign: 'center' }}>
        print(random.choice(["Pizza", "Pad Thai", "Schnitzel", "something healthy :(", "Pizza!", "Pizza!!"]))
      </code>
      </Box>
      <Transition
      in={appear}
      timeout={duration}>
      {state => (
        <div style={{
          ...fade,
          ...transitionStyles[state]
        }}>
        <CodeBox>{showCode}</CodeBox>
        </div>)}
      </Transition>
    </StyledBox>
  )
}

export default CodeDemo;