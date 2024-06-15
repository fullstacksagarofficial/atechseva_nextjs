import * as React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';

export default function Preloader() {
  return (
    <Stack spacing={2}>
      <Card variant="outlined">
        <Skeleton animation="wave" variant="rectangular" width={300} height={100} />
        <div className='my-3 mx-4'>

          <Skeleton animation="wave" height={30} />
          <Skeleton animation="wave" height={30} width="60%" />
        </div>
      </Card>
    </Stack>
  );
}
