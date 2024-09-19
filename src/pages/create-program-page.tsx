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
import { Trash } from 'lucide-react'
import Header from '@/components/header.tsx'

// Схема валидации с массивом
const FormSchema = z.object({
  tasks: z.array(
    z.object({
      taskName: z.string().min(1, { message: 'Введите значение' }),
    })
  ),
})

const CreateProgramPage = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tasks: [{ taskName: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'tasks', // Массив с полями
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    // Место для отправки данных или уведомления
  }

  return (
    <>
      <Header title={'Добавить тренировку'} />
      <div className={''}>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full space-y-6'
          >
            {fields.map((field, index) => (
              <FormField
                key={field.id}
                control={form.control}
                name={`tasks.${index}.taskName`}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className={'flex items-center gap-2'}>
                        <Input
                          type={'text'}
                          placeholder='Название упражнения'
                          {...field}
                        />
                        <Trash
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

            {/* Кнопка для добавления новых инпутов */}
            <Button type='button' onClick={() => append({ taskName: '' })}>
              Add User
            </Button>

            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    </>
  )
}

export default CreateProgramPage
