import { Button, Stack, Typography } from "@mui/material";
import React from "react";

function Buttons() {
  return (
    <>
      
      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom : '3rem' 

        }}
      >
        <Stack spacing={3} direction="row">
        <Button
            variant="outlined"
            sx={{
              color: "gray",
              textTransform: "none",
              borderRadius: "1rem",
              backgroundColor: "whitesmoke",
            }}
          >
            {" "}
            Resume
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "gray",
              textTransform: "none",
              borderRadius: "1rem",
              backgroundColor: "whitesmoke",
            }}
          >
            {" "}
            Github
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "gray",
              textTransform: "none",
              borderRadius: "1rem",
              backgroundColor: "whitesmoke",
            }}
          >
            Linked IN
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "gray",
              textTransform: "none",
              borderRadius: "1rem",
              backgroundColor: "whitesmoke",
            }}
          >
            X
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default Buttons;
