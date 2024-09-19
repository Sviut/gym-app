import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from '@/pages/error-page.tsx'

const router = createBrowserRouter([
  { errorElement: <ErrorPage /> },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/test',
        element: <div>test</div>,
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
