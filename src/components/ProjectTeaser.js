import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomButton from './CustomButton';
import ProjectModal from '../components/ProjectModal';

const Teaser = styled(Box)(({theme}) => ({
  opacity: 0,
  position: 'absolute',
  zIndex: 10,
  background: theme.palette.background.primary,
  width: '100%',
  maxWidth: '400px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '&:hover': {
    opacity: 0.85,
  },
}))

const ProjectTeaser = ({ project }) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleShowProject = (e) => {
    setShowModal(true);
    console.log(e.target);
  }

  return (
    <Teaser>
      <Box >
        <Typography variant="h6">{project.title}</Typography>
        <Typography variant="body1" sx={{ fontSize: '12pt', padding: '10px' }}>{project.description}</Typography>
        <CustomButton text={'More'} handleClick={handleShowProject}/>
      </Box>
      <ProjectModal
        showModal={showModal}
        setShowModal={setShowModal}
        project={project}
      />
    </Teaser>
  )
}

export default ProjectTeaser;