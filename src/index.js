import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home.jsx';
import CadDespesa from './pages/cad-despesa/Cad-despesa.jsx';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/despesa/:idUrl" element={<CadDespesa />} />
    </Routes>
  </BrowserRouter>
);
