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
import { Check, PlusCircle, Trash } from 'lucide-react'
import Header from '@/components/header.tsx'
import PageContainer from '@/layout/page-container.tsx'

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
    name: 'tasks',
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
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
          </form>
        </Form>

        <Button
          variant={'ghost'}
          size={'icon'}
          className={'m-auto mt-4 flex justify-center'}
        >
          <PlusCircle onClick={() => append({ taskName: '' })} color={'gray'} />
        </Button>
      </PageContainer>
    </>
  )
}

export default CreateProgramPage
