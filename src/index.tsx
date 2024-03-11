import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter} from "react-router-dom"
import Application from './Router'
import { UserDataProvider } from './core/context/userDataContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <UserDataProvider>
      <Application/>      
    </UserDataProvider>
  </BrowserRouter>
);


