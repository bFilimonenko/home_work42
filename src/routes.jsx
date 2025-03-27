import { createBrowserRouter } from 'react-router';
import ContactsListPage from './pages/ContactsListPage';
import AddEditContactPage from './pages/AddEditContactPage';
import { MainLayout } from './layouts/MainLayout/index.js';
import { ContactsProvider } from './contexts/ConstactsContext/index.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/list',
        element: (
          <ContactsProvider>
            <ContactsListPage />
          </ContactsProvider>
        ),
      },
      {
        path: '/form',
        element: (
          <ContactsProvider>
            <AddEditContactPage />
          </ContactsProvider>
        ),
      },
      {
        path: '/*',
        element: <h1>No Match</h1>,
      },
    ],
  },
]);
