import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';

//Pages
import RegisterJob from './pages/RegisterJob/index.jsx';
import Jobs from './pages/Jobs/index.jsx';
import Users from './pages/Users/index.jsx';
import DashBoard from './pages/Dashboard/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/cadastrar-vagas",
        element: <RegisterJob />,
      },
      {
        path: "/vagas",
        element: <Jobs />,
      },
      {
        path: "/gerenciar-usuários",
        element: <Users />
      },
      {
        path: "painel",
        element: <DashBoard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
