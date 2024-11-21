import { Button, Grid2, Stack, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <div>
      <Grid2 spacing={3}>
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
