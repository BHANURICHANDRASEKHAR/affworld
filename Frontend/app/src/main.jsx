import { createRoot } from 'react-dom/client'
import './index.css'
import Context from './Components/Context/Context.jsx'
import App from './App.jsx'
import {BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Context>
<App />
<ToastContainer />
</Context>
</BrowserRouter>
  ,
)
