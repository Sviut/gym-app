import './App.css'
import { Outlet } from 'react-router-dom'
import BaseLayout from '@/layout/base-layout.tsx'

function App() {
  return (
    <BaseLayout>
      <Outlet />
    </BaseLayout>
  )
}

export default App
