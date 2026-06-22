import { createBrowserRouter } from 'react-router-dom';
import Register from '../features/auth/pages/Register';
import Login from '../features/auth/pages/Login';
import CreateProduct from '../features/Products/pages/CreateProduct';

export const routes = createBrowserRouter([
    {
        path: "/register",
        element: <Register />
    }, {
        path: "/",
        element: <h1>Home Page</h1>
    }, {
        path: "/login",
        element: <Login />
    }, {
        path: "seller//create-product",
        element: <CreateProduct />
    }
])