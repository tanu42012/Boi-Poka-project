import React from 'react';
import {
    createBrowserRouter,
   
  } from "react-router";
import Root from '../Components/Pages/Root/Root';
import ErrorPage from '../Components/Pages/ErrorPage/ErrorPage';
import Home from '../Components/Pages/Home/Home';
import About from '../Components/Pages/About/About';
import BookDetails from '../Components/Pages/BookDetails/BookDetails';
import ReadList from '../Components/Pages/ReadList/ReadList';

  
export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index: true,
            loader:()=>fetch('/booksData.json'),
            path:'/',
            Component: Home,
        },
        {
            path:'/about',
            Component:About,
        },
        {
            path:'readList',
            loader:()=>fetch('/booksData.json'),
            Component: ReadList,
        },
        {
            path:'/bookDetails/:id',
            loader:()=>fetch('/booksData.json'),
            Component: BookDetails,
        },
        

      ]
    },
  ]);
  