import React from 'react'
import { Stack,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate();
  return (
    <div>
       <Stack  direction='row' sx={{display : 'flex',justifyContent : 'center',alignItems : 'center'}} gap={5}> 
                <Button sx={{textTransform : 'none' ,color:'black'}} onClick={()=> navigate('/')} >Home</Button>
                <Button sx={{textTransform : 'none' ,color:'black'}} onClick={()=> navigate('/projects')}>Projects</Button>
                <Button sx={{textTransform : 'none' ,color:'black'}} onClick={()=>navigate('/experience')}>Experience</Button>
        </Stack>
    </div>
  )
}

export default Navbar
