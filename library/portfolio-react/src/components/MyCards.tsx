import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const MyCard:React.FC<{}>=()=>{
  return (
    <Paper elevation={3}>
        <Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="stretch"
>
 
<Card sx={{ minWidth: 275 }}>
      <CardContent>
      
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography>
        
        <Typography variant="h5" component="div">
         Project 01
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          My notes
        </Typography>
        <Typography variant="body2">
         
          <br />
          {'"Resemble of W3 school by using bootstrap"'}
        </Typography>
       
      </CardContent>
      <CardActions>
        <a href=" https://amruthahv28.github.io/mywebste/">
        <Button size="small">Learn More</Button>
        </a>
        
      </CardActions>
      
    </Card>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography>
        
        <Typography variant="h5" component="div">
         Project 02
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
        </Typography>
        <Typography variant="body2">
         
          <br />
          {'"Simple Calculator"'}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      
    </Card>

    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography>
        
        <Typography variant="h5" component="div">
         Project 03
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         Stop Watch
        </Typography>
        <Typography variant="body2">
         
          <br />
          {'"Stop watch by using js"'}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      
    </Card>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography>
        
        <Typography variant="h5" component="div">
         Project 01
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Portfolio
        </Typography>
        <Typography variant="body2">
         
          <br />
          {'"BY using bootstrap"'}
        </Typography>
       
      </CardContent>
      <CardActions>
        <a href=" https://amruthahv28.github.io/portfolio/">
        <Button size="small">Learn More</Button>
        </a>
        
      </CardActions>
      
    </Card>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         
        </Typography>
        
        <Typography variant="h5" component="div">
         Figma Landing Page
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        puma
        </Typography>
        <Typography variant="body2">
         
          <br />
          {'" Landing page of puma "'}
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      
    </Card>

</Grid>
    


   
    
    </Paper>
    
  );
}