import React, { useState } from "react";
import { TextField, Button, Box, Grid2, MenuItem, Select, InputLabel, FormControl, Typography, Snackbar, Alert, Stack } from "@mui/material";
import axios from "axios";

const CadastrarVagas = () => {
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
    empresa_id: "",
  });

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("info");
  const [loading, setLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if(name == 'faixa_salarial'){
      return setFormData((prevData) => ({
        ...prevData,
        [name]: formatCurrency(value),
      }));
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const rawToken = sessionStorage.getItem("user");
      const cleanedToken = rawToken?.startsWith('"') ? JSON.parse(rawToken) : rawToken;
  
      const tokenPayload = JSON.parse(atob(cleanedToken.split(".")[1]));
  
      if (!tokenPayload || !tokenPayload.empresa_id) {
        setMessage("Erro: Empresa não encontrada.");
        setSeverity("error");
        setOpen(true);
        setLoading(false);
        return;
      }
  
      const formDataWithEmpresa = { ...formData, empresa_id: tokenPayload.empresa_id };
  
      axios.post("https://trabalhe-ja-api.vercel.app/api/vagas", formDataWithEmpresa)
        .then(response => {
          setMessage("Vaga cadastrada com sucesso!");
          setSeverity("success");
  
          setTimeout(() => {
            setOpen(true);
          }, 10);
  
          console.log(response);
  
          setTimeout(() => {
            setFormData({
              titulo: "",
              resumo: "",
              responsabilidade: "",
              habilidades_obrigatorias: "",
              habilidades_desejaveis: "",
              beneficios: "",
              localizacao: "",
              faixa_salarial: "",
              horario_trabalho: "",
              cultura_trabalho: "",
              instrucoes: "",
              data_limite: "",
            });
          }, 2000);
        })
        .catch(error => {
          setMessage("Erro ao cadastrar a vaga. Tente novamente.");
          setSeverity("error");
  
          setTimeout(() => {
            setOpen(true);
          }, 10);
  
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
  
    } catch (error) {
      console.error("Erro ao recuperar token:", error);
      setMessage("Erro ao processar a requisição.");
      setSeverity("error");
      setOpen(true);
      setLoading(false);
    }
  };

  const formatCurrency = (value) => {
    const numericValue = value.replace(/\D/g, "");

    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(numericValue / 100);

    return formattedValue;
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
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextField
              label="Título"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 12 }}>
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
          </Grid2>

          <Grid2 size={{ xs: 12, md: 12 }}>
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
          </Grid2>

          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextField
              label="Habilidades Obrigatórias"
              name="habilidades_obrigatorias"
              value={formData.habilidades_obrigatorias}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextField
              label="Habilidades Desejáveis"
              name="habilidades_desejaveis"
              value={formData.habilidades_desejaveis}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextField
              label="Benefícios"
              name="beneficios"
              value={formData.beneficios}
              onChange={handleChange}
              fullWidth
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextField
              label="Localização"
              name="localizacao"
              value={formData.localizacao}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField
              label="Faixa Salarial"
              name="faixa_salarial"
              value={formData.faixa_salarial}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField
              label="Horário de Trabalho"
              name="horario_trabalho"
              value={formData.horario_trabalho}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextField
              label="Cultura da Empresa"
              name="cultura_empresa"
              value={formData.cultura_empresa}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextField
              label="Instruções"
              name="instrucoes"
              value={formData.instrucoes}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, md: 12 }}>
            <Button variant="contained" type="submit" fullWidth>
              Cadastrar Vaga
            </Button>
          </Grid2>
        </Grid2>
      </form>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CadastrarVagas;
