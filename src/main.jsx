import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PetsContextProvider } from './components/PetsContext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <PetsContextProvider> 
  
    <App />
  
  </PetsContextProvider>,
)
