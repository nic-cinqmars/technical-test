import { Box, Container, Typography } from '@mui/material';

import { useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
  const error: unknown = useRouteError();

  return (
    <Container maxWidth='lg'>
      <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
        <Typography variant='h3'>Oops, something went wrong!</Typography>
        <Typography>{error instanceof Error ? error.message : 'An unexpected error occurred'}</Typography>
      </Box>
    </Container>
  );
};

export default ErrorBoundary;
