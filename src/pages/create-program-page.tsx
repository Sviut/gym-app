import { Input } from '@/components/ui/input.tsx'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useFieldArray } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { v4 as uuid } from 'uuid'
import { Check, PlusCircle, Trash } from 'lucide-react'
import Header from '@/components/header.tsx'
import PageContainer from '@/layout/page-container.tsx'
import useLocalStorage from '@/hooks/use-local-storage.ts'
import { Exercise, Program, WorkoutData } from '@/types/workout-data.ts'
import { cn } from '@/lib/utils.ts'
import { useNavigate } from 'react-router-dom'
import { PAGES } from '@/pages/router.tsx'

const FormSchema = z.object({
  name: z.string().min(1, { message: 'Введите название тренировки' }),
  id: z.string(),
  exercises: z.array(
    z.object({
      name: z.string().min(1, { message: 'Введите название упражнения' }),
      id: z.string(),
    })
  ),
})

const initialValues: Program = {
  name: '',
  id: uuid(),
  workoutData: { order: [], exercisesById: {} },
}

const CreateProgramPage = () => {
  const navigate = useNavigate()
  const [program, setProgram] = useLocalStorage<Program>(
    'program',
    initialValues
  )

  const getDefaultValues = () => {
    const { id, name, workoutData } = program
    const exercises = workoutData.order.map(
      (id) => workoutData.exercisesById[id]
    )

    return {
      name,
      id,
      exercises,
    }
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: getDefaultValues(),
  })

  const onSubmit = ({ id, name, exercises }: z.infer<typeof FormSchema>) => {
    const exercisesById: { [key: string]: Exercise } = {}

    for (const exercise of exercises) {
      exercisesById[exercise.id] = { ...exercise, sets: [] }
    }

    const workoutData: WorkoutData = {
      order: exercises.map(({ id }) => id),
      exercisesById,
    }

    const program: Program = {
      id,
      name,
      workoutData,
    }

    setProgram(program)
    navigate(PAGES.PROGRAMS.path)
  }

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'exercises',
  })

  const addNewExercise = () => {
    append({ name: '', id: uuid() })
  }

  return (
    <>
      <Header
        isBackButton
        title={'Добавить тренировку'}
        actionButton={
          <Button variant={'ghost'} onClick={form.handleSubmit(onSubmit)}>
            <Check />
          </Button>
        }
      />
      <PageContainer isHeader>
        <Form {...form}>
          <form className='w-full space-y-6'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      autoComplete='off'
                      type='text'
                      placeholder='Название тренировки'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {fields.map((field, index) => (
              <FormField
                key={field.id}
                control={form.control}
                name={`exercises.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className={'flex items-center gap-2'}>
                        <Input
                          autoComplete={'off'}
                          type={'text'}
                          placeholder='Название упражнения'
                          {...field}
                        />

                        <Trash
                          className={cn(fields.length === 1 && 'invisible')}
                          size={30}
                          color={'red'}
                          onClick={() => remove(index)}
                        />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </form>
        </Form>

        <Button
          variant={'ghost'}
          size={'icon'}
          className={'m-auto mt-4 flex justify-center'}
        >
          <PlusCircle onClick={addNewExercise} color={'gray'} />
        </Button>
      </PageContainer>
    </>
  )
}

export default CreateProgramPage
