import { Box, Container, Button, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        borderTop: '1px solid',
        borderColor: 'divider',
        py: 4,
        mt: 8,
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant='body2'>
            © {new Date().getFullYear()} Jeffrey Tan
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button
              href='https://github.com/je-tan'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: '#000000',
                '&:hover': {
                    color: '#0041C2'
                }
              }}
            >
              GitHub
            </Button>

            <Button
              href='https://linkedin.com/in/jeffrey-tan-uoft'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                color: '#000000',
                '&:hover': {
                    color: '#0041C2'
                }
              }}
            >
              LinkedIn
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}