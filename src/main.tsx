import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import {RouterProvider ,createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './components/ErrorPage'
const router = createBrowserRouter([
  { 
    path: '/', 
    element: <div >root</div>,
    errorElement:<ErrorPage ></ErrorPage>},
  {
    path: '/1',
    element: <div>1</div>,
  }
]) 
const div = document.getElementById('root') as HTMLElement
const root = createRoot(div)
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
