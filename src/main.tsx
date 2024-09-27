import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from '@/pages/error-page.tsx'
import App from '@/App.tsx'
import ProgramById from '@/pages/program-by-id.tsx'
import Workout from '@/pages/workout/workout.tsx'
import { ProgramProvider } from '@/context/program-context.tsx'

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
      path: '/program/:programId/workout/:exerciseId',
      element: <Workout />,
    },
  ],
  { basename: import.meta.env.BASE_URL }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProgramProvider>
      <RouterProvider router={router} />
    </ProgramProvider>
  </StrictMode>
)
