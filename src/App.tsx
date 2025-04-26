import '@/lib/css/globals.css';
import ErrorPage from '@/pages/error/error-page';
import BrowserRouterProvider from '@/shared/utils/BrowserRouterProvider';
import TanstackQueryProvider from '@/shared/utils/TanstackQueryProvider';
import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const App: FC = () => {
  return (
    <TanstackQueryProvider>
      <ErrorBoundary fallbackRender={({ error }) => <ErrorPage error={error} />}>
        <BrowserRouterProvider />
      </ErrorBoundary>
    </TanstackQueryProvider>
  );
};

export default App;
