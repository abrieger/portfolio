import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import CustomButton from '../components/CustomButton';
import Map from '../components/Map';
import ContactIcons from '../components/ContactIcons';

const StyledTextField = styled(TextField)(({theme}) => ({
  '& label.Mui-focused': {
    color: theme.palette.text.secondary,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.text.alternate,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: theme.palette.text.secondary,
    },
    '&:hover fieldset': {
      borderColor: theme.palette.text.alternate,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.text.alternate,
    },
  }
}))

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/', {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
      console.log('success!');
    } catch (err) {
      alert(err);
    }
  }

  return (
    <Box sx={{ height: '100%', width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '3em' }}>
      <Box sx={{ height: '100%', width: '100%', maxWidth: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h4" >Get in touch</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <ContactIcons />
        </Box>
        <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '14pt', marginBottom: '1em' }}>If you have any feedback on the website or just want to say hi, drop me a line using the below form.</Typography>
        <form
          name='contact'
          netlify='true'
          style={{ display: 'flex', flexDirection: 'column', gap: '1em', width: '100%', textAlign: 'center' }}
          onSubmit={handleSubmit}
        >
            <StyledTextField 
              label="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <StyledTextField
              label="Email"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <StyledTextField 
              label="Message"
              name="message"
              multiline
              rows={4}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <div>
              <CustomButton 
                text={"Send"}
                type="submit"
              />
            </div>
        </form>
      </Box>
      <Map sx={{  }} />
    </Box>
  )
}

export default Contact;