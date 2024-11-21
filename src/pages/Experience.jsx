import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/material";
const experience_list = [
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
      <Container maxWidth="md" sx={{ marginTop: "5rem" }}>
        {experience_list.map((item) => (
          <div key={item.id}>
            <Paper elevation={1}>
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
