import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function EmptyState() {
  return (
    <Container>
      <Box
        sx={{
          height: 100,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '40px',
        }}
      >
        <Typography variant="h5">There is no data!</Typography>
      </Box>
    </Container>
  );
}

export default EmptyState;
