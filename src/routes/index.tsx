import { createBrowserRouter } from "react-router";
import Auth from "../pages/Auth";
import Habits from "../pages/Habits";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Habits />
    },
    {
        path: '/entrar',
        element: <Login />
    },
    {
        path: '/autenticacao',
        element: <Auth />
    }
])

export default router