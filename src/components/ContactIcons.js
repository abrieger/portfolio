import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Container from '@mui/material/Container';

const IconContainer = styled(Container)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5em',
  marginTop: '5px',
}))

const ContactIcons = ({ size }) => {
  const icons = [{ icon: <GitHubIcon aria-label="Link to GitHub page" style={{ fontSize: size }} />,
  to: "https://github.com/abrieger" },
  { icon: <LinkedInIcon aria-label="Link to LinkedIn page" style={{ fontSize: size }} />,
  to: "https://www.linkedin.com/in/adam-brieger/" }]

  return (
    <IconContainer>
    {icons.map((icon, idx) => {
      return (<Link 
          href={icon.to}
          underline="none"
          rel="noopener noreferrer"
          target="_blank"
          style={{ marginBottom: '1em' }}
          key={icon.to}
        >
          {icon.icon}
        </Link>)
      })}
    </IconContainer>
  )
}

export default ContactIcons;