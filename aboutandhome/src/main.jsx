import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'
import AppRouts from './AppRouts/AppRouts'
import 'aos/dist/aos.css'; 
import AOS from 'aos';





AOS.init({ 
  duration: 1200, 
  once: true, 
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouts />
  </StrictMode>,
)






