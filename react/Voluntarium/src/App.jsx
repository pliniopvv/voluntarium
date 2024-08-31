import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './view/Home/HomePage';
import LoginPage from './view/Login/LoginPage';
import "./index.css";
import PrivateRoutes from './shared/PrivateRoutes';
import BasePage from './view/Base/BasePage';
import PerfilPage from './view/Perfil/PerfilPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<BasePage />}>
            <Route path="/home" index element={<HomePage />} />
            <Route path="/perfil" index element={<PerfilPage />} />
            {/* <Route path="/" element={<Navigate to="home" replace />} /> */}
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
