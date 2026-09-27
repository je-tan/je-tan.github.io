import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
  
  export default function Navbar() {
    return (
      <AppBar 
        position='sticky'
        sx={{
          borderBottom:'1px solid',
          borderColor:'#808080',
          backgroundColor:'#ffffff',
          boxShadow:'none',
        }}
        
      >
        <Container maxWidth='lg'>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant='h4'
              component='a'
              href='#'
              sx={{
                fontWeight: 500,
                textDecoration: 'none',
                color: '#000000'
              }}
            >
              Jeffrey Tan
            </Typography>
  
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button target='_blank' rel='noopener noreferrer' href='https://github.com/je-tan'>
                GitHub
              </Button>
              <Button target='_blank' rel='noopener noreferrer' href='https://linkedin.com/in/jeffrey-tan-uoft'>
                LinkedIn
              </Button>
              <Button target='_blank' rel='noopener noreferrer' href='/resume.pdf'>
                Resume
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }