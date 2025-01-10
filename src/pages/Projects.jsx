import { Container, Paper, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const project_list = [
  {
    id: 1,
    name: "AI enhanced youtube learning 🔗",
    description:
      " This project aims to facilitate learning from YouTube videos by providing automatic assessment generation based on the video content. When a user shares a YouTube link:The platform extracts chapters from the video and generates summaries for each chapter using the transcript. Users can query the platform if they encounter difficulties understanding certain concepts.Assessments are generated based on the content covered in each chapter, aiding in efficient learning",
    image: "https://picsum.photos/200/300",
    tags: ["AI", "Machine Learning", "YouTube"],
    link: "https://github.com/TaherTadpatri/Youtube-Summarizer",
  },
  {id:2,
    name :"print Store e-commerce 🔗",
    description :"Store to print out your memories of your friends,family and loved ones" ,
    link :"https://frameyourmemories.netlify.app/"
  }
];
function Projects() {
  return (
    <div>
      <Container maxWidth="md" sx={{ marginTop: "5rem" }}>
        {project_list.map((project) => (
          <div key={project.id} style={{marginTop : '1rem'}}>
            <Link to={project.link}  style={{ textDecoration: 'none' }}>
            <Paper elevation={1}>
              <Box gap={2} sx={{ padding: "1.5rem" }}>
                <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
                  {project.name}{" "}
                </Typography>
                <Typography variant="body2">{project.description} </Typography>
              </Box>
            </Paper>
            </Link>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Projects;
