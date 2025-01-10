import { Grid2, Stack, Typography } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <div>
       <Grid2> 
           <Stack direction={row}> 
               <Typography variant='h3'> phone : +916361002427</Typography>
                <Typography variant='h3'>email : tahertadpatri@gmail.com</Typography>
           </Stack>
       </Grid2>
    </div>
  )
}

export default Contact
