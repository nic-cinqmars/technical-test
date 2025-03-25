import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, Suspense } from 'react';

const App = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={null}>{children}</Suspense>
    </QueryClientProvider>
  );
};

export default App;
