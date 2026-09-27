import { Box, Chip, Container, Stack, Typography } from '@mui/material';

export interface TimelineItem {
  title: string;
  institution: string;
  date: string;
  description: string[];
  tags: string[];
}

interface TimelineSectionProps {
  header: string;
  items: TimelineItem[];
}

export default function TimelineSection({
  header,
  items,
}: TimelineSectionProps) {
  return (
    <Box component='section' sx={{  
      justifyContent: 'center',
      py: 8,
      maxWidth: 'md',
      mx: 'auto',
      borderBottom: 1,
      borderColor: 'divider',
      }}>
      <Container>
        <Typography
          variant='h2'
          component='h2'
          sx={{
            mb: 6,
          }}
        >
          {header}
        </Typography>

        <Stack spacing={4}>
          {items.map((item) => (
            <Box key={`${item.title}-${item.institution}`}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: 4,
                  flexDirection: {
                    xs: 'column',
                    md: 'row',
                  },
                }}
              >
                <Box>
                  <Typography
                    variant='h4'
                    component='h3'
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant='h5'
                    sx={{ mt: 0.5 }}
                  >
                    {item.institution}
                  </Typography>
                </Box>

                <Typography
                  variant='body1'
                >
                  {item.date}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 1 }}>
                {item.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size='medium'
                    sx={{
                      borderRadius: 1,
                      backgroundColor: '#ffffff',
                      border: '1px solid black'
                    }}
                  />
                ))}
              </Box>
              <Box component='ul' sx={{ mt: 2, pl: 3 }}>
                {item.description.map((description) => (
                  <Typography
                    key={description}
                    component='li'
                    variant='body1'
                    sx={{ mb: 1 }}
                  >
                    {description}
                  </Typography>
                ))}
              </Box>
              
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}