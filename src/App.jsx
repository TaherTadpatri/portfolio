import React from "react";
import {
  Button,
  Container,
  Grid2,
  Link,
  Stack,
  Typography,
  Box,
  Paper,
  ButtonGroup,
} from "@mui/material";
import AllTechStack from "./Components/AllTechStack";
import About from "./Components/About";
import profile from "/src/assets/profile.jpg";
import Buttons from "./Components/Buttons";
function App() {
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
            marginBottom: '4rem'
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

export default App;
