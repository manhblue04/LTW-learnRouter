import React from 'react';
import LayoutDefault from '../layout/LayoutDefault/index';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import BlogList from '../pages/Blog/BlogList';
import BlogItem from '../pages/Blog/BlogItem';
import Login from '../pages/Login';
import RequireAuth from '../components/RequireAuth';

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "contact",
        element: (
          <RequireAuth>
            <Contact />
          </RequireAuth>
        )
      },
      {
        path: "blog",
        children: [
          {
            index: true,
            element: <BlogList />
          },
          {
            path: ":id",
            element: (
              <RequireAuth>
                <BlogItem />
              </RequireAuth>
            )
          }
        ]
      },
      { path: "login", element: <Login /> }
    ]
  }
];
