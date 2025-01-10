import React from "react";
import { Box, Grid2, Stack, Typography } from "@mui/material";

import htmllogo from "/src/assets/html.png";
import csslogo from "/src/assets/css.png";
import javascriptlogo from "/src/assets/javascript.png";
import reactlogo from "/src/assets/react.png";
import djangologo from "/src/assets/django.png";
import pythonlogo from "/src/assets/python.png";
import cpluslogo from "/src/assets/c++.png";
import numpy from "/src/assets/numpy.png";
import pandas from "/src/assets/pandas.png";
import matplot from "/src/assets/matplotlib.png";
import kears from "/src/assets/keras.png";
import tensorflow from "/src/assets/tensorflow.png";
import postgre from '/src/assets/postgresql.png';
import aws from '/src/assets/aws.png';
import awsweb from '/src/assets/awsweb.png';
import opencv from '/src/assets/opencv.png';



function AllTechStack() {
  return (
    <>
    <Typography variant="h4" sx={{marginTop : '1rem'}}>
        {" "}
       Tech Stack 💻
      </Typography>
    <div
      style={{
        marginTop: "1rem",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",

        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      
      <Grid2 spacing={2} sx={{ marginTop: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
           
            gap : '25px'
          }}
          spacing={2}
        >
          <img src={htmllogo} alt="HTML" width="50" height="50"  />
          <img src={csslogo} alt="css" width="50" height="50" />
          <img src={javascriptlogo} alt="javascript" width="50" height="50" />
          <img src={reactlogo} alt="HTML" width="50" height="50" />
          <img src={djangologo} alt="HTML" width="50" height="50" />
          <img src={pythonlogo} alt="HTML" width="50" height="50" />
          <img src={cpluslogo} alt="HTML" width="50" height="50" />
          <img src={numpy} alt="HTML" width="50" height="50" />
          <img src={pandas} alt="HTML" width="50" height="50" />
          <img src={matplot} alt="HTML" width="50" height="50" />
          <img src={kears} alt="HTML" width="50" height="50" />
          <img src={tensorflow} alt="HTML" width="50" height="50" />
          <img src={aws} alt="HTML" width="50" height="50" />
          <img src={postgre} alt="HTML" width="50" height="50" />
          <img src={awsweb} alt="HTML" width="50" height="50" />
          <img src={opencv} alt="HTML" width="50" height="50" />
        </Box>
      </Grid2>
    </div>
    </>
  );
}

export default AllTechStack;
