import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

//Utils
import './style.css'
import DecodeJwt from "../../Utils/DecodeJwt";

//components
import ModalLogin from "../ModalLogin";
import ModalRegister from "../ModalRegister"

export default function NavBar({ token }) {
  const decodeJwt = new DecodeJwt();
  const navigate = useNavigate();


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [ openRegisterModal, setOpenRegisterModal] = useState(false);
  const [userLevel, setUserLevel] = useState(null);

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("user");
    if (sessionUser) {
      const decodedToken = decodeJwt.decodeToken(sessionUser);
      setUserLevel(decodedToken?.nivel);
      setIsLoggedIn(true);
    }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleOpenRegisterModal = () =>{
    setOpenRegisterModal(true);
  }

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
    setOpenRegisterModal(false);
  };

  const handleLoginSuccess = () => {
    const sessionUser = sessionStorage.getItem("user");
    if (sessionUser) {
      const decodedToken = decodeJwt.decodeToken(sessionUser);
      setUserLevel(decodedToken?.nivel);
    }
    setIsLoggedIn(true);
  };

  const logout = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
    setUserLevel(null);
    navigate("/");
    window.location.reload();

  };

  const getMenuItems = () => {
    if (userLevel === 1) {
      return ["Vagas"];
    } else if (userLevel === 2) {
      return ["Vagas", "Cadastrar Vagas"];
    } else if (userLevel > 2) {
      return ["Painel","Vagas", "Cadastrar Vagas", "Gerenciar Usuários"];
    }
    return [];
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {!isLoggedIn && (
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              width: "100%",
              gap: 1,
            }}
          >
            <Button color="inherit" variant="outlined" onClick={handleOpenLoginModal}>
              Acessar
            </Button>
            <Button color="secondary" variant="contained">
              Cadastrar-se
            </Button>
          </Box>
        )}

        {isLoggedIn && (
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {getMenuItems().map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page.toLowerCase().replace(' ', '-')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        )}

        {isLoggedIn && (
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {getMenuItems().map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: "white", display: "block" }}
                component={Link}
                to={`/${page.toLowerCase().replace(' ', '-')}`}
              >
                {page}
              </Button>
            ))}
          </Box>
        )}

        <Box sx={{ flexGrow: 1, mx: 2 }}>
          <TextField
            placeholder="Search..."
            variant="outlined"
            size="small"
            sx={{
              bgcolor: "white",
              borderRadius: 1,
              width: { xs: "100%", sm: "300px" },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {!isLoggedIn ? (
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <Button color="inherit" variant="outlined" onClick={handleOpenLoginModal}>
              Acessar
            </Button>
            <Button color="secondary" variant="contained" onClick={handleOpenRegisterModal}>
              Cadastrar-se
            </Button>
          </Box>
        ) : (
          <div className="perfilBox">
            <div className="perfilPhoto"></div>
            <div className="perfilMenu">
              <ul>
                <Link to="/perfil">Perfil</Link>
                <li>Curriculo</li>
                <hr />
                <li onClick={logout}>Sair</li>
              </ul>
            </div>
          </div>
        )}

        <ModalLogin
          open={openLoginModal}
          onClose={handleCloseLoginModal}
          onLoginSuccess={handleLoginSuccess}
        />

        <ModalRegister 
          open={openRegisterModal}
          onClose={handleCloseLoginModal}
        />
      </Toolbar>
    </AppBar>
  );
}
