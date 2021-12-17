import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import CustomButton from '../components/CustomButton';
import Map from '../components/Map';
import ContactIcons from '../components/ContactIcons';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

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

const useLocalStorageState = (key, initialVal) => {
  // Custom hook to record email sent in localStorage and hide form until hard refresh
  const [state, setState] = React.useState(() => {
    try {
      const valInStorage = localStorage.getItem(key);
      if (!valInStorage) return initialVal;

      return JSON.parse(valInStorage);
    } catch (err) {
      return initialVal;
    }
  })

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state, key]);

  return [state, setState];
}

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [showCaptcha, setShowCaptcha] = React.useState(false);
  const [sentEmail, setSentEmail] = useLocalStorageState('sentEmail', false);

  const verifyHuman = (e) => {
    e.preventDefault();
    setShowCaptcha(true);
  }

  const handleSubmit = (captchaRes) => {
    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID,{
        name: name,
        email: email,
        message: message,
        'g-recaptcha-response': captchaRes
      }, process.env.REACT_APP_EMAIL_ID)
      .then((result) => {
          console.log(result.text);
          setShowCaptcha(false);
          setSentEmail(true);
      })
      .catch((error) => {
          alert('Something went wrong, please try again.');
          setShowCaptcha(false);
          console.log(error.text);
      });
  }

  return (
    <Box sx={{ height: '100%', width: '95%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '3em' }}>
      {showCaptcha && !sentEmail && 
      <ReCAPTCHA sitekey={process.env.REACT_APP_NO_ROBOTS} onChange={handleSubmit}/>}
      {!showCaptcha && !sentEmail && <Box sx={{ height: '100%', width: '100%', maxWidth: '700px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h4" >Get in touch</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <ContactIcons />
        </Box>
        <Typography variant="body1" sx={{ textAlign: 'center', fontSize: '14pt', marginBottom: '1em' }}>If you have any feedback on the website or just want to say hi, drop me a line using the below form.</Typography>
        <form
          name='contact'
          netlify='true'
          style={{ display: 'flex', flexDirection: 'column', gap: '1em', width: '100%', textAlign: 'center' }}
          onSubmit={verifyHuman}
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
      </Box>}
      {!showCaptcha && sentEmail && 
        <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', 
          alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          <Typography variant="h6" >Thank you, your message has successfully sent!</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '2em'}}>
            <ContactIcons />
          </Box>
        </Box>}
      <Map />
    </Box>
  )
}

export default Contact;