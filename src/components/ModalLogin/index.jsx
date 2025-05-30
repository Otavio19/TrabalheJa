import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DecodeJwt from '../../utils/DecodeJwt'

const LoginModal = ({ open, onClose, onLoginSuccess }) => {

  const [loginData, setLoginData] = useState({ email: "", senha: "" });
  const [loginError, setLoginError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("https://trabalhe-ja-api.vercel.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (response.ok) {
        var decodeJwt = new DecodeJwt()

        sessionStorage.setItem("user", JSON.stringify(result.token));

        decodeJwt.decodeToken(result.token);

        onLoginSuccess();
        window.location.reload();
        onClose();
      } else {
        setLoginError(result.error || "Falha ao logar.");

      }
    } catch (error) {
      setLoginError("Erro ao conectar ao servidor.");
      console.log(error)
    }

    setLoginData({ email: "", senha: "" })
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
          Acessar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;
