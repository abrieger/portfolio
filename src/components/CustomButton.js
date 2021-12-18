import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({theme}) => ({
  fontSize: '11pt',
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.text.secondary}`,
  borderRadius: '10px',
  width: '100px',
  maxWidth: '150px',
  padding: 0,
  '&:hover': {
    backgroundColor: theme.palette.text.alternate,
    color: theme.palette.background.primary,
    border: `1px solid ${theme.palette.text.alternate}`,
  }
}))

const CustomButton = ({ text, type='', handleClick=null }) => {
  return (
    <StyledButton type={type} onClick={handleClick}>{text}</StyledButton>
  )
}

export default CustomButton;