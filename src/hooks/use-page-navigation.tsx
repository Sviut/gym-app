import { useLocation } from 'react-router-dom'
import { PAGES } from '@/pages/router.tsx'

export const usePageNavigation = () => {
  const { pathname } = useLocation()

  const isRootPage = pathname === PAGES.MAIN.path

  const currentRoute = Object.values(PAGES).find(
    ({ path }) => path === pathname
  )

  return { title: currentRoute?.title || 'Gym App', isRootPage }
}
