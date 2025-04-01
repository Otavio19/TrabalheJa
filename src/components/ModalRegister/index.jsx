import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DecodeJwt from '../../Utils/DecodeJwt'

const ModalRegister = ({ open, onClose, onLoginSuccess }) => {

    const [loginData, setLoginData] = useState({ email: "", senha: "" });
    const [loginError, setLoginError] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Registrar-se</DialogTitle>
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
                <Button color="primary">
                    Acessar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalRegister