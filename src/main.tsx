import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from '@/pages/error-page.tsx'
import App from '@/App.tsx'
import ProgramById from '@/pages/program-by-id.tsx'
import Workout from '@/pages/workout.tsx'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/program/:id',
      element: <ProgramById />,
    },
    {
      path: '/workout/:id',
      element: <Workout />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
