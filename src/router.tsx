import { createBrowserRouter } from 'react-router-dom';

import { Form } from '@homework-task/components/form/Form';
import { Landing } from '@homework-task/components/landing/Landing';
import { List } from '@homework-task/components/list/List';
import { Page } from '@homework-task/components/page/Page';
import { ROUTES } from '@homework-task/routes';

export const router = createBrowserRouter([
    { path: ROUTES.ROOT, element: <Landing /> },
    { path: ROUTES.LIST, element: <List /> },
    { path: ROUTES.FORM, element: <Form /> },
    { path: ROUTES.PAGE_GENERATOR, element: <Page /> },
]);
