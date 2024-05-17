import App from './App.tsx';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import HomePage from '@pages/HomePage.tsx';
import CategoryPage from '@pages/CategoryPage.tsx';
import ProductPage from '@pages/ProductPage.tsx';
import CheckoutPage from '@pages/CheckoutPage.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/category/:category',
                element: <CategoryPage />,
            },
            {
                path: '/product/:slug',
                element: <ProductPage />,
            },
            {
              path : '/checkout',
              element : <CheckoutPage />
            },
            {
              path : "*",
              element : <HomePage />
            }
        ],
    },
]);

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
