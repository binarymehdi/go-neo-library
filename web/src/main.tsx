import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './theme';
import { Home } from './features/home/index';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BooksPage from './features/books/pages';

import { QueryClient, QueryClientProvider } from 'react-query';


const router = createBrowserRouter([
  {
    path: "/books",
    element: <BooksPage/>,
  },
  {
    path: "/",
    element: <Home />,
  }
]); 

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
      </ThemeProvider>
  </React.StrictMode>,
);