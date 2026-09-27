import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0041C2',
    },
    
  },

  typography: {
    fontFamily: 'Oxanium, sans-serif',

    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },

    h2: {
      fontSize: '2.25rem',
      fontWeight: 700,
    },

    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },

    h4: {
        fontSize: '1.5rem',
        fontWeight: 600,
      },

    h5: {
        fontSize: '1rem',
        fontWeight: 600,
      },

    h6: {
        fontSize: '1rem',
        fontWeight: 400,
      },

    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#222021'
    },

    button: {
      textTransform: 'none',
      fontSize: '1rem',
    },
  },

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid',
          borderColor: 'divider',
          backgroundColor: '#ffffff',
          boxShadow: 'none',
          '& .MuiButton-root': {
            color: '#000000',
            '&:hover': {
              color: '#0041C2',
            },
          },
        },
      },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                color: '#000000',
                '&:hover': {
                    color: '0041C2'
                } 
            }
        }
    }
    },
});