import { Box, Container, Typography } from '@mui/material';

export default function Hero() {
  return (
    <Box
      component='section'
      sx={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        maxWidth: 'md',
        mx: 'auto',
        borderBottom: 2,
      }}
    >
      <Container maxWidth='md'>
        <Box>
          <Typography
            variant='h1'
            component='h1'
            sx={{
              mb: 2
            }}
          >
            Hello World.
          </Typography>

          <Typography
            variant='h4'
            component='h4'
            sx={{ mb: 3 }}
          >
            I'm a computer science student at the University of Toronto.
          </Typography>

          <Typography
            variant='h6'
            component='h6'
            sx={{ mb: 3 }}
          >
            Contact Me: jeffrey.tan@mail.utoronto.ca
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}