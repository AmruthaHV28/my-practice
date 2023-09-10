import * as React from 'react';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Grid } from '@mui/material';
import { MyRating } from './MyRating';

export const Contact:React.FC<{}>=()=> {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
     
        
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Enter your Name" variant="standard" />
      </Box>
      <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Feed Back"
          variant="standard"
        />

        <Grid>
        <MyRating/>
        </Grid>
    </Box>
  );
}