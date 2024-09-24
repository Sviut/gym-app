import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '@/pages/error-page.tsx'
import App from '@/App.tsx'
import ProgramsPage from '@/pages/programs-page.tsx'
import CreateProgramPage from '@/pages/create-program-page.tsx'
import MainPage from './main-page'
import WorkoutDayPage from '@/pages/workout-day-page.tsx'

export const PAGES = {
  MAIN: {
    title: 'Main',
    path: '/',
  },
  PROGRAMS: {
    title: 'Тренировочные дни',
    path: '/programs',
  },
  CREATE_PROGRAM: {
    title: 'Добавить тренировку',
    path: '/programs/create',
  },
  WORKOUT_DAY: {
    path: '/workout',
  },
} as const

export const router = createBrowserRouter(
  [
    { errorElement: <ErrorPage /> },
    {
      path: PAGES.MAIN.path,
      element: <App />,
      children: [
        {
          path: PAGES.MAIN.path,
          element: <MainPage />,
        },
        {
          path: PAGES.PROGRAMS.path,
          element: <ProgramsPage />,
        },
        {
          path: PAGES.CREATE_PROGRAM.path,
          element: <CreateProgramPage />,
        },
        {
          path: PAGES.WORKOUT_DAY.path + '/:id',
          element: <WorkoutDayPage />,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
)
