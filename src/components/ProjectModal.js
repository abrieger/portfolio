import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';
import ReactPlayer from 'react-player';
import { AiOutlineInfoCircle } from "react-icons/ai";
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from '@mui/material/Link';

const ModalBox = styled(Box)(({theme}) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
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
  color: theme.palette.text.secondary,
  fontSize: '14.5pt',
  padding: '0 10px'
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
  borderColor: theme.palette.text.secondary,
}))

const ModalWarning = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.text.secondary,
  color: theme.palette.background.primary
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
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
              <Box>
                <Tooltip title={
                    <React.Fragment>
                      <Typography>YouTube Demo</Typography>
                    </React.Fragment>
                  } 
                  disableInteractive
                  placement='top'
                >
                  <Link href={project.video} underline='none' rel='noopener noreferrer' target='_blank'>
                    <YouTubeIcon style={{ fontSize: '24pt'}} />
                  </Link>
                </Tooltip>
              </Box>
              <ModalTitle id="transition-modal-title" variant="h6" component="h6">
                {project.title}
              </ModalTitle>
              <ModalChip size='small' label={project.role} variant='outlined' />
            </Box>
            {project.warning !== '' && 
            <ModalWarning>
              <AiOutlineInfoCircle style={{ fontSize: '14pt'}} />
              <Typography variant="subtitle2" sx={{ mx: '5px' }} color="inherit">
                {project.warning}
              </Typography>
              <AiOutlineInfoCircle style={{ fontSize: '14pt'}}/>
            </ModalWarning>}
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
              url={project.video}
              width='800px'
              height='500px'
            />
          </Box>
          </ModalBox>
        </Fade>
      </Modal>
    </div>
  );
}

export default ProjectModal;