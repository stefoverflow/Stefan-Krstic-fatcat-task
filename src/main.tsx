import React from 'react';

import ReactDOM from 'react-dom/client';

import App from '@homework-task/App.tsx';

const rootElement: HTMLElement | null = document.getElementById('root');

if (!rootElement) {
    throw new Error(
        'Failed to find the root element. The application cannot start.'
    );
}

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
