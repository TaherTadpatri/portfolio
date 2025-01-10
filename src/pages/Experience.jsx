import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/material";
const experience_list = [

  {id :2,
    "name": "Robotics AI Engineer",
    "description":"Robotics AI  Algorithm Engineers design and develop the  brainsof robots, creating the sophisticated algorithms that enable them to perceive their surroundings, make decisions, and execute tasks effectively",
    "companyName":"Tata Elxsi",
    "tags" :["AI","physical AI","Deep Learning"],
    "dates":"dec 2024 - present"
  },
  {
    "id": 1,
    "name": "Machine learning intern",
    "description":
      " I worked on a project focused on analyzing real-time data. My responsibilities included cleaning and organizing the data to ensure accuracy and consistency, as well as identifying trends and patterns and building the machine learning model for various use case.",   
    "companyName": "Princetion",
    "tags": ["AI", "Machine Learning", "YouTube"],
    "dates":"aug - dec 2023"
  },

];
function Experience() {
  return (
    <div>
      <Container maxWidth="md" sx={{ marginTop: "2rem",
        backgroundColor: '#f0f0f0', // Light gray background
        paddingLeft : '2rem', 
        paddingRight: '2rem',
        paddingTop : '1rem',
        paddingBottom : '1rem',
        borderRadius: '1rem',
        boxShadow: '0 0 1px rgba(0, 0, 0,0.1)'
       }}>
        {experience_list.map((item) => (
          <div key={item.id} style={{marginTop : '1rem'}}>
            <Paper elevation={0} sx={{borderRadius: '1rem'}}>
              <Box gap={2} sx={{ padding: "1.5rem" }}>
                <Typography>{item.companyName}<span style={{ marginLeft: "1rem" }}>({item.dates})</span></Typography>
                <Typography variant="h5" sx={{ marginBottom: "1rem" }}>
                  {item.name}{" "}
                </Typography>
                <Typography variant="body2">{item.description} </Typography>
                {/* Add elements to display project description and image if needed */}
              </Box>
            </Paper>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default Experience;
