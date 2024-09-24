import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className={'h-screen scroll-auto'}>
      <Outlet />
    </div>
  )
}

export default App
