import React from "react";
import Container from "@mui/material/Container";
import AppAppBar from "../components/AppAppBar";
import Footer from "../components/Footer";
export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AppAppBar />
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: "flex", flexDirection: "column", my: 16, gap: 4 }}
      >
        {children}
      </Container>
      <Footer />
    </div>
  );
};
