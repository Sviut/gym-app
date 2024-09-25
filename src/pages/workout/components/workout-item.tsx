import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { FC } from 'react'

interface WorkoutItemProps {
  index: number
  prevValue?: {
    weight: number
    count: number
  }
  value: {
    weight: number
    count: number
  }
}

const WorkoutItem: FC<WorkoutItemProps> = ({ prevValue, value, index }) => {
  return (
    <Card className={'flex min-h-16 min-w-24 items-center p-2'}>
      {index + 1} <Separator orientation={'vertical'} className={'mx-1'} />
      <div className={'flex flex-col justify-between'}>
        <div className={'flex text-xs'}>
          {prevValue && (
            <>
              <div>{prevValue.weight}</div>x<div>{prevValue.count}</div>
            </>
          )}
        </div>

        <div className={'flex font-bold'}>
          <>
            <div>{value.weight}</div>x<div>{value.count}</div>
          </>
        </div>
      </div>
    </Card>
  )
}

export default WorkoutItem
