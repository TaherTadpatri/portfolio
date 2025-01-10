import { Button, Grid2, Stack, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <div>
      <Grid2 spacing={3} sx={{ backgroundColor: '#f0f0f0', // Light gray background
         paddingLeft : '2rem', 
         paddingRight: '2rem',
         paddingTop : '1rem',
         paddingBottom : '1rem',
         marginTop : '2rem',
         borderRadius: '1rem',
         boxShadow: '0 0 1px rgba(0, 0, 0,0.1)'}}>
      <Typography variant="h4" >About</Typography>
        <Stack direction="row">
          
          <Typography variant="h6" sx={{marginTop : '1rem',marginLeft : '0px'}}>
        
          Hi👋,I am a software developer with a passion for building innovative and
            user-friendly applications. I have a strong background in computer
            science and a keen eye for detail.
          </Typography> 
        </Stack>
      </Grid2>
    </div>
  );
}

export default About;
