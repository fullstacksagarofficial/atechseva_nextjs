import * as React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';

export default function Tags() {
  return (
    <Stack spacing={2}>
      <Card variant="outlined">
        <Skeleton animation="wave" variant="rectangular" width={60} height={30} />
      
      </Card>
    </Stack>
  );
}

