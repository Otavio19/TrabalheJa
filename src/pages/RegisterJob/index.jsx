import React, { useState } from "react";
import { TextField, Button, Box, Grid, MenuItem, Select, InputLabel, FormControl, Typography } from "@mui/material";

const RegisterJob = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    resumo: "",
    responsabilidades: "",
    habilidades_obrigatorias: "",
    habilidades_desejaveis: "",
    beneficios: "",
    localizacao: "",
    faixa_salarial: "",
    horario_trabalho: "",
    cultura_empresa: "",
    instrucoes: "",
    data_limite: "2025-02-15",
    empresa_id: "f1e3bbaf-20fb-4ec2-8076-e02773be5a71", // Simulando um ID de empresa
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      data_limite: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/vagas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Vaga cadastrada com sucesso!");
    } else {
      alert("Erro ao cadastrar vaga!");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        margin: "auto",
        padding: 2,
        borderRadius: 1,
        boxShadow: 3,
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: 2 }}>
        Cadastrar Vaga
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Título"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Resumo"
              name="resumo"
              value={formData.resumo}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Responsabilidades"
              name="responsabilidades"
              value={formData.responsabilidades}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Habilidades Obrigatórias"
              name="habilidades_obrigatorias"
              value={formData.habilidades_obrigatorias}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Habilidades Desejáveis"
              name="habilidades_desejaveis"
              value={formData.habilidades_desejaveis}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Benefícios"
              name="beneficios"
              value={formData.beneficios}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Localização"
              name="localizacao"
              value={formData.localizacao}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Faixa Salarial"
              name="faixa_salarial"
              value={formData.faixa_salarial}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Horário de Trabalho"
              name="horario_trabalho"
              value={formData.horario_trabalho}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Cultura da Empresa"
              name="cultura_empresa"
              value={formData.cultura_empresa}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Instruções"
              name="instrucoes"
              value={formData.instrucoes}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" type="submit" fullWidth>
              Cadastrar Vaga
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default RegisterJob;
