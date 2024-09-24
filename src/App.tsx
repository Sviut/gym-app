import ProgramCard from '@/components/program-card.tsx'

const PROGRAMS = [
  { id: '1', name: 'Тренировка А' },
  { id: '2', name: 'Тренировка B' },
  { id: '3', name: 'Тренировка C' },
]

const App = () => {
  return (
    <div className={'p-2'}>
      <div className={'flex flex-col gap-2'}>
        {PROGRAMS.map(({ id, name }) => (
          <ProgramCard name={name} key={id} />
        ))}
      </div>
    </div>
  )
}

export default App
