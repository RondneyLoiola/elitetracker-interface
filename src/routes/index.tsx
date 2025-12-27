import { createBrowserRouter } from 'react-router';
import Auth from '../pages/Auth';
import Focus from '../pages/Focus';
import Habits from '../pages/Habits';
import Login from '../pages/Login';
import { PrivateRoute } from './PrivateRoutes';

const router = createBrowserRouter([
	{
		path: '/',
		element: <PrivateRoute component={<Habits />} />,
	},
	{
		path: '/foco',
		element: <PrivateRoute component={<Focus />} />,
	},
	{
		path: '/entrar',
		element: <Login />,
	},
	{
		path: '/autenticacao',
		element: <Auth />,
	},
]);

export default router;
