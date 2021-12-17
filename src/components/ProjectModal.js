import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import ReactPlayer from 'react-player';

const ModalBox = styled(Box)(({theme}) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1000',
  backgroundColor: theme.palette.background.alternate,
  border: `3px solid ${theme.palette.text.alternate}`,
  borderRadius: '5px',
  boxShadow: 24,
  padding: '10px',
  color: theme.palette.text.primary,
  fontSize: '18pt',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  gap: '0.5em'
}))

const ModalTitle = styled(Typography)(({theme}) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

const ModalSkillBox = styled(Box)(({theme}) => ({
  color: theme.palette.text.secondary
}))

const ModalSubHeader = styled(Typography)(({theme}) => ({
  fontSize: '13pt',
  marginRight: '1em'
}))

const ModalChip = styled(Chip)(({theme}) => ({
  color: theme.palette.text.alternate,
  borderColor: theme.palette.text.secondary
}))

const ProjectModal = ({ showModal, setShowModal, project }) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal}
        onClose={() => setShowModal(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModal}>
          <ModalBox>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <ModalTitle id="transition-modal-title" variant="h6" component="h6">
                {project.title}
              </ModalTitle>
              <ModalChip size='medium' label={project.role} variant='outlined' />
            </Box>
            <Typography id="transition-modal-description" sx={{fontSize: '12pt' }}>
              {project.description}
            </Typography>
            <Box sx={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
              <ModalSubHeader variant="subtitle2" component="span">Team Size:</ModalSubHeader>
              {Array.from({length: project.team}).map((person, idx) => 
                <PersonIcon sx={{ pointerEvents: 'none' }} key={idx} />)}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ModalSubHeader variant="subtitle2" component="span">
                Stack:
              </ModalSubHeader>
              <Box sx={{ display: 'inline-flex', flexDirection: 'row', gap: '1em', justifyContent: 'center'}}>
                {project.skills.map((skill, idx) => {
                  return (
                    <Tooltip 
                      title={
                        <React.Fragment>
                          <Typography>{skill.title}</Typography>
                        </React.Fragment>
                      }
                      disableInteractive
                      key={idx}
                    >
                      <ModalSkillBox>{skill.icon}</ModalSkillBox>
                    </Tooltip>
                  )
                })}
              </Box>
            </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' }}}>
            <ReactPlayer
              url=''
            />
          </Box>
          </ModalBox>
        </Fade>
      </Modal>
    </div>
  );
}

export default ProjectModal;