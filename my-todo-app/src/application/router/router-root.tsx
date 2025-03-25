import { HomePage } from '../view/HomePage';
import { ROUTES } from './routes';

export const routerRoot = () => [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
];
