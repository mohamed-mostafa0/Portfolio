import React from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './Components/Home/Home'
import CustomCursor from './Components/Common/CustomCursor'

export default function App() {

  const router = createBrowserRouter([
    {path:"/", element:<Home/>}
  ])
  return <>
    <CustomCursor />
    <RouterProvider router={router}></RouterProvider>
  </>
}
