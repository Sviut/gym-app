import ProgramCard from '@/components/program-card.tsx'
import { useProgram } from '@/context/program-context.tsx'

const App = () => {
  const { programs } = useProgram()

  // setProgram([
  //   {
  //     id: '1',
  //     name: 'Тренировка А',
  //     exercises: [
  //       {
  //         id: '1',
  //         name: 'Жим на наклонной скамье',
  //         sets: [],
  //       },
  //       {
  //         id: '2',
  //         name: 'Тяга вертикального блока',
  //         sets: [],
  //       },
  //       {
  //         id: '3',
  //         name: 'Кувшин плечи',
  //         sets: [],
  //       },
  //       {
  //         id: '4',
  //         name: 'Разгибание ног',
  //         sets: [],
  //       },
  //     ],
  //   },
  // ])

  return (
    <div className={'p-2'}>
      <div className={'flex flex-col gap-2'}>
        {programs.map(({ id, name }) => (
          <ProgramCard name={name} id={id} key={id} />
        ))}
      </div>
    </div>
  )
}

export default App
