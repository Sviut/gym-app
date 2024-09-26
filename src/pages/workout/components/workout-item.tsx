import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { FC } from 'react'
import { cn } from '@/lib/utils.ts'

export type SetValue = {
  weight: number
  reps: number
}

interface WorkoutItemProps {
  index: number
  prevValue?: SetValue
  value?: SetValue
}

const WorkoutItem: FC<WorkoutItemProps> = ({ prevValue, value, index }) => {
  return (
    <Card className={'flex min-h-16 min-w-24 items-center p-2'}>
      {index + 1} <Separator orientation={'vertical'} className={'mx-1'} />
      <div className={'flex flex-col justify-between'}>
        <div className={cn(!prevValue && 'invisible', 'flex text-xs')}>
          <div>{prevValue?.weight}</div>x<div>{prevValue?.reps}</div>
        </div>

        <div className={cn(!value && 'invisible', 'flex font-bold')}>
          <div>{value?.weight}</div>x<div>{value?.reps}</div>
        </div>
      </div>
    </Card>
  )
}

export default WorkoutItem
