import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Resources/css/custom.css';
import Routerss from './Routers/Routerss';
import { BrowserRouter } from 'react-router-dom';
import { AuthHandle } from './Context/Auth';
import { TaskContextHandle } from './Context/Task-Contect';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <AuthHandle>
    <TaskContextHandle>
    <Routerss/>
    </TaskContextHandle>
    </AuthHandle>  
  </BrowserRouter>
);
