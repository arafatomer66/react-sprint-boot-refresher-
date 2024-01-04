import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Posts, { postLoader as postLoader} from './routes/Posts/Posts';
import NewPost, { action as postAction} from './routes/NewPost/NewPost';
import RootLayout from './routes/RootLayout';
import PostDetails, {loader as postDetailLoader} from './routes/PostDetail/PostDetail';
import Movies, { moviesLoader } from './routes/Movies/Movies';


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          path: "/",
          element: <Posts/>,
          loader: postLoader,
          children: [
            {
              path: "/create-post",
              element: <NewPost/>,
              action: postAction
            }
          ]
        },
        {
          path: "/movies",
          element: <Movies/>,
          loader: moviesLoader
        },
        {
          path: "/:id",
          element: <PostDetails/>,
          loader: postDetailLoader
        }
      ],
    }
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
