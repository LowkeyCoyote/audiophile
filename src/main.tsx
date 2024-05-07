import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '@pages/HomePage.tsx'
import CategoryPage from '@pages/CategoryPage.tsx'
import ProductPage from '@pages/ProductPage.tsx'



const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    children : [{
      path : '/',
      element : <HomePage/>
    },{
      path : '/category/:category',
      element : <CategoryPage />
    },{
      path : '/product/:id',
      element : <ProductPage />
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
