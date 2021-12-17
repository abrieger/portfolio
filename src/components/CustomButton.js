import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({theme}) => ({
  fontSize: '11pt',
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.text.secondary}`,
  borderRadius: '10px',
  width: '100px',
  maxWidth: '150px',
  '&:hover': {
    backgroundColor: theme.palette.text.alternate,
    color: theme.palette.background.primary,
    border: `1px solid ${theme.palette.text.alternate}`,
  }
}))

const CustomButton = ({ text, type }) => {
  return (
    <StyledButton type={type} >{text}</StyledButton>
  )
}

export default CustomButton;