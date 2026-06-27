import { createBrowserRouter } from 'react-router-dom';
import Register from '../features/auth/pages/Register';
import Login from '../features/auth/pages/Login';
import CreateProduct from '../features/Products/pages/CreateProduct';
import Dashboard from '../features/Products/pages/Dashboard';

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
        path: "/seller",
        children:[
            {
                path:"/seller/create-product",
                element: <CreateProduct />
            },{
                path:"/seller/dashboard",
                element: <Dashboard />
            }
        ]
    }
])