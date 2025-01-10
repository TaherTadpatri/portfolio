import React from 'react'
import { Stack,Button ,Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate=useNavigate();
  return (
    <div>
         <Stack 
      direction="row" 
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
       
      }} 
      gap={3} 
    >
      <Box sx={{
         backgroundColor: '#f0f0f0', // Light gray background
         paddingLeft : '2rem', 
         paddingRight: '2rem',
         paddingTop : '1rem',
         paddingBottom : '1rem',
         marginTop : '2rem',
         borderRadius: '1rem',
         boxShadow: '0 0 1px rgba(0, 0, 0,0.1)'
      }}>
      <Button 
        variant="h2" 
        sx={{ 
          textTransform : "none",
          fontWeight : 'bold',
          color: 'black', // Darker gray for better contrast
          '&:hover': { 
            backgroundColor: '#eee', 
            color: '#007baa' // Blue on hover
          } 
        }} 
        onClick={() => navigate('/')} 
      >
        Home
      </Button>
      <Button 
        variant="h3" 
        sx={{ 
          textTransform : "none",
          fontWeight : 'bold',
          color: '#333', 
          '&:hover': { 
            backgroundColor: '#eee', 
            color: '#007bff' 
          } 
        }} 
        onClick={() => navigate('/projects')} 
      >
        Projects
      </Button>
      <Button 
        variant="h3" 
        sx={{ 
          textTransform : "none",
          fontWeight : 'bold',
          color: '#333', 
          '&:hover': { 
            backgroundColor: '#eee', 
            color: '#007bff' 
          } 
        }} 
        onClick={() => navigate('/experience')} 
      >
        Experience
      </Button>
      </Box>
    </Stack>
    </div>
  )
}

export default Navbar
