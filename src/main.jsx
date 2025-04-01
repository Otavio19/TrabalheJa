import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Pages
import CadastrarVagas from "./pages/CadastrarVagas/index.jsx";
import Vagas from "./pages/Vagas/index.jsx";
import Users from "./pages/Users/index.jsx";
import DashBoard from "./pages/Dashboard/index.jsx";
import SemPermissao from "./pages/SemPermissao/index.jsx";

// Components
import ProtectedRoute from "./components/ProtectedRoute/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "painel",
        element: (
          <ProtectedRoute allowedLevels={[2, 3]}>
            <DashBoard />
          </ProtectedRoute>
        ),
      },
      {
        path: "cadastrar-vagas",
        element: (
          <ProtectedRoute allowedLevels={[2, 3]}>
            <CadastrarVagas />
          </ProtectedRoute>
        ),
      },
      {
        path: "",
        element: <Vagas />, // Página aberta para todos
      },
      {
        path: "/vagas",
        element: <Vagas />, // Página aberta para todos
      },
      {
        path: "gerenciar-usuarios",
        element: (
          <ProtectedRoute allowedLevels={[3]}>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: "sem-permissao",
        element: <SemPermissao />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
