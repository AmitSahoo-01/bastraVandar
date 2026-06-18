import {createBrowserRouter} from 'react-router-dom';
import Register from '../features/auth/pages/Register';

export const routes = createBrowserRouter([
    {
        path:"/register",
        element:<Register/>
    },{
        path:"/",
        element:<h1>Home Page</h1>
    }
])