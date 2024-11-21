import { Container, Paper, Typography } from '@mui/material'
import React from 'react'
import {Box} from '@mui/material'
const project_list=[{ 
    "id": 1,
    "name": "AI enhanced youtube learning",
    "description": " This project aims to facilitate learning from YouTube videos by providing automatic assessment generation based on the video content. When a user shares a YouTube link:The platform extracts chapters from the video and generates summaries for each chapter using the transcript. Users can query the platform if they encounter difficulties understanding certain concepts.Assessments are generated based on the content covered in each chapter, aiding in efficient learning",
    "image": "https://picsum.photos/200/300",

}]
function Projects() {
  return (
    <div>
    <Container maxWidth="md" sx={{ marginTop: "5rem" }}> 

    {project_list.map((project) => (
        <div key={project.id}>
            <Paper elevation={1}  >
                <Box gap={2} sx={{padding : '1.5rem'}}> 
         <Typography variant='h5' sx={{marginBottom : "1rem"}}>{project.name} </Typography>
          <Typography variant='body2'>{project.description} </Typography>
          {/* Add elements to display project description and image if needed */}
          </Box>
          </Paper>
        </div>
      ))}
    </Container>
     
    </div>
  )
}

export default Projects
