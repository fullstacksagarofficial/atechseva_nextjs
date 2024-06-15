import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function BlogLoader() {
  return (
    <Box sx={{ width: '100%' }}>
      <Skeleton variant="rectangular" width="100%" height={400} sx={{ marginBottom: 2 }} /> {/* Set height to 600px and add margin bottom */}
      <Skeleton variant="text" width="80%" height={24} sx={{ marginBottom: 1 }} /> {/* Set text skeleton width to 80% and add margin bottom */}
      <Skeleton variant="text" width="90%" height={20} sx={{ marginBottom: 1 }} /> {/* Set text skeleton width to 90% and add margin bottom */}
      <Skeleton variant="text" width="70%" height={20} sx={{ marginBottom: 1 }} /> {/* Set text skeleton width to 70% and add margin bottom */}
      <Skeleton variant="text" width="80%" height={20} sx={{ marginBottom: 1 }} /> {/* Set text skeleton width to 70% and add margin bottom */}
      <Skeleton variant="text" width="90%" height={20} sx={{ marginBottom: 1 }} /> {/* Set text skeleton width to 70% and add margin bottom */}
    </Box>
  );
}
