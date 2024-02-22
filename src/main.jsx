import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Home from './pages/home/Home.jsx';
import Shop from './pages/Shop/Shop.jsx';
import Prodetails from './pages/productDetails/Prodetails'
import Login from './pages/registraction/Login'
import Signup from './pages/registraction/Signup'
// import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path="productdetails/:productId" element={<Prodetails />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
