import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button.tsx'
import { ExerciseCounter } from '@/components/exercise-counter.tsx'

interface ExerciseFormValues {
  weight: number
  reps: number
}

interface ExerciseFormProps {
  onSubmit: (data: ExerciseFormValues) => void
}

const ExerciseForm: FC<ExerciseFormProps> = ({ onSubmit }) => {
  const { handleSubmit, watch, setValue } = useForm<ExerciseFormValues>({
    defaultValues: {
      weight: 0,
      reps: 10,
    },
  })

  const handleFormSubmit = (data: ExerciseFormValues) => {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className={'flex gap-4'}>
        <ExerciseCounter
          title='Вес'
          value={watch('weight')}
          step={0.5}
          onChange={(value) => setValue('weight', value)}
        />

        <ExerciseCounter
          title='Повторы'
          value={watch('reps')}
          step={1}
          onChange={(value) => setValue('reps', value)}
        />
      </div>

      <Button type='submit' className='mt-2 w-full' size='lg' variant='outline'>
        Добавить
      </Button>
    </form>
  )
}

export default ExerciseForm
