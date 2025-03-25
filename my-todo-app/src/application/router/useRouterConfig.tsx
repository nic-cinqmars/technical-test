import { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { routerRoot } from './router-root';
import ErrorBoundary from '../components/error-boundary';

export const useRouterConfig = () => {
  return useMemo(
    () => [
      {
        errorElement: <ErrorBoundary />,
        element: <Outlet />,
        children: [
          {
            element: <Outlet />,
            children: [...routerRoot()],
          },
          {
            path: '*',
            loader: ({ request }: { request: Request }) => {
              window.location.assign(request.url);
              return null;
            },
          },
        ],
      },
    ],
    []
  );
};
