import { FC, useState } from 'react'
import { Card } from '@/components/ui/card.tsx'
import { Button } from '@/components/ui/button.tsx'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'

interface ExerciseCounterProps {
  title: string
  initialValue: number
}

export const ExerciseCounter: FC<ExerciseCounterProps> = ({
  title,
  initialValue = 0,
}) => {
  const [counter, setCounter] = useState<number>(initialValue)

  const incrementCounter = () => setCounter((prevState) => (prevState += 0.5))
  const decrementCounter = () => setCounter((prevState) => (prevState -= 0.5))

  return (
    <div className={'inline-flex flex-col'}>
      <div className={'text-center text-xs text-gray-400'}>{title}</div>
      <Card className={'flex w-[80px] flex-col gap-2 p-2'}>
        <Button variant={'outline'} onClick={incrementCounter}>
          <ArrowUp />
        </Button>
        <Input
          inputMode='numeric'
          className={'text-center font-bold'}
          value={counter}
          onChange={(value) => setCounter(+value.target.value)}
        />
        <Button variant={'outline'} onClick={decrementCounter}>
          <ArrowDown />
        </Button>
      </Card>
    </div>
  )
}
