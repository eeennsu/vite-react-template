import { FC } from 'react'
import '@/lib/css/index.css'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowseRouterProvider } from './providers/browser-router'
import { TanstackQueryProvider } from './providers'

const App: FC = () => {
    return (
        <ErrorBoundary fallbackRender={({ error }) => <div>{error.message}</div>}>
            <TanstackQueryProvider>
                <BrowseRouterProvider />
            </TanstackQueryProvider>
        </ErrorBoundary>
    )
}

export default App
