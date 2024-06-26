import { createBrowserRouter } from 'react-router-dom';

import { Form } from '@homework-task/pages/Form';
import { Landing } from '@homework-task/pages/landing/Landing';
import { List } from '@homework-task/pages/List';
import { PageGeneratorExample } from '@homework-task/pages/SimplePage';
import { ROUTES } from '@homework-task/routes';

export const router = createBrowserRouter([
    { path: ROUTES.ROOT, element: <Landing /> },
    { path: ROUTES.LIST, element: <List /> },
    { path: ROUTES.FORM, element: <Form /> },
    { path: ROUTES.PAGE_GENERATOR, element: <PageGeneratorExample /> },
]);
