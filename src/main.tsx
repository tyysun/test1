import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import {RouterProvider ,createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/', element: <div >root</div> },
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
