import { Box, Button, Grid, Paper, Toolbar } from "@mui/material"
import MyNav from "../components/MyNav.com"
import Amrutha from "../service/AMRUTHA's Resume-1.pdf"

import { MyImage } from "../components/MyImage"
import { MyCard } from "../components/MyCards"
import { Contact } from "../components/Contact"
import { url } from "inspector"
import img from "../image/5.jpg"


export const Portfolio:React.FC<{}>=()=>{
    return<>
    <Box style={{backgroundImage:`url(${img})`,  backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}>
<div >
        <Grid>
            <MyNav/>
        </Grid>
        <br />
        <Toolbar/>
        <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
       >
            <MyImage/><br />
           
        </Grid>
        <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
       >
        <h1>AMRUTHA H V</h1><br />

       </Grid>
       <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
       > I'm a developer,
        I like to craft solid and scalable frontend product with greater user experiences.
       </Grid>
       <br />
       <br />
       <Grid  container
         direction="row"
         justifyContent="center"
         alignItems="center"
       > 
       <a href={Amrutha} download><Button variant="contained">My Resume</Button></a> 
       </Grid>
       <br />

       <Grid >
       <Toolbar/>
        <Paper elevation={3}>
        <Toolbar/>
        <Grid  container
         direction="row"
         justifyContent="center"
         alignItems="center"
       >
        <h1>PROJECT</h1>


       </Grid>
            
           <Grid>

            <MyCard/>
           </Grid>
        </Paper>

       </Grid>
       <br />
       <br />
       <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center">
       <Grid
         container
         direction="row"
         justifyContent="center"
         alignItems="center"
       >
        <h1>CONTACT ME</h1><br />

       </Grid >
       <Paper>
        <Contact/>
       </Paper>
       

       </Grid>


       <Toolbar/>
       <Toolbar/>








       </div>

    </Box>





    </>
}