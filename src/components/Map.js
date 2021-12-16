import Box from '@mui/material/Box';

const Map = () => {
  return (
    <Box sx={{ height: '80vh', width: '100%', maxWidth: '800px', display: { xs: 'none', md: 'block' } }}>
      <iframe 
        title="google-maps-api"
        style={{ width: '100%', height: '100%' }} 
        src="https://www.google.com/maps/embed/v1/place?q=Sydney,+New+South+Wales&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
      </iframe>
    </Box>
  )
}

export default Map;