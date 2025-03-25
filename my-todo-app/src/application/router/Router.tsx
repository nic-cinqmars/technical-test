import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useRouterConfig } from './useRouterConfig';

const Router = () => {
  const routerConfig = useRouterConfig();
  const router = createBrowserRouter(routerConfig);

  return <RouterProvider router={router} />;
};

export default Router;
