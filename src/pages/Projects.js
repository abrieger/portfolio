import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { projectData } from '../data/ProjectData';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import ProjectTeaser from '../components/ProjectTeaser';

const ProjectsContainer = styled(Container)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1em',
  margin: '1em 0'
}))

const Projects = () => {
  return (
    <ProjectsContainer>
      <Typography variant="h4">
        Recent Projects
      </Typography>
      <Grid 
        container
        columns={{ sm: 1, md: 2 }}
        sx={{ maxWidth: '70%', textAlign: 'center' }}
        columnSpacing={1}
        rowSpacing={1} 
      >
        {projectData.map((project) => {
          return (
            <Grid
              item
              key={project.title}
              sm={1}
              md={1}
              sx={{ display: 'flex', position: 'relative', width: '100%', height: '100%', justifyContent: 'center' }}
            >
              <img 
                src={project.image}
                style={{ width: '100%', maxWidth: '400px', objectFit: 'contain', position: 'relative', zIndex: 0, }} 
                alt='project'
              >
              </img>
              <ProjectTeaser
                project={project}
              />
            </Grid>
          )
        })}
      </Grid>
    </ProjectsContainer>
  )
}

export default Projects;