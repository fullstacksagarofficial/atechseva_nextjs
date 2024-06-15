import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function BlogCardLoader() {
  return (
    <Box sx={{ width: '100%' }} className="flex gap-5">
      <Skeleton variant="rectangular" width="40%" height={100} sx={{ marginBottom: 2 }} /> {/* Set height to 600px and add margin bottom */}
     <div className='w-3/5'>
     <Skeleton variant="text" width="60%" height={24}  /> 
     <Skeleton variant="text" width="80%" height={24}  /> 
     <Skeleton variant="text" width="50%" height={24}  /> 
     <Skeleton variant="text" width="90%" height={24}  /> 
     </div>
    </Box>
  );
}
