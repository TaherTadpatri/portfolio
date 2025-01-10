import React from "react";
import { Container, Typography } from "@mui/material";
import profile from "/src/assets/profile.jpg";
import Buttons from "../Components/Buttons";
import AllTechStack from "../Components/AllTechStack";
import About from "../Components/About";
import Contact from "../Components/Contact";
function Home() {
  return (
    <div>
      <Container maxWidth="md" sx={{ marginTop: "5rem" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-around ",
            marginBottom: "4rem",
          }}
        >
          <Typography variant="h1" sx={{ marginRight: "3rem" }}>
            {" "}
            Taher Tadpatri
          </Typography>
        
          <img src={profile} width="200px" style={{ borderRadius: "10px" }} />
        </div>

        <About />
        <AllTechStack />

        <Buttons />
      
      </Container>
    </div>
  );
}

export default Home;
