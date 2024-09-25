import { FC, useState } from 'react'
import { Card } from '@/components/ui/card.tsx'
import { Button } from '@/components/ui/button.tsx'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'

interface ExerciseCounterProps {
  title: string
  initialValue?: number
  step?: number
}

export const ExerciseCounter: FC<ExerciseCounterProps> = ({
  title,
  initialValue = 0,
  step = 1,
}) => {
  const [counter, setCounter] = useState<number>(initialValue)

  const incrementCounter = () => setCounter((prevState) => (prevState += step))
  const decrementCounter = () => setCounter((prevState) => (prevState -= step))

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
          value={counter}
          onChange={(value) => setCounter(+value.target.value)}
        />
        <Button variant={'ghost'} size={'icon'} onClick={incrementCounter}>
          <ArrowUp />
        </Button>
      </Card>
    </div>
  )
}
