import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({theme}) => ({
  fontSize: '11pt',
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.text.secondary}`,
  borderRadius: '0',
  '&:hover': {
    backgroundColor: theme.palette.text.secondary,
    color: theme.palette.background.primary,
    border: `1px solid ${theme.palette.text.secondary}`,
  }
}))

const CustomButton = ({ text }) => {
  return (
    <StyledButton>{text}</StyledButton>
  )
}

export default CustomButton;