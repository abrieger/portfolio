import React from 'react';
import Link from '@mui/material/Link';

const ContactIcon = ({ icon }) => {
  return (
    <Link 
      href={icon.to}
      underline="none"
      rel="noopener noreferrer"
      target="_blank"
      // onClick={icon.mail ? (e) => {
      //   window.location = 'mailto:adam.brieger@gmail.com';
      //   e.preventDefault();
      // } : () => {}}
    >
      {icon.icon}
    </Link>
  )
}

export default ContactIcon;