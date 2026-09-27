import { Box, Chip, Container, Stack, Typography } from '@mui/material';
import portfolio from '../data/portfolio.json';

export default function Skills() {
  return (
    <Box
      component='section'
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth='md'>
        <Typography
          variant='h2'
          component='h2'
          sx={{ mb: 6 }}
        >
          Skills
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
          }}
        >
          <Box
            sx={{
              pr: { md: 4 },
              pb: { xs: 4, md: 0 },
            }}
          >
            <Typography variant='h4' component='h3' sx={{ mb: 3 }}>
              Languages
            </Typography>

            <Stack
              direction='row'
              spacing={1}
              useFlexGap
              sx={{
                flexWrap: 'wrap',
              }}
            >
              {portfolio.skills.languages.map((language) => (
                <Chip
                  key={language}
                  label={language}
                  size='small'
                  sx={{
                    borderRadius: 1,
                    backgroundColor: 'white',
                    border: '1px solid black',
                    color: 'black',
                  }}
                />
              ))}
            </Stack>
          </Box>

          <Box
            sx={{
              pl: { md: 4 },
            }}
          >
            <Typography variant='h4' component='h3' sx={{ mb: 3 }}>
              Frameworks & Tools
            </Typography>

            <Stack
              direction='row'
              spacing={1}
              useFlexGap
              sx={{
                flexWrap: 'wrap',
              }}
            >
              {portfolio.skills.tools.map((tool) => (
                <Chip
                  key={tool}
                  label={tool}
                  size='small'
                  sx={{
                    borderRadius: 1,
                    backgroundColor: 'white',
                    border: '1px solid black',
                    color: 'black',
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}