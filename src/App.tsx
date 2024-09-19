import './App.css'
import { Button } from '@/components/ui/button.tsx'
import { ChevronRightIcon } from '@radix-ui/react-icons'

function App() {
  return (
    <>
      <Button variant={'outline'} size={'icon'}>
        <ChevronRightIcon className='h-4 w-4' />
      </Button>
    </>
  )
}

export default App
