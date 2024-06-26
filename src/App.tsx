import './styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import { router } from '@homework-task/router';

const queryClient = new QueryClient();

function App() {
    return (
        <main>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </main>
    );
}

export default App;
