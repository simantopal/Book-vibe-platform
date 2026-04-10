import { createBrowserRouter } from 'react-router';
import Mainlayout from '../layout/Mainlayout';
import Homepage from '../pages/homepage/Homepage';
import Books from '../pages/books/Books';
import ErrorPage from '../pages/errorpage/ErrorPage';
import BookDetails from '../pages/bookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path: "/books",
        element: <Books></Books>
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: () => fetch("/booksData.json")
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);