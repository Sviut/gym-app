import { FC } from 'react'
import { Card } from '@/components/ui/card.tsx'
import { Button } from '@/components/ui/button.tsx'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'

interface ExerciseCounterProps {
  title: string
  value: number
  step?: number
  onChange: (value: number) => void
}

export const ExerciseCounter: FC<ExerciseCounterProps> = ({
  title,
  value,
  step = 1,
  onChange,
}) => {
  const incrementCounter = () => {
    onChange(value + step)
  }

  const decrementCounter = () => {
    onChange(value - step)
  }

  return (
    <div className={'inline-flex flex-col'}>
      <div className={'text-center text-xs text-gray-400'}>{title}</div>
      <Card className={'flex gap-2 p-2'}>
        <Button variant={'ghost'} size={'icon'} onClick={decrementCounter}>
          <ArrowDown />
        </Button>
        <Input
          inputMode='numeric'
          className={'text-center'}
          value={value}
          onChange={(e) => onChange(+e.target.value)}
        />
        <Button variant={'ghost'} size={'icon'} onClick={incrementCounter}>
          <ArrowUp />
        </Button>
      </Card>
    </div>
  )
}
