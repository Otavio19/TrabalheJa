import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Pages
import CadastrarVagas from "./pages/CadastrarVagas/index.jsx";
import Vagas from "./pages/Vagas/index.jsx";
import Vaga from "./pages/Vaga/index.jsx";
import Users from "./pages/Users/index.jsx";
import DashBoard from "./pages/Dashboard/index.jsx";
import SemPermissao from "./pages/SemPermissao/index.jsx";
import Perfil from "./pages/Perfil"

// Components
import ProtectedRoute from "./components/ProtectedRoute/index.jsx";
import Index from "./pages/Index/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: < Index/>
      },
      {
        path: "/painel",
        element: (
          <ProtectedRoute allowedLevels={[2, 3]}>
            <DashBoard />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cadastrar-vagas",
        element: (
          <ProtectedRoute allowedLevels={[2, 3]}>
            <CadastrarVagas />
          </ProtectedRoute>
        ),
      },
      {
        path: "/vagas",
        element: <Vagas />, // Página aberta para todos
      },
      {
        path: "/gerenciar-usuarios",
        element: (
          <ProtectedRoute allowedLevels={[3]}>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: "/perfil",
        element: (
            <Perfil />
        ),
      },
      {
        path: "/sem-permissao",
        element: <SemPermissao />,
      },
      {
        path: "/vaga/:id",
        element: <Vaga />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
