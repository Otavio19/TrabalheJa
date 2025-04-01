import React from "react";
import { Typography, Container } from "@mui/material";

const SemPermissao = () => {
  return (
    <Container>
      <Typography variant="h4" color="error" align="center" sx={{ mt: 5 }}>
        Você não tem permissão para acessar essa tela.
      </Typography>
    </Container>
  );
};

export default SemPermissao;
