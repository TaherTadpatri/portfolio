import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
function Buttons() {


    const downloadpdf= ()=>{ 
        fetch("Resume(final).pdf").then((response) => {
            response.blob().then((blob) => {
            
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                    
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "TaherTadpatriResume.pdf";
                alink.click();
            });
        });
    }
  return (

    
    <>
      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "3rem",
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
            onClick={downloadpdf}
          >
            {" "}
            Resume
          </Button>

          <Link
            to="https://github.com/TaherTadpatri"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </Link>

          <Link
            to="https://www.linkedin.com/in/taher-tadpatri-38481a156/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button
            variant="outlined"
            sx={{
              color: "gray",
              textTransform: "none",
              borderRadius: "1rem",
              backgroundColor: "whitesmoke",
            }}
          >
            Linkedin
          </Button>
          </Link>
          

          
          <Link
            to="https://x.com/Taher_tadpatri"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          </Link>
        </Stack>
      </div>
    </>
  );
}

export default Buttons;
