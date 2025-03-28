import './App.css';
import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes.jsx';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
