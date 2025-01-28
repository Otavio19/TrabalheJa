import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginModal = ({ open, onClose, onLoginSuccess }) => {
  const [loginData, setLoginData] = useState({ email: "", senha: "" });
  const [loginError, setLoginError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (response.ok) {
        // Salvar o usuário no sessionStorage e notificar o sucesso
        sessionStorage.setItem("user", JSON.stringify(result.user));
        onLoginSuccess();
        onClose(); // Fechar o modal
      } else {
        setLoginError(result.message || "Falha ao logar.");
      }
    } catch (error) {
      setLoginError("Erro ao conectar ao servidor.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          name="email"
          value={loginData.email}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          label="Senha"
          variant="outlined"
          fullWidth
          name="senha"
          type="password"
          value={loginData.senha}
          onChange={handleInputChange}
          margin="normal"
        />
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleLogin} color="primary">
          Logar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;
