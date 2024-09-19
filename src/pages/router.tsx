import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '@/pages/error-page.tsx'
import App from '@/App.tsx'

export const PAGES = {
  MAIN: {
    title: 'Main',
    path: '/',
  },
  PROGRAMS: {
    title: 'Programs',
    path: '/programs',
  },
} as const

export const router = createBrowserRouter([
  { errorElement: <ErrorPage /> },
  {
    path: PAGES.MAIN.path,
    element: <App />,
    children: [
      {
        path: PAGES.PROGRAMS.path,
        element: <div>{PAGES.PROGRAMS.title}</div>,
      },
    ],
  },
])
