import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App';
import BlogDetail from './pages/BlogDetail';
import './index.css';

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  </Router>
);
