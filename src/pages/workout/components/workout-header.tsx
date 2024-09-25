import { FC } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface WorkoutHeaderProps {
  title: string
}

const WorkoutHeader: FC<WorkoutHeaderProps> = ({ title }) => {
  return (
    <div className={'flex items-center justify-between'}>
      <Button variant={'ghost'}>
        <ArrowLeft />
      </Button>
      <div>{title}</div>
      <Button variant={'ghost'}>
        <ArrowRight />
      </Button>
    </div>
  )
}

export default WorkoutHeader
