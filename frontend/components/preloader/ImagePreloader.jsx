import * as React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';

export default function ImagePreloader() {
  return (
    <Stack spacing={2}>
      <Card variant="outlined">
        <Skeleton animation="wave" variant="rectangular" width={300} height={100} />
        
      </Card>
    </Stack>
  );
}
